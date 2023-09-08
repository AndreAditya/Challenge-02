const getAngkaTerbesarKedua = (dataNumbers) => {
  // Validasi jika parameter tidak diberikan
  if (typeof dataNumbers === "undefined") {
    return "ERROR! : Tidak ada Parameter yang di-input";
  }

  // Validasi tipe data parameter
  if (!Array.isArray(dataNumbers)) {
    return "ERROR! : Parameter harus berupa array!";
  }

  // Validasi tipe data dalam array
  if (dataNumbers.some((item) => typeof item !== "number")) {
    return "ERROR! : Dalam array terdapat tipe data selain number";
  }

  // Menghapus duplikat dan sorting
  const uniqueNumbers = [...new Set(dataNumbers)]; // Menghapus duplikat angka
  uniqueNumbers.sort((a, b) => b - a); // Urutkan dalam urutan menurun (besar->kecil)

  // Cek angka terbesar kedua setelah melalui hps duplikat & sorting
  if (uniqueNumbers.length < 2) {
    return "ERROR! : Tidak ada angka terbesar kedua.";
  }

  return uniqueNumbers[1]; // Mengembalikan angka terbesar kedua/index ke-1, detelah melakukan sorting
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 10, 8];
const dataAngka2 = [9, 4, 7, 7, 4, "loh e", 3, 2, 8];
const dataAngka3 = [9, 9, 9, 9];
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(dataAngka2));
console.log(getAngkaTerbesarKedua(dataAngka3));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua({}));
console.log(getAngkaTerbesarKedua());
