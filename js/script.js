// ---------- QUESTION BANKS (8 SOP + 8 PS) ----------
const sopBank = [
  { 
    text: "Statement of Purpose ရဲ့ အဓိကရည်ရွယ်ချက်မှာ အနာဂတ် Career Goal (အလုပ်အကိုင် ရည်မှန်းချက်)နှင့် Academic Plan ကိုတင်ပြရန်ဖြစ်သည်။", 
    answer: true,
    explanation: "SOP သည် မိမိ၏ ဖြတ်သန်းခဲ့ရသော အတွေ့အကြုံများနှင့် အနာဂတ် ရည်မှန်းချက်များကို ဆက်စပ်ပြပြီး၊ မိမိသွားမည့် လမ်းကြောင်းနှင့် ရည်ရွယ်ချက်ကို စနစ်တကျ ဖော်ပြရမည် ဖြစ်သည်။" 
  },
  { 
    text: "SOP ရေးတဲ့အခါ ကိုယ်တက်ချင်တဲ့ တက္ကသိုလ်က ပါမောက္ခတွေရဲ့ သုတေသန (Research) အကြောင်းကို ထည့်သွင်းဖော်ပြရန် မလိုပါ။ ", 
    answer: false,
    explanation: "မိမိတက်ရောက်လိုသော ကျောင်းမှ ပါမောက္ခများ၏ သုတေသနလုပ်ငန်းများကို လေ့လာပြီး ထည့်သွင်းဖော်ပြခြင်းဖြင့် မိမိ၏ စိတ်ဝင်စားမှုနှင့် အဆိုပါ ပရိုဂရမ်အပေါ် မည်မျှ လိုက်ဖက်ညီမှုရှိကြောင်း ပြသရာရောက်ပါသည်။" // ပြင်ဆင်ထားသည့်အချက်
  },
  { 
    text: "SOPရဲ့ စာစီစာကုံးထဲမှာ 'ကျွန်တော် ဘာကြောင့် ဒီဘာသာရပ်/တက္ကသိုလ်ကို တက်ရတာလဲ' ဆိုတဲ့ ခိုင်မာတဲ့ အကြောင်းပြချက် (Purpose) ပါရပါမယ်။", 
    answer: true,
    explanation: "ဘာသာရပ်အပေါ် မိမိ၏ စစ်မှန်သော စိတ်ဝင်စားမှုနှင့် ကျောင်း၏ သင်ရိုးညွှန်းတမ်းများနှင့် မိမိ၏ ရည်မှန်းချက် မည်မျှ ကိုက်ညီမှု ရှိသည်ကို သက်သေပြရာ ရောက်ပါသည်။" 
  },
  { 
    text: "SOP ထဲမှာ ကိုယ့်ရဲ့ ငယ်ဘဝအကြောင်းတွေ၊ မိသားစုအကြောင်းတွေကို စာမျက်နှာအပြည့် အသေးစိတ် ရေးရပါမည်။ ", 
    answer: false,
    explanation: "Professional ဆန်သော လေသံဖြင့် ရေးသားရန် လိုအပ်သည်။ မိမိ၏ ပညာရေး ခရီးစဉ်နှင့် တိုက်ရိုက် မသက်ဆိုင်ပါက ငယ်ဘဝ အကြောင်းအရာ အသေးစိတ်များကို ထည့်သွင်း ရေးသားရန် မလိုပါ။" 
  },
  { 
    text: "SOP အရေးအသားပုံစံ (Tone) သည် Professional ဆန်ပြီး စနစ်တကျ ရှိရပါမည်။ ", 
    answer: true,
    explanation: "ပညာရေးလောကမှ တာဝန်ရှိသူများသည် စနစ်တကျရှိပြီး သပ်ရပ်ပြတ်သားသော၊ အပြန်အလှန် လေးစားမှုရှိသော ဆက်သွယ်ပြောဆိုမှုမျိုးကို မျှော်လင့်ထားကြသည်။" 
  },
  { 
    text: "University Ranking မြင့်လို့ ဒီကျောင်းကို ရွေးချယ်တာပါဆိုတဲ့ အချက်တစ်ခုတည်းက SOP အတွက် လုံလောက်သော အကြောင်းပြချက် ဖြစ်သည်။", 
    answer: false,
    explanation: "ကျောင်းတိုင်းတွင် မိမိတို့၏ ထူးခြားသော အားသာချက်များ ရှိကြသည်။ ထိုကြောင့် မိမိ လျှောက်ထားရခြင်းမှာ ထိုကျောင်းနှင့် မည်မျှ သင့်တော် ကိုက်ညီကြောင်းကို သီးသန့် ကွဲပြားအောင် ထည့်သွင်း ရေးသားရမည်။" 
  },
  { 
    text: "SOP ထဲမှာ ဘွဲရပြီးရင် ဘယ်လိုလုပ်ငန်းခွင်မျိုးမှာ ဘာဆက်လုပ်မယ်ဆိုတဲ့ ၃ နှစ်စာ Plan ပါဝင်သင့်သည်။", 
    answer: true,
    explanation: "ဘွဲ့ရပြီးနောက် ရှေ့ဆက်မည့် အစီအစဉ်များကို ဖော်ပြခြင်းက မိမိတွင် ခိုင်မာပြတ်သားသော ရည်မှန်းချက်၊ လမ်းကြောင်းနှင့် အနာဂတ်အတွက် သေချာပြင်ဆင်ထားမှု ရှိကြောင်းကို ပေါ်လွင်စေသည်။" // ပြင်ဆင်ထားသည့်အချက်
  },
  { 
    text: "တူညီသော SOP တစ်စောင်ထဲကို ကိုယ်လျှောက်ထားလိုသောတက္ကသိုယ်အသီးသီးသို့ ပေးပိုလျှောက်ထားနိုင်သည်။", 
    answer: false,
    explanation: "တက္ကသိုလ်တစ်ခုချင်းစီတွင် မတူညီသော သင်ရိုးညွှန်းတမ်းများနှင့် အားသာချက်များ ရှိကြသဖြင့် မိမိ၏ SOP ကို သက်ဆိုင်ရာ ကျောင်းအလိုက် သီးသန့် အံဝင်ခွင်ကျဖြစ်အောင် (Tailor လုပ်ပြီး) ပြင်ဆင်ရေးသားရမည်။" 
  }
];
const psBank = [
  { 
    text: "Personal Statement ဆိုသည်မှာ ကိုယ့်ရဲ့ Grade တွေ၊ GPA တွေနောက်ကွယ်က ကိုယ့် Identity ကို ပြရခြင်း ဖြစ်သည်။", 
    answer: true,
    explanation: "Personal Statement သည် အမှတ်စာရင်းများထဲတွင် မမြင်နိုင်သော မိမိ၏ စရိုက်လက္ခဏာ၊ စိတ်အားထက်သန်မှုနှင့် မိမိ မည်သူမည်ဝါဖြစ်ကြောင်း (Identity) ကို ဆွဲဆောင်မှုရှိရှိ ပုံဖော်ပြသရမည့် နေရာဖြစ်သည်။" 
  },
  { 
    text: "ဘဝမှာ ကြုံတွေ့ခဲ့ရတဲ့ စိန်ခေါ်မှုတွေ၊ အခက်အခဲတွေကို ဘယ်လိုကျော်ဖြတ်ခဲ့လဲဆိုတဲ့ Story ကို Personal Statement မှာ ရေးလို့ရသည်။", 
    answer: true,
    explanation: "မိမိ ကြုံတွေ့ခဲ့ရသည့် ရုန်းကန်ရမှုများနှင့် ၎င်းတို့ကို မည်သို့ကျော်ဖြတ်ခဲ့ပုံ ဇာတ်ကြောင်းသည် မိမိ၏ ရင့်ကျက်မှုနှင့် စိတ်ဓာတ်ကြံ့ခိုင်မှုကို ပြသရာတွင် အလွန်ထိရောက်ပါသည်။" 
  },
  { 
    text: "Personal Statement ထဲမှာလည်း CV ထဲကအတိုင်း ကိုယ့်ရဲ့ ရမှတ်စာရင်းတွေကိုပဲ စာရင်းဇယားလိုက် ထပ်ပြီး စီပြရမည်။", 
    answer: false,
    explanation: "ရမှတ်များနှင့် အောင်မြင်မှုစာရင်းများကို CV နှင့် Transcript များတွင် တွေ့နိုင်ပြီးသားဖြစ်သဖြင့် PS တွင် အဆိုပါအချက်အလက်များကို ထပ်ခါတလဲလဲ စာရင်းစီပြရန် မလိုပါ။" 
  },
  { 
    text: "Personal Statement တွင် ကိုယ်လုပ်ခဲ့ဖူးသော လူမှုအကျိုးပြု Volunteer အတွေ့အကြုံများက ကိုယ့်အမြင်ကို ဘယ်လိုပြောင်းလဲစေခဲ့ကြောင်း ထည့်ရေးနိုင်သည်။", 
    answer: true,
    explanation: "ပရဟိတလုပ်ငန်းများမှတစ်ဆင့် မိမိ၏ အတွေးအခေါ်နှင့် ကမ္ဘာ့အမြင် မည်သို့ပြောင်းလဲတိုးတက်လာကြောင်း ဖော်ပြခြင်းက မိမိ၏ ဘက်စုံတော်မှုကို ပေါ်လွင်စေသည်။" 
  },
  { 
    text: "Personal Statement သည် ကိုယ့်ရဲ့ Soft Skills (ဥပမာ - ခေါင်းဆောင်မှု၊ စာနာနားလည်မှု) များကို ပေါ်လွင်အောင် ရေးရမည့်နေရာ ဖြစ်သည်။", 
    answer: true,
    explanation: "စာမေးပွဲအမှတ်များထက် လူသားဆန်သော အရည်အချင်းများဖြစ်သည့် ဦးဆောင်နိုင်စွမ်း၊ အများအပြားနှင့် ပူးပေါင်းဆောင်ရွက်နိုင်စွမ်း စသည့် Soft Skills များကို ပေါ်လွင်အောင် ရေးသားရမည့်နေရာဖြစ်သည်။" 
  },
  { 
    text: "ကျောင်းလျှောက်တဲ့အခါ SOP ရော Personal Statement ရောက တူတူပဲမို စာတစ်စောင်တည်းကို နာမည်ပြောင်းပြီး နှစ်နေရာလုံးမှာ တင်လိုရသည်။", 
    answer: false,
    explanation: "SOP သည် ပညာရေးနှင့် အလုပ်အကိုင်ရည်မှန်းချက် (Academic & Career Goals) ကို အဓိကထားပြီး၊ PS သည် မိမိ၏ ကိုယ်ရေးကိုယ်တာ ဇာတ်ကြောင်းနှင့် စရိုက်လက္ခဏာ (Personal Story & Values) ကို ဦးစားပေးသဖြင့် ရည်ရွယ်ချက် လုံးဝမတူပါ။" 
  },
  { 
    text: "Personal Statement ၏ အရေးအသားပုံစံ (Tone) သည် SOP ထက်စာလျှင် ပိုပြီး Personal ဖြစ်နိုင်ပြီး Storytelling ဆန်ဆန် ရေးသားနိုင်သည်။", 
    answer: true,
    explanation: "SOP ကဲ့သို့ Formal ဆန်လွန်းသော ပုံစံခွက်ကြီးအတိုင်း မဟုတ်ဘဲ မိမိဘဝအတွေ့အကြုံများကို ဆွဲဆောင်မှုရှိသော Storytelling ပုံစံဖြင့် ပိုမိုနီးကပ်စွာ ရေးသားခွင့်ရှိသည်။" 
  },
  { 
    text: "ကိုယ့်ရဲ့ အကျင့်စာရိတ္တ၊ Values (တန်ဖိုးထားမှုများ) နဲ့စိတ်ဓာတ်ကြံ့ခိုင်မှု(Resilience)ကိုပြသဖို အကောင်းဆုံး စာစီစာကုံးမှာ Personal Statement (PS) ဖြစ်သည်။", 
    answer: true,
    explanation: "မိမိ၏ အတွင်းစိတ်ခံယူချက်၊ ကိုယ်ကျင့်တန်ဖိုးများနှင့် အခက်အခဲများကို မဆုတ်မနစ် ကျော်ဖြတ်နိုင်စွမ်း (Resilience) တို့ကို စစ်မှန်စွာ ချပြရန် PS သည် အသင့်တော်ဆုံး စာစီစာကုံး ဖြစ်သည်။" 
  }
];

