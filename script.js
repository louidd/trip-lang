const diliButton = document.getElementById('dili-btn');
const ooButton = document.getElementById('oo-btn');
const celebration = document.getElementById('celebration');
const gifImage = document.getElementById('gif');
const message = document.getElementById('message');
const happySound = document.getElementById('happy-sound'); 
const cryingSound = document.getElementById('crying-sound'); 
const idkSound = document.getElementById('idk-sound'); 
let diliClickCount = 0;

function stopAllSounds() {
    happySound.pause();
    happySound.currentTime = 0; 
    cryingSound.pause();
    cryingSound.currentTime = 0; 
    idkSound.pause();
    idkSound.currentTime = 0;
}

diliButton.addEventListener('click', () => {
    diliClickCount++;

    const randomX = Math.random() * (window.innerWidth - diliButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - diliButton.offsetHeight);
    
    diliButton.style.position = 'absolute';
    diliButton.style.left = `${randomX}px`;
    diliButton.style.top = `${randomY}px`;

    stopAllSounds();

    if (diliClickCount > 2) {
        gifImage.src = 'gifs/angry cat.gif';  
        message.textContent = 'Hangoooooool !!';
        idkSound.play();  
    } else {
        gifImage.src = 'gifs/banana-crying-cat.gif';  
        message.textContent = 'Pleaseeeee !';
        cryingSound.play();  
    }

    celebration.classList.remove('hidden'); 
});

ooButton.addEventListener('click', () => {
    celebration.classList.remove('hidden');
    gifImage.src = 'gifs/happy-cat-cat.gif';  
    message.textContent = 'Arigathankss';
    
    stopAllSounds();
    happySound.play();  
    
    diliClickCount = 0;  
});
