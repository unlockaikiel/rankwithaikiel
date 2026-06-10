const affiliateBase = "https://rankwithaikiel.com/go/";

const tools = [
  {
    name: "ChatGPT",
    initials: "CG",
    color: "logo-dark",
    categories: ["mahasiswa", "creator", "produktif", "bisnis"],
    what: "AI assistant serbaguna untuk ide, struktur, analisis, writing, coding, dan role-play bisnis.",
    bestFor: "Draft konten, belajar konsep sulit, membuat strategi, dan mempercepat blank page.",
    pro: "Fleksibel untuk hampir semua workflow dan mudah dijadikan pusat kerja harian.",
    con: "Jawaban tetap perlu dicek, terutama untuk data, sumber, dan klaim terbaru.",
    link: "https://chatgpt.com/"
  },
  {
    name: "Perplexity",
    initials: "PX",
    color: "logo-cyan",
    categories: ["mahasiswa", "produktif", "bisnis"],
    what: "AI research engine yang memberi ringkasan berbasis sumber dan link referensi.",
    bestFor: "Riset artikel, validasi topik, mencari angle konten, dan memahami pasar.",
    pro: "Lebih enak untuk riset cepat karena sumbernya langsung terlihat.",
    con: "Tetap perlu membaca sumber asli untuk keputusan penting.",
    link: "https://www.perplexity.ai/"
  },
  {
    name: "Canva",
    initials: "CV",
    color: "logo-coral",
    categories: ["creator", "mahasiswa", "bisnis"],
    what: "Platform desain visual untuk carousel, thumbnail, deck, lead magnet, dan brand kit.",
    bestFor: "Membuat aset visual cepat tanpa harus jadi desainer profesional.",
    pro: "Template banyak, workflow cepat, dan cocok untuk produksi konten harian.",
    con: "Output bisa terlihat generik kalau tidak punya sistem visual sendiri.",
    link: "https://www.canva.com/"
  },
  {
  name: "Pictory",
  initials: "PI",
  color: "logo-purple",
  categories: ["creator", "produktif"],
  what: "AI video generator untuk mengubah script, artikel, atau konten panjang menjadi video siap publish.",
  bestFor: "Membuat video faceless, repurposing blog ke video, dan produksi konten cepat tanpa editing rumit.",
  pro: "Otomatis memilih visual, menambahkan subtitle, voiceover, dan mempercepat workflow video.",
  con: "Kustomisasi editing tidak sedalam software editing profesional.",
  link: "https://pictory.ai?fpr=unlockai55"
},
  {
    name: "Notion AI",
    initials: "NA",
    color: "logo-yellow",
    categories: ["produktif", "bisnis", "mahasiswa"],
    what: "AI di dalam workspace Notion untuk catatan, database, SOP, dan knowledge base.",
    bestFor: "Mengubah catatan acak menjadi sistem kerja, dokumentasi, dan rencana konten.",
    pro: "Kuat untuk orang yang ingin membangun second brain dan operating system.",
    con: "Nilainya terasa maksimal kalau kamu sudah disiplin memakai Notion.",
    link: "https://www.notion.com/"
  },
  {
    name: "Claude",
    initials: "CL",
    color: "logo-green",
    categories: ["produktif", "bisnis", "creator"],
    what: "AI assistant yang kuat untuk writing panjang, analisis dokumen, dan strategi.",
    bestFor: "Brief, script edukasi, audit copy, SOP, dan dokumen bisnis.",
    pro: "Bagus untuk output yang butuh konteks panjang dan nada yang rapi.",
    con: "Integrasi tool harian bisa lebih terbatas dibanding beberapa alternatif.",
    link: "https://claude.ai/login"
  },
  {
    name: "Gamma",
    initials: "GA",
    color: "logo-cyan",
    categories: ["mahasiswa", "bisnis", "creator"],
    what: "AI presentation builder untuk membuat deck, proposal, dan materi visual dari outline.",
    bestFor: "Presentasi kuliah, pitch deck sederhana, dan kelas online.",
    pro: "Sangat cepat untuk mengubah ide menjadi struktur presentasi.",
    con: "Desain akhir tetap perlu dipoles agar tidak terasa template.",
    link: "https://gamma.app/id"
  },
  {
    name: "CapCut",
    initials: "CC",
    color: "logo-dark",
    categories: ["creator", "bisnis"],
    what: "Editor video short-form dengan fitur caption, template, dan efek yang praktis.",
    bestFor: "TikTok, Reels, Shorts, tutorial pendek, dan konten edukasi.",
    pro: "Produksi video cepat tanpa workflow editing yang berat.",
    con: "Kontrol brand dan motion yang kompleks tetap terbatas.",
    link: "https://www.capcut.com/id-id/tools/desktop-video-editor?utm_medium=sem&utm_source=googleadwords_int&utm_campaign=brand&pid=359289&af_c_id=22906197970&adset_id=184419265416&ad_id=769613073354&placement=&keyword=capcut&targetid=aud-2085368859519:kwd-1406970026529&matchtype=e&gad_source=1&gad_campaignid=22906197970&gbraid=0AAAAACROvhlSaHiTBuzomgAlGXCpAGy-w&gclid=Cj0KCQjwlqTRBhCBARIsANrkrxgeQuxZ89qlqj7Ue24ftzEQC3yo7kfNwMvrdh41fqVsS-3esFvHTxIaAgdcEALw_wcB"
  },
  {
  name: "Writesonic",
  initials: "WS",
  color: "logo-orange",
  categories: ["bisnis", "creator", "produktif"],
  what: "AI writing assistant untuk membuat artikel, copy iklan, email marketing, dan konten SEO.",
  bestFor: "Menulis konten pemasaran, blog, landing page, dan ide konten dengan cepat.",
  pro: "Banyak template siap pakai dan terintegrasi dengan workflow content marketing.",
  con: "Output sering tetap membutuhkan editing agar sesuai dengan brand voice.",
  link: "https://writesonic.com/"
},
  {
    name: "ElevenLabs",
    initials: "EL",
    color: "logo-coral",
    categories: ["creator", "bisnis"],
    what: "AI voice platform untuk voiceover, dubbing, dan eksperimen audio.",
    bestFor: "Video edukasi, narasi produk, dan konten tanpa rekaman suara manual.",
    pro: "Kualitas suara tinggi dan bisa mempercepat produksi audio.",
    con: "Pronunciation dan etika penggunaan suara tetap harus dijaga.",
    link: "https://elevenlabs.io/"
  },
  {
    name: "Zapier",
    initials: "ZP",
    color: "logo-green",
    categories: ["produktif", "bisnis"],
    what: "Automation platform untuk menghubungkan form, email, spreadsheet, CRM, dan AI.",
    bestFor: "Lead capture, follow-up, content ops, dan workflow berulang.",
    pro: "Cepat membangun automation tanpa perlu banyak coding.",
    con: "Biaya bisa naik saat task dan integrasi makin banyak.",
    link: "https://zapier.com/"
  },
  {
    name: "Google Gemini",
    initials: "GM",
    color: "logo-yellow",
    categories: ["mahasiswa", "produktif", "bisnis"],
    what: "AI assistant dari Google untuk dokumen, ide, pencarian, dan produktivitas.",
    bestFor: "Workflow yang banyak memakai Google Docs, Sheets, dan Drive.",
    pro: "Nyaman untuk pengguna yang sudah hidup di ekosistem Google.",
    con: "Hasil terbaik tergantung konteks dan akses integrasi yang kamu pakai.",
    link: "https://gemini.google.com/"
  },
  {
    name: "Tally",
    initials: "TY",
    color: "logo-cyan",
    categories: ["bisnis", "creator", "produktif"],
    what: "Form builder ringan untuk waitlist, quiz, lead magnet, dan validasi ide.",
    bestFor: "Mengumpulkan email dan segmentasi audience tanpa setup berat.",
    pro: "Cepat dibuat, tampil bersih, dan mudah disambungkan ke automation.",
    con: "Bukan tool AI utama, tapi penting untuk conversion layer.",
    link: "https://tally.so/"
  },
  {
    name: "Midjourney",
    initials: "MJ",
    color: "logo-dark",
    categories: ["creator", "bisnis"],
    what: "AI image generator untuk konsep visual, moodboard, campaign, dan asset kreatif.",
    bestFor: "Thumbnail concept, visual direction, produk digital, dan ide campaign.",
    pro: "Kualitas visual kuat untuk eksplorasi kreatif yang cepat.",
    con: "Workflow dan kontrol revisi butuh latihan agar konsisten.",
    link: "https://www.midjourney.com/explore?tab=top"
  }
];

