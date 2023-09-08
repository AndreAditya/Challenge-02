const checkTypeNumber = (givenNumber) => {
  // Validasi apakah parameter telah diinput
  if (typeof givenNumber == "undefined") {
    return "Error! :where is the parameter?";
  }

  // Validasi tipe data
  if (typeof givenNumber !== "number") {
    return "Error! :Invalid data type";
  }

  // Cek apakah angka genap atau ganjil
  if (givenNumber % 2 == 0) {
    return givenNumber + " adalah GENAP";
  } else {
    return givenNumber + " adalah GANJIL";
  }
};

console.log(checkTypeNumber(8));
console.log(checkTypeNumber(13));
console.log(checkTypeNumber("12"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber());
