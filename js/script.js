
const sopBank = [
    { text: "A Statement of Purpose should focus mainly on childhood dreams rather than academic achievements.", answer: false },
    { text: "It's recommended to include specific research interests when applying to graduate programs.", answer: true },
    { text: "An SOP should exceed 2000 words to be impressive.", answer: false },
    { text: "Using clichés and overused phrases strengthens your SOP.", answer: false },
    { text: "The SOP should demonstrate a clear link between past experiences and future goals.", answer: true },
    { text: "Mentioning the names of professors you wish to work with is not advisable.", answer: false },
    { text: "A compelling SOP is tailored for each university/program.", answer: true },
    { text: "Grammar mistakes create a positive impression of authenticity.", answer: false },
    { text: "Including volunteer experience can be valuable in an SOP.", answer: true },
    { text: "An SOP should never mention weaknesses or gaps.", answer: false },
    { text: "The opening paragraph should hook the reader's attention.", answer: true },
    { text: "Listing achievements without context is effective.", answer: false },
    { text: "SOP must be written in a formal but engaging tone.", answer: true },
    { text: "You should hide your passion and just state facts.", answer: false },
    { text: "Connecting personal narrative to program values is powerful.", answer: true }
];

const psBank = [
    { text: "A Personal Statement should be identical to the Statement of Purpose.", answer: false },
    { text: "PS focuses more on personal challenges and growth.", answer: true },
    { text: "It's okay to include sensitive controversial topics aggressively.", answer: false },
    { text: "Personal Statement should reflect your unique identity.", answer: true },
    { text: "Avoid any storytelling element in PS.", answer: false },
    { text: "Hardships should be described without demonstrating resilience.", answer: false },
    { text: "A great PS often shows authenticity and vulnerability maturely.", answer: true },
    { text: "You can reuse the same PS for every university.", answer: false },
    { text: "Career goals are irrelevant in a Personal Statement.", answer: false },
    { text: "Over-editing removes your voice.", answer: true },
    { text: "It should answer 'why you' and 'why this field'.", answer: true },
    { text: "Humor is always inappropriate in PS.", answer: false },
    { text: "Exaggeration of achievements is recommended.", answer: false },
    { text: "Personal Statement must include future research plans.", answer: false },
    { text: "Showing growth mindset is beneficial.", answer: true }
];

const rocketPartsList   = ["Main Engine", "Fuel Tank", "Guidance Computer", "Heat Shield", "Crew Capsule", "Nose Cone"];
const explorerPartsList = ["Helmet", "Oxygen Pack", "Exosuit", "Utility Belt", "Grip Gloves", "Jetpack"];

// Inline SVG icon snippets (used inside part chips & equip overlay)
const SVG = {
    ref: (id) => `<svg viewBox="0 0 24 24" width="100%" height="100%"><use href="#${id}"/></svg>`,
};

function chipMarkup(name, state) {
    let iconId;
    if      (state === 'broken')   iconId = 'i-warn';
    else if (state === 'equipped') iconId = 'i-check';
    else                            iconId = 'i-lock';
    const cls = state === 'equipped' ? 'equipped'
              : state === 'broken'   ? 'equipped broken'
              : '';
    return `<div class="part-chip ${cls}"><span class="chip-ico">${SVG.ref(iconId)}</span>${name}</div>`;
}

// ----------------- DOM -----------------
const $ = (id) => document.getElementById(id);
const introDiv   = $('introWrapper');
const gameArea   = $('gamePlayArea');
const beginBtn   = $('beginAdventureBtn');
const trueBtn    = $('trueBtn');
const falseBtn   = $('falseBtn');
const questionText  = $('questionText');
const questionType  = $('questionTypeBadge');
const feedbackMsg   = $('feedbackMsg');
const progressCounter = $('progressCounter');
const progressFill  = $('progressFill');
const rocketContainer   = $('rocketPartsContainer');
const explorerContainer = $('explorerPartsContainer');
const rocketSvg     = $('rocketSvg');
const explorerSvg   = $('explorerSvg');
const equipOverlay  = $('equipOverlay');
const equipTitle    = $('equipTitle');
const equipDesc     = $('equipDesc');
const equipIcon     = $('equipIcon');
const continueEquipBtn = $('continueFromEquip');
const confettiBox   = $('confetti');
const launchOverlay = $('launchOverlay');

// ----------------- STATE -----------------
let currentGameQuestions = [];
let currentQIndex = 0;
let sopCorrectCount = 0;
let psCorrectCount = 0;
let waitingForContinue = false;
let gameActive = false;
let answeredLock = false;
let rocketBroken = [];
let explorerBroken = [];

// ----------------- HELPERS -----------------
function shuffle(bank, count) {
    const a = [...bank];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, count);
}

function buildAlternatingGame() {
    const sop = shuffle(sopBank, 6);
    const ps  = shuffle(psBank, 6);
    const list = [];
    for (let i = 0; i < 6; i++) {
        list.push({ ...sop[i], type: 'sop' });
        list.push({ ...ps[i],  type: 'ps'  });
    }
    return list;
}

