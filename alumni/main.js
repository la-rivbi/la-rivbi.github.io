

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
			for (let j = 0; j < candidates.length; j++){
				console.log(candidates[j]);
			}
		} else {
			result.push(candidates[0]);
		}
	}
	predictions.push([author, as_of, result]);
}


add_prediction("losered", "5B", ["4DJ","Purplegaze","scorb","sicto","Srim","Xylob","Yua","#1 s","Alternav","BubbleTii","Catw","Charito","Heronix","Ironn","italic","iTeo","Izzeee","J_d","956761d0-e8d6-4f5b-b0d3-72fb222c05bb","John D","JujuM","losered","milst","Onch","Owner of","PizzaS","RAMT","Raptarr","Ryan ST","ShadowF","Sparrowcat","StealthyS","tekh","whitecy","xXB","YoshiAw","~~~good","$Eev","ALITL","Amelia, A","ArnoobE","Azurite","cerese","cloverp","Cohaki","CringeCat","570f2536-86e6-4453-8280-c7d8e5f956e5","Daylune","Flare Dare","garf","Gman","goobrey","IMC","Juhm","leftl","MetaC","MineF","MoltenA","Moralit","namd","Nick Wh","notexi","oxii","PengiQ","PG2K","Rora_B","s83757","Shorky","Snoozingn","Tak A","taopy","tauttie","thanos","The Ilu","TieTie","TTGuy","X_Ry","<Px>","2 Laws","Adamanti","Alley%","chichi","Cosmeti","CrowB#","DogeB","363f7b55-13a6-4aa6-93fe-fb187ea835ff","Gizmote","Hazel C","Ixc","Julians","kitkaty","Koopa472","la r","LemonV","Maples","Meowi","Meptune","5696ca02-91dd-42ff-a8c2-bb5380e2b224","mrjellyf","Nerdy G","NorthEastB","Paintsp","Phant0","recc","Skippery45","Snowbled","Swims","Syro33","Thane","ThePinkB","Valeburge","Yonel","yoshik","aaronvx","avocadoe","cat cop","Darrest","Davoid","figgyc","LegendF","ShadowK","spooky.","thenamesh","Zettex","FishOnT","iRDM","Leopards","PlasmicT"]);

add_prediction("LemonVenom", "5B", ["4DJ","Purplegaze","scorb","sicto","Srim","Xylob","Yua","#1 s","Alternav","Catw","Ironn","italic","iTeo","J_d","John D","JujuM","losered","milster","Naslem","Onch","Owner of","RAMT","Stealthy","Twigg","whitec","xXB","Arnoob","Azurite","cerese","cloverp","Cohaki","CringeC","570f2536-86e6-4453-8280-c7d8e5f956e5","Deckardv","Gman","Juhm","Moralit","PaniniP","PengiQ","puzzlypug","Sanjay2","Snoozingn","Tak A","taopy","thanos","The Il","TieTie","Water Ch","Adamanti","Alley%","cashedc","Cosmeti","DatFatC","Jaki","Juliansl","Koopa4","KWX","LemonV","7149d1d9-d34e-4af9-aed5-992f90c4bbd6","Meowi","Mept","5696ca02-91dd-42ff-a8c2-bb5380e2b224","MrDell47","Nerdy G","noef","Paintspot","recc","Skippery45","sodiumhy","Syro33","Thane","tr_","Valeburger","Verigo","Yonel","eyB","figgyc","fryu","Graysand","GreenT","hydrogenc","Lolwut","Magnetty","Marisa L","MeLikeP","normalb","RyM","Sausiiie","spooky.","terminateds","thenamesh","Zettex","FishOnT","InteleonsI","iRDM","Jac4","Leopards","Nonexistential","PlasmicT","Wenyu"]);

