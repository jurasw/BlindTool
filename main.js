const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Cifar";
      texts.appendChild(p);
    }
    if (text.includes("Wskaż najgorętszy obiekt na świecie")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "szukanie najgorętrzego obektu na świcie ...";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.facebook.com/jurek.wisniewski.33/");
    }
    if (text.includes("Wskaż najwiekszego kurwiszony na świecie")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Pip pap pup Wyszukiwanie największego kurwiszona na świcie ...";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.facebook.com/nikola.koralewska.737");
    }
    p = document.createElement("p");
  }
  
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
