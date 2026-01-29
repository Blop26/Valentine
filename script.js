// --- CONFIGURATION ---
const ANNIVERSARY_DATE = "2025-01-26"; 
let yesScale = 1;

// --- FUNCTIONS ---

function unlockSite() {
    const inputDate = document.getElementById('anniversaryDate').value;
    if (inputDate === ANNIVERSARY_DATE) {
        showPage('main-content');
    } else {
        alert("Not quite! Think back to the very beginning... ❤️");
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
    questionText.innerText = "I love you forever! ❤️";
    
    // Final state: Hide the No button, bring Yes back to normal or keep it big
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('yesBtn').style.transform = "scale(1.5)";
    
    alert("Yay! Best decision ever! ❤️");
}