

let contestants = contestants_master.filter(a => a);

let predictions = [];
function add_prediction(author, as_of, prediction){
	result = [];
	for (let i = 0; i < prediction.length; i++){
		let target = prediction[i];
		let candidates = contestants.filter((a) => a.name.startsWith(target));
		if (candidates.length == 0) {
			let candidates = contestants.filter((a) => a.uuid.startsWith(target));
			if (candidates.length == 0) {
				console.log("There aren't any contestant with name starting with " + target + "!");
			} else {
				result.push(candidates[0]);
			}
		} else if (candidates.length > 1) {
			console.log("There are " + candidates.length + " contestants with name starting with " + target + "!");
		} else {
			result.push(candidates[0]);
		}
	}
	predictions.push([author, as_of, result]);
}


add_prediction("losered", "5B", ["4DJ","Purplegaze","scorb","sicto","Srim","Xylob","Yua","#1 s","Alternav","BubbleTii","Catw","Charito","Heronix","Ironn","italic","iTeo","Izzeee","J_d","956761d0-e8d6-4f5b-b0d3-72fb222c05bb","John D","JujuM","losered","milst","Onch","Owner of","PizzaS","RAMT","Raptarr","Ryan ST","ShadowF","Sparrowcat","StealthyS","tekh","whitecy","xXB","YoshiAw","~~~good","$Eev","ALITL","Amelia, A","ArnoobE","Azurite","cerese","cloverp","Cohaki","CringeCat","570f2536-86e6-4453-8280-c7d8e5f956e5","Daylune","Flare Dare","garf","Gman","goobrey","IMC","Juhm","leftl","MetaC","MineF","MoltenA","Moralit","namd","Nick Wh","notexi","oxii","PengiQ","PG2K","Rora_B","s83757","Shorky","Snoozingn","Tak A","taopy","tauttie","thanos","The Ilu","TieTie","TTGuy","X_Ry","<Px>","2 Laws","Adamanti","Alley%","chichi","Cosmeti","CrowB#","DogeB","363f7b55-13a6-4aa6-93fe-fb187ea835ff","Gizmote","Hazel C","Ixc","Julians","kitkaty","Koopa472","la r","LemonV","Maples","Meowi","Meptune","5696ca02-91dd-42ff-a8c2-bb5380e2b224","mrjellyf","Nerdy G","NorthEastB","Paintsp","Phant0","recc","Skippery45","Snowbled","Swims","Syro33","Thane","ThePinkB","Valeburge","Yonel","yoshik","aaronvx","avocadoe","cat cop","Darrest","Davoid","figgyc","LegendF","ShadowK","spooky.","thenamesh","Zettex","FishOnT","iRDM","Leopards","PlasmicT"]);

add_prediction("LemonVenom", "5B", ["4DJ","Purplegaze","scorb","sicto","Srim","Xylob","Yua","#1 s","Alternav","Catw","Ironn","italic","iTeo","J_d","John D","JujuM","losered","milster","Naslem","Onch","Owner of","RAMT","Stealthy","Twigg","whitec","xXB","Arnoob","Azurite","cerese","cloverp","Cohaki","CringeC","570f2536-86e6-4453-8280-c7d8e5f956e5","Deckardv","Gman","Juhm","Moralit","PaniniP","PengiQ","puzzlypug","Sanjay2","Snoozingn","Tak A","taopy","thanos","The Il","TieTie","Water Ch","Adamanti","Alley%","cashedc","Cosmeti","DatFatC","Jaki","Juliansl","Koopa4","KWX","LemonV","7149d1d9-d34e-4af9-aed5-992f90c4bbd6","Meowi","Mept","5696ca02-91dd-42ff-a8c2-bb5380e2b224","MrDell47","Nerdy G","noef","Paintspot","recc","Skippery45","sodiumhy","Syro33","Thane","tr_","Valeburger","Verigo","Yonel","eyB","figgyc","fryu","Graysand","GreenT","hydrogenc","Lolwut","Magnetty B","Marisa L","MeLikeP","normalb","RyM","Sausiiie","spooky.","terminateds","thenamesh","Zettex","FishOnT","InteleonsI","iRDM","Jac4","Leopards","Nonexistential","PlasmicT","Wenyu"]);

