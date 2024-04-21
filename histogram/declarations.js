
class Response {
	constructor(str) {
		let parts = str.split('\t');
		this.name = parts[0];
		this.entry = parts[1];
		if(this.entry == "###BLANK###"){
			this.entry = "";
		}
		this.rank = Number(parts[2]);
		this.score = Number(parts[3]);
		this.stdev = Number(parts[4]);
		this.category = undefined;
	}
}

let responses = []

