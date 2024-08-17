
let response_cell = [];

for (let i = 1; i <= 5; i++){
	response_cell[i] = document.getElementById("response" + i);
}

let lives_cell = document.getElementById("lives");
let counter = document.getElementById("counter");

let given_counters = [];
let counter_cell = [];
for (let i = 0; i <= 10; i++){
	document.getElementById(i + "_button").addEventListener("click", function () {place_bet(i)});
	counter_cell[i] = document.getElementById(i + "_given");
	given_counters[i] = 0;
}

let lives_counters = [];
let lives_total = [];
let lives_counters_cell = [];
let lives_total_cell = [];
for (let i = 1; i <= 7; i++){
	lives_counters_cell[i] = document.getElementById(i + "_assessed");
	lives_total_cell[i] = document.getElementById(i + "_total");
	lives_counters[i] = 0;
	lives_total[i] = 0;
}

function update_tables(){
	for (let i = 1; i <= 7; i++){
		lives_counters_cell[i].innerText = lives_counters[i];
		lives_total_cell[i].innerText = lives_total[i];
	}
	for (let i = 0; i <= 10; i++){
		counter_cell[i].innerText = given_counters[i];
	}
}

document.getElementById("end_button").addEventListener("click", get_result);
document.getElementById("save_button").addEventListener("click", save_to_clipboard);
document.getElementById("load_button").addEventListener("click", load_from_clipboard);

let candidates = [];

/*
seed determination (the larger the seed, the more it will get put in front):
	(5, 6, 7)-lifers > (most 4, some 3, a little 2)-lifers
*/
for(let i = 0; i < contestants.length; i++){
	if(contestants[i] != undefined){
		let c = contestants[i];
		relative_ranks = [];
		rr_contestants = [0, 16607, 8623, 8062, 5626, 4016];
		rr_sum = 0
		for (let ep = 1; ep <= 5; ep++){
			relative_ranks[ep - 1] = 1 - (c["rank" + ep] - 1) / (rr_contestants[ep] - 1);
			rr_sum += relative_ranks[ep - 1]
		}
		relative_ranks.sort((a, b) => b - a); // sort in descending order
		if (c.lives5 >= 7){
			c.seedbase = 4700;
		}else if (c.lives5 >= 6){
			c.seedbase = 4700;
		}else if (c.lives5 >= 5){
			c.seedbase = 4600 + Math.max(0, (rr_sum - 3) * 50);
		}else if (c.lives5 >= 4){
			c.seedbase = 4300 + Math.max(0, (rr_sum - 3) * 250);
		}else{
			seed_1 = c.lives5 * 1000 // by lifes
			seed_2 = 4300 + Math.min(relative_ranks[0] * 100 + relative_ranks[1] * 100 - 190, 0) * 50;
			if(relative_ranks.at(-2) < 0){ // don't consider it if the contestant dnp'd at least twice
				seed_2 = 0
			}
			seed_3 = 0
			if (c.lives5 >= 3){
				seed_3 = 3300 + (rr_sum - 3) * 750;
			}
			seed_4 = 0 // added to avoid fatigue when assessing high-placement players
			if(Math.random() < 0.02){
				seed_4 = 4000 + Math.random() * 700
			}
			c.seedbase = Math.max(seed_1, seed_2, seed_3, seed_4);
		}
		c.seed = c.seedbase + 150 * Math.random();
		candidates.push(i);
		lives_total[c.lives5]++;
	}
}

candidates.sort((a, b) => contestants[b].seed - contestants[a].seed);

let current_idx = 0;

function get_candidate(){
	let new_candidate = contestants[candidates[current_idx]];
	if(new_candidate == undefined){
		get_result();
	}else{
		for(let i = 1; i <= 5; i++){
			response_cell[i].innerText = new_candidate["response" + i];
		}
		lives_cell.innerText = "This contestant have " + new_candidate["lives5"] + " live(s) currently.";
	}
	counter.innerText = current_idx + " contestants assessed";
}

function place_bet(bet){
	let c = contestants[candidates[current_idx]];
	c.chance = bet + 0.1 * c.lives5 + 0.001 * c.rr_sum;
	given_counters[bet]++;
	lives_counters[c.lives5]++;
	update_tables();
	current_idx++;
	get_candidate();
}

function result_sort_key(a, b){
	let result = contestants[b].chance - contestants[a].chance;
	if(result == 0){
		result = contestants[b].lives5 - contestants[a].lives5;
		if(result == 0){
			result = contestants[b].rr_sum - contestants[a].rr_sum;
		}
	}
	return result;
}

function alumni_sort_key(a, b){
	let result = contestants[b].lives5 - contestants[a].lives5;
	if(result == 0){
		result = contestants[a].name.localeCompare(contestants[b].name, 'en', { sensitivity: 'base' });
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
"#D6D3FF"
];

function get_result(){
	candidates.sort(result_sort_key);
	alumni = []
	for(let i = 0; i < 128; i++){
		alumni.push(candidates[i]);
	}
	alumni.sort(alumni_sort_key)
	let result_table = document.getElementById("result");
	result_table.innerHTML = '';
	for(let r = 0; r < 16; r ++){
		let new_row = result_table.insertRow(-1);
		for(let c = 0; c < 8; c ++){
			let new_cell = new_row.insertCell(-1);
			let new_text = document.createTextNode(contestants[alumni[r + c * 16]].name);
			new_cell.appendChild(new_text);
			new_cell.style.backgroundColor = color_list[contestants[alumni[r + c * 16]].lives5];
		}
	}
}

function reset_all(){
	for (let i = 0; i <= 10; i++){
		given_counters[i] = 0;
	}
	for (let i = 1; i <= 7; i++){
		lives_counters[i] = 0;
		lives_total[i] = 0;
	}
	for(let i = 0; i < contestants.length; i++){
		if(contestants[i] != undefined){
			let c = contestants[i];
			c.chance = 0;
			lives_total[c.lives5]++;
		}
	}
	current_idx = 0;
	update_tables();
}

function save_to_clipboard(){
	let text = "";
	for(let i = 0; i < candidates.length; i++){
		if(i != 0){
			text += ";";
		}
		let c = contestants[candidates[i]];
		text += candidates[i] + "," + c.chance;
	}
	navigator.clipboard.writeText(text);
	alert("Text copied to clipboard! You might want to paste it to some text editor and save it.");
}

function load_from_string(my_str){
	// parse the string
	parts = my_str.split(";")
	if(parts.length != candidates.length){
		alert("Failed to parse the text; Nothing changed, you can safely continue.");
	}else{
		reset_all();
		candidates = [];
		let chances = [];
		let bets = [];
		for(let i = 0; i < parts.length; i++){
			let chunks = parts[i].split(",");
			let idx = Number(chunks[0]);
			let chance = Number(chunks[1]);
			let bet = Math.floor(chance);
			candidates.push(idx);
			chances.push(chance);
			bets.push(bet);
		}
		while(chances[current_idx] > 0){
			place_bet(bets[current_idx]);
		}
	}
}

function load_from_clipboard(){
	let my_str = window.prompt("Paste the text you get from 'Save Progress to Clipboard' here:");
	load_from_string(my_str);
}


update_tables();
get_candidate();