const ROCKET_PARTS = ["Main Engine", "Fuel Tank", "Guidance Computer", "Side Fins", "Crew Capsule", "Nose Cone"];

// DOM
const introDiv = document.getElementById('introWrapper');
const gameArea = document.getElementById('gamePlayArea');
const beginBtn = document.getElementById('beginAdventureBtn');
const trueBtn = document.getElementById('trueBtn');
const falseBtn = document.getElementById('falseBtn');
const questionText = document.getElementById('questionText');
const questionTypeBadge = document.getElementById('questionTypeBadge');
const questionIndex = document.getElementById('questionIndex');
const progressFill = document.getElementById('progressFill');
const progressCounter = document.getElementById('progressCounter');
const rocketContainer = document.getElementById('rocketPartsContainer');
const rocketSvg = document.getElementById('rocketSvg');
const rocketStage = document.querySelector('.rocket-stage');
const resultModal = document.getElementById('resultModal');
const resultCard = resultModal.querySelector('.result-card');
const resultTitle = document.getElementById('resultTitle');
const resultDesc = document.getElementById('resultDesc');
const resultIcon = document.getElementById('resultIcon');
const continueResultBtn = document.getElementById('continueResultBtn');
const launchOverlay = document.getElementById('launchOverlay');
const finalModal = document.getElementById('finalModal');
const finalCard = document.getElementById('finalCard');
const finalRank = document.getElementById('finalRank');
const finalMessage = document.getElementById('finalMessage');
const statTotal = document.getElementById('statTotal');
const statSop = document.getElementById('statSop');
const statPs = document.getElementById('statPs');
const playAgainFinalBtn = document.getElementById('playAgainFinalBtn');
const hudStatus = document.getElementById('hudStatus');
const hudIntegrity = document.getElementById('hudIntegrity');

