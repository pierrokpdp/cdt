

function initMap() {
    const selector = document.getElementById("map")
    const center = { lat: 44.44030585665794, lng: 1.4446798862873906 }
    const options = {
    mapId : "fb11947a30b3bc9e",
      center: center,
      zoom : 17,
      disableDefaultUI: true,
    }
    
  const map = new google.maps.Map(selector, options);
  const marker = new google.maps.Marker({
    position: center,
    map: map,
  });

  new google.maps.Marker({
    position: { lat: 44.44044373969123, lng: 1.4429954592126801 },
    map,
    title: "Debut du parcours",
    icon: {
        url: "file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/images/iconkpdp.ico",
        scaledSize: new google.maps.Size(42, 42)
    }
});
  }

  window.initMap = initMap;

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

const notes = {
	C2: new Audio('file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/son/notescdt/do2.wav'),
	B: new Audio('file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/son/notescdt/re2.wav'),
	A: new Audio('file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/son/notescdt/mi2.wav'),
	G: new Audio('file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/son/notescdt/fa2.wav'),
	F: new Audio('file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/son/notescdt/sol2.wav'),
	E: new Audio('file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/son/notescdt/la2.wav'),
	D: new Audio('file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/son/notescdt/si2.wav'),
	C: new Audio('file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/son/notescdt/dom2.wav'),
};

for (const note in notes) {
    notes[note].load();
}

const sequence = ['E', 'B', 'G', 'E', 'B', 'G', 'E', 'C','D','F','G','F','E','B','C2','A','B'];

let index = 0;

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const note = key.dataset.note;
        notes[note].currentTime = 0;
        notes[note].play();

        key.classList.add('active');

        setTimeout(() => {
            key.classList.remove('active');
        }, 450);

        if (note === sequence[index]) {
            index++;
            if (index === sequence.length) {
                setTimeout(() => {
                    document.location.href='meta-examples.html';
                    index = 0;
                }, 1000); // temps de latence de 1 seconde
            } else {
                // ajouter la classe "next" à la note suivante dans la séquence
                const nextNote = document.querySelector(`[data-note="${sequence[index]}"]`);
                nextNote.classList.add('next');
                setTimeout(() => {
                  key.classList.remove('next');
                }, 450);
            }
        } else {
            index = 0;
            // retirer la classe "next" de toutes les notes si la note jouée est incorrecte
            document.querySelectorAll('.next').forEach(note => {
                note.classList.remove('next');
            });
        }
    });
});




const luneoff = document.querySelector('.luneoff');

luneoff.addEventListener('click', function() {
  luneoff.style.backgroundImage = 'url("file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/images/LUNEBLEUE.gif")';

  setTimeout(function() {
    luneoff.style.backgroundImage = 'url("file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/images/LUNEBLEUE.png")';
  }, 4500);
});

const luneon = document.querySelector('.soleiloff');

luneon.addEventListener('click', function() {
  luneon.style.backgroundImage = 'url("file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/images/soleiljaune.gif")';

  setTimeout(function() {
    luneon.style.backgroundImage = 'url("file:///Users/pierrokpdp/Desktop/DOCTYPE/PAGES/images/soleiljaune.png")';
  }, 4500);
});
