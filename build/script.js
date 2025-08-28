document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Intro typewriter + enter ---------- */
  const introTextEl = document.getElementById("introText");
  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enterBtn");

  const introText = "100 Days of Kenta ❤️ Lemon";
  let tIndex = 0;
  function type() {
    if (tIndex < introText.length) {
      introTextEl.textContent += introText[tIndex++];
      setTimeout(type, 75);
    }
  }
  type();

  enterBtn.addEventListener("click", () => {
    intro.style.opacity = "0";
    setTimeout(() => intro.style.display = "none", 700);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Music toggle ---------- */
/* ---------- Music toggle ---------- */
  const music = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicBtn");
  music.volume = 0.45;

  // start music when scrapbook opens
  enterBtn.addEventListener("click", () => {
    intro.style.opacity = "0";
    setTimeout(() => intro.style.display = "none", 700);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // play music by default after intro
    music.play().then(() => {
      musicBtn.textContent = "⏸️";
    }).catch(err => {
      console.log("Autoplay blocked, will need manual click", err);
      musicBtn.textContent = "❤️🎶";
    });
  });

  // toggle manually
  musicBtn.addEventListener("click", () => {
    if (music.paused) { 
      music.play(); 
      musicBtn.textContent = "⏸️"; 
    } else { 
      music.pause(); 
      musicBtn.textContent = "❤️🎶"; 
    }
  });

  /* ---------- Lemon Easter egg (10 taps to unlock) ---------- */
  const lemonEgg = document.getElementById("lemonEgg");
  const secretTab = document.getElementById("secretTab");
  let taps = 0;
  lemonEgg.addEventListener("click", () => {
    taps++;
    if (taps >= 10) {
      secretTab.style.display = "inline";
      alert("🍋 Secret page unlocked!");
      taps = 0;
    }
  });

  /* ---------- TIMELINE data + render ---------- */
  const TIMELINE = [
    { date: "Day 1", title: "We started talking 💬", desc: "The first message that changed everything." },
    { date: "Day 7", title: "Late-night memes 😂", desc: "You sent the cursed meme, we cried laughing." },
    { date: "Day 21", title: "Confession ❤️", desc: "Our little heart-explosion moment." },
    { date: "Day 50", title: "Inside jokes 😝", desc: "Now everything is a meme." },
    { date: "Day 75", title: "Study-date 📚", desc: "We pretended to study but texted more." },
    { date: "Day 100", title: "100 Days ✨", desc: "A hundred tiny memories that mean the world." }
  ];
  const timelineEl = document.getElementById("timeline");
  timelineEl.innerHTML = TIMELINE.map(item => `
    <article class="tl-item">
      <div class="tl-date">${item.date}</div>
      <div class="tl-body">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join("");

  /* ---------- GALLERY: uses memory_01..memory_12.jpg ---------- */
  const grid = document.getElementById("grid");
  const gallery = [
  { src: "assets/memory_01.jpg", caption: "First Kiss 💋", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_02.jpg", caption: "Late-night memes 😂", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_03.jpg", caption: "Confession ❤️", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_04.jpg", caption: "Study-date 📚", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_05.jpg", caption: "Movie marathon 🎬", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_06.jpg", caption: "Ice cream date 🍦", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_07.jpg", caption: "Trip together ✈️", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_08.jpg", caption: "First screenshot 📸", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_09.jpg", caption: "Laughter fit 😂", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_10.jpg", caption: "Inside jokes 😝", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_11.jpg", caption: "100 Days ✨", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_12.jpg", caption: "Forever 💛", r: (Math.random()*8 - 4).toFixed(2) },
];
  grid.innerHTML = gallery.map(g => `
    <figure class="polaroid" style="--r:${g.r}">
      <img src="${g.src}" alt="${g.caption}" loading="lazy" />
      <figcaption>${g.caption}</figcaption>
    </figure>
  `).join("");

  /* ---------- CHATS ---------- */
  const chatEl = document.getElementById("chat");
  const CHATS = [
    { from: "Lemon", text: "Kentaaa 😝" },
    { from: "Kenta", text: "Yes my lemon? 🍋" },
    { from: "Lemon", text: "Nothing 🙈🥰" },
    { from: "Kenta", text: "Everything then 💛" }
  ];
  chatEl.innerHTML = CHATS.map((c, idx) => `
    <div class="bubble ${c.from === "Kenta" ? "kenta" : "lemon"}" style="transition-delay:${idx*120}ms">
      <b>${c.from}:</b> ${c.text}
    </div>
  `).join("");

  /* ---------- NOTES ---------- */
  const notesWrap = document.getElementById("notesWrap");
  notesWrap.innerHTML = `
    <div class="note-card"><img src="assets/note.png" alt="note"/><p>“You say 'Nothing' and it's the whole world.” — K</p></div>
    <div class="note-card"><img src="assets/note.png" alt="note"/><p>“Day 50: inside jokes unlocked.”</p></div>
    <div class="note-card"><img src="assets/note.png" alt="note"/><p>“100 days down, forever to go 💛.”</p></div>
  `;

  /* ---------- BUCKET / FAV / FUTURE ---------- */
  const bucket = ["Ice cream date 🍦","Movie marathon 🎬","Trip together ✈️","Cook together 🍳"];
  document.getElementById("bucketList").innerHTML = bucket.map(it => `<li class="bucket-item">${it}</li>`).join("");

  document.getElementById("favGrid").innerHTML =
    `<div class="card">Fav Moment: First screenshot</div><div class="card">Fav Moment: Laughter fit</div>`;

  document.getElementById("futurePlans").innerHTML =
    `<p>Day 200 — Surprise date.<br>Day 365 — Anniversary plan.</p>`;

  /* ---------- INTERSECTION OBSERVER for reveal animations ---------- */
  const ioOptions = { root: null, rootMargin: "0px", threshold: 0.12 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, ioOptions);

  // observe timeline items, polaroids, bubbles
  document.querySelectorAll(".tl-item, .polaroid, .bubble, .note-card").forEach(el => observer.observe(el));

  /* ---------- POLAROID rotation fix (randomized via CSS var) ---------- */
  document.querySelectorAll(".polaroid").forEach((p, i) => {
    // small stagger on load for nicer effect
    setTimeout(()=> p.classList.add("show"), 120 + i * 80);
  });

  // chat bubbles appear staggered
  document.querySelectorAll(".bubble").forEach((b, i) => {
    setTimeout(()=> b.classList.add("show"), 250 + i * 140);
  });
});