// State
let currentQuestions = [];
let currentIndex = 0;
let answeredCount = 0;
let correctTotal = 0;
let sopCorrect = 0;
let psCorrect = 0;
let rocketBroken = new Array(6).fill(false);
let waitingForContinue = false;
let gameActive = false;
let lockedAnswer = false;
let pendingAnswer = null;

function shufflePick(arr, count) {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s.slice(0, count);
}

function generateGameQuestions() {
  const sop = shufflePick(sopBank, 3);
  const ps = shufflePick(psBank, 3);
  const out = [];
  for (let i = 0; i < 3; i++) {
    out.push({ ...sop[i], type: 'sop' });
    out.push({ ...ps[i], type: 'ps' });
  }
  return out;
}

function updateRocketUI() {
  rocketContainer.innerHTML = ROCKET_PARTS.map((name, i) => {
    const installed = i < answeredCount;
    const broken = installed && rocketBroken[i];
    const cls = !installed ? '' : (broken ? 'equipped broken' : 'equipped');
    const icon = !installed ? 'i-lock' : (broken ? 'i-warn' : 'i-check');
    return `<div class="part-chip ${cls}"><span class="chip-ico"><svg viewBox="0 0 24 24" width="100%" height="100%"><use href="#${icon}"/></svg></span>${name}</div>`;
  }).join('');
  rocketSvg.setAttribute('data-level', String(answeredCount));
  document.querySelectorAll('.rk-part, .rk-flame').forEach(el => {
    const p = parseInt(el.getAttribute('data-part'), 10);
    if (rocketBroken[p-1]) el.classList.add('broken');
    else el.classList.remove('broken');
  });
  const percent = (answeredCount / 6) * 100;
  progressFill.style.width = `${percent}%`;
  progressCounter.innerText = `QUESTION ${answeredCount} / 6`;

  // HUD
  const brokenCount = rocketBroken.slice(0, answeredCount).filter(Boolean).length;
  const integrity = answeredCount === 0 ? 100 : Math.round(((answeredCount - brokenCount) / answeredCount) * 100);
  hudIntegrity.innerText = `${integrity}%`;
  hudStatus.innerText = answeredCount === 0 ? 'STANDBY' : answeredCount === 6 ? 'READY' : 'ASSEMBLING';
}

