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

for(let i=0;i<5;i++){
    const card = document.createElement("div");
    card.className="card";

    card.onclick = () => {
        selectedText = predictions[Math.floor(Math.random()*predictions.length)];
        text.innerText = selectedText;

        popup.style.display="block";
        overlay.style.display="block";
    };

    cardsContainer.appendChild(card);
}

overlay.onclick = () => {
    popup.style.display="none";
    overlay.style.display="none";
};

function downloadCard(){

    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 1000;

    const ctx = canvas.getContext("2d");

    ctx.fillStyle="#0c0c0c";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    const logo = new Image();
    logo.src="images/logo.png";

    logo.onload = () => {

        ctx.drawImage(logo,200,80,400,120);

        ctx.fillStyle="white";
        ctx.font="40px Arial";
        ctx.textAlign="center";

        wrapText(ctx, selectedText, canvas.width/2, 500, 600, 50);

        const link = document.createElement("a");
        link.download="magicblock-card.png";
        link.href=canvas.toDataURL();
        link.click();
    };
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight){
    const words=text.split(" ");
    let line="";
    for(let n=0;n<words.length;n++){
        const testLine=line+words[n]+" ";
        const metrics=ctx.measureText(testLine);
        if(metrics.width>maxWidth && n>0){
            ctx.fillText(line,x,y);
            line=words[n]+" ";
            y+=lineHeight;
        } else {
            line=testLine;
        }
    }
    ctx.fillText(line,x,y);
}

function shareCard(){

    const shareText =
`Sometimes all it takes is one little sign to know you're on the right track.

My MagicBlock Fortune told me something very accurate today:

"${selectedText}"

See what your card says:
https://alekshawk.github.io/magicblock-fortune-cards/

Creator @AleksYastreb made this with love for the @magicblock community`;

    navigator.clipboard.writeText(shareText);

    alert("Copied to clipboard 🚀");
}
