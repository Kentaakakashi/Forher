// Intro typewriter
let text="100 Days of Kenta ❤️ Lemon",i=0;
function type(){
  if(i<text.length){
    document.getElementById("introText").textContent+=text[i++];
    setTimeout(type,100);
  }
}
type();
document.getElementById("enterBtn").onclick=()=>{
  document.getElementById("intro").style.opacity=0;
  setTimeout(()=>document.getElementById("intro").style.display="none",1000);
};

// Secret lemon easter egg
let taps=0;
document.querySelector('.lemon-egg').onclick=()=>{
  taps++;
  if(taps>=10){
    document.getElementById('secretTab').style.display='inline';
    alert("🍋 Secret page unlocked!");
    taps=0;
  }
};

// Music toggle
const music=document.getElementById("bgMusic");
document.getElementById("musicBtn").onclick=()=>{
  if(music.paused){ music.play(); }
  else{ music.pause(); }
};

// Timeline
const TIMELINE=[
  {date:"Day 1",title:"Met ❤️",desc:"First chat"},
  {date:"Day 21",title:"Confession",desc:"Big moment"}
];
document.getElementById('timeline').innerHTML=
  TIMELINE.map(t=>`<div><h3>${t.title}</h3><p>${t.desc}</p></div>`).join('');

// Gallery (memory_01.jpg → memory_12.jpg)
const GALLERY = [...Array(12)].map((_, i) => ({
  src: `assets/memory_${String(i+1).padStart(2,'0')}.jpg`,
  caption: `Memory #${i+1}`
}));

document.getElementById('grid').innerHTML =
  GALLERY.map(g =>
    `<div>
       <img src="${g.src}" alt="${g.caption}" />
       <p>${g.caption}</p>
     </div>`
  ).join('');

// Chats
const CHATS=[
  {from:"Lemon",text:"Kentaaa 😝"},
  {from:"Kenta",text:"Yes my lemon 🍋"},
  {from:"Lemon",text:"Nothing 🙈🥰"}
];
document.getElementById('chat').innerHTML=
  CHATS.map(c=>`<div><b>${c.from}:</b> ${c.text}</div>`).join('');

// Notes
document.querySelector('.notes').innerHTML=`<img src='assets/note.png'/>`;

// Bucket list
const BUCKET=["Ice cream date 🍦","Study sesh 📚","Trip ✈️"];
document.getElementById('bucketList').innerHTML=
  BUCKET.map(i=>`<li>${i}</li>`).join('');

// Fav
document.getElementById('favGrid').innerHTML=
  `<div>Fav memory #1</div><div>Fav memory #2</div>`;

// Future
document.getElementById('futurePlans').innerHTML=
  `<p>Day 200: Surprise!<br>Day 365: Anniversary 💕</p>`;
