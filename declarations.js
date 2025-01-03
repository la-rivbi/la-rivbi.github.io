
function get_part(parts, idx, is_number = false){
	if (parts[idx] == "###BLANK###" || parts[idx] == undefined){
		if (is_number){
			return 0;
		} else {
			return "";
		}
	} else {
		if (is_number){
			return Number(parts[idx]);
		} else {
			return parts[idx];
		}
	} 
}

let rr_contestants = [0, 16607, 8623, 8062, 5626, 4016, 2767, 2152, 1479, 1095, 830];
let prize_ranks = [0, 830, 431, 403, 281, 201, 138, 108, 74, 55, 42];
let safe_ranks = [0, 8470, 4397, 4111, 2869, 2048, 1411, 1098, 754, 558, 423];
let total_eps = rr_contestants.length - 1;
class Contestant {
	constructor(str) {
		let parts = str.split('\t');
		this.uuid = get_part(parts, 0);
		this.name = get_part(parts, 1);
		this.subtitle = get_part(parts, 2);
		for (let i = 1; i <= total_eps; i++){
			this["response" + i] = get_part(parts, i * 7 - 4);
			this["confessional" + i] = get_part(parts, i * 7 - 3);
			this["average" + i] = get_part(parts, i * 7 - 2, true);
			this["std_dev" + i] = get_part(parts, i * 7 - 1, true);
			this["vote_count" + i] = get_part(parts, i * 7, true);
			this["rank" + i] = get_part(parts, i * 7 + 1, true);
			this["lives" + i] = get_part(parts, i * 7 + 2, true);
			this["rr" + i] = 1 - (this["rank" + i] - 1) / (rr_contestants[i] - 1);
		}
		this.chance = 0.0;
		this.seed = undefined;
		this.seedbase = undefined;
		let rr_sum = 0;
		let relative_ranks = [];
		for (let ep = 1; ep <= total_eps; ep++){
			if(this["rank" + ep] < rr_contestants[ep] + 1){ // the contestant dind't DNP this round
				relative_ranks[ep - 1] = 1 - (this["rank" + ep] - 1) / (rr_contestants[ep] - 1);
				rr_sum += relative_ranks[ep - 1]
			}
		}
		this.rr_sum = rr_sum;
	}

	get_current_lives(){
		return this["lives" + total_eps];
	}
}

let contestants_master = [];

