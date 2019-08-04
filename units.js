var unitsBases = {
	'Крестьянин': {
		attack: 10,
		camp_attack: 10,
		range_attack: 0,
		def: 10,
		camp_def: 10,
		speed: 2,
		range: 1,
		visibility: 1.5,
	},
	'Ополченец': {
		attack: 20,
		camp_attack: 20,
		range_attack: 0,
		def: 15,
		camp_def: 15,
		speed: 4,
		range: 2,
		visibility: 2
	},
	'Легкий мечник': {
		attack: 30,
		camp_attack: 30,
		range_attack: 0,
		def: 30,
		camp_def: 30,
		speed: 5,
		range: 2,
		visibility: 2
	},
	'Мечник': {
		attack: 50,
		camp_attack: 50,
		range_attack: 0,
		def: 40,
		camp_def: 40,
		speed: 5,
		range: 2,
		visibility: 2
	},
	'Тяжелый мечник': {
		attack: 80,
		camp_attack: 80,
		range_attack: 0,
		def: 60,
		camp_def: 60,
		speed: 4,
		range: 2,
		visibility: 3
	},
	'Двуручный мечник': {
		attack: 100,
		camp_attack: 100,
		range_attack: 0,
		def: 30,
		camp_def: 30,
		speed: 4,
		range: 2,
		visibility: 3
	},	
	'Копейщик': {
		attack: 130,
		camp_attack: 130,
		range_attack: 10,
		def: 10,
		camp_def: 10,
		speed: 5,
		range: 2,
		visibility: 2
	},
	'Лучник': {
		attack: 50,
		camp_attack: 60,
		range_attack: 30,
		def: 10,
		camp_def: 10,
		speed: 6,
		range: 1,
		visibility: 1
	},
	'Арбалетчик': {
		attack: 80,
		camp_attack: 80,
		range_attack: 50,
		def: 20,
		camp_def: 20,
		speed: 5,
		range: 2,
		visibility: 2
	}, 
	'Разведчик': {
		attack: 30,
		camp_attack: 30,
		range_attack: 0,
		def: 20,
		camp_def: 20,
		speed: 7,
		range: 15,
		visibility: 0
	},
	'Охотник': {
		attack: 30,
		camp_attack: 40,
		range_attack: 5,
		def: 20,
		camp_def: 20,
		speed: 5,
		range: 10,
		visibility: 1
	},	
	'Лекарь': {
		attack: 5,
		camp_attack: 0,
		range_attack: 0,
		def: 5,
		camp_def: 5,
		speed: 5,
		range: 1,
		visibility: 1
	}, 	
	'Монах': {
		attack: 5,
		camp_attack: 10,
		range_attack: 0,
		def: 5,
		camp_def: 5,
		speed: 5,
		range: 1,
		visibility: 1
	},
	'Телега': {
		attack: 0,
		camp_attack: 100,
		range_attack: 0,
		def: 200,
		camp_def: 650,
		speed: 3,
		range: 1,
		visibility: 1
	}, 	
	'Повозка': {
		attack: 0,
		camp_attack: 150,
		range_attack: 0,
		def: 300,
		camp_def: 950,
		speed: 3,
		range: 1,
		visibility: 1
	}, 	
	'Бронированая повозка': {
		attack: 0,
		camp_attack: 200,
		range_attack: 0,
		def: 450,
		camp_def: 1300,
		speed: 3,
		range: 1,
		visibility: 1
	} 	
};

function getUnit(type, level) {
	var unit = {};
	unit.type = type;
	unit.level = level;
	
	var base = unitsBases[type];
	
	unit.attack     = base.attack * level;
	unit.camp_attack  = base.camp_attack * level;
	unit.range_attack = base.range_attack * level;
	unit.def        = base.def * level;
	unit.camp_def   = base.camp_def * level;
	unit.speed      = base.speed;
	unit.range      = base.range;
	unit.visibility = base.visibility;
	unit.cost       = Math.pow(base.attack + base.camp_attack + base.range_attack, 1.5) 
					+ Math.pow(base.def + base.camp_def, 1.4) 
					+ Math.pow(base.range_attack, 1.4)
					+ Math.pow(base.speed * 3, 1.1) 
					+ Math.pow(base.range * 3, 1.2) 
					- Math.pow(base.visibility * 2, 1.1);

	unit.cost       = Math.round(unit.cost * Math.pow(unit.level, 1.1) / 10);
	
	
	return unit;
}

