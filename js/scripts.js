var femaleNames = ['Marta', 'Kasia', 'Ania', 'Ola'];
var maleNames = ['Adam', 'Jan', 'Kazik', 'Stach'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';

if(allNames.indexOf(newName) === -1) {
		allNames.push(newName);
		console.log("Now we have new table: " + allNames + " with length " + allNames.length);
}
else  {
		console.log('The name already exist on table!!!');
}