add_prediction("aaronvx", "5B", ["4DJ","Purplegaze","scorb","sicto","Srim","Xylob","Yua","#1 s","#zac","Alternav","Blue Gelatin","Catw","Charito","Dawncy","Heronix","IceK","Ironn","italic","iTeo","J_d","956761d0-e8d6-4f5b-b0d3-72fb222c05bb","JujuM","losered","milster","Naslemi","Onch","Owner of","RAMT","Shardr","Sparrowc","StealthyS","Twiggy","whitec","xXB","Yume F","Algo.00","Arnoob","Azurite","cerese","cloverp","CringeC","570f2536-86e6-4453-8280-c7d8e5f956e5","Deckardv","Funo'","garf","Gman","gmo","IMC","Juhm","mazuat","MetaC","MoltenA","Moralit","notexi","PG2K","PsychoticS","Sanjay2","Snoozingn","Tak A","taopy","thanos w","TieTie","TTGuy","X_Ry","<Px>","2 L","60mo","ACN","Adamanti","alexa.f","Algotis","Alley%","AnEp","chichi","ConvexP","CosmetiC","DatF","363f7b55-13a6-4aa6-93fe-fb187ea835ff","Gizmote","hyfin","Ixc","JayTee","Juliansl","kaisle","kitkatyj","Koopa4","Maplesk","Meowi","Mept","5696ca02-91dd-42ff-a8c2-bb5380e2b224","MrDell4","MysteriousGrimR","nlcd","noef","Paintsp","Phant0","recc","SinisterS","Swimsw","Thane","TheMightyMidge","tr_","Valeburger","Xes","Zaff","aaronvx","avocadoe","awepi","bfboh","Darrest","Davoid","elevatorz","figgyc","fryuaj","GreenTree","MedioL","spooky.","thenamesh","Truttle1","Zettex","96 L","BestKP","FishOnT","iRDM","Leopardsun","Nonexistential","PlasmicT","Trenerd"]);


add_prediction("Pink man", "6B",
[
"4DJ", "Purplegaze", "scorb", "Yuak", "#za", "Charito", "iTeo", "956761d0-e8d6-4f5b-b0d3-72fb222c05bb", "John D", "sicto", "Srim", "Twigg", "whitecyc", "Xylob", "#1 s", /*"#zac", */"$Ee", "BubbleTii", "Catw", "Cohaki",
"Cpink", "570f2536-86e6-4453-8280-c7d8e5f956e5", "Donut C", "GrayThe", "IceKeyH", "indoorf", "italic1", "J_d", "JujuM", "losered", "milster08", "namdoy", "Owner o", "PaniniP", "pfysche", "Pink m", "Sparrowcat", "the op b", "Water C", "X_R",
"xXB", "YoshiA", "cloverp", "Deckardv", "Juhm", "Juliansl", "Lyrical T", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "MineF", "Naslemi", "nlcd", "One N", "oxii", "Paints", "PengiQ", "PG2K", "recc", "Snoozingn", "stone b", "Talinlol",
"taopy", "ThatPerson", "TieTie", "TrainGo", "TTGu", "2 L", "aaronvx","Alley%", "Brandy?", "chichi", "DerM", "363f7b55-13a6-4aa6-93fe-fb187ea835ff", "GreenieG", "GreenT", "Kaestra", "Koopa4", "7149d1d9-d34e-4af9-aed5-992f90c4bbd6", "NorthEastB", "RiccoB", "spooky.",
"Thane", "tr_", "Wilm", "Xes", "\"Dan.", "ACN", "cheezdoo", "Deficie", "FishO", "ilo ", "Meln", "MysteriousG", "ramen powder", "Strawburr", "terminateds", "Wildz", "96 L", "figgyc", "PlasmicT", "alexlion"
]);

add_prediction("hydrogencitrus", "7B",
[
"4DJ", "Purplegaze", "Xyloba", "956761d0-e8d6-4f5b-b0d3-72fb222c05bb", "Yuak", "scorb", "whitecy", "losered", "570f2536-86e6-4453-8280-c7d8e5f956e5", "namdoy",
"Twigg", "#za", "Srim", /*"Srim",*/ "ShadowF", "sicto", "John D", "X_R", "Snoozingn", "CringeC",
"ThatPerson", "#1 s", "Sparrowc", "italic177", "Arnoob", "Moralitea", "Yume F", "thanos w", "milster08", "Catw",
"$Eev", "RAMT", "iTe", "Cohaki", "Heronix", "xXB", "Cube4", "Gman", "YoshiAw", "TieTie",
"ecf2bba0-4cc1-4efd-9403-a1152050c32f", "aaronv", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "Juhm", "Juliansl", "Nerdy G", "Gizmote", "PengiQ", "cloverp", "TTGu",
"puzzlypugzl", "363f7b55-13a6-4aa6-93fe-fb187ea835ff", "Tak A", "Naslemi J", "cerese",  "smoov22", "9facbd1b-7f26-4f96-8076-2a48819627a1", "GreenT", "StealthyS", "IntersectingP", 
"hyfin", "MrDe", "ThePinkB", "EeveeL", "Verigo", "Hunter J", "LemonV", "Skippery", "stone bone", "normalb",
"Mept", "The Ilu", "taopy", "hamburgerhelp", "AnEpik", "FishO", "terminateds", "Zett", "BFBFan5", "spooky.",
"Niho", "Magnetty", "Alley%", "noef", "BOWLE", "7149d1d9-d34e-4af9-aed5-992f90c4bbd6", "7993b578-5696-44ad-a28a-dbc84aac5bef", "PriceTagF", "Leopards", "Zixi",
"girlbossed.", "Alternav", "SaddleB", "PlasmicT", "figgyc", "Wenyu", "hydrogenc", "minordill", "qoo", "96 L"
]);

