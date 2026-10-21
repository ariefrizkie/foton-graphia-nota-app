import { PlusIcon, PrinterIcon, X } from "lucide-react";
import Pelunasan from "./Pelunasan";
import { color } from "../../utils/dataColorLight";
import { useEffect, useState } from "react";

function ModalDetail({ modalClose, isOpen, nota }) {
  const [isLunas, setIsLunas] = useState(true);
  const [isPelunasanOpen, setIsPelunasanOpen] = useState(false);

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

  const handlePrint = () => {
    sessionStorage.setItem("print_data", JSON.stringify(nota));

    window.open("/print", "_blank");
  };
  return (
    <div
      id="modal-detail"
      className={`top-0 left-0 fixed z-10 flex items-center justify-center p-5 w-full h-full ${color.overlay}`}
      onClick={handleParentClose}
    >
      <div
        className={`w-130 max-w-full max-h-[88%] ${color.bgSurface} overflow-y-auto border ${color.border} rounded-2xl p-6`}
      >
        <div className="flex justify-between items-start mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`font-bold font-mono ${color.text}`}>
                {nota.kodeNota}
              </span>
              <span
                className={`text-xs text-center font-medium px-2.5 py-0.5 rounded-full shrink-0 ${nota.statusPembayaran == "Lunas" ? `${color.pos}` : `${color.neg}`}`}
              >
                {nota.statusPembayaran}
              </span>
              <span
                className={`text-xs text-center font-medium px-2.5 py-0.5 rounded-full shrink-0 ${nota.pengerjaan === "Selesai" ? `${color.pos}` : `${color.neg}`}`}
              >
                {nota.pengerjaan}
              </span>
            </div>
            <div className={`text-xs ${color.textMuted}`}>
              {nota.tanggalTransaksi}
            </div>
          </div>
          <button
            className={`${color.textMuted} text-lg leading-none cursor-pointer`}
            onClick={() => modalClose(false)}
          >
            <X />
          </button>
        </div>
        <div
          className={`grid grid-cols-2 gap-3 mb-5 p-3.5 rounded-xl ${color.bgSurfaceAlt}`}
        >
          <div>
            <div className={`text-xs ${color.textMuted}`}>Pelanggan</div>
            <div className={`text-sm ${color.text} font-medium`}>
              {nota.namaPelanggan}
            </div>
          </div>
          <div>
            <div className={`text-xs ${color.textMuted}`}>No. Telpon</div>
            <div
              className={`text-sm ${color.text} font-medium font-ibm-plex-mono`}
            >
              {nota.nomorTelepon}
            </div>
          </div>
          <div>
            <div className={`text-xs ${color.textMuted}`}>
              Tanggal Transaksi
            </div>
            <div className={`text-sm ${color.text} font-medium`}>
              {nota.tanggalTransaksi}
            </div>
          </div>
          <div>
            <div className={`text-xs ${color.textMuted}`}>Tanggal Selesai</div>
            <div className={`text-sm ${color.text} font-medium`}>
              {nota.tanggalSelesai}
            </div>
          </div>
        </div>
        <h4 className={`text-sm font-semibold mb-2 ${color.textMuted}`}>
          ITEM PESANAN
        </h4>
        <div className={`mb-4 border-t ${color.border}`}>
          {nota.items.map((item) => (
            <div
              key={item.id_item}
              className={`flex justify-between items-start gap-2 py-2.5 border-b ${color.border}`}
            >
              <div className="min-w-0 flex items-center">
                {item.status_item === "Dalam Proses" && (
                  <div className="mr-3">
                    <input type="checkbox" name="statusItem" id="statusItem" />
                  </div>
                )}
                <div>
                  <div
                    className={`text-sm ${item.status_item === "Selesai" ? color.textAccent1 : color.textAccent4}`}
                  >
                    {item.nama_barang}
                  </div>
                  <div className={`text-xs ${color.textMuted}`}>
                    {`(${
                      item.ukuran_p != undefined ? item.ukuran_p : item.ukuran
                    } x ${
                      item.ukuran_l != undefined ? item.ukuran_l : item.ukuran
                    } ${item.satuan_ukuran}), (${item.jumlah} ${item.satuan_jumlah}), (${item.harga_jual})`}
                  </div>
                </div>
              </div>
              <div
                className={`font-ibm-plex-mono text-sm shrink-0 ${color.text}`}
              >
                {`Rp. ${item.subtotal.toLocaleString("id-ID")}`}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-5 pt-1">
          <span className={`font-semibold text-sm ${color.text}`}>
            Total Pembayaran
          </span>
          <span className={`font-semibold text-lg ${color.text}`}>
            {`Rp. ${nota.total.toLocaleString("id-ID")}`}
          </span>
        </div>
        <h4 className={`text-xs font-semibold mb-2 ${color.textMuted}`}>
          RINCIAN PEMBAYARAN
        </h4>
        <div className="flex flex-col gap-1.5 mb-5 text-sm">
          <div className="flex justify-between">
            <span className={color.textMuted}>Cash</span>
            <span
              className={`font-ibm-plex-mono ${color.text}`}
            >{`Rp. ${nota.rincianPembayaran.cash.toLocaleString("id-ID")}`}</span>
          </div>
          <div className="flex justify-between">
            <span className={color.textMuted}>Transfer</span>
            <span
              className={`font-ibm-plex-mono ${color.text}`}
            >{`Rp. ${nota.rincianPembayaran.transfer.toLocaleString("id-ID")}`}</span>
          </div>
          <div className="flex justify-between">
            <span className={color.textMuted}>E-Wallet</span>
            <span
              className={`font-ibm-plex-mono ${color.text}`}
            >{`Rp. ${nota.rincianPembayaran.eWallet.toLocaleString("id-ID")}`}</span>
          </div>
          <div
            className={`flex justify-between pt-1.5 mt-1 border-t ${color.border}`}
          >
            <span className={`font-medium ${color.text}`}>Total Dibayar</span>
            <span
              className={`font-ibm-plex-mono ${color.text}`}
            >{`Rp. ${nota.dibayar.toLocaleString("id-ID")}`}</span>
          </div>
          <div className="flex justify-between">
            <span className={color.textMuted}>Sisa Tagihan</span>
            <span
              className={`font-ibm-plex-mono ${nota.sisaTagihan == 0 ? "text-light-pos dark:text-dark-pos" : "text-light-neg dark:text-dark-neg"}`}
            >{`Rp. ${nota.sisaTagihan.toLocaleString("id-ID")}`}</span>
          </div>
        </div>

        {nota.statusPembayaran === "Belum Lunas" && (
          <button
            className={`flex items-center justify-center gap-1 w-full mb-4 py-2.5 rounded-xl text-sm font-semibold ${color.neg} border cursor-pointer`}
            onClick={() => setIsPelunasanOpen(!isPelunasanOpen)}
          >
            <PlusIcon className="h-4 w-4" />
            Lanjutkan Pembayaran
          </button>
        )}

        {isPelunasanOpen && <Pelunasan />}

        <div className="flex gap-2">
          <button
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold ${color.bgSurfaceAlt} ${color.text} border ${color.border} cursor-pointer`}
            onClick={() => modalClose(false)}
          >
            Tutup
          </button>
          <button
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold ${color.accentPrimary} cursor-pointer`}
            onClick={handlePrint}
          >
            <PrinterIcon className="w-4 h-4" />
            Cetak Nota
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDetail;
