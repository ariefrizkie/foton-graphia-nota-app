import { useEffect, useState } from "react";
import logoFoton from "../../assets/logo-Foton-graphia-color.webp";
import { color } from "../../utils/dataColorLight";

function PrintPage() {
  const [dataPrint, setDataPrint] = useState(() => {
    const data = sessionStorage.getItem("print_data");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    if (dataPrint.length > 0) {
      const timer = setTimeout(() => {
        window.print();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [dataPrint]);

  return (
    <div className="bg-white p-6 ">
      <div>
        <div className="print:absolute font-manrope w-180 mx-0 overflow-y-auto print:top-0 print:left-0">
          <div className="flex justify-between items-start border-b-2 border-light-text pb-3.5 mb-4">
            <div>
              <img
                src={logoFoton}
                alt="Foton Graphia"
                className="
              h-10 mb-2"
              />
              <div className="text-xs text-light-muted">
                Jl. Puntik Raya, RT.02 RW.01, Puntik Luar, <br /> Kec.
                Mandastana, Kab.Barito Kuala
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-light-muted">NOMOR NOTA</div>
              <div className="font-bold font-ibm-plex-mono mb-3">
                {dataPrint.kodeNota}
              </div>
              <div
                className={`inline-block py-1.5 px-4 rounded-2xl font-bold text-xs border ${dataPrint.statusPembayaran === "Lunas" ? color.pos : color.neg}`}
              >
                {dataPrint.statusPembayaran}
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-3 text-xs">
            <div>
              <div>
                <strong>Nama Pelanggan:</strong> {dataPrint.namaPelanggan}
              </div>
              <div>
                <strong>No. Telepon:</strong> {dataPrint.nomorTelepon}
              </div>
            </div>
            <div className="text-right">
              <div>
                <strong>Tanggal Transaksi:</strong> {dataPrint.tanggalTransaksi}
              </div>
            </div>
          </div>

          <table className="w-full border-collapse text-xs mb-4">
            <thead>
              <tr>
                <th className="text-left py-1.5">Item</th>
                <th className="text-center py-1.5">Jml</th>
                <th className="text-right py-1.5">Harga</th>
                <th className="text-right py-1.5">Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {dataPrint.items.map((item) => (
                <tr key={item.id_item} className={`border-t ${color.border}`}>
                  <td className="text-left py-1.5">
                    {item.nama_barang}
                    <span className="text-light-muted">{` (${
                      item.ukuran_p != undefined ? item.ukuran_p : item.ukuran
                    } x ${
                      item.ukuran_l != undefined ? item.ukuran_l : item.ukuran
                    } ${item.satuan_ukuran})`}</span>
                  </td>
                  <td className="text-center py-1.5">{`${item.jumlah} ${item.satuan_jumlah}`}</td>
                  <td className="text-right py-1.5">
                    {`Rp. ${item.harga_jual.toLocaleString("id-ID")}`}
                  </td>
                  <td className="text-right py-1.5">
                    {`Rp. ${item.subtotal.toLocaleString("id-ID")}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mb-4">
            <div className="w-65 text-sm">
              <div className="flex justify-between font-bold text-sm pt-2 border-t border-light-text">
                <span>Total</span>
                <span>{`Rp. ${dataPrint.total.toLocaleString("id-ID")}`}</span>
              </div>
              {dataPrint.rincianPembayaran.cash > 0 && (
                <div className="flex justify-between text-xs mt-2 text-light-muted">
                  <span>Cash</span>
                  <span>
                    {`Rp. ${dataPrint.rincianPembayaran.cash.toLocaleString("id-ID")}`}
                  </span>
                </div>
              )}
              {dataPrint.rincianPembayaran.transfer > 0 && (
                <div className="flex justify-between text-xs text-light-muted">
                  <span>Transfer</span>
                  <span>
                    {`Rp. ${dataPrint.rincianPembayaran.transfer.toLocaleString(
                      "id-ID",
                    )}`}
                  </span>
                </div>
              )}
              {dataPrint.rincianPembayaran.eWallet > 0 && (
                <div className="flex justify-between text-xs text-light-muted">
                  <span>E-Wallet</span>
                  <span>
                    {`Rp. ${dataPrint.rincianPembayaran.eWallet.toLocaleString(
                      "id-ID",
                    )}`}
                  </span>
                </div>
              )}

              <div className="flex justify-between text-xs mt-1.5 font-semibold">
                <span>Sisa Pembayaran</span>
                <span>{`Rp. ${dataPrint.sisaTagihan.toLocaleString("id-ID")}`}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 text-xs text-light-muted text-center">
            Terima kasih atas pesanan Anda di{" "}
            <span className="text-blue-600 font-bold">Foton</span>{" "}
            <span className="text-orange-500 font-bold">Graphia</span>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintPage;