const workflows = [
  {
    title: "Research artikel 10x lebih cepat",
    tools: ["ChatGPT", "Perplexity"],
    outcome: "Dari ide mentah menjadi outline artikel dengan sumber yang bisa dicek.",
    steps: [
      "Tanyakan 10 angle paling menarik dari topik utama.",
      "Pilih 3 angle, lalu riset bukti dan sumber dengan Perplexity.",
      "Minta ChatGPT membuat outline, hook, dan bagian yang perlu diverifikasi."
    ]
  },
  {
    title: "Konten 30 hari dari satu niche",
    tools: ["ChatGPT", "Notion AI", "Canva"],
    outcome: "Satu pilar niche berubah menjadi calendar, script, dan visual template.",
    steps: [
      "Buat 5 pilar konten dan 30 ide spesifik untuk pemula sampai advanced.",
      "Kelompokkan di Notion berdasarkan funnel: awareness, trust, conversion.",
      "Buat template visual di Canva untuk format yang paling sering dipakai."
    ]
  },
  {
    title: "Presentasi kuliah tanpa blank page",
    tools: ["Perplexity", "Gamma", "Canva"],
    outcome: "Deck yang punya struktur, data, dan visual yang cukup rapi untuk dipresentasikan.",
    steps: [
      "Riset definisi, studi kasus, dan data pendukung dengan sumber.",
      "Ubah hasil riset menjadi outline 8 sampai 12 slide.",
      "Generate draft di Gamma, lalu polish visual kunci di Canva."
    ]
  },
  {
    title: "Video pendek edukasi dari satu artikel",
    tools: ["ChatGPT", "CapCut", "ElevenLabs"],
    outcome: "Artikel panjang berubah menjadi script, voiceover, caption, dan video siap upload.",
    steps: [
      "Ambil 3 insight paling berguna dari artikel.",
      "Minta script 35 detik dengan hook, value, dan CTA.",
      "Buat voiceover, edit di CapCut, lalu tambahkan caption yang mudah dibaca."
    ]
  },
  {
    title: "Pitch brand affiliate",
    tools: ["Claude", "Canva", "Tally"],
    outcome: "Media kit ringan dan pitch email untuk mulai membuka peluang partnership.",
    steps: [
      "Buat positioning singkat: niche, audience, format, dan trust signal.",
      "Draft pitch email dengan 3 paket kerja sama.",
      "Kemas media kit di Canva dan kumpulkan inquiry lewat Tally."
    ]
  },
  {
    title: "SOP bisnis mikro",
    tools: ["ChatGPT", "Notion AI", "Zapier"],
    outcome: "Task berulang berubah menjadi SOP dan automation sederhana.",
    steps: [
      "Catat proses manual dari awal sampai selesai.",
      "Minta AI mengubahnya menjadi checklist SOP yang bisa diikuti tim.",
      "Automate langkah notifikasi, form, atau update sheet dengan Zapier."
    ]
  },
  {
    title: "Landing page produk digital",
    tools: ["Claude", "Canva", "Tally"],
    outcome: "Offer, copy, visual, dan waitlist untuk validasi produk sebelum dibuat penuh.",
    steps: [
      "Tulis pain point, target audience, janji hasil, dan bukti.",
      "Minta AI membuat copy hero, benefit, FAQ, dan CTA.",
      "Buat mockup di Canva dan tangkap minat awal melalui Tally."
    ]
  },
  {
    title: "Newsletter dari konten pendek",
    tools: ["ChatGPT", "Perplexity", "Notion AI"],
    outcome: "TikTok atau Reels berubah menjadi email mingguan yang membangun aset.",
    steps: [
      "Ambil script konten terbaik minggu ini.",
      "Tambahkan sumber, contoh, dan langkah aksi yang lebih lengkap.",
      "Simpan formatnya di Notion agar bisa dipakai ulang setiap minggu."
    ]
  }
];

