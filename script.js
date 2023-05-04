var tips = [
	"MORGENSTRUN", 
	"LIL PEEP", 
	"LIL PUMP",
	"Нейромонах Феофан",
	"Princess Chelsea",
	"ЗЕМФИРА",
	"ДДТ",
	]

function getRandomTip() {
	return tips[Math.floor(Math.random() * tips.length)];
}

document.write(getRandomTip());



