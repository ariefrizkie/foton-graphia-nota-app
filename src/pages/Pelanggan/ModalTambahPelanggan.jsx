import { color } from "../../utils/dataColorLight";
import { X } from "lucide-react";
import FormPelanggan from "./FormPelanggan";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../services/useLocalStorage";

function ModalTambahPelanggan({ modalClose, isOpen, onSimpan }) {
  const [dbPelanggan, setDbPelanggan] = useLocalStorage("db_pelanggan", []);
  const [pelangganData, setPelangganData] = useState({
    kodePelanggan: "",
    namaPelanggan: "",
    nomorTelepon: "",
    alamat: "",
  });

  const generateIdCustomer = (dataCustomer) => {
    const prefix = "FGCUST";

    const customerTerakhir = dataCustomer.filter(
      (customer) =>
        customer.kode_customer && customer.kode_customer.startsWith(prefix),
    );

    const nextNumber = String(customerTerakhir.length + 1).padStart(4, "0");

    return `${prefix}${nextNumber}`;
  };

  useEffect(() => {
    if (isOpen) {
      setPelangganData({
        kodePelanggan: generateIdCustomer(dbPelanggan),
        namaPelanggan: "",
        nomorTelepon: "",
        alamat: "",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        modalClose(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, modalClose]);

  if (!isOpen) return null;

  const handleParentClose = (e) => {
    if (e.target === e.currentTarget) modalClose(false);
  };

  const handlePelangganChange = (e) => {
    const { name, value } = e.target;
    setPelangganData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSimpanPelanggan = () => {
    const dataPelangganBaru = {
      id_customer: Date.now() + Math.random(),
      kode_customer: pelangganData.kodePelanggan,
      nama_customer: pelangganData.namaPelanggan,
      nomor_telepon: pelangganData.nomorTelepon,
      alamat: pelangganData.alamat,
      total_belanja: 0,
      total_transaksi: 0,
    };

    onSimpan(dataPelangganBaru);

    alert("Data Pelanggan berhasil ditambahkan");
    modalClose(false);
  };

  return (
    <div
      id="modal-pelanggan"
      className={`top-0 left-0 fixed z-10 flex items-center justify-center p-5 w-full h-full ${color.overlay}`}
      onClick={handleParentClose}
    >
      <div
        className={`w-110 max-w-full max-h-[95%] ${color.bgSurface} overflow-y-auto border ${color.border} rounded-2xl p-6`}
      >
        <div className={`flex justify-between items-center mb-5 ${color.text}`}>
          <h3 className="font-semibold">Tambah Pelanggan</h3>

          <button
            className={`text-lg leading-none ${color.textMuted} cursor-pointer`}
            onClick={() => modalClose(false)}
          >
            <X />
          </button>
        </div>
        <FormPelanggan
          pelangganData={pelangganData}
          handleChange={handlePelangganChange}
        />
        <div className="flex gap-2 mt-6">
          <button
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold ${color.bgSurfaceAlt} ${color.text} border ${color.border} cursor-pointer`}
            onClick={() => modalClose(false)}
          >
            Batal
          </button>
          <button
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold ${color.accentPrimary} border ${color.border} cursor-pointer`}
            onClick={handleSimpanPelanggan}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalTambahPelanggan;
