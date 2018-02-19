var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
var textArr = text.split(" ");
textArr.splice(0, 1, dinosaurUpperCased);
var textArrString = textArr.join(" ");
var partOfTextArrString = textArrString.slice(0,textArrString.length/2);
console.log(partOfTextArrString);