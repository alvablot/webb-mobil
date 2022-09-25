const valData = require("../data.json");

function getVotePercentage(party) {
  let result;
  valData.partiMandat.forEach((element) => {
    if (element.partiforkortning === party) {
      result = `${element.partibeteckning} ${element.antalMandat}`;
    }
  });
  return result;
}

function allMandates() {
  let mandates = [];
  valData.partiMandat.forEach((element, i) => {
    mandates[i] = `${element.partiforkortning}: ${element.antalMandat}, `;
  });
  return mandates.join("");
}

function calculateMandates(arr) {
  let allMan = 0;
  let manSum = 0;
  let comma = "";
  let text = "";
  arr.forEach((shortArr, i) => {
    if (i === shortArr.length + 1) comma = ":";
    valData.partiMandat.forEach((element) => {
      allMan += element.antalMandat / arr.length;
      if (shortArr === element.partiforkortning) {
        manSum += element.antalMandat;
        if (i > 0) comma = ", ";
        text += `${comma}${element.partiforkortning}`;
      }
    });
  });
  return `${text}: ${manSum} av ${Math.round(allMan)} totalt`;
}

//console.log(getVotePercentage("C"));
//console.log(allMandates());
console.log(calculateMandates(["C", "L", "KD", "M"]));
