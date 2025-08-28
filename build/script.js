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
  { date: "Day 1", title: "The toddler's step's 🥥🎀", desc: "Slept with body full of butterflies ( both barely slept lol )"},
  { date: "Day 9", title: "First Vc 🎀", desc: "2 shy nibbas being awkward af hehehe"},
  { date: "Day 38", title: "cutie pookie 🙈🤭", desc: "Beginning of 'Kentaaaaa... nothing 🙈🎀'"},
  { date: "Day 53", title: "Get Used to it", desc: "Started to realise that 'LEMON/KENTA is mine?! 🙈🙈' "},
  { date: "Day 67", title: "ROBLOXXX DAY", desc: "Pookies playing romnatic ahh roblox shi 🙈🎀🤭"},
  { date: "Day 100", title: "The unexpected century of the decade✨", desc: "Gotta multiply it by infinity"}
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
  { src: "assets/memory_01.jpg", caption: "Reaction to confession💋", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_02.jpg", caption: "Pookie makin moves 🙈", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_03.jpg", caption: "Bro has no shy 🎀🙈", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_04.jpg", caption: "I mean... you asked for it 🤭", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_05.jpg", caption: "Shared 'I Love You' for first time 💝", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_06.jpg", caption: "Vc Full Of Heaven Vocals 👂🍯", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_07.jpg", caption: "OMgGg BrOoOo 💅💅", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_08.jpg", caption: "Me makin moves at last 😤", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_09.jpg", caption: "Kaviii, saapdu 🥺", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_10.jpg", caption: "Mini recap 🍯💝", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_11.jpg", caption: "Bro found my blueprint of proposal 🥀", r: (Math.random()*8 - 4).toFixed(2) },
  { src: "assets/memory_12.jpg", caption: "This is NOT coincidence 😤💅", r: (Math.random()*8 - 4).toFixed(2) },
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
    { from: "Kenta", text: "LEMONNNNNNN 😝🥰" },
    { from: "Lemon", text: "Nothing 🙈🥰" },
    { from: "Kenta", text: "HUHHHHHHHHH 😤😤😤😤👺👺👺👺" },
    { from: "Lemon", text: "muhehehehe 🙈💅" },
    { from: "Kenta", text: "Love yaaaaa 🤭🎀🥰" },
    { from: "Lemon", text: "LOVE YA MOREEEE 😝😝🥰🤭" }
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
  const bucket = ["Ice cream date 🍦","Movie marathon 🎬","Trip together ✈️","Cook together (burn the house) 🍳", "Throw you into backetball hook ⛹️‍♂️", "Give you shit load of hickeys 💋", "Etc... (no spoiler) 💌"];
  document.getElementById("bucketList").innerHTML = bucket.map(it => `<li class="bucket-item">${it}</li>`).join("");

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

// Love Letter Typing Effect
const letterText = `
Hey Lemon, 🍋

I don’t even know where to start because if I start writing about you, I’ll probably never stop. 
You still feel like too much for me to take on kavi lol, like this is more of an fantacy for me, i just love how we're being an matured couples at an age of this, based on our consistancy in studys and how we know when to prioritise what and what not to do, even though we do get clumsy and make out whenever we get a gap, come onnnn its not all we got lol, youre just my fantasy and way above it, never in a million years would i be not shocked to hear that you're mine. LIKE BROOOO. KAVIMITHA IS MINEEEE 🤯🤯🤯, lol. We're going through stuffs, we don't how tough it can get in the future, but ik one thing, nothing gonna seperate shit from us, even if we only got an hour or less to spend
with each other, we would still make it an golden hour for sure, dosent matter if it even emds up silent, you're here, and am here, am glad to say there aint nothing to change that.
I love you a lot kavi, when i say lot idk how much it conveys to you 🥰, but i mean a lot, alot alottt alottttt A FUCKIN LOTTTTTTTTTTT. 
you're soo much god damn special to me, in a lot of ways, idk if anyone in my entire life understood me much as you do,
am not saying this just for words but like never in my life anyone had reached this far in understanding what kind kf person i actually am,
no one ever tore through the cool-guy status i made up formyself to stand out in places, you only did,only you did, to anyone else am just a nonchalant asshole or just like an 'i mind my own business' type of guy,
or a different kind of varient that i completely am not, but you know who i am, you know what i do and can do and can't do, 
a human dictionary to explain me, beside all our 18+ jokes and stuff, we both know how deep our bond is digging in each day, 
I promise I’ll never leave, never let you feel alone, and never let a single day pass without reminding you 
that you are my everything. 
This letter isn’t enough to hold all my feelings, but hey… it’s a start. 

Always yours,  
— Naren❤️
`;

const letterElement = document.getElementById("typed-letter");
const typingSound = document.getElementById("typing-sound");
let i = 0;
let typing = false;

function typeLetter() {
  if (i < letterText.length) {
    letterElement.textContent += letterText.charAt(i);
    i++;
    setTimeout(typeLetter, 40);
  } else {
    typingSound.pause();
    typingSound.currentTime = 0;
  }
}

window.addEventListener("scroll", () => {
  const rect = letterElement.getBoundingClientRect();
  if (!typing && rect.top < window.innerHeight - 100) {
    typing = true;
    typingSound.play();
    typeLetter();
  }
});
