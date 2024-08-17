
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

let rr_contestants = [0, 16607, 8623, 8062, 5626, 4016];
class Contestant {
	constructor(str) {
		let parts = str.split('\t');
		this.uuid = get_part(parts, 0);
		this.name = get_part(parts, 1);
		this.subtitle = get_part(parts, 2);
		for (let i = 1; i <= 5; i++){
			this["response" + i] = get_part(parts, i * 7 - 4);
			this["confessional" + i] = get_part(parts, i * 7 - 3);
			this["average" + i] = get_part(parts, i * 7 - 2, true);
			this["std_dev" + i] = get_part(parts, i * 7 - 1, true);
			this["vote_count" + i] = get_part(parts, i * 7, true);
			this["rank" + i] = get_part(parts, i * 7 + 1, true);
			this["lives" + i] = get_part(parts, i * 7 + 2, true);
		}
		this.chance = 0.0;
		this.seed = undefined;
		this.seedbase = undefined;
		let rr_sum = 0;
		let relative_ranks = [];
		for (let ep = 1; ep <= 5; ep++){
			relative_ranks[ep - 1] = 1 - (this["rank" + ep] - 1) / (rr_contestants[ep] - 1);
			rr_sum += relative_ranks[ep - 1]
		}
		this.rr_sum = rr_sum;
	}
}

let contestants = [];