add_prediction("iRDM", "7B",
[
"Xylob", "Snoozingn", "Purplegaze", "thanos", "TieT", "terminateds", "iRDM", "Owner o", "whitecyc", "losered",
"CringeC", "RAMT", "PlasmicT", "iTeo", "scorb", "John D", "Cohak", "Cpi", "Niho", "Koopa4",
"MrShr", "ThePinkB", "Unofficial S", "cerese", "sicto", "Catw", "Onch", "570f2536-86e6-4453-8280-c7d8e5f956e5", "#1 s", "Srim",
"Alley%", "xtr", "Zett", "Fred S", "thenamesh", "4DJ", "AnArt", "Jakiller", "Lyrical T", "PaniniP",
"normalb", "Reed", "WeirdK", "MeLikeP", "Ballam", "Graysan", "cashedcr", "Poop b", "SinisterS", "Meowi",
"Yuak", "JujuM", "Mept", "Twiggy", "RyM", "Norse C", "taopy", "Flasan", "Moralit", "Blue Gel",
"Ironnin", "Zixi", "96 L", "FishO", "figgyc", "StealthyS", "6d7b566c-ba48-4446-b5a3-d2a8552b8a69", "GreenT", "MetaCy", "Exasp",
"abug", "mrje", "namdoy", "DatF", "MrDell4", "X_R", "Lord of the", "Dawncy", "aaronv", "Hazel C",
"8feea67b-67f3-4a8a-8c07-e0001507665e", "xparty", "ArnoobE", "ultimate chiller", "cloverp", "Leopards", "#za", "nlcd", "DiamondSh", "RainbowK",
"GreenieG", "Orange Cary S", "eyB", "Paintsp", "qoo", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "oxii", "Juliansl", "\"Ky", "Weny"
]);

add_prediction("mazuat", "7B",
[
"#1 s", "4DJ", "96 L", "aaronv", "abugi", "AHumanI", "ALITL", "An Epic P", "AnEpik", "ArnoobE", "Azurite", "Blue Gela", "Brandy", "Catw", "cerese", "CloudySky",
"cloverp", "Cohaki", "ConvexP", "CringeC", "CrowB#", "Cube4", "Cygnus", "570f2536-86e6-4453-8280-c7d8e5f956e5", "DatFatC", "Deckardv", "363f7b55-13a6-4aa6-93fe-fb187ea835ff", "Evolt", "eyBH", "FishO", "fonda1515", "FROGL",
"Funo", "galactika", "geob", "Gizmote", "Gman", "gmo", "goobr", "GrayThe", "GreenieG", "GreenT", "HazelK", "HeartO", "Heronix", "HexaF", "horizontally spin", "IceK",
"iRDM", "italic177", "iTeo", "Ixc", "J_d", "956761d0-e8d6-4f5b-b0d3-72fb222c05bb", "John D", "Juhm", "JujuM", "Juliansl", "Kapco", "Koopa4", "la r", "lane", "LemonV", "Leopards",
"losered", "Lyrical T", "Maildr", "MarbleM", "mazuat", "Meowi", "Mercuri", "MetaC", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "MineFlex_B", "Moralitea", "MrDe", "Nerdy G", "Nihon", "Nindr", "nlcd",
"noef", "notex", "Onch", "One Ni", "OveCZ", "Paints", "PaniniP", "PengiQ", "PlasmicT", "PriceT", "Purplegaze", "Radio_", "RainbowK", "RAMT", "RetroCr", "Ryan ST",
"s.eptem", "scorb", "sicto", "SinisterS", "Slimb", "smoov2", "Snoozingn", "SooperH", "Sparrowc", "Srim", "StealthyS", "Suit Q", "taopy", "Tardist", "terminateds", "Tetrian22",
"thanos w", "ThatSh", "The Ilu", "the op ", "thenamesh", "ThePinkB", "TieTie", "tr_", "Twiggy", "whitecyc", "X_Ry", "xXB", "Xylob", "YellowE", "YoshiA", "Yuakim"
]);

