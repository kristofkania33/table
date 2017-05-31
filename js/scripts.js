var femaleNames = ['Marta', 'Kasia', 'Ania', 'Ola'];
var maleNames = ['Adam', 'Jan', 'Kazik', 'Stach'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';
allNames.push('newName');
var newOne = allNames.push(newName);

	if(allNames.indexOf(newName) === -1) {
		return "Now we have new table: " + allNames.push(newName) + " with lenght " + newOne;
	}
	else if(allNames.indexOf(newName) !=== -1) {
		return "The name can not be added because it is already	in table !!!";
	}