const promptCategories = ["Study", "Productivity", "Writing", "Business"];

const prompts = [
  {
    category: "Study",
    title: "Pahami topik sulit",
    text: "Jelaskan [topik] seperti saya mahasiswa semester awal. Mulai dari gambaran besar, istilah penting, contoh konkret, lalu 5 pertanyaan latihan dengan jawaban."
  },
  {
    category: "Study",
    title: "Ringkas jurnal",
    text: "Ringkas paper ini menjadi: tujuan, metode, temuan utama, keterbatasan, dan 3 ide lanjutan. Gunakan bahasa Indonesia yang sederhana."
  },
  {
    category: "Study",
    title: "Belajar aktif",
    text: "Buatkan sesi belajar 45 menit untuk [materi]. Bagi menjadi pemanasan, konsep inti, latihan, review, dan kuis akhir."
  },
  {
    category: "Study",
    title: "Riset tugas",
    text: "Bantu saya membuat outline tugas tentang [topik]. Sertakan argumen utama, kontra-argumen, contoh lokal Indonesia, dan daftar data yang perlu dicari."
  },
  {
    category: "Study",
    title: "Simulasi dosen",
    text: "Bertindak sebagai dosen yang menguji pemahaman saya tentang [topik]. Tanyakan satu pertanyaan per giliran dan koreksi jawaban saya dengan singkat."
  },
  {
    category: "Study",
    title: "Catatan ujian",
    text: "Ubah catatan berikut menjadi cheat sheet ujian: definisi, rumus, konsep yang sering tertukar, contoh soal, dan mnemonic."
  },
  {
    category: "Productivity",
    title: "Prioritas harian",
    text: "Ini daftar tugas saya: [daftar]. Urutkan berdasarkan impact dan effort. Buat rencana hari ini dengan 3 fokus utama dan hal yang harus ditunda."
  },
  {
    category: "Productivity",
    title: "SOP pribadi",
    text: "Ubah proses berulang ini menjadi checklist SOP yang jelas: [proses]. Buat versi cepat, versi detail, dan indikator selesai."
  },
  {
    category: "Productivity",
    title: "Audit waktu",
    text: "Analisis jadwal saya berikut: [jadwal]. Temukan pemborosan waktu, risiko burnout, dan 5 perubahan kecil yang paling realistis."
  },
  {
    category: "Productivity",
    title: "Second brain",
    text: "Bantu saya membuat struktur Notion untuk [tujuan]. Sertakan database, properti, template halaman, dan contoh isi pertama."
  },
  {
    category: "Productivity",
    title: "Meeting recap",
    text: "Ringkas transkrip meeting ini menjadi keputusan, action items, owner, deadline, risiko, dan follow-up message."
  },
  {
    category: "Productivity",
    title: "Weekly review",
    text: "Buat template weekly review untuk mengevaluasi target, output, hambatan, uang, energi, dan rencana minggu depan."
  },
  {
    category: "Writing",
    title: "Script TikTok",
    text: "Tulis script video 35 detik tentang [topik] untuk audience [audience]. Format: hook 3 detik, 3 poin utama, contoh, CTA soft."
  },
  {
    category: "Writing",
    title: "Thread edukasi",
    text: "Ubah ide ini menjadi thread 8 poin: [ide]. Buat opening kuat, poin yang mudah dishare, contoh, dan closing yang mengarah ke newsletter."
  },
  {
    category: "Writing",
    title: "Carousel copy",
    text: "Buat copy carousel 7 slide tentang [topik]. Setiap slide maksimal 18 kata, jelas untuk pemula, dan punya CTA di slide terakhir."
  },
  {
    category: "Writing",
    title: "Newsletter singkat",
    text: "Tulis email newsletter dengan struktur: cerita pembuka, insight utama, workflow praktis, tool rekomendasi, dan pertanyaan balasan."
  },
  {
    category: "Writing",
    title: "Rewrite tone",
    text: "Rewrite teks ini agar lebih jelas, tajam, dan manusiawi. Pertahankan makna, hilangkan filler, dan berikan 3 versi headline."
  },
  {
    category: "Writing",
    title: "Hook bank",
    text: "Buat 25 hook untuk topik [topik]. Kelompokkan menjadi curiosity, pain point, contrarian, tutorial, dan proof-based."
  },
  {
    category: "Business",
    title: "Validasi offer",
    text: "Analisis ide produk ini: [ide]. Jelaskan target customer, pain point, promise, pricing hypothesis, risiko, dan eksperimen validasi 7 hari."
  },
  {
    category: "Business",
    title: "Affiliate angle",
    text: "Buat 10 angle konten affiliate untuk tool [nama tool]. Fokus pada use case, before-after, problem, dan audience yang paling cocok."
  },
  {
    category: "Business",
    title: "Landing page copy",
    text: "Tulis copy landing page untuk [produk]. Sertakan hero, benefit, proof, FAQ, CTA, dan objection handling."
  },
  {
    category: "Business",
    title: "Customer research",
    text: "Buat daftar 20 pertanyaan customer research untuk audience [audience] yang ingin mencapai [goal] tetapi terhambat [masalah]."
  },
  {
    category: "Business",
    title: "Sponsorship pitch",
    text: "Tulis pitch email ke brand [brand] untuk kerja sama konten. Sertakan positioning, audience, ide campaign, deliverables, dan CTA call."
  },
  {
    category: "Business",
    title: "Revenue roadmap",
    text: "Buat roadmap monetisasi 90 hari untuk creator AI dengan audience [jumlah]. Prioritaskan affiliate, newsletter, template, dan produk digital."
  }
];