function updateProgressUI() {
    rocketContainer.innerHTML = rocketPartsList.map((name, i) => {
        const equipped = i < sopCorrectCount;
        const state = !equipped ? 'locked' : (rocketBroken[i] ? 'broken' : 'equipped');
        return chipMarkup(name, state);
    }).join('');
    explorerContainer.innerHTML = explorerPartsList.map((name, i) => {
        const equipped = i < psCorrectCount;
        const state = !equipped ? 'locked' : (explorerBroken[i] ? 'broken' : 'equipped');
        return chipMarkup(name, state);
    }).join('');
    rocketSvg.setAttribute('data-level', String(sopCorrectCount));
    explorerSvg.setAttribute('data-level', String(psCorrectCount));

    rocketSvg.querySelectorAll('.rk-part, .rk-flame').forEach(el => {
        const p = parseInt(el.getAttribute('data-part'), 10);
        el.classList.toggle('broken', !!rocketBroken[p - 1]);
    });
    explorerSvg.querySelectorAll('.ex-part').forEach(el => {
        const p = parseInt(el.getAttribute('data-part'), 10);
        el.classList.toggle('broken', !!explorerBroken[p - 1]);
    });

    const total = currentGameQuestions.length || 12;
    progressFill.style.width = `${(currentQIndex / total) * 100}%`;
}

function flashJustEquipped(type, partIndex) {
    const svg = type === 'sop' ? rocketSvg : explorerSvg;
    const selector = type === 'sop' ? '.rk-part' : '.ex-part';
    const el = svg.querySelector(`${selector}[data-part="${partIndex}"]`);
    if (!el) return;
    el.classList.remove('just-equipped');
    // force reflow to restart anim
    void el.getBoundingClientRect();
    el.classList.add('just-equipped');
}

function displayCurrentQuestion() {
    if (!gameActive || currentQIndex >= currentGameQuestions.length) return;
    const q = currentGameQuestions[currentQIndex];
    questionText.textContent = q.text;
    questionType.innerHTML = q.type === 'sop'
        ? `${SVG.ref('i-rocket')} SOP · ROCKET PART`
        : `${SVG.ref('i-astronaut')} PS · EXPLORER GEAR`;
    progressCounter.textContent = `QUESTION ${currentQIndex + 1} / ${currentGameQuestions.length}`;
    feedbackMsg.innerHTML = '';
    answeredLock = false;
    trueBtn.disabled = false;
    falseBtn.disabled = false;
    trueBtn.classList.remove('flash-correct', 'flash-wrong');
    falseBtn.classList.remove('flash-correct', 'flash-wrong');
}

function spawnConfetti() {
    if (!confettiBox) return;
    confettiBox.innerHTML = '';
    const colors = ['#ef233c', '#f5fbff', '#d90429', '#34d399', '#003f5c'];
    for (let i = 0; i < 60; i++) {
        const c = document.createElement('span');
        c.style.left = Math.random() * 100 + '%';
        c.style.background = colors[i % colors.length];
        c.style.animationDelay = (Math.random() * 0.5) + 's';
        c.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiBox.appendChild(c);
    }
    setTimeout(() => { confettiBox.innerHTML = ''; }, 2400);
}

function showEquipmentAnimation(type, stepNumber, isBroken) {
    let title, desc, iconId;
    if (type === 'sop') {
        const name = rocketPartsList[stepNumber-1];
        title = isBroken ? `DAMAGED PART — ${name}` : `ROCKET EQUIP — ${name}`;
        desc  = isBroken
            ? `A broken ${name} was bolted on. The rocket will fly… less reliably.`
            : `Part ${stepNumber} / 6 installed into Sky Rocket`;
        iconId = isBroken ? 'i-warn' : 'i-gear';
    } else {
        const name = explorerPartsList[stepNumber-1];
        title = isBroken ? `DAMAGED GEAR — ${name}` : `EXPLORER GEAR — ${name}`;
        desc  = isBroken
            ? `A faulty ${name} was strapped on. The explorer is in for a rough ride.`
            : `Equipment ${stepNumber} / 6 added to explorer suit`;
        iconId = isBroken ? 'i-warn' : 'i-spark';
    }
    equipTitle.textContent = title;
    equipDesc.textContent  = desc;
    equipIcon.innerHTML    = SVG.ref(iconId);
    equipOverlay.classList.toggle('is-broken', !!isBroken);
    equipOverlay.classList.add('active');
    if (!isBroken) spawnConfetti();
}

function processAnswer(qType, isBroken) {
    if (qType === 'sop') {
        rocketBroken[sopCorrectCount] = !!isBroken;
        sopCorrectCount++;
        updateProgressUI();
        if (!isBroken) flashJustEquipped('sop', sopCorrectCount);
        showEquipmentAnimation('sop', sopCorrectCount, isBroken);
    } else {
        explorerBroken[psCorrectCount] = !!isBroken;
        psCorrectCount++;
        updateProgressUI();
        if (!isBroken) flashJustEquipped('ps', psCorrectCount);
        showEquipmentAnimation('ps', psCorrectCount, isBroken);
    }
    waitingForContinue = true;
    trueBtn.disabled = true;
    falseBtn.disabled = true;
}

