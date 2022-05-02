// local reviews data
const reviews = [
  {
    id: 1,
    name: "John Lennon",
    job: "Cantante",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/John_Lennon_1969_%28cropped%2C_enhanced%2C_and_colorized_2%29.jpg/415px-John_Lennon_1969_%28cropped%2C_enhanced%2C_and_colorized_2%29.jpg?20210415142646",
    text:
      "Fue un artista, músico, multinstrumentista, cantautor, compositor, productor, escritor y pacifista británico, conocido por ser uno de los miembros fundadores de la banda de rock The Beatles.",
  },
  {
    id: 2,
    name: "Paul McCartney",
    job: "bajista y cantante",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Paul_McCartney_2021_%28cropped%29.jpg/225px-Paul_McCartney_2021_%28cropped%29.jpg",
    text:
      "Ganó fama mundial por ser el bajista y uno de los cantantes de la banda de rock The Beatles, reconocida como la más popular e influyente en la historia de la música moderna.",
  },
  {
    id: 3,
    name: "George Harrison",
    job: "Guitarrista",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/The-chance-first-meeting-of-Pattie-Boyd-and-George-Harrison.jpg/220px-The-chance-first-meeting-of-Pattie-Boyd-and-George-Harrison.jpg",
    text:
      "Fue un músico multiinstrumentista, compositor, cantautor, productor musical, productor cinematográfico, actor, filántropo, activista pacifista, ecologista, guitarrista y cantante británico de la banda de rock The Beatles. ",
  },
  {
    id: 4,
    name: "Ringo Starr",
    job: "Baterista",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Ringo_Starr_and_all_his_band_%288469748653%29.jpg/220px-Ringo_Starr_and_all_his_band_%288469748653%29.jpg",
    text:
      " Fue el baterista de la banda de rock The Beatles. Antes de formar parte de The Beatles, Starr fue miembro de otra banda de Liverpool, Rory Storm and the Hurricanes.  ",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