add_prediction("aaronvx", "5B", ["4DJ","Purplegaze","scorb","sicto","Srim","Xylob","Yua","#1 s","#zac","Alternav","Blue Gelatin","Catw","Charito","Dawncy","Heronix","IceK","Ironn","italic","iTeo","J_d","956761d0-e8d6-4f5b-b0d3-72fb222c05bb","JujuM","losered","milster","Naslemi","Onch","Owner of","RAMT","Shardr","Sparrowc","StealthyS","Twiggy","whitec","xXB","Yume F","Algo.00","Arnoob","Azurite","cerese","cloverp","CringeC","570f2536-86e6-4453-8280-c7d8e5f956e5","Deckardv","Funo'","garf","Gman","gmo","IMC","Juhm","mazuat","MetaC","MoltenA","Moralit","notexi","PG2K","PsychoticS","Sanjay2","Snoozingn","Tak A","taopy","thanos w","TieTie","TTGuy","X_Ry","<Px>","2 L","60mo","ACN","Adamanti","alexa.f","Algotis","Alley%","AnEp","chichi","ConvexP","CosmetiC","DatF","363f7b55-13a6-4aa6-93fe-fb187ea835ff","Gizmote","hyfin","Ixc","JayTee","Juliansl","kaisle","kitkatyj","Koopa4","Maplesk","Meowi","Mept","5696ca02-91dd-42ff-a8c2-bb5380e2b224","MrDell4","MysteriousGrimR","nlcd","noef","Paintsp","Phant0","recc","SinisterS","Swimsw","Thane","TheMightyMidge","tr_","Valeburger","Xes","Zaff","aaronvx","avocadoe","awepi","bfboh","Darrest","Davoid","elevatorz","figgyc","fryuaj","GreenTree","MedioL","spooky.","thenamesh","Truttle1","Zettex","96 L","BestKP","FishOnT","iRDM","Leopardsun","Nonexistential","PlasmicT","Trenerd"]);


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
"#FFFFFF"
];

let table_head = document.getElementById("predictions");
let table_body = document.getElementById("contestants");
let table_toprow = document.createElement("tr");
let table_secondrow = document.createElement("tr");
table_head.append(table_toprow);
table_head.append(table_secondrow);
let top_element = document.createElement("th");
top_element.appendChild(document.createTextNode("Contestant"));
top_element.setAttribute("rowspan", 2);
top_element.addEventListener("click", function () {draw_table((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()));});
table_toprow.append(top_element)
let status_element = document.createElement("th");
status_element.setAttribute("rowspan", 2);
status_element.appendChild(document.createTextNode("Lives"));
status_element.addEventListener("click", function () {draw_table((a, b) => (a.get_current_lives() < b.get_current_lives()));});
table_toprow.append(status_element)
let favor_element = document.createElement("th");
favor_element.setAttribute("rowspan", 2);
favor_element.appendChild(document.createTextNode("#"));
favor_element.addEventListener("click", function () {draw_table((a, b) => (a.favor < b.favor));});
table_toprow.append(favor_element)
/*
let blank_element1 = document.createElement("th");
let blank_element2 = document.createElement("th");
let blank_element3 = document.createElement("th");
table_secondrow.append(blank_element1)
table_secondrow.append(blank_element2)
table_secondrow.append(blank_element3)
*/

for (let i = 0; i < predictions.length; i++){
	let p = predictions[i];
	let name_element = document.createElement("th");
	name_element.appendChild(document.createTextNode(p[0] + " (" + p[1] + ")"));
	name_element.addEventListener("click", function () {draw_table((a, b) => ((p[2].includes(a) ? p[2].indexOf(a) : 16608) > (p[2].includes(b) ? p[2].indexOf(b) : 16608)));});
	table_toprow.append(name_element)
	let count_element = document.createElement("th");
	count_element.appendChild(document.createTextNode(p[2].length));
	count_element.addEventListener("click", function () {draw_table((a, b) => ((p[2].includes(a) ? p[2].indexOf(a) : 16608) > (p[2].includes(b) ? p[2].indexOf(b) : 16608)));});
	table_secondrow.append(count_element)
}

function draw_table(cmp_func){
	contestants.sort(cmp_func);
	table_body.innerHTML = "";
	for (let i = 0; i < contestants.length; i++){
		let contestant_row = document.createElement("tr");
		let c = contestants[i];
		contestant_row.style.backgroundColor = color_list[c.get_current_lives()];
		let name_element = document.createElement("td");
		name_element.appendChild(document.createTextNode(c.name));
		contestant_row.append(name_element)
		let lives_element = document.createElement("td");
		lives_element.appendChild(document.createTextNode(c.get_current_lives()));
		contestant_row.append(lives_element)
		let favor = 0;
		let favor_element = document.createElement("td");
		contestant_row.append(favor_element)
		for (let j = 0; j < predictions.length; j++){
			let prediction_element = document.createElement("td");
			if (predictions[j][2].includes(c)){
				favor += 1;
				let prediction_element = document.createElement("td");
				prediction_element.appendChild(document.createTextNode("V"));
				contestant_row.append(prediction_element);
			} else {
				let prediction_element = document.createElement("td");
				contestant_row.append(prediction_element);
			}
		}
		if (favor > 0){
			favor_element.appendChild(document.createTextNode(favor));
			table_body.append(contestant_row);
		}
		c.favor = favor;
	}
}

draw_table((a) => 0);