const stackGroups = [
  {
    area: "Writing",
    items: ["ChatGPT", "Claude", "Notion AI"]
  },
  {
    area: "Research",
    items: ["Perplexity", "Google Gemini", "ChatGPT"]
  },
  {
    area: "Design",
    items: ["Canva", "Midjourney", "Gamma"]
  },
  {
    area: "Video",
    items: ["CapCut", "ElevenLabs", "Canva"]
  },
  {
    area: "Automation",
    items: ["Zapier", "Tally", "Notion AI"]
  },
  {
    area: "Conversion",
    items: ["Tally", "Canva", "Perplexity"]
  }
];

const quizPersonas = [
  {
    id: "mahasiswa",
    label: "Mahasiswa",
    title: "Stack awal untuk mahasiswa",
    recommendations: ["Perplexity", "ChatGPT", "Gamma"]
  },
  {
    id: "creator",
    label: "Content creator",
    title: "Stack awal untuk creator",
    recommendations: ["ChatGPT", "Canva", "CapCut", "ElevenLabs"]
  },
  {
    id: "freelancer",
    label: "Freelancer",
    title: "Stack awal untuk freelancer",
    recommendations: ["Claude", "Canva", "Tally", "Zapier"]
  },
  {
    id: "pebisnis",
    label: "Pebisnis",
    title: "Stack awal untuk bisnis",
    recommendations: ["ChatGPT", "Notion AI", "Zapier", "Tally"]
  }
];

