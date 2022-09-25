const valData = require("../data.json");

function listDistricts() {
  let returnDistricts = "";
  let comma = ", ";
  valData.valkretsar.forEach((district, i) => {
    if (i === valData.valkretsar.length - 1) comma = "";
    if (district.namn !== "undefined") returnDistricts += district.namn + comma;
  });
  return returnDistricts;
}

function districtResults(district) {
  let returnDistricts;
  let result = "";
  valData.valkretsar.forEach((element) => {
    if (element.namn.toLocaleLowerCase() === district.toLocaleLowerCase()) {
      element.rosterPaverkaMandat.partiroster.forEach((voteElement) => {
        result += `${voteElement.partiforkortning}: ${voteElement.antalRoster} (${voteElement.andelRoster})\n`;
      });
    }
  });
  returnDistricts = `${district}  \n${result}`;
  return returnDistricts;
}

//console.log(districtResults("Södermanlands län"));

function partyResults(party) {
  let result = "";
  valData.valkretsar.forEach((element) => {
    element.rosterPaverkaMandat.partiroster.forEach((voteElement) => {
      if (party === voteElement.partiforkortning) {
        result += `${element.namn}: ${voteElement.antalRoster} (${voteElement.andelRoster})\n`;
      }
    });
  });
  result = `Resultat för ${party} per valkrets:\n${result}`;
  return result;
}
console.log(partyResults("SD"));

//console.log(listDistricts());
// "Stockholms kommun, Stockholms län, Uppsala län, Södermanlands län, ..."


// => "Södermanlands län"
// => "M: 34 407 (19,2%)"
// => "C: 10 690 (6,0%)"
// => "L: 6 457 (3,6%)"
// => ...

//
// => "Resultat för MP per valkrets:"
// => "Stockholms kommun: 58 155 (10,1%)"
// => "Stockholms län: 40 141 (5,1%)"
// => "Uppsala län: 16 003 (6,7%)"
// => "Södermanlands län: 7 090 (4,0%)"

//console.log(procentResults("S"));
