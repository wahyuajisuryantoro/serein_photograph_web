import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat Layanan",
  description:
    "Ketentuan pemakaian aplikasi Serein Photograph untuk studio fotografi.",
};

export default function Page() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto max-w-3xl px-6 py-5">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Logo Serein Photograph"
              width={30}
              height={30}
              priority
              className="invert dark:invert-0"
            />
            <span className="font-display text-xl">Serein Photograph</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="font-display text-4xl">Syarat Layanan</h1>
          <p className="mt-3 text-sm text-fg-3">
            Berlaku sejak 30 Agustus 2026
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-fg-2">
            <section>
              <h2 className="text-lg font-semibold text-fg">Layanan</h2>
              <p className="mt-3">
                Serein Photograph adalah aplikasi manajemen bisnis untuk studio
                fotografi, dijalankan oleh Serein Indonesia. Dengan membuat akun
                dan memakai aplikasi, kamu setuju dengan ketentuan di halaman
                ini.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">Akun</h2>
              <p className="mt-3">
                Satu alamat email hanya bisa dipakai untuk satu studio. Kamu
                bertanggung jawab menjaga akses ke email tersebut, karena
                seluruh proses masuk dilakukan lewat email atau akun Google
                kamu.
              </p>
              <p className="mt-3">
                Pemilik studio bertanggung jawab atas anggota tim yang dia
                undang, termasuk apa yang mereka lakukan di dalam aplikasi.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">Langganan</h2>
              <p className="mt-3">
                Aplikasi tersedia dalam paket Individual, Studio, dan Korporasi.
                Langganan diperpanjang otomatis lewat Google Play atau App Store
                sampai kamu membatalkannya dari pengaturan toko masing masing.
              </p>
              <p className="mt-3">
                Kuota akun tambahan yang kamu beli berlaku permanen untuk studio
                tersebut, dan tetap tersimpan walaupun kamu berhenti berlangganan
                lalu berlangganan lagi. Jumlah akun aktif tetap mengikuti batas
                paket yang sedang berjalan.
              </p>
              <p className="mt-3">
                Jika kamu turun paket dan jumlah akun aktifmu melebihi batas
                paket baru, kamu diminta memilih akun mana yang tetap aktif.
                Akun selebihnya dinonaktifkan tanpa datanya dihapus.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">
                Data dan isi yang kamu masukkan
              </h2>
              <p className="mt-3">
                Data studio, klien, dan keuangan yang kamu masukkan tetap milik
                kamu. Kami hanya menyimpan dan mengolahnya untuk menjalankan
                layanan, sebagaimana dijelaskan di{" "}
                <Link href="/privacy" className="text-accent">
                  Kebijakan Privasi
                </Link>
                .
              </p>
              <p className="mt-3">
                Kamu bertanggung jawab memastikan kamu berhak menyimpan data
                klien dan foto yang kamu unggah, termasuk persetujuan dari orang
                yang datanya kamu simpan.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">
                Pemakaian yang tidak diperbolehkan
              </h2>
              <p className="mt-3">
                Aplikasi tidak boleh dipakai untuk kegiatan melanggar hukum,
                menyimpan konten yang melanggar hak orang lain, atau mengganggu
                jalannya layanan bagi pengguna lain. Kami dapat menangguhkan
                akun yang melanggar.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">
                Ketersediaan layanan
              </h2>
              <p className="mt-3">
                Kami berusaha menjaga layanan tetap berjalan, tetapi tidak
                menjanjikan bebas gangguan. Pemeliharaan terencana akan kami
                beritahukan lebih dulu bila memungkinkan.
              </p>
              <p className="mt-3">
                Kami menyarankan kamu tetap menyimpan cadangan file foto
                pekerjaanmu sendiri. Aplikasi ini mengelola informasi dan alur
                kerja, bukan pengganti penyimpanan arsip fotomu.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">
                Batas tanggung jawab
              </h2>
              <p className="mt-3">
                Sejauh diizinkan hukum, tanggung jawab kami atas kerugian yang
                timbul dari pemakaian layanan dibatasi sebesar biaya langganan
                yang kamu bayarkan dalam dua belas bulan terakhir.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">
                Perubahan ketentuan
              </h2>
              <p className="mt-3">
                Ketentuan ini bisa kami ubah. Perubahan penting diberitahukan
                lewat aplikasi atau email sebelum berlaku. Melanjutkan pemakaian
                setelah perubahan berlaku berarti kamu menyetujuinya.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">Hukum yang berlaku</h2>
              <p className="mt-3">
                Ketentuan ini tunduk pada hukum Republik Indonesia.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">Hubungi kami</h2>
              <p className="mt-3">
                Pertanyaan tentang ketentuan ini bisa dikirim ke{" "}
                <a
                  href="mailto:halo@sereinindonesia.com"
                  className="text-accent"
                >
                  halo@sereinindonesia.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-3xl gap-7 px-6 py-8 text-sm text-fg-3">
          <Link href="/" className="hover:text-fg">
            Beranda
          </Link>
          <Link href="/privacy" className="hover:text-fg">
            Kebijakan Privasi
          </Link>
        </div>
      </footer>
    </>
  );
}
