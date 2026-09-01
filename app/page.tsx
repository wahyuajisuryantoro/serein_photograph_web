import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Job dan jadwal",
    body: "Satu tempat untuk semua sesi motret. Call time, rundown, lokasi, dan kru yang bertugas, termasuk wedding multi hari dengan akad dan resepsi terpisah.",
  },
  {
    title: "Kru dan fee otomatis",
    body: "Catat second shooter, videografer, dan editor lepas beserta tarifnya. Fee muncul sendiri saat kru di-assign, dan baru memotong kas ketika benar benar dibayar.",
  },
  {
    title: "Pasca produksi",
    body: "Papan antrean dari culling, retouch, color grading, sampai revisi klien. Owner tahu job mana yang tertahan di meja editor tanpa perlu bertanya.",
  },
  {
    title: "Pembayaran dan invoice",
    body: "DP, termin, dan pelunasan tercatat rapi. Invoice siap dikirim ke klien, dan tagihan yang lewat jatuh tempo tampil di beranda.",
  },
  {
    title: "Gear dan ruang studio",
    body: "Inventaris kamera, lensa, lighting, dan drone lengkap dengan checklist yang dibawa tiap job. Jadwal pemakaian ruang studio ikut terkelola.",
  },
  {
    title: "Laba per job",
    body: "Nilai job dikurangi fee kru, sewa gear, dan cetak album. Angka yang jarang dilihat pemilik studio, karena selama ini tidak pernah terkumpul di satu tempat.",
  },
];

const plans = [
  {
    name: "Individual",
    who: "Fotografer lepas yang bekerja sendiri atau memanggil freelance",
    points: [
      "Satu lokasi",
      "2 akun untuk tim",
      "Kru tanpa batas",
      "Job, klien, pembayaran, invoice",
      "Fee kru otomatis",
    ],
  },
  {
    name: "Studio",
    who: "Studio dengan tempat, tim tetap, dan admin",
    points: [
      "Semua fitur Individual",
      "8 akun untuk tim",
      "Peran lengkap termasuk Admin Studio",
      "Inventaris gear dan jadwal ruang",
      "Laba per job dan laporan",
    ],
  },
  {
    name: "Korporasi",
    who: "Studio dengan lebih dari satu cabang",
    points: [
      "Semua fitur Studio",
      "Cabang tanpa batas",
      "Peran Kepala Cabang",
      "Pinjam kru dan gear antar cabang",
      "Laporan konsolidasi antar cabang",
    ],
  },
];

export default function Page() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-5">
          <span className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Logo Serein Photograph"
              width={30}
              height={30}
              priority
              className="invert dark:invert-0"
            />
            <span className="font-display text-xl">Serein Photograph</span>
          </span>
          <nav className="ml-auto hidden items-center gap-7 text-sm text-fg-2 sm:flex">
            <a href="#fitur" className="hover:text-fg">
              Fitur
            </a>
            <a href="#paket" className="hover:text-fg">
              Paket
            </a>
          </nav>
          <a
            href="#daftar"
            className="rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-accent-fg"
          >
            Coba duluan
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-3">
              Untuk studio fotografi
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] text-balance sm:text-6xl">
              Job menumpuk di meja editor, dan pelunasan lupa ditagih.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-fg-2">
              Serein Photograph mengurus sisi bisnis studio fotografi. Dari
              booking dan call time, fee kru, antrean editing, sampai invoice
              dan laporan cabang. Kamu kembali fokus memotret.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#daftar"
                className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-fg"
              >
                Daftar jadi pengguna awal
              </a>
              <a
                href="#fitur"
                className="rounded-sm border border-fg px-6 py-3 text-sm font-semibold"
              >
                Lihat fiturnya
              </a>
            </div>
          </div>
        </section>

        <section id="fitur" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-3xl">Yang bisa dikerjakan</h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="bg-surface p-7">
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-2">
                    {feature.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="paket" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-3xl">Tiga paket</h2>
            <p className="mt-3 max-w-2xl text-fg-2">
              Bedanya bukan sekadar kuota. Tiap naik satu tingkat, ada pekerjaan
              baru yang bisa kamu kelola di dalam aplikasi.
            </p>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className="rounded-sm border border-line bg-surface p-7"
                >
                  <h3 className="font-display text-2xl">{plan.name}</h3>
                  <p className="mt-2 text-sm text-fg-2">{plan.who}</p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {plan.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm text-fg-3">
              Harga diumumkan saat peluncuran.
            </p>
          </div>
        </section>

        <section id="daftar" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="rounded-sm bg-accent px-8 py-14 text-accent-fg sm:px-12">
              <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
                Sedang dibangun. Studio yang ikut lebih dulu ikut menentukan
                bentuknya.
              </h2>
              <p className="mt-5 max-w-xl text-sm opacity-90">
                Kirim email berisi nama studio dan kota kamu. Kami hubungi saat
                versi ujinya siap dicoba.
              </p>
              <a
                href="mailto:halo@sereinindonesia.com?subject=Serein%20Photograph"
                className="mt-8 inline-block rounded-sm bg-accent-fg px-6 py-3 text-sm font-semibold text-accent"
              >
                halo@sereinindonesia.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-7 gap-y-3 px-6 py-9 text-sm text-fg-3">
          <span className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo Serein Photograph"
              width={22}
              height={22}
              className="invert dark:invert-0"
            />
            <span className="font-display text-base text-fg">
              Serein Photograph
            </span>
          </span>
          <Link href="/privacy" className="hover:text-fg">
            Kebijakan Privasi
          </Link>
          <Link href="/terms" className="hover:text-fg">
            Syarat Layanan
          </Link>
          <span className="ml-auto">Serein Indonesia</span>
        </div>
      </footer>
    </>
  );
}