// Advanced equip animation: drop + ring + sparks
function flashPart(index, isCorrect) {
  const parts = document.querySelectorAll('.rk-part');
  const partEl = parts[index-1];
  if (partEl) {
    partEl.classList.add('just-equipped');
    setTimeout(() => partEl.classList.remove('just-equipped'), 750);
  }
  // Shockwave ring
  const ring = document.createElement('div');
  ring.className = 'equip-ring' + (isCorrect ? '' : ' bad');
  rocketStage.appendChild(ring);
  setTimeout(() => ring.remove(), 750);

  // Sparks
  const sparks = document.createElement('div');
  sparks.className = 'equip-sparks' + (isCorrect ? '' : ' bad');
  sparks.innerHTML = '<span></span>'.repeat(8);
  rocketStage.appendChild(sparks);
  setTimeout(() => sparks.remove(), 700);
}

function showResultModalForAnswer(isCorrect, qData) {
  const iconSvg = isCorrect ? '<svg viewBox="0 0 24 24"><use href="#i-check"/></svg>' : '<svg viewBox="0 0 24 24"><use href="#i-x"/></svg>';
  resultIcon.innerHTML = iconSvg;
  resultTitle.innerText = isCorrect ? "CORRECT" : "INCORRECT";
  resultCard.classList.remove('correct', 'incorrect');
  resultCard.classList.add(isCorrect ? 'correct' : 'incorrect');
  const expl = qData.explanation || (isCorrect ? "Solid knowledge." : `The correct answer is ${qData.answer ? "TRUE" : "FALSE"}.`);
  resultDesc.innerText = expl;
  resultModal.classList.add('active');
}