const state = {
  category: "all",
  search: "",
  promptCategory: "Study",
  persona: "mahasiswa"
};

const byId = (id) => document.getElementById(id);

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const toolByName = (name) => tools.find((tool) => tool.name === name);

function renderTools() {
  const grid = byId("toolGrid");
  const count = byId("toolCount");
  const query = state.search.trim().toLowerCase();

  const filtered = tools.filter((tool) => {
    const categoryMatch = state.category === "all" || tool.categories.includes(state.category);
    const haystack = [tool.name, tool.what, tool.bestFor, tool.pro, tool.con, tool.categories.join(" ")].join(" ").toLowerCase();
    return categoryMatch && (!query || haystack.includes(query));
  });

  count.textContent = `${filtered.length} tool ditampilkan`;

  grid.innerHTML = filtered.map((tool) => `
    <article class="tool-card">
      <div class="tool-topline">
        <div>
          <div class="tool-logo ${tool.color}" aria-hidden="true">${escapeHtml(tool.initials)}</div>
        </div>
        <span class="tool-badge">${escapeHtml(tool.categories[0])}</span>
      </div>
      <h3>${escapeHtml(tool.name)}</h3>
      <p>${escapeHtml(tool.what)}</p>
      <div class="tool-meta">
        <div>
          <strong>Best for</strong>
          <span>${escapeHtml(tool.bestFor)}</span>
        </div>
      </div>
      <ul class="pros-cons">
        <li><span class="pro">+</span>${escapeHtml(tool.pro)}</li>
        <li><span class="con">-</span>${escapeHtml(tool.con)}</li>
      </ul>
      <a class="tool-link" href="${escapeHtml(tool.link)}" target="_blank" rel="noopener">Cek tool</a>
    </article>
  `).join("");

  if (!filtered.length) {
    grid.innerHTML = `<p class="empty-state">Belum ada tool yang cocok. Coba kata kunci lain.</p>`;
  }
}

