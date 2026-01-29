// --- CONFIGURATION ---
const ANNIVERSARY_DATE = "2025-01-26"; 
let yesScale = 1;

// --- FUNCTIONS ---

function unlockSite() {
    const inputDate = document.getElementById('anniversaryDate').value;
    if (inputDate === ANNIVERSARY_DATE) {
        showPage('main-content');
    } else {
        alert("YOU'RE WRONG??????? WOWWWWW");
    }
}

function showPage(pageId) {
    const containers = ['lock-screen', 'main-content', 'page3', 'page4'];
    containers.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function growYes() {
    yesScale += 1.5; // Controls how fast it grows
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Grow the Yes button
    yesBtn.style.transform = `scale(${yesScale})`;
    
    // Nudge the No button to the side so they stay close but don't overlap
    // The bigger the Yes button, the further the No button is pushed
    let nudge = yesScale * 40; 
    noBtn.style.marginLeft = `${nudge}px`;
}

function celebrate() {
    const questionText = document.getElementById('questionText');
    questionText.innerText = "I love you my clara!";
    
    // Final state: Hide the No button, bring Yes back to normal or keep it big
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('yesBtn').style.transform = "scale(1.5)";
    
    alert("YAYYAYAYYA you're my valentine :)");
}

function celebrate() {
    const questionText = document.getElementById('questionText');
    questionText.innerText = "I love you my clara!";
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('yesBtn').style.transform = "scale(1)";

    // This launches the confetti!
    var duration = 5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff4d6d', '#ffafcc']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff4d6d', '#ffafcc']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // We remove the innerText because the CSS creates the heart shape now
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-5vh";
    
    // We MUST give it a size for the CSS to work
    const size = "15px"; 
    heart.style.width = size;
    heart.style.height = size;
    
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);

// --- SEPARATE PHOTO RAIN ---
function createPhoto() {
    const photo = document.createElement('div');
    photo.classList.add('falling-photo');
	photo.style.width = "60px";
    
   photo.innerHTML = '<img src="photobooth.jpg" style="width:100%; height:100%; object-fit: cover; border-radius: 2px;">';
    
    photo.style.left = Math.random() * 90 + "vw"; // Keeps them away from the very edge
    photo.style.top = "-15vh"; // Starts a bit higher up
    
    // PHOTOS FALL SLOWER (6 to 10 seconds)
    const duration = Math.random() * 4 + 6;
    photo.style.animationDuration = duration + "s";
    
    document.body.appendChild(photo);
    
    setTimeout(() => {
        photo.remove();
    }, 11000); // Remove after it's definitely off-screen
}

// Spawns a photo every 2 seconds (2000ms)
// Change 2000 to 4000 if you want them to be more rare!
setInterval(createPhoto, 2000);

function goToValentine() {
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'flex'; // Or whatever your final page ID is
}

let yesSize = 1;
let fontSize = 16; // Your starting font size

function handleNo() {
    yesSize += 0.5;
    fontSize += 5; // Increases	  the text size along with the button
    
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.style.transform = `scale(${yesSize})`;
    yesBtn.style.fontSize = `${fontSize}px`;
}

function unlockSite() {
    const inputDate = document.getElementById('anniversaryDate').value;
    const correctDate = "2025-01-26"; // Replace with your actual date
    const music = document.getElementById('bgMusic');

    if (inputDate === correctDate) {
        // Start the music!
        music.play().catch(error => {
            console.log("Autoplay was prevented, but it should work on click!");
			music.volume = 0.6;
        });

        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'flex';
    } else {
        alert("YOU'RE WRONG??????????? WOWWWW");
    }
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicToggle');
    if (music.paused) {
        music.play();
        btn.innerHTML = "🎵";
    } else {
        music.pause();
        btn.innerHTML = "🔇";
    }

}
