const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function informasiPenjualan(dataPenjualan) {
  // Validasi parameter
  if (!Array.isArray(dataPenjualan)) {
    return "ERROR! : Parameter harus berupa array!";
  }

  // Inisialisasi variabel untuk menghitung total keuntungan dan modal
  let totalPenjualan = 0; // ini total penjualan kotor (keseluruhan)
  let totalKeuntungan = 0; // ini keuntungan bersih
  let totalModal = 0;

  // Objek untuk menghitung total penjualan per penulis
  const penulisTotalPenjualan = {};

  // Loop melalui data penjualan
  for (const produk of dataPenjualan) {
    // Validasi tipe data objek dalam array
    if (
      typeof produk !== "object" ||
      !produk.hasOwnProperty("hargaBeli") ||
      !produk.hasOwnProperty("hargaJual") ||
      !produk.hasOwnProperty("totalTerjual")
    ) {
      return "error: Setiap objek dalam array harus memiliki properti hargaBeli, hargaJual, dan totalTerjual!";
    }

    // Menghitung total keuntungan dan modal
    totalPenjualan += produk.totalTerjual * produk.hargaJual;
    totalModal += produk.hargaBeli * (produk.totalTerjual + produk.sisaStok);
    totalKeuntungan +=
      produk.hargaJual * produk.totalTerjual -
      (produk.totalTerjual + produk.sisaStok) * produk.hargaBeli;
    // cara 2 totalKeuntungan -+ = totalPenjualan - totalModal

    // Menghitung total penjualan per penulis
    if (penulisTotalPenjualan.hasOwnProperty(produk.penulis)) {
      penulisTotalPenjualan[produk.penulis] += produk.totalTerjual;
    } else {
      penulisTotalPenjualan[produk.penulis] = produk.totalTerjual;
    }
  }

  // Menemukan produk buku terlaris
  let produkBukuTerlaris = "";
  let jumlahTerlaris = 0;

  for (const produk of dataPenjualan) {
    if (produk.totalTerjual > jumlahTerlaris) {
      produkBukuTerlaris = produk.namaProduk;
      jumlahTerlaris = produk.totalTerjual;
    }
  }

  // Menemukan penulis buku terlaris
  let penulisTerlaris = "";
  let penjualanTerlaris = 0;

  for (const penulis in penulisTotalPenjualan) {
    if (penulisTotalPenjualan[penulis] > penjualanTerlaris) {
      penulisTerlaris = penulis;
      penjualanTerlaris = penulisTotalPenjualan[penulis];
    }
  }

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(
    2
  );

  // Mengformat total keuntungan dan modal menjadi format rupiah
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const totalPenjualanRupiah = formatter.format(totalPenjualan);
  const totalModalRupiah = formatter.format(totalModal);
  const totalKeuntunganRupiah = formatter.format(totalKeuntungan);

  // Membuat objek hasil
  const hasil = {
    totalPenjualan: totalPenjualanRupiah,
    totalModal: totalModalRupiah,
    totalKeuntungan: totalKeuntunganRupiah,
    produkBukuTerlaris: produkBukuTerlaris,
    penulisTerlaris: penulisTerlaris,
    persentaseKeuntungan: `${persentaseKeuntungan}%`,
  };

  return hasil;
}

const infoPenjualan = informasiPenjualan(dataPenjualanNovel);
console.log(infoPenjualan);
