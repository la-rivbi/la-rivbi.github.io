function erf(x){
	// approximation taken from Wikipedia
	return Math.tanh(2 * (x + x * x * x * 11 / 123 ) / Math.sqrt(Math.PI));
}

function inv_erf(x) {
	// approximation taken from Vedder, J. D. (1987)
	let a = 993/880;
	let b = 89/880;
	let A = a / (3 * b);
	let B = 1 / (2 * b) * Math.atanh(x);
	return 2 * Math.sqrt(A) * Math.sinh(1 / 3 * Math.asinh(B * Math.pow(A, -1.5))) 
}

function random_gaussian(mean, stdev) {
	let y = Math.random();
	let z = Math.sqrt(2) * inv_erf(2 * y - 1);
	return mean + stdev * z;
}

let contestants = [];
let current_episode = total_eps + 1;
let life_cap = 100;

let round_mean = [0.00];
let round_stdevp = [0.00];
for (let ep = 1; ep <= total_eps; ep++){
	let round_contestants = contestants_master.filter((c) => (c["rank" + ep] <= rr_contestants[ep]));
	let scores = [];
	let total_score = 0.0;
	for (let i = 0; i < round_contestants.length; i++){
		let c = round_contestants[i];
		total_score += c["average" + ep];
	}
	round_mean.push(total_score / rr_contestants[ep]);
	let variance = 0.0;
	for (let i = 0; i < round_contestants.length; i++){
		let c = round_contestants[i];
		variance += (c["average" + ep] - round_mean[ep]) ** 2;
	}
	variance /= rr_contestants[ep];
	round_stdevp.push(Math.sqrt(variance));
}

function get_rank_rep(c, current_ep){
	let result = BigInt(0);
	let offset = BigInt(1);
	for (let ep = 1; ep <= current_ep; ep++) {
		result += BigInt(c["rank" + ep]) * offset;
		offset *= 100000n;
	}
	return result;
}

color_list = [
"#D7C6C6",
"#F2D4D4",
"#F4EBCA",
"#D4F2D7",
"#D2F3FB",
"#D1E9FF",
"#D3DFFF",
"#D6D3FF",
"#DFCAFF",
"#EFCAFF",
"#FFFFFF"
];

function to_str(num, decimal){
	return (Math.round(num * (10 ** decimal)) / (10 ** decimal)).toFixed(decimal);
}

function reset_simulation(){
	contestants = JSON.parse(JSON.stringify(contestants_master.filter((c) => (c.get_current_lives() > 0))));
	contestants.sort((a, b) => (get_rank_rep(a, total_eps) < get_rank_rep(b, total_eps)) ? -1 : 1);
    let table_body = document.getElementById("leaderboard");
    table_body.textContent = "";
	for (let i = 0; i < contestants.length; i++){
		let c = contestants[i];
		let dnp_count = 0;
		let sigma_sum = 0.0;
		for (let ep = 1; ep <= total_eps; ep++){
			if(c["rank" + ep] == rr_contestants[ep] + 1){ // the contestant DNP'd this round
				dnp_count += 1
				c["sigma" + ep] = Math.NaN;
			}else{
				c["sigma" + ep] = (c["average" + ep] - round_mean[ep]) / round_stdevp[ep];
				sigma_sum += c["sigma" + ep];
			}
		}
		c["mean"] = sigma_sum / (total_eps - dnp_count);
		let sq_error = 0;
		for (let ep = 1; ep <= total_eps; ep++){
			if(c["rank" + ep] == rr_contestants[ep] + 1){ // the contestant DNP'd this round
				// do nothing
			}else{
				sq_error += Math.pow(c["sigma" + ep] - c.mean, 2);
			}
		}
		c["stdev"] = Math.sqrt(sq_error / (total_eps - dnp_count - 1));
		c["dnp_rate"] = dnp_count / total_eps;
		c["prev_lives"] = c["lives" + total_eps];
		c["lives"] = c["lives" + total_eps];
		c.responses = 1;
	}
	current_episode = total_eps;
	life_cap = 10;
	// draw the current leaderboard
	for (let i = 0; i < contestants.length; i++){
		c = contestants[i];
		let table_row = document.createElement("tr");
		table_row.addEventListener("click", function () {show_contestant_data(i)});
		let rank_element = document.createElement("td");
		rank_element.appendChild(document.createTextNode(i + 1));
		let name_element = document.createElement("td");
		name_element.appendChild(document.createTextNode(c.name));
		let lives_element = document.createElement("td");
		lives_element.appendChild(document.createTextNode(c["lives" + total_eps]));
		let score_element = document.createElement("td");
		score_element.appendChild(document.createTextNode(c["rank" + total_eps] > rr_contestants[total_eps] ? "DNP" : to_str(c["sigma" + total_eps], 4)));
		lives_element.style.backgroundColor = color_list[c.lives];
		if(i < prize_ranks[total_eps]){
			table_row.setAttribute("class", "prize");
		}else if(i < safe_ranks[total_eps]){
			table_row.setAttribute("class", "safe");
		}else{
			table_row.setAttribute("class", "death");
		}
		table_row.append(rank_element, name_element, lives_element, score_element);
		table_body.append(table_row);
	}
}

