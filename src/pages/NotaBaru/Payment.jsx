import { X } from "lucide-react";
import { color } from "../../utils/dataColorLight";
import { useEffect } from "react";

function Payment({
  closeModal,
  isOpen,
  totalPembayaran,
  dataPayment,
  handlePayment,
  totalDibayar,
  sisaTagihan,
  statusPembayaran,
  handleSimpanData,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const parentClose = (e) => {
    if (e.target === e.currentTarget) closeModal(false);
  };
  return (
    <div
      className={`absolute bg-light-bg/80 dark:bg-dark-bg/60 h-screen w-full flex justify-center items-center`}
      onClick={parentClose}
    >
      <div
        className={`${color.bgSurface} p-6 rounded-xl border ${color.border} w-100 max-w-[92%]`}
      >
        <div className=" flex justify-between items-center mb-5">
          <h3 className={`font-semibold ${color.text}`}>Pembayaran</h3>
          <button
            className={`text-lg leading-none ${color.textMuted} cursor-pointer`}
            onClick={() => closeModal(false)}
          >
            <X />
          </button>
        </div>
        <div
          className={`flex justify-between text-sm mb-4 pb-2 border-b px-2 ${color.border} ${color.textMuted}`}
        >
          <span>Total Tagihan</span>
          <span className="font-semibold">{`Rp. ${totalPembayaran.toLocaleString("id-ID")}`}</span>
        </div>
        <div className="flex flex-col gap-3.5 mb-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="cash"
              className={`text-sm font-medium ${color.textMuted}`}
            >
              Cash
            </label>
            <span className={`flex gap-1.5 items-center ${color.text}`}>
              Rp.
              <input
                type="number"
                name="cash"
                id="cash"
                className={`${color.bgSurface} border ${color.border} rounded-lg py-2 px-3 text-sm ${color.text} w-full`}
                value={dataPayment.cash}
                onChange={handlePayment}
              />
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="transfer"
              className={`text-sm font-medium ${color.textMuted}`}
            >
              Transfer
            </label>
            <span className={`flex gap-1.5 items-center ${color.text}`}>
              Rp.
              <input
                type="number"
                name="transfer"
                id="transfer"
                className={`${color.bgSurface} border ${color.border} rounded-lg py-2 px-3 text-sm ${color.text} w-full`}
                value={dataPayment.transfer}
                onChange={handlePayment}
              />
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="eWallet"
              className={`text-sm font-medium ${color.textMuted}`}
            >
              E-Wallet
            </label>
            <span className={`flex gap-1.5 items-center ${color.text}`}>
              Rp.
              <input
                type="number"
                name="eWallet"
                id="eWallet"
                className={`${color.bgSurface} border ${color.border} rounded-lg py-2 px-3 text-sm ${color.text} w-full`}
                value={dataPayment.eWallet}
                onChange={handlePayment}
              />
            </span>
          </div>
        </div>
        <div
          className={`flex justify-between text-sm mb-1.5 ${color.textMuted}`}
        >
          <span>Total Dibayar</span>
          <span>{`Rp. ${totalDibayar.toLocaleString("id-ID")}`}</span>
        </div>
        <div className={`flex justify-between text-sm mb-4 ${color.textMuted}`}>
          <span>Sisa Tagihan</span>
          <span>{`Rp. ${sisaTagihan.toLocaleString("id-ID")}`}</span>
        </div>
        <div
          className={`flex items-center justify-between text-sm mb-5 rounded-lg ${color.bgSurface}`}
        >
          <span className={`font-medium text-sm text-li ${color.textMuted}`}>
            Status Pembayaran
          </span>
          <div
            className={`flex gap-2 text-xs font-semibold px-3 py-1 rounded-full border ${color.border} ${statusPembayaran === "Lunas" ? color.textAccent1 : color.textAccent4}`}
          >
            {statusPembayaran}
          </div>
        </div>
        <button
          className={`text-sm font-semibold w-full rounded-xl py-2.5 ${color.accentPrimary} cursor-pointer`}
          onClick={handleSimpanData}
        >
          Simpan Pembayaran
        </button>
      </div>
    </div>
  );
}

export default Payment;