function commitAnswerAndContinue() {
  if (!pendingAnswer) return;
  const { isCorrect, qData } = pendingAnswer;
  const partIndex = answeredCount;
  rocketBroken[partIndex] = !isCorrect;
  answeredCount++;
  if (isCorrect) {
    correctTotal++;
    if (qData.type === 'sop') sopCorrect++;
    else psCorrect++;
  }
  updateRocketUI();
  flashPart(partIndex + 1, isCorrect);
  pendingAnswer = null;

  // If all 6 parts are assembled, trigger launch
  if (answeredCount === 6) {
    setTimeout(finishGameAndLaunch, 900);
  }
}

function loadCurrentQuestion() {
  if (!gameActive || answeredCount >= 6) return;
  const q = currentQuestions[currentIndex];
  questionText.innerText = q.text;
  const typeLabel = q.type === 'sop' ? 'SOP CHALLENGE' : 'PS CHALLENGE';
  const iconId = q.type === 'sop' ? 'i-rocket' : 'i-astronaut';
  questionTypeBadge.innerHTML = `<svg width="12" height="12"><use href="#${iconId}"/></svg> ${typeLabel}`;
  questionIndex.innerText = String(answeredCount + 1).padStart(2, '0') + ' / 06';
  progressCounter.innerText = `QUESTION ${answeredCount+1} / 6`;
  lockedAnswer = false;
  trueBtn.disabled = false;
  falseBtn.disabled = false;
  document.getElementById('feedbackMsg').innerHTML = '';
}

function handleAnswer(selectedBool) {
  if (!gameActive || waitingForContinue || lockedAnswer || answeredCount >= 6) return;
  const q = currentQuestions[currentIndex];
  if (!q) return;
  const isCorrect = (selectedBool === q.answer);
  lockedAnswer = true;
  trueBtn.disabled = true;
  falseBtn.disabled = true;
  pendingAnswer = { isCorrect, qData: q };
  showResultModalForAnswer(isCorrect, q);
  waitingForContinue = true;
}

// 3 separate launch animations based on score — with countdown + ignition + shake
function runCountdown() {
  return new Promise(resolve => {
    const cdNumber = document.getElementById('cdNumber');
    const cdStatus = document.getElementById('cdStatus');
    launchOverlay.classList.add('active', 'cd-active');
    const steps = [
      { n: '3', s: 'IGNITION SEQUENCE' },
      { n: '2', s: 'FUEL PRESSURIZED' },
      { n: '1', s: 'ALL SYSTEMS GO' },
      { n: 'LIFTOFF', s: 'MAIN ENGINE START', go: true }
    ];
    let i = 0;
    const tick = () => {
      if (i >= steps.length) {
        launchOverlay.classList.remove('cd-active');
        return resolve();
      }
      const step = steps[i++];
      cdNumber.classList.remove('go');
      // re-trigger animation
      void cdNumber.offsetWidth;
      cdNumber.innerText = step.n;
      if (step.go) cdNumber.classList.add('go');
      cdStatus.innerText = step.s;
      setTimeout(tick, step.go ? 900 : 800);
    };
    tick();
  });
}

