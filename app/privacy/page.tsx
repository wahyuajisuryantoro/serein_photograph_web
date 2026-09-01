import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Bagaimana Serein Photograph mengumpulkan, memakai, dan menyimpan data penggunanya.",
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
          <h1 className="font-display text-4xl">Kebijakan Privasi</h1>
          <p className="mt-3 text-sm text-fg-3">
            Berlaku sejak 30 Agustus 2026
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-fg-2">
            <section>
              <h2 className="text-lg font-semibold text-fg">
                Data yang kami kumpulkan
              </h2>
              <p className="mt-3">
                Saat kamu membuat akun, kami menyimpan nama, alamat email, dan
                foto profil. Serein Photograph tidak memakai kata sandi, jadi
                kami tidak pernah menyimpannya.
              </p>
              <p className="mt-3">
                Saat kamu memakai aplikasi, kami menyimpan data yang kamu
                masukkan sendiri: nama studio dan cabang, data klien, jadwal
                pemotretan, anggota kru beserta tarifnya, daftar peralatan,
                catatan pembayaran, pengeluaran, serta tautan galeri hasil
                pemotretan.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">
                Masuk dengan akun Google
              </h2>
              <p className="mt-3">
                Jika kamu memilih masuk dengan Google, kami menerima nama,
                alamat email, dan foto profil dari akun Google kamu. Kami tidak
                menerima kata sandi Google kamu, dan tidak mengakses Gmail,
                Drive, Kontak, atau layanan Google lain.
              </p>
              <p className="mt-3">
                Data itu hanya dipakai untuk membuat dan mengenali akunmu di
                Serein Photograph.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">
                Bagaimana data dipakai
              </h2>
              <p className="mt-3">
                Data dipakai untuk menjalankan layanan: menampilkan jadwal dan
                keuangan studiomu, mengirim pemberitahuan tentang job dan
                tagihan, menerbitkan invoice, serta mengelola status
                langgananmu.
              </p>
              <p className="mt-3">
                Kami tidak menjual data kamu, dan tidak memakainya untuk iklan.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">
                Pihak ketiga
              </h2>
              <p className="mt-3">
                Kami memakai penyedia layanan untuk menjalankan aplikasi:
                penyedia server dan basis data, layanan pengiriman email,
                layanan pemberitahuan, serta Google Play dan App Store untuk
                pembayaran langganan. Mereka hanya menerima data seperlunya
                untuk menjalankan fungsi tersebut.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">
                Data klien studio
              </h2>
              <p className="mt-3">
                Data klien yang kamu masukkan adalah milik studiomu. Kami
                menyimpan dan mengolahnya atas nama kamu, dan tidak memakainya
                untuk keperluan lain. Kamu bertanggung jawab memastikan kamu
                berhak menyimpan data tersebut.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">
                Penyimpanan dan penghapusan
              </h2>
              <p className="mt-3">
                Data disimpan selama akunmu aktif. Jika kamu menghapus akun,
                data studio beserta isinya dihapus dalam 30 hari, kecuali
                catatan yang wajib kami simpan untuk keperluan pembukuan dan
                pajak.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">Hak kamu</h2>
              <p className="mt-3">
                Kamu bisa meminta salinan datamu, memperbaiki data yang keliru,
                atau meminta akunmu dihapus. Kirim permintaan ke alamat email di
                bawah dan kami tanggapi dalam 14 hari kerja.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">Perubahan</h2>
              <p className="mt-3">
                Kebijakan ini bisa berubah seiring perkembangan layanan. Jika
                ada perubahan penting, kami beri tahu lewat aplikasi atau email
                sebelum perubahan berlaku.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-fg">Hubungi kami</h2>
              <p className="mt-3">
                Pertanyaan tentang kebijakan ini bisa dikirim ke{" "}
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
          <Link href="/terms" className="hover:text-fg">
            Syarat Layanan
          </Link>
        </div>
      </footer>
    </>
  );
}
