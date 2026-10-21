import { PenLine, Trash } from "lucide-react";
import { color } from "../utils/dataColorLight";

const titleData = [
  { name: "No Nota", acc: "kodeNota", style: "min-w-24" },
  { name: "Pelanggan", acc: "namaPelanggan", style: "min-w-34" },
  { name: "Nama Pesanan", acc: "namaBarang", style: "min-w-68" },
  { name: "Jenis Pesanan", acc: "jenis", style: "min-w-34" },
  { name: "Total", acc: "total", style: "min-w-32" },
  {
    name: "Status",
    render: (row) => (
      <span
        className={`text-xs font-medium px-3 py-1 rounded-full ${row.statusPembayaran == "Lunas" ? `${color.pos}` : `${color.neg}`}`}
      >
        {row.statusPembayaran}
      </span>
    ),
    style: "min-w-34",
  },
  { name: "Tanggal Masuk", acc: "tanggalTransaksi", style: "min-w-32" },
  {
    name: "Pengerjaan",
    render: (row) => (
      <span
        className={`text-xs font-medium px-3 py-1 rounded-full ${row.pengerjaan == "Selesai" ? `${color.pos}` : `${color.neg}`}`}
      >
        {row.pengerjaan}
      </span>
    ),
    style: "min-w-34",
  },
];

const dataBody = [
  {
    kodeNota: "FG082026001",
    namaPelanggan: "Puntik Luar",
    namaBarang: "Spanduk Musdes",
    jenis: "Spanduk",
    total: "Rp. 75.000",
    statusPembayaran: "Lunas",
    tanggalTransaksi: "07 September 2026",
  },
  {
    kodeNota: "FG082026002",
    namaPelanggan: "Edi Darmanto",
    namaBarang: "Spanduk Posyandu",
    jenis: "Spanduk",
    total: "Rp. 50.000",
    statusPembayaran: "Belum Lunas",
    tanggalTransaksi: "08 September 2026",
  },
];

const dataItemNota = [
  { name: "No", acc: "no", style: "min-w-4" },
  { name: "Nama Barang", acc: "namaBarang", style: "min-w-36" },
  { name: "Jenis", acc: "jenis", style: "min-w-32" },
  { name: "Ukuran", acc: "ukuran", style: "min-w-28" },
  { name: "Jumlah", acc: "jumlah", style: "min-w-28" },
  { name: "Harga Beli", acc: "hargaBeli", style: "min-w-28" },
  { name: "Harga Jual", acc: "hargaJual", style: "min-w-28" },
  { name: "Subtotal", acc: "subtotal", style: "min-w-28" },
  { name: "Action", acc: "action", style: "min-w-6" },
];

const dataProduk = [
  {
    kodeProduk: "FGPRD001",
    namaProduk: "Spanduk",
    jenis: "Banner",
    satuanUkuran: "Meter",
    satuanJumlah: "Lembar",
    hargaBeli: 16000,
    hargaJual: 25000,
  },
  {
    kodeProduk: "FGPRD002",
    namaProduk: "Nota NCR",
    jenis: "Nota",
    satuanUkuran: "-",
    satuanJumlah: "Rim",
    hargaBeli: 120000,
    hargaJual: 140000,
  },
];

const jenisProduk = [
  "Digital Printing",
  "Sticker",
  "Card & Invitation",
  "Promotion",
  "Large Format",
  "Textile",
  "Stationary",
  "Merchandise",
  "Packaging",
  "Photo",
];

const satuanUkuranProduk = [
  "Meter",
  "Centimeter",
  "Milimeter",
  "A3",
  "A4",
  "A5",
];
const satuanJumlahProduk = ["Lembar", "Pcs", "Rim", "Box", "Set", "Buku"];

export {
  titleData,
  dataBody,
  dataItemNota,
  dataProduk,
  jenisProduk,
  satuanJumlahProduk,
  satuanUkuranProduk,
};