function triggerIgnition(variant) {
  launchOverlay.classList.add('igniting');
  // screen shake — hard for perfect, medium for mid, jittery for low
  document.body.classList.remove('shaking', 'shaking-hard');
  void document.body.offsetWidth;
  if (variant === 'low') {
    document.body.classList.add('shaking-hard');
    setTimeout(() => document.body.classList.remove('shaking-hard'), 3000);
  } else {
    document.body.classList.add('shaking');
    setTimeout(() => document.body.classList.remove('shaking'), 600);
  }
  setTimeout(() => launchOverlay.classList.remove('igniting'), 1700);
}

async function finishGameAndLaunch() {
  gameActive = false;
  let variant = 'low';
  if (correctTotal === 6) variant = 'perfect';
  else if (correctTotal >= 4) variant = 'mid';

  // Pre-launch countdown
  await runCountdown();

  // Show the scene + ignition burst together
  launchOverlay.setAttribute('data-variant', variant);
  triggerIgnition(variant);

  const duration = variant === 'low' ? 3800 : 3400;
  setTimeout(() => {
    launchOverlay.classList.remove('active');
    setTimeout(() => {
      launchOverlay.setAttribute('data-variant', '');
      showFinalScoreModal(variant);
    }, 300);
  }, duration);
}

function showFinalScoreModal(variant) {
  finalCard.classList.remove('perfect', 'mid', 'low');
  finalCard.classList.add(variant);

  statTotal.innerText = `${correctTotal}/6`;
  statSop.innerText = `${sopCorrect}/3`;
  statPs.innerText = `${psCorrect}/3`;

  let rank = 'MISSION REPORT';
  let msg = '';
  if (variant === 'perfect') {
    rank = 'FLAWLESS LAUNCH';
    msg = 'A perfect rocket. Every system nominal, every part pristine. You are mission-ready.';
  } else if (variant === 'mid') {
    rank = 'ORBIT REACHED';
    msg = 'Solid mission. The rocket reached orbit with minor damage — refine your weak areas and reach for the stars.';
  } else {
    rank = 'LOW THRUST';
    msg = 'Too many damaged parts. Review the SOP & PS guidelines, then try again to achieve a clean launch.';
  }
  finalRank.innerText = rank;
  finalMessage.innerText = msg;
  finalModal.classList.add('active');
}

function startNewMatch() {
  currentQuestions = generateGameQuestions();
  currentIndex = 0;
  answeredCount = 0;
  correctTotal = 0;
  sopCorrect = 0;
  psCorrect = 0;
  rocketBroken.fill(false);
  waitingForContinue = false;
  gameActive = true;
  lockedAnswer = false;
  pendingAnswer = null;
  updateRocketUI();
  loadCurrentQuestion();
}

function launchGame() {
  beginBtn.disabled = true;
  beginBtn.querySelector('.btn-label').innerText = 'IGNITING...';
  setTimeout(() => {
    introDiv.style.display = 'none';
    gameArea.classList.add('is-active');
    startNewMatch();
    beginBtn.disabled = false;
    beginBtn.querySelector('.btn-label').innerText = 'BEGIN MISSION';
  }, 500);
}

function resetToIntro() {
  gameActive = false;
  introDiv.style.display = '';
  gameArea.classList.remove('is-active');
  finalModal.classList.remove('active');
  resultModal.classList.remove('active');
  launchOverlay.classList.remove('active');
}

// Events
beginBtn.addEventListener('click', launchGame);
trueBtn.addEventListener('click', () => handleAnswer(true));
falseBtn.addEventListener('click', () => handleAnswer(false));
continueResultBtn.addEventListener('click', () => {
  if (!waitingForContinue) return;
  waitingForContinue = false;
  resultModal.classList.remove('active');
  commitAnswerAndContinue();   // updates answeredCount, rocket, etc.
  
  currentIndex++;              // move to next question
  
  if (answeredCount < 6) {
    loadCurrentQuestion();     // load the new question
  }
  // if answeredCount === 6, the game will finish via updateRocketUI's timeout check
});
playAgainFinalBtn.addEventListener('click', () => {
  finalModal.classList.remove('active');
  resetToIntro();
});

updateRocketUI();
