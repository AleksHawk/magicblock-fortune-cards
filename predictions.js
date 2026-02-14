const predictions = [
    "Alpha is closer than you think",
    "Your next move unlocks hidden value",
    "A powerful opportunity is syncing",
    "Your strategy is about to pay off",
    "Fortune favors your patience",
    "A new path is validating",
    "Your efforts are compounding",
    "A rare signal is approaching",
    "Momentum is building around you",
    "A hidden advantage is emerging",
    "Your secrets remain protected",
    "Privacy strengthens your position",
    "Zero-knowledge is on your side",
    "Hidden truths bring clarity",
    "A private signal reveals direction",
    "Silence will be your strength",
    "What is unseen holds power",
    "Encryption shields your future",
    "Trust flows through secure paths",
    "Privacy unlocks confidence",
    "Your next build will surprise you",
    "Innovation flows through you",
    "A new tool empowers your vision",
    "Creation is your strongest asset",
    "Your system is stabilizing",
    "A breakthrough is near",
    "Efficiency increases rapidly",
    "Complexity turns into clarity",
    "Your infrastructure strengthens",
    "Automation brings relief",
    "Your future expands rapidly",
    "A new era is forming",
    "Timing aligns in your favor",
    "Destiny favors your courage",
    "Your path becomes clearer",
    "Unexpected doors will open",
    "Transformation begins now",
    "Your vision attracts allies",
    "The future recognizes your effort",
    "A turning point approaches",
    "Luck is syncing with your actions",
    "Positive energy amplifies results",
    "Your confidence attracts success",
    "Momentum is unstoppable",
    "Fortune follows your focus",
    "Your aura strengthens outcomes",
    "Optimism unlocks new paths",
    "Alignment brings ease",
    "Success resonates around you",
    "Your energy multiplies impact",
    "Clarity arrives unexpectedly",
    "Insight reveals hidden opportunities",
    "A smart decision changes everything",
    "Your intuition is accurate",
    "Knowledge empowers action",
    "Reflection leads to growth",
    "Wisdom guides your timing",
    "Patience unlocks mastery",
    "Learning accelerates progress",
    "Awareness strengthens choices",
    "Strong allies surround you",
    "Collaboration multiplies success",
    "Your network strengthens daily",
    "Trust builds powerful bonds",
    "A meaningful partnership forms",
    "Community supports your growth",
    "Shared vision attracts energy",
    "Connections open new doors",
    "Cooperation speeds progress",
    "Unity amplifies impact",
    "Your block is confirmed",
    "The chain favors your actions",
    "A rare block is forming",
    "Signals are validating",
    "Your ledger shows growth",
    "The network supports you",
    "Your hash aligns perfectly",
    "The protocol trusts your path",
    "Consensus moves in your favor",
    "Your node is fully synced",
    "A legendary outcome approaches",
    "Your influence expands globally",
    "A historic opportunity emerges",
    "You are entering a peak phase",
    "Exceptional success awaits",
    "Your impact becomes permanent",
    "A rare alignment occurs",
    "Your legacy begins now",
    "Great recognition is coming",
    "Your breakthrough becomes inevitable",
    "Everything is aligning",
    "Trust your direction",
    "Progress accelerates",
    "Balance creates power",
    "Timing is perfect",
    "Growth is unstoppable",
    "Confidence brings victory",
    "Your future is bright",
    "Opportunities multiply",
    "Success is inevitable"
];

let selectedText = "";

const cardsContainer = document.getElementById("cards");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const text = document.getElementById("predictionText");

// Генерація карток
for(let i=0; i<5; i++){
    const card = document.createElement("div");
    card.className = "card";

    card.onclick = () => {
        card.classList.add("flipping");

        setTimeout(() => {
            selectedText = predictions[Math.floor(Math.random() * predictions.length)];
            text.innerText = selectedText;

            popup.style.display = "block";
            overlay.style.display = "block";
            
            card.classList.remove("flipping");
        }, 600);
    };

    cardsContainer.appendChild(card);
}

overlay.onclick = () => {
    popup.style.display = "none";
    overlay.style.display = "none";
};

// --- ФУНКЦІЯ ГЕНЕРАЦІЇ КАРТИНКИ (ТІЛЬКИ ШАБЛОН) ---
function downloadCard(){
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 675;
    const ctx = canvas.getContext("2d");

    const template = new Image();
    // ВАЖЛИВО: Шлях до твого файлу
    template.src = "images/template.png"; 
    template.crossOrigin = "anonymous"; // Допомагає уникнути помилок завантаження

    template.onload = () => {
        // 1. Малюємо твій шаблон (фон + лого + твій нік)
        ctx.drawImage(template, 0, 0, 1200, 675);

        // 2. Налаштування тексту передбачення
        ctx.fillStyle = "#ffffff"; 
        ctx.shadowColor = "rgba(0,0,0,0.5)"; 
        ctx.shadowBlur = 5;
        
        // Шрифт: Жирний Georgia (або зміни на Arial, якщо хочеш простіше)
        ctx.font = "bold 60px Georgia"; 
        ctx.textAlign = "center";
        
        // 3. Малюємо текст по центру. 
        // canvas.width/2 = центр по горизонталі
        // canvas.height/2 = центр по вертикалі
        wrapText(ctx, `"${selectedText}"`, canvas.width/2, canvas.height/2, 1000, 80);

        // 4. Скачування
        const link = document.createElement("a");
        link.download = "magicblock-fortune.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    };

    // Якщо картинка не грузиться, виведемо помилку в консоль
    template.onerror = () => {
        alert("Помилка завантаження шаблону. Перевір, чи називається файл template.png в папці images.");
    };
}

// Функція переносу тексту
function wrapText(ctx, text, x, y, maxWidth, lineHeight){
    const words = text.split(" ");
    let line = "";
    let lines = [];

    for(let n=0; n<words.length; n++){
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        if(metrics.width > maxWidth && n > 0){
            lines.push(line);
            line = words[n] + " ";
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    let startY = y - ((lines.length - 1) * lineHeight) / 2;

    for(let k=0; k<lines.length; k++){
        ctx.fillText(lines[k], x, startY + (k * lineHeight));
    }
}

// --- ФУНКЦІЯ ШЕРИНГУ (ТВІТЕР) ---
function shareCard(){
    const shareText = 
`Sometimes all it takes is one little sign to know you're on the right track.
My MagicBlock Fortune told me something very accurate today:

"${selectedText}"

See what your card says:
https://alekshawk.github.io/magicblock-fortune-cards/

Creator @hawk made this with love for the @MagicBlock community`;

    // Формуємо посилання
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    
    // Відкриваємо в новому вікні
    window.open(twitterUrl, '_blank');
}
