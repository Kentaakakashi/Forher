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
const tapsRequired = 10;

lemonEgg.addEventListener("click", () => {
  taps++;
  const remaining = tapsRequired - taps;

  if (taps >= tapsRequired) {
    secretTab.style.display = "inline";
    alert("🍋 Secret page unlocked!");
    taps = 0; // reset
  } else {
    alert(`🍋 ${remaining} taps left to unlock the secret page!`);
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
    <div class="note-card"><img src="assets/note.png" alt="note"/><p>"She's all i got” — K</p></div>
    <div class="note-card"><img src="assets/note.png" alt="note"/><p>“Still cant digest all this lol”</p></div>
    <div class="note-card"><img src="assets/note.png" alt="note"/><p>“100 days down, forever to go 💛.”</p></div>
  `;

  /* ---------- Lemon jar --------*/
  const lemonJar = document.getElementById("lemonJar");
const lemonOutput = document.getElementById("lemonOutput");
const jarStatus = document.getElementById("jarStatus");

const reasons = [
"1. Because you always call me “Kentaaa” like it’s my favorite song.",
"2. Because your “nothing 🙈🥰” still drives me insane.",
"3. Because your smile can literally fix my whole ass mood.",
"4. Because your voice feels like home.",
"5. Because you somehow make studying less boring.",
"6. Because you roast me but in the cutest way.",
"7. Because you know the real me.",
"8. Because you never let me feel alone.",
"9. Because your laugh is the cutest sound ever.",
"10. Because you say ‘love ya’ like you mean it every time.",
"11. Because you always check on me even for small things.",
"12. Because you remember the tiniest details about me.",
"13. Because you make my phone feel alive with your texts.",
"14. Because you’re my first thought in the morning.",
"15. Because you’re my last thought at night.",
"16. Because you make silence comfortable.",
"17. Because you hype me up even when I look dumb.",
"18. Because you forgive me when I’m clumsy.",
"19. Because you actually listen to my rants.",
"20. Because you can roast me and still sound adorable.",
"21. Because you keep me grounded.",
"22. Because you give me butterflies every single time.",
"23. Because you never fake your feelings with me.",
"24. Because you make even boring days feel special.",
"25. Because you always make me laugh.",
"26. Because you’re my safe place.",
"27. Because you inspire me to be better.",
"28. Because you’re strong and soft at the same time.",
"29. Because you look beautiful even when you say you don’t.",
"30. Because you’re the only one who truly gets me.",
"31. Because you’re my partner in chaos.",
"32. Because you keep me motivated in studies.",
"33. Because you’re silly with me.",
"34. Because you let me be myself.",
"35. Because you never let me give up.",
"36. Because you make me believe in love.",
"37. Because you’re literally my dream girl.",
"38. Because your energy matches mine perfectly.",
"39. Because you call me out when I act dumb.",
"40. Because you remind me I’m loved.",
"41. Because you give me reasons to smile randomly.",
"42. Because you make me jealous in a funny way.",
"43. Because you make distance feel smaller.",
"44. Because you’re my biggest supporter.",
"45. Because you’re my biggest critic too (in a good way).",
"46. Because you don’t let me lie to myself.",
"47. Because you’re unpredictable in the best way.",
"48. Because you’re gentle with my heart.",
"49. Because you’re goofy and serious at the same time.",
"50. Because you make me want to write love letters.",
"51. Because you love me for who I am.",
"52. Because you actually care about my dreams.",
"53. Because you celebrate even my small wins.",
"54. Because you believe in me when I don’t.",
"55. Because you’re my favorite notification.",
"56. Because you make my world colorful.",
"57. Because you’re literally the cutest person alive.",
"58. Because you keep surprising me.",
"59. Because you’re a little chaotic but perfect.",
"60. Because you’re my favorite distraction.",
"61. Because you can turn my bad day around.",
"62. Because you’re always real with me.",
"63. Because you’re weird in the same way as me.",
"64. Because you’re not scared to be yourself with me.",
"65. Because you bring out the best in me.",
"66. Because you’re always worth the wait.",
"67. Because you’re lowkey my soulmate.",
"68. Because you’re always in my head rent-free.",
"69. Because you’re the prettiest human I’ve ever seen.",
"70. Because you make me laugh until my stomach hurts.",
"71. Because you’re my favorite hello.",
"72. Because you’re my hardest goodbye.",
"73. Because you’re the sweetest kind of trouble.",
"74. Because you handle my mood swings like a pro.",
"75. Because you make me want to be cheesy.",
"76. Because you remind me what happiness feels like.",
"77. Because you’re my safe chaos.",
"78. Because you’re my secret diary in human form.",
"79. Because you match my vibe perfectly.",
"80. Because you’re always my partner in crime.",
"81. Because you’re the reason I check my phone 100 times.",
"82. Because you give me something to look forward to.",
"83. Because you make my playlists better.",
"84. Because you’re my comfort person.",
"85. Because you make me feel seen.",
"86. Because you’re always worth the risk.",
"87. Because you’re my favorite notification sound.",
"88. Because you make me feel lucky every day.",
"89. Because you remind me what love actually is.",
"90. Because you’re effortlessly adorable.",
"91. Because you’re both chaos and peace in one.",
"92. Because you’re the prettiest lemon alive.",
"93. Because you’re the plot twist of my life.",
"94. Because you make my world less scary.",
"95. Because you’re the sunshine on my cloudy days.",
"96. Because you give me something to fight for.",
"97. Because you make me love myself more.",
"98. Because you’re the one I want, always.",
"99. Because you’re my forever favorite.",
"100. Because simply… you’re YOU."
];

let remaining = [...reasons];
let canClick = true;

function refillJar() {
  remaining = [...reasons].sort(() => Math.random() - 0.5);
  jarStatus.textContent = `${remaining.length} lemons inside 🍋`;
}
refillJar();

lemonJar.addEventListener("click", () => {
  if (!canClick) return;
  if (remaining.length === 0) {
    lemonOutput.textContent = "✨ The jar magically refilled!";
    refillJar();
    return;
  }
  const reason = remaining.pop();
  lemonOutput.textContent = `🍋 ${reason}`;
  jarStatus.textContent = `${remaining.length} lemons left 🍋`;

  canClick = false;
  setTimeout(() => { canClick = true }, 5000); // 5 sec cooldown
});

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
with each other, we would still make it an golden hour for sure, dosent matter if it even ends up silent, you're here, and am here, am glad to say there aint nothing to change that.
I love you a lot kavi, when i say lot idk how much it conveys to you 🥰, but i mean a lot, alot alottt alottttt A FUCKIN LOTTTTTTTTTTT. 
you're soo much god damn special to me, in a lot of ways, idk if anyone in my entire life understood me much as you do,
am not saying this just for words but like never in my life anyone had reached this far in understanding what kind of person i actually am,
no one ever tore through the cool-guy status i made up formyself to stand out in places, you only did,only you did, to anyone else am just a nonchalant asshole or just like an 'i mind my own business' type of guy,
or a different kind of varient that i completely am not, but you know who i am, you know what i do and can do and can't do, 
a human dictionary to explain me, beside all our 18+ jokes and stuff, we both know how deep our bond is digging in each day, 
I promise I’ll never leave, never let you feel alone, and never let a single day pass without reminding you 
that you are my everything.
we got to the 100th day of us being a cute-mess baby, thanks for the 100day of everything, this 100 days changed me too much in ways i never expected, we both are just made for eachother at this point aren't we,
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
