export interface ResearchStep {
  number: string;
  stage: string;
  title: string;
  description: string;
  icon: string;
  tone: string;
}

export const researchSteps: ResearchStep[] = [
  {
    number: "01",
    stage: "Tahap Eksplorasi",
    title: "Penentuan Topik",
    description: "Identifikasi isu akademik dan kebutuhan riset yang mendalam.",
    icon: "fa-magnifying-glass",
    tone: "tone-blue",
  },
  {
    number: "02",
    stage: "Tahap Kolaborasi",
    title: "Pembagian Role",
    description: "Memecah tugas berdasarkan keahlian individu dan kebutuhan tim.",
    icon: "fa-people-group",
    tone: "tone-green",
  },
  {
    number: "03",
    stage: "Tahap Observasi",
    title: "Pengumpulan Data",
    description: "Koleksi data primer dan sekunder secara sistematis dan akurat.",
    icon: "fa-database",
    tone: "tone-cyan",
  },
  {
    number: "04",
    stage: "Tahap Interpretasi",
    title: "Analisis Data",
    description: "Proses pengolahan data untuk mendapatkan hasil dan interpretasi.",
    icon: "fa-chart-column",
    tone: "tone-purple",
  },
  {
    number: "05",
    stage: "Tahap Penyusunan",
    title: "Penulisan Artikel",
    description: "Susunan naskah ilmiah sesuai format jurnal target dan standar.",
    icon: "fa-file-pen",
    tone: "tone-orange",
  },
  {
    number: "06",
    stage: "Tahap Kendali Mutu",
    title: "Review Internal",
    description: "Revisi oleh dosen pembimbing untuk memastikan kualitas akademik.",
    icon: "fa-user-check",
    tone: "tone-indigo",
  },
  {
    number: "07",
    stage: "Tahap Penyempurnaan",
    title: "Revisi Artikel",
    description: "Perbaikan struktur dan isi berdasarkan masukan dari dosen.",
    icon: "fa-file-circle-check",
    tone: "tone-pink",
  },
  {
    number: "08",
    stage: "Tahap Pengiriman",
    title: "Submission Jurnal",
    description: "Pengiriman naskah ke jurnal target dengan format yang sesuai.",
    icon: "fa-paper-plane",
    tone: "tone-teal",
  },
  {
    number: "09",
    stage: "Tahap Pemantauan",
    title: "Monitoring Status",
    description: "Periksa status publikasi dan koordinasi dengan editor jurnal.",
    icon: "fa-desktop",
    tone: "tone-royal",
  },
  {
    number: "10",
    stage: "Tahap Diseminasi",
    title: "Publikasi & Dokumentasi",
    description: "Publikasi hasil riset dan dokumentasi akademik untuk portofolio.",
    icon: "fa-award",
    tone: "tone-violet",
  },
];
