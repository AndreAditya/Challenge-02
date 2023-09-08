const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function getTotalPenjualan(dataPenjualan) {
  // Validasi parameter
  if (typeof dataPenjualan != "object") {
    return "ERROR! : Invalid data type!";
  }
  // Validasi parameter
  if (!Array.isArray(dataPenjualan)) {
    return "ERROR! : Parameter harus berupa array!";
  }

  // Inisialisasi variabel untuk menghitung total penjualan
  let totalPenjualan = 0;

  // Iterasi melalui array dataPenjualan dan menjumlahkan properti dari totalTerjual
  for (const product of dataPenjualan) {
    if (typeof product.totalTerjual === "number") {
      totalPenjualan += product.totalTerjual;
    } else {
      return "ERROR! : Properti totalTerjual harus berupa angka!";
    }
  }

  // Mengembalikan total penjualan
  return totalPenjualan;
}

const totalPenjualan = getTotalPenjualan(dataPenjualanPakAldi);
// console.log(`Total Penjualan: ${totalPenjualan}`);
console.log("Total Penjualan :", totalPenjualan);
