import { color } from "../../utils/dataColorLight";
import {
  jenisProduk,
  satuanJumlahProduk,
  satuanUkuranProduk,
} from "../../services/data";

function FormProduk({ produkData, handleChange }) {
  return (
    <div className="flex flex-col gap-3.5">
      <div className={`flex flex-col gap-1.5`}>
        <label
          htmlFor="kodeProduk"
          className={`text-sm font-semibold ${color.textMuted}`}
        >
          Kode Produk
        </label>
        <input
          type="text"
          id="kodeProduk"
          name="kodeProduk"
          className={`border rounded-lg py-2 px-3 text-sm ${color.bgSurfaceAlt} ${color.border} ${color.text} ${color.focus}`}
          value={produkData.kodeProduk}
          onChange={handleChange}
        />
      </div>
      <div className={`flex flex-col gap-1.5`}>
        <label
          htmlFor="namaProduk"
          className={`text-sm font-semibold ${color.textMuted}`}
        >
          Nama Produk
        </label>
        <input
          type="text"
          id="namaProduk"
          name="namaProduk"
          className={`border rounded-lg py-2 px-3 text-sm ${color.bgSurfaceAlt} ${color.border} ${color.text} ${color.focus}`}
          placeholder="mis. Ganci 44"
          value={produkData.namaProduk}
          onChange={handleChange}
        />
      </div>
      <div className={`flex flex-col gap-1.5`}>
        <label
          htmlFor="jenisProduk"
          className={`text-sm font-semibold ${color.textMuted}`}
        >
          Jenis Produk
        </label>
        <select
          id="jenisProduk"
          name="jenisProduk"
          className={`border rounded-lg py-2 px-3 text-sm ${color.bgSurfaceAlt} ${color.border} ${color.text} ${color.focus}`}
          value={produkData.jenisProduk}
          onChange={handleChange}
        >
          <option value="-">Pilih Jenis/Kategori</option>
          {jenisProduk.map((jenis) => (
            <option key={jenis} value={jenis}>
              {jenis}
            </option>
          ))}
        </select>
      </div>
      <div className={`grid grid-cols-2 gap-3`}>
        <div className={`flex flex-col gap-1.5`}>
          <label
            htmlFor="satuanUkuran"
            className={`text-sm font-semibold ${color.textMuted}`}
          >
            Satuan Ukuran
          </label>
          <select
            className={`border rounded-lg py-2 px-3 text-sm ${color.bgSurfaceAlt} ${color.border} ${color.text} ${color.focus}`}
            id="satuanUkuran"
            name="satuanUkuran"
            value={produkData.satuanUkuran}
            onChange={handleChange}
          >
            <option value="-">Pilih Satuan</option>
            {satuanUkuranProduk.map((ukuran) => (
              <option key={ukuran} value={ukuran}>
                {ukuran}
              </option>
            ))}
          </select>
        </div>
        <div className={`flex flex-col gap-1.5`}>
          <label
            htmlFor="satuanJumlah"
            className={`text-sm font-semibold ${color.textMuted}`}
          >
            Satuan Jumlah
          </label>
          <select
            id="satuanJumlah"
            className={`border rounded-lg py-2 px-3 text-sm ${color.bgSurfaceAlt} ${color.border} ${color.text} ${color.focus}`}
            name="satuanJumlah"
            value={produkData.satuanJumlah}
            onChange={handleChange}
          >
            <option value="-">Pilih Satuan</option>
            {satuanJumlahProduk.map((jumlah) => (
              <option key={jumlah} value={jumlah}>
                {jumlah}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={`grid grid-cols-2 gap-3`}>
        <div className={`flex flex-col gap-1.5`}>
          <label
            htmlFor="hargaBeli"
            className={`text-sm font-semibold ${color.textMuted}`}
          >
            Harga Beli
          </label>
          <input
            type="text"
            id="hargaBeli"
            name="hargaBeli"
            className={`border rounded-lg py-2 px-3 text-sm ${color.bgSurfaceAlt} ${color.border} ${color.text} ${color.focus}`}
            placeholder="50000"
            value={produkData.hargaBeli}
            onChange={handleChange}
          />
        </div>
        <div className={`flex flex-col gap-1.5`}>
          <label
            htmlFor="hargaJual"
            className={`text-sm font-semibold ${color.textMuted}`}
          >
            Harga Jual
          </label>
          <input
            type="text"
            id="hargaJual"
            name="hargaJual"
            className={`border rounded-lg py-2 px-3 text-sm ${color.bgSurfaceAlt} ${color.border} ${color.text} ${color.focus}`}
            placeholder="50000"
            value={produkData.hargaJual}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default FormProduk;