function finishMission() {
    gameActive = false;
    const brokenCount = rocketBroken.filter(Boolean).length + explorerBroken.filter(Boolean).length;
    if (brokenCount === 0) {
        questionType.innerHTML = `${SVG.ref('i-star')} ORBIT ACHIEVED`;
        questionText.innerHTML = `<b>FLAWLESS MISSION!</b><br/>Every part is pristine. The Sky Rocket soars into orbit.`;
        feedbackMsg.innerHTML  = `<svg style="width:14px;height:14px;color:var(--gold);fill:var(--gold)"><use href="#i-star"/></svg><span style="color: var(--gold)">12 / 12 correct · 0 damaged parts</span>`;
    } else {
        questionType.innerHTML = `${SVG.ref('i-warn')} MISSION COMPLETE — WITH DAMAGE`;
        questionText.innerHTML = `The Sky Rocket lifts off, but <b>${brokenCount}</b> damaged part${brokenCount>1?'s':''} rattle in the hull.<br/>Replay to fly a clean mission.`;
        feedbackMsg.innerHTML  = `<span style="color: var(--red)">${brokenCount} damaged part${brokenCount>1?'s':''} installed from wrong answers.</span>`;
    }
    trueBtn.style.display = 'none';
    falseBtn.style.display = 'none';
    progressCounter.textContent = 'COMPLETE 12 / 12';
    progressFill.style.width = '100%';

    launchOverlay.classList.add('active');
    setTimeout(() => launchOverlay.classList.remove('active'), 2400);

    const old = $('finalCustomBtn'); if (old) old.remove();
    const btn = document.createElement('button');
    btn.id = 'finalCustomBtn';
    btn.className = 'play-again';
    btn.innerHTML = `${SVG.ref('i-refresh')} PLAY AGAIN`;
    btn.onclick = resetToIntro;
    document.querySelector('.question-card').appendChild(btn);
}

function continueAfterEquip() {
    if (!waitingForContinue) return;
    equipOverlay.classList.remove('active');
    waitingForContinue = false;
    currentQIndex++;
    updateProgressUI();
    if (currentQIndex < currentGameQuestions.length) displayCurrentQuestion();
    else finishMission();
}

function handleAnswer(selected) {
    if (!gameActive || waitingForContinue || answeredLock) return;
    const q = currentGameQuestions[currentQIndex];
    if (!q) return;
    const correct = selected === q.answer;
    const btn = selected ? trueBtn : falseBtn;
    answeredLock = true;
    trueBtn.disabled = true;
    falseBtn.disabled = true;
    if (correct) {
        btn.classList.add('flash-correct');
        feedbackMsg.innerHTML = `<svg style="color:var(--green);fill:var(--green)"><use href="#i-check"/></svg><span style="color: var(--green)">Correct! Equipping part…</span>`;
        setTimeout(() => processAnswer(q.type, false), 450);
    } else {
        btn.classList.add('flash-wrong');
        feedbackMsg.innerHTML = `<svg style="color:var(--red);fill:var(--red)"><use href="#i-x"/></svg><span style="color: var(--red)">Wrong! A broken part will be installed…</span>`;
        setTimeout(() => processAnswer(q.type, true), 600);
    }
}

function startNewMatch() {
    currentGameQuestions = buildAlternatingGame();
    currentQIndex = 0;
    sopCorrectCount = 0;
    psCorrectCount = 0;
    rocketBroken = new Array(6).fill(false);
    explorerBroken = new Array(6).fill(false);
    waitingForContinue = false;
    gameActive = true;
    answeredLock = false;
    trueBtn.style.display = '';
    falseBtn.style.display = '';
    const old = $('finalCustomBtn'); if (old) old.remove();
    updateProgressUI();
    displayCurrentQuestion();
}

function resetToIntro() {
    gameActive = false;
    introDiv.style.display = '';
    gameArea.classList.remove('is-active');
    equipOverlay.classList.remove('active');
    launchOverlay.classList.remove('active');
}

function launchGame() {
    beginBtn.disabled = true;
    beginBtn.querySelector('.launch-btn-label').textContent = 'IGNITING…';
    setTimeout(() => {
        introDiv.style.display = 'none';
        gameArea.classList.add('is-active');
        startNewMatch();
        beginBtn.disabled = false;
        beginBtn.querySelector('.launch-btn-label').textContent = 'BEGIN ADVENTURE';
    }, 700);
}

// ----------------- BOOT -----------------
beginBtn.addEventListener('click', launchGame);
trueBtn.addEventListener('click', () => handleAnswer(true));
falseBtn.addEventListener('click', () => handleAnswer(false));
continueEquipBtn.addEventListener('click', continueAfterEquip);

updateProgressUI();