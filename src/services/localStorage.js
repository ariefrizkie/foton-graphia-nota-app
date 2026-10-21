function getDatabaseProduk() {
  return JSON.parse(localStorage.getItem("db_produk")) || [];
}
function getDatabaseNota() {
  return JSON.parse(localStorage.getItem("db_nota")) || [];
}
function getDatabaseItemsNota() {
  return JSON.parse(localStorage.getItem("db_items_nota")) || [];
}
function getDatabasePelanggan() {
  return JSON.parse(localStorage.getItem("db_pelanggan")) || [];
}
function getDatabasePembayaran() {
  return JSON.parse(localStorage.getItem("db_pembayaran")) || [];
}

export {
  getDatabaseNota,
  getDatabaseItemsNota,
  getDatabaseProduk,
  getDatabasePelanggan,
  getDatabasePembayaran,
};