reset_simulation();

function z_to_pertentile(z){
	// TODO
}

function show_contestant_data(idx){
	let c = contestants[idx];
	let text = "";
	text += "Contestant Name: " + c.name + "\n";
	text += "Contestant uuid: " + c.uuid + "\n";
	text += "Lives as of EWOW " + total_eps + ": " + c["lives" + total_eps] + "\n";
	for (let ep = total_eps + 1; ep <= Math.min(current_episode, c.final_ep == undefined ? 1e+30 : c.final_ep); ep++){
		text += "EWOW " + ep + ": ";
		if (c["rank" + ep] == "DNP"){
			text += "DNP'd";
			if (c["lives" + ep] < 1){
				text += ", Eliminated";
			} else {
				text += " (Lives: " + c["lives" + ep] + ")";
			}
		}else{
			text += "rank " + c["rank" + ep] + ", ";
			text += c["status" + ep] +  " ";
			if (c["lives" + ep] >= 1){
				text += "(Lives: " + c["lives" + ep] + ")";
			}
		}
		text += "\n";
	}
	alert(text);
}

function simulate_round () {
	current_episode += 1;
	// let everyone respond
	let response_count = 0;
	let alive_count = 0;
	for (let i = 0; i < contestants.length; i++){
		c = contestants[i];
		if (c.lives == 0){
			c["current_score"] = Number.NEGATIVE_INFINITY;
		} else if (Math.random() < c.dnp_rate){ // the contestant DNP'd
			c["current_score"] = -1e+30;
			alive_count += 1;
		} else {
			let scores = [];
			for (let r = 0; r < c.responses; r++){
				scores.push(random_gaussian(c.mean, c.stdev));
			}
			scores.sort((a, b) => b-a);
			c["current_score"] = scores[0];
			c["drp_score"] = scores[1];
			c["trp_score"] = scores[2];
			response_count += 1;
			alive_count += 1;
		}
	}
	contestants.sort((a, b) => b.current_score - a.current_score);
	let prize_spots = Math.round(response_count * 0.05);
	let safe_spots = Math.round(response_count * (current_episode >= 10 ? 0.51 : 0.51));
    let round_title = document.getElementById("counter");
    round_title.textContent = "Round " + current_episode + ": " + response_count + "/" + alive_count + " responded";
    let table_body = document.getElementById("leaderboard");
    table_body.textContent = "";
	for (let i = 0; i < contestants.length; i++){
		c = contestants[i];
		let table_row = document.createElement("tr");
		table_row.addEventListener("click", function () {show_contestant_data(i)});
		let rank_element = document.createElement("td");
		rank_element.appendChild(document.createTextNode(i + 1));
		let name_element = document.createElement("td");
		name_element.appendChild(document.createTextNode(c.name));
		let lives_element = document.createElement("td");
		let score_element = document.createElement("td");
		let score_text = "";
		if(c.lives == 0){
			score_text = "Eliminated R" + c.final_ep;
		}else if(c.current_score < -100000){
			score_text = "DNP";
			c["rank" + current_episode] = "DNP";
		}else{
			score_text = to_str(c.current_score, 4);
			c["rank" + current_episode] = i + 1;
			if(c.drp_score != undefined){
				score_text += " (DRP: " + to_str(c.drp_score, 4);
				if(c.trp_score != undefined){
					score_text += "; TRP: " + to_str(c.trp_score, 4) + "";
				}
				score_text += ")";
			}
		}

		score_element.appendChild(document.createTextNode(score_text));
		c.prev_lives = c.lives;
		c.responses = 1;
		if(c.prev_lives == 0){
			table_row.setAttribute("class", "already-dead");
		}else if(i < prize_spots){
			if(c.lives < life_cap && current_episode < 10){
				c.lives += 1;
			}
			if (current_episode >= 10){
				c.responses += 1;
			}
			table_row.setAttribute("class", "prize");
			c["status" + current_episode] = "Prized";
		}else if(i < safe_spots){
			// do nothing
			table_row.setAttribute("class", "safe");
			c["status" + current_episode] = "Survived";
		}else{
			c.lives -= 1;
			table_row.setAttribute("class", "death");
			if(c.lives == 0){
				c["final_ep"] = current_episode;
				c["status" + current_episode] = "Eliminated";
			} else {
				c["status" + current_episode] = "Lost";
			}
		}

		// life decay
		if(current_episode >= 10 && c.lives > 3) {
			c.lives -= 1
			c.responses += 1
		}

		c["lives" + current_episode] = c.lives;

		table_body.append(table_row);
		let lives_arrow = c.lives > c.prev_lives ? "\u2191 " : c.lives == c.prev_lives ? "\u2022 " : "\u2193 ";
		lives_element.appendChild(document.createTextNode(lives_arrow + c.lives));
		lives_element.style.backgroundColor = color_list[c.lives];
		table_row.append(rank_element, name_element, lives_element, score_element);
	}
}
//simulate_round();

document.getElementById("next_round").addEventListener("click", simulate_round);


