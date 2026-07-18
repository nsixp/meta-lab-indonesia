export type PublicationType = "journal" | "conference" | "academic";

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: PublicationType;
  typeLabel: string;
  citations?: number;
  href: string;
  accent: "blue" | "teal" | "orange" | "purple" | "pink";
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    title:
      "Analysis of Conceptual Understanding and Needs for Differentiation with Multi-Representation Learning Strategy: An Empirical Study of 1D Particle Dynamics",
    authors:
      "Muhammad Reyza Arief Taqwa, Parlindungan Sinaga, Rahmania Amanah Putri, Amira Setiyani, Shinta Nuriyah Mahbubiyah Royani, Siti Jamiatul Husnaini",
    venue: "Jurnal Pendidikan dan Ilmu Fisika, 6(1), 65–83",
    year: "2026",
    type: "journal",
    typeLabel: "Artikel Jurnal",
    href: "https://journal.uniga.ac.id/index.php/jpif/article/view/43898/3239",
    accent: "purple",
  },
  {
    title:
      "Evaluating Student Satisfaction with Lecturers in Higher Education Through a Business Intelligence Dashboard",
    authors:
      "Putry Wahyu Setyaningsih, Septian Eka Ady Buananta, Siti Jamiatul Husnaini",
    venue:
      "2025 2nd International Conference on Information System and Information Technology (ICISIT)",
    year: "2025",
    type: "conference",
    typeLabel: "Makalah Konferensi",
    href: "https://ieeexplore.ieee.org/abstract/document/11402964",
    accent: "orange",
    featured: true,
  },
  {
    title:
      "The Effect of an IoT-based Microcontroller Training Kit on Psychomotor Learning Outcomes in Microcontroller and Microprocessor Programming",
    authors:
      "Mohammad Wildan Habibi, I Gusti Putu Asto Buditjahjanto, Tri Rijanto, Lilik Anifah, Rifqi Abdillah, Harun Al Rosyid, Muhammad Hakiki, Ramadhan Cakra Wibawa, Siti Jamiatul Husnaini",
    venue: "E3S Web of Conferences, 645, 06003",
    year: "2025",
    type: "conference",
    typeLabel: "Prosiding Konferensi",
    citations: 1,
    href: "https://www.e3s-conferences.org/articles/e3sconf/pdf/2025/45/e3sconf_icogesf2025_06003.pdf",
    accent: "teal",
  },
  {
    title:
      "Correlation among Game Addiction, Achievement Emotion, and Learning Motivation: A Study of Indonesian Youth in the Context of E-Learning System",
    authors:
      "Rona Nisa Sofia Amriza, Siti Jamiatul Husnaini, Aruga Yudish Firmansyah",
    venue: "Research and Practice in Technology Enhanced Learning, 19, 27",
    year: "2024",
    type: "journal",
    typeLabel: "Artikel Jurnal",
    citations: 7,
    href: "https://d1wqtxts1xzle7.cloudfront.net/117581855/2024-19027-libre.pdf?1724165782=&response-content-disposition=inline%3B+filename%3DCorrelation_among_game_addiction_achieve.pdf&Expires=1784394204&Signature=Y3RPJu5bWxe~SJefS4Fis1LDla9tt5mNxWluabMQRfEKr9D6S2fS~6UhLa9N8GCBtrQVGvv3vD1tW-b2z4se5N~q7ePl-6OlH8j41klC35fDFemFkpmv2sF06U0NkAqSqSgP0vr8fl2wC9Q4c4BT7EMvge6zOeVkRwBFvOAQvOwT3laG9pANbTQ2ketq4FkKbuQeYXR0FpIL~mmsst-Q5XF-cBC4kyXsS48sd2rFtKZkdooLYn96g3ENlPRojIuLhMRVQSfdVt-IslQZbFyLsenINE~N9SepnSLSSSckZakJV5MKy1CLm3jXa7VslZxC2YVlu8hhMfg1q7fiyHqFGA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
    accent: "pink",
  },
  {
    title:
      "Effects of Games on Students’ Emotions of Learning Science and Achievement in Chemistry",
    authors: "Sufen Chen, Siti Jamiatul Husnaini, Jing-Ju Chen",
    venue: "International Journal of Science Education, 42(13), 2224–2245",
    year: "2020",
    type: "journal",
    typeLabel: "Artikel Jurnal",
    citations: 123,
    href: "https://www.tandfonline.com/doi/abs/10.1080/09500693.2020.1817607",
    accent: "blue",
    featured: true,
  },
  {
    title:
      "Effects of Guided Inquiry Virtual and Physical Laboratories on Conceptual Understanding, Inquiry Performance, Scientific Inquiry Self-Efficacy, and Enjoyment",
    authors: "Siti Jamiatul Husnaini, Sufen Chen",
    venue: "Physical Review Physics Education Research, 15(1), 010119",
    year: "2019",
    type: "journal",
    typeLabel: "Artikel Jurnal",
    citations: 268,
    href: "https://journals.aps.org/prper/pdf/10.1103/PhysRevPhysEducRes.15.010119",
    accent: "teal",
    featured: true,
  },
  {
    title:
      "鷹架探究的虛擬及實體實驗室對概念理解, 科學過程技能, 探究自我效能, 和享受度的影響: 針對印尼國中學生學習簡單鐘擺運動的個案研究",
    authors: "Siti Jamiatul Husnaini",
    venue: "Karya akademik / tesis",
    year: "2018",
    type: "academic",
    typeLabel: "Karya Akademik",
    href: "https://scholar.google.co.id/citations?view_op=view_citation&hl=id&user=CQr1NBMAAAAJ&citation_for_view=CQr1NBMAAAAJ:9yKSN-GCB0IC",
    accent: "purple",
  },
  {
    title:
      "Penerapan Model Pembelajaran Problem Posing Tipe Pre Solution Posing untuk Meningkatkan Keterampilan Berpikir Kritis Siswa pada Materi Fluida Statik Kelas X MAN Bangkalan",
    authors: "Siti Jamiatul Husnaini, Suliyanah",
    venue: "Inovasi Pendidikan Fisika, 4(2), 58–62",
    year: "2015",
    type: "journal",
    typeLabel: "Artikel Jurnal",
    href: "https://ejournal.unesa.ac.id/index.php/inovasi-pendidikan-fisika/article/view/12300/11365",
    accent: "orange",
  },
  {
    title:
      "The Gender Differences on Physics National Examination (NE) Performance in East Java During the Last 3 Years (2016–2018)",
    authors: "Siti Jamiatul Husnaini, Madlazim",
    venue: "Karya akademik",
    year: "—",
    type: "academic",
    typeLabel: "Karya Akademik",
    href: "https://scholar.google.co.id/citations?view_op=view_citation&hl=id&user=CQr1NBMAAAAJ&citation_for_view=CQr1NBMAAAAJ:UeHWp8X0CEIC",
    accent: "pink",
  },
];

export const publicationStats = {
  totalWorks: publications.length,
  totalCitations: publications.reduce(
    (total, publication) => total + (publication.citations ?? 0),
    0,
  ),
  journals: publications.filter(({ type }) => type === "journal").length,
  conferences: publications.filter(({ type }) => type === "conference").length,
};
