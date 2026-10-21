import { color } from "../../utils/dataColorLight";

function Pelunasan() {
  return (
    <div
      className={`mb-5 p-3.5 rounded-xl ${color.bgSurfaceAlt} border ${color.border}`}
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className={`text-xs font-semibold ${color.textMuted}`}>
          TAMBAH PEMBAYARAN
        </h4>
        <span className={`text-xs ${color.textMuted}`}>
          Sisa: <span className="font-ibm-plex-mono">Rp. 20.000</span>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div>
          <label
            htmlFor="cash"
            className={`text-sm font-semibold ${color.text} mb-1`}
          >
            Cash
          </label>
          <input
            type="number"
            name="cash"
            id="cash"
            className={`${color.bg} w-full px-1.5 py-1 rounded-md outline outline-light-border dark:outline-dark-border ${color.text}`}
          />
        </div>
        <div>
          <label
            htmlFor="transfer"
            className={`text-sm font-semibold ${color.text} mb-1`}
          >
            Transfer
          </label>
          <input
            type="number"
            name="transfer"
            id="transfer"
            className={`${color.bg} w-full px-1.5 py-1 rounded-md outline outline-light-border dark:outline-dark-border ${color.text}`}
          />
        </div>
        <div>
          <label
            htmlFor="eWallet"
            className={`text-sm font-semibold ${color.text} mb-1`}
          >
            E-Wallet
          </label>
          <input
            type="number"
            name="eWallet"
            id="eWallet"
            className={`${color.bg} w-full px-1.5 py-1 rounded-md  outline outline-light-border dark:outline-dark-border ${color.text}`}
          />
        </div>
      </div>
      <div className="flex justify-between text-xs mb-3">
        <span className={color.textMuted}>Sisa Setelah DIbayar</span>
        <span className={`font-ibm-plex-mono ${color.text}`}>Rp. 20.000</span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-medium ${color.text}`}>Status Baru</span>
        <div className="flex gap-2">
          <button
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${color.textMuted} ${color.pos} cursor-pointer`}
          >
            Lunas
          </button>
          <button
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${color.textMuted} ${color.neg} cursor-pointer`}
          >
            Belum Lunas
          </button>
        </div>
      </div>
      <button
        className={`w-full py-2.5 rounded-xl text-sm font-semibold ${color.accentPrimary} cursor-pointer`}
      >
        Simpan Pelunasan
      </button>
    </div>
  );
}

export default Pelunasan;