add_prediction("Catworld", "7B",
[
"#1 s", "#z", "$Ee", "4DJ", "aaronv", "ALITL", "Alternav", "ArnoobE", "Blue Gelatin", "Catw",
"cerese", "Charito", "CloudySkyes", "cloverp", "Cohaki", "CringeC", "Cygnus", "570f2536-86e6-4453-8280-c7d8e5f956e5", "Deckardv", "Dumb S",
"ElevenWordsOfWow", "Exhalexa", "FishOnT", "FROGL", "Funo'", "galactika", "garf", "GreenieG", "ecf2bba0-4cc1-4efd-9403-a1152050c32f", "hyfin",
"IceKeyH", "IntersectingP", "iRDM", "italic1", "iTeo", "J_d", "956761d0-e8d6-4f5b-b0d3-72fb222c05bb", "Jakiller", "John D", "Jooj",
"Juhm", "JujuM", "Kiwiyum", "Koopa4", "la r", "losered", "Lyrical T", "9facbd1b-7f26-4f96-8076-2a48819627a1", "mazuat", "Meowi",
"Mept", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "Mikl P", "milster08", "MineFlex_B", "MoonMa", "Moralitea", "namdoy", "Nerdy G", "nlcd",
"Onch", "Owner of the P", "oxii", "PaniniP", "Parallel Paper", "PengiQ", "pfysche", "Purplegaze", "RainbowK", "RAMT",
"Ryan ST", "s.ep", "scorb", "ShadowF", "Shorky", "sicto", "SinisterS", "smoov22", "Snoozingn", "Sparrowc",
"spooky.p", "Srim", "St4rr", "StealthyS", "Tak A", "thanos w", "ThatPerson", "the op b", "ThePinkB", "TieTie", "TrainGoB", "Twiggy", "Twisted T", "Water Ch", "whitecyc", "Wilma", "X_Ry", "xXB", "Xyloba", "Yuakim"
]);

add_prediction("misch13vous", "8B",
[
"); D", "#1 s", "#za", "4DJ", "60mo", "aaronv", "ACN", "alexlion0", "Americatre", "amey", "Andym", "AnE", "Arnoo", "avocadoe", "Azurite",
"BananaF", "Bazinga_", "bladn", "Catw", "cerese", "chichi", "cloverp", "Cohaki", "Crafty7", "Crystal C",
"570f2536-86e6-4453-8280-c7d8e5f956e5", "DatF", "Deckardv", "363f7b55-13a6-4aa6-93fe-fb187ea835ff", "841f4227-afd8-4321-9404-f8a8d82e9e65", "figgyc", "FishOnT",
"fonda1", "Fred S", "fryu", "garf", "geob", "Gman", "goobr", "GreenTree",
"Hazel C", "HeartO", "iRDM", "italic1", "iTe", "Ixc", "956761d0-e8d6-4f5b-b0d3-72fb222c05bb", "Jakill",
"JCL K", "John D", "Josh /", "Juhm", "JujuM", "Julians", "JustAT",
"Koopa4", "kyushi", "la r", "LegendF", "Leopards", "losered", "Lpc", "Marisa L", "mazuat",
"MeLikeP", "Meowi", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "mikey sw", "MoltenA", "Moralitea", "multi", "MysteriousG",
"MythicalM", "Nerdy G", "Niho", "noef", "Nonexistential", "normalb", "nuthat", "Onch", "Owner of the P",
"Parallel Paper", "PCM", "Phant0", "PlasmicT", "pokeys", "Purplegaze", "RAMT", "random.", "recc", "Reselect",
"SaddleB", "scorb", "Shardren", "sicto", "SinisterSh",
"Snoozingn", "somsU", "Sparrowc", "Spicym", "spooky.", "Srim", "Swimswum", "Tak A", "Tantu",
"tautt", "terminateds", "Thane", "thanos w", "The Great And Mi", "the op", "TheMightyMidge", "TieTie",
"Timvideo3", "tr_", "Truttle1", "TTGuy", "Twiggy", "Verigold", "Whiffl", "whitecyc",
"X_Ry", "xXB", "Xyloba", "Yuakim", "Zaffr", "Zettex", "Zixi"
]);

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
			prediction_element.style.backgroundColor = color_list[c["lives" + predictions[j][1].slice(0, -1)]];
			if (predictions[j][2].includes(c)){
				favor += 1;
				prediction_element.appendChild(document.createTextNode("V"));
			}
			contestant_row.append(prediction_element);
		}
		if (favor > 0){
			favor_element.appendChild(document.createTextNode(favor));
			table_body.append(contestant_row);
		}
		c.favor = favor;
	}
}

draw_table((a) => 0);