function renderWorkflows() {
  const grid = byId("workflowGrid");

  grid.innerHTML = workflows.map((workflow) => `
    <article class="workflow-card">
      <h3>${escapeHtml(workflow.title)}</h3>
      <p>${escapeHtml(workflow.outcome)}</p>
      <div class="workflow-tools">
        ${workflow.tools.map((tool) => `<span>${escapeHtml(tool)}</span>`).join("")}
      </div>
      <strong>Steps</strong>
      <ol>
        ${workflow.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
      </ol>
    </article>
  `).join("");
}

function renderPromptTabs() {
  const tabs = byId("promptTabs");

  tabs.innerHTML = promptCategories.map((category) => `
    <button type="button" class="${category === state.promptCategory ? "active" : ""}" data-prompt-category="${escapeHtml(category)}">
      ${escapeHtml(category)}
    </button>
  `).join("");

  tabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.promptCategory = button.dataset.promptCategory;
      renderPromptTabs();
      renderPrompts();
    });
  });
}

function renderPrompts() {
  const grid = byId("promptGrid");
  const selected = prompts.filter((prompt) => prompt.category === state.promptCategory);

  grid.innerHTML = selected.map((prompt, index) => `
    <article class="prompt-card">
      <div class="prompt-topline">
        <h3>${escapeHtml(prompt.title)}</h3>
        <span class="prompt-badge">${escapeHtml(prompt.category)}</span>
      </div>
      <div class="prompt-text">${escapeHtml(prompt.text)}</div>
      <button class="copy-btn" type="button" data-copy-index="${index}">
        <span class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M8 8h10v12H8z"/><path d="M6 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>
        </span>
        Copy prompt
      </button>
    </article>
  `).join("");

  grid.querySelectorAll("[data-copy-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const prompt = selected[Number(button.dataset.copyIndex)];
      copyText(prompt.text);
    });
  });
}

function renderStack() {
  const layout = byId("stackLayout");

  layout.innerHTML = stackGroups.map((group) => `
    <section class="stack-group">
      <h3>
        ${escapeHtml(group.area)}
      </h3>
      <ul>
        ${group.items.map((name) => {
          const tool = toolByName(name);
          const href = tool ? tool.link : "#";
          return `
            <li>
              <span>${escapeHtml(name)}</span>
              <a href="${escapeHtml(href)}" target="_blank" rel="noopener">Open</a>
            </li>
          `;
        }).join("")}
      </ul>
    </section>
  `).join("");
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const temp = document.createElement("textarea");
      temp.value = text;
      temp.setAttribute("readonly", "");
      temp.style.position = "absolute";
      temp.style.left = "-9999px";
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      temp.remove();
    }
    showToast("Prompt copied.");
  } catch {
    showToast("Copy gagal. Pilih teks prompt secara manual.");
  }
}

function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2400);
}

function bindCategories() {
  document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      document.querySelectorAll("[data-category]").forEach((item) => item.classList.toggle("active", item === button));
      renderTools();
      byId("tools").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function bindSearch() {
  const search = byId("toolSearch");
  search.addEventListener("input", () => {
    state.search = search.value;
    renderTools();
  });
}

function init() {
  bindCategories();
  bindSearch();
  renderTools();
  renderWorkflows();
  renderPromptTabs();
  renderPrompts();
  renderStack();
}

document.addEventListener("DOMContentLoaded", init);
