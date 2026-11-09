// Database Soal Try Out 1 (35 Soal)
const tryout1Data = [
  {
    q: "Rela berkorban untuk kepentingan bangsa dan negara dapat diwujudkan dalam sikap....",
    o: [
      "Ikut mempertahankan negara jika ada serangan musuh",
      "Tidak melakukan perbuatan yang merugikan kepentingan umum",
      "Ikut membantu polisi dalam menegakkan hukum indonesia",
      "Menjaga rahasia negara sesuai dengan tugasnya",
      "Kesediaan untuk dipilih menjadi TNI",
    ],
    a: 1,
    p: "Rela berkorban adalah sikap dan perilaku yang tindakannya dilakukan dengan ikhlas serta mendahulukan kepentingan orang lain daripada kepentingan diri sendiri (tidak merugikan kepentingan umum). Opsi A, C, D, E lebih condong kepada patriotisme tugas instansi.",
    t: "Cari opsi yang menunjukkan tindakan tanpa pamrih mendahulukan kepentingan bersama serta tidak merugikan fasilitas/kepentingan umum.",
  },
  {
    q: "Nasionalisme atau semangat kebangsaan merupakan cerminan dari Pancasila sila ke-...",
    o: ["Lima", "Empat", "Tiga", "Dua", "Satu"],
    a: 2,
    p: "Butir sila ke-3 (Persatuan Indonesia) mencakup sanggup dan rela berkorban untuk kepentingan negara dan bangsa, mengembangkan rasa cinta tanah air dan bangsa, serta menempatkan persatuan di atas kepentingan pribadi.",
    t: "Semangat kebangsaan dan persatuan mutlak berada di bawah naungan sila ke-3 Pancasila.",
  },
  {
    q: "Amanat Pancasila dalam membangun integritas warga negara yang merujuk pada sila ke-2 menunjukkan etika dalam....",
    o: ["Ekonomi", "Budaya", "Pemerintahan", "Sosial budaya", "Hukum"],
    a: 3,
    p: "Integritas manusia Indonesia pada sila ke-2 (Kemanusiaan yang Adil dan Beradab) menampilkan rasa kemanusiaan, sikap jujur, toleransi, dan saling menghargai keberagaman yang merupakan etika moral dalam aspek sosial budaya.",
    t: "Kemanusiaan, toleransi, dan adab berhubungan erat dengan aspek sosial budaya masyarakat.",
  },
  {
    q: "Pasal 32 UUD 1945 mengandung semangat nasionalisme di bidang...",
    o: ["Hak asasi manusia", "Ekonomi", "Politik", "Sosial", "Budaya"],
    a: 4,
    p: "Pasal 32 UUD 1945 ayat (1) berbunyi: 'Negara memajukan kebudayaan nasional Indonesia di tengah peradaban dunia...', dan ayat (2) mengenai bahasa daerah sebagai kekayaan budaya nasional.",
    t: "Pasal 32 UUD 1945 secara spesifik membahas tentang kebudayaan nasional dan bahasa daerah.",
  },
  {
    q: "Berikut ini merupakan pilar atau prinsip-prinsip utama nasionalisme, kecuali...",
    o: ["Personality", "Unity", "Liberty", "Cognitive", "University"],
    a: 3,
    p: "Menurut Sartono Kartodirdjo, prinsip nasionalisme mencakup kesatuan (unity), kebebasan (liberty), kesamaan (equality), kepribadian nasional (personality), dan prestasi kolektif. 'Cognitive' bukan merupakan pilar nasionalisme.",
    t: "Hafalkan pilar-pilar nasionalisme: Unity, Liberty, Equality, Personality, dan Prestasi Kolektif.",
  },
  {
    q: "Semangat Nasionalisme dibangun oleh prinsip-prinsip salah satunya kesatuan. Konstruksi prinsip kesatuan dalam nasionalisme dibangun berdasarkan konsep...",
    o: [
      "NKRI",
      "Bhinneka tunggal ika",
      "Cinta tanah air",
      "Persamaan nasib dan sejarah",
      "Pancasila",
    ],
    a: 1,
    p: "Konstruksi prinsip kesatuan dalam nasionalisme Indonesia dibangun berdasarkan konsep Bhinneka Tunggal Ika, yaitu meskipun berbeda-beda suku, agama, dan ras, tetapi tetap satu jua.",
    t: "Konsep pemersatu dalam keberagaman Indonesia adalah semboyan Bhinneka Tunggal Ika.",
  },
  {
    q: "Berikut ini merupakan faktor penting yang berperan dalam pertumbuhan nasionalisme di Indonesia pada masa awal adalah...",
    o: ["Lagu kebangsaan", "Budaya", "Sosial", "Bahasa", "Pendidikan"],
    a: 3,
    p: "Bahasa Indonesia sangat erat hubungannya dengan kebangkitan kesadaran nasional. Penggunaan bahasa Melayu/Indonesia yang meluas menjadi pemersatu utama kesadaran nasional pada masa pergerakan.",
    t: "Ingat Sumpah Pemuda: menjunjung bahasa persatuan, bahasa Indonesia.",
  },
  {
    q: "Nilai utama integritas yang harus dimiliki ASN sebagai pelayan publik adalah...",
    o: [
      "Bertanggung jawab",
      "Kepedulian",
      "Disiplin",
      "Kejujuran",
      "Rela berkorban",
    ],
    a: 3,
    p: "Integritas secara esensial dan paling mendasar selalu berkaitan erat dengan kejujuran (kesesuaian antara perkataan dan perbuatan).",
    t: "Kata kunci mutlak integritas adalah Kejujuran.",
  },
  {
    q: "Prinsip-prinsip pertahanan negara, kecuali...",
    o: [
      "Hak asasi manusia",
      "Demokrasi",
      "Lingkungan hidup",
      "Ketuhanan",
      "Hukum nasional",
    ],
    a: 3,
    p: "Pertahanan negara disusun berdasarkan prinsip demokrasi, HAM, kesejahteraan umum, lingkungan hidup, ketentuan hukum nasional, hukum internasional, dan hidup berdampingan secara damai. 'Ketuhanan' tidak termasuk dalam prinsip formal pertahanan negara.",
    t: "Pelajari prinsip pertahanan negara dalam UU Pertahanan Negara (Demokrasi, HAM, Lingkungan Hidup, Hukum Nasional).",
  },
  {
    q: "Mengembangkan sikap saling menghormati dan bekerja sama dengan bangsa lain merupakan penjabaran...",
    o: [
      "Sila pertama",
      "Sila kedua",
      "Sila keempat",
      "Sila kelima",
      "Sila ketiga",
    ],
    a: 1,
    p: "Butir sila ke-2 Pancasila menyatakan: 'Mengembangkan sikap hormat menghormati dan bekerja sama dengan bangsa lain' serta merasa diri sebagai bagian dari seluruh umat manusia.",
    t: "Hubungan antarbangsa dan kemanusiaan universal diatur dalam butir Sila ke-2.",
  },
  {
    q: "Pancasila berada dalam urutan tertinggi dalam tata urutan peraturan dan menjadi dasar bagi peraturan di bawahnya merupakan arti dari...",
    o: [
      "Pancasila sebagai dasar negara",
      "Pancasila sebagai pandangan hidup bangsa",
      "Pancasila sebagai Grundnorm",
      "Pancasila sebagai landasan ideal bangsa",
      "Pancasila sebagai Staatfundamentalnorm",
    ],
    a: 4,
    p: "Pancasila sebagai Staatfundamentalnorm (pokok kaidah negara yang fundamental) artinya Pancasila berada di urutan tertinggi tata urutan perundang-undangan dan menjadi sumber dari segala sumber hukum.",
    t: "Staatfundamentalnorm adalah istilah hukum tata negara untuk kedudukan tertinggi norma dasar Pancasila.",
  },
  {
    q: "Mematuhi protokol kesehatan anjuran pemerintah seperti memakai masker untuk melindungi orang lain selaras dengan pengamalan Pancasila, khususnya sila...",
    o: ["1", "2", "3", "4", "5"],
    a: 3,
    p: "Mendukung dan mematuhi kebijakan pemerintah/aturan bersama untuk kepentingan umum (seperti PSBB/PPKM/Protokol Kesehatan demi meminimalisasi penyebaran virus) merupakan perwujudan sila ke-4 (demokrasi/keputusan bersama/kebijakan negara). Catatan kunci: kebijakan publik juga sering dikaitkan dengan sila 4 atau 5.",
    t: "Kepatuhan terhadap kebijakan dan instruksi pemerintah demi ketertiban bersama masuk dalam ranah Sila Ke-4.",
  },
  {
    q: "Budi berkegiatan di rumah saja dan memanfaatkan teknologi untuk bekerja dari rumah mengikuti aturan PPKM dari pemerintah. Hal yang dilakukan Budi merupakan pengamalan sila ke-...",
    o: ["1", "2", "3", "4", "5"],
    a: 2,
    p: "Pandemi dapat dikalahkan dengan bersatu melawan penyebaran virus melalui kedisiplinan dan menjaga jarak di rumah. Ini adalah wujud persatuan menghadapi musuh bersama (Sila ke-3).",
    t: "Bersatu padu mematuhi aturan pembatasan demi keselamatan bersama nasional adalah cerminan Sila ke-3.",
  },
  {
    q: "Pemerintah mengumumkan pelaksanaan vaksinasi corona gratis bagi seluruh masyarakat dan membatalkan rencana vaksin berbayar. Upaya tersebut merupakan pengamalan Pancasila sila...",
    o: [
      "Ketuhanan Yang Maha Esa",
      "Kemanusiaan yang Adil dan Beradab",
      "Persatuan Indonesia",
      "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan",
      "Keadilan Sosial bagi Seluruh Rakyat Indonesia",
    ],
    a: 4,
    p: "Pemberian fasilitas kesehatan gratis dan merata bagi seluruh rakyat tanpa diskriminasi mewujudkan prinsip keadilan sosial dan sinergi berkeadilan (Sila ke-5).",
    t: "Kebijakan pemerataan kesejahteraan, kesehatan gratis, dan subsidi publik berakar pada Sila ke-5.",
  },
  {
    q: "Relawan dan kelompok masyarakat bergerak membagikan makanan dan vitamin kepada penderita Covid-19 yang isoman. Kegiatan tersebut merupakan pengamalan Pancasila sila ke-...",
    o: ["1", "2", "3", "4", "5"],
    a: 1,
    p: "Membantu sesama manusia yang kesusahan, berempati, dan melakukan kegiatan kemanusiaan merupakan wujud nyata pengamalan Pancasila sila ke-2.",
    t: "Aksi kemanusiaan, solidaritas antarsesama, dan menolong korban/orang sakit = Sila ke-2.",
  },
  {
    q: "Norma dan etika ASN menurut filosofi Pancasila adalah sikap mental dan moral yang terwujud dalam tindakan di masyarakat dan bernegara yang bersifat...",
    o: [
      "Administratif, manajerial, dan organisasional",
      "Religius, administratif, dan humanitas",
      "Kontekstual, struktural, dan administratif",
      "Religius, struktural, dan organisasional",
      "Administratif, religius, dan struktural",
    ],
    a: 0,
    p: "Dalam modul kebijakan birokrasi dan ASN, norma dan etika ASN menurut filosofi Pancasila bersifat administratif, organisasional, dan manajerial.",
    t: "Hafalkan sifat norma ASN: Administratif, Organisasional, dan Manajerial.",
  },
  {
    q: "Hierarki tata urutan perundang-undangan dari UUD 1945 sampai peraturan desa merupakan bentuk integritas pada...",
    o: [
      "Asas kepastian hukum",
      "Asas tertib penyelenggaraan negara",
      "Asas akuntabilitas",
      "Asas keterbukaan",
      "Asas efisiensi",
    ],
    a: 0,
    p: "Penyusunan hirarki perundang-undangan secara sistematis agar tidak saling bertentangan menjamin terciptanya asas kepastian hukum.",
    t: "Keteraturan aturan hukum bertingkat mencerminkan asas kepastian hukum.",
  },
  {
    q: "Pendidikan sebagai elemen masyarakat bermuatan positif mampu memberikan pengaruh untuk membangun sikap kejujuran di sekolah. Kejujuran termasuk pengamalan Pancasila sila ke-...",
    o: ["1", "2", "3", "4", "5"],
    a: 0,
    p: "Kejujuran bersumber dari hati nurani dan norma agama serta moral luhur manusia, yang dalam urutan butir Pancasila berkaitan erat dengan nilai ketuhanan dan moral religius (Sila ke-1).",
    t: "Kejujuran moral dasar individu berakar dari nilai keimanan/religiusitas Sila ke-1.",
  },
  {
    q: "Berikut ini yang bukan termasuk dalam aspek pembentuk rasa nasionalisme adalah...",
    o: [
      "Perasaan senasib",
      "Kesatuan tempat tinggal",
      "Cita-cita bersama",
      "Perbedaan yang mempersatukan",
      "Tujuan bersama",
    ],
    a: 3,
    p: "Perbedaan yang mempersatukan bukan aspek pembentuk nasionalisme klasik, melainkan pembentuk rasa persatuan dan kesatuan dalam bingkai keberagaman.",
    t: "Faktor pembentuk nasionalisme: senasib sepenanggungan, wilayah/tanah air, cita-cita, dan sejarah masa lalu.",
  },
  {
    q: "Pengakuan terhadap keberagaman agama dan keyakinan di Indonesia merupakan perwujudan nasionalisme dilandasi bahwa...",
    o: [
      "Agama adalah nilai positif bagi warga negara",
      "Agama dan kepercayaan adalah sama",
      "Warga negara beragama adalah bentuk keberagaman",
      "Agama merupakan karakter masyarakat Indonesia",
      "Agama merupakan identitas terhadap Tuhan yang perlu dijamin",
    ],
    a: 0,
    p: "Pengakuan keberagaman agama didasari pandangan bahwa agama dan keyakinan merupakan nilai positif yang membimbing moral warga negara dan dijamin oleh negara.",
    t: "Negara mengakui agama karena dipandang sebagai nilai positif pembentuk moral luhur bangsa.",
  },
  {
    q: "Nasionalisme dalam ruang dan waktu dapat memiliki perubahan hakikat karena...",
    o: [
      "Dipengaruhi oleh sejarah bangsa",
      "Disesuaikan dengan penafsiran ideologi suatu bangsa",
      "Disesuaikan dengan hukum nasionalis",
      "Adanya gejala sosiopolitik yang berkembang",
      "Mengacu pada gagasan, ide, dan identitas suatu negara",
    ],
    a: 1,
    p: "Hakikat dan makna nasionalisme dapat mengalami pergeseran dan penyesuaian yang dipengaruhi oleh penafsiran terhadap ideologi serta dinamika zaman suatu bangsa.",
    t: "Perubahan hakikat nasionalisme selalu merujuk pada penafsiran ideologi negara yang dinamis.",
  },
  {
    q: "Lagu kebangsaan Indonesia Raya yang diperkenalkan W.R. Soepratman pertama kali diperdengarkan untuk membangkitkan nasionalisme pada saat...",
    o: [
      "Rapat organisasi Budi Utomo",
      "Proklamasi kemerdekaan",
      "Sumpah Pemuda",
      "Sidang BPUPKI",
      "Peristiwa Rengasdengklok",
    ],
    a: 2,
    p: "Lagu Indonesia Raya pertama kali diperdengarkan secara instrumental dengan biola oleh W.R. Soepratman pada Kongres Pemuda II (Sumpah Pemuda) 28 Oktober 1928.",
    t: "Momen bersejarah pertama kali berkumandangnya lagu Indonesia Raya adalah Sumpah Pemuda 1928.",
  },
  {
    q: "Dalam hidup bermasyarakat perlu dijaga keserasian dan ketertiban. Untuk itu perlu sikap dan perbuatan...",
    o: [
      "Melakukan protes keras jika haknya dilanggar",
      "Pengendalian diri",
      "Tekad yang bulat",
      "Semangat perjuangan yang tinggi",
      "Menghormati hak-hak orang lain",
    ],
    a: 4,
    p: "Menjaga keserasian antara manusia dalam masyarakat menuntut sikap saling menghormati hak-hak orang lain agar tidak terjadi benturan kepentingan.",
    t: "Cari opsi yang berhubungan langsung dengan interaksi sosial harmonis (menghormati hak orang lain).",
  },
  {
    q: "Hak untuk ikut berperan serta dalam pemerintahan, memilih dan dipilih, mendirikan parpol, termasuk hak warga negara dalam bidang...",
    o: ["Hukum", "Budaya", "Sosial", "Politik", "Ekonomi"],
    a: 3,
    p: "Hak pilih, hak dipilih, kebebasan berserikat, dan mendirikan partai politik merupakan hak asasi warga negara dalam bidang politik.",
    t: "Segala hal tentang pemilu, pemerintahan, dan partai politik masuk ke dalam bidang Politik.",
  },
  {
    q: "Pokok-pokok pikiran kedua yang tercantum dalam Pembukaan UUD 1945 adalah...",
    o: [
      "Negara wajib mencerdaskan kehidupan bangsa",
      "Negara berdasarkan Ketuhanan Yang Maha Esa",
      "Negara berkedaulatan rakyat berdasarkan kerakyatan",
      "Negara melindungi segenap bangsa Indonesia",
      "Negara hendak mewujudkan keadilan sosial bagi seluruh rakyat Indonesia",
    ],
    a: 4,
    p: "Pokok pikiran I: persatuan. Pokok pikiran II: keadilan sosial ('Negara hendak mewujudkan keadilan sosial bagi seluruh rakyat Indonesia'). Pokok pikiran III: kedaulatan rakyat. Pokok pikiran IV: Ketuhanan.",
    t: "Urutan pokok pikiran Pembukaan UUD 1945: I=Persatuan, II=Keadilan Sosial, III=Kedaulatan Rakyat, IV=Ketuhanan.",
  },
  {
    q: "Hubungan sosial yang selaras, serasi, seimbang antara individu dan masyarakat dijiwai oleh nilai-nilai Pancasila, yaitu...",
    o: [
      "Sila pertama",
      "Sila kedua",
      "Sila ketiga",
      "Sila keempat",
      "Sila kelima",
    ],
    a: 4,
    p: "Keseimbangan hak dan kewajiban, keadilan sosial, serta keselarasan antara kepentingan pribadi dan masyarakat dijiwai oleh sila kelima (Keadilan Sosial bagi Seluruh Rakyat Indonesia).",
    t: "Kata kunci keselarasan sosial dan keseimbangan hak/kewajiban publik berakar pada Sila ke-5.",
  },
  {
    q: "Kerja sama yang terjalin antara negara-negara sangat penting dilakukan, hal ini disebabkan karena...",
    o: [
      "Kerja sama antarbangsa dapat menumbuhkan kesadaran politik internasional",
      "Tanpa kerja sama, negara lain akan merongrong kedaulatan",
      "Negara yang satu tidak mungkin hidup sendiri, mereka pasti membutuhkan negara lain",
      "Biaya hidup suatu negara lain akan merongrong kebaikan",
      "Stabilitas nasional tidak mungkin tanpa bantuan",
    ],
    a: 2,
    p: "Hakikat hubungan internasional dan kerja sama antarnegara didasarkan pada kenyataan bahwa suatu negara tidak dapat berdiri sendiri dan mutlak membutuhkan negara lain (saling ketergantungan global).",
    t: "Alasan utama mutlak hubungan internasional adalah ketergantungan antarnegara yang tidak bisa hidup sendiri.",
  },
  {
    q: "Memberikan bantuan jika ada teman bermain yang kesusahan merupakan pengamalan Pancasila...",
    o: [
      "Sila pertama",
      "Sila kedua",
      "Sila ketiga",
      "Sila keempat",
      "Sila kelima",
    ],
    a: 1,
    p: "Memberikan pertolongan, rasa kemanusiaan, dan empati kepada sesama manusia yang mengalami kesusahan adalah butir pengamalan sila ke-2.",
    t: "Sikap suka menolong dan peduli terhadap penderitaan sesama manusia = Sila ke-2.",
  },
  {
    q: "Faktor penyebab runtuhnya pemerintahan Orde Baru, kecuali...",
    o: [
      "Terjadinya krisis moneter",
      "Utang luar negeri",
      "Penyimpangan UUD 1945",
      "Pola pemerintahan tidak terpusat",
      "Krisis politik",
    ],
    a: 3,
    p: "Penyebab runtuhnya Orde Baru antara lain krisis moneter 1997, utang luar negeri yang menumpuk, penyimpangan UUD 1945, krisis politik, dan pola pemerintahan yang sangat 'terpusat' (sentralistik), bukan 'tidak terpusat'.",
    t: "Orde Baru runtuh salah satunya karena kekuasaan yang terlalu sentralistik (terpusat).",
  },
  {
    q: "Gerakan radikalisme yang mengatasnamakan agama/ideologi tertentu merupakan pelanggaran sila...",
    o: [
      "Ketuhanan Yang Maha Esa",
      "Kemanusiaan yang Adil dan Beradab",
      "Persatuan Indonesia",
      "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan",
      "Keadilan Sosial bagi Seluruh Rakyat Indonesia",
    ],
    a: 0,
    p: "Penyimpangan dan tindakan anarkis yang mencederai nilai agama, intoleransi ekstrem, serta mengatasnamakan agama untuk merusak kedamaian adalah pelanggaran terhadap Sila ke-1.",
    t: "Segala bentuk ekstremisme atau kekerasan yang mencatut nama agama mencederai Sila ke-1.",
  },
  {
    q: "Ide pokok paragraf tentang redistribusi pendapatan melalui anggaran dan pajak, subsidi energi, serta pajak progresif properti adalah...",
    o: [
      "Redistribusi pendapatan melalui anggaran dan pajak",
      "Belum optimalnya pembangunan ekonomi",
      "Penerapan pajak progresif",
      "Upaya redistribusi",
      "Langkah mengurangi subsidi",
    ],
    a: 1,
    p: "Teks membahas masalah belum optimalnya manfaat pembangunan ekonomi yang diatasi dengan redistribusi, pajak, dan subsidi. Inti pokok permasalahan yang disorot adalah belum optimalnya pembangunan ekonomi.",
    t: "Cari kalimat utama yang merangkum keseluruhan masalah yang dibahas di awal/akhir paragraf.",
  },
  {
    q: "Kata berimbuhan yang tepat untuk melengkapi kalimat sejarah Islam yang terbuka... adalah...",
    o: [
      "Memperlihatkan, menyolok, kemampuan, keterbukaan",
      "Memerlihatkan, mencolok, kemampuan, keterbukaan",
      "Memerlihatkan, mencolok, mampu, terbuka",
      "Memerlihatkan, menyolok, kemampuan, terbuka",
      "Memperlihatkan, mencolok, kemampuan, keterbukaan",
    ],
    a: 4,
    p: "Kata berimbuhan baku: memperlihatkan (awalan meN- + perlihat + kan), mencolok (bukan menyolok karena huruf c luluh), kemampuan (ke-an dari mampu), keterbukaan (ke-an dari terbuka).",
    t: "Perhatikan kaidah luluh huruf c (mencolok) dan imbuhan baku (memperlihatkan).",
  },
  {
    q: "Simpulan isi paragraf tentang perubahan iklim akibat gas rumah kaca dan peningkatan suhu atmosfer bumi adalah...",
    o: [
      "Peningkatan suhu di dalam rumah yang menggunakan kaca",
      "Pemanasan global akibat efek rumah kaca",
      "Bumi semakin panas hari semakin padat penduduknya",
      "Gas-gas hasil pembakaran mematikan ribuan spesies",
      "Suhu atmosfer bumi meningkat karena sekitnya rumah kaca",
    ],
    a: 1,
    p: "Paragraf menjelaskan aktivitas manusia menghasilkan gas yang memerangkap panas seperti kaca, meningkatkan suhu atmosfer bumi, yang berujung pada efek rumah kaca dan pemanasan global.",
    t: "Simpulan teks merangkum akibat akhir dari fenomena yang dibahas, yakni pemanasan global akibat efek rumah kaca.",
  },
  {
    q: "Pernyataan yang sesuai dengan isi paragraf tentang kerusakan jaringan PLN di Balikpapan dan dihentikannya praktik boga/busana adalah...",
    o: [
      "Ketika listrik padam pelajaran praktik dihentikan",
      "Para siswa merasa senang tidak melanjutkan praktik",
      "Para siswa merasa senang saat praktik di bengkel",
      "Pemadaman listrik setiap hari merupakan hal yang biasa",
      "PLN masih mencari penyebab padamnya listrik",
    ],
    a: 0,
    p: "Teks menyatakan bahwa karena kerusakan jaringan listrik PLN dan penggunaan alat listrik untuk praktik, maka pelajaran praktik boga dan busana terpaksa dihentikan.",
    t: "Cocokkan kalimat pernyataan secara langsung dengan kalimat sebab-akibat dalam teks.",
  },
  {
    q: "Majas yang terdapat dalam kutipan puisi 'Segala kupinta tiada kau beri... Nyanyian angin menderu sepi' adalah...",
    o: ["Hiperbola", "Metonimia", "Personifikasi", "Litotes", "Ironi"],
    a: 2,
    p: "Angin dikatakan menderu sepi (diberi sifat bernyawa atau bisa merasakan kesepian seperti manusia), yang merupakan ciri khas majas personifikasi.",
    t: "Benda mati atau alam yang seolah-olah memiliki sifat hidup/manusia = Majas Personifikasi.",
  },
];

// Database Soal Try Out 2 (35 Soal)
const tryout2Data = [
  {
    q: "Bunyi pasal 33 ayat 3 UUD 1945 sesuai dengan pengamalan Pancasila sila ke-...",
    o: ["1", "2", "3", "4", "5"],
    a: 4,
    p: "Pasal 33 UUD 1945 mengatur perekonomian dan penguasaan bumi, air, serta kekayaan alam oleh negara untuk sebesar-besar kemakmuran rakyat, yang mencerminkan sila ke-5 (Keadilan Sosial).",
    t: "Pasal 33 tentang pengelolaan SDA dan kemakmuran bersama selalu bermuara pada Sila ke-5.",
  },
  {
    q: "Manfaat sumber daya alam di Indonesia harus memperhatikan kesinambungan kesejahteraan bangsa, yang berarti adalah...",
    o: [
      "Banyak KKN yang memicu krisis moneter",
      "Harus memanfaatkan SDA secara terus-menerus tanpa henti",
      "Kegagalan diplomatik mempertahankan wilayah",
      "Harus ada kontrol terhadap pelestarian sumber daya alam yang ada",
      "Terjadinya perbedaan sosial yang tajam",
    ],
    a: 3,
    p: "Pemanfaatan kekayaan alam wajib diimbangi dengan pengawasan serta kontrol ketat terhadap pelestariannya demi keberlanjutan generasi bangsa.",
    t: "Pilih opsi yang mengandung prinsip pelestarian, keseimbangan, dan kontrol yang bijak.",
  },
  {
    q: "Salah satu bentuk hak bela negara bagi warga negara Indonesia adalah ....",
    o: [
      "Mempertahankan wilayah NKRI",
      "Mewujudkan perilaku tertib dalam masyarakat",
      "Memperoleh pendidikan",
      "Ikut serta dalam menjaga keamanan masyarakat",
      "Berpegang teguh pada pedoman Pancasila",
    ],
    a: 2,
    p: "Berdasarkan UUD 1945 Pasal 31, negara menjamin hak warga negara untuk memperoleh pendidikan, yang merupakan bagian dari hak konstitusional warga negara (modal dasar peningkatan kualitas bela negara).",
    t: "Bedakan antara 'Kewajiban' (mempertahankan wilayah) dan 'Hak' warga negara (memperoleh pendidikan).",
  },
  {
    q: "Suporter Timnas Indonesia menggetarkan stadion dengan menyanyikan lagu Indonesia Raya secara kompak disertai mengibarkan bendera raksasa sambil meneteskan air mata. Sikap tersebut mencerminkan...",
    o: [
      "Bela negara",
      "Cinta tanah air",
      "Patriotisme",
      "Nasionalisme",
      "Pengabdian bangsa",
    ],
    a: 2,
    p: "Semangat membara, kebanggaan heroik, rasa haru, dan jiwa pantang menyerah dalam mendukung kehormatan bangsa di arena kompetisi merupakan cerminan sikap patriotisme.",
    t: "Aksi heroik, pembelaan kehormatan bangsa yang disertai gelora semangat tinggi = Patriotisme.",
  },
  {
    q: "Di era media sosial banyak terjadi kasus bullying terhadap hasil karya orang lain dengan komentar merendahkan. Kasus ini bertentangan dengan Pancasila sila ke-...",
    o: ["1", "3", "2", "5", "4"],
    a: 2,
    p: "Bullying, menghina, dan merendahkan harkat martabat sesama manusia melanggar nilai kemanusiaan yang adil dan beradab (Sila ke-2).",
    t: "Segala tindakan merendahkan martabat manusia, bullying, atau cemoohan = Sila ke-2.",
  },
  {
    q: "Contoh usaha pembelaan negara di lingkungan tempat tinggal adalah...",
    o: [
      "Siap sedia membantu TNI jika sewaktu-waktu dibutuhkan",
      "Mengikuti kegiatan ronda untuk menjaga ketertiban dan keamanan di lingkungan",
      "Memasang bendera merah putih saat kemerdekaan",
      "Merazia toko yang menjual minuman keras",
      "Bibubarkan acara organ tunggal",
    ],
    a: 1,
    p: "Bela negara di tingkat paling dekat (lingkungan tempat tinggal) dapat diwujudkan melalui partisipasi aktif dalam siskamling atau kegiatan ronda malam menjaga keamanan.",
    t: "Pilih kegiatan nyata sehari-hari di tingkat RT/RW yang menjaga ketertiban umum (ronda).",
  },
  {
    q: "Berikut ini merupakan dimensi ancaman nirmiliter, kecuali...",
    o: [
      "Ideologi",
      "Keselamatan umum",
      "Pelanggaran wilayah",
      "Teknologi informasi",
      "Sosial budaya",
    ],
    a: 2,
    p: "Ancaman nirmiliter (nonmiliter) meliputi ideologi, politik, ekonomi, sosial budaya, teknologi informasi, dan keselamatan umum. 'Pelanggaran wilayah' secara fisik melibatkan kekuatan militer.",
    t: "Pelanggaran wilayah perbatasan oleh kapal/pesawat asing militer adalah bentuk ancaman militer.",
  },
  {
    q: "Kekuatan utama dalam Sistem Pertahanan dan Keamanan Rakyat Semesta (Sishankamrata) adalah...",
    o: ["Polri", "TNI", "Rakyat", "TNI dan rakyat", "TNI dan Polri"],
    a: 4,
    p: "Pasal 30 ayat (2) UUD 1945 menegaskan bahwa pertahanan dan keamanan negara dilaksanakan melalui Sishankamrata oleh TNI dan Polri sebagai kekuatan utama, serta rakyat sebagai kekuatan pendukung.",
    t: "Hafalkan rumus Sishankamrata: Kekuatan Utama = TNI & Polri; Kekuatan Pendukung = Rakyat.",
  },
  {
    q: "Keluarga Pak Adi sepakat membatalkan rencana liburan ke Bali demi keselamatan bersama di tengah merebaknya virus corona. Keluarga Pak Adi menerapkan pengamalan Pancasila sila ke-...",
    o: ["1", "2", "3", "4", "5"],
    a: 4,
    p: "Mementingkan keselamatan umum di atas kepentingan pribadi/liburan keluarga agar tidak membahayakan orang lain merupakan wujud pengamalan Sila ke-5.",
    t: "Mengorbankan kepentingan/kesenangan pribadi demi tidak merugikan kepentingan umum = Sila ke-5.",
  },
  {
    q: "Kerja keras tenaga kesehatan menangani pasien Covid-19 dan kerja keras profesi lain menstabilkan ekonomi adalah wujud pengamalan Pancasila, yakni sila ke-...",
    o: ["1", "2", "3", "4", "5"],
    a: 4,
    p: "Suka bekerja keras, menghargai hasil kerja profesi lain, dan berpartisipasi mewujudkan kemajuan yang merata merupakan butir pengamalan Pancasila sila ke-5.",
    t: "Kata kunci 'Bekerja Keras' dalam mengemban profesi demi kesejahteraan masyarakat adalah butir Sila ke-5.",
  },
  {
    q: "Hal yang paling sulit untuk menjadi manusia yang berintegritas adalah...",
    o: [
      "Perilaku jujur",
      "Tanggung jawab",
      "Disiplin",
      "Konsistensi",
      "Percaya terhadap orang lain",
    ],
    a: 3,
    p: "Memulai bersikap jujur mungkin mudah bagi sebagian orang, namun tantangan terbesar dalam menjaga integritas sepanjang hayat adalah konsistensi (keajegan sikap di segala situasi).",
    t: "Ujian terbesar dalam integritas adalah mempertahankannya secara terus-menerus (Konsistensi).",
  },
  {
    q: "Sumpah setia terhadap NKRI dan Pancasila bagi seorang ASN berlandaskan pada...",
    o: [
      "Pancasila sebagai wawasan hidup bangsa",
      "Pejabat negara harus setia terhadap NKRI",
      "Pancasila merupakan landasan hukum bangsa",
      "NKRI dan Pancasila adalah warisan budaya",
      "Pancasila penting dalam membentuk perilaku ASN",
    ],
    a: 4,
    p: "Sumpah jabatan dan ikrar setia ASN mendudukan Pancasila sebagai pandangan hidup dan sumber nilai moral untuk membentuk karakter serta perilaku penyelenggara negara.",
    t: "Sumpah ASN diikrarkan guna menjamin pembentukan perilaku dan karakter abdi negara yang berintegritas.",
  },
  {
    q: "Upaya melestarikan semangat juang 1945 dan nasionalisme di era pembangunan saat ini dapat dilakukan dengan cara...",
    o: [
      "Belajar dengan gigih agar mendapatkan kemampuan yang maksimal",
      "Melatih kemampuan untuk menghadapi musuh fisik",
      "Menyiapkan rencana menghadapi perubahan masa depan",
      "Menjaga kesehatan tubuh jika dibutuhkan sewaktu-waktu",
      "Memiliki tabungan yang banyak",
    ],
    a: 0,
    p: "Di era pembangunan dan kemerdekaan saat ini, semangat juang dilestarikan melalui belajar dengan gigih dan meningkatkan kompetensi diri demi kemajuan bangsa.",
    t: "Bentuk perjuangan masa kini bagi warga/pelajar adalah belajar gigih dan menguasai ilmu pengetahuan.",
  },
  {
    q: "Integritas berdasarkan kompetensi KPK memiliki pengertian bahwa...",
    o: [
      "Bertindak sesuai perkataan dan tindakan sesuai dengan nilai secara konsisten",
      "Mutu, sifat, dan keadaan yang digambarkan secara utuh",
      "Patuh pada kode etik dalam perkataan dan perbuatan",
      "Berkepribadian utuh yang merujuk pada nilai moral",
      "Kepribadian yang membawa marwah bangsa",
    ],
    a: 0,
    p: "Standar integritas KPK mendefinisikan integritas sebagai kesesuaian antara perkataan dan perbuatan yang dilandasi nilai-nilai luhur secara konsisten.",
    t: "Definisi KPK untuk integritas: konsistensi antara ucapan dan perbuatan.",
  },
  {
    q: "Pola pikir dan cara pandang bangsa Indonesia terhadap jati diri dan lingkungannya yang didasarkan pada Pancasila dan UUD 1945 dikenal sebagai...",
    o: [
      "Nasional",
      "Wawasan",
      "Wawasan nasional",
      "Wawasan nusantara",
      "Ketahanan nasional",
    ],
    a: 3,
    p: "Wawasan nusantara adalah cara pandang dan sikap bangsa Indonesia mengenai diri dan lingkungan geografisnya sebagai satu kesatuan.",
    t: "Cara pandang geopolitik bangsa Indonesia terhadap diri dan wilayahnya disebut Wawasan Nusantara.",
  },
  {
    q: "Permasalahan paling kompleks yang dialami oleh negara Indonesia yang mengakibatkan tergerusnya nasionalisme adalah...",
    o: [
      "Lemahnya aparatur penegak hukum",
      "Permasalahan disintegrasi kedaerahan",
      "Perkembangan globalisme yang kian pesat",
      "Perselisihan ideologi, politik, dan moral",
      "Rendahnya kepercayaan terhadap pemerintah",
    ],
    a: 3,
    p: "Perselisihan di tingkat dasar ideologi, politik, dan moral merupakan masalah paling mendasar dan kompleks yang dapat merusak sendi-sendi nasionalisme.",
    t: "Konflik atau perselisihan yang menyangkut fondasi ideologi dan moral bangsa adalah ancaman paling kompleks.",
  },
  {
    q: "Koperasi dapat membantu pemerataan kesejahteraan dikarenakan...",
    o: [
      "Cocok dilaksanakan di negara berkembang",
      "Diperuntukan bagi usaha para tani",
      "Merupakan bentuk usaha murni",
      "Berusaha untuk memajukan masyarakat miskin",
      "Mengutamakan kepentingan bersama para anggotanya",
    ],
    a: 4,
    p: "Koperasi berasaskan kekeluargaan yang menempatkan kepentingan bersama seluruh anggota di atas kepentingan pribadi demi mewujudkan kesejahteraan merata.",
    t: "Prinsip utama koperasi selalu berorientasi pada kekeluargaan dan kepentingan bersama anggota.",
  },
  {
    q: "Fungsi filsafat Pancasila dalam hubungan dengan ideologi-ideologi di dunia adalah sebagai...",
    o: [
      "Unsur ideologi setiap bangsa",
      "Perebutan hegemoni filsafat",
      "Perpaduan filsafat dan ideologi",
      "Penyaringan masuknya ideologi asing",
      "Perbandingan perkembangan ideologi",
    ],
    a: 3,
    p: "Filsafat Pancasila berfungsi sebagai filter atau alat penyaring (penangkal) terhadap masuknya nilai-nilai ideologi asing yang bertentangan dengan kepribadian bangsa.",
    t: "Menghadapi arus globalisasi dan ideologi luar, Pancasila berfungsi sebagai filter / penyaring.",
  },
  {
    q: "Bukti bahwa Indonesia berjuang melawan penjajahan sesuai dengan Piagam Perserikatan Bangsa-Bangsa, yaitu dengan adanya asas...",
    o: [
      "Organisasi bangsa-bangsa melindungi hak asasi manusia di dunia",
      "Manusia mempunyai kesamaan dalam hal derajat dan kedudukan",
      "Manusia mempunyai kebebasan dalam menentukan kehidupannya",
      "Bangsa menunjukkan hak manusia yang diberikan Tuhan",
      "Adanya pengakuan bagi setiap penduduk",
    ],
    a: 0,
    p: "Perjuangan anti penjajahan yang digaungkan Indonesia sejalan dengan Piagam PBB mengenai pengakuan universal hak asasi manusia dan kemerdekaan segala bangsa.",
    t: "Kesesuaian perjuangan RI dengan Piagam PBB terletak pada prinsip perlindungan hak asasi manusia universal.",
  },
  {
    q: "Kerukunan antarumat beragama diwujudkan dalam sikap dan perbuatan, yaitu...",
    o: [
      "Menghormati agama lain dan tetap teguh pada agamanya sendiri",
      "Saling memaafkan jika bertemu",
      "Bagaimana harus menghormati agama sendiri",
      "Jika perlu masuk agama lain",
      "Menghormati agama lain jika dirasa perlu",
    ],
    a: 0,
    p: "Toleransi dan kerukunan sejati tercermin saat seseorang mampu menghormati keyakinan umat agama lain secara tulus tanpa harus mencampuradukkan akidah agamanya sendiri.",
    t: "Toleransi beragama yang sehat: menghormati agama lain sambil tetap teguh pada keyakinan sendiri.",
  },
  {
    q: "Hak warga negara yang diatur pemerintah dengan asumsi kedudukan sama di hadapan hukum meliputi: (1) Hajat hidup orang banyak, (2) Pembelaan negara, (3) Budaya, (4) Pekerjaan dan penghidupan layak, (5) Memilih warga negara, (6) Menjalankan ibadah agama. Nomor berapa saja?",
    o: ["1,2,3", "1,3,4", "2,3,5", "2,4,6", "3,4,6"],
    a: 3,
    p: "Hak konstitusional warga negara yang dijamin setara dalam UUD 1945: (2) Hak pembelaan negara (Pasal 27 ayat 3), (4) Hak atas pekerjaan & penghidupan layak (Pasal 27 ayat 2), (6) Hak bebas beribadah (Pasal 29 ayat 2). Jadi nomor 2, 4, dan 6.",
    t: "Pilih nomor yang merujuk pada pasal-pasal hak fundamental UUD 1945 (Bela negara, Pekerjaan, Ibadah).",
  },
  {
    q: "Unsur-unsur Pancasila yang telah melekat pada bangsa Indonesia dalam adat istiadat, kebudayaan, dan religius terakumulasi dalam...",
    o: [
      "Ciri khas bangsa",
      "Toleransi umat beragama",
      "Tripitaka",
      "Bhinneka tunggal ika",
      "Free fight liberalism",
    ],
    a: 3,
    p: "Segala bentuk kemajemukan adat, suku, agama, dan budaya bangsa Indonesia terakumulasi dan terbingkai dalam semboyan Bhinneka Tunggal Ika.",
    t: "Akumulasi keragaman budaya dan karakter bangsa terangkum dalam Bhinneka Tunggal Ika.",
  },
  {
    q: "Hal mengenai bendera nasional Indonesia diatur oleh UUD 1945 pasal...",
    o: ["31", "32", "33", "34", "35"],
    a: 4,
    p: "UUD 1945 Bab XV tentang Bendera, Bahasa, dan Lambang Negara, serta Lagu Kebangsaan menetapkan pada Pasal 35 bahwa Bendera Negara Indonesia ialah Sang Merah Putih.",
    t: "Hafalan wajib identitas negara: Pasal 35 (Bendera Sang Merah Putih).",
  },
  {
    q: "Cara pandang suatu bangsa tentang diri dan lingkungannya dalam eksistensinya yang serba terhubung serta pembangunannya disebut...",
    o: [
      "Wawasan kenegaraan",
      "Wawasan nasional",
      "Wawasan nusantara",
      "Ketahanan nasional",
      "Pembangunan nasional",
    ],
    a: 1,
    p: "Definisi umum cara pandang suatu bangsa tentang diri dan lingkungannya yang dijabarkan dari falsafah hidupnya adalah Wawasan Nasional.",
    t: "Definisi konseptual umum tentang cara pandang bangsa terhadap diri dan lingkungan = Wawasan Nasional.",
  },
  {
    q: "Panitia kecil yang dibentuk BPUPKI untuk merancang dasar negara beranggotakan...",
    o: ["7", "8", "9", "12", "19"],
    a: 2,
    p: "Panitia kecil bentukan BPUPKI yang berjumlah sembilan orang dikenal sebagai Panitia Sembilan dengan tugas merumuskan dasar negara (menghasilkan Piagam Jakarta).",
    t: "Panitia kecil perumus dasar negara bentukan BPUPKI = Panitia Sembilan.",
  },
  {
    q: "Pancasila mengalami peningkatan dari calon dasar negara menjadi dasar negara disebut sebagai...",
    o: [
      "Pancasila sebagai kausa formalis",
      "Pancasila sebagai kausa finalis",
      "Pancasila sebagai kausa efisien",
      "Pancasila sebagai kausa materialis",
      "Pancasila sebagai kausa matrealistis",
    ],
    a: 2,
    p: "Kausa efisien (asal mula karya) adalah proses pengesahan Pancasila dari calon dasar negara menjadi dasar negara yang sah oleh PPKI.",
    t: "Proses penetapan/pengesahan resmi Pancasila oleh PPKI merupakan Kausa Efisien.",
  },
  {
    q: "Perlawanan bersenjata PETA (Pembela Tanah Air) di Blitar dipimpin oleh...",
    o: [
      "Moh. Hatta",
      "Ir. Soekarno",
      "Soedirman",
      "Supriyadi",
      "Abikusno Tjokosujoso",
    ],
    a: 3,
    p: "Pemberontakan pasukan PETA di Blitar pada tanggal 14 Februari 1945 terhadap pendudukan Jepang dipimpin oleh Shodanco Supriyadi yang kemudian ditetapkan sebagai pahlawan nasional.",
    t: "Tokoh heroik pemimpin pemberontakan PETA di Blitar = Supriyadi.",
  },
  {
    q: "Hak DPR untuk mengajukan usul, saran, dan anjuran kepada Presiden disebut...",
    o: [
      "Hak anggaran",
      "Hak inisiatif",
      "Hak petisi",
      "Hak angket",
      "Hak interpelasi",
    ],
    a: 2,
    p: "Hak petisi adalah hak konstitusional yang dimiliki oleh Dewan Perwakilan Rakyat (DPR) untuk mengajukan usul, saran, atau anjuran kepada pemerintah/presiden.",
    t: "Usul, anjuran, atau saran resmi DPR kepada Presiden disebut Hak Petisi.",
  },
  {
    q: "Dalam hal peraturan pengganti UU (Perpu) agar ditetapkan menjadi UU, Presiden wajib meminta persetujuan...",
    o: ["MK", "KY", "MA", "DPR", "MPR"],
    a: 3,
    p: "Perpu yang dikeluarkan Presiden dalam kegentingan memaksa harus diajukan ke DPR pada persidangan berikut untuk mendapatkan persetujuan atau penolakan menjadi Undang-Undang.",
    t: "Segala urusan pembentukan dan pengesahan UU / Perpu melibatkan persetujuan DPR.",
  },
  {
    q: "Kapan Bendera Merah Putih resmi dijadikan sebagai bendera nasional...",
    o: [
      "15 Februari 1945",
      "17 Agustus 1945",
      "11 Februari 1945",
      "19 Agustus 1945",
      "13 Februari 1945",
    ],
    a: 1,
    p: "Bendera Sang Merah Putih secara resmi dikibarkan dan ditetapkan sebagai bendera kebangsaan negara Indonesia bertepatan dengan Proklamasi Kemerdekaan pada 17 Agustus 1945.",
    t: "Bendera resmi berkibar dan menjadi simbol negara sejak Proklamasi 17 Agustus 1945.",
  },
  {
    q: "Pembangunan rumah mewah itu tidak cukup enam bulan. Konfiks pe(N)-an yang semakna dengan imbuhan pada kata tersebut adalah...",
    o: [
      "Karya tulis ilmiah harus ditulis berdasarkan penelitian",
      "Penangkapan penjahat itu dilakukan dengan kekerasan",
      "Penyaringan air itu terbuat dari sabut kelapa dan arang",
      "Pendapatan pengamen itu bisa seratus ribu per hari",
      "Pendidikan anak itu hanya sampai bangku SMP",
    ],
    a: 2,
    p: "Kata 'pembangunan' bermakna proses atau perbuatan 'membangun'. Bentuk serupa terdapat pada kata 'penyaringan' yang bermakna proses atau alat untuk 'menyaring'.",
    t: "Cari bentukan kata berimbuhan pe(N)-an yang bermakna proses tindakan nyata dari kata kerja (bangun -> saring).",
  },
  {
    q: "Penulisan gabungan kata yang benar terdapat dalam kalimat...",
    o: [
      "Hendaknya kita senantiasa bekerja sama...",
      "Surat yang Anda kirim belum Anda tanda tangani",
      "Masyarakat di desa terpencil itu berterima kasih atas bantuan...",
      "Dia harus mempertanggung-jawabkan perbuatannya",
      "Orang itu di-'meja hijau'-kan",
    ],
    a: 2,
    p: "Penulisan 'berterima kasih' merupakan gabungan kata yang sudah padu dan benar sesuai EYD. (Tanda tangani seharusnya ditandatangani jika berawalan/berakhiran gabung; mempertanggungjawabkan digabung tanpa tanda hubung).",
    t: "Frasa majemuk yang penulisannya digabung sesuai kaidah baku: berterima kasih, sukacita, peribahasa.",
  },
  {
    q: "Abrasi merupakan proses fisik yang menyebabkan degradasi lahan kawasan pesisir akibat gelombang air laut... Ide pokok paragraf tersebut adalah...",
    o: [
      "Pengertian abrasi",
      "Faktor penyebab terjadinya abrasi",
      "Tahap-tahap terjadinya abrasi",
      "Pemicu terjadinya abrasi",
      "Proses penggerusan pantai dan abrasi",
    ],
    a: 0,
    p: "Kalimat pertama secara lugas memberikan definisi atau penjelasan mengenai apa itu abrasi, sehingga ide pokok paragraf tersebut adalah pengertian abrasi.",
    t: "Paragraf yang dibuka dengan definisi (merupakan/adalah) memiliki ide pokok tentang pengertian suatu fenomena.",
  },
  {
    q: "Alokasi anggaran untuk bidang pertahanan dan keamanan tahun ini dirasakan belum memadai... Makna kata 'alokasi' dalam kalimat tersebut adalah...",
    o: ["Penempatan", "Penyediaan", "Pemenuhan", "Penjatahan", "Penetapan"],
    a: 3,
    p: "Dalam konteks pengelolaan anggaran keuangan negara, kata 'alokasi' bermakna penjatahan atau pembagian porsi dana anggaran.",
    t: "Dalam konteks keuangan/anggaran, alokasi dana bersinonim dengan penjatahan anggaran.",
  },
  {
    q: "Pak Jono seorang guru besar yang ilmunya tinggi namun tidak jemawa, terus belajar dan mencari pengetahuan baru. Peribahasa yang sesuai adalah...",
    o: [
      "Kacang lupa kulitnya",
      "Esa hilang dua terbilang",
      "Gajah mati karena gadingnya",
      "Bagai kera diberi bunga mawar",
      "Seperti padi, semakin tua semakin merunduk",
    ],
    a: 4,
    p: "Orang yang berilmu tinggi, sukses, atau berpangkat namun tetap rendah hati dan tidak sombong diibaratkan seperti padi: 'semakin berisi semakin merunduk'.",
    t: "Simbol kerendahan hati orang berilmu tinggi disamakan dengan filosofi padi (makin tua makin merunduk).",
  },
];

// Database Soal Try Out 3 (35 Soal)
const tryout3Data = [
  {
    q: "Etnosentris atau etnosentrisme sebenarnya tidak bisa selalu dipandang buruk atau memberi dampak negatif. Karena ada kalanya sikap ini bisa membawa dampak positif seperti di bawah ini, kecuali ....",
    o: [
      "Menguatkan suatu kelompok yang sama karena memiliki latar belakang sejarah yang serupa",
      "Membanggakan budaya sendiri dan melihat rendah budaya lain dapat memicu konflik sesama warga Negara",
      "Menjaga keaslian dan keutuhan budaya",
      "Meningkatkan persatuan dan kesatuan dalam suatu kelompok",
      "Menumbuhkan jiwa patriotisme",
    ],
    a: 1,
    p: "Membanggakan budaya sendiri dan merendahkan budaya lain adalah pengertian dari sisi *negatif* etnosentrisme karena sifatnya dapat menghambat tumbuhnya integrasi dan memicu konflik antarsuku/budaya. Sedangkan opsi lainnya adalah sisi positif etnosentrisme kelompok.",
    t: "Kata kunci 'kecuali dampak positif' = cari dampak yang buruk/negatif (memicu konflik dan merendahkan pihak lain).",
  },
  {
    q: "Berikut yang bukan merupakan perilaku pencegahan disintegrasi bangsa....",
    o: [
      "Memberikan pemahaman tentang patriotisme",
      "Menghilangkan hal-hal yang berbau primodalisme",
      "Rakyat harus punya sikap selektif",
      "Mengembangkan sikap etnosentrisme",
      "Melawan berbagai gerakan separatis",
    ],
    a: 3,
    p: "Mengembangkan sikap etnosentrisme (mengagungkan budaya sendiri berlebihan dan merendahkan yang lain) justru dapat memicu konflik dan perpecahan (disintegrasi).",
    t: "Etnosentrisme berlebihan adalah racun bagi persatuan bangsa majemuk, sehingga tidak mungkin menjadi upaya pencegahan disintegrasi.",
  },
  {
    q: "Dalam rangka menyambut globalisasi ekonomi, ada beberapa upaya-upaya dalam mengatasi globalisasi, kecuali ....",
    o: [
      "Menerima budaya asing",
      "Mencintai produk dalam negeri",
      "Meningkatkan daya potensi nasional",
      "Mengembangkan usaha mikro",
      "Memprioritaskan pemulihan ekonomi",
    ],
    a: 0,
    p: "Menerima budaya asing secara mentah-mentah tanpa filter bukan cara mengatasi dampak globalisasi, melainkan harus disaring (selektif) menyesuaikan nilai, norma, dan kepribadian Pancasila.",
    t: "Budaya asing tidak boleh diterima secara langsung/utuh tanpa adanya filter.",
  },
  {
    q: "Indonesia adalah negara dengan keberagaman suku, etnik, budaya, agama, serta karakteristik wilayahnya. Sangat diperlukan sikap atau perilaku yang menunjang terciptanya pembangunan bangsa, salah satunya ....",
    o: [
      "Memperkuat posisi kebudayaan daerah di atas kebudayaan nasional",
      "Memperkuat kedudukan pemerintah pusat sebagai pemegang kedaulatan rakyat",
      "Menghilangkan perbedaan antarsuku bangsa dalam berbangsa dan bernegara",
      "Memperkecil segala hal yang berpotensi menimbulkan konflik masyarakat",
      "Memperkuat kedudukan bahasa daerah sebagai salah satu simbol persatuan",
    ],
    a: 3,
    p: "Menghadapi keberagaman, langkah yang paling solutif untuk kemajuan dan stabilitas adalah memperkecil segala potensi atau bibit-bibit konflik di masyarakat.",
    t: "Pembangunan yang sukses di negara majemuk mensyaratkan tidak adanya konflik SARA. Maka redam/perkecil potensinya.",
  },
  {
    q: "Dalam paham filsafat Pancasila harkat dan martabat manusia ditentukan oleh perilaku dan moral manusia itu sendiri, yaitu ...",
    o: [
      "Sikap individual manusia modern",
      "Sikap manusia yang bersumber pada kebutuhan hidup sehari-hari",
      "Sikap kepribadian manusia yang baik, benar, semangat, dan tecermin dalam mental dan batin pelaku",
      "Perilaku yang senantiasa merujuk pada setiap situasi yang sedang dihadapi",
      "Sikap kesungguhan manusia dalam memperjuangkan sesuatu yang menurutnya baik dan benar",
    ],
    a: 2,
    p: "Perilaku dan moral manusia bermuara pada kepribadian manusia yang baik, luhur, bersemangat, yang tecermin langsung dari mental serta batin pelakunya (akhlak).",
    t: "Kata kunci penentu 'moral dan harkat' adalah cerminan dari 'kepribadian dan mental batin' pelaku yang baik.",
  },
  {
    q: "Berikut ini termasuk hukum privat, kecuali ....",
    o: [
      "Seseorang dengan sengaja melakukan penipuan pada orang lain",
      "Seseorang melakukan perkawinan di luar negeri",
      "Seseorang mengadakan perjanjian jual beli tanah",
      "Sesorang menuntut hak waris dari orangtuanya",
      "Seseorang menepati perjanjian jual beli tanah",
    ],
    a: 0,
    p: "Hukum privat (Perdata) mengatur hubungan antar-individu (seperti waris, jual beli, perkawinan, dsb). Sedangkan 'penipuan sengaja' masuk ke ranah tindak pidana (Hukum Publik).",
    t: "Perdata/Privat = Jual beli, utang piutang, warisan, nikah. Pidana/Publik = Penipuan, pencurian, pembunuhan.",
  },
  {
    q: "Untuk membentuk karakter penyelengara negara yang baik dan berintegritas, maka diperlukan ....",
    o: [
      "Pelatihan bela negara",
      "Kode etik penyelenggara negara",
      "Norma dasar",
      "Sumpah setia jabatan",
      "Tata tertib penyelenggara negara",
    ],
    a: 1,
    p: "Kode etik aparatur/penyelenggara negara adalah instrumen khusus untuk mengatur dan membentuk mentalitas aparatur agar menjalankan kewenangan/jabatannya dengan berintegritas dan tidak menyimpang.",
    t: "Panduan perilaku dan moralitas yang spesifik mengatur jabatan/profesi aparatur disebut Kode Etik.",
  },
  {
    q: "Berikut ini contoh sikap yang mencerminkan bela negara adalah ....",
    o: [
      "Atlet yang menjuarai Olimpiade Tokyo 2020 ikut mendirikan sekolah di Indonesia",
      "Suporter atau pendukung kontingen Indonesia mengunakan baju yang seragam dengan paduan merah putih",
      "Perjuangan para atlet untuk menjuarai kompetisi dan memperoleh medali, dan mengharumkan nama bangsa",
      "Atlet Indonesia menggunakan sepeda asli Indonesia saat bertanding di Olimpiade",
      "Atlet Indonesia mengibarkan bendera merah putih dengan penuh kebanggaan setelah meraih medali",
    ],
    a: 2,
    p: "Berjuang keras meraih prestasi tinggi demi membela, mengangkat harkat martabat, dan mengharumkan nama bangsa di kancah internasional adalah perwujudan konkret bela negara bagi profesi atlet.",
    t: "Bela negara profesi (seperti atlet) = Berjuang keras mengharumkan nama negara di ajang kompetisi (aksi konkret/prestasi).",
  },
  {
    q: "Berdasarkan pasal 116 ayat 1 UUD 1945 rancangan tatib MPR menyatakan jika Presiden dan Wakil Presiden secara bersamaan berhenti, maka yang memilihnya adalah MPR dengan cara ....",
    o: [
      "Rapat paripurna",
      "Rapat terbuka",
      "Rapat tertutup",
      "Rapat insidental",
      "Rapat reshuffle",
    ],
    a: 0,
    p: "Berdasarkan tata tertib, MPR menyelesaikan kewenangan kekosongan kursi pimpinan eksekutif tertinggi tersebut melalui forum resmi tertinggi majelis, yaitu Rapat Paripurna.",
    t: "Keputusan penetapan dan pemilihan tertinggi kenegaraan oleh majelis (DPR/MPR) selalu dilaksanakan dalam Rapat Paripurna.",
  },
  {
    q: "Kasus suap mantan Menteri Sosial menjadikan anggaran bansos sebagai peluang untuk meraup kekayaan. Perilaku ini jelas bertentangan dengan Pancasila sila ke-....",
    o: ["1", "2", "3", "4", "5"],
    a: 4,
    p: "Korupsi secara umum merusak semua sila, tetapi karena kasus spesifik ini mengkhianati 'bantuan sosial' yang harusnya disalurkan untuk memeratakan ekonomi dan keadilan (kemiskinan), maka ia paling menyayat Sila ke-5 (Keadilan Sosial).",
    t: "Korupsi dana yang berkaitan langsung dengan kesejahteraan rakyat miskin (Bansos) sangat bertentangan dengan keadilan sosial (Sila ke-5).",
  },
  {
    q: "Mantan atlet Uus Susansyah mendirikan sekolah voli dan menyisihkan gajinya untuk membentuk attitude yang baik bagi anak asuhnya. Sikap tersebut merupakan cerminan dari ...",
    o: [
      "Bela negara",
      "Cinta tanah air",
      "Patriotisme",
      "Nasionalisme",
      "Pengabdian bangsa",
    ],
    a: 0,
    p: "Mengembangkan prestasi pemuda, menyumbangkan pikiran, tenaga, hingga harta secara nyata untuk mencetak generasi penerus yang berprestasi adalah wujud nyata sikap bela negara melalui jalur pendidikan/profesi.",
    t: "Pengorbanan waktu/harta/tenaga secara nyata demi meningkatkan kualitas generasi dan nama bangsa = Bela Negara.",
  },
  {
    q: "Upaya bela negara dapat dilakukan oleh seluruh warga negara dengan alasan sebagai berikut, kecuali ....",
    o: [
      "Untuk menjaga keutuhan wilayah",
      "Upaya bertahan dari ancaman terhadap negara",
      "Sebagai ketentuan hukum dasar yang wajib ditaati",
      "Memperoleh penghargaan atas nama bangsa dan negara",
      "Menjalankan hak dan kewajiban sebagai warga negara",
    ],
    a: 3,
    p: "Bela negara adalah kewajiban dan hak warga negara yang bersumber dari kecintaan ikhlas tanpa pamrih. Melakukannya demi mengejar penghargaan/imbalan bukanlah dasar fundamental bela negara.",
    t: "Bela negara itu hak dan kewajiban murni (ikhlas), bukan untuk mengejar pengakuan atau penghargaan semata.",
  },
  {
    q: "Pembagian kekuasaan lembaga tinggi negara terbagi menjadi lembaga eksekutif, legislatif, dan yudikatif. Ketiga lembaga tersebut dipersatukan dengan ....",
    o: ["Hukum", "Pancasila", "Karakter", "UUD 1945", "NKRI"],
    a: 1,
    p: "Nilai-nilai integritas dan sistem dari setiap kelembagaan negara bersumber dan dipersatukan oleh Pancasila sebagai falsafah dasar dan pandangan hidup bangsa.",
    t: "Panduan moral, jiwa penuntun, dan pemersatu segala sistem kenegaraan Indonesia adalah Pancasila.",
  },
  {
    q: "Keutamaan seorang ASN sebagai pejabat publik harus berintegritas tinggi pada nilai ....",
    o: [
      "Kejujuran",
      "Kedisiplinan",
      "Tanggung jawab",
      "Kepedulian",
      "Pelayanan publik",
    ],
    a: 0,
    p: "Akar atau nilai paling dasar dan utama dalam integritas (baik kompetensi KPK maupun filosofi dasar) adalah nilai Kejujuran.",
    t: "Integritas = Sinkronisasi hati, pikiran, ucapan, dan perbuatan (KEJUJURAN).",
  },
  {
    q: "Berikut ini contoh perilaku nasionalisme yang hadir dalam kehidupan bernegara tecermin pada hal-hal berikut, kecuali ...",
    o: [
      "Menaati peraturan yang sudah ditetapkan",
      "Taat terhadap hukum yang berlaku",
      "Menghormati putusan peradilan",
      "Menggunakan produk dalam negeri",
      "Ikut serta dalam upaya pembelaan negara",
    ],
    a: 3,
    p: "Menggunakan produk dalam negeri lebih tepat diklasifikasikan sebagai sikap Cinta Tanah Air dalam aspek sosial-ekonomi bermasyarakat, bukan ranah 'hukum tata negara / kehidupan penyelenggaraan bernegara'.",
    t: "Menaati hukum, peradilan, aturan negara adalah wujud nasionalisme dalam wilayah yurisdiksi tata negara.",
  },
  {
    q: "Nasionalisme yang lahir di Indonesia adalah nationalism of humanity yang dikemukakan Ir. Soekarno yang berarti bahwa .....",
    o: [
      "Kemanusiaan adalah satu",
      "Kemanusiaan merupakan perbedaan yang harus dipertahankan",
      "Karakter bangsa lahir dari kemanusiaan",
      "Jiwa dan jati diri bangsa dipersatukan",
      "Kemanusiaan adalah sebuah karakter",
    ],
    a: 0,
    p: "Ir. Soekarno sering menekankan bahwa nasionalisme Indonesia tidak terlepas dari internasionalisme atau kemanusiaan. 'Nationalism of humanity' berarti asas kemanusiaan yang satu dan universal.",
    t: "Sila ke-2 (Kemanusiaan) dijiwai asas universalitas, merangkul perbedaan dalam satu kesatuan perikemanusiaan.",
  },
  {
    q: "Memupuk rasa nasionalisme kebangsaan bagi masyarakat Indonesia berdasarkan keberagaman suku, agama, ras, dan antargolongan agar ....",
    o: [
      "Bangsa Indonesia sendiri",
      "Moralitas bangsa terjaga",
      "Terciptanya kedaulatan bangsa",
      "Identitas nasional terjaga",
      "Tidak kehilangan kepribadian bangsa",
    ],
    a: 4,
    p: "Menghadapi keberagaman internal maupun pengaruh eksternal, nasionalisme mutlak dipupuk agar bangsa Indonesia tidak kehilangan jiwa dan kepribadian luhurnya.",
    t: "Pemupukan nasionalisme berfungsi krusial sebagai penjaga dan pelestari Kepribadian Bangsa.",
  },
  {
    q: "Sikap keteguhan hati dalam memperjuangkan kepentingan nasional dikenal sebagai....",
    o: [
      "Nasionalisme",
      "Keamanan nasional",
      "Cinta tanah air",
      "Kekuatan nasional",
      "Ketahanan nasional",
    ],
    a: 4,
    p: "Keteguhan hati, keuletan, dan ketangguhan yang dimiliki suatu bangsa untuk memperjuangkan kepentingan nasionalnya dari segala ancaman adalah definisi Ketahanan Nasional.",
    t: "Keteguhan, keuletan, dan ketangguhan menghadapi ancaman/kesulitan = Ketahanan Nasional.",
  },
  {
    q: "Fenomena generasi muda yang mengalami kepudaran terhadap jiwa nasionalisme disebabkan karena ...",
    o: [
      "Orientasi nasionalisme adalah sikap dan perbuatan",
      "Labelling yang menjadi stigma bagi generasi muda",
      "Ukuran nasionalisme dipahami hanya sebatas perjuangan fisik",
      "Kurangnya daya juang terhadap tantangan perubahan zaman",
      "Kurangnya sosok heroisme bagi kaum muda",
    ],
    a: 2,
    p: "Salah satu penyebab kepudaran nasionalisme adalah sempitnya pemahaman generasi muda yang sering kali hanya mengasosiasikan nasionalisme dengan perjuangan bersenjata (fisik) masa lalu, padahal saat ini tantangannya berbeda.",
    t: "Miskonsepsi bahwa bela negara/nasionalisme harus dengan memanggul senjata fisik di medan perang.",
  },
  {
    q: "Sesuai Pasal 28 UUD 1945 setiap warga negara memiliki hak berserikat dan mengeluarkan pendapat. Namun, kebebasan yang dimiliki haruslah kebebasan yang....",
    o: [
      "Sesuai dengan keinginan pemerintah",
      "Sesuai dengan hati nurani",
      "Dapat dirujuk kepada hukum",
      "Menghargai hak-hak orang lain",
      "Sesuai dengan kehendak masyarakat",
    ],
    a: 3,
    p: "Pelaksanaan HAM (termasuk kebebasan berpendapat) di Indonesia adalah HAM yang berbatasan dengan hak asasi manusia lainnya. Artinya kebebasan dibatasi oleh keharusan menghargai hak asasi dan kemerdekaan orang lain.",
    t: "Kebebasan berpendapat dalam berdemokrasi mutlak harus dibarengi tenggang rasa terhadap hak orang lain.",
  },
  {
    q: "Dalam makna Pembukaan UUD 1945 terutama alinea pertama ('Bahwa sesungguhnya kemerdekaan itu ialah hak segala bangsa...'), bagi bangsa Indonesia mengandung maksud sebagai ...",
    o: [
      "Sumber dari segala hukum yang berlaku",
      "Peraturan perundang-undangan yang tertinggi",
      "Deklarasi terbentuknya suatu bangsa",
      "Pernyataan kemerdekaan yang terperinci",
      "Pernyataan hak asasi manusia yang paling mendasar",
    ],
    a: 3,
    p: "Alinea pertama merupakan pernyataan universal tentang kemerdekaan yang berakar dari hak asasi manusia, sekaligus menjadi landasan utama yang memperinci hak segala bangsa untuk merdeka dari penjajahan.",
    t: "Alinea pertama berisi dalil objektif dan hak asasi universal tentang hak kemerdekaan dan keadilan.",
  },
  {
    q: "Salah satu manfaat adanya kerja sama internasional bagi bangsa Indonesia yang melaksanakan politik bebas aktif adalah ...",
    o: [
      "Untuk kelancaran pembangunan nasional",
      "Mengatasi segala masalah internasional",
      "Mengetahui kemajuan dunia internasional",
      "Memperkuat pelaksanaan hukum internasional",
      "Meningkatkan kemajuan di berbagai bidang kehidupan",
    ],
    a: 4,
    p: "Hubungan diplomasi dan kerja sama internasional (seperti di bidang kesehatan, HAM, ekonomi, lingkungan) ditujukan untuk meningkatkan kemajuan nasional di berbagai aspek/bidang kehidupan rakyat.",
    t: "Target utama dari kerja sama luar negeri Indonesia adalah kesejahteraan dan kemajuan di segala bidang.",
  },
  {
    q: "Sebagai bentuk pelaksanaan beragama dari sila ke-1, upaya yang dapat dilakukan untuk meningkatkan pelaksanaan kehidupan beragama dalam masyarakat adalah ....",
    o: [
      "Menyelenggarakan kegiatan kemanusiaan bagi seluruh umat beragama",
      "Menghimpun potensi umat beragama dalam wadah karang taruna",
      "Membuat peraturan yang jelas dalam pelaksanaan hidup beragama",
      "Sering mengadakan dialog interaktif antara pemimpin agama",
      "Mengangkat seseorang tokoh agama panutan yang dihormati",
    ],
    a: 0,
    p: "Kerukunan dan peningkatan kehidupan beragama sering tercermin sangat kuat manakala berbagai umat lintas agama bersatu menyelenggarakan kegiatan sosial / kemanusiaan secara berdampingan.",
    t: "Aksi kemanusiaan lintas-agama adalah bukti paling konkrit kerukunan hidup beragama (irisan Sila 1 dan Sila 2).",
  },
  {
    q: "Kondisi masyarakat yang selaras dan seimbang antara individu dan masyarakat umum mencerminkan konsep Pancasila yang artinya ....",
    o: [
      "Perlakuan yang sama antara kepentingan pribadi dan umum",
      "Melepaskan kepentingan umum demi kepentingan pribadi",
      "Melepaskan kepentingan golongan",
      "Kepentingan umum di atas kepentingan pribadi dan golongan",
      "Mengutamakan kepentingan umum dan mendahulukan pribadi",
    ],
    a: 3,
    p: "Pengamalan Sila Kelima dan konsep keadilan sosial mensyaratkan untuk tidak egois dan rela mengutamakan / mendahulukan kepentingan umum dan bangsa di atas kepentingan pribadi / golongan.",
    t: "Konsep dasar kewajiban publik: Kepentingan Umum > Kepentingan Pribadi/Golongan.",
  },
  {
    q: "Faktor internal pendorong lahirnya pergerakan nasional Indonesia adalah ...",
    o: [
      "Pengaruh kemenangan Jepang terhadap Rusia tahun 1904",
      "Peranan kaum bangsawan",
      "Adanya penderitaan rakyat yang berkepanjangan akibat penjajahan",
      "Adanya pembelaan Multatuli",
      "Angin kebebasan politik dari luar",
    ],
    a: 2,
    p: "Penderitaan panjang yang menyesakkan akibat penjajahan, kenangan kejayaan masa lalu (Sriwijaya/Majapahit), serta lahirnya kaum intelektual pribumi adalah faktor dari dalam (internal) Indonesia sendiri.",
    t: "Kemenangan Jepang atas Rusia adalah faktor eksternal (luar). Penderitaan rakyat adalah faktor internal (dalam).",
  },
  {
    q: "Latar belakang diterapkannya Tanam Paksa (Cultuurstelsel) di Indonesia oleh Van Den Bosch terutama adalah untuk .....",
    o: [
      "Menghentikan krisis ekonomi global",
      "Mengenalkan jenis tanaman baru",
      "Meningkatkan hasil pertanian petani",
      "Mengisi kas negara Belanda yang kosong",
      "Meningkatkan perdagangan bebas",
    ],
    a: 3,
    p: "Belanda menghadapi kekosongan kas negara / krisis ekonomi parah pasca pemisahan Belgia dan terkurasnya anggaran akibat Perang Diponegoro (1825-1830), sehingga Tanam Paksa diberlakukan untuk menutup defisit tersebut.",
    t: "Tujuan utama Tanam Paksa selalu satu: mengisi kekosongan kas keuangan pemerintah kolonial Belanda.",
  },
  {
    q: "Pada hakikatnya bangsa Indonesia menolak keberadaan PKI, teroris, dan berita hoaks karena hal-hal tersebut akan berdampak pada ....",
    o: [
      "Tantangan bangsa",
      "Hambatan bangsa",
      "Intergrasi nasional",
      "Ancaman bangsa",
      "Disintegrasi bangsa",
    ],
    a: 4,
    p: "Ideologi komunis, terorisme bersenjata, maupun berita bohong yang memicu SARA akan memecah belah keutuhan persatuan, sehingga menyebabkan 'Disintegrasi Bangsa' (perpecahan/hancurnya kesatuan).",
    t: "Bahaya laten konflik SARA dan teror selalu berujung pada Disintegrasi (perpecahan wilayah & rakyat).",
  },
  {
    q: "Sumpah Pemuda bait ketiga adalah .....",
    o: [
      "Kami poetra dan poetri Indonesia, mengakoe bertoempah darah jang satoe, tanah Indonesia",
      "Kami poetra dan poetri Indonesia mengakoe berbangsa jang satoe, bangsa Indonesia",
      "Kami poetra dan poetri Indonesia mendjoendjoeng bahasa persatoean, bahasa Indonesia",
      "Kami putra dan putri Indonesia, mengaku bertumpah darah yang satu...",
      "Kami putra dan putri Indonesia mengaku berbangsa yang satu...",
    ],
    a: 2,
    p: "Urutan ikrar Sumpah Pemuda 1928: 1) Bertumpah darah satu, tanah Indonesia. 2) Berbangsa satu, bangsa Indonesia. 3) Menjunjung bahasa persatuan, bahasa Indonesia.",
    t: "Hafalan wajib Sumpah Pemuda: Darah (1), Bangsa (2), Bahasa (3).",
  },
  {
    q: "Berikut ini merupakan jenis-jenis nasionalisme, kecuali ....",
    o: [
      "Nasionalisme doktriner",
      "Nasionalisme tradisional",
      "Nasionalisme integral",
      "Nasionalisme Jacobin",
      "Nasionalisme humaniter",
    ],
    a: 0,
    p: "Menurut Carlton J.H. Hayes, jenis-jenis nasionalisme meliputi Nasionalisme Jacobin, Tradisional, Liberal, Integral, dan Humaniter. 'Doktriner' bukan merupakan pembagian dari teori tersebut.",
    t: "Hafalkan bentuk nasionalisme secara teoritis (Humaniter, Jacobin, Tradisional, Liberal, Integral).",
  },
  {
    q: "Perbedaan mendasar bentuk negara kesatuan dengan negara serikat terletak pada ....",
    o: [
      "Jabatan kepala negara",
      "Sistem pemerintahannya",
      "Jumlah UUD yang dimiliki",
      "Hak untuk mengatur daerahnya (ke dalam)",
      "Kedaulatan keluar dipegang oleh pemerintah pusat",
    ],
    a: 3,
    p: "Pada negara serikat (federal), setiap negara bagian memiliki kemandirian kedaulatan / wewenang penuh dalam menyusun UU dan mengatur daerahnya sendiri. Sedangkan dalam negara kesatuan, kekuasaan tertinggi untuk mengelola wewenang daerah tetap bersumber pada pemerintah pusat.",
    t: "Pembeda inti kesatuan vs federal adalah kemandirian negara bagian mengatur hukum/daerahnya sendiri.",
  },
  {
    q: "Jumlah harimau Sumatra di alam liar kian menyusut. Penyebab utamanya perambahan ruang hidup dan perburuan... Ide pokok paragraf tersebut adalah ....",
    o: [
      "Ancaman serius atas kematian harimau Sumatra",
      "Maraknya perburuan terhadap harimau Sumatra",
      "Kian menyusutnya populasi harimau Sumatra",
      "Rusaknya keseimbangan ekosistem hutan tropis.",
      "Kerusakan hutan dapat menimbulkan bencana alam.",
    ],
    a: 2,
    p: "Paragraf tersebut membahas dan berpusat pada satu isu utama di awal kalimat: populasi harimau Sumatra yang terus menyusut beserta akibat rentetannya. Ide pokoknya berada di kalimat deduktif pembuka.",
    t: "Kalimat pertama dalam paragraf sering kali merangkum inti pembicaraan (paragraf deduktif).",
  },
  {
    q: "Kalimat baku terdapat pada kalimat...",
    o: [
      "Gunung Rinjani adalah merupakan gunung yang terletak di Nusa Tenggara Barat",
      "Banyak pulau-pulau menjadi habitat satwa komodo di pulau Komodo",
      "Berdasarkan keterangan direktur perusahaan industri tekstil itu tidak memenuhi syarat",
      "Dengan terungkapnya kasus tindak korupsi ini diharapkan dapat ditangani secepatnya",
      "Sebagai sebuah objek wisata, Gunung Bromo memiliki daya tarik tersendiri",
    ],
    a: 4,
    p: "Opsi E adalah kalimat baku dengan S-P-O-K yang runtut dan logis. Opsi A boros kata (adalah merupakan). Opsi B jamak berlebihan (banyak pulau-pulau). Opsi D kehilangan subjek (Dengan terungkapnya... tidak ada subjek siapa yang menangani).",
    t: "Kalimat baku pantang menggunakan subjek ganda, bertele-tele (adalah merupakan), atau kelebihan kata jamak (banyak para).",
  },
  {
    q: "Bacalah paragraf ini: (1) Cuaca ekstrem akhir-akhir ini panas menyengat. (2) Udara siang hari mencapai 34-35 derajat. (3) Berdasarkan data BMKG ini disebabkan gangguan tropis. (4) Selain itu faktor La Nina masih berlangsung. (5) Oleh karena itu, masyarakat berbondong membeli kipas angin dan AC. Kalimat yang tidak padu terdapat pada nomor...",
    o: ["(1)", "(2)", "(3)", "(4)", "(5)"],
    a: 4,
    p: "Kalimat 1 hingga 4 membahas fakta ilmiah, angka cuaca, dan keterangan badan meteorologi mengenai fenomena iklim/La Nina. Kalimat 5 (membeli kipas) lari dari topik iklim saintifik menjadi perilaku belanja konsumtif.",
    t: "Kalimat sumbang/tidak padu = kalimat yang bergeser tiba-tiba dari topik sains ilmiah ke hal keseharian/komersil yang di luar jalur.",
  },
  {
    q: "Sebuah studi mengungkap bahwa lidah lalat buah menawarkan jalan baru menangani obesitas. Jam tubuh harian serangga menentukan sensitivitas rasa dan perilaku makan... Rangkuman yang tepat adalah ....",
    o: [
      "Penelitian menunjukkan jam harian hewan pengendali yang mungkin berlaku pada manusia",
      "Lidah lalat buah ternyata memberikan jawaban besar perilaku manusia",
      "Hasil penelitian terhadap lidah lalat buah yang terkait pengendalian waktu makan dapat menawarkan jalan baru menangani obesitas pada manusia",
      "Riset menunjukkan sel sensor sangat berdampak terhadap nafsu serangga",
      "Studi terhadap lidah lalat dapat menjadi solusi serangga",
    ],
    a: 2,
    p: "Rangkuman harus memuat semua inti pokok (Penelitian lidah lalat -> pengendalian waktu makan -> menawarkan solusi/jalan baru penanganan obesitas manusia). Opsi C merangkum dengan lengkap gagasan tersebut.",
    t: "Rangkuman yang benar merangkum Sebab, Penemuan, dan Akibat/Manfaat dari sebuah teks ilmiah.",
  },
  {
    q: "Fungsi pemerintah di bidang kebudayaan selama ini belum maksimal. Pemerintah ... untuk mengelola dan melestarikan budaya bangsa. Akibatnya, kebudayaan kita terkikis arus globalisasi. Ungkapan yang sesuai adalah ....",
    o: [
      "Naik pitam",
      "Banting tulang",
      "Lapang dada",
      "Setengah hati",
      "Lemah hati",
    ],
    a: 1,
    p: "Berdasarkan kunci yang tertera pada panduan pengerjaan aslinya, jawabannya adalah 'banting tulang'. Dalam konteks sebenarnya mungkin pemerintah diharap *harus* banting tulang (bekerja keras) karena kalau tidak akan terkikis. \n\n*Catatan Logika Bahasa: 'Setengah hati' lebih masuk akal jika kalimatnya menyatakan kondisi aktual ('Pemerintah setengah hati, sehingga akibatnya budaya terkikis'). Namun kunci resmi memilih Banting Tulang.*",
    t: "Banting tulang adalah istilah kiasan idiom untuk 'Bekerja dengan sangat keras'.",
  },
];

// ===== Aset gambar TIU (dipotong langsung dari TIU.pdf) & helper tampilan =====
const TIU_IMG = {
  t1q28_A: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACxBAMAAAB5B0H2AAAAElBMVEX///+urq5nZ2cuLi4ICAgAAAAVFyXAAAAEqUlEQVR42u2by3oaORCFjwq2CQK8j7isYwN+gfi9hzxA0obZQ2j2hhZklmNpFlwCLandLalX09r4sz74LZfOqSqpAWjGn8HApjVg1QJt0LAeMgE6PlgDaAPsp4xNfvgKtAFk0cltAFSbNhpyQ27IDbkh10UmURd5NKuJzMSR10TmXNRD7gODesgiTDlUEGbgKOogEwA+qIM8BKC7dZAFAEY8Ppk6l2DHJvcYgBDdOcldGZixXO9kT/xsxNjky/xBxCb3zj87g9jky1JZKzL5T3i9decg3zgkMnkojYhHInNuW34E8m1tPUQl30bAV3d28m3yZL2I5HuleQaa3Bk0UHdWcvdgVJdI5AHP3YHEIucN7dff2chGEhrEIg+KRBhCNrNbi0cid5zZOpDcOyBGoKnY2gFnDnJW7VCDU7n1iRhkW2rTwxhk2/IYRSDba7VHBaeSMpiEk2+qdpjujHcI/kFr40t2Kbd6oMk8BNrHIJTMo10qUNl/urLBqbBqhxicPsygvhWcSmnOJxxUukofwsgFr7SdwXlpcqFozVpD38qSi41mVvDRP7wsuVMYOVEpHHfkfnEH1zVzSVkyl0VgbdSxTtHNCpXea7MlpcI2tX37y/q9MBrKiM7ysSRZ/arkBaZ/PbkDGHJvJpQuyFMBZCagZbcWMja1kVNIVge5q4EN8TrISkKjDjLXgHKLgwKksUGROALIAICU4pMJKQDp3EIKkIYEsEd8MlcACsThT37SQNEWUoC3AUCn0cmEU/7MWGzyaQOBzCWOYLIzRVOIt0/kQVwy49mZnLKayE5/tyvQhhZpANndvEo9yK37x4XptVe4nX9PfaKhs+wGcZ092F9QYc1qK7C+thf7Ky65Crov8MOHrBOBfWrO7y9/hPXxlnppQ83xXNRhj4X67qm63YLN3E1l/1En3npep0fndQS9sHXqTdYJf3CYmc3kbhHgQfVdO+IxEp9fg9z9tmUv1iA/6USG5Y2fsmUJNU0P6zQwI+lXjIUZZP5pEZzrdgsz1KMvah4hi663lIsHTZDIkCx6lV6nl1/eOo2S+dXWmNpEqik899FHa6PkQ2Zinz8oikhk5KJqbcH8bsPzQrBVWR9yV+XJ0nK56UMWyigrccjMPGsrRCIb6rX1uj7k6wb2rx9DtojDw929ywbSlOtzhsvMEJG/A9mIXxOqpAjRYCK7lBG1vCRUiwt91nwit74hWW2PU1cXTb4OZC9yleoE/Ymji65O7p2yxph/WgDqVY+E3d/VyacTZv9RzwFg9/epbcoMr5Cft2nKVieZreRxAkCxYDJDBrAZdsuz/f7iDwLQMphMPAXGNw2RmuOZQ8thKLmrZa4h2i3ZC8y7Kh8yTeVdrV7J3xPzLEvVvc1m/P2uIdJzPhaGOKi6t0df1H3XifeFnn3O+7syGTRhRkO03tI0f/HdruztnnxLLR17z3icVHUDIY2uE4B6NW65q5IFOnNrh7rMP9moSuaWrvMkvTQnjqpxzv7dODtUGUROnN+TUUkWFI2CL+BkkW57SuizITfkhtyQG/L/i9wG0GWxqfxE1s/R16v1R0/wfQcD0K76YL7cUGjG3fgPhIJFbhttQc4AAAAASUVORK5CYII=",
    177,
    177,
  ],
  t1q28_B: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACxBAMAAAB5B0H2AAAAElBMVEX///+tra1bW1stLS0GBgYAAABnUk/dAAAEFklEQVR42u2aS3LbOBCG/+7RNhKoHCCUc4DYk1wgZ5jrTuwLjB7ZKxayt0gwawuYhWSJD5CRgEbVVA1RpSrSgj62mv34mxYwrssi0J8JsHaNCfguDZkBl8YbE4D+MeI+/gpMAJTiZD690qyRPJJH8v+NzH+lIr/nPBE5Nw9pyKQUpSHzrGSVhDzHivIk5NyWJktB5rxwep6EDI3yl0pAXliNQt3Lkym3gDXzBGS1A7CJizsv+b3RAAqSJ+dTA8CahTSZcgsALi6ifWQ2awCAjoo7H3nujhKyyHJh8v30SLZYyJJZPR8P3IZlyRne9HQZ01jY52Z9OiqgJMl0fzjPMeZOkszYnY/1L0lyVurz8XNEY+mSF9PLQGTVgxyZVHk5cZrkyKx2tbOIBOe+1D6ufXiCc7dr18kuvJJyt2vXT51mKfLcbBrnOrhltcnZtDmEH3AvQ6amMwAbLGh4IJrj4q5FntdS+1TvMhnyYtZ+1mHdgwT51LUbcfeTJMiMdWeH/kMJkO+c6ezYu1yArGyXHJrgPJDab47mePLcaM+WIqyDN8iZ85HLsA5eJ9Ond74tgR28TmbaefeE1TtuiCPt3fNMseTFwXj3hCU411O79O8Jizv2i6Pm2vW4Yz7kpUm9a1PP+OAo3/imjs+vT1eRP5mPfbtK/yVn9jqbh+adV78n6Tryt4HKs/e6mSplriEXxY13XxkMkGMmkVypHCnIpOCyNGSAOAmZAQzUqgjywgBIQlZIRKaZGkwvjgkNDAVHBJkAUP8tDCfPDQBUCWxWxzuYy5NPyIU4+a3NkDiZfwcIJmct2wXJpp6KkmSFRGT6cCK6u993qxucWw+JmpRoTAw3kfmjauT28eDzRaY9Btuc09AXcS7Yz+6nGXq7KsLJy0G5+24dHhv2aei6jyYi6l42fb9vcPhhouJ5W/W4utqv4zKl19XTVWwOFk9+XyxNdHbvtfNI962Orxtu2XV1dVhLVCS76rh6+ihT6/adoWVphKrotgV61cLK/JYnJ9d+SF0BCSJnPQpBgGxSkdsgo6L7YF0512fZVyGbu18+EyJzuxt6VTTHhMa5NFVCNucd0eFT0RweGg7bc0FdiMTGm1Orw5rV6TIkYjMdDXXTFexq1osJIGdHA2lpgP33XkXKwbn9ogHg1KWqXIKsAMCcRI1bwgBQmQCZPijAzb6d9efMP8sGkAGALoKo+O4PDg7KbVMTRG5rAKpUPDlrCyK3gvFUKQ7Jbdfs1fsn5cnvm8mkgB+6LZs8hfTm7KaZ6Qgit1SYxttsOqoTsCtVCdxBnyDab1S0N+zf3uff25dom1155Z/HX0iO5JE8kkfySB7JI3kkj+SRPJL/a+QJzg9ZBBcdye6LvMEWYDhK5Q3PPwREbB5Xff0LqTo12rOiJasAAAAASUVORK5CYII=",
    177,
    177,
  ],
  t1q28_C: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACxBAMAAAB5B0H2AAAAElBMVEX////BwcF3d3c9PT0NDQ0AAADrlx8LAAAEZklEQVR42u2aS5LaShBFb6UY2wV47Cc1LICPN2Degt8G+rMCPgswbnnegLyArnoDEB+VSo0yqxzhCCmiB61WH4qrvJlXBUB3XA4FNYuAfd+gB3qIQDYb9ABsi+BKTIAegJ/ByTQBKNod7MgdmUHWschfprHI2SAWWZOOQyaNSGQFpHHIfaAfiWxzikPWJlc6Blmldh+JjINFFDIht0U/BrmPIhJZmwK5yIVesgUOKsKalT4ARuTCJrJFFoGMArC5Ck8e2BxAEYGsLQAcJC70kFMTiaz0ARDeQvJ5GwCMxIU+8jH4Sm4heWQ+kiX+pobSAA4ITD7dQJm/m8mSRkpebx/J/CnbK2FXT4WWbPlMlP8zv7q41UNYSR7ePBWaErFX1+e//sdQ43Y1+/PyIVbjvdDmGQ7QPJ7PjVOsOWS7WqjPufv3w1WC/JGzamO3Vt8abKHmerdmVt02Vwv/daPUrLj1bJdIvvsuG06xLNhOMc/44jEzLfCWCzy4W2Ou60XG+4vI3ducFvUi22dZ37BLJDXPasmUs7ly23HMC8aO1GqBtzWEZLxtHKnVWBsG2OmiPwqaVndu7LIIQLZPttLsB9jmCECG+eVc8xpmppwnldOTgpO5U9YhD1BRlRvB3DXbSiFwUzTVp9DrowhDVqkz+phZ1yG7NRaITHD8xryF5GTFkjyancNHPwQ5K8k0G5UNhFcc5Mm36l9gdLJIwUrRVN2X+nnKLdps1Kmh7hGAXL7v4cQut2VD5fmbnN2j06ze5mZV7jOybiE52xqnWb0GdmuMNADeXhXVeXucHtNjGZsKjleo0kItgOHkFIjsskimAPZyMuEVoNk5EJkVxinA2quqrBk51FxfAtExNtkik5IzC4xvAtE2pwUsp5FSdV9qOLkJRMfYJCYrfaBZJRCZZ4zSV4a/q+S5NpXUuduo+SeGC2/JSFK7RF1sEq55gIeaQGSfMMBARtbAe004NC+XVsUkpzC1CfwtR3sXXpPVZ1/qXBa/RWSrfKnTrHTroNu7/uXRmw53j4VI54bYeRC6u/V/p7HIo1kkspokOg6Zmj6BEpEbP4ESkTM09BMJmfTxJzxZaTQILSE/nBQJT04BIIlAPkqs0vDkwblAQpOzc1EHJpdTxld3JJQZ3jlGUpmBaWhy+gGCTb40fY/QfHLN6sOQs4rLg5GvrafCkvVHc5akNec1OMll9hic5DIDtROcxDXnqzsm+aFBGxlZf0whobX9BqcQMtcKTfKa8wjNIztLTAKR3fqtmeAscv8OfXjk7J4XI7G1fQJRiJqrvakc8uAuhTjkyV1vhEGun9XOWQoksys0Bam5uglOQWquTg4GWd93vj15eGfJtCd7H6YSIVmld1YjBao5991QoJpz+11rcv/eftKW3LgLoyVk1fBdkUJEtureeNNrSTZP3s1Xe/tpaFsy9pcv0bDLU3h05I7ckTtyR+7IHfnvIvcA9FWM9fYAfAu/YBNNDQXQ5bvOgdfcHX/m+B/k7idKNB5mJAAAAABJRU5ErkJggg==",
    177,
    177,
  ],
  t1q28_D: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACxBAMAAAB5B0H2AAAAElBMVEX///+vr69vb28zMzMICAgAAAD/VW1GAAAD+UlEQVR42u3bTXbTMBAH8L+m3tLI7gEqhwv0UU4A14b2AqQp+zZ294njdI0lFnbS2JIM1gfvAc57bFz41R3PaGYMAPPn7cOA2wisekCCi2WMO65KAlQEuAYSgH2rQ8P0CUgA7MPL3a84n1me5Vme5b9Cfs8jyezDTSxZZZHkC8YiyQKMx5E5DnFkxsGjySqPIyuARZGzA9gFjyHzaNUtOAARQW5zOY8g03G6Di6nsWUeXm7Jg8cjTCwPsCX5j+D3zNoVQ6XB5ax9dj5HtO2euwWDeGhZcO8ip7EH6FXfZNtse3ntm3UZ178fvW24Ve0q02fTz/S2lW/vnaMxviZPze0zWb2Mv1XYuMur0d+5e3TPDTkWSPngk3Vb+22pVe2Vz0/WP/5c+lWKuoPZbta+NdjcL4xBvvOv7p0x9SYH2SAbn9S2hL9syq7mHiFk7IYPS90hjIzN4Pxo6lByvH1w0FYVCyZn/Z/edYqmke7qN0qbZESS9St5IJn9xhU3Of2TMg8jc62Vu03RZB+8VscTjjsNSok+OXdhfSpeusXbbYomy+QMuT4dqG5TtCanbW2rr2cHqtMUrcldBNoufuzYIeTuAXYD0XFsEiHkfsvqmjYFkAmAOmuzu0flOJ+ToQLZ+UD09FK7VSEZjtBej1UrDqd3VaQfEYO5QN67JcdQXihtltmWapF6VzfDQR+IVtylvmlY2+/WhqE8Zd5yZRyIdmvlHY3mi3EgetqaVqLrckrWWSYt0+Wr21jTV/4q4shssYgkU4osjpyp76MTn7t8Izej57azTHwvR09XZzlDocoshpzKEsVY63WVmVDAfizQzjLfAA2W4eUrlAAeKbwsZA2gYCK0zIQEADmyDzjKhDUAyDINLS9Ve67W9gJ3lLls5ZECd5NJVF2LtAfaUa67RqVKCivnl8cWWLzykDK7kadmz0VImVCcxr56GVJO69M8oEoWUs4v36aEgkQ4mR1zbjTvyC/MIwXuIi9xPnaVlgJ3kUXTGzItBe4gE696M3CdhpKzXjCg6iyUnMr+dGvp4ORQ2oMx3RJocsi5wV9SSHOBk2+YAZhP0umykMMFwNzBJ8vsutJ2rzoPIRMrdDkNIR+79i/zbrLMpS7vTYGeKpOo9IvGk5S8c87WwafKuTQtrqbGMlFmXJouV4YXIBNl4oXpsqmDT5RTZdziVann3UQ5V+aVv2CeMjPlHAA0et5Nk3tdux+OzE9eKtvLklILRzItGNZ/7k5MPHrIWFjnQ7X3i8aLdeFh2lcm3bN63tm/uPGRUVVT8ijWZ5ZneZZneZZneZZneZb/DTkBkLIY95sA6mP4G64B8vwfHbZ3FUCCZhNBtu5g/+vnJ9SrI6GP4JFqAAAAAElFTkSuQmCC",
    177,
    177,
  ],
  t1q28_E: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACxBAMAAAB5B0H2AAAAElBMVEX///+0tLRubm4zMzMLCwsAAAB57xUOAAAEXElEQVR42u2aS3biOBSGf10YdjfCZF4yZN48sgJ62xXYQAWyAKio5sEoPY/VAxsH25Kh9Bi1dU5Ogh1/Fvf5SzbQj6/BwJYRsHqHIWgaY8aZpDimUMAQwA8VGkzrgnwOTy5/4oye3JN7ck/+P5MfhS95aGm86R8yDplGOpI1EkY8DnkOzKOQiQNJHHKAeDRfnwJgIgK5gKYxyBwAxhHIhfMGPDy5tIMITr74Lg1OpiB10HT1RaqTCE3mrT8Ckaup6mlocuVJCkxOW0ESiMyuyuciLDlQ/21fO2kVkFBkYcjGIOT6NNOA5HpnpYDkpOM+fuR550cPcnOSSTjyjTu5k9POUPEgtwM4DUVuTXEciDxp/YNzByd7asOvg9MNM7sbmu7u5H5kU+Nz7eBk7to3D/4m2Ty9aQByEnLJSLezwrGxkKVrX4+FN5mCrqDpjlrsVknpnjwWnmS7p1JPMoXdqqB7Wp6ToemuNm0/9bC4Te6amP3rpNM7yF3fzHZXJug2uavhsY4T4uaeTJZZr9dK2cn8Jvnz2SEAxvbv6rmLMc5lJDLXkkUhM5GdbXHjSYbKEYVMUNqWoH7ksZba9lDNj8xzQLEYZKEBmwu9yIyfgQwRyAQJ6BhkphWgZRqeLLSC1YXkF3SA1YXk60DgzGKRLS4kv6oBALlZj/iQk4IMcyElr9wuyRSeXPw2u9CDXOnA3Ni/fch4u7T2cWiy7CIPfw92HV9J9ZhIfbvWYJlyID+srj/lF33zNr8+/r51sUbtaVZW3eL6qBq5WOP0wfXOQH6uwm7GR99dyPlujVy2j2eXm9AKR+UUG6dXturQ2WyFz71j1B3kvx3vAs2+5RvXeNYvfGJdQEwWeFHOmZJvMLPprSWO0iMHT6/sH242Mq+M7JbdB0VGe8yE3vjVDb3BgzAaufZik0tF+tziqWUPtsRBete6k2Tr5rHHmpFdyfqHGjRU8+TvmpGd67Pe6Ua/po+DClL5Tx/Nnjh6DdNTShHzNc4tOeO8ZdaoeFlr38WRPNaqoyWEJctpGDJvzbGlot3ITJybh1oq2pGMNhmByLLd1YOQk8qBs0WlDNIQZHFRGINl9RJQU+uSV2iwNaqC2tTnbtuHvFCh7JF/VgW1mYXk5sDCzMkcmxcMFkYXkkcG0hIHlW8wEyat60FmK37aA6d9IZuCkIsS+ijyHQAcJa0N+U1OuZ0DmMxLQaRLU7/5PxxmkIWRy0TMt5iJlgtdyBOoi5FLlf/KVry5xHIh81xhVhr5olBp0XQhueV2TXUC+ogH0chvBzLjii3Ve63aZVv9xFVtLUtODnzif27rB99/sfXJn5yIpiACXtRgAU9ygmnNyJfFEaa1vWgHMod6fzPIpj08yUzgr73pxFHWnjQ4zHmk27Yos/zD04NHaVscjZz3CgBAfz9bFeqz8prz+b5T/VvKPbkn9+Se3JN7ck/+UjJjFmO+QwBP4SesolmDA0N8/oxA1hL9uB7/AQdyKseP0ikFAAAAAElFTkSuQmCC",
    177,
    177,
  ],
  t1q28_row: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyMAAACyBAMAAACjLw2NAAAAElBMVEX////Ozs57e3spKSkEBAQAAAAWjGrfAAAUiklEQVR42u1dy2LbOJa9F/HsOiJAbWdKJOW9Y6rmAzrVn93JfEBHcrxu67XuEgk6y2nz9kKUzAdAkQQoMVXELooFATi47wcAxjGOcYzjJxv4h98he+xh0sMOAMMeJk6f4O4PD8k06GHSX3YALOgLEvTtTxxJAADoYc20bf0Vye2vAgGA4mybNpmWB3AHbGH/4F6eAKCXmdP2kHz8u/VVzH8BABAvO+tc9hPAHUAsbE8ce08AAGh/ZnrlrW8mxT+XBL4DcDa2JxXZsXHrMzPvj69x3QHQ0vak//vf2WVa22a2//UngIT1Ojsf/IR/OkisDzlCMo4RknGMkIyQjGOEZIRkHCMkIyTj6H1cNV6CXADJeDz1wUDiBj4ApE/2wwx/SkgEcuQxUNz9OOcBjwEAF9FyoJjg4+pngUQIl4OQnDAG2sbdOM80pFgAAMXuYqCYTOcb+VNA4opj3J8DggBwabPtAIr7mVAAAKAg9/PXQWIipPf9J4AEg4ADQHQMsKLwAed+e3GA8/cQONIP/2mIfOsTfPwJIHEDHyjexpRhINauL9hic9i1FCSzXHAUHWc7QDJhBMjl0CGZhhw2UU6mxxBvAuEHPrbKS2CPhTwRlI//NzxIgoQnQ4cEgxBoUxZ5tMY4xF+hDSYu8cK/HeDDIxMOQGJ3e2KtvTYhpMtV9exo/WVHv7ZI9kM/KX2Q+INDhM048AEsq45K5iEcVurLHBF4ATWW0dXEEmcyOAGPUgC+3p56WZ0cgfVKt8D42xbvG1+poDINvnqDEyUCAMTtl8VqDAm5rrGcaPlEi4brR0fBuIcGCR4XJIYLCZvLt1pbltZ7XPCGu1X8nTs0SBwAAHIHCwkuvMmqnq3ScvfaTMS7iokI+bAgcTO9wxsqJNNZetERlS7hQ6PiDaHIoUU2MEhEkvknBgoJ+yuuLmvo6coJmhwsV/3RwOwSfDgu0vGHCQku5KGJJRg9swasC9W8QAwKEjYY6lVD4s4mjSIHtJYfLvNedeq/Myxj0T2tEgcJCYZJw4hGunIW8IcY55tF/hAhmTsfdw2/H+1fH7tRybAGcwajnTO1++Nr0+/TsoGEp+FDIs6bwIQPD5JAHJqrQ+nzq9+NTAZFPG5ySRvpCLVorcUo3I7Mj9q4BNcPkyHGo1qqwDnKcP7y3dKkQggfIGqZraCAxKW0zRGnz94QItaGp5cPelpKN3T9Y5G566arNrElprAiuIZINDx27cx/elkyzYeh7dSozudBRh3x68I3goT5GkkyDbXSpNMehgSUl98y2ZDv02AWZ3JEOMnCM4EkjDVE4gotmYQ/uRaMTn5raKGrBfvsJOJ9+iQ0gITNJlIjAV81kKT7V/5z862iE4Us+FREwdON/Men7pAEyUonAbUlztv6WJwGkgGlaxdTA2xYJsfNUXxStpygMyToT7SGu6NTsQ9xrYAnJdklA4KktDEL7jdKAChGIcQx4wp/eF0hYU6kV0p0kNC+XsCr7ZbhGDNsxmsh6gKJlJSIaLPZCKclzHcVvqVTobnkWoV981Cb/5QoaW44kGBJ/8AP5nkqkuNkGceA2/nxurodqQRnWocj53q/dbqrZZWRIh2CaDiQVBYvzS2TmB++bGIAitY72UpAlSER2zqXg6flnLWcS3X6mA7IdK9cP3M1ODqnwEUbB6BFOlIJkqnWHcMcAKk1MDa1OUBpUsVEbocDSeX+krklRe/JJId9nfPjEiSeo+VbdSoXpLKWVW6ry3F2g4HErcg6C4l/ec6wbWUws5LqoWUnIqnTRGhXay1GFdOknWuzZ6vkslpsyMSozZQlSJKnOtUd9XHpSNRBkj6XAUhWg0EEZwoathrtJdmGGRYh8Sey1guk1xpiWbuJTUnnoslw+BbrPcuMkjYsgRXlnFYzzeiD64VJLV2m+9J0m8Egom6dazdPpRWTLkGyrbemauhZ1goTWhWWJd+UDHLObwGJ2iy8XZ5KARLhaP1OWVqvnh9uaoUJvD3lrPXYUUoSDL1bnMBMtfAbpmuz4j+0FHbMIcUP2nMnqD/P9f4sTkislZIEb3IOQrnnG+apFCDx9Jppdt76gBvt6kPWtNwDxXEcx4AvTxpKvMUxuJr8GesU2zRsdFfQBt8uIae/OyR/qf+l9BsdA5/xWiOx8BY1zjhTb8mxWQLPW1iKRUj0hdOnOir+b+1M8aXzpG9TDwBIW0jk3aJSUKdaocXoNAKH5iG7AiR6USLOYqA7JACHA3L9wtBLX6/Puaa6o2eePdNpBi0gyQsAofeXi+Sivk5N/Gp1LflRbm6gempFhhQWqaSNcVKARC/dT6eNrzXCRJiykDi+ei4Lc3T/Y9Gn4iIAyC6Q8NYy0CokguT+6n0Na6x0e2qwAACadICkhs9jk7tjKpkFyfTq9TZBot2zNTfXUZ+OwCokOd1dTwrScA+cIIZr2+9OzX/Z4lzMgTYJOazRPRdNdENDQYA8BpJXFiasUJF/KBwb2vIl+AkA0K4LldBF6V7LfFOz10WOkFxZ5Sqa7lHRiW6Jc6HP24iSPCSikQys4/ZmkICsi+73Mwp7lmWlyA4XZRxaRSPuNFRSSOgvwBDkeV3+TT0yg8SFXSN706q+VTx0+eGhoEPa4VwBtOJbeUgKB6rPvp9O86vO/5TZFedvcHVIClYJTeSHEg3ZWAx7gHapBoUr316lzTNfw1w5jwAgvW6DgmJuCgEV07Wt+HdcCe1SDVhBCc2pT41WIz/mYTCiEoQdAJCFPMPO3pQYSvk5joX7gT62Eu5FSPKfr3cN3Pvl6KDJpWJHq2h3Tfu96JRIYoASx7eg/7EZB8A2TXzvcjI873inJb94wlR+EdWESrJMDNlKmKjVv+ZGWdFnIsvs2kawIEg4QNymRDrvnC9ES9LV50tBvuRQ/CWjaiv3CEnUBhK8/6T6+FvT3NZiE4WJBIiK2VZoXKvMHtryrZp2m4enTxcEyeQfpQ+MFk/tNWl8UBJEuG1KY/lLRyArt8r5t7FwBwBI/gmdIKlwnbWY1XEicr5VMOhO5ycHG+1aiFRUO5+jhssoFLsDRsef55UTNbJFE942j5Dpbzkt65L0CCtpJiaMC70MkjZasDo5o3GNtFtdflELNs9TwQeegd0FkuqBpiveXJAYMq5zkDk29s83jpqLpKoVUK15316UILSu22B16tKhRrhN7OZZixMk2xbOPrMyEPxU1Ld2AADborfeMaz9CQCAGnfSuiTeAQBeuEacEFp+FeYcZG7jA6CV0nBo2CepZAE5Kl6Br2bb4pJD0lJHqIdEZ51Q8vtOyX0MzJKz1vDY/FKt10aEWdjS8U5QSXoIozwV5Lzomu1wVSriZKMMuyUfn/R6rInCBUD7a/nnfalSwssUZmTAowNAbUuXL/kvNs9KQfLV8vHkgszXCpmwQt8UOBWXl9VOIzeXgNrIYHuNCwCAXqSKh0vbkLwfRXyllIhypr9Ue2OMvMEsgfaNSdglQUAKrStVc0eDxedSyKIrQVIqGj2xl1JZJRqthoMRJC1cGXjxqnfWgQHgOvnzWGzxfe6MUGYW/NEQEik7Q6IbCmPJfsPpXL7ShXpta5B4atWE9iWpbxQt4B0s6LtLjEdFuKR2IrUAqlwC5/yes6LL3aDXsgdISsUsSBoiReyuBuMMajPFLkMimkKi8fw0V5UwrPHFJOWCzrfvfajAJTb/cpZls7hwIIZ8lKg7JCT/ojw9hddC57Nu/uuSeGHavJ//IIpzJr3wLYcDUPpuXp1xOCzPf/MbgIXaHwPGpYZE9faIzlvb+Mdp9deS/Z/7avr3/NEtoByWsWOVcABAZfnGGZz56U/7YJzNIPkfJSQqwlWH/nhzKon2szdt8DOvNU6Jf5ONRVI2eQMPhkg4ALDfvugnzzq+orwdJEpZoHpZDFD5SCfy/2/OYZfAHxsEpN3P8KKXrprHU7wGkPiZOqV/LJiFGct2/O7y3ZRKlBN42Fi54v9q/rvp5jO/HEfAuXyrA05thdHla50lcyLd6xaBcyfbucFTTLKL+XyXF6SKrai1cq5qy97OUjw8fQrjS1+Yz+jLJR+SAm7Z+Poi6RbhPuC73OnIuUh6Oe26AySxCpJcanneb43mxvta8PCC93L6CWrDMpqwZ4O4anCSkJioF8HC990mnfNUorSDezxPJVjPoRKnnkmydq4DWv72oV6csFAdlsnBaqICZwo9qhaBCydXefbWlXF1Wh+7ICHeP6LJM9UakLylnZqunHuv7twW8LGnh3xz3hSkuWIR94Vo6nUfUstBosrXeT96wtX6vbhL9SAkb9uI7vBMdc+XBjPrYZkzO07y6mN1EdOHQjrRdd8TzkOiuA1nHZiS9TZdvbeAwYZaWO142dc8XzoNwXJ8X3PteWURLCx6DDi/ESSqYsPz2pPJCuCwOiGkKK2sa/ygt060z5eyUG52PW26lJviTEtUMHdKGAS3gkRWJcSJwslZAgBs9qSlkg6QQLpy5p7GLOAfN9fY9NE+v2CLsdtRiY5AT6mNtMSz/W6oA2da4jOoxUnwkFqPJr+b7vKShVf+wLsRJNW44ulV8HNqY/o1W28VPdGlCos04oSF2BvbUmhQ8gIk6N8KkkqJcybd5Xtq4+HJ0Ui8TpAArflUcQUXcv3U357L7UcmlyBx3FtBUimBytJrnZzqsz72Mq08m4petyby0Yo8xaFNemyRWm4dSGUMKp2mO6dru4FvBElVvrvHFedz5GkJEgCwgp7TsYn8VunX3Mj+ICm3Dqy8SEB1tmWbMV0sFo9GkERlYeIUBMlJnHCpECYs6XqICoZH+x4N5tPL7jm9pvLz5SV166fCQidOAm4CCSV+VQ5SOUf+8N1RQOJ3rbGeYlWOG3Y1uABJmSzl7uIlwU5qsOug4K1N/8JPlVtiM67MkX/ZUzVLgE86QqL0w2xZf5hMLyu9VQurk0/FT6DDWyhF9EstsdEBwmpUj5YogZfR6/oeiTI83GcWqleW7tXLFDuXFecG5Mg5VAq72kKyKZ4EVxZbAaQrp5y/LHjHB+DURj9Rb5BUO/CdPRK/Pp45OFgQJkcTAgU3gSR1HkvuFHWx1eaZSsLEbVNs3wCS/oyzilQ4P8h275+CBQrCNahaNIKE9q8lnqL2atA6KdYn4azrA3BC6YehXW8lDdXWgdmdmD7AKVigku+dIUGzO7PNN31CRxw0EiJdFQtnmehq2mnarvZXZVIRE9llYmECePLu7CqL4p3Jtnt9ydEyKUhtkWprRA+rgiwJ4q4eKU1FTGy/53u2YZ+XxZYEAMCFwwGc6ZFzK0RZB59KN8ZRqlWkbZAT58uaOOEmf5Q466oCn+rdK36WvlQul9S2+zFIgDSPd1Bp3HEUJm23SAnyDg9IsrLdmlPAqc4ZW2gd7/KufKsg3XO6SW+NN0UCKoVr+njcThb2JbDgU8nIr63vr6x/HDq5DlzZmW/lqJstwtx2+lG5FAe7BQAWnkzfY9i36lLp4g3eOHEcw5MhJOl+2p5jsIeufAvcd0hwIaZ+3/IdyzFckPIkSLKjnz6qxYBofTDpXghx2BlCAtukvVydJp1d6e/uFLz3iN6fXurJfp8mKvYyz+UIIQWe6lnhDm0FabmK1q27aFQgidr3qECv+5N8/Mxp3Qda7t8Tr3uCpHLfaCJh+pgUzj7kKirpoAanm1X7KEMFkvT5R1syYbPOT4kyfgKThcl6u5Q/zj6NXnqdo8erhuK7IMlY148QUlRZte1tkrj9yTCFTApb28Odg7JnhQsX8PYE6cq5z+5iKvsImbCKKpXEWM4RQmeqDDVc6cGbKiRv+5Zk8uGhZSudgssm2/r9bLICgMN3CrON99J406+6ZWXwgBU1MORV+x3wVpDApqUeHBi8t5t1dITpQxaWWZ8zVmQPJ6AoFXFeQ4X3/DVUUInj3wqSaP+hDZmwB4P3djO+xcIkC8u8J0BGPUQWVU/jzFUtkZ3pAwcbPhU7kNBWtJEm86R7Byb06ChI+LnY6pwAST1QSdV0B5wJpQWr+BSvI0xUDPuwayFNpg+T790hOTrG57Ocf/Pw/ZgAST3Id1e5huY07d0KEmqhdGGQLE1+fQcA00+YD8tk4qQHSBQqcEvd8laQQLT/0TT7aD7rrm5lGZIsTArvkZ7EiX1jkTmGEyQ3g4RWTsPsI/YIJm03vRQA57yU2piJE/tasDD1m7nerSCBt2f2uREnWMi1AZEgjwGCByqnJUXPuOCQWrffL2XMXxxXeRdKcxPXshHrms8mWzCDhAWKHtAvu9cAyPZbpMwx5YSOuB0k+lqcgrb1aFa7hiBxAYq0JFrx+aP1lAhz2XQVNVjHrw/fa95eOnHWz4a1ayJN7j1lWtLbigLPdsgkSAaAandIYL1ni/rfZ3NpWLsmgFUFSebVeWah7fi7hSpQo7aCppDQUr7WYsIW3uSrkbxED8NEox7QWv7wE6uQMAvaArEbQgLpCtwaTNyFlxoWQaODXNu1Jl05vt0eAG5sPgfawLUzJHBYAfvN1yNCq53h/oD0iWJw+E52Xa/Chmi6QnvWOkI8fOUsVPoQcL7gtNyanpGsfUxgvTd+HLsoBwYzSf2ofQbg8GXBQ16NHrt+AOaIAIqXOjqjJbfKuLafYhtkcltIIFoG/jzYbOOCHugGHCITq/00+4Wq3XQ1s7nV35c2ZolvDAlEMg5xHmxkHGd4CAwBYG2jvPPtknvscLC61/5P8xqQQLqhqYdzOJWPuBwAos0WxnErSIA228hH7p6jPzFtYjke3A0hAaD1RviAHDnJGCgeKeTmkABQFCEH5CR/Fn78h4cEAChu1MZyHP2aiuMYIRnHCMkIyThGSEZIxjFCMkIyjhGSEZJxjJCMQzHuxiPoPGg67QkS9jfbk/IsGkj395Znbv+MEdCHv9k/NgkAKO2Xm1AMcAdgv7TmXP1nfWZqn0OKif3c6piD6VPwmsVygLs+Zhb/BACA1G62IgAAfpRtvxJx+ycnXgAg/dLDzASAvTwrFPdEJO1bwPWUWT1G8sYxjnGMYxxDHv8BXbkAId4V9mEAAAAASUVORK5CYII=",
    803,
    178,
  ],
  t1q29_A: [
    "data:image/png;base64,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",
    174,
    174,
  ],
  t1q29_B: [
    "data:image/png;base64,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",
    174,
    174,
  ],
  t1q29_C: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACuBAMAAABdIivdAAAAElBMVEX///+6urp+fn4uLi4EBAQAAAC3/LUUAAAFPklEQVR42u2ay3IaORSG/z6wjbuBbKe41axtyOzn9gSpPHAeYIaL96GB9Zi+4DVoFpC4aR0dHXVgk6CNXWX811cfp6UjtYD7AIAI0fT6qauiDRpdP/ewJCC/emwOtIHOv8WV3f79gjaA/Nq5AOhG9XDPvefec3+u3F8/3SSXHvdPt8gdl/H4Brn0+O5ZD0wBuOlKD0x63IflUQ9MetwVoAcmvd0loAcmvV0gAJj0doEAYNLizs4dkhKYtLib029aYNIXQxAwhdgNAKZAXC0wqWs3DJj0tRsETGF21cAUULshwBRQuyHAFFYMamAKtasEpmC7AJB6gSnYLgActj5gCrcLAHMfMIXbVQFTA7saYGpgVwNMTewqgKmJXQUwNbLrB6ZGdv3A1MyuF5ia2fUCU0O7PmBqaNcHTE3teoBJtwgHA5Mbdw5ESVNgEu2+/4s7vumcRiIBt524/wHA65Mtozs5/czmwPyjoxZJrN1dPLZNjM64Q8kwibV7fN5PrL/FWZqmaVFmkmGSa3eF3sDym81msznihVQSJNfucQ7+WLSX7AqpJMhTu9nmdcDVxMQsxBomTwNpFvFEwnUBk28iG5ZrDjdfyA8deWYGGnCzTy9+KOSHjjwzwyjKCga3rDzhLDDJ7TlN4oX1AdOLDQ3kWYJku+NiZePSELN8LAOTaDfqPzDfWnewyzf7oQhMot1ektq46JgFUozEeZjEzU9Ucof6xa7AcV2NsoHJswh3mNx4ASA1IjCJq9ouHtnz5Ob8qBlp4SBxVTs+V7+e8/jyGQDG0Vpa6UjcWmLFABvOVx2Y5BaHBea6gDoweXoGDhgA9evrWg2YPD3D8XnP4nZWci9Bkl33GByXci9BngaS+g8FF2w8zU81d1zYHdk4Yru0Ym9bn1eflGpuHC+1PXDasVenQ1nwueV+oG0qs03LAqY44XPTeKpt2U2aTGxlaz73sK2v6d2T8ZbdQ2TbXmIxOHIxrwNH0QYApkMGuJxYU4DDrw1s4gmAVp8ptcxIuLXnuA68K1oJMC2YRzmq9dyXuLXcOrBZJhO0+twM8QELAbc+T1rAZS+Zlkxsq/9uI+DWcy3gRfSBxZ2WcwnXWodsw90muFauBbzOm+Da63wduBOx0/pBxrVza8B8MUSnzYUbl+mjLoHZYgDinozL5F4A87g4bLsTEZfrU6vADlzMTGU5ZXC53AqwA/dyY8fhsvuAN+Buked5nhew4r8k3zZ2HC6b+wYcn7fYxvpH8xlDAZffd88/TjfnFeT81Nmf2W1/+Yr7UihzD9tksAGAo/uEx6xezrjmH/U+1lo4uKVz7bbryrVXOteIWLvOcwIN8GkHwuO6crXA0ROP6zzfUQL3Ih7XmasDjv504LrPuVTAvcKB687VADvtSueICmCnXSnXD+y2K57TeoHddsVcH7BgVz4H9wALduVcGViy63nPIAJLdj25ErBo1/ceRwAW7fpy3cCyXe97MiewbNeb6wL22PW/h3QAe+z6c3lgn13Fe14W2GdXkcsBe+1q3qPbu2a/XU1uZgFHf3hxFbnGAnb1DGG5FrDCriq3Dqywq7tfcgmssavLvQTW2FXe36kCq+wqc6vA7zsaXOX9qDfg6PGowVXmvgGrikGd+w1YaVed+xVYaVd/v+8ErLWrzz0Ba+0G3J/Mtq8Dtd2AXJPGU7XdkPup2bb1u9ZuSK5JTanGDbn/m23Vdt3v0fmddnGLXGSZ/rP3++v33HvuPfdHyW3DceT/HSM65ea/XRs2B4i/MvB9owO0cUyvb3eD+ziN/wExMbJCdjCGygAAAABJRU5ErkJggg==",
    174,
    174,
  ],
  t1q29_D: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACuBAMAAABdIivdAAAAElBMVEX///+5ubmCgoIxMTEFBQUAAACm8HMhAAAFYUlEQVR42u2bwXbiNhSGf12y7SDirEuA03Ug0xdI+wZ93p62+86EZF8bs57BMZk1VhckEyxdXV1xyGrwJgs4f758lq+uZAU4XwBggI+nTy3bCwymp8/dPRDgTh7bAheA+dSe2O3vX3AB4Kk9+T0DvdN4OOeec8+5P1buL3+8Sy7dfLt+j9zZdnj7Drl082GtB6YM3PJeD0wZuA87PTBl4AJ6YMrABfTApMatgAxgUuMugQxgyrCbA0wZdnOAKcduBjDl2M0Apiy7emDKsqsHpjy7amDKs6sGpky7WmDKtKsFply7SmDKtasEpmy7OmDKtqsDpny7KuBELo1DuyrgRO7MlPwHKWA5l+acXQ2wnDtry9hHCWDKHwwqYMoeuzpgOspuGpiOs5sEpuPsJoHpSLspYJLs1ondFgGYJLup/Q4BmI61mwCmo+3KwHS0XRmYjrcrAtPxdkVgEu1esSvM0f4SgS8idrt/AcB8m4fYxW/7n/8tAezW9rpW877abYaz8MPp0/6aSsAk2t09Pt8Fn9oXD41kmOSxW9rCxu7ZShoSJI/dbmliI39XS0OCEmO3bAeRkX8vjmFKjF23HC5E3AgwJSvD9knG5YEpURnM3HEPntvV8kNHicpQjHZcnTAmUSVIrgxm4ZaRJ1KuEiTbLYYbtqx9djMZmELcnt2Wbyerx2cZmELcQ7u2a/nBUFoZmMS6a/iueleje5CBKdHvMtXBtfcASjeRgMnD7XqjdWOZOrn9qQbgYKSJg8RJ2PtrX8bCXwBQmCdppiN5ViuZwt61AMxiuJRmOpJXE90jAwwABfz5ug9M/VktqAUVNxMBZj5ciVPzYe4MJTORP3MTRjEKn8Me8GGu7ZjSxXcni27JILQRv8ZyRZ4NduHvM0PL51Zmwa1jWWIGoTArPrepBzbEXXGxS1qEt/JDJNdVo4USd/N06SNcjaqY36b2uoUYLtzD88TDvelWsefC+YaLPS6F8+IGM+vZ7f1l/foQGl4BwMdJCLzcTuJ2/VzfsHMTAINxG979jbvu221aof56hhs7tcDt1raJGdncePOrl+sqLPplZ4LBmHuSZ3bVs+s91/781qx7hsvhzN5uV1yz1fXaAa9qBrme4e5hOxtzS43+DHBl/TIU9A+e4cpNuYWc173cBN1LkOsbXjsWtzcDBHa5/swzbHlc2S6X2zc8YO0aI9tl+9+e4Vt+mewuRbts7qFhHhfduphLdvn1RbP+DnzbfmZx79/6Sc4un/tW1gZja6bTabh82D0+LwS7kXVsU4/3FeFya38FABcUiHI+XLVRu5F14XfD1h60OH3D/7x8hbUbW3c36z1wuXtJCb/ydTsCAHPn/tSv5111vfgbQFdFdx7c/c8AcAV+ocDnvhmOX5tN3G50X8OrEtErYje+v3MwhoXL3A2XeftGjmt+mG41ghvfPwt6CbZbjdgVcjWGo3al/cm04bhdKTdtuGijuNL+b8qwmcdxpdyUYcGuvL8uG5bsyrmyYclu4v2FZFi0m8iVDIt2U++H4oZlu6ncuGHZbvL9G7NE0thN5rrKssDcOjYnN2LY3DkZN5nLG07ZVbw/5gwn7SpyOcNJu5r386HhtF1Nbmg4bVd1/sE3rLCryvUXoQq7uvMl/bIW3brNzu0bLqwCV3d+59CwDleXe2hYh6s8H/VmWImrzH0zrMTVnj97NazF1ea+Gtbiqs/37Q2rcdW5e8NqXP35yaYeWD2uPtdVo4UeN+N8alMXetyMXFcZPW7O+d+m1uPG1oUscPm1fY9cNI3+u+fz6+fcc+4595ybrL9u2p4207T7/wOcnZz2Cy6kvc2jrxrna3/9DzlUtkBwX8xvAAAAAElFTkSuQmCC",
    174,
    174,
  ],
  t1q29_E: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACuBAMAAABdIivdAAAAElBMVEX///+8vLyEhIQtLS0FBQUAAADH82yLAAAGJklEQVR42u2az36yRhSG3znaXSMo3UvkAgTSG+iNN1cQCOsGJOsWHez2k+kCkwAyMwdrNq1sovnz5vk9HmbODAPcLwAQEPHtU3M5B21un3t6nQOqkDd2sAHmgLh5bvwn6Js+t3vuPfee+//K9R75vzufMkw5B/kNvJ4rom/wICIlPff2uZ5bpXxgmoCbViUbmCbgSlUgunGuiFQK7GsuME3ABRTbMHFxDykAVOXMvWWu5z5IAFA7N7phrojw3L6qmIZ5uZ7z1/kO5homHq5MP14zDdMUuxMM0yS7fMM0yS7fMHFw67T7nmWYOHZ/7g3nLMPEKYbn/nc4holh98dg9uEYpql2AaDaWQ3TVLsAoEqrYbLiHp4vv2s3TFa7p5G53W6YpttlGabpdlmG6Qq7HMN0hV2OYTLjilT3M4thMtv9oW30VLmMrszV2wWAytit0VV2AUAlJsN0nV0A2JvGYbrObjsOGwzTlXZthulKu61hfXtJFrviTHT+sjz/sH27r7WGyWI3aHervCcXACgIAQAb/3zTaQ2Txe7S8wGIeBUBQPAYAADFrs0w2ezKGIDnwnMB2uIYAghkaTNMttp1yW+b9QgI6twJALFdlB81rDNM1toVG3huldeeS9tFkh1DeHX+NaxpDJO9dr3HSKUqFVFQ58idAI+qtNYwaew+dGr3ya0kKvlLuHhFkx2f1p3C1hkmjd3urSaaFFCpQg4gdzZi1x0lxg0Tp8VREkBVN68AmuxwKnsTx6hh4nRk5ANQLy8AgFwkjFGCrHaB8xbxvsVsXsrBKCEjVu7A7ifwp9HhOCxGDBOngTTvaY8aJka/C2DmTxyHL3NXfbvta/VoHIcvDV/kik3fbksiVsaZ7tLwxb7Rat1d/KBw2q+NceJIf4uezbliI/uLn5fzn1pnOmnMXa0Hs9rh81XQ7PSGowHw3Gy3+0nESpUmw9LwuQ3sdq/gUMf8Giaj3e4vhq5D+ioeblXRAPdBiyurTOof+aiiX8PEtbt10txd+YYa7gET125dySarDcD9Bp6YdrdOCuTOimu4m7vyH0y4QJPBALzrznTd3M3h2YgL5HJluumW47nK0TeQjQSApq71rbSqNX7rY6jvk30AIGeh/9eztRzPzd1AR5uJDQAEYq/3ENfFeG7zqgXO1coHaO3oVxwz/6HU1G/u6IHrGAiWlV5DfEh090WT6YGdmU9bZcBdN6V2fDAZxmZT55Jnd5hrNOz5zo5p92L8NRmWfLsXuSbDbmOyuyiN87wBOClMdhNz/2ACNuE+lJa+RA9suGKZ2PqSJvPDV/MoATSlqXZHc5FvF9rc83ITp3Jg9w9Yc43AB7gSgLDhjj3XMwAXWyQAZuHA7hunrzaUxOldNEVRlOba1a0vDCWRqNheu7pcI/DfvrV2teu3PnDQndISJ7bWrja3yegLeBa307cXt8CDpcaoXd36OFdBZ/b3XABi0xavPPSBY5Hw190dw7RtH+/SWgUAhL/sGZ6tT+WE/Ycvw6s6l54LEeP9GAKeW/QMj9vV5n4aFuEiTUWE1Xr/4gQQYZN3S0JjV7+/82HYWxaopOduUDTZMfSWhUyc0GZXn/th+FHtoFLx5O9L5E4QNTuc3uUXblVO3D9rDdP6JIFKrlQBNNnRLSSQOF92i6n7cq1hIVIAKm03CXK32QE4vSuLXdP+ZK4CQL2VAFAVSXeKe9lb7Jpym+wY4jwFqxfZneKa3y12jfu/1plu0OJwc3ujBGsS5uX2RglOz8DNNYzDNlzz8wujYSOuOdcEbMa1PB8yAJtxLbl6YAuu7fmbFtiCa8vVAdtwrc83NcA2XGvuOLAV1/78eBTYimvPHQO24zKez48A23EZuZfADFzO+YcLYAYuJ3cIzMFlnS8ZAHNwWbl9YBYu7/xOb5nPwuXldpf5PFzm+aiOYR4uM/fLMBOXe/7s0zATl5v7YZiLyz7fdzbMxWXntobZuPzzk7kbTMDl5zavx5CPO+Gcbr5d/HS5z/CvedFkRz7ulPO/uSsSfENuk1Zs3CnnoPH2hu/gnXTdc++599x77n8ldw5gKW6bKdpc9eutYSVAw034W1wuMMepuL3dEvervf4BTVnhtyRuZWsAAAAASUVORK5CYII=",
    174,
    174,
  ],
  t1q29_row: [
    "data:image/png;base64,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",
    790,
    174,
  ],
  t1q30_A: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACxBAMAAAB5B0H2AAAAElBMVEX///+7u7t0dHQ1NTUEBAQAAAA7uU/GAAADF0lEQVR42u2bzY7TMBRGP3fCliYDLEdUJWuEKvYI1DdAPCbiBXgEQN0zRM16mMbT2bY1ixGNKY1zf+wN2KvErc58OnUS2zcD5NY3A7NIgN2vUGAyT0A+rDABuvhgB6AAqi82NvnpS6AA0EUnFwAmycZGJmdyaOT93Z7MvJMfNiJ57pNvbUQbzju2UW2Y6/XxuI5KRtfl8ZzJ/xj5RZmKfPkumY37WSqyW6QiV5rQQXIzXSQi37aK0OHxrAkdJm8UocNkpwg9cnVv2vsyDdl9m8adb6CuAZhpDZi4ZGd+O3AdFuuINu6Ock0lvRDPZ77+CQD1bg1g8lYWesBG1886TFvO1vHHhmJME55WwguRQBaGpjxhZaEpZFlo0qxAFJpEFoWmzWQkoWlkSWji7EsQmkgWhKbOGPmhqWR+aPIslx2aTGaHps/MuaHpZG5oxmqCGZpBZobmrIB4oTlkXmjWqo0VmkVmheatNDmheWROaObqeNNuZ2nIrikXacgM01wy3TR7F4Jsmk0mm+bvnFBN88lU04LdHqJpAZloWrJDRTMtIdNMi3bVSKZDZKcyHSIblekQeWM1pkPkxmpMizyTTEt3XDftxSwN2TVjG5DiXeJR02LyqGn5zvaYaTl5zLRiN37EtII8YlpTQQib1pDDplVVj6BpFTloWlepCZnWkUOmldWlgGklOWBaWxEbNq0lD5tWV/EGTavJg6b1lcch03rykOkI1dIB0xHIA6ZjVHjPF4pikF1TJsqMzdcznQWihE6VOdGVksmZnMmaNnjfMP79qwMq/z5hTz53lkF+7T8nvq8ult7p4SNQv/I6dp/oNsxzL0ZXYuK9Yua2JzGd4di4230+Hi9v4Kr+tHgDwDzuO+orDrm86fzdCOO9GPzIAMfKNQDYq0hjoxztyFdKJmdyJmdyJtOaHe0IPgc7U/nPQedNOAoHAP3nmLLIpVn+MUvA8uQL277DHRg2XOufrbH3T/cPc5D+z55/3/3iQxn913v2Po/nTM7kTM7k/3JF381tbOqlffjf0ip+4ANQ4NAgCTk3v/0CqmUlv22mqxMAAAAASUVORK5CYII=",
    177,
    177,
  ],
  t1q30_B: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACxBAMAAAB5B0H2AAAAElBMVEX///+1tbWPj480NDQDAwMAAADfshinAAADGklEQVR42u3bz1LTUBTH8d8N2QI3QbdAy7h1UWTvjPoCzviULHwBfQKtPgAC3TMlqWvJdQE0Kb3JPefcE0edmwUzKcOn3znNn1sKQNrazcDMRmCb78iRTceRM6DSh10N5EDxFbUubPOXQA6gUoZRPQeQAbDq07APcq0u1w/yONt4ci76qRfH69fGVZ81m1sYJrP/xjTwpX48oMxb5VdwfaS6P39sJDnJ0jNl57334bMzAO5THSGXte9UKBzqAisbI9/ansVEETuNu3Pfo+8uFnj2encxwhUJwGR1gVHkg6NmMYpspoFksVyGksVyMFkq7wSTpfKs+jHSdcPtL9bnjGazgTEftu6IGs3l/khXUTNddfb2FKdRHjXn46xkwseyUD4IH8sy2dCSBXJJSxbIxGS+TJwyX6ZOmS9Tp8yXyclcmTxlrkyfMlemT5kpc5J5MieZJbOSWTIrmSPzkjkyL5khM5MZMjOZLnOT6TI3mSyzk8lyxk2mymbGTabK7ClTZf6UqTJ/ykRZMGWiLJgyTZZMmSZLpkySRVMmyaIpU2TZlCmybMoEWThlgixNDsvS5PBv1aTJQVmcHJLlySFZnhyQI5IDckTysByTPCzHJA/KUcmDclTykByXPCTHJQ/IkckDcmRyvxyb3C/HJvfK0cm9cnRynxyf3CfHJ/fICsk9skKyX9ZI9ssayV5ZJdkrqyT7ZJ1kn6yT7JGVkj3yVCfZ86mH3VVJ9jTf3mAk+VIHTp/+JznJ/628fd0wk+7lqUZp2113DWw/QJWz087Or484Oe7suwXMm85+c82Yhqk70Or+bz8ft2r95WFbse6De1ftsxwCpmn3SwCw7T4mHNm5efvdQwCX7T3mDAAw978mqseGSWdKkpOc5CQnWUl2vPWGmW4+b9k+u70BgCnpbuW5d/9sFxyuAdzJk1UBTp8+QJyG6yyBjNvsKp6GWk5zZ3kBLIGrZmOJBPetwzWs9cZ8c3+5lL1hTGdKkpOc5CT/vbJVVy3G/P/BHEBRKNs2v5erV+rNzgEZwv8dI3s/nm+uArS2O6RtY/sNdfUIieT8FgQAAAAASUVORK5CYII=",
    177,
    177,
  ],
  t1q30_C: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACxBAMAAAB5B0H2AAAAElBMVEX///+xsbGGhoYwMDADAwMAAAC7w8xyAAADUklEQVR42u2az27TQBCHf+uYa+w09Jw2yRlFBa6IQ9+g4jX7AoB4AUrTB0gE9wa7uaJ4OTjE68T2zsyuJaTsntyx++nzav/MjgOEVjUFddMDtnhEjGjaDzkCMv9gnQMxMPqe+ya/fgPEADLv5BhA1NvYCORADuTzIkfXfZHHN32R9XbRE3mTzPpyfnKXbhkbK3fpFnLhLt02nt2l28ju0q1z0Fm6lews3b5uuEq3k12lO9Y6R+kOsqN01/rsJt1FdpPu3FOcpDvJTtLd+6CLdDfZRdqydztIW8gO0rZ8Qy5tI8ulrTmSWNpKFkvb8zqptJ0slSbkokJpAlkoTcmfZdIUskyalPOLpElkkTTtnCKRppEl0sSzlUCaSBZIU8+DfGkqmS9NPsOypclktjT93M2VppO50oxaAVOaQWZKc+obPGkOmSfNqsmwpFlkljSvjsSR5pE50szaF0OaSWZIc+t1dGkumS7NrjGSpdlksjS/LkqV5pOp0oJaLlFaQCZKS+rPNGkJmSYtqpmTpEVkkrSszk+RlpEp0sJvEwRpIZkgHQurF6vJ7NfhD517JGu1va3e4GvurTeAJM0OH8q3Vx6dgTzFurxSqc9+htok2cP+ve+e4bE3UDxFix5GHWFMO5AtY9rl+2C3tAu5W9rpm+YqnfVELh47pG3juXkWAApqBGSL4c9cSB7ctt2ZzwHkuFoKyaPu2yn+SHtjs27pjevfZTdspOTioY28Wfayp/SUyQTyeZDF+6BW/6anUn7J5bpRtsxrbyjb4iLOkX6Yy+vSZ2+swngO5P973TB/RrvfP09DxxFl/pBr3UwevDXiz99OQrv7pofmZpY0XDb2xoWxsOiL8q4Z2p5ExgASI0fKps3O2ngZlZShURWK0nLxNCITAEqvm1em2EzhvhyuLz/sL6p049XH8qHPVWQCAMPqv94PGWMjFd4LMyWQAzmQAzmQj1suvFfPN/Jq6x2f5iCD9PihAQDgZWrs0W2ZeZVL6P3mnxmhUlEfRXRkBIrm3tCjk1JMLZQ0Rl6MfVbpZudaKWNX1iDMUAEAu+PIyswE6sWOwafU+7i4vAszJZADOZDP53Q8Ur6paUnO3nn31RqIrAV3SVMA4vqO5KvtEFqt/QX1kxdMwm19fAAAAABJRU5ErkJggg==",
    177,
    177,
  ],
  t1q30_D: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACxBAMAAAB5B0H2AAAAElBMVEX///+xsbF5eXkyMjIICAgAAABH/IGoAAAC+ElEQVR42u2ay3bTMBCGR4m3tG7Dlh4aL9kkgT0s+tiFNwDTPQl+gdZuuyUSC/fUzkXSXCSgh/EqmdPz5c/f0UgzCoA+w2PArDJgbQ0FTOa5yADrLjV4dgFQAMAmOfnxAmCS7T+oZCUr+Z8kV4tc5EmVzY2HRSby+rTKRLY3k0UmN9auykS2N1KnvfksdtpLFjvtX4NSp/1kqdOBuiF0OkAWOh2qdTKnQ2SZ08H6LHI6SBY5Hd5TJE6HyRKnI/ugwOkIWeB0bO/mOx0j852OnjfYTkfJbKfjZySu03Ey12nEuY7pNILMFI05i/JEY8g80ajzM0s0iswSjTvzc0TjyBzRyD6FIRpJZojG9lZ00VgyXTS6HySLRpPJovE9LFU0nkwVTei7iaIJZKJoyqyAJppCpokmzTdIoklkkmjaTIYimkamiCbOkQiiiWSCaOrsCy+aSsaLJs/r1mWViWy/I0XTZ4xYp+lkrNOMuSjSaQYZ6TRnlotzmkPGOc2aP6OcZpFRTvNm5hineWSM08w5P8JpJhnhNPduIu40lxx3ugCu6MXJ9PmN+5aQbOBhdOl85CpXcAdUds+4LqUbAD8vt1+f5C3TkjeXZtO/mi4T5kaf08sMWdfn9DwTOZzTovvBYPUQkYPVQ3anGaoeMnJIdDSfZ299q7sCAFOeNB2TfO7NrDkAuNaUXHKkLp3xq+iPrYe56ouGa7hktzken67uuix7SqaTjJL/C7JgDQ5lzqTdu9uhoLj7lG64UcUwpyk12+vxuy6pG5rPSn4xdeP9eFHUALs/hbX13nH8tsGSd374auv9yLYGmI0Dbxq0Gy7+dbvwX/vccJ+HD//UK/8yRD4CALwaKsfrd4S60R58rSHSN4K2DVIEuWF0pShZyUpWspL/7nnDXEUj06vgxuUjd0Oz4NrjkftR4BfejYMu5KAvactRoEFr3ulC3NHI9jrcWhToLmQ/4lrNZyUrWclKfqk77JlJTS2fyB/SC7YAxbjJTUrW5888vwEnVft9BB9bJwAAAABJRU5ErkJggg==",
    177,
    177,
  ],
  t1q30_E: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACxBAMAAAB5B0H2AAAAElBMVEX///+8vLyZmZkxMTEBAQEAAADCmxM3AAADmUlEQVR42u2az3LaMBDGPxl6a2MB02vHDum5gTxB/+QJ2r5tp32AJkDutRseAFuk16LtwSmYBGNJ1s50UulkBPzmG7Ha/VYCCGM3BMSUAavn6CM65SFHQOkfTAroA/LaOzl6A/QBUSjf5JcAIgDSu2Z5T+YZgRzIgfw/kccJF3l4wbYad+dM5Fl8ykTeLH8lTKsxi6dMZC+iD8ezD9GHyT5EN+xBD+HRQN4so4Qpb8zklIncfaUbc10ep0zkYt2TPGSaDyZMmX912010M5lyTHjIKDGSPGR9u57wkJHTUPKQ9W2U8pCRl6eSh6yXdykPGVnsLvo4Wd/cJTxkZPGYiaxvnF1Nm2N0F91Gdhfd6nLzY6KnXcibZXN49NJOzvyYq1nLLuRjtVZ26yYcrZgB2dEgmHRAbqJNyHrpkj1MyJQ3WDHZuR8sGlZadCaTy0qb9bB6fVA0kepKprm9fzTsu1f2/tGQTHM54SFjpWxFm5JpISY8ZBRk6R+NyXopUh4yMnrkaoQfsl48smLSDxk5WVkxC7Klf7Q5+8qsmnEbsp2rsTqvs7JiVmQr0XZnjDai7ch6aS7a8lx0Zi7akrwxF217lmsu2pa8J3rgk2wu2pq859TJJ9nYP9qTtaHptSdTbiba4QZhZSba5W7CTLQLuVibiHYh05xSHjJWYtQuug8n0W/PzgCI6ANAKlPeyFiVVcqgAYDhyTd/ZFoDpUgrk0QDf6sBQFAmsrMXcwg5eu6VjEGyAKgEipHH2ACgy7E8bhldybRos2LOq1HEJz/975R7V5PwkFtdjTu5TXSHG94sVkxkvaBj7UqXW+lc0pEK7hp1BEAvfgMAlN94rho5nnU+bmTCPxYCuTH7u5GFhNgeFUivmZ9677eP5JNM66T64x8wgPKaN2Ya+HvXHn/3Sd5cA+LH/QvvGYnKsFMC+R8jH4rn6F3dVXw9NDOqHxmv5qaao1p7IEYSQG9vBsCwljtlar4H651HWRXpwX7Frk+Qxe4WV9sP9yYAINTV7hvnAIT+sp0Yv7LIG6V6+P4uRzyrlqBsKyqmsSEPPPmJOnXgKezBQA7kQA7kp5ifZYNmta1R0qaboMuHtVtePqjd0afd68Kmwu7Kp6iKaFnvq/YnpDQm63XNXWgFYFP3GxsAxXnt802na73PifeIe/0x7MFADuSnTVbeqarKdTQccujtA+rCu2YqgajlPtxtCAn0oXOGn08jjL3xB0S6Ie1Rl80EAAAAAElFTkSuQmCC",
    177,
    177,
  ],
  t1q30_row: [
    "data:image/png;base64,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",
    802,
    178,
  ],
  t2q28_A: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeBAMAAAAxq65IAAAAElBMVEX///+2traEhIQzMzMFBQUAAAByRvBJAAADLUlEQVR42u3ZMXabQBAG4H8RbcIi9w6SfABJTxeIc18fISdIkNUHGeoEszi1d1KQwu/ZsDPrcZEYGj+r+B7Svzs7DMD7ugzMXk+rXIpkrec93iYAqXEOSAHzzSn9dl9+IgXQaXkAEuV8Z2/2Zm/2/l3vYHU981n5+/62up4pdD270fW6pFD1zrRS9XxzYVXXc/mKRF7yvNuoelQ/FKr7t8p2qp5vFla1vsQn8rLnu42qR01sIiP1tLI7Vc/XkYmM1fvYRMa82ETGvNhERs+3KlupepFVa/z8jUtk3ItLZNyLS2Si34iqWhNeVNWa6odiEpnyYs6RKY9u5YlM9n+tvGpNer4W91rT/WmZF6qefI9Me3SSJhLox9tsr+r5JrGanniPhDxpIiGPTrLuN/h81NJO1RNWrfDzmyyRsCerWmFP1v0ynldF5wjD842ganGepyVVi+NJ9gjHk1Qt1vyg5SfC8gSJ8OYb/ER4Hj8RnsevWsx5Tkt7Vc83D1bTYyfC9bhVi+txey32fI15srM9ZiL8+V/Jagb5nu+Xqh4vEcG8k5WIwGMlIpnHlvlK1fPdWtXjVC3R/JlRtUSePwUTkc3Hz8GqJfPC54jMo9PDVtNDm61VveAekb6vKG2h6vl+o+rRcToR8fuZ++lExF4gEfn7ozLfqXreLVU9Ok5VrfT5R8ulm/LyvtvXEi/cqHjR/Z1DnLkUeW0d8BaXmnlE1pflcDauLQCYNQCYQ/hAT0c+v7iGPQJXO/+9hjkU2xvgUKC4ibs/cw1sgMUWyR64KrDYIvkECk5jRryEgL7Asgf1QOZAKyQGpo/0cgNYC2thEmtyC5NgBQCvOS9zbAHAmgyAsRxuet6JJyuRnAPgIr2OAOcwGL53AKEjUBAc8cg4sjW6zHUfHByRI3jT9R/rOM8frWkd2sbmd0CZm+wIX+bZOXY9V5SdAarIH4HHr8V9DVRddhfrUTWcPvdDiWif/if0TA4ANCzdLseTP+E18dyzwR6UvCSPOvidTCe5vx+/gqDIo+5N6unszd7szd7s/Vde+rfZ07jM4NFB6+YckAyszmWBFP6s9+vVeG/XH00mGdhAECoFAAAAAElFTkSuQmCC",
    158,
    158,
  ],
  t2q28_B: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeBAMAAAAxq65IAAAAElBMVEX///+zs7N1dXUkJCQCAgIAAACe8g8XAAADXUlEQVR42u3aQY7bNhTG8T81XkfkpPvI9gVqO7lAeoL2nj1DL9AxxvtYkteBRXpm2yG7MAJ0MRb5iLdqrI0AAf5Z9Cc+iqTh5zoMZqunHcOCZqXnvT034NU4Dwuwfwel324HCzBey7PfaZTzvXt37+7dvbt392qOxbtXH232g2kQeOsu770/yr7f3jbPXSTtvUy5Ib7pJB59znvYiPK95vG4BHjcLQHWOwuY3bYi3+vx8SsMNL+xSiO/bOn+hM8d7V91z5/56v3O8tF7v4GN9y+/0nzy/sHW3Z/xDm/DJ2PTRJMc6R+aiyPYUOcBWNMZaOyrBQwOSLauvY8WjAMw5nrFkX58T4WXAAIBUgzp+j5rflyv8HyAlNLJE1pSCITI1JLMWHl/1ns34p13A+nSejcSjb98CHVePDh3DpwHNw3wdHLHkbR3H/a1z/O32PaQnqYpQDyee+Do26HWS8frqQdgmv57kno2gEsX68FdpzyOFMDY64kg8r5kC6DEM603KTePFOSbLjnu5kP9fnv3v397ztTTPyTPXwxr1fE3Pb90mh5Tu1T14unBanrsTafqRb9S9dKlLpGb9epoN6pePL1aTY+961S9ukRue+nw2ml6nNuNqleVyNz7eE0ic15NInNeepYnMjv/mOSJzHoViczPj/Z0qp58HJn30klatTLzQXEfyXjiRHLz1T1LVS+yUvWkiWTn50dZIlkvHkSJ5NcPetupejGsVD1Z1SpYL5naraoXDy9W0xMlUuLFca3qSfpI0fqVoGoVeYI+Ura+1hePI2VeZK3qpUNpIoXricWJFHrFiZSud/Z2qerF00rVS0NZIsXru4VVq9grrFrl68990dtvuReHtapXVrUE6+3nkkQEXlEikv2AknFE4pWMIxKvJBHR/sc5bVW9eMomItufyVctmRfHlaqXxlwiwv2obNUSetk+It0v691S1XvLJCLez8uMI2Ivk4jYyyQi37+cT0TuvQ0rVY/ZqlXhzVatCm+2atXsJ89VrRrvbeZdq2q/e6aPVHnT7USqvJlE6vb3e7cMmt7beCvhRZXH0BrN+2OySdWLB6PaXo43dkVr/78Rn1Tbq9vf7t7du3v/S28ByRkdywRYQPisdXMeGnBqjXWwIPZ6v97Iz3b8C415RZGjIDd2AAAAAElFTkSuQmCC",
    158,
    158,
  ],
  t2q28_C: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeBAMAAAAxq65IAAAAElBMVEX///+zs7OIiIgzMzMDAwMAAACxE+UVAAADPklEQVR42u2Zz3KbMBDGvxVcE0ToOSQhd9uQB+hMHrvT9AVsx3fXHnJuCFLOAfUQ/8EGYwHqoRPtCdvwm93Vt6sVBr6WEZCYo2WpC+fOHC9MGaCM4RTBBWgqDPGia7gAclM8CTDD62t5lmd5lmd5lmd5lveveW6vp3YjY5ma4Dm7kbZIDcRL8XbCU8JEvEFIb+tP8rUBHpuQyBafgV8bWN8EK74/HQzmBeHls0G9UCyXZFDP97ymkSE8Z1TODdYHxfKPMFi/QXix2Fxe3Q73j33HNtooViod6l8iVxsGi3OZDI23Ij3Kfe+dD+NRTLPt9a0Pws0w3j1edxnzxeD1dUaVQssH6+9QeqKx+3XxLwiLxf5T7kHxIXphY1QLrXgBZUPiTWh1EN5UNRayqx2t+nH47mE6ZD1YLJcm9/OIfxwnP5j0988Zlcc9Pog9mvf0j2K5OtZa7Mmob/1GNxeL4+c84qJn/bKxeqp9RwD8fvlL5GutsjgAr+zlX+OGK040BaYhvX3Xq8hZAbIXL6p0vb2VlOe8T3856HoV/559P0u7r8fJDfe38tY96iMKyx/Nv6z61C8b48nkfJ/UC22XCd6d1zLrsYfH2668ZultPA/f4679oFl6n8+F0nvv2A+C0enJliQn1S3epq63M58D/K4TL+K1rjdEL01dr7KfC0Csu9RHU9er1K8nPOri37fWYwbKF09edugHbEzT1kTNEM6Eq81L6DVt5ZXTpdCP12mPFiemtVP+nT1mdNRLw4Zbv6epfJv9a5feZpiegD9p+tfS9XYZmag80OwHwfnFAFPkC64VL4sxOz8iEeB9aPkXIUvP8jh055dgpH6e14UAID80eBTLpYb0SkV680uEi1RDt6VUQuf8wcae3oY7l16TqI7ipfauV7FsHmqcP65Ojhd1YHa+flmMOQYZO3qVlKUGeUF4+WsY7iB/dKd5qNLkRTdFapDnTN5meg+p2kUDj2KhmO5/85sbWQuPhcJ51MTl0ca/ssU/8rWztL2TWvwr1j3SX5zmqRkMmP1/wfIsz/Isz/Isz/Isz/Isz/L+V54LwCdDMA9wgfzBlHNKgTW+1epppOCiXJvLXoGvZn8Bp2cAE+ZRXwAAAAAASUVORK5CYII=",
    158,
    158,
  ],
  t2q28_D: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeBAMAAAAxq65IAAAAElBMVEX///+wsLCEhIQpKSkDAwMAAABj0t89AAADL0lEQVR42u2ZzXKbMBSFrxi2LRLpujH4BeKkL9BxH7t9gyZO1h3zs26MBF1H6sLg2IkE+rm7iIVnsM03Ogide64A+FgHAXKLR9uLFJISj/fymABwNJwASAHYb4F077Z/IQUAjsUDgAR5fiMv8iIv8iIv8iJv+UgvT3Nqc1Flzbuz4snGUi/JZsLRKZZwajs+9bQyaynU+Fv5bK23uvlj0pIU8v4oorSfX8kL1OdF9Tnu87cbVqg8mW1wee2Au97qZIXK62iBypNNjusvTdAMv+cdsgKVJ9sZwfktdfbTmhivudqut868jhgf6ZLz4caVJ2tmaqiuGVOFc/1o/1Fzg0aJM++Qrcw8cOfJ1uCY6vThVi/rQS9YCVhqv7U8zvSCVc9VX7vzXoRB8D0jnxqXej6t4Wuq7dnlr5n6N5M3KoNg6B6ED0/WJZofHG/8QDF5ZsGePMlLVJ7yLXOmPFkxrS8RDz+dEUzu1gsJ0cRTba/59kvB841ffq50dX0lmGJ+PKkpcySjQBI/nnrSlDnq5aejYENdV548jWDVClDSk6c0dV0o3vuOTye4Iizbefjp2GYUb7345WHVNcSTJ5uv70vpIaAf9Imqc7xOFai82eTm0//W7lF1lte9CzLJUkM7y5Pt1Zt/b8sf1J8HdXJ59ZoKsgngdXApmArq63+6uh7if9qoGuJ/hhn29r+jAfQllv9N/fW5YJEF+J8mqu5b9tnb/6a6/nh2tpcHb/8bb9lFVO26kPXrkdwWeY7JbZGnWqeourz/5yZ4mecmeJmnWoLKgyp5japJuSA+XeZJVTye7H4lRR84PvV0yubraz58D9ULVT6JpD3LSDBPimLaPwj157GNzt82/UG8101GEerPU1TdjG1isD+PdX2cYUE54eE8qMcZ3gumdgi8Doqx369+itD1cR5Vxy3t0PHZbzJa8qw3GS151lHV9v3MzCajF68jBSrPdkfG+n1UK3B5hwyXJ+0GmNryoL4Z7sbMhcLjDKZn8BmDd7Z0KwyeqlDnA3DXW+RFXuRFXuRFXuRFnu+RAgAjOCxy5PFvWIPjAAkAQxPLAFKQFd7da+CjHf8BeY4cETKzE4wAAAAASUVORK5CYII=",
    158,
    158,
  ],
  t2q28_E: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeBAMAAAAxq65IAAAAElBMVEX///+1tbV8fHwmJiYBAQEAAADWE/kSAAADW0lEQVR42u2ZzXLaMBSFjwRdFqwwXbZASNcEnAdo89qd9AUSO+wbY3UdQDLrYnWR0AK2/oy76ETaMMPiG13fc4+ObOBtLQIyb4+WyS7oZXu83YICojWcALpA9CBbenYx0AWIaIsXPYO23N/AC7zAC7zAC7zAC7x/zeue/tEkDapcy+vEDXhlrq2X7tOlcg5xQhjqVWz5Cv60dMPJWbE0PD+ZvPx+/pi48Trj/r2pv5FnKL1liTTxPMPvBCveov7ode/RqD/fSF88yxbn42L4ftHivNE5Uvv8kkvXHsfIuJVHbuK5G3AwPG5Gvf4GQ9GZuVVbJHa/kqxgijlJL9pxO48MAbZ1GbRpmdr9D4gIwOwPkMxPpKfrh3Sbusmp9DQ8JSXUxmHQ8N3F7xEVkUDPLr1iJZ14cnsN3NulV35zOo+A8m625NZmyCc48rC5s1Z7hR1v8fwdTCuDZuLZpoNcFol0503ima0ZO+6aD4DOHEwtTNL7WjNoev19EMDYxIvlSrrnIdknLNr6uZ5pf2REQAx+QOdIvPMaMblexn14ikuojTS4Xu6VJ6NCQfYMrpdJv3y6YYLletfbLfzyrtykLFtoXU+lfnkXUJn+CWlcz9LfXC+9948t5vtqvHDiXcQjXdbLbEZb8/zoZDQCr3U9ZT0HavzgXV+QGa91vR/WY7RGL0PC+nXzNhjtOPz3R0YEpMZf6JcyRQPei+NHNcl25RDV6/KGhKq+4r6wSk+bN4BqPnCQnq6/PyNBfjWQnq6/64JVDH0w7eXN7r9A+bA+tVMn6Wn7q5ZV19twxxF3u1SpFM15NB6fSm8pm/NIfHkcOBylp+PRoSgON0hv4Vptfd6QTMmDeZvIFUfz/ck+ASGRQ9bz8AN1JL3z3g8VR3njysX1jPlAKCi1Z9BpmXrg6u4LHSZIT3efb1BvmbNe+vfAXZz3PgxQyabk+2QrnnAu78APJnLN/XjUcs3Icf7+/F3PbX9Xw51ntUYenaoU5/OiBq5n9IPX362H65n6MZYAEEUK/tVWeUTdvIqwyHgD3mm95f6uSnoNqq3ur/wzG2u0wVMJzlrh+0LgBV7gBV7gBV7gBV7gBV7g/a+8LqAYaYdFJNAF5E1bmxMAtX/9dF8M6B7cKM9fHG9t/QYejhoKC7SYxAAAAABJRU5ErkJggg==",
    158,
    158,
  ],
  t2q29_A: [
    "data:image/png;base64,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",
    174,
    174,
  ],
  t2q29_B: [
    "data:image/png;base64,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",
    174,
    174,
  ],
  t2q29_C: [
    "data:image/png;base64,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",
    174,
    174,
  ],
  t2q29_D: [
    "data:image/png;base64,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",
    174,
    174,
  ],
  t2q29_E: [
    "data:image/png;base64,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",
    174,
    174,
  ],
  t2q29_row: [
    "data:image/png;base64,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",
    790,
    174,
  ],
  t2q30_A: [
    "data:image/png;base64,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",
    155,
    155,
  ],
  t2q30_B: [
    "data:image/png;base64,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",
    155,
    155,
  ],
  t2q30_C: [
    "data:image/png;base64,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",
    155,
    155,
  ],
  t2q30_D: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACbBAMAAACHT/S/AAAAElBMVEX///+enp46OjoODg4BAQEAAADLJk7pAAAF30lEQVR42u2azW/bNhiHfy/bDPCARK+kXIoBsyRfth7mJDvuULT9u9cde1iWtJcBw1o7RjEsh8UknQDNNtjcQV+kLVOW40OHWpdAoPXk5YfIx78E+Iwugkh2BpsqQOyMdpDsEAYY7BRHu8Vhj9vjPlFcslOcOHPfI5cuuCNucOsAjl364Hk3nBgGNoD6t3Y99N2MO+EiRTaAOLDrOdaiE44Sgjm1Okew6qE+BWddcCJhhBHXXWeyzgKRMN0mHXBnGrDqiTUQZFVrpoGl8rw40WdYT9AQQF2PGDIAZ278uFjDBkRgAMGp3Ur20PpxNMx/luVlBAC446KVAYCjTXExFw/mHcq7DjL5WilmiGbJhrhUlydeCgCD4pbzxRZqt/Y2XFENAM7qzgE0YwDipLy114rwvRHVIM4YiKvb4Myq1Zqbtqmwz3eE9a1mIKg/N9sI57yrKy3U+EHRVlzVxWokQRog5o7b59QAMAEAYyqoAmAIRWeN+xv9uFAaqUlKqQ4V8EYCMAYA5grmrQKgJAAc1c889vjVqxcqnP/4Elj8AmDKEghDCdAUwGgogRASoN/rZx6BzDrex+tvLn6Vf8qPl9cAzD9pr/fX66e93sHlPYB/017v/Ldve72D1yXrSBHEYtNjKkqnY4TR0TgfrDiZjhFGi3Fln19dfcIyu3eUzwqXuttK+jCc+N7ZecgrZO24WDn1DGY+IWvF0RCZV8iSTriIQ7ueWLkHFQenXXCUafvgpCE5B1VGS07ShuuzbTERGJYviiET0g64ga6tobSSeq0MdHGEb4jLT3p+zI6QpY6QzZKNcce5gcm0rsYWMsVYEUQPrjSwokNrhMw3GcL91uFIVqwcIXvkClk7LtO21FBaikNumGVrNbQtOFEqV14P1UIm2GolmWyG0/WRndgGRsLxM89asXGGHd0xXiFrx4WbClm4UXWkAECW5WifkG2AuwkUYFgBhq4qIVOAWShAKwBGVRrWeNkGtZgEEqT6EnSogEUoAVKBBB0pYJwwkK/EQ7UO5xjU/ZdPegcXj570vrhQAK6f9noHl097vYOf7oGPP8j7+3Bi7u///uO6mbVsUGFopAqJp6rhNn4BvJu8BOavmqvraFBRlgIUpR6D2gvZHrfHtRrUWYeHqRUnBj6lESfuS5y04c7kc1+aN3B167QFJ/rsOeTF0BEU6t+1pIuxIo/+xtoRlIE2/nSRnoUIBp4QyQ4HacjsTxePtc+4IjCsdPFYg7zpIvXhM66I7DSPnvHqZ11cwh7jEkMG6nQxUsuJ0TKu0MOgea3krVW6GFFDV8SKyqIhXbbksaynFKr16eKxRkMkVydcbCdYRaS1Pl0s3dWJS61XoHxD79juydp0sY6V6AOvT/Pyeo4V4E8Xo1qMglVcJbp5PQk1xXdOdb6dx9ImmgFkxXe6dfs07NvbDDsyyc24halskVacxvZPchlrqpOsABmWetjU19wWFwq4quTRji2d6t4yEF4wcj1cusaBhNSBVEYdAWZilJEUSCX1aI19vjvKzPsRwmQ0Wh3OG80ynL89MZrPAdyERoXzD4mhxc/OCFu6SAwJEMvG/SQ+eT+dZNHXF2MAiAbJ+9EszebjLQM3ChlAyM23e13c43aI453ixOnafWUbXOzGCHT6IBwN4QAG0YNwAkHkCtnJQ3AZOQdVrIPsATgxZCfNe7biJJ1wA+VITaQY3dLFpYkg5xzNqCXQavkbo+I60Co8oFu66FxFpEVOmtclXXSDh8JKinSxFLIO6WKjlRSTUaZ5m6eLS6sETppXSc6Mt8HF2knzRFIKGT9/4H5nHCHD7Ta4tXkb0Ta4oMnt1ulaO25SKRNIOX64VXU3AQDNCpCHCka7QtYZt5gACC4ZCEcARoGUUrOUUh9tFgcuXeeLbDS9MmEwfQNgMUmA+ZsTwJz7vs6v/wsosVG1n1GWTkc6jRZyvE55thAyz2F2kPg6u7KYZT3Xe0fZ4/a4Pe7/hdv9/xs/BrKd8ab4rK7/AE/+17V0c2XoAAAAAElFTkSuQmCC",
    155,
    155,
  ],
  t2q30_E: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACbBAMAAACHT/S/AAAAElBMVEX///+bm5s5OTkODg4BAQEAAABkZiLuAAAFeUlEQVR42u2azW/bNhiHfy+TYDCGWi9lX4odLNm97FLXbu9B23972I47LGvXHQoMa5wYw9BdGpJO0WUYYu6gT8oSJWXG0CHWJZZpP/w030cvA9yjiyCivcGuNCD2RjuJ9ggDLPaKo/3icMAdcJ8LLt4rjp5yj29zG2502aN5s+ctOFpwdxw9vmY/TgTyuvN+OjYU+XFTg2DZtXETCqZenJgzcN1xMihiqnSlghsZgOzzjhNhUO2Ki6NTAGDRqXlizqh2xcWNNQOgTafJGBkAZBfNuAkBAKoDXD9yc97tioMTUVJEXdZKmH62GTcz6Ytg0QGXftiZDLEztgBAH7nbRFS74uB0EYGjLqtktytlnJXlCNxyBcXLTT1O9gz52cX1ONIAoFPdaKExt22fHwIANtCApctOnU1qLYYcx6VPbNcBQBwoYKjbbOlNxICGBDCsx+H8JbD95pmEPWsdu9VcARIKoF+Ld49AxTj9+Z5Wb7W6sK/+aJ+Lv+PB4OyXrweDk+8z1vDf2OfoaQzIWVy2z89YZg+OchCyO+PEM/YG/p5CFipf88bLnkL2BFP2SI4TMunxxxYhC1luPDh2QubYVEe6n5DNqOwkNG8VsgmDGoVMzJlK7RHMVZ2pETIEzz2xlaflnrQJGQPAMTdMhKNXYs47OlMRMgMA1LBWQnDZSUZmV2fETvVwOuRMUxKq06FNe+KOtKjIbvK31hePJsn306ENdc2vskHI6tbKNCtN1m6cagXH7UJWs1YoNzAbl9TyrkI2yks5doVseRchk8V7G3aEzPyHQqYahCzIv0XUUcg0YLlByEgDsPkA2uJW1+O2a6uUMYFS+sGukK0UAB0AsLcadg0AxgLQjUI2i3D73aMI2x9rknMvFCAvA4CuAJzPFRAIBdDr8oiKbWkypFWaJCtVZ0wvgHfrl8DttxrAowVwtnkBvMtwJ19d9gmN4TQGKIzzWwnI8CBkB9x9w/FecRR33EK74UaPfM0Lo344irSvedNlX1zgwYnJNffCzYwvQzMztppvOfbnSgjB8rIxa0QWrLu3bqThkcexAZmoe2dpQgBsQwKJTnk3+SW864AByFF980Jdk/zy4VJlMvWTEVKNawnfOmBPNi/TLV92sTZpVb9W0tJKolR4JgIeecxtjzfdcGPyyWNue+ScAt51vytsrzG72GPXo0nxlu6EK+ml9VbAnXCmqJq8+TLTCfchAKACDdga27ssbDHohLNrAPINA6RqCq2GokBpZVadNih7ZmN7/m4oJqtVTdulVfL2t8iS/QFNulh9tkaW8qv5yc6i89Umnt5eXOBuulipTDIAyY7fHd85QluVPzYcHOUe4nivQkZTn5AR98SJmRNnxmMHQIueuKVaOJuuG6hmIffCiQmX44yInEAl5qYfbqYJi7IHOIFqZHjZB0dzCR45kb4UqOi09UBuN6VVkqxEyKJCcrjtQK5yxugETpqTkwKbEtoOb+vOGLP2JAm23AHEhAFnaFtwicZQ1p40wZYt5aSUw664XGOS7GIuZDItTZNxTzrixpmBJdnFXMiOomwimnVvF5dWn2UXi9tgCYCmmeT4JqOMy9NKtImAsXGELOt6nl1sw0nd5DiWS7lF4LoTTlDToyA5NRD13Y0t7wgZuaXtuK3N4zDp1LNsJmQU+B5j63BXUICSWkNtdSpkhjWgHmjYgm63ugvOriUgXzFDDjWwXQMIXjMgVwBWgVLKsFLKDJtbVz4BVTeDT7+//euGz1/fAHh/8/Dq7cXNTXD+EwB8+XAwOPk5Hgy+eNXQuqOhruTvrAaIVd0tTeOrlYnDrbpoypD1ErLEwDzBrJ+QJQZm9cFRDrgD7oD7/+H2///Gx8B0b7wr3KvrH2A6n6lI6H+9AAAAAElFTkSuQmCC",
    155,
    155,
  ],
  t2q30_grid: [
    "data:image/png;base64,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",
    315,
    315,
  ],
};
const TIU_EXPL = {
  t1e10_deret: [
    "data:image/png;base64,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",
    312,
    134,
  ],
  t1e11_deret: [
    "data:image/png;base64,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",
    383,
    111,
  ],
  t1e12_deret: [
    "data:image/png;base64,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",
    235,
    134,
  ],
  t1e14_segitiga: [
    "data:image/png;base64,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",
    187,
    197,
  ],
  t1e17_tabel: [
    "data:image/png;base64,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",
    327,
    265,
  ],
  t1e19_venn: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAADlBAMAAADkYfJsAAAAGFBMVEX////g4ODLy8uKiopvb29OTk4VFRUAAADS6TbWAAAQjUlEQVR42u2d21MbWX7Hv6clZlK7XLp1GWfKY9MSkms9TmwJgac2s5uRwPLD7uyWEYjnrG/vecofsX9Blpk8ZVM1BsSkKrVVNhiYh6SSERfZlR0yFhIN7PoGtBrsDTBG3fsgQLfu1jktMWuqdB5cBrp1PufX39/vXPqcn4BmaZZmObFCAAingjQH2AHb3VMB+4UEO0DyqVPAahMl2AHkp04B7JmLAHeaHKwJ24RtwjZhm7BN2CZsE7YJ24StKPayn3zd+YfKKbGsfZD3iafFsqF0wpmnuMkLqGsqADjkC99JBlc5VAVEXDH7IFGKj1q1bGABWxQqIPF4PNAbAICoaDyP7w0D9qHijL96FcAeY1sG4MruptRrfmRkVlYAIGtyR4cXEA7/Htf5+22oEhSrMtAg0k3KNRmHtSTNrtoBxO3C/3ndK9REHQ6WusZT3UQA+EVcv8P38oAtxg3f0fHLjh3gsgLX3UH4Eee54VuwBYdjtrth+O7G4Bfi3AAAe9g2fJtnh52zDVHdpQFwoOVvU3AA8Kkkn4rpXPZI5NoBYd4eUJBDb/4PYa5X9fWv9ECYbxGBHPEAGJS4rfUwO2x+3HmLanUkHhcBx3xSAUB+8WV+PPlK5zJJ5GSC9PyEuIGp7Z+OPwxqbWNfnZ1c55PzE4F0bgoA7GelNw+nvBZ6sOXP7QFqBeUKNbQsAySkoxVeFTkJPBwBHgCnCu2E5CHlIPFwHlXDhxIAFyQWejBszgYofCw/CryLg5ZYAkDkW5Dhdh35aKrgkc7A/atCILbfxQFQ8Ez3r1b3Cxdth7+A7ZZiwcEALAqUDgaon7lEAJlutPxwZFXnIpXrlMD33ZsAAHIwOvovR38buJc4at1MGL702MkPZPL/LgJYfs17FtChY1lt/RxAzhUMqyKbzR21o006eu7anBuBGSuhiweCK9SsBLwCAF+Fwdt0o8hqOxSNwAsovPpaBH/UBxAElaPn8zigiDYLPdid7t5wihKVx4U7v5QAYNmf7b25racVaQXgH9+5LGD1Lj87PBwGD/CAth7v5PHoDgAe032L8X+gq9MGcB/99+HHfxDybNA8kr1nwN7uM7Is4dne7u6Lze/+sJSrumr3+e6zPeSW+P/MPX/27tLWvrqk7D7f3VX2dlNnfpdTnvHZvee5nLaf2f/fF89q1dnqlgDA/o/HxujqfmuHh2fCFaFLy7DcTjxE4IFcTqPQuYMXBCCn5VbqALZbvI94ux3HTiVns6YMXmfwOCLK8mL2+4XlQt08tGxOU0B44nE4QvL8omGzQh7ImZUcAAgOweeT57PK9wZLerp5bXmlWKPD6/VcDz3UtW5Xj6jNlRre4Q1F1YcL3xOs85qoJrOlkxlZnusKeeJz09WPoCeiJhfK7CjL812haPChxF5zaeiiK/6fn8mMLVU+x9zvn//w0kW54tfOXwQyY0t7lR8hf7N/tnv3ORNoq1tihiVXf/bO1PSe3iDsm/1LH/5/GYHv0/fG/kvvWjyVnN3vrpwwLIn+eHnM6AE+fXH2Uimtf/D1vxqZb/ebNx+fWTpRWHI9mE7sGf5ZTp3tLtL6Y+l/M74Wf3z5ExbaVrfENuoi0SvJhPlAdzUaKLKazwfTCX/sBNe6eoPJafMr1NHV64W5o7sWK5BO+CMnBnshkq45zFFHV+MiANvNdO15djrRGzghWNcARf1Qx3b6Ae72Js2aQHo2Kp4ILDdIVT/y464Yom3jVB+afDx0IrDRdrr6sZnwR6+M0fX+2uSr2AnAXrgySTv6SKe6v6btTNXP/YGGw9oi6RTDA3NQX3kwca3hsNfaJqg/873LCQZzpdcHGgzrvkK/j4YbSKZT9ObSxv1iQ2FJbJNeBL2ts5iy3aAXwlexhsL62+lXUm2fjAP5CT+9wJMtgQbCcpE0/TykZ1MCkN6hViLUif4GwvravmQwbAIAtISPp75n+XWgYbBcZI7+mfYcPoTNtUjDTctRGXaWwbCHYx0t4aNv4QadaSlgCZNhN47U/WaNPiBodKalgHW30xuW+6TYd8wwBITN12JjYCNp+kp9B8WwsbFD342ps5GGwNo76Q1LIiXxWJvpp2/lsptvBGxogz7G2ltLR1sZG/3IOv8o3ABYLjxDb5++TDkAwxRruqsBsPYD+nUe7kp55zHtooc9oHCxmrARhjVb10EFAIOLaRQuVgvWdoXevRCZrgQIMriYq25Y5wG9e9nOV44jMww6yK8F6oWNMCykOjerhMigA8wE64TlOhlmXpHqxW8WHWw564S1M6iAO1/dsIyTQQfrYn2wQYaXFXadvUD5VwwrLqlAXbCEJRYEdeStpRhEm+mqC9bWTq8CckVP3gtdDDp4VRds1xbD2k6bXsPyNvpP0B4F6oENLDIELt2GqasMOlipB5YpcHlS1ryGIXiZw+ZRp2SBLEPwUl/VAeuUWSRr4DUsoq2hGVNYkeFNlc2gYepq4yKtKWyARbJGDZNYROuwDMsSZREwGqMvehhEa7MMy+Rf541g1dIqfPHg8b8l4VwEgK4A1B3eKqyDxb9UGmu5B71REe8MOspe0viHAgBcQwEgJVqFPd6gyvX0A+B6KnbQFPb0dfFm/lXuYcLkyGoE6oOR1ZK5LDcgKQC5JSmAZB32ULIk3t9zE1y8P1q2jHn1Gg/gQmFjqCdn+DElAOkFeULAwaI6U+pJyRQAJGcByB6LsFznoQzJuXsJF8gH92ZKRyUt4RwA+41Ci/gUDawGqAQAFK3E9DM8AG2arxQ4Cyw58i/1s5X0tpj/fGWubGPcAwIAXxdgrxhP2GWdeGS0Mc8yLHfcegWQeChQlRLYNykAOCgMeEmHSTwilZ/q8P29wThZWzMLB/aTDgaAxlXOPfxhwyUpiVcsWZaXKp2NdEgWYMuCJwmkgOVpl1G3pojWLCu+KIFplwDYDJFIzqSOUmvZWyVga2v70xTeuwEAL8tXnFZ+bA2W/5+ShaG8+cTBI5nUoYjFv8bmC9MtG7A5BQAV7dcEa7CdSsXCEAnfB3C9AwCS5XRmSoPyfjHenfuiKI9sTW+khuVKQmGhDlerBCDDHwaIMthvzWYrxUcbO3w9QTQjb7QGS0oeUN8yANL3EAAyNZ2xCsBR3mjnFkIqVeighy02vuXyrwG4P/jC8OJ204Ff0bDcP0H9dc/5bc/98rYe/6tt1wsbSwIgAw+Nr+2gG4fKKqBhroNPlvXO8j4AyBIAbJvI3wT2OBq1iB0X8PJ3/NWreDJbq2GmOpwszAfuVVxQeB20MVurVzCWSEkMkQGgoyqUFnq4XDlsYQuwozS2a2hQMbZssYVvRgAAv6m8onBI7gFKz6a5bt1PAc6hFyUeZ6rDqjjHW+puGSZgx5YtnDzhKvY/bfMMsGJ9lqUoxxJ58hQANn7/Pk6gGFuWwRpFGeQngOoTdApvodknJ4Ma17I03JpmG1dYBKVZk4HSEGt8P5r9C1nW7CRu8xR+E7YJe5pgD8fRvOXIlrMCy9JHKpV15RSrjbU2B2MpWrFhXxfGM0+op5MMQbkxltUa18GRk9eswGotXxiAP97H1LC/kGVdg0HgvZhQfQLE6sKcoQUFpqUJEK0KYHBRAfBgZLbv5DTrvsMD8N9mg9U5SJ6cBfByUVsgjbGsTryz3wQAd4zNLfQm6kf7KKqXtqxpVqteXefSCgDHJFhlwOCqhkvA5rDVv3qTAIAnqeprt+lgBUEQhFLFVy9C85Y6BR1raYZmNFv0KYHtFQHgQdF43spXAaTdGixLCDZ9FVBciEomy72hsOJLLRljWPX40doiAKBOW1xHgUcxctry/bZA+aowS5zdPl4b4QVB4Hmr6ygmi7eHi/alllWtDWSkI7x87fweObP+Vjx+OXE1UKbZ0kX7w+KQrMEqF1PUmlUFqmi0NV/WR8XmGJ6COezxqwAuCACq2bYps9eYXLEDK1/ibzn/QKiUsfitNdjjXqGQf+fAFHbHBFZPhoQHYtxd4J/Lw0jnfWuwx9bK/6a2DkwCrS5sfhHIbFWNWzjTlxN2a4+22huNU33pbvU5mAV0TsGYBgOz0KWxbHIy2Zln6jMVxSZbnd3q7AEZVQCon+nELuNNTgEGWNPXqqawK6LBuFFn9Jg3/CCOZcOVaBk2x7KNcIfJv4xGEZ2WYfMsHma4jdDRgA2NFLDqDoOHGe7I8rBsaFStLx+lGGBlbyP8a9E67ArDKQOjrae2dgbYGg0zhd1i2Puqruk/BpYNjdz5OmDVVwwLHQZ7X70MJx1sNRpmCqux7H3N6ouWOrUaRcPMo9Ni3aJlk2yqHtgte72itTVQsjVg80yRNqzzywjL4ZwD1AOrD2BQ9E4oEYZzsAgu1ge7wHJESid22NvoRzG1Tx1xtbyGPnhpj6ofQzfD4Rx7K+qDVb9i0EH1CSUSYFBBd7ZOWCwyHJE6qNKBvU1qoApqwh7YxTp00L3JogKlXlh1tg4dcCwq6Kt9DrXm+HrBzaCDiiPUrlZ6FXAUJxBrwtZzhJrp6DaFYrjaAH30NZYfobaxZEYYWGgALJYZXCz/+EbJTz2b9D2CvS3VCFi2LAUlKU648DSDey2jEbCYdtH3Ym/Wiwr3MWRGsF/+sjGwbxjS16CYh4OLzNPfFlpGY2DLnm2tUkxfYylVTv2wG2v0SZeOU5xw1lLl1A2LaQtJl9gMS5dmjQp2Y40+xZ5ayBnHZNhrlBm26JazEi76WLuxfgNAL4NhWy5TZn+hg33zaJBetdN+HvYwfU46cpM2dRnlQuGUnX7wtfE4RgY36JcL/NSpyyhh8zO99D425Y520ndetgHqh0C7BDu3Qy+E/ETwCXXnRYboHwItrDruou7HuCBDxsnec/SJAakXtzdnemkjQm/nmJu2G3GHp5TGwyK5GqeTrT/8dYY2P6YtxpIilB5WG6OTrSuWnqXNgssNHdCnCNWB7bl2zWBqkB93UXxRjLOQUzf5OF6bloufG0c9sKFQyOhLFTYTrpq2dQ4Vcvpqk2s1v7CHRM+PKSywlXm+SWRkftEoO7f8XehHizVY28cKib61pQ8iT01RuOELo/TDc70830TN5Yy32yanXbfM7OUbaj+uXx1dN1WCLX6egZXRwY5o7xgSkN7B9pL61dG1YeOv6fDdZmatkgH30dKe2fVPX5wNGWTAd37avVWWi15b+sHHf/1sT79dP//TfzCx6uWmt/0kZJ4xXpaclz7UqvPjcz3976d/W06mZV5+3P1XOk3zRYPp3zL5li4seXe/60+m33Swu7T/YddFlH93i+NvPr34zmT1sFT+P+elD7Fb1gbSFf279skZRgm0uqWqnRz5KXzUZ96pqMlsvycayq4ceiIRBK+X1+bm9Uy1da+rP6plsyuHXis4vF5eS07DStF5HTP/01o3bd3rCnkcPVphz7wgAPJcxkCB2nLGG+rqQqFlggDIkxa/r0QPVqX4sq5MxuH1CA4HAGjyimxWvZbJOLyCxwsAciaXtf7NNTqwdF8sJstzEATC5zSKMwmyXNgcpSmop+jA0m+9yOUYatJyqLdUdgpOnvRt4S0tlZb1fbLdPvK2wlZadllSJ5XTYtmqQ+dvs2Xf6tKEbcI2YZuwTdgmbBO2CduEbcI2YZuwpxzWDoAIpwCUP4RtuXsazHofsAP5+dPAqqXQLM3SLCdZ/gz1w6oCsMmQoAAAAABJRU5ErkJggg==",
    344,
    229,
  ],
  t1e20_venn: [
    "data:image/png;base64,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",
    344,
    228,
  ],
  t1e7_bagan: [
    "data:image/png;base64,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",
    422,
    151,
  ],
  t2e11_deret: [
    "data:image/png;base64,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",
    357,
    136,
  ],
  t2e22_venn: [
    "data:image/png;base64,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",
    344,
    228,
  ],
  t2e9_deret: [
    "data:image/png;base64,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",
    311,
    86,
  ],
};
// gambar soal/opsi: ditampilkan setengah ukuran piksel aslinya (tajam di layar retina)
const F = (k, extra = "") => {
  const [s, w, h] = TIU_IMG[k];
  return `<img src="${s}" alt="" width="${Math.round(w / 2)}" height="${Math.round(h / 2)}" style="display:inline-block;max-width:100%;height:auto;vertical-align:middle;${extra}">`;
};
// gambar diagram pembahasan
const E = (k) => {
  const [s, w, h] = TIU_EXPL[k];
  return `<img src="${s}" alt="" width="${Math.round(w / 1.6)}" height="${Math.round(h / 1.6)}" style="display:block;max-width:100%;height:auto;margin:10px 0">`;
};
// pecahan, akar, tabel premis
const fr = (n, d) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.15;margin:0 2px"><span style="padding:0 3px;border-bottom:1.5px solid currentColor">${n}</span><span style="padding:0 3px">${d}</span></span>`;
const mx = (w, n, d) => `${w}${fr(n, d)}`;
const premisTbl = (a, b, c) =>
  `<table style="border-collapse:collapse;margin:10px 0;font-size:14px;display:table">${[
    ["Premis 1", a],
    ["Premis 2", b],
    ["Kesimpulan", c],
  ]
    .map(
      ([x, y]) =>
        `<tr><td style="border:1px solid #475569;padding:3px 12px">${x}</td><td style="border:1px solid #475569;padding:3px 12px">${y}</td></tr>`,
    )
    .join("")}</table>`;
const KET789 =
  "Soal nomor 7 hingga 9 didasarkan pada keterangan berikut.\nDiketahui A, B, C, D, dan E adalah nama-nama gedung yang terdapat di sepanjang jalan lurus di sebuah kota. Diketahui tata letak gedung tersebut adalah:\n• Gedung A berada 3,5 km di sebelah barat gedung C.\n• Gedung B berada 5 km di sebelah barat gedung D.\n• Gedung E berada 1,5 km di sebelah timur gedung B.\n• Gedung C berada 2 km di sebelah barat gedung B.\n\n";

// Database Soal TIU Try Out 1 (30 Soal)
const tiuTryout1Data = [
  {
    q: "REKOGNISI = ....",
    o: ["Pemberitahuan", "Tuntutan", "Pertanda", "Pengembalian", "Penghargaan"],
    a: 4,
    p: "Rekognisi berasal dari kata recognition yang artinya pengakuan atau penghargaan.",
    t: "Sinonim rekognisi sering dikaitkan dengan pengakuan atau penghargaan atas suatu hal.",
  },
  {
    q: "PROMINEN >< ....",
    o: ["Biasa", "Tinggi", "Elit", "Utama", "Terkemuka"],
    a: 0,
    p: "Prominen artinya terkemuka atau menonjol. Maka lawan kata (antonim) yang paling tepat adalah biasa.",
    t: "Antonim dari kata yang bermakna 'luar biasa/menonjol' adalah 'biasa'.",
  },
  {
    q: "RUSUK : ........ = ........ : TELESKOP",
    o: [
      "Balok - Lensa",
      "Lingkaran - Optik",
      "Tabung - Astronomi",
      "Segitiga - Periskop",
      "Prisma - Asteroid",
    ],
    a: 0,
    p: "Rusuk adalah bagian penyusun dari balok, sama halnya dengan lensa yang merupakan bagian penyusun dari teleskop.",
    t: "Cari hubungan pembentuk/bagian. Rusuk adalah bagian balok; lensa adalah bagian teleskop.",
  },
  {
    q: "SUTERA : KAIN = .... : ....",
    o: [
      "Koki : Memasak",
      "Ajar : Guru",
      "Anulir : Penghapusan",
      "Hutan : Tropis",
      "Konveks : Lensa",
    ],
    a: 4,
    p: "Sutera adalah salah satu jenis kain, sama halnya konveks yang merupakan salah satu jenis lensa.",
    t: "Hubungan 'jenis/golongan'. Sutera masuk golongan kain, konveks masuk golongan lensa.",
  },
  {
    q: "Semua laki-laki gemar membaca koran. Sebagian yang gemar olahraga adalah laki-laki. Kesimpulan yang tepat dari kedua premis di atas adalah ....",
    o: [
      "Sebagian laki-laki gemar olahraga",
      "Sebagian laki-laki tidak suka membaca koran dan mereka gemar olahraga",
      "Sebagian laki-laki yang suka olahraga, gemar membaca koran",
      "Sebagian laki-laki pernah olahraga",
      "Sebagian laki-laki gemar olahraga namun tidak gemar membaca koran",
    ],
    a: 2,
    p: "Berdasarkan silogisme kategorik tipe 1: Semua laki-laki suka koran, sebagian yang suka olahraga adalah laki-laki. Maka kesimpulannya sebagian yang suka olahraga gemar membaca koran (atau sebagian laki-laki yang suka olahraga, gemar membaca koran).",
    t: "Gabungan premis 'Semua' dan 'Sebagian' pasti menghasilkan kesimpulan 'Sebagian' yang memuat irisan sifat keduanya.",
  },
  {
    q: "Semua atlet renang adalah anggota organisasi. Sebagian anggota organisasi adalah pengusaha. Kesimpulan yang tepat dari kedua premis di atas adalah ....",
    o: [
      "Sebagian pengusaha adalah atlet renang",
      "Sebagian atlet renang adalah pengusaha",
      "Ada anggota organisasi yang bukan merupakan atlet renang",
      "Ada anggota organisasi yang bukan merupakan pengusaha",
      "Ada pengusaha yang bukan anggota organisasi",
    ],
    a: 0,
    p: "Dengan menggunakan pola silogisme khusus pada tes CPNS (silogisme kategorik tipe 4), dapat ditarik kesimpulan bahwa sebagian pengusaha adalah atlet renang.",
    t: "Perhatikan irisan antar kelompok pada premis partikular. Jika Sebagian anggota adalah pengusaha dan Semua atlet adalah anggota, maka ditarik irisan: Sebagian pengusaha adalah atlet renang.",
  },
  {
    q: "Diketahui A, B, C, D, dan E adalah nama-nama gedung di sepanjang jalan lurus (barat ke timur).\n- Gedung A berada 3,5 km di sebelah barat gedung C.\n- Gedung B berada 5 km di sebelah barat gedung D.\n- Gedung E berada 1,5 km di sebelah timur gedung B.\n- Gedung C berada 2 km di sebelah barat gedung B.\nManakah gedung yang letaknya paling timur?",
    o: ["Gedung A", "Gedung B", "Gedung C", "Gedung D", "Gedung E"],
    a: 3,
    p: "Susunan letak dari barat ke timur: A -> (3,5 km) -> C -> (2 km) -> B -> (1,5 km) -> E -> (3,5 km) -> D. Gedung paling timur adalah D.",
    t: "Buat sketsa garis dari barat ke timur dan letakkan posisi relatif masing-masing gedung.",
  },
  {
    q: "Berdasarkan susunan gedung A, B, C, D, E pada soal sebelumnya, manakah pernyataan berikut ini yang benar?",
    o: [
      "Gedung E adalah gedung yang letaknya paling timur",
      "Gedung A berada 5,5 km di sebelah barat gedung D",
      "Jarak gedung E dengan gedung D adalah 2 km",
      "Gedung C berada di sebelah timur gedung E",
      "Gedung C berada 3,5 km di sebelah barat gedung E",
    ],
    a: 4,
    p: "Susunan: A - C - B - E - D. Jarak C ke B = 2 km. Jarak B ke E = 1,5 km. Total jarak C ke E = 2 + 1,5 = 3,5 km. Maka C berada 3,5 km di barat E.",
    t: "Jumlahkan jarak titik C ke B, lalu B ke E untuk mendapatkan jarak C ke E.",
  },
  {
    q: "Berdasarkan susunan gedung A, B, C, D, E pada soal sebelumnya, manakah berikut ini yang merupakan pernyataan yang salah?",
    o: [
      "Gedung yang terletak paling barat adalah gedung A",
      "Gedung yang urutannya berada di tengah adalah gedung B",
      "Gedung yang berada di antara gedung A dan gedung B adalah gedung C",
      "Gedung C terletak tepat di sebelah barat gedung B",
      "Gedung yang terletak di antara gedung B dan gedung D adalah gedung C",
    ],
    a: 4,
    p: "Gedung yang berada di antara B dan D adalah gedung E, bukan gedung C. Gedung C berada di antara A dan B.",
    t: "Cek posisi gedung C pada sketsa. C letaknya di sebelah barat B, sehingga tidak mungkin berada di antara B dan D.",
  },
  {
    q: "Lengkapi deret bilangan berikut: 26, 30, 35, 41, 48, ....",
    o: ["48", "49", "52", "56", "62"],
    a: 3,
    p: "Pola penambahan meningkat: +4 (30), +5 (35), +6 (41), +7 (48), +8 (56).",
    t: "Perhatikan selisih antar angka yang terus meningkat bertambah satu tingkat.",
  },
  {
    q: "Lengkapi deret bilangan berikut: 14, 12, 16, 10, 20, 8, ...., ....",
    o: ["24, 12", "24, 8", "24, 6", "18, 12", "18, 16"],
    a: 2,
    p: "Deret terdiri dari dua larik (lompat satu angka).\nLarik genap (posisi genap): 12, 10, 8 (pola -2), selanjutnya 6.\nLarik ganjil (posisi ganjil): 14, 16, 20, selanjutnya 24.",
    t: "Jika angka naik-turun tidak beraturan, pisahkan menjadi 2 deret yang saling melompat (deret ganjil & genap).",
  },
  {
    q: "Lengkapi deret bilangan berikut: 5, 6, 11, 17, 28, 45, ....",
    o: ["57", "65", "73", "87", "91"],
    a: 2,
    p: "Deret tersebut adalah deret Fibonacci (angka selanjutnya adalah jumlah dari 2 angka sebelumnya). 5+6=11; 6+11=17; 11+17=28; 17+28=45; 28+45=73.",
    t: "Kenali pola Fibonacci: angka saat ini adalah penjumlahan dari dua angka tepat di depannya.",
  },
  {
    q: "Hasil dari: 124 + (-12) : (-2+6) - (-12) = ....",
    o: ["133", "109", "98", "89", "76"],
    a: 0,
    p: "Kerjakan kurung & pembagian dulu.\n1. (-2+6) = 4\n2. (-12) : 4 = -3\n3. 124 + (-3) - (-12) = 121 + 12 = 133.",
    t: "Ingat aturan KaBaTaKu (Kali, Bagi, Tambah, Kurang) dan kerjakan operasi dalam kurung terlebih dahulu.",
  },
  {
    q: "Suatu segitiga ABC siku-siku di B dan panjang AB = AC. Jika keliling segitiga adalah 16 cm, maka panjang AB adalah ...",
    o: ["4(1 + √2)", "4(2 - √2)", "4(2 + √2)", "8(2 + √2)", "8(2 - √2)"],
    a: 4,
    p: "Misal AB = AC = x. Sisi miring AC = x√2. Keliling = 2x + x√2 = 16. \nx(2+√2) = 16. \nKalikan dengan akar sekawan (2-√2) atas bawah. \nx = 16(2-√2) / (4-2) = 8(2-√2) cm.",
    t: "Gunakan perbandingan segitiga siku-siku sama kaki (x, x, x√2) dan rasionalkan penyebut akar.",
  },
  {
    q: "Ibu mempunyai 72 buah rambutan, 60 buah jeruk, dan 48 buah kiwi. Buah tersebut akan dibungkus plastik sama banyak. Selisih banyaknya buah jeruk dengan buah kiwi pada setiap bungkusnya adalah ....",
    o: ["1 buah", "2 buah", "4 buah", "6 buah", "12 buah"],
    a: 0,
    p: "Cari FPB(72, 60, 48) = 12 plastik. \nJeruk per bungkus = 60 / 12 = 5 buah. \nKiwi per bungkus = 48 / 12 = 4 buah. \nSelisih jeruk dan kiwi = 5 - 4 = 1 buah.",
    t: "Kata kunci 'dibagi sama banyak' = FPB. Jangan lupa pertanyaan akhirnya adalah mencari 'selisih', bukan jumlah bungkus.",
  },
  {
    q: "Sebuah toko menerima beras A setiap 4 hari, B setiap 12 hari, dan C setiap 6 hari. Jika mereka menerima bersamaan tanggal 23 April 2022, kapan mereka menerimanya bersamaan lagi?",
    o: ["5 Mei 2022", "6 Mei 2022", "7 Mei 2022", "8 Mei 2022", "9 Mei 2022"],
    a: 0,
    p: "Cari KPK(4, 12, 6) = 12 hari. \nTanggal: 23 April 2022 + 12 hari = 35 April. \nKarena bulan April memiliki 30 hari, maka 35 - 30 = 5 Mei 2022.",
    t: "Kata kunci 'bersamaan lagi' = KPK. Perhatikan jumlah hari pada bulan tersebut (April = 30 hari).",
  },
  {
    q: "Hasil dari: 0,08 km² + 370.000 dm² = .... are.",
    o: ["8,37", "83,7", "837", "1.170", "11.700"],
    a: 2,
    p: "1 are = 1 dam². \n0,08 km² = 0,08 x 10.000 dam² = 800 dam². \n370.000 dm² = 370.000 / 10.000 dam² = 37 dam². \nTotal = 800 + 37 = 837 dam² = 837 are.",
    t: "Hafalkan konversi dasar satuan luas: 1 are = 1 dam² dan 1 hektare = 1 hm².",
  },
  {
    q: "Indah membeli 0,37 rol pita merah dan 0,25 rol pita putih (1 rol = 1 hm). Harga pita merah Rp500,00/meter dan putih Rp800,00/meter. Total yang harus dibayar adalah ....",
    o: [
      "Rp18.050,00",
      "Rp27.000,00",
      "Rp38.500,00",
      "Rp40.000,00",
      "Rp53.000,00",
    ],
    a: 2,
    p: "1 rol = 1 hm = 100 m. \nMerah: 0,37 x 100 = 37 m. Harga = 37 x Rp500 = Rp18.500. \nPutih: 0,25 x 100 = 25 m. Harga = 25 x Rp800 = Rp20.000. \nTotal = Rp18.500 + Rp20.000 = Rp38.500.",
    t: "Ubah semua satuan rol (hm) menjadi meter (x 100) terlebih dahulu, lalu kalikan dengan harga.",
  },
  {
    q: "Terdapat 22 siswa gemar fisika, 23 siswa gemar matematika, 11 gemar keduanya, dan 5 tidak gemar keduanya. Jumlah seluruh siswa kelas tersebut adalah ....",
    o: ["30 siswa", "32 siswa", "35 siswa", "37 siswa", "39 siswa"],
    a: 4,
    p: "Rumus gabungan Himpunan: \nTotal (S) = N(A) + N(B) - N(A∩B) + N(Tidak Keduanya). \nS = 22 + 23 - 11 + 5 = 39 siswa.",
    t: "Gunakan rumus praktis himpunan: Total = (Suka 1 + Suka 2 - Suka Keduanya) + Tidak Keduanya.",
  },
  {
    q: "Dari 50 peserta, 30 menyukai memancing, 27 bersepeda. Jika semua peserta dipastikan menyukai salah satu, banyak peserta yang menyukai keduanya adalah ....",
    o: ["6 orang", "7 orang", "8 orang", "9 orang", "10 orang"],
    a: 1,
    p: "Total Peserta = (Memancing) + (Sepeda) - (Keduanya). \n50 = 30 + 27 - Keduanya. \n50 = 57 - Keduanya. \nKeduanya = 57 - 50 = 7 orang.",
    t: "Untuk mencari irisan (keduanya), jumlahkan kedua kelompok lalu kurangi dengan total populasi.",
  },
  {
    q: "Jika a = luas persegi sisi 12 cm, dan b = luas persegi panjang 16 cm x 9 cm. Pernyataan yang tepat adalah ....",
    o: ["a < b", "a ≤ b", "a = b", "a > b", "a ≥ b"],
    a: 2,
    p: "Luas a = 12 x 12 = 144 cm². \nLuas b = 16 x 9 = 144 cm². \nSehingga nilai a sama dengan b (a = b).",
    t: "Hitung masing-masing luas bangun datar lalu bandingkan nilainya.",
  },
  {
    q: "Pak Banu adalah pegawai dengan gaji bersih Rp3.819.000 setelah dipotong PPh sebesar 5%. Gaji kotor (sebenarnya) Pak Banu adalah ....",
    o: [
      "Rp3.925.000,00",
      "Rp3.990.000,00",
      "Rp4.020.000,00",
      "Rp4.100.000,00",
      "Rp5.000.000,00",
    ],
    a: 2,
    p: "Gaji bersih 95% = Rp3.819.000. \nGaji Kotor (100%) = (100/95) x 3.819.000 = Rp4.020.000.",
    t: "Persentase gaji bersih adalah 100% - PPh. Gunakan perbandingan senilai: (100 / %Bersih) x Uang Bersih.",
  },
  {
    q: "Sebuah ember awalnya berisi air 20 liter. Setelah dialiri selang selama 7 menit, volumenya menjadi 34 liter. Debit air dari selang tersebut adalah ....",
    o: [
      "1,5 liter/menit",
      "2 liter/menit",
      "2,5 liter/menit",
      "3 liter/menit",
      "3,5 liter/menit",
    ],
    a: 1,
    p: "Volume tambahan = 34 - 20 = 14 liter. \nDebit = Volume / Waktu \nDebit = 14 liter / 7 menit = 2 liter/menit.",
    t: "Debit hanya dihitung dari 'selisih' penambahan air yang masuk dibagi dengan total waktu.",
  },
  {
    q: "Randi mengendarai motor dari kota A ke B (kecepatan 45 km/jam) pukul 06.00. Rina dari kota B ke A (kecepatan 65 km/jam). Jarak kedua kota 165 km. Pukul berapa mereka berpapasan?",
    o: ["07.30", "07.40", "07.50", "08.00", "08.20"],
    a: 0,
    p: "Waktu Papasan = Jarak Total / (Kecepatan 1 + Kecepatan 2). \nWaktu = 165 / (45 + 65) = 165 / 110 = 1,5 jam (1 jam 30 menit). \nPukul 06.00 + 01.30 = Pukul 07.30.",
    t: "Rumus berpapasan waktu yang sama: t = Jarak Total / (V1 + V2).",
  },
  {
    q: "Ana menyelesaikan pekerjaan dalam waktu 3 jam, Bina dalam waktu 6 jam. Berapa lama waktu yang diperlukan jika mereka mengerjakan bersama-sama?",
    o: ["1 jam", "1 jam 20 menit", "1,5 jam", "1 jam 45 menit", "2 jam"],
    a: 4,
    p: "Kecepatan bersama (1/t) = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2. \nMaka waktu bersama = 2/1 = 2 jam.",
    t: "Gunakan rumus praktis kerja bersama: (Waktu A x Waktu B) / (Waktu A + Waktu B). Yaitu (3x6)/(3+6) = 18/9 = 2 jam.",
  },
  {
    q: "Satu Mesin A menyelesaikan pekerjaan dalam 48 jam, satu Mesin B dalam 12 jam. Berapa waktu diperlukan jika dikerjakan dengan 4 buah Mesin A dan 2 buah Mesin B?",
    o: ["2 jam", "2,5 jam", "3 jam", "3,5 jam", "4 jam"],
    a: 4,
    p: "Rate total = (4 x 1/48) + (2 x 1/12) = 4/48 + 2/12 = 1/12 + 1/6 = 1/12 + 2/12 = 3/12 = 1/4. \nWaktu = 4/1 = 4 jam.",
    t: "Kalikan jumlah masing-masing mesin dengan kemampuannya (1/waktu), lalu jumlahkan semua perbandingannya.",
  },
  {
    q: "Penjahit A membuat 16 kemeja dalam 4 hari, B membuat 18 kemeja dalam 9 hari. Jika membuat 30 kemeja bersama-sama, butuh waktu .... hari.",
    o: ["3", "4", "5", "6", "7"],
    a: 2,
    p: "Kecepatan A = 16/4 = 4 kemeja/hari. \nKecepatan B = 18/9 = 2 kemeja/hari. \nKecepatan Gabungan = 4 + 2 = 6 kemeja/hari. \nWaktu untuk 30 kemeja = 30 / 6 = 5 hari.",
    t: "Cari dulu kecepatan (output per hari) masing-masing orang, gabungkan, lalu bagikan dengan total target benda.",
  },
  {
    q: `Perhatikan analogi figural berikut:
${F("t1q28_row")}`,
    o: [F("t1q28_A"), F("t1q28_B"), F("t1q28_C"), F("t1q28_D"), F("t1q28_E")],
    a: 1,
    p: "Terjadi perubahan warna objek dari hitam menjadi putih dan sebaliknya. Objek di dalam lingkaran keluar dan berada di bagian kanan bawah, sedang lingkaran mengecil dan berada di kiri atas.\n\nPilihan jawaban yang analoginya sesuai adalah pilihan jawaban B.",
    t: "Perhatikan perubahan warna (hitam ↔ putih) serta perpindahan posisi objek luar dan objek dalam.",
  },
  {
    q: `Perhatikan analogi figural berikut:
${F("t1q29_row")}`,
    o: [F("t1q29_A"), F("t1q29_B"), F("t1q29_C"), F("t1q29_D"), F("t1q29_E")],
    a: 3,
    p: "Lingkaran yang ada di tengah pada gambar pertama berubah menjadi besar dan elemen lainnya berotasi 90° searah jarum jam dan berada di dalam lingkaran.\n\nAnalogi tersebut jika diterapkan pada gambar soal maka akan menghasilkan pilihan jawaban D.",
    t: "Amati perubahan elemen pusat (menjadi bingkai luar) dan putaran elemen lainnya.",
  },
  {
    q: `Perhatikan analogi figural berikut:
${F("t1q30_row")}`,
    o: [F("t1q30_A"), F("t1q30_B"), F("t1q30_C"), F("t1q30_D"), F("t1q30_E")],
    a: 3,
    p: "Terjadi pencerminan terhadap bangun yang besar, dan pengurangan elemen lingkaran 1 buah.\n\nAnalogi tersebut jika diterapkan pada gambar soal maka akan diperoleh pilihan jawaban D.",
    t: "Perhatikan dua perubahan: bangun besar dicerminkan dan jumlah elemen kecil berkurang satu.",
  },
];

// Database Soal TIU Try Out 2 (30 Soal)
const tiuTryout2Data = [
  {
    q: "PENGESAHAN = ....",
    o: ["Afirmasi", "Legitimasi", "Relaksasi", "Refleksi", "Periodesasi"],
    a: 1,
    p: "Kata pengesahan memiliki sinonim atau makna yang sama dengan legitimasi (keterangan yang mengesahkan atau membenarkan bahwa suatu tindakan adalah sah).",
    t: "Sinonim pengesahan hukum adalah legitimasi.",
  },
  {
    q: "GAMANG >< ....",
    o: ["Takut", "Ngeri", "Yakin", "Khawatir", "Kecewa"],
    a: 2,
    p: "Gamang artinya merasa ragu-ragu, bimbang, atau takut. Lawan kata (antonim) yang paling tepat untuk sifat bimbang/ragu adalah yakin atau mantap.",
    t: "Antonim 'gamang/ragu' adalah 'yakin/mantap'.",
  },
  {
    q: ".... : SUTRADARA = PENYANYI : ....",
    o: [
      "Kamera - Rekaman",
      "Kreativitas - Kesenian",
      "Film - Televisi",
      "Tema - Tempo",
      "Aktor - Dirijen",
    ],
    a: 4,
    p: "Hubungan analogi ini adalah subjek yang diatur. Aktor diatur/diarahkan oleh Sutradara dalam sebuah film atau pentas. Sama halnya dengan Penyanyi yang diatur/diarahkan oleh Dirijen dalam sebuah paduan suara.",
    t: "Cari hubungan pengarah dan yang diarahkan. Sutradara mengarahkan Aktor, Dirijen mengarahkan Penyanyi.",
  },
  {
    q: ".... : BERHENTI = BERLAYAR : ....",
    o: [
      "Rem - Jangkar",
      "Berjalan - Berlabuh",
      "Terminal - Pelabuhan",
      "Mulai - Mendayung",
      "Sopir - Nakhoda",
    ],
    a: 1,
    p: "Analogi antonim (lawan kata). Berjalan adalah lawan kata dari berhenti, sama halnya dengan berlayar yang merupakan lawan kata dari berlabuh.",
    t: "Berlayar artinya kapal sedang bergerak, berlabuh artinya kapal berhenti. Sama dengan berjalan >< berhenti.",
  },
  {
    q: "Jika laut pasang, dermaga tenggelam.\nJika dermaga tenggelam, sebagian kapal tidak dapat merapat.\nSimpulan yang tepat adalah ....",
    o: [
      "Jika laut pasang, semua kapal tidak dapat merapat",
      "Jika laut pasang, semua kapal dapat merapat",
      "Jika laut pasang, tidak ada kapal yang merapat",
      "Jika laut pasang, sebagian kapal dapat merapat",
      "Jika laut tidak pasang, semua kapal tidak dapat merapat",
    ],
    a: 3,
    p: "Silogisme Hipotesis: p -> q dan q -> r, maka p -> r. \np: Laut pasang, r: sebagian kapal tidak dapat merapat. \nKesimpulan langsungnya: Jika laut pasang, sebagian kapal tidak dapat merapat. Karena 'sebagian tidak' ekuivalen maknanya dengan 'sebagian iya', maka kesimpulan yang senilai adalah 'Jika laut pasang, sebagian kapal dapat merapat'.",
    t: "Kata 'sebagian tidak' secara logika berarti masih ada 'sebagian yang bisa (dapat)'.",
  },
  {
    q: "Semua buah manis dan berbiji.\nIrna makan makanan yang manis, tetapi tidak berbiji.\nKesimpulan yang tepat adalah ....",
    o: [
      "Irna makan buah",
      "Irna makan buah yang tidak berbiji",
      "Irna makan buah yang tidak manis",
      "Irna makan buah yang manis namun tidak berbiji",
      "Irna makan makanan yang bukan buah",
    ],
    a: 4,
    p: "Syarat mutlak sesuatu disebut 'buah' menurut premis adalah harus manis DAN berbiji. Karena makanan Irna manis tetapi 'tidak berbiji', maka makanan itu melanggar salah satu syarat buah. Jadi, yang dimakan Irna bukan buah.",
    t: "Dalam logika konjungsi (DAN), jika salah satu syarat gagal terpenuhi, maka kesimpulannya menjadi negatif (Bukan buah).",
  },
  {
    q: "Tiga tim pendaki gunung harus dibentuk masing-masing terdiri dari tiga orang. \n- A harus berada dalam satu tim dengan D. \n- B tidak boleh setim dengan G atau C. \n- C tidak boleh dipisahkan dengan I. \n- F harus dipisahkan dengan A. \nSusunan tim yang dapat dibentuk adalah ....",
    o: [
      "A, D, G — B, E, H — C, I, F",
      "A, B, G — D, E, H — C, I, F",
      "A, I, F — B, E, N — C, D, F",
      "A, D, I — B, E, H — C, G, F",
      "A, B, E — H, C, I — F, G, D",
    ],
    a: 0,
    p: "Mari kita eliminasi berdasarkan aturan:\n- Aturan 1: A dan D harus setim. (Opsi B, C, E salah karena A dan D terpisah).\n- Sisa Opsi A dan D. \n- Aturan 3: C dan I tidak boleh pisah. Pada opsi D, C setim dengan G dan F (I terpisah di tim lain), maka opsi D salah.\n- Opsi yang tersisa dan memenuhi semua syarat adalah A.",
    t: "Gunakan metode eliminasi opsi berdasarkan syarat yang paling ketat (A harus dengan D).",
  },
  {
    q: "P, Q, R, S, T adalah lima diplomat. \n- P: Inggris, Jerman. \n- Q: Prancis, Jepang, Cina. \n- R: Jerman. \n- S: Inggris, Jepang, Cina. \n- T: Prancis, Jerman. \nPasangan diplomat yang harus menggunakan penerjemah dalam berkomunikasi adalah ...",
    o: ["P dan R", "Q dan T", "R dan T", "Q dan S", "Q dan R"],
    a: 4,
    p: "Mereka butuh penerjemah jika tidak memiliki satu pun bahasa yang sama.\n- P & R: sama-sama bisa Jerman.\n- Q & T: sama-sama bisa Prancis.\n- R & T: sama-sama bisa Jerman.\n- Q & S: sama-sama bisa Jepang dan Cina.\n- Q & R: Q (Prancis, Jepang, Cina), R (Jerman). Tidak ada bahasa perantara. Harus pakai penerjemah.",
    t: "Cari pasangan yang himpunan bahasanya tidak memiliki irisan sama sekali.",
  },
  {
    q: "Lengkapi deret bilangan berikut: 445, 412, 379, 346, 313, ....",
    o: ["290", "280", "270", "260", "250"],
    a: 1,
    p: "Deret ini adalah deret turun tunggal. \n445 ke 412 (-33), 412 ke 379 (-33), dan seterusnya konstan berkurang 33.\nMaka bilangan selanjutnya: 313 - 33 = 280.",
    t: "Jika angkanya turun perlahan, hitung selisihnya.",
  },
  {
    q: "Lengkapi deret bilangan berikut: 64, 72, 66, 144, 68, 288, ...., ....",
    o: ["70, 576", "72, 290", "70, 290", "72, 576", "74, 576"],
    a: 0,
    p: "Deret tersebut merupakan deret 2 larik yang saling melompat satu angka.\nLarik ganjil: 64, 66, 68, (pola ditambah 2) -> selanjutnya 70.\nLarik genap: 72, 144, 288, (pola dikali 2) -> selanjutnya 288 x 2 = 576.",
    t: "Pola angka yang tidak beraturan naik-turunnya menandakan deret lebih dari 1 larik.",
  },
  {
    q: "Lengkapi deret bilangan berikut: 6, 13, 22, 33, 46, 61, ....",
    o: ["75", "76", "77", "78", "79"],
    a: 3,
    p: "Ini adalah deret bertingkat 2 (selisihnya membentuk deret baru yang naik konstan).\nSelisih pertama: +7, +9, +11, +13, +15 (naik 2 tiap langkah).\nSelisih berikutnya harus +17.\nMaka: 61 + 17 = 78.",
    t: "Hitung beda (selisih) antar angka. Jika bedanya berubah namun berpola (+7, +9, +11), lanjutkan pola beda tersebut.",
  },
  {
    q: "Nilai pendekatan yang paling dekat dari (99/24) + (39/19) + (59/29) + (89/44) = ...",
    o: [
      "10,23484145",
      "20,12578935",
      "30,24679936",
      "40,32564789",
      "50,25874113",
    ],
    a: 0,
    p: "Gunakan pendekatan dengan membulatkan ke bilangan terdekat yang mudah dibagi.\n- 99/24 ≈ 100/25 = 4\n- 39/19 ≈ 40/20 = 2\n- 59/29 ≈ 60/30 = 2\n- 89/44 ≈ 90/45 = 2\nTotal pendekatan: 4 + 2 + 2 + 2 = 10. Angka yang paling mendekati 10 adalah Opsi A.",
    t: "Gunakan trik estimasi (pembulatan angka) untuk hitungan pecahan rumit, tidak perlu dihitung pasti jika opsinya berjarak jauh (10, 20, 30).",
  },
  {
    q: "Rani mempunyai 8 pernik berbeda warna yang akan disusun menjadi sebuah kalung. Banyak cara Rani menyusun pernik tersebut adalah..",
    o: ["4.040", "5.040", "6.040", "7.040", "8.040"],
    a: 1,
    p: "Menyusun objek membentuk formasi melingkar (seperti kalung) menggunakan rumus Permutasi Siklis: (n - 1)!\n= (8 - 1)! = 7!\n= 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5.040 cara.",
    t: "Kata kunci 'kalung', 'melingkar', 'meja bundar' = gunakan Permutasi Siklis (n-1)!.",
  },
  {
    q: "Tiga orang pria dan empat orang wanita duduk mengelilingi sebuah meja. Berapa banyak susunan duduk yang mungkin jika wanita harus selalu duduk berdampingan?",
    o: ["12", "24", "48", "96", "144"],
    a: 4,
    p: "Karena 4 wanita harus berdampingan, mereka diikat dan dianggap sebagai 1 kesatuan (1 blok). \nTotal elemen yang disusun melingkar = 3 pria + 1 blok wanita = 4 elemen.\nSusunan melingkar (Siklis) untuk 4 elemen = (4 - 1)! = 3! = 6 cara.\nDi dalam blok wanita itu sendiri, ke-4 wanita bisa bertukar posisi = 4! = 24 cara.\nTotal seluruh cara = 6 × 24 = 144 cara.",
    t: "Objek 'harus berdampingan' diikat jadi 1 elemen. Setelah dihitung susunan luarnya, kalikan dengan permutasi (n!) susunan di dalam ikatan.",
  },
  {
    q: "Jika 3p + q = 6r dan p, q, r adalah bilangan bulat positif, maka 12r - 2q adalah ...",
    o: ["3p", "3pq", "6p", "6pq", "6"],
    a: 2,
    p: "Manipulasi aljabar dari persamaan awal: 3p + q = 6r. \nKalikan seluruh ruas persamaan dengan 2 agar selaras dengan angka yang dicari (12r dan 2q): \n2(3p + q) = 2(6r)\n6p + 2q = 12r\nPindahkan 2q ke ruas kanan menjadi minus:\n6p = 12r - 2q\nMaka hasil 12r - 2q adalah 6p.",
    t: "Kalikan persamaan dasar dengan suatu konstanta agar menyamai bentuk pertanyaan yang dicari.",
  },
  {
    q: "Jika 1.836 : (-n) + 9 = 45, maka nilai n adalah ...",
    o: ["-39", "-41", "-45", "-51", "-54"],
    a: 3,
    p: "Pindahkan angka +9 ke ruas kanan menjadi pengurangan:\n1.836 : (-n) = 45 - 9\n1.836 : (-n) = 36\nUntuk mencari (-n), tukar posisi dengan 36:\n-n = 1.836 / 36\n-n = 51\nMaka n = -51.",
    t: "Ingat prinsip dasar aljabar: positif pindah jadi negatif, bagi pindah jadi kali. Lakukan satu per satu.",
  },
  {
    q: "Hasil dari 2 1/8 + n = 5 1/5. Nilai n adalah ....",
    o: ["3 1/5", "3 17/20", "3 19/20", "3 3/40", "3 17/40"],
    a: 3,
    p: "n = 5 1/5 - 2 1/8 \nJadikan pecahan biasa terlebih dahulu:\nn = 26/5 - 17/8\nSamakan penyebutnya menjadi KPK (40):\nn = (208/40) - (85/40) = 123/40\n123/40 = 3 sisa 3 = 3 3/40.",
    t: "Ubah pecahan campuran menjadi pecahan biasa, samakan penyebut, lalu kembalikan lagi menjadi pecahan campuran.",
  },
  {
    q: "Manakah di antara bilangan berikut ini yang nilainya terkecil?",
    o: [
      "56,33%",
      "Akar pangkat tiga dari 0,125",
      "(1/3) pangkat 2",
      "Akar dari 3",
      "Akar dari (1/4)",
    ],
    a: 2,
    p: "Mari kita ubah seluruh opsi menjadi desimal agar mudah dibandingkan:\nA. 56,33% = 0,5633\nB. Akar pangkat 3 dari 0,125 = 0,5 (karena 0,5^3 = 0,125)\nC. (1/3)^2 = 1/9 ≈ 0,1111...\nD. Akar 3 ≈ 1,732\nE. Akar 1/4 = 1/2 = 0,5\nNilai terkecil dari semuanya adalah 0,1111 (Opsi C).",
    t: "Ubah semua bentuk pecahan, persen, dan akar menjadi angka desimal (0,...) agar mudah diamati.",
  },
  {
    q: "Sebuah kolam berukuran panjang 21 dm, lebar 18 dm, dan tinggi 14 dm. Jika kolam tersebut akan diisi air sebanyak 3/7 bagian (dari kapasitas total), berapa liter air yang diperlukan?",
    o: [
      "2.268 liter",
      "2.746 liter",
      "2.864 liter",
      "2.966 liter",
      "3.046 liter",
    ],
    a: 0,
    p: "Hitung volume total kolam (balok): \nVolume = p × l × t = 21 dm × 18 dm × 14 dm = 5.292 dm³.\nIngat bahwa 1 dm³ = 1 liter. \nAir yang diperlukan = 3/7 × 5.292 = 3 × 756 = 2.268 liter.",
    t: "Satuan desimeter kubik (dm³) setara atau sama persis dengan liter.",
  },
  {
    q: "1 gross + 8 lusin = ... kodi.",
    o: ["6", "8", "9", "10", "12"],
    a: 4,
    p: "Samakan semua satuan menjadi satuan 'buah':\n- 1 gross = 144 buah\n- 8 lusin = 8 × 12 = 96 buah\n- Total = 144 + 96 = 240 buah\nUbah 240 buah ke satuan kodi (1 kodi = 20 buah): \n= 240 / 20 = 12 kodi.",
    t: "Hafalan dasar: 1 lusin=12, 1 kodi=20, 1 gross=144, 1 rim=500.",
  },
  {
    q: "Empat tahun yang lalu usia Nenek adalah 4 kali usiaku. Jika usiaku sekarang 21 tahun, berapa tahun usia Nenek sekarang?",
    o: ["64", "66", "68", "70", "72"],
    a: 4,
    p: "Langkah mundur ke 4 tahun lalu:\n- Usiaku (4 th lalu) = 21 - 4 = 17 tahun.\n- Usia Nenek (4 th lalu) = 4 × usiaku saat itu = 4 × 17 = 68 tahun.\nLangkah maju ke masa sekarang:\n- Usia Nenek sekarang = 68 + 4 = 72 tahun.",
    t: "Mundurkan semua umur ke masa lalu (kurangi tahunnya), selesaikan persamaannya, lalu majukan lagi umur hasil akhirnya ke masa kini.",
  },
  {
    q: "Di sebuah kelas yang terdiri dari 38 siswa, diketahui 25 siswa menyukai pelajaran IPA, 19 siswa menyukai IPS, dan 12 siswa menyukai keduanya. Banyak siswa yang tidak menyukai kedua pelajaran tersebut adalah ....",
    o: ["6 siswa", "8 siswa", "10 siswa", "12 siswa", "13 siswa"],
    a: 0,
    p: "Menggunakan rumus Himpunan:\nTotal Siswa = (Suka IPA + Suka IPS - Suka Keduanya) + Tidak Suka Keduanya\n38 = (25 + 19 - 12) + X\n38 = 32 + X\nX = 38 - 32 = 6 siswa.",
    t: "Selalu jumlahkan yang 'Suka 1' + 'Suka 2', lalu kurangi dengan irisannya (Suka Keduanya). Sisanya dari total kelas adalah yang tidak suka.",
  },
  {
    q: "Angga bersama Briana pergi ke sebuah restoran. Restoran tersebut mengenakan biaya PPN sebesar 10% untuk setiap pesanan. Jika total pesanan menu mereka adalah Rp237.000, berapakah total harga yang harus mereka bayar ke kasir?",
    o: [
      "Rp260.700,00",
      "Rp266.700,00",
      "Rp323.700,00",
      "Rp360.700,00",
      "Rp410.000,00",
    ],
    a: 0,
    p: "Hitung besaran pajak PPN 10%:\nPPN = 10% × 237.000 = 23.700\nTotal tagihan yang harus dibayar = Harga Awal + PPN = 237.000 + 23.700 = Rp260.700.",
    t: "Pajak Pertambahan Nilai (PPN) artinya MENAMBAH harga total yang harus kita bayarkan (Harga Awal + Pajak).",
  },
  {
    q: "Rendi membeli buku seharga Rp125.000,00 dan mendapatkan diskon 15%. Berapa Rendi harus membayar?",
    o: [
      "Rp100.250,00",
      "Rp105.000,00",
      "Rp106.250,00",
      "Rp108.500,00",
      "Rp115.750,00",
    ],
    a: 2,
    p: "Nilai Diskon = 15% × 125.000 = 18.750\nHarga setelah diskon = 125.000 - 18.750 = Rp106.250.\nAtau cara cepat: Bayar 85% saja. 85/100 × 125.000 = 106.250.",
    t: "Diskon MENGURANGI harga awal. Jika diskon 15%, kita hanya perlu membayar 85% dari harga asli.",
  },
  {
    q: "Diketahui pertidaksamaan linear: 3 - x/15 ≤ 4. Himpunan penyelesaiannya adalah ....",
    o: ["x ≤ 15", "x ≥ 15", "x ≤ -15", "x ≥ -15", "x = -15"],
    a: 3,
    p: "Pindahkan angka 3 ke ruas kanan:\n-x / 15 ≤ 4 - 3\n-x / 15 ≤ 1\nKalikan kedua ruas dengan 15:\n-x ≤ 15\nKalikan dengan (-1) untuk mendapatkan nilai x positif. PERHATIAN: Jika pertidaksamaan dikali/dibagi minus, tanda ketidaksamaan harus DIBALIK!\nx ≥ -15.",
    t: "Aturan emas pertidaksamaan: saat mengalikan atau membagi dengan bilangan negatif, tanda selalu DIBALIK (dari < menjadi >, dsb).",
  },
  {
    q: "Dini mengendarai sepeda motor pukul 06.20 dari kota A ke kota B dengan kecepatan 55 km/jam. Pada waktu yang sama, Rindang mengendarai mobil dari kota B ke kota A dengan kecepatan 85 km/jam. Jika jarak kedua kota tersebut 175 km, pukul berapa mereka berpapasan?",
    o: ["07.20", "07.30", "07.35", "07.45", "08.00"],
    a: 2,
    p: "Mereka bergerak berlawanan arah (berpapasan) di waktu berangkat yang sama, maka kecepatannya dijumlahkan.\nWaktu Tempuh = Jarak / (Kecepatan 1 + Kecepatan 2)\nt = 175 / (55 + 85) = 175 / 140 = 5/4 jam = 1,25 jam.\n1,25 jam sama dengan 1 jam 15 menit.\nWaktu papasan = 06.20 + 01.15 = pukul 07.35.",
    t: "Waktu papasan dari arah berbeda: Waktu = Jarak Total / (Kecepatan A + Kecepatan B).",
  },
  {
    q: "Ana dapat menyelesaikan suatu pekerjaan dalam waktu 2,5 jam, sedangkan Bina dapat menyelesaikannya dalam waktu 1,5 jam. Berapa lama waktu (dalam jam) yang diperlukan jika Ana dan Bina mengerjakan secara bersama-sama?",
    o: ["1/5 jam", "2/5 jam", "3/16 jam", "11/15 jam", "15/16 jam"],
    a: 4,
    p: "Gunakan rumus kerja bersama: Waktu Total = (Waktu A × Waktu B) / (Waktu A + Waktu B)\n= (2,5 × 1,5) / (2,5 + 1,5)\n= 3,75 / 4\nAgar mudah, kalikan angka pembilang dan penyebut dengan 4 untuk menghilangkan desimal:\n= (3,75 × 4) / (4 × 4) = 15/16 jam.",
    t: "Rumus cepat Kerja Bersama = (Waktu 1 × Waktu 2) / (Waktu 1 + Waktu 2).",
  },
  {
    q: `Carilah gambar dengan pola yang berbeda di antara kelima gambar yang tersedia
<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px">${["A", "B", "C", "D", "E"].map((c) => `<div style="text-align:center"><div>${F("t2q28_" + c)}</div><div style="font-weight:700;margin-top:2px">${c}.</div></div>`).join("")}</div>`,
    o: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E"],
    a: 3,
    p: "Gambar A, B, C, dan E adalah gambar yang sama, hanya dirotasi saja posisinya, sedangkan gambar D adalah gambar yang berbeda.",
    t: "Putar gambar secara mental; yang tidak bisa disamakan dengan yang lain (cerminan) adalah jawabannya.",
  },
  {
    q: `Perhatikan analogi figural berikut:
${F("t2q29_row")}`,
    o: [F("t2q29_A"), F("t2q29_B"), F("t2q29_C"), F("t2q29_D"), F("t2q29_E")],
    a: 0,
    p: "Gambar pertama dirotasi 90 derajat searah jarum jam dan ditambah sebuah elemen di tengahnya menghasilkan gambar kedua. Analogi tersebut jika diterapkan ke gambar ketiga menghasilkan pilihan jawaban A.",
    t: "Perhatikan arah putaran gambar dan elemen baru yang ditambahkan di tengah.",
  },
  {
    q: `Tentukan gambar yang tepat untuk menggantikan tanda tanya (?)
<div style="margin-top:10px">${F("t2q30_grid")}</div>`,
    o: [F("t2q30_A"), F("t2q30_B"), F("t2q30_C"), F("t2q30_D"), F("t2q30_E")],
    a: 3,
    p: "Gambar pertama berkurang 5 elemen menjadi gambar di bawahnya.\n\nJadi, pilihan jawaban yang tepat adalah gambar D.",
    t: "Hitung jumlah elemen: 16 berkurang 5 menjadi 11.",
  },
];

// ===== Perbaikan TIU agar sesuai TIU.pdf: diagram pembahasan, notasi, keterangan soal =====
(() => {
  const A1 = tiuTryout1Data,
    A2 = tiuTryout2Data;
  // Try Out 1
  A1[4].p =
    "Gunakan silogisme kategorik tipe 1.\n" +
    premisTbl("M–P", "S–M", "S–P") +
    A1[4].p;
  A1[5].p =
    "Gunakan silogisme kategorik tipe 4.\n" +
    premisTbl("P–M", "M–S", "S–P") +
    A1[5].p;
  A1[6].q = KET789 + "Manakah gedung yang letaknya paling timur?";
  A1[6].p =
    "Kita buat bagan gedung dari apa yang diketahui pada soal.\n" +
    E("t1e7_bagan") +
    A1[6].p;
  A1[7].q = KET789 + "Manakah pernyataan berikut ini yang benar?";
  A1[7].p =
    "Bagan gedung (dari pembahasan soal nomor 7):\n" +
    E("t1e7_bagan") +
    A1[7].p;
  A1[8].q =
    KET789 + "Manakah berikut ini yang merupakan pernyataan yang salah?";
  A1[8].p =
    "Bagan gedung (dari pembahasan soal nomor 7):\n" +
    E("t1e7_bagan") +
    A1[8].p;
  A1[9].p += "\n" + E("t1e10_deret");
  A1[10].p += "\n" + E("t1e11_deret");
  A1[11].p += "\n" + E("t1e12_deret");
  A1[13].p += "\n" + E("t1e14_segitiga");
  A1[16].p += "\n" + E("t1e17_tabel");
  A1[18].p += "\n" + E("t1e19_venn");
  A1[19].p += "\n" + E("t1e20_venn");
  // Try Out 2
  A2[8].p += "\n" + E("t2e9_deret");
  A2[10].p += "\n" + E("t2e11_deret");
  A2[21].p += "\n" + E("t2e22_venn");
  A2[11].q = `Nilai dari ${fr(99, 24)} + ${fr(39, 19)} + ${fr(59, 29)} + ${fr(89, 44)} = ....`;
  A2[16].q = `Hasil dari ${mx(2, 1, 8)} + n = ${mx(5, 1, 5)}. Nilai n adalah ....`;
  A2[16].o = [
    mx(3, 1, 5),
    mx(3, 17, 20),
    mx(3, 19, 20),
    mx(3, 3, 40),
    mx(3, 17, 40),
  ];
  const sq = (x) =>
    `<span style="display:inline-block;border-top:1.5px solid currentColor;padding:0 2px">${x}</span>`;
  A2[17].o = [
    "56,33%",
    `<sup>3</sup>√${sq("0,125")}`,
    `(${fr(1, 3)})<sup>2</sup>`,
    `√${sq("3")}`,
    `√${sq(fr(1, 4))}`,
  ];
  A2[24].q = `Diketahui pertidaksamaan linear: 3 − ${fr("x", 15)} ≤ 4. Himpunan penyelesaiannya adalah ....`;
  A2[26].o = [fr(1, 5), fr(2, 5), fr(3, 16), fr(11, 15), fr(15, 16)];
})();

// Database Soal TKP Try Out 1 (40 Soal)
const tkpTryout1Data = [
  {
    q: "Saya mengajukan suatu usulan kepada atasan saya tetapi usulan tersebut kurang tepat menurut atasan saya, sikap saya adalah...",
    o: [
      "Merasa sangat kecewa",
      "Mencari alternatif usulan lain yang lebih tepat",
      "Kecewa namun berusaha melupakan hal tersebut",
      "Saya bersikeras mencari upaya pembenaran terhadap usulan tersebut agar dia mau menerimanya",
      "Ditolak bukanlah sesuatu yang baru bagi saya dan ini adalah hal yang wajar dalam sebuah diskusi",
    ],
    a: 1,
    s: [2, 5, 3, 1, 4],
    p: "Opsi B menunjukkan sikap proaktif, solutif, tidak mudah menyerah, dan berorientasi pada pencapaian tujuan organisasi.",
    t: "Pilihlah jawaban yang mencerminkan inisiatif positif, dan fokus pada solusi alternatif.",
  },
  {
    q: "Rumah kos yang baru Anda tempati merupakan bangunan lama dengan dekorasi yang sudah ketinggalan zaman, banyak barang-barang tua yang tidak lagi dapat digunakan dengan baik. Mengenai hal ini saya...",
    o: [
      "Biasa saja karena tak mau ambil pusing toh saya hanya kos di sini",
      "Saya kumpulkan barang-barang tersebut kemudian saya jual ke pasar barang bekas",
      "Saya meminta pemilik agar memperbaharui dekorasi rumah jika memungkinkan",
      "Saya coba dekorasi sendiri sedemikian rupa agar terlihat lebih baik",
      "Saya kumpulkan barang mana yang masih dapat dipakai dan mana yang tidak",
    ],
    a: 3,
    s: [2, 1, 3, 5, 4],
    p: "Opsi D mencerminkan indikator utama dari aspek kreativitas, kemandirian, dan action-oriented. Anda tidak menunggu orang lain, melainkan mengambil inisiatif untuk mengubah situasi.",
    t: "Tunjukkan kreativitas dan inisiatif mandiri untuk memperbaiki lingkungan.",
  },
  {
    q: "Jika Anda mendapatkan suatu pekerjaan dengan gaji yang sangat kecil, maka Anda akan...",
    o: [
      "Mencari pekerjaan lain yang lebih menjanjikan",
      "Merasa sedih karena kerja keras Anda tidak dihargai",
      "Keluar dari pekerjaan tersebut",
      "Tetap bersyukur dan menjalani",
      "Tetap bertanggung jawab dalam melakukan pekerjaan Anda",
    ],
    a: 4,
    s: [3, 1, 2, 4, 5],
    p: "Opsi E menunjukkan komitmen dan tanggung jawab pada pekerjaan yang sudah Anda terima. Profesionalisme tetap dikedepankan lepas dari besaran materi.",
    t: "Pilih jawaban yang mencerminkan tanggung jawab dan komitmen kuat.",
  },
  {
    q: "Ketika berhasil dalam menyelesaikan tugas, saya akan...",
    o: [
      "Tidak perlu lagi berusaha karena hasilnya sudah baik",
      "Tetap berusaha sekuat tenaga untuk hasil yang lebih baik",
      "Untuk tugas selanjutnya, akan mengerjakan dengan sebaik mungkin dan lebih baik dari sebelumnya",
      "Tidak terlalu puas diri dan berusaha lebih baik lagi untuk tugas-tugas selanjutnya",
      "Berusaha sekadarnya saja yang penting selesai tepat waktu",
    ],
    a: 2,
    s: [1, 3, 5, 4, 2],
    p: "Opsi C mencerminkan karakteristik high achiever. Anda selalu mengevaluasi dan meningkatkan standar kerja (continuous improvement) dari yang sebelumnya.",
    t: "Selalu berorientasi pada hasil yang lebih baik (prestasi berkelanjutan).",
  },
  {
    q: "Menurut saya bekerja merupakan upaya untuk meraih kesuksesan, untuk itu, upaya saya adalah...",
    o: [
      "Bekerja dengan cermat dan berusaha menjadi terbaik dan diakui",
      "Berusaha menyingkirkan orang yang saya anggap menghalangi upaya saya",
      "Bekerja sepenuh hati agar hasilnya maksimal",
      "Bekerja sampai larut malam",
      "Bekerja berdasarkan kontrak kerja saja",
    ],
    a: 2,
    s: [4, 1, 5, 2, 3],
    p: "Opsi C menunjukkan ketulusan dan integritas (sepenuh hati) dengan fokus untuk mengoptimalkan hasil, bukan mencari validasi (pengakuan).",
    t: "Kata kunci: tulus, kualitas hasil (sepenuh hati), dan fokus pada pekerjaan.",
  },
  {
    q: "Pada saat Anda sedang melakukan wawancara dengan narasumber, tiba-tiba tetangga Anda menelepon dan memberi tahu bahwa baru saja terjadi pencurian di rumah Anda, sikap Anda...",
    o: [
      "Segera mengakhiri wawancara dan kembali ke rumah",
      "Memohon maaf dan minta izin pada narasumber tersebut untuk kembali ke rumah",
      "Mengabaikan urusan rumah karena masih sibuk",
      "Kembali ke rumah setelah wawancara selesai",
      "Menelepon dan meminta tolong kerabat mengurusnya terlebih dahulu",
    ],
    a: 4,
    s: [3, 4, 1, 2, 5],
    p: "Opsi E mencerminkan manajemen krisis yang baik. Anda tidak panik dan mampu mendelegasikan masalah pribadi kepada orang terpercaya agar tugas profesional (wawancara) tetap tuntas.",
    t: "Seimbangkan tanggung jawab pribadi dan profesional dengan mendelegasikan keadaan darurat.",
  },
  {
    q: "Bila jadwal Anda yang biasa diubah, apa yang Anda rasakan...",
    o: [
      "Biasa saja dan melakukannya",
      "Merasa tertantang dan bersemangat serta segera menyesuaikan",
      "Marah-marah dan mengeluh",
      "Panik dan gelisah",
      "Melakukan sesuai jadwal lama",
    ],
    a: 1,
    s: [4, 5, 1, 2, 3],
    p: "Opsi B menunjukkan tingkat kecerdasan adaptasi tinggi. Perubahan dianggap sebagai pemicu tantangan dan semangat baru, bukan sebuah kendala.",
    t: "Adaptabilitas tinggi selalu disertai sikap antusias dan proaktif.",
  },
  {
    q: "Bulan depan ada kesempatan untuk ikut kompetisi di bidang yang saya senangi maka saya...",
    o: [
      "Ikut hanya jika ada kemungkinan menang",
      "Tidak ikut kompetisi",
      "Mengalahkan pesaing dengan berusaha meningkatkan kemampuan dibidang tersebut",
      "Mencari kelemahan yang ada pesaing lain",
      "Lebih baik tidak mengikuti kompetisi kerena malas dan takut kalah",
    ],
    a: 2,
    s: [4, 2, 5, 3, 1],
    p: "Opsi C menunjukkan semangat berprestasi (achievement) yang sehat. Berfokus pada pengembangan kemampuan diri sendiri, bukan sekadar mencari celah lawan.",
    t: "Semangat kompetisi yang ideal berfokus pada peningkatan kemampuan (upgrade diri).",
  },
  {
    q: "Atasan Anda melakukan rekayasa laporan keuangan kantor maka Anda...",
    o: [
      "Tidak menyetujui hal tersebut",
      "Hal tersebut sering terjadi di kantor manapun",
      "Mengingatkan dan melaporkan kepada yang berwenang",
      "Tidak ingin terlibat dalam proses",
      "Hal semacam itu memang sudah menjadi tradisi yang tidak baik di Indonesia",
    ],
    a: 2,
    s: [4, 2, 5, 3, 1],
    p: "Opsi C menunjukkan integritas tertinggi, di mana Anda memiliki keberanian untuk melaporkan kebohongan agar peraturan di institusi ditegakkan.",
    t: "Jika ada pelanggaran hukum, langkah terbaik adalah mengingatkan dan melaporkan.",
  },
  {
    q: "Jika yang saya cita-citakan tidak tercapai, saya...",
    o: [
      "Mencari dengan seksama siapa yang turut bertanggung jawab terhadap kegagalan saya",
      "Mengambil waktu untuk menenangkan diri",
      "Bersedih hati",
      "Melakukan intropeksi dan memperbaiki upaya",
      "Meminta bantuan kepada lebih banyak orang",
    ],
    a: 3,
    s: [1, 4, 2, 5, 3],
    p: "Opsi D menunjukkan kematangan sikap, Anda mau mengevaluasi (introspeksi) dan segera memperbaiki strategi agar kegagalan tak berulang.",
    t: "Respons terbaik terhadap kegagalan adalah evaluasi (introspeksi) dan perbaikan.",
  },
  {
    q: "Ketika mengalami kegagalan dalam melaksanakan suatu tugas, sikap saya adalah...",
    o: [
      "Menghentikan seluruh upaya karena kegagalan tersebut merupakan isyarat tegas bahwa saya harus berhenti.",
      "Menjadikannya pemacu untuk meningkatkan ketangguhan diri agar dapat mencoba lagi dengan lebih baik.",
      "Merasa terpukul karena kegagalan tersebut sering kali menjatuhkan mental dan semangat saya.",
      "Berusaha sekuat tenaga untuk menjaga kondisi psikologis agar kegagalan itu tidak mengurangi semangat saya.",
      "Mencari tahu kesalahan yang ada karena mungkin saja kegagalan tersebut disebabkan oleh kekeliruan anggota tim.",
    ],
    a: 1,
    s: [1, 5, 2, 4, 3],
    p: "Opsi B menunjukkan resiliensi (ketangguhan) yang tinggi. Kegagalan dijadikan dorongan (pemacu) untuk bangkit lebih kuat.",
    t: "Ketangguhan (resiliensi) adalah mengubah kegagalan menjadi motivasi.",
  },
  {
    q: "Bagi saya untuk menjadi PNS yang sukses saya harus melakukan...",
    o: [
      "Mengikuti perintah dan arahan pimpinan secara loyal dan penuh kepatuhan",
      "Melakukan pekerjaan yang terbaik dengan standar kinerja yang tinggi",
      "Mengembangkan hal-hal baru yang belum pernah diciptakan sebelumnya",
      "Menciptakan hubungan baik dengan setiap orang, rekan kerja, dan pimpinan",
      "Bekerja sesuai dengan ketentuan yang telah ditetapkan oleh pimpinan",
    ],
    a: 1,
    s: [4, 5, 2, 3, 1],
    p: "Opsi B adalah karakteristik PNS profesional; selalu berorientasi pada kualitas, keunggulan, dan standar kinerja terbaik (high performance).",
    t: "Kesuksesan seorang profesional diukur dari standar hasil kerja yang tinggi.",
  },
  {
    q: "Saya akan turut memberikan kontribusi terhadap pembangunan nusa dan bangsa Indonesia...",
    o: [
      "Jika saya berkarya sebagai PNS",
      "Di manapun saya berkarya, saya akan turut memberikan kontribusi terhadap pembangunan bangsa",
      "Ketika saya menjadi birokrat tingkat tinggi",
      "Ketika saya menjabat menjadi anggota DPR",
      "Di manapun saya berkarya, saya akan turut berkontribusi dengan syarat didukung pemerintah",
    ],
    a: 1,
    s: [4, 5, 2, 1, 3],
    p: "Opsi B menunjukkan jiwa pengabdian dan nasionalisme sejati, bahwa kontribusi kepada negara tidak terbatas oleh profesi atau jabatan tertentu.",
    t: "Nasionalisme harus tertanam dalam semua profesi dan kondisi.",
  },
  {
    q: "Jika saya memiliki bawahan yang kompetensinya rendah maka...",
    o: [
      "Saya menuntutnya untuk meningkatkan kemampuannya",
      "Saya menegaskan bila dia tidak meningkatkan kemampuannya maka saya tidak segan akan memberhentikannya",
      "Saya akan memberhentikannya dengan segera",
      "Saya meminta atasan saya untuk memindahkannya ke unit lain",
      "Saya membimbing dan memintanya untuk meningkatkan kemampuannya",
    ],
    a: 4,
    s: [4, 2, 1, 3, 5],
    p: "Opsi E menunjukkan peran pemimpin yang membina bawahan (coaching). Tidak hanya menuntut, melainkan membimbing agar bawahan bisa berkembang.",
    t: "Kepemimpinan yang baik senantiasa membimbing (coaching & mentoring).",
  },
  {
    q: "Menurut saya, pemimpin besar di dunia itu...",
    o: [
      "Mereka memang sudah ditakdirkan menjadi pemimpin besar",
      "Mereka berusaha keras dalam hidupnya untuk sukses",
      "Mereka mendapatkan kesempatan dan fasilitas sehingga bisa sukses",
      "Mereka adalah pribadi yang langka",
      "Mereka sangat beruntung bisa sukses dan menjadi pemimpin besar",
    ],
    a: 1,
    s: [2, 5, 4, 3, 1],
    p: "Opsi B menunjukkan growth mindset (pola pikir bertumbuh) bahwa kesuksesan dibentuk oleh dedikasi dan ikhtiar yang keras, bukan sekadar takdir atau kebetulan.",
    t: "Orientasikan pada usaha dan proses kerja keras.",
  },
  {
    q: "Bagaimana sikap Anda melihat seorang pimpinan yang kasar dan sewenang-wenang?",
    o: [
      "Ingin menghajarnya saja",
      "Lapor kepada dewan direksi terkait pimpinan tersebut",
      "Menasihati sendiri pimpinan tersebut",
      "Meminta bantuan teman dalam menghadapi",
      "Menurut saja atas apa yang diperintah",
    ],
    a: 1,
    s: [1, 5, 4, 3, 2],
    p: "Opsi B menggunakan jalur birokrasi formal. Segala tindakan pelanggaran kewenangan oleh atasan harus diselesaikan secara hierarki resmi.",
    t: "Selesaikan masalah institusional melalui prosedur aduan resmi.",
  },
  {
    q: "Menurut rekan-rekan, saya orang yang...",
    o: [
      "Tidak memiliki ketekunan dalam mengerjakan pekerjaan rutin",
      "Memiliki ketekunan",
      "Terkadang tekun",
      "Terkadang mudah jengkel dan kurang tekun mengerjakan sesuatu",
      "Cukup tekun",
    ],
    a: 1,
    s: [1, 5, 3, 2, 4],
    p: "Opsi B mencerminkan konsistensi, stabilitas kerja, dan daya tahan tinggi (ketekunan) terhadap pekerjaan rutin.",
    t: "Pilih jawaban yang lugas dalam menunjukkan konsistensi diri (Memiliki ketekunan).",
  },
  {
    q: "Instansi Anda sedang menerapkan audit internal mendadak. Rekan satu tim Anda memohon agar ikut menyepakati penyesuaian tanggal dokumen (backdate) untuk menutupi kesalahannya agar laporan terlihat bersih di mata auditor. Sikap Anda adalah...",
    o: [
      "Menolak dengan tegas usulan tersebut dan tetap menyajikan dokumen apa adanya, siap menerima konsekuensi demi menjaga kebenaran data.",
      "Menolak usulan manipulasi, namun berinisiatif menemui auditor secara personal untuk menjelaskan dan meminta dispensasi.",
      "Mengingatkan rekan bahwa memanipulasi adalah pelanggaran, lalu menyerahkan keputusan kepada atasan.",
      "Menyetujui usulan tim demi menjaga hubungan baik dan produktivitas tim kali ini saja.",
      "Mengikuti keputusan mayoritas karena kesalahannya bersifat minor dan tak merugikan negara.",
    ],
    a: 0,
    s: [5, 3, 4, 1, 2],
    p: "Opsi A menunjukan integritas mutlak. Menolak kompromi manipulasi, berani menerima konsekuensi, dan mendahulukan kebenaran (transparansi).",
    t: "Kebenaran data adalah fondasi integritas. Jangan pernah berkompromi dengan pemalsuan dokumen.",
  },
  {
    q: "Ketika saya sering berselisih dengan rekan-rekan di kantor, maka saya...",
    o: [
      "Berusaha mencari akar permasalahan yang sebenarnya dan mencari solusi",
      "Menganggap hal itu hanya masalah kecil",
      "Tetap tenang dan yakin bahwa masalah tersebut akan dilupakan seiring waktu",
      "Bingung, sehingga saya tidak dapat tidur",
      "Merasa takut akan kehilangan teman",
    ],
    a: 0,
    s: [5, 2, 4, 1, 3],
    p: "Opsi A proaktif dan berorientasi pemecahan konflik (problem solving). Tidak menghindar, melainkan mencari akar penyebab agar selesai tuntas.",
    t: "Sikap proaktif dalam menyelesaikan konflik.",
  },
  {
    q: "Melihat bos yang berlaku kejam terhadap karyawan, sikap saya...",
    o: [
      "Mendiamkan toh itu hak atasan",
      "Tidak bisa berbuat banyak",
      "Mengingatkan dengan tegas",
      "Mengingatkan dengan santun",
      "Mengingatkan sambil marah, agar dia tidak mengulanginya",
    ],
    a: 3,
    s: [2, 1, 4, 5, 3],
    p: "Opsi D menunjukkan keberanian moral untuk menegakkan kebenaran dengan tetap menghormati hierarki/tata krama organisasi (disampaikan secara santun).",
    t: "Tegakkan kebenaran namun gunakan etika komunikasi yang baik (santun).",
  },
  {
    q: "Hari ini di kantor ada kerja piket yang membolehkan Anda bekerja sepanjang waktu yang Anda mau. Reaksi Anda?",
    o: [
      "Sangat antusias dengan hal itu",
      "Tetap bekerja sebagaimana peraturan yang ada",
      "Anda bisa mencuri waktu untuk mengurusi urusan lainnya",
      "Membolos dari tengah waktu bekerja",
      "Menghilang dan hanya titip absen semenjak awal waktu kerja dimulai",
    ],
    a: 1,
    s: [4, 5, 3, 2, 1],
    p: "Opsi B adalah bentuk integritas personal, di mana Anda disiplin berlandaskan aturan dan tanggung jawab moral, walau pengawasan dilonggarkan.",
    t: "Integritas tetap utuh meski sistem memberikan kelonggaran pengawasan.",
  },
  {
    q: "Pimpinan terlampau sering mengingatkan bawahannya termasuk saya untuk tidak melakukan kekeliruan hingga kami semua nyaris bosan. Tanggapan Anda?",
    o: [
      "Jangan sampai saya melakukan kekeliruan yang dijelaskan",
      "Saya sesekali melakukan kekeliruan tersebut",
      "Peraturan tersebut khusus untuk pegawai setingkat dia",
      "Lebih baik saya tidak melakukan kekeliruan tersebut",
      "Abaikan saja dan mengobrol dengan rekan kerja untuk menghilangkan rasa bosan",
    ],
    a: 0,
    s: [5, 2, 3, 4, 1],
    p: "Opsi A mencerminkan kepatuhan, kehati-hatian, dan komitmen kuat (preventif) agar kualitas kerja tetap sempurna tanpa mengulangi kesalahan.",
    t: "Tanggapi imbauan pimpinan sebagai pengingat kedisiplinan preventif.",
  },
  {
    q: "Setujukah Anda dengan diadakan karyawisata bagi para pegawai di kantor Anda?",
    o: [
      "Setuju hitung-hitung sebagai penghemat pengeluaran",
      "Setuju sebab karyawisata bisa membuat pegawai rileks sejenak di tengah pekerjaan",
      "Karyawisata hanya menghabiskan anggaran saja",
      "Tak semua orang mau diajak berekreasi",
      "Sebaiknya untuk para bos bos saja",
    ],
    a: 1,
    s: [4, 5, 2, 3, 1],
    p: "Opsi B memandang hal ini sebagai keseimbangan kehidupan kerja (work-life balance) untuk me-recharge psikologis pegawai agar kembali produktif.",
    t: "Work-life balance penting untuk menjaga produktivitas tim.",
  },
  {
    q: "Ketika saya mengikuti pelatihan dinas, saya mendapatkan kamar dengan orang yang tidak saya kenal sebelumnya. Sikap saya...",
    o: [
      "Berusaha mengenal dan memahami teman satu kamar",
      "Lebih memilih diam saja dan tidur",
      "Berbasa-basi untuk berkenalan",
      "Pindah tidur ke kamar orang yang saya kenal",
      "Tidak mau tahu tentang orang yang berada dalam satu kamar",
    ],
    a: 0,
    s: [5, 2, 4, 3, 1],
    p: "Opsi A menunjukkan adaptabilitas yang inklusif, inisiatif membangun jejaring (networking), dan kemampuan interpersonal yang proaktif.",
    t: "Berinisiatiflah untuk terbuka dan bersosialisasi pada lingkungan/rekan baru.",
  },
  {
    q: "Kini Anda ditempatkan di bagian personalia yang membidangi urusan kepegawaian, bagaimana sikap dan reaksi Anda?",
    o: [
      "Bekerja dengan penuh profesionalitas dan tanggung jawab",
      "Mencari celah agar pegawai baru bisa dimasukkan tanpa ada instruksi pengadaan",
      "Bekerjasama dalam menutupi informasi yang Anda bidangi saat ini",
      "Berusaha semampunya untuk tidak melakukannya",
      "Tidak ingin melakukan sama sekali",
    ],
    a: 0,
    s: [5, 2, 3, 4, 1],
    p: "Opsi A adalah cerminan fleksibilitas yang diimbangi tanggung jawab (profesionalitas mutlak).",
    t: "Tunjukkan komitmen prima di posisi apapun Anda ditempatkan.",
  },
  {
    q: "Anda sedang berjalan-jalan di suatu daerah dan melewati sebuah peternakan yang dijaga anjing galak yang mengeram dan menggonggong kepada Anda. Jika hal itu terjadi, maka...",
    o: [
      "Melemparkan batu kepada anjing-anjing tersebut berharap pergi menjauh",
      "Tetap tenang, berusaha mencari tempat yang lebih tinggi, serta meminta bantuan pemilik anjing",
      "Ketakutan di tempat dan tidak melakukan apapun",
      "Berlari sekencang mungkin sehingga terhindar dari anjing tersebut",
      "Berteriak-teriak dan berharap orang lain datang menolong Anda",
    ],
    a: 1,
    s: [4, 5, 2, 3, 1],
    p: "Opsi B paling taktis: Menjaga emosi (ketenangan) untuk meredam naluri agresif hewan peliharaan, serta memohon bantuan figur otoritas/pemiliknya (problem solving logis).",
    t: "Sikap tenang adalah kunci menghadapi situasi panik yang mengancam keselamatan.",
  },
  {
    q: "Saya diberikan tugas secara mendadak oleh atasan untuk mengerjakan tugas yang harus dikumpulkan esok hari. Namun, saat itu saya dalam keadaan sakit, apa yang akan saya lakukan...",
    o: [
      "Meminta izin kepada atasan bahwa saya dalam keadaan sakit sehingga tidak akan optimal",
      "Tetap menerima dan mengerjakannya walau dalam keadaan sakit",
      "Tetap menerima dan mengerjakannya, jika tidak selesai meminta pertolongan teman",
      "Memberikan usulan kepada atasan untuk memberikan tugas pada rekan lainnya",
      "Menerima tugas tersebut dan berikan alasan jika tidak bisa mengumpulkan besok",
    ],
    a: 2,
    s: [2, 3, 5, 4, 1],
    p: "Opsi C sangat solutif dan sadar realitas: menerima komitmen tugas, lalu menggerakkan dukungan teamwork (kerja sama tim) sebagai rencana cadangan (back-up) karena sakit.",
    t: "Manajemen tugas dengan pemberdayaan tim kerja (teamwork).",
  },
  {
    q: "Jika Anda punya jadwal bertemu dengan seseorang sepulang jam kerja tetapi atasan Anda meminta tolong kepada Anda untuk mengerjakan suatu laporan dan membuat Anda harus lembur. Apa yang Anda akan lakukan...",
    o: [
      "Menolak lembur",
      "Lembur dan membatalkan janji segera",
      "Lembur tetapi curi kesempatan untuk keluar",
      "Mengganti jadwal bertemu di kantor",
      "Lembur dan menyelesaikan masalah sebisa mungkin dengan telepon",
    ],
    a: 4,
    s: [1, 4, 2, 3, 5],
    p: "Opsi E menunjukkan pengelolaan skala prioritas. Kepentingan kantor didahulukan, sementara janji pribadi diselesaikan/dijelaskan melalui komunikasi telepon tanpa merugikan tugas.",
    t: "Prioritaskan kepentingan instansi dengan solusi logis bagi urusan pribadi.",
  },
  {
    q: "Apakah Anda akan meninggalkan pekerjaan yang menguntungkan bila ternyata itu membosankan?",
    o: [
      "Pasti, passion adalah segalanya",
      "Kemungkinan besar iya",
      "Tergantung hal-hal lainnya",
      "Tidak karena secara logika menguntungkan",
      "Pasrah saja dan menjalani",
    ],
    a: 3,
    s: [2, 1, 4, 5, 3],
    p: "Opsi D menunjukkan rasionalitas dan kedewasaan emosi, serta memiliki daya tahan (endurance) terhadap kebosanan demi kemaslahatan rasional.",
    t: "Pilih sikap rasional, realistis, dan tahan banting atas rasa bosan.",
  },
  {
    q: "Anda sedang mengerjakan laporan penting tenggat besok pagi. Di tengah pekerjaan, internet kantor mati dan rekan kerja berhenti bekerja untuk mengobrol. Sikap Anda adalah...",
    o: [
      "Ikut bergabung dengan rekan kerja untuk melepas penat sejenak",
      "Meminta izin pulang awal dan melanjutkan di rumah",
      "Tetap di meja dan mencoba mengerjakan bagian laporan yang bisa diselesaikan tanpa internet",
      "Mengajak rekan untuk bersama-sama melapor ke bagian IT",
      "Marah kepada rekan kerja karena tidak peduli kendala teknis",
    ],
    a: 2,
    s: [2, 4, 5, 3, 1],
    p: "Opsi C adalah langkah proaktif dan mandiri. Tetap produktif mengelola waktu pada aspek tugas lain yang tidak membutuhkan koneksi (bekerja luring/offline).",
    t: "Fokus pada apa yang masih bisa dikerjakan di tengah keterbatasan sarana.",
  },
  {
    q: "Di suatu daerah ada adat budaya membunuh anjing karena dianggap membawa aura negatif. Padahal ada aturan hukum yang melindungi hewan. Sikap Anda di sana...",
    o: [
      "Mengomunikasikan hal tersebut dengan kepala suku, bahwa ada larangan menyiksa hewan",
      "Melaporkan kepada pihak terkait untuk segera diusut",
      "Memfoto kemudian mengupload ke instagram",
      "Ikut melakukan adat tersebut sebagai upaya menghormati",
      "Saya akan bertindak pura-pura tidak tahu",
    ],
    a: 0,
    s: [5, 4, 2, 3, 1],
    p: "Opsi A menggunakan komunikasi asertif, bijaksana, dan lintas budaya. Mengedukasi norma negara melalui kepala adat tanpa sikap konfrontatif fisik.",
    t: "Gunakan pendekatan komunikasi budaya dan edukasi (persuasif) untuk masalah kearifan lokal.",
  },
  {
    q: "Sebagai wedding organizer, ada klien meminta pernak-pernik pakaian adat dari daerah mereka yang jauh. Anda akan...",
    o: [
      "Menyarankan menggunakan baju adat tempat tinggal saat ini saja",
      "Menyarankan menggunakan pakaian nasional",
      "Berusaha semampunya memenuhi permintaan mereka",
      "Meminta klien menyiapkan sendiri perlengkapannya",
      "Menghubungi rekan wedding organizer dari daerah asal mereka untuk membantu saya",
    ],
    a: 4,
    s: [2, 3, 4, 1, 5],
    p: "Opsi E menunjukkan pelayanan prima dan pengembangan jaringan (networking) luas. Berusaha penuh memenuhi ekspektasi pelanggan melalui kolaborasi pihak lain.",
    t: "Tingkatkan pelayanan pelanggan melalui kolaborasi/jejaring eksternal.",
  },
  {
    q: "Di perusahaan diadakan pelatihan teknologi baru. Anda tahu itu tidak ada hubungannya dengan pekerjaan Anda saat ini, tetapi atasan memerintahkan ikut, tindakan Anda...",
    o: [
      "Menolak karena bertolak belakang dengan pekerjaan",
      "Menerimanya dengan senang hati agar atasan memuji",
      "Menerima pelatihan namun tidak mendengarkan materinya",
      "Menerima dan menunjukkan kepada atasan bahwa Anda patuh",
      "Menerima dan mengikuti karena berpikir mungkin dapat berguna untuk ke depannya",
    ],
    a: 4,
    s: [1, 2, 3, 4, 5],
    p: "Opsi E adalah growth mindset. Keterampilan baru dilihat sebagai aset masa depan (adaptasi teknologi), ditunjang dengan sikap loyal pada arahan pimpinan.",
    t: "Selalu berpandangan jauh ke depan mengenai pentingnya pengembangan skill baru.",
  },
  {
    q: "Banyak perusahaan berlomba menggunakan teknologi informasi, namun di perusahaan Anda penerapannya tidak signifikan memajukan kinerja. Sikap Anda sebagai pimpinan...",
    o: [
      "Memberi motivasi dan diklat seluruh karyawan untuk meningkatkan ilmu IT",
      "Berusaha memberi pengetahuan bahwa TI penting",
      "Menggunakan TI lain yang mungkin membuat perubahan",
      "Beralih pada proses manual kembali sambil mencari solusi",
      "Tidak menggunakan TI karena terbukti tidak membantu",
    ],
    a: 0,
    s: [5, 4, 3, 2, 1],
    p: "Opsi A sangat visioner. Jika inovasi macet, perbaiki sumber daya manusianya (SDM) lewat diklat teknis agar sistem tersebut dapat terserap dan dijalankan secara optimal.",
    t: "Peningkatan kualitas fasilitas selalu harus diiringi dengan diklat peningkatan SDM.",
  },
  {
    q: "Kantor Anda akan mengadakan bakti sosial di daerah padat penduduk. Agar acara berjalan lancar yang akan Anda perhatikan adalah...",
    o: [
      "Jumlah warga dan bantuan yang akan diberikan",
      "Transportasi menuju lokasi",
      "Jenis bantuan dan koordinasi dengan pihak terkait agar acara tertib",
      "Tentang perizinan penyelenggaraan acara",
      "Pendistribusian bantuan",
    ],
    a: 2,
    s: [4, 1, 5, 2, 3],
    p: "Opsi C adalah mitigasi keamanan dan kelancaran yang solutif. Melibatkan koordinasi keamanan pihak berwenang adalah kunci utama mengatur massa di lingkungan padat.",
    t: "Koordinasi lintas sektor menjamin keamanan sebuah acara massal.",
  },
  {
    q: "Seorang rekan kerja Anda mencuri ide kemudian mempresentasikannya kepada para direksi sehingga mendapatkan penghargaan. Sikap Anda...",
    o: [
      "Diam saja dan menyelamatkannya",
      "Membicarakannya dengan rekan kerja lain",
      "Melaporkan pada atasan dan mengatakan yang sebenarnya disertai bukti",
      "Menegurnya karena hal itu tidak baik",
      "Segera naik ke atas panggung untuk klarifikasi",
    ],
    a: 2,
    s: [2, 3, 5, 4, 1],
    p: "Opsi C menunjukkan integritas beretika. Melaporkan pencurian ide secara tertutup dengan bukti ke atasan tanpa memicu kegaduhan publik/panggung.",
    t: "Atasi pelanggaran kode etik secara tegas, rahasia, profesional, dan berbasis bukti nyata.",
  },
  {
    q: "Anda diutus bertugas digitalisasi desa ke pelosok yang mana masyarakatnya belum paham IT. Langkah awal Anda adalah...",
    o: [
      "Mengedukasi masyarakat tentang perkembangan TIK",
      "Berkoordinasi kepada kepala desa dan tokoh setempat untuk membangun insfrastruktur",
      "Membangun insfrastruktur IT yang memadai lalu mengadakan pelatihan",
      "Menghormati kebudayaan daerah tersebut yang belum butuh IT",
      "Melaporkan kepada atasan bahwa desa belum siap",
    ],
    a: 1,
    s: [4, 5, 1, 3, 2],
    p: "Opsi B adalah kunci kesuksesan sosiologis. Menggandeng tokoh otoritas setempat/kepala desa mempercepat penerimaan inovasi teknologi terhadap masyarakat pelosok.",
    t: "Implementasi program desa harus selalu merangkul tokoh formal/non-formal lokal (pendekatan kultural).",
  },
  {
    q: "Libur nasional jatuh hari Selasa. Sudah menjadi kebiasaan umum di instansi tempat Anda bekerja untuk 'bolos masal' di hari Senin ('Hari Kejepit'). Sikap Anda...",
    o: [
      "Bertanya pada atasan apakah diizinkan",
      "Menunggu keputusan atasan",
      "Menolak bolos masal di hari Senin karena bertentangan dengan peraturan",
      "Tetap masuk kerja, jika sepi maka ikut pulang",
      "Mengikuti kebiasaan umum demi kebersamaan",
    ],
    a: 2,
    s: [3, 4, 5, 2, 1],
    p: "Opsi C menunjukkan integritas dan penegakan kedisiplinan yang absolut. Budaya birokrasi buruk tidak boleh ditoleransi meski ada tekanan kelompok.",
    t: "Integritas kedisiplinan diri di atas budaya lingkungan/peer-pressure negatif.",
  },
  {
    q: "Dalam rapat RT diusulkan warga kerja bakti membangun gedung pertemuan yang sebetulnya sedang dikerjakan kontraktor. Menurut saya...",
    o: [
      "Kurang diperlukan karena dikerjakan ahlinya",
      "Lebih baik kerja bakti kebersihan lingkungan",
      "Sangat tidak diperlukan karena sudah keluar uang",
      "Penting untuk mempererat kebersamaan antar warga",
      "Penting untuk menumbuhkan rasa memiliki warga terhadap fasilitas tersebut",
    ],
    a: 4,
    s: [2, 3, 1, 4, 5],
    p: "Opsi E menunjukkan pemahaman psikologi massa dan kemasyarakatan. Kontribusi fisik/tenaga membangun fasilitas menumbuhkan sense of belonging (rasa memiliki) untuk merawatnya kelak.",
    t: "Partisipasi aktif gotong royong memupuk rasa memiliki terhadap ruang publik.",
  },
  {
    q: "Perusahaan Anda mengalami kemerosotan penjualan akibat konsumen beralih ke ranah teknologi. Pimpinan menunjuk Anda untuk memberikan solusi, maka...",
    o: [
      "Memberikan ide-ide yang sesuai dengan minat pasar",
      "Melakukan riset terlebih dahulu dan menentukan ide-ide yang dikembangkan",
      "Memberikan ide orisinil dan solusi keuntungan",
      "Mengambil ide perusahaan lain yang sudah maju",
      "Mencari pihak ketiga sebagai konsultan",
    ],
    a: 1,
    s: [4, 5, 3, 2, 1],
    p: "Opsi B berbasis analisis objektif. Solusi bisnis yang profesional tidak ditebak secara acak, melainkan melalui tahapan riset yang solid.",
    t: "Pengambilan keputusan atau pengajuan ide yang terbaik harus berlandaskan data riset (data-driven).",
  },
];

// Database Soal TKP Try Out 2 (40 Soal)
const tkpTryout2Data = [
  {
    q: "Saat Anda sedang memberikan pelayanan, seorang lansia datang menyerobot antrean sambil marah-marah karena merasa prosesnya terlalu lama. Sikap Anda...",
    o: [
      "Meminta satpam untuk segera mengamankan lansia tersebut agar tidak mengganggu",
      "Mengabaikannya dan tetap melayani pelanggan lain sesuai nomor urut antrean",
      "Memberikan pengertian dengan sopan namun tegas agar beliau bersedia mengantre",
      "Langsung melayani lansia tersebut agar situasi cepat tenang",
      "Meminta pelanggan yang sedang dilayani untuk mengalah sebentar",
    ],
    a: 2,
    s: [1, 3, 5, 2, 4],
    p: "Dalam pelayanan publik, menjaga ketertiban sangat penting namun harus dilakukan dengan empati (terutama kepada lansia). Memberikan pengertian dengan sopan namun tegas adalah langkah paling proporsional.",
    t: "Pilih tindakan yang menyeimbangkan antara ketegasan aturan (antrean) dan kesopanan dalam pelayanan.",
  },
  {
    q: "Instansi Anda baru saja menerapkan sistem presensi berbasis pengenalan wajah (face recognition) dan lokasi (GPS). Beberapa rekan kerja senior mengeluh kesulitan menggunakan aplikasi tersebut. Sikap Anda...",
    o: [
      "Membiarkan saja karena itu urusan bagian IT",
      "Membantu melakukan presensi dari perangkat saya",
      "Menyarankan mereka untuk protes kepada pimpinan agar sistem dikembalikan",
      "Mengajari dan mendampingi mereka sampai bisa menggunakan aplikasi tersebut",
      "Memberikan buku panduan dan menyuruh mereka mempelajarinya",
    ],
    a: 3,
    s: [1, 2, 3, 5, 4],
    p: "Jejaring kerja dan adaptasi TIK. Sebagai rekan yang kooperatif, membantu dan mendampingi rekan kerja hingga mahir menunjukkan jiwa kolaborasi yang tinggi.",
    t: "Sikap kolaboratif: mengedukasi dan mendampingi rekan kerja beradaptasi dengan perubahan teknologi.",
  },
  {
    q: "Anda ditugaskan dalam sebuah tim lintas divisi yang anggota-anggotanya berasal dari berbagai latar belakang daerah dan budaya yang sangat berbeda. Dalam rapat perdana, sering terjadi kesalahpahaman komunikasi. Sikap Anda...",
    o: [
      "Meminta atasan mengganti anggota tim dengan yang satu daerah agar mudah komunikasi",
      "Lebih banyak diam agar tidak menimbulkan konflik baru",
      "Mengusulkan agar rapat menggunakan bahasa Indonesia yang baku dan saling menghargai pendapat",
      "Membuat kelompok-kelompok kecil berdasarkan kesamaan budaya",
      "Membiarkan hal tersebut karena nanti akan terbiasa dengan sendirinya",
    ],
    a: 2,
    s: [1, 3, 5, 2, 4],
    p: "Sosial Budaya. Mengusulkan penggunaan bahasa pemersatu (Indonesia yang baku) serta mendorong sikap saling menghargai akan menjembatani perbedaan budaya dalam tim.",
    t: "Hadapi perbedaan budaya dengan menjunjung tinggi nilai persatuan dan komunikasi yang inklusif.",
  },
  {
    q: "Hari ini Anda memiliki tenggat waktu pengumpulan laporan yang sangat penting. Tiba-tiba, atasan memberikan tugas tambahan yang juga harus diselesaikan hari ini. Sikap Anda...",
    o: [
      "Menolak tugas tambahan dengan alasan sedang sibuk menyelesaikan laporan",
      "Menerima tugas tersebut namun mengeluh di belakang",
      "Menyelesaikan laporan utama terlebih dahulu, lalu meminta bantuan teman untuk tugas tambahan",
      "Menerima tugas tersebut dan mencoba membagi prioritas waktu untuk menyelesaikan keduanya secara maksimal",
      "Mengerjakan tugas tambahan dan menunda laporan penting",
    ],
    a: 3,
    s: [1, 2, 4, 5, 3],
    p: "Profesionalisme. Mampu mengelola stres dan beban kerja berlebih dengan manajemen prioritas yang baik tanpa langsung menolak tugas dari atasan.",
    t: "Manajemen waktu dan prioritas adalah kunci profesionalisme saat dihadapkan pada tugas ganda.",
  },
  {
    q: "Di grup WhatsApp warga perumahan, seseorang membagikan artikel yang memuat narasi kebencian terhadap kelompok agama tertentu dan berpotensi memicu perpecahan. Sikap Anda...",
    o: [
      "Ikut berkomentar menyetujui artikel tersebut",
      "Keluar dari grup WhatsApp karena tidak ingin pusing",
      "Mengingatkan dengan sopan di grup agar tidak menyebarkan konten provokatif dan SARA",
      "Melaporkan penyebar pesan ke polisi langsung",
      "Hanya membaca dan menghapus pesan tersebut di HP saya",
    ],
    a: 2,
    s: [1, 3, 5, 4, 2],
    p: "Anti-Radikalisme. Anda harus aktif melakukan pencegahan penyebaran paham radikal/kebencian (SARA) di lingkungan terdekat dengan cara yang asertif dan bijak.",
    t: "Tunjukkan tindakan asertif (mengingatkan/meluruskan) terhadap konten intoleransi di ruang publik/sosial.",
  },
  {
    q: "Sebuah program prioritas pemerintah menuntut Anda untuk mempelajari software pengolah data baru dalam waktu 3 hari. Anda sama sekali belum pernah menggunakan software tersebut. Langkah Anda...",
    o: [
      "Meminta perpanjangan waktu 1 bulan kepada pimpinan",
      "Segera mencari tutorial di internet, berdiskusi dengan ahli IT, dan mempraktikkannya siang malam",
      "Menyerahkan tugas tersebut kepada bawahan yang lebih muda",
      "Mempelajari sekadarnya dan menggunakan software lama secara diam-diam",
      "Berencana mengikuti kursus akhir pekan depan",
    ],
    a: 1,
    s: [2, 5, 3, 1, 4],
    p: "Teknologi Informasi & Komunikasi (TIK). Proaktif dan cepat (agile) dalam mempelajari teknologi baru demi tuntutan organisasi.",
    t: "Pembelajaran berkelanjutan secara mandiri dan cepat di era digital (agilitas belajar).",
  },
  {
    q: "Sebagai ketua panitia peringatan HUT RI di kantor, ada beberapa seksi acara yang kinerjanya lambat sehingga mengancam jadwal kegiatan. Tindakan Anda...",
    o: [
      "Memarahi seksi tersebut di depan panitia lain agar jera",
      "Mengambil alih seluruh pekerjaan mereka agar cepat selesai",
      "Mengajak mereka berdiskusi untuk mengetahui kendala dan mencari solusi bersama",
      "Membiarkan saja, jika gagal itu tanggung jawab mereka",
      "Meminta atasan untuk mencopot mereka dari kepanitiaan",
    ],
    a: 2,
    s: [1, 3, 5, 2, 4],
    p: "Jejaring Kerja & Kepemimpinan. Pendekatan komunikasi dan *problem solving* yang partisipatif sangat dibutuhkan untuk menggerakkan kembali kerja tim.",
    t: "Pemimpin yang baik akan mengevaluasi kendala dan mencari solusi, bukan sekadar menghukum atau mengambil alih.",
  },
  {
    q: "Rekan kerja Anda sering pulang lebih awal dari jam kerja resmi dengan alasan menghindari kemacetan, dan meminta Anda untuk tidak memberitahu atasan. Sikap Anda...",
    o: [
      "Mengikuti jejaknya karena alasan tersebut masuk akal",
      "Menegurnya secara pribadi dan mengingatkan tentang aturan jam kerja instansi",
      "Melaporkannya diam-diam ke bagian kepegawaian",
      "Mendiamkan saja karena itu bukan urusan saya",
      "Mengancam akan melaporkan jika dia tidak mentraktir saya",
    ],
    a: 1,
    s: [1, 5, 4, 3, 2],
    p: "Profesionalisme dan Integritas. Menegur secara langsung adalah bentuk kepedulian kolegial agar rekan kembali pada kedisiplinan yang benar.",
    t: "Integritas antar-rekan kerja: berani mengingatkan kesalahan dengan etika interpersonal yang baik.",
  },
  {
    q: "Anda ditempatkan di bagian resepsionis. Suatu hari, mesin antrean rusak dan membuat antrean menjadi semrawut. Pengunjung mulai saling berebut. Apa yang Anda lakukan?",
    o: [
      "Memasang pengumuman bahwa pelayanan dihentikan sementara",
      "Menghubungi teknisi dan bersembunyi di ruang belakang",
      "Berinisiatif membagikan nomor antrean manual dari kertas dan menenangkan pengunjung",
      "Meminta satpam mengatur pengunjung dengan keras",
      "Mengeluh kepada atasan tentang mesin yang rusak",
    ],
    a: 2,
    s: [2, 1, 5, 4, 3],
    p: "Pelayanan Publik. Proaktif mencari solusi alternatif (manual) secara cepat untuk mengurai kekacauan pelayanan saat sistem utama gagal.",
    t: "Fokus pada kelangsungan layanan publik dalam keadaan krisis melalui inovasi taktis.",
  },
  {
    q: "Saat makan siang, beberapa rekan berdiskusi dan mengarah pada pujian terhadap ideologi negara lain dan mulai merendahkan Pancasila. Sikap Anda...",
    o: [
      "Ikut dalam diskusi dan menyetujui pendapat mereka",
      "Segera meninggalkan meja makan karena muak",
      "Diam saja sambil bermain ponsel",
      "Mengalihkan pembicaraan dan menegaskan keunggulan Pancasila bagi bangsa majemuk",
      "Memarahi mereka dengan nada tinggi di kantin",
    ],
    a: 3,
    s: [1, 3, 2, 5, 4],
    p: "Anti-Radikalisme. Bersikap proaktif mengonter narasi anti-Pancasila secara elegan dan diplomatis di tengah pergaulan sosial.",
    t: "Pertahankan ideologi negara dengan narasi positif (konstruktif) tanpa memicu konflik fisik.",
  },
  {
    q: "Anda adalah analis data. Perusahaan meminta Anda menggunakan sistem komputasi awan (cloud) alih-alih server lokal agar data bisa diakses tim dari luar kota. Anda khawatir akan keamanan data. Tindakan Anda...",
    o: [
      "Menolak penggunaan cloud dan tetap menyimpan di komputer pribadi",
      "Mengikuti arahan menggunakan cloud dan belajar mematuhi standar keamanan siber (cyber security) perusahaan",
      "Membuat salinan manual di flashdisk setiap hari",
      "Menggunakan cloud tapi tidak mengunggah data-data yang penting",
      "Meminta tim luar kota datang ke kantor pusat saja",
    ],
    a: 1,
    s: [1, 5, 3, 4, 2],
    p: "TIK. Memahami tuntutan teknologi cloud computing dengan menyeimbangkan aspek keamanan siber yang sesuai SOP.",
    t: "Beradaptasi penuh dengan teknologi sambil tetap mengedepankan keamanan informasi.",
  },
  {
    q: "Kantor Anda menerima kedatangan staf magang difabel (penyandang disabilitas). Kebetulan meja kerjanya berada di sebelah Anda. Apa yang Anda lakukan?",
    o: [
      "Berusaha mengerjakan pekerjaannya karena merasa kasihan",
      "Menganggapnya sama seperti staf lain namun tetap peka jika ia membutuhkan bantuan mobilitas/fasilitas",
      "Meminta HRD memindahkannya ke lantai dasar",
      "Tidak mengajaknya bicara agar dia tidak merasa terintimidasi",
      "Memperlakukannya dengan sangat berlebihan dan terus mengawasinya",
    ],
    a: 1,
    s: [2, 5, 3, 1, 4],
    p: "Sosial Budaya. Kesetaraan perlakuan inklusif; tidak diskriminatif, tidak mengasihani secara berlebihan, namun tetap peka terhadap kebutuhannya.",
    t: "Sikap inklusif dalam keberagaman adalah memperlakukan mereka secara setara dan empatik.",
  },
  {
    q: "Anda mendapat teguran keras dari pimpinan karena laporan yang Anda buat mengandung kesalahan perhitungan. Hal ini disaksikan oleh beberapa rekan. Sikap Anda...",
    o: [
      "Membela diri karena kesalahan itu terjadi akibat data yang salah dari tim lain",
      "Menerima teguran tersebut, meminta maaf, dan segera memperbaiki laporan tersebut",
      "Merasa malu dan mengajukan cuti keesokan harinya",
      "Menangis dan merasa tidak pantas bekerja di situ",
      "Menyalahkan rekan yang mengumpulkan data secara diam-diam",
    ],
    a: 1,
    s: [3, 5, 2, 1, 4],
    p: "Profesionalisme (Tanggung jawab). Ksatria mengakui kesalahan, tidak melempar tanggung jawab, dan langsung berfokus pada perbaikan kinerja.",
    t: "Sikap paling matang saat dikritik adalah menerima dengan lapang dada dan segera melakukan koreksi.",
  },
  {
    q: "Terdapat pergeseran budaya di masyarakat di mana generasi muda lebih bangga menggunakan produk luar negeri dibanding UMKM lokal. Sebagai ASN, apa peran Anda?",
    o: [
      "Membuat aturan yang melarang peredaran barang impor",
      "Memarahi generasi muda di media sosial",
      "Menjadi teladan (role model) dengan menggunakan dan mempromosikan produk lokal secara aktif",
      "Memaklumi karena produk impor memang lebih berkualitas",
      "Mendesak pemerintah memberi subsidi besar-besaran tanpa edukasi",
    ],
    a: 2,
    s: [3, 1, 5, 2, 4],
    p: "Sosial Budaya. Mengatasi pergeseran nilai budaya/nasionalisme harus dimulai dari keteladanan diri sendiri secara nyata.",
    t: "Pilih aksi *role model* (memberi contoh nyata) sebagai solusi perubahan sosial.",
  },
  {
    q: "Anda menemukan akun media sosial seorang rekan kerja yang secara terang-terangan menunjukkan simpati pada gerakan separatis. Apa yang akan Anda lakukan?",
    o: [
      "Melaporkan tangkapan layar (screenshot) akun tersebut ke pimpinan dan pihak berwenang di instansi",
      "Menegurnya di kolom komentar secara kasar",
      "Unfollow akunnya karena tidak mau tahu",
      "Menyebarkan akunnya ke rekan-rekan lain agar dijauhi",
      "Menasihatinya lewat DM namun jika diabaikan saya biarkan saja",
    ],
    a: 0,
    s: [5, 2, 1, 3, 4],
    p: "Anti-Radikalisme. Separatisme adalah ancaman serius bagi negara. ASN wajib melaporkan hal ini ke sistem pengawasan instansi (Early Warning System).",
    t: "Laporkan ancaman radikalisme/separatisme secara struktural berbekal bukti.",
  },
  {
    q: "Atasan menugaskan tim Anda membuat materi promosi layanan kantor dalam bentuk infografis animasi, padahal seluruh tim terbiasa membuat laporan naratif. Sikap tim Anda sebaiknya...",
    o: [
      "Mengajukan penolakan karena di luar deskripsi pekerjaan",
      "Meminta dana untuk menyewa desain grafis profesional",
      "Mencari aplikasi pembuat animasi instan (seperti Canva/Powtoon) dan bersama-sama belajar mendesain",
      "Membuat infografis seadanya saja dari Ms. Word",
      "Menunda pekerjaan tersebut sampai atasan lupa",
    ],
    a: 2,
    s: [2, 4, 5, 3, 1],
    p: "TIK & Jejaring Kerja. Berkolaborasi menggunakan *tools* IT modern untuk menjawab tantangan baru yang diberikan pimpinan.",
    t: "Pemanfaatan aplikasi digital siap pakai adalah solusi cepat dan efisien bagi pekerja modern.",
  },
  {
    q: "Di loket pelayanan puskesmas, seorang warga protes keras karena ada orang lain yang baru datang langsung masuk ke ruang dokter. Padahal orang tersebut adalah pasien gawat darurat. Sikap Anda sebagai petugas pendaftaran...",
    o: [
      "Menyuruh pasien tersebut diam dan menunggu giliran",
      "Membiarkan ia marah-marah sampai lelah sendiri",
      "Keluar dari loket dan memberikan penjelasan yang tenang mengenai standar triase (prioritas gawat darurat)",
      "Membentak balik karena warga tersebut tidak tahu aturan",
      "Meminta satpam mengeluarkan warga tersebut",
    ],
    a: 2,
    s: [2, 1, 5, 3, 4],
    p: "Pelayanan Publik. Kesalahpahaman warga atas prosedur teknis (seperti triase) harus direspons dengan edukasi/penjelasan yang transparan dan tenang.",
    t: "Selesaikan keluhan pelanggan melalui penjelasan aturan main secara ramah dan mudah dimengerti.",
  },
  {
    q: "Anda dimutasi ke kantor cabang di daerah terpencil yang minim fasilitas hiburan dan berbeda adat istiadatnya dengan asal Anda. Reaksi Anda...",
    o: [
      "Stres dan berusaha mengajukan mutasi kembali",
      "Menerima dengan berat hati dan menutup diri di kontrakan",
      "Beradaptasi dengan mengenal masyarakat, budaya, dan kuliner setempat",
      "Hanya bergaul dengan sesama pendatang",
      "Sering pulang ke kota asal tiap akhir pekan agar tidak bosan",
    ],
    a: 2,
    s: [1, 2, 5, 3, 4],
    p: "Sosial Budaya. Kecerdasan beradaptasi (CQ - Cultural Quotient) ditunjukkan dengan sikap terbuka untuk berbaur dengan kearifan lokal.",
    t: "Berbaur dan menghargai lingkungan/adat yang baru adalah ciri ASN pemersatu bangsa.",
  },
  {
    q: "Kantor mewajibkan penggunaan tanda tangan elektronik (TTE) pada semua persuratan untuk menekan penggunaan kertas. Namun, Anda kurang terbiasa dan sering salah memasukkan PIN. Tindakan Anda...",
    o: [
      "Meminta izin kembali menggunakan tanda tangan basah",
      "Menitipkan PIN kepada staf IT agar mereka yang membubuhkan TTE",
      "Berlatih perlahan dan menuliskan panduan singkat di meja agar lebih teliti menggunakan TTE",
      "Menghindari tugas yang mengharuskan tanda tangan dokumen",
      "Menyuruh bawahan mencetak dokumen lalu di-scan",
    ],
    a: 2,
    s: [2, 1, 5, 3, 4],
    p: "TIK & Profesionalisme. Berlatih dan beradaptasi menggunakan teknologi birokrasi hijau (paperless) serta menjaga keamanan akun secara personal.",
    t: "Kemauan belajar teknologi baru dan menjaga kerahasiaan *credentials* (PIN/Password).",
  },
  {
    q: "Anda menemukan bahwa ada anggaran proyek tim yang tidak terserap habis, dan seorang anggota mengusulkan agar sisa dana tersebut dibagi-bagikan sebagai 'uang lelah'. Sikap Anda...",
    o: [
      "Setuju karena tim memang sudah bekerja sangat keras",
      "Menolak dengan tegas dan memastikan sisa dana dikembalikan ke kas instansi/negara",
      "Mengikuti suara mayoritas jika mereka semua setuju",
      "Tidak ikut mengambil bagian, tapi membiarkan mereka melakukannya",
      "Mengusulkan sisa dana dipakai untuk makan-makan saja",
    ],
    a: 1,
    s: [1, 5, 3, 2, 4],
    p: "Profesionalisme (Integritas). Pembagian sisa dana proyek secara tidak sah adalah bentuk korupsi. ASN wajib mengembalikan SILPA (Sisa Lebih Pembiayaan Anggaran).",
    t: "Tolok ukur integritas tertinggi adalah ketegasan menolak KKN.",
  },
  {
    q: "Rekan kerja yang biasanya ramah tiba-tiba sering menarik diri, sering menonton video ceramah ekstrem di jam istirahat, dan mulai mengkafirkan pemerintah. Sikap Anda...",
    o: [
      "Mendiamkannya karena itu hak kebebasan beragama",
      "Menghindarinya secara total",
      "Melaporkan perubahan radikal tersebut kepada atasan atau unit pencegahan dini instansi",
      "Mengajaknya berdebat setiap kali bertemu",
      "Menasihatinya sekali, jika menolak ya sudah",
    ],
    a: 2,
    s: [1, 3, 5, 2, 4],
    p: "Anti-Radikalisme. Indikasi radikalisasi pada ASN harus ditindaklanjuti secara struktural melalui laporan *early warning* untuk dibina.",
    t: "Respons terhadap perubahan radikal adalah melaporkannya ke otoritas berwenang (pimpinan/SDM).",
  },
  {
    q: "Pelayanan di loket Anda akan tutup pukul 15.00. Pada pukul 14.58, seorang ibu yang membawa balita datang mengurus dokumen penting yang sangat ia butuhkan besok pagi. Sikap Anda...",
    o: [
      "Menolak dan memintanya datang kembali esok hari karena sistem segera *offline*",
      "Memarahi ibu tersebut karena datang mepet waktu",
      "Melayani ibu tersebut dengan cepat dan tuntas karena memahami urgensinya",
      "Memintanya menitipkan berkas dan dikerjakan besok",
      "Menyarankan ia ke instansi lain",
    ],
    a: 2,
    s: [3, 1, 5, 4, 2],
    p: "Pelayanan Publik. Fleksibilitas dan empati tinggi diperlukan dalam pelayanan publik, terutama menyangkut *urgensi* dan kelompok rentan (ibu dan balita) meskipun mendekati jam tutup.",
    t: "Utamakan pelayanan prima yang empatik bagi kebutuhan mendesak masyarakat.",
  },
  {
    q: "Seorang warga negara asing kebingungan di stasiun karena tidak mengerti petunjuk arah berbahasa Indonesia. Anda kebetulan bisa berbahasa Inggris pasif. Anda akan...",
    o: [
      "Pura-pura tidak melihat karena malu bahasa Inggris saya kurang lancar",
      "Berusaha membantunya menggunakan bahasa isyarat dan bahasa Inggris sebisanya dibantu aplikasi *translate*",
      "Menyuruhnya bertanya pada petugas keamanan",
      "Meninggalkannya karena saya sedang terburu-buru",
      "Menemaninya berkeliling sampai dia menemukan tempatnya walau saya telat kerja",
    ],
    a: 1,
    s: [2, 5, 3, 1, 4],
    p: "Sosial Budaya & Jejaring. Keberanian menolong lintas budaya menggunakan alat bantu teknologi (translate) mencerminkan sifat inklusif.",
    t: "Manfaatkan *tools* digital untuk menjembatani hambatan komunikasi lintas bahasa.",
  },
  {
    q: "Sebuah inovasi aplikasi pelaporan aduan masyarakat baru diluncurkan instansi Anda. Namun, banyak warga yang masuk ke media sosial instansi dan memberikan *rating* buruk karena UI/UX (tampilan) dinilai membingungkan. Tanggapan Anda sebagai pengelola...",
    o: [
      "Menghapus komentar negatif agar citra instansi terjaga",
      "Membuat postingan pembelaan bahwa masyarakat saja yang kurang *update*",
      "Menampung kritikan tersebut, mengedukasi warga via *tutorial*, dan melaporkannya ke *developer* untuk perbaikan UI/UX",
      "Mematikan fitur komentar di media sosial",
      "Membiarkan saja, nanti warga juga terbiasa",
    ],
    a: 2,
    s: [1, 2, 5, 3, 4],
    p: "TIK & Pelayanan Publik. Umpan balik (feedback) pengguna atas platform digital harus direspons dengan edukasi pengguna sekaligus perbaikan berkelanjutan (continuous improvement) sistem.",
    t: "Respon positif terhadap keluhan digital: Tampung, Edukasi, dan Perbaiki.",
  },
  {
    q: "Bulan ini target unit kerja Anda tercapai dengan gemilang. Atasan memutuskan untuk memberikan bonus kepada beberapa orang saja yang dianggap paling vokal, padahal seluruh tim bekerja sama kerasnya di balik layar. Sikap Anda...",
    o: [
      "Mengorganisir aksi mogok kerja tim",
      "Menghadap atasan berdua saja untuk menyampaikan perlunya apresiasi yang merata bagi seluruh tim demi moral kerja",
      "Diam saja karena tidak berani membantah atasan",
      "Meninggalkan tim dan bekerja secara individualistis ke depannya",
      "Menyindir pimpinan di grup WhatsApp kantor",
    ],
    a: 1,
    s: [2, 5, 3, 4, 1],
    p: "Profesionalisme (Berani dan Bertanggung Jawab). Sebagai ASN, memberikan masukan konstruktif (feed-up) kepada pimpinan secara tertutup dan etis adalah bentuk kepedulian pada tim.",
    t: "Sampaikan aspirasi keadilan organisasi secara langsung, privat, dan beradab.",
  },
  {
    q: "Seorang teman semasa SMA mengajak Anda untuk bergabung dalam sebuah forum diskusi. Namun, setelah beberapa kali ikut, Anda menyadari diskusi tersebut sering menghujat dasar negara dan merencanakan gerakan intoleran. Tindakan Anda...",
    o: [
      "Tetap ikut demi pertemanan namun tidak menanggapi omongan mereka",
      "Keluar perlahan tanpa pamit agar tidak memicu kecurigaan",
      "Menyatakan ketidaksetujuan secara tegas di forum, lalu keluar dan melaporkan indikasi membahayakan tersebut",
      "Mengumpulkan anggota forum untuk berdebat panjang",
      "Memusuhi teman tersebut dan melabrak keluarganya",
    ],
    a: 2,
    s: [2, 3, 5, 4, 1],
    p: "Anti-Radikalisme. Ketegasan ideologis sangat dibutuhkan. Anda harus memutus rantai pergaulan yang merusak ideologi, serta melaporkan jika ada ancaman pada keamanan negara.",
    t: "Ketegasan ideologi: Tolak paham radikal di wajah mereka dan laporkan ke aparat.",
  },
  {
    q: "Dalam melaksanakan tugas penyuluhan ke desa terpencil, jalanan tiba-tiba terputus akibat longsor kecil. Rombongan tidak bisa masuk membawa kendaraan. Keputusan Anda sebagai ketua rombongan...",
    o: [
      "Membatalkan acara dan pulang ke kantor",
      "Menunggu berhari-hari sampai jalan diperbaiki pemerintah",
      "Mengajak warga bergotong royong membuka jalan, atau memikul perlengkapan dengan berjalan kaki melewati jalan setapak alternatif",
      "Menelepon helikopter bantuan (tidak realistis)",
      "Marah-marah pada aparat desa yang tidak sigap mengantisipasi jalan",
    ],
    a: 2,
    s: [2, 3, 5, 1, 4],
    p: "Profesionalisme (Ketangguhan/Resiliensi) & Pelayanan. Hambatan alam harus diatasi dengan inisiatif yang membumi, adaptif, dan berorientasi pada penyelesaian misi (tugas negara).",
    t: "Pemimpin di lapangan harus tangguh, kreatif mencari alternatif, dan melibatkan potensi warga lokal.",
  },
  {
    q: "Atasan menugaskan Anda menjadi *Person In Charge* (PIC) untuk mengurus izin dari instansi luar yang terkenal dengan birokrasinya yang rumit dan berbelit. Sikap Anda...",
    o: [
      "Meminta rekan lain yang lebih pengalaman untuk menggantikan",
      "Menyogok petugas di sana agar urusan instansi saya cepat beres",
      "Mempelajari prasyaratnya dengan detail, menjalin komunikasi baik dengan petugas di sana, dan memonitor berkas secara berkala",
      "Menyerahkan berkas lalu membiarkannya sampai dihubungi",
      "Mengeluhkan lambatnya instansi tersebut di media sosial",
    ],
    a: 2,
    s: [2, 1, 5, 3, 4],
    p: "Jejaring Kerja (Networking). Mengelola urusan dengan instansi eksternal membutuhkan komunikasi interpersonal yang baik dan kepatuhan administratif.",
    t: "Gunakan pendekatan *networking* (komunikasi proaktif) tanpa melanggar aturan.",
  },
  {
    q: "Saat bekerja dengan Excel, Anda menemukan rumus *macro/VBA* yang bisa memangkas waktu kerja dari 3 jam menjadi 10 menit. Sikap Anda...",
    o: [
      "Menyimpannya untuk diri sendiri agar bisa pulang cepat sementara rekan lain lembur",
      "Membagikan temuan ini kepada tim dan mengadakan sesi sharing singkat untuk memajukan kinerja bersama",
      "Menjual script tersebut ke instansi",
      "Membiarkan rekan kerja menggunakan cara manual karena mereka gaptek",
      "Memberitahu pimpinan agar saya dipromosikan",
    ],
    a: 1,
    s: [2, 5, 1, 3, 4],
    p: "TIK & Jejaring Kerja. Berbagi pengetahuan (Knowledge Sharing) mengenai inovasi teknologi meningkatkan efisiensi dan kapasitas seluruh anggota organisasi.",
    t: "Inovasi digital bernilai tinggi jika dibagikan untuk kemajuan institusi bersamasama.",
  },
  {
    q: "Anda melihat adanya fenomena *cyberbullying* yang marak di kalangan siswa sekolah tempat instansi Anda melakukan kemitraan. Anda mengusulkan program...",
    o: [
      "Membagikan bantuan sembako ke sekolah tersebut",
      "Melakukan sosialisasi Literasi Digital, Etika Bermedsos, dan dampak UU ITE",
      "Mencabut akses internet seluruh sekolah",
      "Membiarkannya karena itu urusan guru BP",
      "Menghukum siswa yang terlibat secara pidana orang dewasa",
    ],
    a: 1,
    s: [3, 5, 1, 2, 4],
    p: "TIK & Sosial Budaya. Fenomena *cyberbullying* berakar pada minimnya literasi digital dan adab berinternet. Edukasi proaktif adalah solusi yang terukur.",
    t: "Permasalahan TIK di masyarakat diselesaikan dengan edukasi Literasi Digital.",
  },
  {
    q: "Saat hari libur, Anda diajak tetangga untuk menghadiri perayaan hari besar agama yang berbeda dengan keyakinan Anda, sekadar untuk menikmati hidangan tradisional. Sikap Anda...",
    o: [
      "Menolak mentah-mentah dan menjauhi tetangga tersebut",
      "Menolak dengan alasan klasik namun tetap menghormati mereka",
      "Memenuhi undangan tersebut untuk silaturahmi tanpa mengikuti ritual ibadahnya",
      "Ikut melakukan ritual ibadahnya sebagai bentuk toleransi total",
      "Hadir sebentar lalu membungkus makanan yang banyak",
    ],
    a: 2,
    s: [1, 3, 5, 2, 4],
    p: "Sosial Budaya. Toleransi adalah membaur dalam hubungan sosial (hablum minannas) sambil menjaga batasan akidah masing-masing (tanpa ikut campur urusan ritual).",
    t: "Toleransi yang tepat: merawat kerukunan sosial namun tetap memegang teguh batasan ritual agama sendiri.",
  },
  {
    q: "Seorang warga mengurus dokumen yang belum lengkap persyaratannya, namun ia menyisipkan amplop tebal ke dalam map berkas Anda. Sikap Anda...",
    o: [
      "Menolak halus, mengembalikan amplop, dan menjelaskan kekurangan berkas agar ia lengkapi tanpa biaya tambahan",
      "Menerima amplop itu karena keikhlasannya dan segera memprosesnya",
      "Menyimpan amplop itu namun memintanya tetap melengkapi berkas besok",
      "Memarahi warga tersebut di depan umum agar ia malu",
      "Pura-pura tidak melihat dan membuang amplop itu ke laci",
    ],
    a: 0,
    s: [5, 1, 2, 4, 3],
    p: "Profesionalisme (Integritas) & Pelayanan Publik. Menolak gratifikasi dengan asertif namun tetap memberikan pelayanan profesional (edukasi persyaratan).",
    t: "Tolak gratifikasi secara langsung namun tetap layani masyarakat sesuai prosedur yang benar.",
  },
  {
    q: "Saat memimpin rapat, dua anggota tim Anda bersitegang dan berdebat keras dengan saling menyerang latar belakang primordial (suku). Sikap Anda...",
    o: [
      "Membela anggota yang se-suku dengan saya",
      "Membiarkan perdebatan memanas agar masalah cepat keluar",
      "Menghentikan perdebatan, menegur penggunaan sentimen SARA, dan mengembalikan fokus ke substansi pekerjaan",
      "Meninggalkan ruang rapat sampai mereka tenang sendiri",
      "Menghukum mereka berdua potong gaji",
    ],
    a: 2,
    s: [1, 2, 5, 3, 4],
    p: "Kepemimpinan, Sosial Budaya & Anti-Radikalisme. Pemimpin harus tegas memutus sentimen SARA dan mengarahkan kembali dinamika kelompok secara rasional.",
    t: "SARA tidak memiliki tempat dalam musyawarah profesional. Hentikan segera dan netralisir.",
  },
  {
    q: "Anda menemukan celah pada sistem keamanan *website* instansi yang berpotensi dimanfaatkan oleh peretas (hacker) untuk mengambil data warga. Langkah Anda...",
    o: [
      "Memanfaatkan celah tersebut untuk mengubah data saya sendiri",
      "Mengabaikan karena itu tugas administrator jaringan, bukan saya",
      "Mendokumentasikan celah tersebut, menyusun laporan insiden, dan segera menyerahkan secara rahasia kepada tim IT instansi",
      "Menyebarkannya di grup kantor agar semua berhati-hati",
      "Membuat status di medsos untuk menyindir tim IT",
    ],
    a: 2,
    s: [1, 2, 5, 3, 4],
    p: "TIK & Profesionalisme. Prosedur keamanan siber yang benar adalah *Responsible Disclosure* (Pelaporan Bertanggung Jawab) kepada pihak berwenang secara tertutup/rahasia.",
    t: "Laporan terkait keamanan siber harus rahasia (langsung ke administrator) untuk mencegah eksploitasi.",
  },
  {
    q: "Kantor Anda menerima penghargaan nasional. Banyak media datang untuk mewawancarai Anda karena Anda adalah ketua tim program tersebut. Sikap Anda...",
    o: [
      "Mengambil seluruh kredit dan kebanggaan untuk diri sendiri",
      "Menunjuk atasan saja yang berbicara karena takut salah",
      "Menerima wawancara tersebut namun menegaskan bahwa ini adalah hasil kerja keras dan sinergi dari seluruh anggota tim",
      "Menolak wawancara karena merasa terganggu privasinya",
      "Meminta honor kepada wartawan untuk wawancara eksklusif",
    ],
    a: 2,
    s: [2, 3, 5, 4, 1],
    p: "Jejaring Kerja (Kolaborasi). Menghargai capaian organisasi dengan mendistribusikan apresiasi (kredit) kepada kerja keras seluruh anggota tim.",
    t: "Prestasi kolektif harus diakui sebagai keberhasilan tim (team-player mentality).",
  },
  {
    q: "Rekan kerja Anda cuti melahirkan sehingga pekerjaannya dilimpahkan sementara kepada Anda yang sudah memiliki beban kerja normal. Sikap Anda...",
    o: [
      "Mengeluh kepada rekan lain setiap kali bekerja",
      "Menerima pelimpahan tugas tersebut dengan ikhlas dan mengatur jadwal ekstra untuk menyelesaikannya tanpa mengorbankan kualitas",
      "Membiarkan tugas titipan tersebut menumpuk hingga ia kembali bekerja",
      "Meminta bagian kepegawaian untuk merekrut tenaga honorer harian",
      "Mengerjakan asal-asalan yang penting selesai",
    ],
    a: 1,
    s: [2, 5, 1, 4, 3],
    p: "Profesionalisme (Loyalitas). Beban tambahan taktis (sementara) harus ditangani dengan manajemen waktu yang baik demi menjaga rantai roda instansi.",
    t: "Ambil tanggung jawab penuh jika mendapat limpahan tugas resmi, kerjakan sebaik-baiknya.",
  },
  {
    q: "Menjelang pemilihan umum, suasana politik di kantor mulai memanas karena polarisasi dukungan calon. Sebagai ASN muda, Anda akan...",
    o: [
      "Membentuk kelompok pendukung salah satu calon secara diam-diam",
      "Bersikap netral, fokus pada pekerjaan, dan tidak ikut memanas-manasi rekan yang berbeda pandangan",
      "Mencaci maki calon yang tidak saya sukai di grup kantor",
      "Menolak membicarakan apapun selain pekerjaan dengan rekan kerja",
      "Ikut kampanye di luar jam kerja dengan menggunakan pakaian sipil",
    ],
    a: 1,
    s: [2, 5, 1, 4, 3],
    p: "Profesionalisme (Netralitas ASN). Integritas abdi negara diuji lewat netralitas mutlak dalam perpolitikan praktis.",
    t: "Tunjukkan netralitas dan tidak larut dalam polarisasi politik di tempat kerja.",
  },
  {
    q: "Saat presentasi proyek di depan para pemangku kepentingan (stakeholder) dari kementerian luar negeri, terjadi kendala teknis *file* video hilang di laptop Anda. Langkah yang Anda ambil...",
    o: [
      "Menyalahkan panitia atas kekacauan tersebut",
      "Membatalkan presentasi sampai file ditemukan",
      "Tetap tenang, meminta maaf atas kendala tersebut, dan melanjutkan presentasi dengan menjelaskan narasi video secara lisan",
      "Menangis karena panik audiensnya adalah pejabat tinggi",
      "Memaksa hadirin menunggu hingga IT menemukan file tersebut berjam-jam",
    ],
    a: 2,
    s: [2, 3, 5, 1, 4],
    p: "Profesionalisme (Manajemen Krisis). Ketenangan dan kemampuan mengatasi kendala tanpa kehilangan fokus adalah ciri presentator profesional.",
    t: "Lanjutkan tugas/presentasi menggunakan alternatif (penjelasan verbal) apabila media digital bermasalah mendadak.",
  },
  {
    q: "Keluarga Anda merencanakan liburan tahunan yang sudah dipesan jauh-jauh hari. Tiba-tiba terjadi bencana alam berskala besar di wilayah kerja Anda yang menuntut pengerahan seluruh personel darurat. Sikap Anda...",
    o: [
      "Mematikan ponsel agar tidak dihubungi instansi",
      "Tetap pergi berlibur karena itu hak pribadi dan tiket tidak bisa di-*refund*",
      "Membatalkan/menunda liburan, dan segera bergabung dengan tim darurat di lapangan karena panggilan tugas negara",
      "Menyarankan atasan memanggil ASN yang masih lajang saja",
      "Datang apel sebentar lalu diam-diam pergi ke bandara",
    ],
    a: 2,
    s: [1, 2, 5, 4, 3],
    p: "Profesionalisme (Loyalitas). Dalam kondisi Force Majeure/darurat nasional, panggilan pengabdian (tugas negara) selalu mengesampingkan kepentingan pribadi.",
    t: "Dahulukan tugas kedaruratan kemanusiaan negara di atas hak liburan/pribadi.",
  },
  {
    q: "Seorang warga disabilitas rungu (tuli) kesulitan menyampaikan maksud perizinannya di loket Anda. Belum ada fasilitas juru bahasa isyarat di instansi. Anda akan...",
    o: [
      "Meminta warga tersebut datang lagi saat membawa penerjemah",
      "Menulis pesan di kertas atau mengetik di layar gawai agar bisa berkomunikasi dua arah dengannya",
      "Membiarkannya kebingungan karena Anda juga tidak paham isyarat",
      "Meminta bantuan pengunjung lain secara paksa",
      "Melayaninya belakangan setelah semua antrean habis",
    ],
    a: 1,
    s: [2, 5, 1, 3, 4],
    p: "Pelayanan Publik (Inklusivitas). Respons empati secara cepat memanfaatkan media visual (kertas/gawai) untuk mengatasi kendala bahasa/fisik.",
    t: "Berikan solusi paling praktis (menulis) untuk mengakomodasi kebutuhan pelayanan disabilitas tanpa menunda.",
  },
];

// Database Soal TKP Try Out 3 (40 Soal)
const tkpTryout3Data = [
  {
    q: "Saat Anda bertugas di loket, seorang warga mendesak agar berkasnya segera diproses karena ia ada jadwal penerbangan, padahal dokumen persyaratannya masih ada yang kurang. Sikap Anda...",
    o: [
      "Membantunya melengkapi dokumen tersebut agar ia cepat pergi",
      "Menolak dengan tegas dan menyuruhnya kembali antre jika sudah lengkap",
      "Menjelaskan dengan ramah kekurangan dokumennya dan memberikan prioritas jika ia bisa melengkapinya sebelum loket tutup",
      "Memprosesnya saja asalkan ia memberikan uang jaminan",
      "Meninggalkan loket sejenak untuk menghindari keributan",
    ],
    a: 2,
    s: [3, 4, 5, 1, 2],
    p: "Pelayanan Publik. Respons yang ramah, solutif, dan tetap berpegang pada aturan administrasi (dokumen harus lengkap) adalah kunci pelayanan prima.",
    t: "Berikan solusi yang adil tanpa melanggar prosedur administrasi.",
  },
  {
    q: "Anda melihat rekan kerja di sebelah Anda sering mengabaikan panggilan warga yang mengantre karena asyik bermain ponsel. Warga mulai terlihat kesal. Sikap Anda...",
    o: [
      "Melaporkan rekan tersebut ke atasan secara langsung",
      "Menegurnya dengan keras di depan warga agar ia malu",
      "Mengingatkannya secara pelan dan mengambil alih panggilan warga untuk sementara waktu",
      "Membiarkannya karena itu bukan tanggung jawab saya",
      "Ikut bermain ponsel agar tidak merasa terbebani sendiri",
    ],
    a: 2,
    s: [4, 2, 5, 1, 3],
    p: "Pelayanan Publik & Jejaring Kerja. Mengingatkan rekan secara etis (pelan/pribadi) dan mengambil inisiatif melayani warga demi menjaga citra instansi.",
    t: "Jaga citra instansi dengan *back-up* pelayanan dan ingatkan rekan secara elegan.",
  },
  {
    q: "Sistem antrean elektronik di instansi Anda tiba-tiba mati total. Pengunjung mulai berkerumun di depan meja pelayanan tanpa aturan. Apa yang Anda lakukan?",
    o: [
      "Bersembunyi di ruang belakang sampai sistem menyala kembali",
      "Berinisiatif membuat nomor antrean manual dari kertas dan mengatur pengunjung dengan pengeras suara",
      "Meminta petugas keamanan untuk membubarkan pengunjung sementara waktu",
      "Memarahi pengunjung yang tidak bisa antre dengan rapi",
      "Menunggu instruksi atasan sebelum mengambil tindakan",
    ],
    a: 1,
    s: [1, 5, 3, 2, 4],
    p: "Pelayanan Publik. Proaktif dan inovatif dalam memecahkan masalah krisis (sistem *down*) agar pelayanan tetap berjalan tertib.",
    t: "Ambil inisiatif solusi manual saat sistem digital bermasalah.",
  },
  {
    q: "Seorang lansia kebingungan mengisi formulir pendaftaran digital melalui tablet yang disediakan instansi. Padahal, SOP mengharuskan pengisian mandiri. Sikap Anda...",
    o: [
      "Menyuruhnya membaca panduan yang tertempel di dinding",
      "Membiarkannya karena SOP mewajibkan kemandirian",
      "Mendampingi dan menuntunnya langkah demi langkah hingga formulir selesai diisi",
      "Mengisikannya secara langsung agar cepat selesai",
      "Meminta pengunjung lain untuk membantunya",
    ],
    a: 2,
    s: [2, 1, 5, 4, 3],
    p: "Pelayanan Publik & TIK. Mengedukasi dan mendampingi kelompok rentan (lansia) dalam beradaptasi dengan teknologi pelayanan.",
    t: "Pemberdayaan melalui pendampingan lebih baik daripada sekadar mengambil alih pekerjaan.",
  },
  {
    q: "Jam istirahat baru saja dimulai dan Anda sedang makan siang. Tiba-tiba seorang ibu datang panik membawa anaknya yang terluka ringan meminta pertolongan pertama di klinik tempat Anda bekerja. Sikap Anda...",
    o: [
      "Menyelesaikan makan siang dengan cepat baru melayani",
      "Menyuruh ibu tersebut menunggu hingga jam istirahat selesai",
      "Segera meninggalkan makan siang dan memberikan pertolongan pertama pada anak tersebut",
      "Memanggil rekan lain yang sudah selesai makan",
      "Menyuruhnya pergi ke UGD rumah sakit terdekat",
    ],
    a: 2,
    s: [3, 1, 5, 4, 2],
    p: "Pelayanan Publik (Responsivitas). Kepentingan keselamatan dan pelayanan darurat selalu mengalahkan hak waktu istirahat pribadi.",
    t: "Dahulukan urgensi kemanusiaan di atas jam istirahat.",
  },
  {
    q: "Seorang warga marah-marah dan menuduh instansi Anda mempersulit izin usahanya, padahal izin tersebut terhambat karena warga belum membayar pajak daerah. Anda akan...",
    o: [
      "Membalas kemarahannya karena dia yang salah",
      "Mengusirnya keluar gedung demi keamanan",
      "Membawanya ke ruangan khusus, menenangkannya, lalu menunjukkan data tunggakan pajaknya secara transparan",
      "Membiarkannya marah sampai lelah sendiri",
      "Merekamnya dengan ponsel untuk diviralkan",
    ],
    a: 2,
    s: [2, 3, 5, 4, 1],
    p: "Pelayanan Publik. Menghadapi warga yang emosi harus dengan kepala dingin, tempat yang privasi, dan memberikan bukti data yang transparan.",
    t: "Atasi komplain dengan ketenangan, privasi, dan data pendukung.",
  },
  {
    q: "Ada pegawai baru di ruangan Anda yang pindahan dari daerah lain. Ia terlihat pendiam, kesulitan beradaptasi, dan sering menyendiri saat jam istirahat. Sikap Anda...",
    o: [
      "Membiarkannya karena nanti juga terbiasa sendiri",
      "Menyindirnya agar ia mau bergaul",
      "Berinisiatif mengajaknya makan siang bersama dan memperkenalkannya dengan rekan-rekan lain",
      "Hanya menyapanya jika ada urusan pekerjaan",
      "Melaporkan ke atasan bahwa ia kurang bersosialisasi",
    ],
    a: 2,
    s: [2, 1, 5, 3, 4],
    p: "Jejaring Kerja & Sosial Budaya. Memiliki inisiatif merangkul dan membantu adaptasi rekan baru mencerminkan kecerdasan interpersonal yang tinggi.",
    t: "Jadilah inisiator inklusivitas (merangkul) di lingkungan kerja.",
  },
  {
    q: "Dalam kelompok kerja, ada satu anggota yang sering menunda tugasnya sehingga menghambat *progress* tim secara keseluruhan. Sebagai sesama anggota tim, Anda...",
    o: [
      "Mengambil alih seluruh tugasnya agar cepat selesai",
      "Menegurnya dengan kasar di grup WhatsApp tim",
      "Mengajaknya bicara empat mata, menanyakan kendalanya, dan mengingatkan komitmen target tim",
      "Melaporkannya langsung ke HRD agar dipecat",
      "Diam saja karena takut merusak pertemanan",
    ],
    a: 2,
    s: [3, 2, 5, 4, 1],
    p: "Jejaring Kerja. Menjaga kekompakan tim dengan komunikasi asertif (empat mata) untuk mencari solusi tanpa menjatuhkan motivasi.",
    t: "Tegur secara privat (empat mata), puji di depan umum.",
  },
  {
    q: "Rapat penentuan strategi program tahunan berjalan sangat alot. Dua manajer saling mempertahankan argumen dengan nada tinggi sehingga suasana tidak kondusif. Anda sebagai peserta rapat...",
    o: [
      "Keluar ruangan karena tidak suka keributan",
      "Mendukung salah satu manajer yang paling dekat dengan Anda",
      "Mengambil jeda bicara (interupsi sopan), menengahi, dan mencoba merangkum titik temu dari kedua argumen tersebut",
      "Menikmati perdebatan tersebut tanpa ikut campur",
      "Memarahi kedua manajer agar bersikap dewasa",
    ],
    a: 2,
    s: [1, 2, 5, 3, 4],
    p: "Jejaring Kerja (Problem Solving). Berani mengambil peran sebagai penengah (mediator) yang objektif untuk mencari *win-win solution*.",
    t: "Jadilah mediator yang merangkum persamaaan, bukan memperuncing perbedaan.",
  },
  {
    q: "Atasan tiba-tiba menunjuk Anda menjadi ketua panitia acara kantor berskala besar minggu depan menggantikan ketua lama yang sakit. Anda merasa belum cukup pengalaman. Anda...",
    o: [
      "Menolak dengan halus dan menyarankan rekan lain",
      "Menerima dengan panik dan mengerjakannya sendirian",
      "Menerima tanggung jawab tersebut, segera mengumpulkan tim, mendelegasikan tugas, dan meminta arahan atasan",
      "Menerima namun membatalkan beberapa agenda agar lebih mudah",
      "Meminta penundaan acara hingga ketua lama sembuh",
    ],
    a: 2,
    s: [3, 2, 5, 4, 1],
    p: "Profesionalisme & Kepemimpinan. Siap menerima tantangan darurat dengan langsung mengorganisasi sumber daya (delegasi tim) secara terstruktur.",
    t: "Pemimpin responsif: terima tugas, kumpulkan tim, delegasikan.",
  },
  {
    q: "Saat pembagian tugas proyek, ada beberapa rekan yang mengeluh karena merasa mendapat bagian yang lebih sulit dan tidak adil. Anda sebagai ketua proyek...",
    o: [
      "Menyuruh mereka patuh saja pada keputusan awal",
      "Mengevaluasi kembali beban kerja bersama seluruh anggota secara transparan dan melakukan penyesuaian jika diperlukan",
      "Mengerjakan bagian yang sulit tersebut sendirian",
      "Membubarkan tim dan membentuk tim baru",
      "Mengancam akan memotong nilai kinerja mereka",
    ],
    a: 1,
    s: [2, 5, 3, 1, 4],
    p: "Kepemimpinan & Jejaring Kerja. Menunjukkan keterbukaan (transparansi) dan keadilan dalam mendistribusikan beban kerja tim.",
    t: "Evaluasi beban kerja secara terbuka bersama tim jika ada keluhan keadilan.",
  },
  {
    q: "Rekan kerja Anda yang sedang menangani klien penting tiba-tiba pingsan dan harus dirawat di rumah sakit. Berkas klien tersebut berantakan di mejanya. Anda...",
    o: [
      "Membiarkan berkas itu hingga rekan Anda sembuh",
      "Memberitahu klien untuk menunda urusan hingga bulan depan",
      "Menghubungi atasan, lalu berinisiatif merapikan dan melanjutkan penanganan klien tersebut sesuai catatan yang ada",
      "Menyuruh staf magang untuk mengurusnya",
      "Hanya menjenguk rekan tersebut tanpa mengurus pekerjaannya",
    ],
    a: 2,
    s: [1, 2, 5, 3, 4],
    p: "Jejaring Kerja (Empati & Tanggung Jawab). Mengamankan pekerjaan kolega yang terkena musibah agar pelayanan institusi tidak terputus.",
    t: "Ambil inisiatif melanjutkan tugas rekan yang sakit demi kelancaran organisasi.",
  },
  {
    q: "Dalam proyek gabungan, Anda harus bekerja sama dengan divisi lain yang budayanya sangat kaku dan birokratis, berbeda dengan divisi Anda yang fleksibel. Langkah Anda...",
    o: [
      "Memaksa mereka mengikuti gaya kerja divisi Anda",
      "Menolak bekerja sama dan mengajukan proyek terpisah",
      "Mempelajari alur birokrasi mereka dan mengusulkan kompromi prosedur kerja yang bisa diterima kedua belah pihak",
      "Menyindir gaya kerja mereka yang kuno",
      "Bekerja secara pasif dan mengikuti semua kemauan mereka tanpa inovasi",
    ],
    a: 2,
    s: [2, 1, 5, 3, 4],
    p: "Jejaring Kerja & Adaptasi. Beradaptasi silang (cross-functional) dengan memahami budaya divisi lain dan membangun kesepakatan (kompromi).",
    t: "Harmonisasikan perbedaan budaya kerja melalui kompromi prosedural.",
  },
  {
    q: "Anda ditempatkan bertugas di pelosok daerah yang memiliki pantangan adat memakan jenis ikan tertentu, padahal itu makanan favorit Anda. Sikap Anda...",
    o: [
      "Tetap memakannya secara terang-terangan karena itu hak asasi",
      "Memprotes tetua adat agar mengubah aturan kuno tersebut",
      "Menghormati pantangan tersebut dengan tidak mengonsumsinya selama berada di wilayah itu",
      "Sembunyi-sembunyi memasaknya di malam hari",
      "Mengajukan mutasi kembali ke kota",
    ],
    a: 2,
    s: [2, 1, 5, 3, 4],
    p: "Sosial Budaya (Adaptasi). Toleransi dan penghargaan terhadap kearifan lokal (di mana bumi dipijak, di situ langit dijunjung) sangat mutlak bagi ASN.",
    t: "Hormati pantangan adat setempat sebagai bentuk adaptasi kultural.",
  },
  {
    q: "Saat hari raya agama yang dianut tetangga sebelah rumah, mereka terlihat kerepotan menyiapkan acara dan banyak tamu yang datang. Padahal agama Anda berbeda dengannya. Anda...",
    o: [
      "Mengunci pintu rumah agar tidak terganggu suara bising",
      "Menawarkan bantuan untuk hal-hal umum seperti menata kursi atau mengatur parkiran kendaraan tamunya",
      "Pergi keluar kota agar tidak perlu berinteraksi",
      "Menegur mereka karena membuat keramaian di komplek",
      "Ikut campur dalam urusan ritual ibadah mereka",
    ],
    a: 1,
    s: [2, 5, 3, 1, 4],
    p: "Sosial Budaya. Menjalin kerukunan dan toleransi nyata antarumat beragama melalui bantuan sosial kemasyarakatan (tanpa menyentuh ritual).",
    t: "Toleransi diwujudkan melalui aksi sosial bantu-membantu secara umum.",
  },
  {
    q: "Dalam rapat RT, terjadi perdebatan panas mengenai alokasi dana desa. Perdebatan mulai melenceng ke arah sentimen suku penduduk asli dan pendatang. Sikap Anda...",
    o: [
      "Mendukung kelompok suku yang sama dengan Anda",
      "Meninggalkan rapat karena malas berdebat",
      "Berani bersuara untuk mengingatkan warga agar kembali ke substansi rapat dan menghentikan sentimen suku",
      "Merekam kejadian itu untuk diunggah ke media sosial",
      "Diam dan mengikuti keputusan suara terbanyak meski berbau diskriminasi",
    ],
    a: 2,
    s: [1, 2, 5, 3, 4],
    p: "Sosial Budaya & Anti-Radikalisme. Keberanian memotong sentimen SARA dalam forum publik untuk menjaga persatuan.",
    t: "Tengahi konflik bernuansa SARA dengan mengembalikan forum ke substansi rasional.",
  },
  {
    q: "Di kantor, seorang rekan sering mengejek logat bicara rekan lain yang berasal dari Indonesia Timur, meskipun berdalih hanya bercanda. Rekan yang diejek terlihat tidak nyaman. Anda...",
    o: [
      "Ikut tertawa karena memang lucu",
      "Menegur rekan tersebut secara pribadi bahwa candaannya menyinggung dan tidak etis di lingkungan kerja",
      "Membiarkan saja karena mereka bisa menyelesaikan sendiri",
      "Melaporkan langsung ke pimpinan puncak",
      "Mengolok-olok balik rekan yang mengejek tersebut",
    ],
    a: 1,
    s: [1, 5, 3, 4, 2],
    p: "Sosial Budaya. Menghentikan *micro-aggression* (agresi halus/ejekan budaya) untuk menjaga lingkungan kerja yang inklusif dan aman (psychological safety).",
    t: "Tegur candaan bernuansa rasis/budaya secara asertif demi kenyamanan kolega.",
  },
  {
    q: "Kantin kantor Anda selama ini hanya menyajikan makanan khas daerah tertentu. Ada beberapa pegawai dari daerah lain yang kesulitan mencari makanan cocok. Anda sebagai pengurus koperasi kantor...",
    o: [
      "Meminta mereka membawa bekal sendiri dari rumah",
      "Menyarankan pengelola kantin untuk menambah menu variatif dari berbagai nusantara atau menu netral nasional",
      "Membiarkan karena selera mayoritas lebih penting",
      "Memaksa pengelola kantin mengganti seluruh menu",
      "Membelikan mereka makanan di luar setiap hari",
    ],
    a: 1,
    s: [2, 5, 3, 1, 4],
    p: "Sosial Budaya & Jejaring Kerja. Mengakomodasi keragaman (keberagaman) di tempat kerja termasuk dari hal-hal kecil seperti keberagaman asupan/menu kantin.",
    t: "Fasilitasi kebutuhan kelompok minoritas untuk mewujudkan inklusivitas.",
  },
  {
    q: "Anda sedang terburu-buru menuju bandara untuk perjalanan dinas. Di jalan, ada rombongan upacara adat yang memakan separuh jalan sehingga lalu lintas tersendat. Anda...",
    o: [
      "Membunyikan klakson panjang agar mereka menyingkir",
      "Marah-marah dari dalam mobil",
      "Bersabar, menghormati prosesi adat tersebut, dan perlahan mencari rute alternatif melalui aplikasi navigasi",
      "Turun dari mobil dan membubarkan acara tersebut",
      "Berbalik arah dan membatalkan perjalanan dinas",
    ],
    a: 2,
    s: [1, 2, 5, 3, 4],
    p: "Sosial Budaya. Menghargai prosesi budaya/kearifan lokal di ruang publik serta menggunakan manajemen waktu (rute alternatif).",
    t: "Hormati budaya jalanan, cari solusi rute alternatif.",
  },
  {
    q: "Anda baru saja pindah rumah ke sebuah desa. Ketua RT setempat meminta iuran pembangunan fasilitas desa yang jumlahnya cukup besar bagi Anda. Sikap Anda...",
    o: [
      "Menolak dengan kasar karena Anda tidak pernah memakainya",
      "Membayar penuh meskipun harus meminjam uang",
      "Berkomunikasi baik-baik dengan ketua RT, menjelaskan kondisi keuangan, dan bernegosiasi memberikan kontribusi sesuai kemampuan",
      "Mengajak warga pendatang lain untuk demo menolak iuran",
      "Diam-diam pindah rumah lagi",
    ],
    a: 2,
    s: [2, 3, 5, 1, 4],
    p: "Sosial Budaya & Problem Solving. Menjaga harmoni sosial (tidak menolak kasar) sambil tetap realistis dan transparan mengenai kemampuan finansial.",
    t: "Gunakan komunikasi asertif (negosiasi) untuk menengahi tuntutan sosial dan kemampuan pribadi.",
  },
  {
    q: "Instansi Anda mewajibkan penggunaan aplikasi presensi dan laporan harian yang baru. Aplikasinya rumit dan sering *error* (bug). Tanggapan Anda...",
    o: [
      "Kembali menggunakan absensi kertas secara sepihak",
      "Mengeluh di media sosial tentang sistem IT kantor yang buruk",
      "Tetap mencoba menggunakannya, mencatat *error* yang terjadi, dan memberikan *feedback* tertulis yang membangun ke tim IT",
      "Menugaskan staf honorer untuk mengisi aplikasi tersebut untuk saya",
      "Menunggu sistem sempurna baru mau absen",
    ],
    a: 2,
    s: [2, 1, 5, 3, 4],
    p: "TIK & Profesionalisme. Mendukung transformasi digital dengan berpartisipasi aktif memberikan *feedback* (masukan) perbaikan bug aplikasi.",
    t: "Bantu penyempurnaan sistem baru dengan memberikan *feedback* yang konstruktif.",
  },
  {
    q: "Rekan kerja Anda secara tidak sengaja mengunggah dokumen internal yang berisi data sensitif masyarakat ke Google Drive publik tanpa pengaman kata sandi. Anda menyadarinya. Anda...",
    o: [
      "Mendownload data tersebut untuk disimpan pribadi",
      "Segera menghubungi rekan tersebut agar mencabut akses publiknya, lalu melapor ke atasan sebagai mitigasi risiko keamanan data",
      "Membiarkan saja karena bukan Anda yang mengunggah",
      "Menceritakan kebodohan rekan Anda ke divisi lain",
      "Menegurnya dan menyuruhnya mengundurkan diri",
    ],
    a: 1,
    s: [1, 5, 3, 2, 4],
    p: "TIK & Profesionalisme. Tanggap terhadap ancaman kebocoran data (*data breach*) dengan segera melakukan *containment* (menutup akses) dan melapor hierarki.",
    t: "Segera tutup akses kebocoran data dan laporkan sebagai mitigasi risiko.",
  },
  {
    q: "Akhir bulan tiba, seluruh tim sibuk menyusun laporan rekapitulasi secara manual (copy-paste) yang memakan waktu lama. Anda kebetulan menguasai formula *VLOOKUP* dan *Macro Excel* yang bisa mengotomasisasinya. Anda...",
    o: [
      "Diam saja agar tidak diberi tugas tambahan oleh atasan",
      "Menjual jasa pembuatan laporan ke teman-teman tim",
      "Berinisiatif membuatkan *template* otomatis tersebut lalu mengajarkannya ke seluruh anggota tim untuk mempercepat kerja",
      "Menyombongkan diri bahwa laporan Anda selesai paling cepat",
      "Mengerjakan punya sendiri lalu tidur siang di meja",
    ],
    a: 2,
    s: [2, 1, 5, 3, 4],
    p: "TIK & Jejaring Kerja. *Knowledge sharing* (berbagi pengetahuan digital) untuk meningkatkan efisiensi dan kapasitas (kapabilitas) seluruh tim.",
    t: "Gunakan kemahiran TIK untuk menciptakan alat bantu kerja (template) bagi tim.",
  },
  {
    q: "Di grup WhatsApp keluarga besar Anda, sering ada anggota keluarga yang menyebarkan berita bohong (hoaks) tentang vaksin dan kebijakan pemerintah. Sikap Anda...",
    o: [
      "Keluar dari grup tanpa penjelasan",
      "Ikut menyebarkan hoaks tersebut agar disukai keluarga",
      "Memberikan tautan artikel cek fakta (klarifikasi resmi) dengan bahasa yang santun agar keluarga tidak termakan hoaks",
      "Memaki-maki pengirim pesan tersebut agar ia kapok",
      "Diam saja karena menghormati orang yang lebih tua",
    ],
    a: 2,
    s: [3, 1, 5, 2, 4],
    p: "TIK & Anti-Radikalisme. Literasi digital: memerangi hoaks menggunakan bukti (cek fakta/klarifikasi) yang disampaikan dengan etika yang baik.",
    t: "Lawan disinformasi/hoaks dengan melampirkan *link* verifikasi fakta secara santun.",
  },
  {
    q: "Anda sedang bertugas di lapangan (luar kota) dan diharuskan mengikuti rapat koordinasi penting secara virtual (Zoom). Namun, sinyal internet di lokasi Anda sangat tidak stabil. Langkah Anda...",
    o: [
      "Membatalkan rapat tanpa memberi tahu panitia",
      "Mencari lokasi terdekat yang memiliki sinyal kuat (seperti kafe/kantor desa), atau setidaknya bergabung dengan mode panggilan suara (*audio only*) dan memberitahu kendala ke atasan",
      "Tetap di tempat dan pasrah jika terputus-putus",
      "Menyuruh rekan kerja menggantikan posisi Anda sepenuhnya",
      "Kembali ke kota saat itu juga dan meninggalkan tugas lapangan",
    ],
    a: 1,
    s: [1, 5, 3, 4, 2],
    p: "TIK & Profesionalisme. Ketangguhan (*agility*) mencari solusi konektivitas teknis demi memenuhi tanggung jawab koordinasi profesional.",
    t: "Cari solusi koneksi alternatif atau gunakan mode hemat *bandwidth* (audio only) sambil melapor.",
  },
  {
    q: "Anda secara tidak sengaja menemukan bahwa salah satu bawahan Anda sering membagikan konten yang memprovokasi kebencian antargolongan (SARA) di akun media sosial anonim miliknya. Tindakan Anda...",
    o: [
      "Membiarkannya karena itu akun pribadi dan hak asasinya",
      "Memanggilnya secara formal, melakukan pembinaan terkait kode etik bermedia sosial ASN, dan mendokumentasikan peringatan tersebut",
      "Langsung memecatnya hari itu juga",
      "Ikut berkomentar anonim untuk menyerangnya",
      "Menyebarkan rahasia akun anonim tersebut ke seluruh kantor",
    ],
    a: 1,
    s: [2, 5, 3, 1, 4],
    p: "TIK & Anti-Radikalisme. Penegakan disiplin ASN bermedsos melalui pembinaan hierarkis dan administratif (terdokumentasi).",
    t: "Lakukan pembinaan formal dan teguran tercatat atas pelanggaran etika digital bawahan.",
  },
  {
    q: "Atasan Anda yang sudah mendekati masa pensiun meminta tolong diajari cara menggunakan media sosial Instagram untuk mempublikasikan kegiatan kedinasannya. Beliau sangat lambat belajar. Anda...",
    o: [
      "Menolaknya karena itu membuang-buang waktu saya",
      "Menawarkan untuk mengelola akunnya saja agar cepat selesai",
      "Mengajarinya dengan sabar secara bertahap, serta membuatkan panduan singkat bergambar agar beliau bisa berlatih mandiri",
      "Menghindar jika bertemu atasan tersebut",
      "Menyuruh bawahan lain yang mengajarinya",
    ],
    a: 2,
    s: [1, 3, 5, 2, 4],
    p: "TIK & Pelayanan. Melatih generasi *digital immigrant* (senior) membutuhkan kesabaran dan metode pembelajaran yang tepat (panduan visual).",
    t: "Tunjukkan empati teknologis dengan memberikan panduan tertulis/bergambar bagi senior.",
  },
  {
    q: "Sebagai bendahara pengeluaran, Anda diperintahkan oleh atasan langsung untuk me-markup (menggelembungkan) nota pembelian barang untuk keperluan acara pribadi atasan. Sikap Anda...",
    o: [
      "Mengikuti perintah tersebut karena takut dipecat",
      "Menolak dengan tegas, mengingatkan risiko hukum korupsi, dan tetap mencatat sesuai pengeluaran riil (sebenarnya)",
      "Melakukannya kali ini saja sambil meminta bagian",
      "Mengundurkan diri hari itu juga",
      "Mengubah angka sedikit saja agar tidak terlalu ketara",
    ],
    a: 1,
    s: [1, 5, 2, 4, 3],
    p: "Profesionalisme (Integritas). Menolak keras perintah atasan yang bertentangan dengan hukum dan kode etik (tindak pidana korupsi).",
    t: "Integritas absolut: berani menolak perintah *markup*/korupsi dari siapa pun.",
  },
  {
    q: "Dalam perjalanan menuju kantor untuk presentasi penting, terjadi kecelakaan beruntun yang memblokir total jalan tol. Anda dipastikan akan terlambat 1 jam. Langkah profesional yang Anda lakukan...",
    o: [
      "Pasrah dan menunggu kemacetan urai tanpa mengabari siapapun",
      "Segera menelepon atasan dan panitia rapat, menjelaskan situasi darurat (sambil mengirim foto), serta mengirimkan *file* presentasi agar rekan lain bisa memulai lebih dulu",
      "Meminta rapat dibatalkan dan diganti hari besok",
      "Putar balik melawan arah tol untuk mencari jalan tikus",
      "Memarahi petugas tol karena tidak becus mengatur lalu lintas",
    ],
    a: 1,
    s: [2, 5, 3, 1, 4],
    p: "Profesionalisme (Tanggung Jawab). Manajemen krisis komunikasi: segera mengabari (*early warning*), berikan bukti objektif, dan tawarkan solusi (*back-up file*).",
    t: "Saat akan terlambat karena *force majeure*, segera komunikasi dan kirimkan materi/tugas ke rekan.",
  },
  {
    q: "Hari Minggu ini Anda sudah berjanji membawa anak-anak Anda berekreasi. Namun, pada Sabtu malam pimpinan menelepon menginstruksikan Anda bergabung ke tim krisis darurat nasional akibat erupsi gunung berapi. Keputusan Anda...",
    o: [
      "Mematikan telepon dan pura-pura tidak mendengar",
      "Menolak dengan alasan sudah janji dengan anak-anak",
      "Menerima panggilan tugas tersebut, memberikan pengertian yang lembut kepada anak-anak, dan berjanji mengganti jadwal liburan di lain waktu",
      "Memarahi atasan karena mengganggu hari libur",
      "Menyuruh bawahan Anda untuk berangkat menggantikan Anda",
    ],
    a: 2,
    s: [1, 2, 5, 3, 4],
    p: "Profesionalisme (Loyalitas). Panggilan kemanusiaan/darurat nasional bagi ASN wajib didahulukan. Manajemen konflik keluarga dilakukan dengan komunikasi persuasif (pengertian).",
    t: "Tugas darurat instansi berada di atas urusan hiburan keluarga.",
  },
  {
    q: "Di depan para direksi, atasan Anda memarahi Anda atas kegagalan suatu target. Padahal kegagalan tersebut murni kesalahan rekan kerja divisi lain yang terlambat menyuplai data, dan atasan Anda belum tahu kronologinya. Sikap Anda...",
    o: [
      "Memotong pembicaraan atasan dan langsung menunjuk rekan yang salah",
      "Menerima teguran tersebut tanpa ekspresi perlawanan, dan nanti secara privat memberikan laporan kronologi sebenarnya beserta bukti kepada atasan",
      "Menangis dan berlari keluar ruangan rapat",
      "Mendebat atasan di depan direksi demi harga diri",
      "Menghukum rekan kerja divisi lain secara sepihak",
    ],
    a: 1,
    s: [3, 5, 1, 2, 4],
    p: "Profesionalisme. Menjaga wibawa atasan dan forum di depan publik. Klarifikasi dan pembelaan diri berbasis data dilakukan secara *one-on-one* (privat) setelah forum selesai.",
    t: "Terima kritikan publik secara profesional, lakukan klarifikasi secara privat dengan data.",
  },
  {
    q: "Anda sudah bekerja selama 7 tahun di posisi staf administrasi yang sama. Anda merasa sangat bosan dengan rutinitas harian yang repetitif. Apa yang Anda lakukan?",
    o: [
      "Mengurangi ritme kerja dan sering bolos",
      "Mengajukan *resign* (pengunduran diri) tanpa rencana matang",
      "Mencari inovasi baru dalam menyelesaikan rutinitas, mengajukan diri untuk ikut diklat/sertifikasi baru, atau meminta proyek tambahan kepada atasan untuk pengembangan diri",
      "Sering bermain *game* saat jam kerja untuk membunuh bosan",
      "Menyebarkan energi negatif dan keluhan ke rekan-rekan lain",
    ],
    a: 2,
    s: [2, 3, 5, 1, 4],
    p: "Profesionalisme (Semangat Berprestasi). Kebosanan karier (*career plateau*) harus dipecahkan dengan motivasi intrinsik: proaktif *upskilling* (tambah ilmu) dan mencari tantangan baru di internal instansi.",
    t: "Atasi kebosanan dengan proaktif mengembangkan diri (inovasi, diklat, proyek baru).",
  },
  {
    q: "Seorang pengusaha yang baru saja mendapatkan proyek dari instansi Anda secara sah, tiba-tiba mengirimkan parsel mewah dan tiket liburan ke rumah Anda sebagai ucapan 'terima kasih'. Sikap Anda...",
    o: [
      "Menerimanya karena proyek sudah sah dan tidak memengaruhi keputusan",
      "Mengembalikannya dengan halus disertai surat penjelasan mengenai aturan larangan gratifikasi ASN",
      "Menerimanya lalu disumbangkan ke panti asuhan tanpa lapor",
      "Mengambil tiketnya namun mengembalikan parselnya",
      "Membuangnya ke tempat sampah di depan kurir",
    ],
    a: 1,
    s: [2, 5, 3, 4, 1],
    p: "Profesionalisme (Integritas). Segala bentuk penerimaan hadiah terkait jabatan (*gratifikasi*) pasca layanan tetaplah dilarang. Tolak dengan halus dan edukasi tentang aturan integritas ASN.",
    t: "Tolak segala bentuk gratifikasi ('uang/hadiah terima kasih') dengan mengedukasi aturannya.",
  },
  {
    q: "Anda sering melihat beberapa pegawai senior keluar kantor pada pukul 10.00 untuk nongkrong di warung kopi hingga jam makan siang usai. Anda sebagai pegawai junior akan...",
    o: [
      "Ikut bergabung dengan mereka agar diterima di pergaulan",
      "Menegur mereka di warung kopi dengan keras",
      "Tetap berada di meja kerja melaksanakan tugas dengan disiplin, serta tidak terpengaruh budaya buruk (korupsi waktu) tersebut",
      "Merekam mereka dan menyebarkannya ke akun gosip",
      "Meminta mereka membawakan kopi untuk saya",
    ],
    a: 2,
    s: [2, 3, 5, 1, 4],
    p: "Profesionalisme. Integritas kedisiplinan diri (keteladanan). Ketika tidak memiliki *power* langsung untuk mengubah senior, mulailah dengan tidak ikut-ikutan dan membentengi diri dari budaya toksik.",
    t: "Bentengi diri dari budaya korupsi waktu. Tetap disiplin di meja kerja.",
  },
  {
    q: "Seorang sahabat karib Anda sejak kuliah belakangan ini sering berargumen menolak sistem demokrasi Pancasila dan menyatakan negara harus diganti dengan sistem khilafah/agama tertentu secara radikal. Sikap Anda...",
    o: [
      "Memutus hubungan pertemanan seketika tanpa bicara",
      "Mendengarkan dan diam-diam setuju dengannya",
      "Mengingatkan dengan tegas bahaya ideologinya terhadap keutuhan NKRI, berdebat secara rasional, dan menjaga jarak jika ia berpotensi melakukan tindakan makar/teror",
      "Melaporkannya ke polisi tanpa peringatan",
      "Mengajaknya ikut pengajian Anda untuk membalasnya",
    ],
    a: 2,
    s: [3, 1, 5, 4, 2],
    p: "Anti-Radikalisme. Intervensi personal: mengingatkan dengan argumentasi rasional tentang bahaya anti-Pancasila. Jika ekskalasi membahayakan negara, menjaga jarak/melapor adalah langkah preventif.",
    t: "Lakukan kontra-narasi rasional pada teman dekat, dan buat batasan tegas jika mulai merusak NKRI.",
  },
  {
    q: "Di grup WhatsApp RT, salah satu keluarga Anda sering membagikan *link* ceramah dari tokoh yang berstatus tersangka provokasi SARA dan ujaran kebencian. Anda akan...",
    o: [
      "Membela tokoh tersebut karena menghormati keluarga",
      "Diam saja karena takut dikucilkan keluarga",
      "Menyampaikan secara pribadi (*direct message*) ke anggota keluarga tersebut agar berhati-hati membagikan konten yang memuat ujaran kebencian karena melanggar UU ITE dan merusak kedamaian",
      "Menghapus nomor keluarga tersebut dari kontak",
      "Ikut menyebarkannya ke grup kantor",
    ],
    a: 2,
    s: [1, 3, 5, 4, 2],
    p: "Anti-Radikalisme & TIK. Menggunakan komunikasi privat untuk mengedukasi keluarga mengenai bahaya hukum (UU ITE) dan dampak sosial (intoleransi) dari penyebaran konten kebencian.",
    t: "Edukasi keluarga penyebar ujaran kebencian melalui jalur pribadi (*DM/japri*).",
  },
  {
    q: "Anda diundang ke forum diskusi keagamaan bulanan di instansi. Namun belakangan, pemateri yang diundang selalu menyudutkan penganut agama lain dan menanamkan sikap intoleran. Tindakan Anda...",
    o: [
      "Tetap rutin hadir dan mulai menyerap ajarannya",
      "Tidak pernah hadir lagi tanpa memberikan *feedback* apapun",
      "Berhenti mengikuti forum tersebut dan memberikan laporan/saran konstruktif kepada pimpinan/panitia pembina mental (Bintal) agar menyeleksi pemateri yang moderat dan pro-NKRI",
      "Membuat keributan saat pemateri sedang bicara",
      "Mengumpulkan masa untuk mendemo panitia",
    ],
    a: 2,
    s: [1, 3, 5, 2, 4],
    p: "Anti-Radikalisme. ASN memiliki kewajiban menjaga iklim moderasi beragama di instansinya. Melaporkan *feedback* objektif ke pimpinan/Bintal adalah langkah perlindungan institusi dari paham ekstrem.",
    t: "Gunakan jalur pelaporan Bintal (Pembinaan Mental) untuk menyaring radikalisme berkedok kajian agama.",
  },
  {
    q: "Menjelang peringatan 17 Agustus, Anda melihat tiang bendera di depan rumah seorang warga kondisinya miring dan benderanya kusam, kotor, bahkan robek. Sikap Anda...",
    o: [
      "Membiarkannya karena itu urusan pribadi warga tersebut",
      "Memfotonya dan memviralkan warga tersebut sebagai pengkhianat negara",
      "Mendatangi warga tersebut dengan ramah, menjelaskan etika/undang-undang perlakuan terhadap lambang negara, dan jika perlu membantunya mengganti dengan bendera yang layak",
      "Mencabut bendera tersebut secara paksa di malam hari",
      "Melaporkan warga tersebut ke kantor polisi setempat",
    ],
    a: 2,
    s: [2, 1, 5, 3, 4],
    p: "Anti-Radikalisme (Nasionalisme). Rasa hormat pada lambang negara diwujudkan dengan edukasi kultural dan persuasif, bukan *shaming* (memviralkan) atau represi.",
    t: "Pilih tindakan persuasif, edukatif, dan tolong-menolong terkait penghargaan simbol negara.",
  },
  {
    q: "Dalam sebuah *postingan* instansi pemerintah di media sosial, terjadi *flame war* (perang komentar SARA) antar netizen yang saling menghina agama. Sebagai ASN pengelola akun tersebut, langkah terukur Anda...",
    o: [
      "Ikut membalas komentar menggunakan akun pribadi dengan emosi",
      "Membiarkan saja agar interaksi (*engagement*) akun instansi meningkat",
      "Memoderasi/menghapus komentar yang mengandung SARA (ujaran kebencian), serta merilis pernyataan resmi imbauan ketertiban dan toleransi di kolom komentar",
      "Menonaktifkan (delete) seluruh akun media sosial instansi",
      "Melaporkan semua netizen tersebut ke interpol",
    ],
    a: 2,
    s: [1, 2, 5, 3, 4],
    p: "Anti-Radikalisme & TIK. *Community Management*: admin pemerintah wajib menjaga ruang digital publik tetap bersih dari intoleransi dan kebencian melalui moderasi aktif dan imbauan damai.",
    t: "Lakukan moderasi aktif (hapus ujaran kebencian SARA) pada aset digital negara.",
  },
  {
    q: "Anak Anda yang masih SMP bertanya mengapa kita harus berpedoman pada Pancasila, padahal banyak negara maju yang bebas liberal. Penjelasan Anda...",
    o: [
      "Menyuruhnya diam dan tidak perlu banyak tanya",
      "Menjelaskan bahwa jika liberal, kita akan mudah dijajah kembali",
      "Menjelaskan dengan bahasa yang mudah dipahami bahwa Pancasila adalah rumah bersama yang paling adil untuk menyatukan ribuan perbedaan suku/agama di Indonesia agar bisa maju tanpa perang saudara",
      "Menyuruhnya bertanya pada guru PPKn di sekolah",
      "Memarahinya karena berpikiran kebarat-baratan",
    ],
    a: 2,
    s: [1, 3, 5, 4, 2],
    p: "Anti-Radikalisme (Penanaman Nilai). Mengedukasi generasi muda (anak) tentang filosofi dasar negara dengan logika rasional yang mudah dipahami (pemersatu keberagaman).",
    t: "Pancasila adalah titik temu (kalimatun sawa) yang menjaga keutuhan dalam keberagaman.",
  },
];

const tryOuts = [
  {
    category: "TWK",
    title: "Try Out 1 - TWK",
    description:
      "Tes Wawasan Kebangsaan (35 Soal). Uji pemahaman materi pilar negara, nasionalisme, integritas, dan literasi bahasa.",
    questions: tryout1Data,
  },
  {
    category: "TWK",
    title: "Try Out 2 - TWK",
    description:
      "Tes Wawasan Kebangsaan (35 Soal). Uji lanjutan mengenai pilar UUD 1945, wawasan nusantara, bela negara, dan tata bahasa.",
    questions: tryout2Data,
  },
  {
    category: "TWK",
    title: "Try Out 3 - TWK",
    description:
      "Tes Wawasan Kebangsaan (35 Soal). Uji kemampuan analisis soal etnosentrisme, disintegrasi, pilar perundang-undangan, dan paragraf.",
    questions: tryout3Data,
  },
  {
    category: "TIU",
    title: "Try Out 1 - TIU",
    description:
      "Tes Intelegensia Umum (30 Soal). Melatih kemampuan verbal (sinonim, silogisme), penalaran analitis, deret angka, hitungan kuantitatif.",
    questions: tiuTryout1Data,
  },
  {
    category: "TIU",
    title: "Try Out 2 - TIU",
    description:
      "Tes Intelegensia Umum (30 Soal). Latihan lanjutan analogi kata, silogisme, hitungan cepat pecahan, hingga logika figural.",
    questions: tiuTryout2Data,
  },
  {
    category: "TKP",
    title: "Try Out 1 - TKP",
    description:
      "Tes Karakteristik Pribadi (40 Soal). Evaluasi perilaku dan integritas dalam simulasi dunia kerja berbasis nilai-nilai ASN.",
    questions: tkpTryout1Data,
  },
  {
    category: "TKP",
    title: "Try Out 2 - TKP",
    description:
      "Tes Karakteristik Pribadi (40 Soal). Evaluasi lanjutan Pelayanan Publik, Jejaring Kerja, TIK, dan Anti Radikalisme.",
    questions: tkpTryout2Data,
  },
  {
    category: "TKP",
    title: "Try Out 3 - TKP",
    description:
      "Tes Karakteristik Pribadi (40 Soal). Pemantapan soal HOTS pelayanan inklusif, toleransi kerukunan, integritas, dan adaptasi TIK.",
    questions: tkpTryout3Data,
  },
];

/* =========================================================
         UI & LOGIKA — Mode Belajar (feedback instan per soal)
         ========================================================= */
const CAT = {
  TWK: {
    name: "Tes Wawasan Kebangsaan",
    short: "TWK",
    pass: 65,
    unit: 5,
    color: "indigo",
    tint: "bg-indigo-50 text-indigo-600",
    bar: "bg-indigo-500",
    icon: '<path d="M4 21V4M4 5h11l-1.5 3.5L15 12H4" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  TIU: {
    name: "Tes Intelegensia Umum",
    short: "TIU",
    pass: 80,
    unit: 5,
    color: "emerald",
    tint: "bg-emerald-50 text-emerald-600",
    bar: "bg-emerald-500",
    icon: '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  TKP: {
    name: "Tes Karakteristik Pribadi",
    short: "TKP",
    pass: 156,
    unit: 5,
    color: "amber",
    tint: "bg-amber-50 text-amber-600",
    bar: "bg-amber-500",
    icon: '<path d="M16 11a3 3 0 100-6 3 3 0 000 6zM8 12a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 2.7-5 6-5s6 2 6 5M14 15.3c.6-.2 1.3-.3 2-.3 3 0 6 1.8 6 5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
};
const LABELS = ["A", "B", "C", "D", "E"];
const STORE_KEY = "skd_belajar_progress_v1";

const ico = (path, cls = "w-5 h-5") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${path}</svg>`;
const I = {
  back: '<path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/>',
  next: '<path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/>',
  check:
    '<path d="M5 12.5l4.5 4.5L19 7.5" stroke-linecap="round" stroke-linejoin="round"/>',
  x: '<path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 016.5 3H20v16H6.5A2.5 2.5 0 004 21.5v-16zM4 21.5A2.5 2.5 0 016.5 19H20" stroke-linecap="round" stroke-linejoin="round"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" stroke-linecap="round" stroke-linejoin="round"/>',
  redo: '<path d="M3 12a9 9 0 109-9 9.8 9.8 0 00-6.7 2.7L3 8M3 3v5h5" stroke-linecap="round" stroke-linejoin="round"/>',
  home: '<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10" stroke-linecap="round" stroke-linejoin="round"/>',
};

/* ---------- progres tersimpan ---------- */
const loadStore = () => {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch (e) {
    return {};
  }
};
const saveStore = () => {
  try {
    const s = loadStore();
    s[tryOuts[state.idx].title] = state.answers;
    localStorage.setItem(STORE_KEY, JSON.stringify(s));
  } catch (e) {}
};

let state = { view: "home", cat: "TWK", idx: null, q: 0, answers: [] };

/* ---------- skor ---------- */
const pointOf = (to, qi, ans) => {
  if (ans === null || ans === undefined) return 0;
  const q = to.questions[qi];
  return to.category === "TKP" ? q.s[ans] : ans === q.a ? 5 : 0;
};
const calcScore = (to, answers) =>
  answers.reduce((t, a, i) => t + pointOf(to, i, a), 0);
const maxScoreOf = (to) => to.questions.length * 5;

/* ---------- aksi ---------- */
window.setCat = (c) => {
  state.cat = c;
  render();
};
window.openSet = (idx) => {
  const to = tryOuts[idx];
  const saved = loadStore()[to.title];
  state.idx = idx;
  state.answers =
    Array.isArray(saved) && saved.length === to.questions.length
      ? saved
      : new Array(to.questions.length).fill(null);
  const firstOpen = state.answers.findIndex((a) => a === null);
  state.q = firstOpen === -1 ? 0 : firstOpen;
  state.view = state.answers.every((a) => a !== null) ? "result" : "quiz";
  render(true);
};
window.goHome = () => {
  state.view = "home";
  render(true);
};
window.goQ = (i) => {
  state.q = i;
  render(true);
};
window.pick = (i) => {
  if (state.answers[state.q] !== null) return;
  state.answers[state.q] = i;
  saveStore();
  render(false);
  const fb = document.getElementById("feedback");
  if (fb)
    setTimeout(
      () => fb.scrollIntoView({ behavior: "smooth", block: "nearest" }),
      60,
    );
};
window.nextQ = () => {
  const n = tryOuts[state.idx].questions.length;
  if (state.q < n - 1) {
    state.q++;
    render(true);
  } else {
    state.view = "result";
    render(true);
  }
};
window.prevQ = () => {
  if (state.q > 0) {
    state.q--;
    render(true);
  }
};
window.resetSet = () => {
  const to = tryOuts[state.idx];
  state.answers = new Array(to.questions.length).fill(null);
  state.q = 0;
  state.view = "quiz";
  saveStore();
  render(true);
};
window.reviewWrong = () => {
  const to = tryOuts[state.idx];
  const i = state.answers.findIndex((a, qi) =>
    to.category === "TKP"
      ? a !== null && to.questions[qi].s[a] < 5
      : a !== to.questions[qi].a,
  );
  state.q = i === -1 ? 0 : i;
  state.view = "quiz";
  render(true);
};

/* ---------- HOME ---------- */
const homeView = () => {
  const store = loadStore();
  const tabs = Object.keys(CAT)
    .map((k) => {
      const on = state.cat === k;
      return `<button onclick="setCat('${k}')" class="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition ${on ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}">
            <span class="${on ? CAT[k].tint : "text-slate-400"} w-6 h-6 rounded-lg flex items-center justify-center">${ico(CAT[k].icon, "w-4 h-4")}</span>${k}</button>`;
    })
    .join("");

  const cards = tryOuts
    .map((to, idx) => ({ to, idx }))
    .filter((x) => x.to.category === state.cat)
    .map(({ to, idx }) => {
      const saved = store[to.title];
      const total = to.questions.length;
      const done = Array.isArray(saved)
        ? saved.filter((a) => a !== null).length
        : 0;
      const pct = Math.round((done / total) * 100);
      const c = CAT[to.category];
      const label =
        done === 0
          ? "Mulai belajar"
          : done === total
            ? "Lihat hasil"
            : "Lanjutkan";
      return `<button onclick="openSet(${idx})" class="text-left bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition group fade-up">
            <div class="flex items-start justify-between gap-3">
              <div class="w-11 h-11 rounded-xl ${c.tint} flex items-center justify-center shrink-0">${ico(c.icon, "w-5 h-5")}</div>
              <span class="text-xs font-semibold text-slate-400 mt-1">${total} soal</span>
            </div>
            <h3 class="mt-4 font-bold text-slate-900">${to.title}</h3>
            <p class="mt-1 text-sm text-slate-500 leading-relaxed line-clamp-2">${to.description.replace(/^[^.]*\.\s*/, "")}</p>
            <div class="mt-5 flex items-center gap-3">
              <div class="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div class="h-full ${c.bar} rounded-full" style="width:${pct}%"></div></div>
              <span class="text-xs font-medium text-slate-500 tabular-nums">${done}/${total}</span>
            </div>
            <div class="mt-4 flex items-center gap-1 text-sm font-semibold text-indigo-600 group-hover:gap-2 transition-all">${label} ${ico(I.next, "w-4 h-4")}</div>
          </button>`;
    })
    .join("");

  return `
        <div class="min-h-screen">
          <header class="max-w-5xl mx-auto px-5 pt-6 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l9 4-9 4-9-4 9-4zM6 10v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <span class="font-extrabold tracking-tight text-lg">SKD<span class="text-indigo-600"> CPNS</span></span>
          </header>

          <section class="relative max-w-5xl mx-auto px-5 pt-10 pb-8 overflow-hidden">
            <svg class="absolute -top-10 right-0 w-72 h-72 text-indigo-100 -z-0 hidden md:block" viewBox="0 0 200 200" fill="currentColor"><circle cx="140" cy="60" r="70" opacity=".7"/><circle cx="70" cy="140" r="45" opacity=".5"/><circle cx="170" cy="150" r="20" opacity=".8"/></svg>
            <div class="relative max-w-xl">
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">${ico(I.bulb, "w-3.5 h-3.5")} Mode belajar interaktif</span>
              <h1 class="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">Latihan SKD CPNS, <span class="text-indigo-600">Ytta.</span></h1>
              <p class="mt-4 text-slate-500 leading-relaxed">Answer a question and immediately find out whether you're right or wrong complete with an explanation and tips. No timer, no pressure.</p>
              <div class="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                <span class="flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">${ico(I.check, "w-3.5 h-3.5")}</span>Feedback instan</span>
                <span class="flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">${ico(I.book, "w-3.5 h-3.5")}</span>Pembahasan lengkap</span>
                <span class="flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">${ico(I.bulb, "w-3.5 h-3.5")}</span>Tips menjawab</span>
              </div>
            </div>
          </section>

          <section class="max-w-5xl mx-auto px-5 pb-16">
            <div class="flex gap-1 p-1 bg-slate-100 rounded-2xl max-w-md">${tabs}</div>
            <p class="mt-4 text-sm text-slate-500">${CAT[state.cat].name}</p>
            <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">${cards}</div>
          </section>
        </div>`;
};

/* ---------- QUIZ ---------- */
const quizView = () => {
  const to = tryOuts[state.idx];
  const c = CAT[to.category];
  const total = to.questions.length;
  const q = to.questions[state.q];
  const ans = state.answers[state.q];
  const answered = ans !== null;
  const isTKP = to.category === "TKP";
  const doneCount = state.answers.filter((a) => a !== null).length;

  const chips = state.answers
    .map((a, i) => {
      let cls =
        "bg-white border-slate-200 text-slate-500 hover:border-slate-300";
      if (a !== null) {
        const pt = pointOf(to, i, a);
        const good = isTKP ? pt >= 5 : pt > 0;
        const mid = isTKP && pt === 4;
        cls = good
          ? "bg-emerald-500 border-emerald-500 text-white"
          : mid
            ? "bg-lime-400 border-lime-400 text-white"
            : isTKP && pt === 3
              ? "bg-amber-400 border-amber-400 text-white"
              : "bg-rose-500 border-rose-500 text-white";
      }
      if (i === state.q) cls += " ring-2 ring-offset-2 ring-indigo-500";
      return `<button data-chip="${i}" onclick="goQ(${i})" class="w-9 h-9 shrink-0 rounded-lg border text-xs font-semibold transition ${cls}">${i + 1}</button>`;
    })
    .join("");

  const opts = q.o
    .map((opt, i) => {
      let box =
        "bg-white border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40 cursor-pointer";
      let badge = "bg-slate-100 text-slate-600";
      let right = "";
      if (answered) {
        box = "bg-white border-slate-200 opacity-60 cursor-default";
        const isChosen = i === ans;
        if (isTKP) {
          const pt = q.s[i];
          const best = pt === 5;
          if (best) {
            box = "bg-emerald-50 border-emerald-400 cursor-default";
            badge = "bg-emerald-500 text-white";
          }
          if (isChosen) {
            if (best) {
              right = `<span class="text-emerald-600 shrink-0">${ico(I.check, "w-5 h-5")}</span>`;
            } else {
              const warm = pt >= 4 ? "lime" : pt === 3 ? "amber" : "rose";
              box = `bg-${warm}-50 border-${warm}-400 cursor-default`;
              badge = `bg-${warm}-500 text-white`;
              right = "";
            }
          }
          right = right || "";
          right += `<span class="ml-auto shrink-0 text-xs font-bold px-2 py-0.5 rounded-md ${best ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}">${pt} poin</span>`;
          if (isChosen || best) box = box.replace("opacity-60", "");
        } else {
          if (i === q.a) {
            box = "bg-emerald-50 border-emerald-400 cursor-default";
            badge = "bg-emerald-500 text-white";
            right = `<span class="text-emerald-600 shrink-0">${ico(I.check, "w-5 h-5")}</span>`;
          } else if (isChosen) {
            box = "bg-rose-50 border-rose-400 cursor-default";
            badge = "bg-rose-500 text-white";
            right = `<span class="text-rose-500 shrink-0">${ico(I.x, "w-5 h-5")}</span>`;
          }
        }
      }
      return `<button ${answered ? "disabled" : ""} onclick="pick(${i})" class="w-full text-left flex items-start gap-3 p-4 border rounded-2xl transition ${box}">
            <span class="w-7 h-7 shrink-0 rounded-lg flex items-center justify-center text-xs font-bold ${badge}">${LABELS[i]}</span>
            <span class="flex-1 text-[15px] leading-relaxed text-slate-800 pt-0.5">${opt}</span>${right}
          </button>`;
    })
    .join("");

  let feedback = "";
  if (answered) {
    let tone, title, sub, icon;
    if (isTKP) {
      const pt = q.s[ans];
      if (pt === 5) {
        tone = "emerald";
        title = "Jawaban terbaik!";
        icon = I.check;
      } else if (pt === 4) {
        tone = "lime";
        title = "Hampir tepat";
        icon = I.check;
      } else if (pt === 3) {
        tone = "amber";
        title = "Cukup baik";
        icon = I.bulb;
      } else {
        tone = "rose";
        title = "Kurang tepat";
        icon = I.x;
      }
      const bestIdx = q.s.indexOf(5);
      sub =
        `Kamu mendapat <b>${pt} poin</b>. ` +
        (pt === 5
          ? ""
          : `Jawaban dengan poin tertinggi (5) adalah <b>${LABELS[bestIdx]}</b>.`);
    } else if (ans === q.a) {
      tone = "emerald";
      title = "Benar!";
      icon = I.check;
      sub = "Jawabanmu tepat. Baca pembahasan untuk memperkuat pemahaman.";
    } else {
      tone = "rose";
      title = "Belum tepat";
      icon = I.x;
      sub = `Jawaban yang benar adalah <b>${LABELS[q.a]}</b>.`;
    }
    feedback = `
          <div id="feedback" class="mt-6 fade-up">
            <div class="flex items-center gap-3 p-4 rounded-2xl bg-${tone}-50 border border-${tone}-200">
              <span class="w-10 h-10 rounded-full bg-${tone}-500 text-white flex items-center justify-center shrink-0">${ico(icon, "w-5 h-5")}</span>
              <div><p class="font-bold text-${tone}-700">${title}</p><p class="text-sm text-${tone}-700/80">${sub}</p></div>
            </div>
            <div class="mt-3 p-5 rounded-2xl bg-white border border-slate-200">
              <p class="flex items-center gap-2 text-sm font-bold text-indigo-600">${ico(I.book, "w-4 h-4")} Pembahasan</p>
              <div class="mt-2 text-[15px] leading-relaxed text-slate-700 whitespace-pre-line">${q.p}</div>
            </div>
            <div class="mt-3 p-5 rounded-2xl bg-amber-50 border border-amber-200">
              <p class="flex items-center gap-2 text-sm font-bold text-amber-700">${ico(I.bulb, "w-4 h-4")} Tips menjawab</p>
              <p class="mt-2 text-[15px] leading-relaxed text-amber-900/90">${q.t}</p>
            </div>
          </div>`;
  }

  const isLast = state.q === total - 1;
  return `
        <div class="min-h-screen flex flex-col">
          <header class="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
            <div class="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
              <button onclick="goHome()" class="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600" aria-label="Kembali">${ico(I.back)}</button>
              <div class="min-w-0 flex-1">
                <p class="text-sm font-bold truncate">${to.title}</p>
                <p class="text-xs text-slate-500">Soal ${state.q + 1} dari ${total} · ${doneCount} dijawab</p>
              </div>
              <span class="text-xs font-bold px-2.5 py-1 rounded-lg ${c.tint}">${c.short}</span>
            </div>
            <div class="h-1 bg-slate-100"><div class="h-full ${c.bar} transition-all duration-500" style="width:${(doneCount / total) * 100}%"></div></div>
          </header>

          <div class="max-w-2xl w-full mx-auto px-4 pt-4">
            <div id="chips" class="flex gap-2 overflow-x-auto no-scrollbar py-2 px-1">${chips}</div>
          </div>

          <main class="flex-1 max-w-2xl w-full mx-auto px-4 pt-4 pb-28">
            <div class="fade-up" key="${state.q}">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Pertanyaan ${state.q + 1}</p>
              <div class="mt-2 text-lg font-semibold leading-relaxed text-slate-900 whitespace-pre-line">${q.q}</div>
              <div class="mt-5 flex flex-col gap-2.5">${opts}</div>
              ${!answered ? `<p class="mt-4 text-center text-sm text-slate-400">Pilih satu jawaban untuk melihat pembahasan</p>` : ""}
              ${feedback}
            </div>
          </main>

          <footer class="fixed bottom-0 inset-x-0 z-20 bg-white/95 backdrop-blur border-t border-slate-200">
            <div class="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
              <button onclick="prevQ()" ${state.q === 0 ? "disabled" : ""} class="px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white flex items-center gap-1">${ico(I.back, "w-4 h-4")} Sebelumnya</button>
              <button onclick="nextQ()" class="flex-1 px-5 py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-1 transition ${answered ? "bg-indigo-600 hover:bg-indigo-700" : "bg-slate-300 hover:bg-slate-400"}">${isLast ? "Lihat hasil" : answered ? "Soal berikutnya" : "Lewati"} ${ico(I.next, "w-4 h-4")}</button>
            </div>
          </footer>
        </div>`;
};

/* ---------- RESULT ---------- */
const resultView = () => {
  const to = tryOuts[state.idx];
  const c = CAT[to.category];
  const total = to.questions.length;
  const score = calcScore(to, state.answers);
  const max = maxScoreOf(to);
  const isTKP = to.category === "TKP";
  const empty = state.answers.filter((a) => a === null).length;
  let good = 0,
    mid = 0;
  state.answers.forEach((a, i) => {
    if (a === null) return;
    const pt = pointOf(to, i, a);
    if (isTKP ? pt === 5 : pt > 0) good++;
    else mid++;
  });
  const pass = score >= c.pass;
  const pct = Math.min(1, score / max);
  const R = 52,
    C = 2 * Math.PI * R;
  const stroke = pass ? "#10b981" : "#f43f5e";

  return `
        <div class="min-h-screen flex items-center justify-center px-4 py-10">
          <div class="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-sm fade-up">
            <p class="text-sm font-semibold text-slate-500">${to.title}</p>
            <div class="relative w-40 h-40 mx-auto mt-5">
              <svg viewBox="0 0 120 120" class="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="${R}" fill="none" stroke="#f1f5f9" stroke-width="10"/>
                <circle id="ring" class="ring-anim" cx="60" cy="60" r="${R}" fill="none" stroke="${stroke}" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-target="${C * (1 - pct)}"/>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-4xl font-extrabold tabular-nums">${score}</span>
                <span class="text-xs text-slate-400 font-medium">dari ${max}</span>
              </div>
            </div>
            <span class="inline-block mt-5 px-4 py-1.5 rounded-full text-sm font-bold ${pass ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}">${pass ? "Di atas passing grade" : "Di bawah passing grade"}</span>
            <p class="mt-2 text-xs text-slate-400">Passing grade ${c.short}: ${c.pass}</p>

            <div class="mt-6 grid grid-cols-3 gap-3 text-center">
              <div class="rounded-2xl bg-emerald-50 py-3"><p class="text-xl font-extrabold text-emerald-600">${good}</p><p class="text-[11px] font-medium text-emerald-700/70">${isTKP ? "Poin maks" : "Benar"}</p></div>
              <div class="rounded-2xl bg-rose-50 py-3"><p class="text-xl font-extrabold text-rose-600">${mid}</p><p class="text-[11px] font-medium text-rose-700/70">${isTKP ? "Poin < 5" : "Salah"}</p></div>
              <div class="rounded-2xl bg-slate-100 py-3"><p class="text-xl font-extrabold text-slate-600">${empty}</p><p class="text-[11px] font-medium text-slate-500">Dilewati</p></div>
            </div>

            <div class="mt-7 flex flex-col gap-2.5">
              ${mid + empty > 0 ? `<button onclick="reviewWrong()" class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2">${ico(I.book, "w-4 h-4")} Tinjau soal yang perlu diperbaiki</button>` : ""}
              <button onclick="resetSet()" class="w-full py-3 rounded-xl border border-slate-200 hover:bg-slate-50 font-semibold text-sm text-slate-700 flex items-center justify-center gap-2">${ico(I.redo, "w-4 h-4")} Ulangi latihan</button>
              <button onclick="goHome()" class="w-full py-3 rounded-xl text-slate-500 hover:text-slate-800 font-semibold text-sm flex items-center justify-center gap-2">${ico(I.home, "w-4 h-4")} Kembali ke menu</button>
            </div>
          </div>
        </div>`;
};

/* ---------- render ---------- */
const render = (resetScroll = false) => {
  const app = document.getElementById("app");
  const chipsEl = document.getElementById("chips");
  const chipScroll = chipsEl ? chipsEl.scrollLeft : 0;
  const y = window.scrollY;
  app.innerHTML =
    state.view === "home"
      ? homeView()
      : state.view === "quiz"
        ? quizView()
        : resultView();

  if (state.view === "quiz") {
    const el = document.getElementById("chips");
    const active = el && el.querySelector(`[data-chip="${state.q}"]`);
    if (el) {
      el.scrollLeft = chipScroll;
      if (active) active.scrollIntoView({ inline: "center", block: "nearest" });
    }
  }
  if (state.view === "result") {
    const ring = document.getElementById("ring");
    if (ring)
      requestAnimationFrame(() =>
        requestAnimationFrame(() =>
          ring.setAttribute("stroke-dashoffset", ring.dataset.target),
        ),
      );
  }
  if (resetScroll) window.scrollTo({ top: 0 });
  else window.scrollTo({ top: y });
};

render();
