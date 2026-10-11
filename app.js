const $ = s => document.querySelector(s);
const field = $('#heartField'), searchWrap = $('#searchWrap'), searchInput = $('#searchInput');
const letter = $('#letter'), paper = document.querySelector('.letter-paper'), subject = $('#letterSubject'), greeting = $('#letterGreeting'), body = $('#letterBody'), sign = $('#letterSign');
const burstLayer = $('#burstLayer');
const photoInput = $('#photoInput');
const photoUploadWrap = $('#photoUploadWrap');
const photoPicked = $('#photoPicked');
const changePhoto = $('#changePhoto');
const removePhotoAfter = $('#removePhotoAfter');
let letterPhotoNode = null;
let timers = [], lastScroll = 0, audioCtx = null, typingRAF = null, busy = false, lastTrailAt = 0, secretFound = false, currentLetterData = null;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lowPower = reducedMotion || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || (navigator.deviceMemory && navigator.deviceMemory <= 2);
if(lowPower) document.documentElement.classList.add('low-power');
const bonusPool = [
  'Mong hôm nay bạn có một khoảnh khắc rất nhỏ thôi, nhưng đủ để tự nhiên mỉm cười.',
  'Có thể bạn không để ý, nhưng sự vui vẻ của một người đôi khi làm cả một ngày học nhẹ đi rất nhiều.',
  'Giữ lại những điều khiến bạn hạnh phúc thật lòng nhé... Những điều ấy thường đáng nhớ hơn mình nghĩ.',
  'Nếu hôm nay hơi mệt, cho mình chậm lại một chút cũng chẳng sao. Ngày mai mình lại tiếp tục.',
  'Mong bạn luôn có một góc nhỏ để làm điều mình thích, kể cả giữa những ngày đầy bài vở.',
  'Có những ngày chẳng có gì đặc biệt, nhưng biết đâu sau này lại là những ngày mình nhớ nhất.',
  'Mong bạn gặp thật nhiều người tử tế, và cũng luôn giữ được sự tử tế rất riêng của mình.',
  'Đừng quên tự thưởng cho mình những niềm vui nhỏ sau những ngày cố gắng nhé.',
  'Mong mỗi lần nhìn lại năm học này, bạn sẽ nhớ nhiều tiếng cười hơn những lần mệt mỏi.',
  'Có một điều nhỏ: bạn không cần lúc nào cũng thật hoàn hảo để có một ngày thật hạnh phúc.',
  'Chúc cho những điều bạn đang chờ, đang kiên trì sẽ đến vào một thời điểm thật đẹp.',
  'Nếu có một ngày mọi thứ hơi rối, cứ làm từng việc một. Rồi mọi thứ sẽ dần ổn thôi.',
  'Mong bạn luôn có những người khiến giờ ra chơi cũng trở nên đáng mong chờ.',
  'Giữ lấy những khoảnh khắc vô tri, những câu chuyện linh tinh và cả những trận cười không báo trước nhé.',
  'Mong bạn có đủ tự tin để chọn điều mình thích, và đủ bình tĩnh để chờ điều mình cần.',
  'Một lời nhắn nhỏ thôi: những ngày bình thường cũng xứng đáng được vui.',
  'Mong bạn luôn tìm được một lý do nhỏ để thấy hôm nay dễ thương hơn hôm qua.',
  'Nếu có điều gì khiến bạn vui, cứ vui thật nhiều. Không cần một lý do thật lớn đâu.',
  'Mong những ngày tới có thêm vài bất ngờ dễ thương mà bạn hoàn toàn không đoán trước được.',
  'Hãy giữ lại phiên bản mình biết cười vì những chuyện rất vô tri nhé.',
  'Mong bạn học được nhiều điều hay, nhưng cũng đừng quên có thật nhiều chuyện vui để kể.',
  'Có thể một ngày nào đó bạn sẽ nhớ những điều rất nhỏ của 10B4. Mong khi ấy bạn sẽ mỉm cười.',
  'Mong bạn luôn giữ được ngọn lửa trong lòng cho những điều mà bạn trân quý.',
  'Nếu cần một ngày thật chậm, cứ cho mình một ngày như thế. Không phải lúc nào cũng cần chạy.',
  'Mong những điều tốt đẹp đến với bạn theo cách nhẹ nhàng nhất.',
  'Giữa rất nhiều việc phải làm, nhớ chừa một chút chỗ cho niềm vui nhé.',
  'Mong bạn có thật nhiều ngày mà việc đầu tiên muốn làm là bật cười.',
  'Có những điều chẳng cần nói thành lời vẫn khiến người ta thấy ấm lòng. Mong bạn gặp thật nhiều điều như thế.',
  'Mong mỗi tuần đều có ít nhất một chuyện khiến bạn muốn kể lại cho bạn bè.',
  'Nếu hôm nay chưa vui lắm thì cũng không sao. Còn rất nhiều ngày khác đang chờ.',
  'Mong bạn luôn giữ được sự tò mò với những điều mới và sự dịu dàng với chính mình.',
  'Một ngày đẹp không nhất thiết phải thật đặc biệt. Đôi khi chỉ cần có một tiếng cười đúng lúc.',
  'Mong bạn gặp được những người bạn đủ chân thành, để tiếng cười của bạn được cất lên một cách hồn nhiên nhất.',
  'Chúc bạn luôn đủ can đảm để dám thử thách, đủ kiên nhẫn để chờ và đủ niềm vui để tận hưởng với thành quả của mình.',
  'Chúc những kỷ niệm đẹp của tuổi học trò đến với bạn thật tự nhiên, chẳng cần cố tìm.',
  'Nếu có một điều đáng giữ lại, tôi mong đó là những lần bạn cười đến quên cả mệt.',
  'Mong bạn có thật nhiều khoảnh khắc nhỏ mà sau này nghĩ lại vẫn thấy: ừ, ngày hôm ấy đáng yêu thật.',
  'Hãy để những ngày sắp tới có thêm một chút ngẫu hứng, một chút bất ngờ và thật nhiều tiếng cười.',
  'Bạn biết không? Những niềm vui nhỏ cũng đáng được trân trọng.',
  'Và cuối cùng, mong bạn có một 20/10 thật hạnh phúc — theo đúng cách khiến bạn thấy thoải mái nhất.'
];
function bonusFor(d){
  if(d.teacher) return 'Mong cô cũng luôn có những khoảng thời gian thật nhẹ nhàng cho riêng mình, với nhiều niềm vui nhỏ sau những ngày bận rộn cùng lớp.';
  const n=Number(String(d.id).match(/\d+$/)?.[0]||1)-1;
  return bonusPool[Math.max(0,n)%bonusPool.length];
}
function openBonus(){
  if(!currentLetterData)return;
  const modal=$('#bonusModal'); if(!modal)return;
  $('#bonusText').textContent=bonusFor(currentLetterData);
  $('#bonusTitle').textContent=currentLetterData.teacher?'Một điều nhỏ gửi cô.':'Một điều nhỏ dành riêng cho bạn.';
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); ensureAudio(); tone(880,.13,.025,'sine');
}
function closeBonus(){const m=$('#bonusModal');if(!m)return;m.classList.remove('open');m.setAttribute('aria-hidden','true');}
function showReplyToast(text){
  const old=document.querySelector('.reply-toast'); if(old)old.remove();
  const t=document.createElement('div');t.className='reply-toast';t.textContent=text;document.body.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));
  later(()=>{t.classList.remove('show');later(()=>t.remove(),360)},1700);
}
function react(kind){
  const msgs={sweet:'♡ Nhận một chút dễ thươnggggggg.',received:'✦ Chúng mình nhận rồi nhaaa.',thanks:'🌷 10B4 nhận được lời hồi đáp-))).'};
  const colors={sweet:'♡',received:'✦',thanks:'🌷'};
  const layer=$('#touchTrail');
  if(layer && !reducedMotion){for(let i=0;i<6;i++){const h=document.createElement('span');h.className='trail-heart';h.textContent=colors[kind];h.style.setProperty('--x',(innerWidth-45)+'px');h.style.setProperty('--y',(innerHeight-58)+'px');h.style.setProperty('--dx',(Math.random()*60-30)+'px');h.style.setProperty('--dy',(-20-Math.random()*45)+'px');h.style.setProperty('--r',(Math.random()*30-15)+'deg');layer.appendChild(h);later(()=>h.remove(),800)}}
  ensureAudio();tone(kind==='received'?760:kind==='thanks'?620:900,.14,.028,'sine');haptic(8);showReplyToast(msgs[kind]);closeReply();
}
const studentTotal=()=>girls.length;
const performanceCount=(normal,low)=>lowPower?low:normal;
const later=(fn,ms)=>{const t=setTimeout(fn,ms);timers.push(t);return t};
const mobile=()=>matchMedia('(max-width:650px)').matches;

function ambientHearts(){
  const box=$('#ambientHearts'); box.innerHTML='';
  const count=mobile()?performanceCount(34,24):performanceCount(82,54);
  const frag=document.createDocumentFragment();
  for(let i=0;i<count;i++){
    const h=document.createElement('span'); h.className='ambient-heart'; h.textContent=i%6===0?'♥':'♡';
    h.style.left=Math.random()*100+'%'; h.style.top=Math.random()*100+'%';
    h.style.setProperty('--size',(mobile()?8:10)+Math.random()*(mobile()?18:25)+'px');
    h.style.setProperty('--dur',(12+Math.random()*14)+'s'); h.style.setProperty('--delay',(-Math.random()*24)+'s');
    h.style.setProperty('--opacity',(0.18+Math.random()*0.25).toFixed(2)); h.style.setProperty('--drift',(Math.random()*70-35)+'px');
    frag.appendChild(h);
  }
  box.appendChild(frag);
}

const heartSVG=`<svg viewBox="0 0 64 58" focusable="false" aria-hidden="true"><path d="M32 54.5 7.3 30.8C-3.1 20.7 1.1 3.4 15.1 2.2 23.2 1.5 28.6 6.2 32 11.1 35.4 6.2 40.8 1.5 48.9 2.2c14 1.2 18.2 18.5 7.8 28.6L32 54.5Z"/></svg>`;
function positions(n){
  const m=mobile(), cols=m?3:5, rowGap=m?104:138;
  return Array.from({length:n},(_,i)=>{
    const row=Math.floor(i/cols), col=i%cols;
    let x=(col+.5)/cols*100 + (row%2?2.5:-2.5) + Math.sin(i*2.31)*2.8;
    if(m) x=Math.max(14,Math.min(86,x)); else x=Math.max(9,Math.min(91,x));
    return {x,y:18+row*rowGap+Math.sin(i*1.8)*8,dy:Math.cos(i*1.4)*4,delay:-i*.17};
  });
}
function render(list){
  field.innerHTML=''; $('#count').textContent=list.length===girls.length?'40 trái tim · mỗi trái tim là một lá thư':`${list.length} kết quả`;
  field.style.height=(18+Math.ceil(list.length/(mobile()?3:5))*(mobile()?104:138)+70)+'px';
  const ps=positions(list.length),frag=document.createDocumentFragment();
  list.forEach((d,i)=>{const p=ps[i],b=document.createElement('button');b.type='button';b.className='heart-bubble';b.style.left=p.x+'%';b.style.top=p.y+'px';b.style.setProperty('--dy',p.dy+'px');b.style.setProperty('--delay',p.delay+'s');b.dataset.id=d.id;b.setAttribute('aria-label','Mở thư của '+d.name);b.innerHTML=`<span class="heart-icon">${heartSVG}<i></i></span><span class="heart-label">${d.name}</span>`; b.addEventListener('click',()=>choose(d,b));frag.appendChild(b);});
  field.appendChild(frag);
  const oldSecret=field.querySelector('.secret-heart'); if(oldSecret) oldSecret.remove();
  if(list.length===girls.length){ const s=document.createElement('button'); s.type='button'; s.className='secret-heart'; s.textContent='♡'; s.setAttribute('aria-label','Một điều nhỏ bí mật'); s.addEventListener('click',findSecret); field.appendChild(s); }
}

function ensureAudio(){
  try{audioCtx ||= new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==='suspended') audioCtx.resume(); return audioCtx}catch(e){return null}
}
function tone(freq,dur=.08,gain=.04,type='sine',delay=0){
  const a=ensureAudio(); if(!a)return; const now=a.currentTime+delay;
  const o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(freq,now);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(gain,now+.008);g.gain.exponentialRampToValueAtTime(.0001,now+dur);o.connect(g);g.connect(a.destination);o.start(now);o.stop(now+dur+.015);
}
function openingSound(){[523.25,659.25,783.99,1046.5].forEach((f,i)=>tone(f,.22,.045,i===3?'sine':'triangle',i*.055));}
function keySound(ch){
  if(!ch.trim())return;
  const punct=/[.,!?;:—–…]/.test(ch);
  tone(punct?510:650+Math.random()*170,punct?.045:.055,mobile()?(punct?.018:.035):(punct?.012:.024),'triangle');
}
function haptic(ms=12){try{if(navigator.vibrate)navigator.vibrate(ms)}catch(e){}}

function burst(x,y){
  // V1's signature moment, rebuilt: the selected heart touches an invisible
  // water surface. Rings spread first; only a few soft hearts follow.
  burstLayer.innerHTML='';
  burstLayer.classList.add('active','water-mode');
  burstLayer.style.setProperty('--ox',x+'px');
  burstLayer.style.setProperty('--oy',y+'px');

  const frag=document.createDocumentFragment();
  const glow=document.createElement('div');
  glow.className='water-glow';
  frag.appendChild(glow);

  // Wide concentric ripples: the wave must travel across the whole viewport,
  // not stop around the tapped heart. Diameter is based on the farthest corner.
  const farX=Math.max(x,innerWidth-x);
  const farY=Math.max(y,innerHeight-y);
  const wideDiameter=Math.hypot(farX,farY)*2.18;
  const ringCount=mobile()?7:8;
  for(let i=0;i<ringCount;i++){
    const ring=document.createElement('div');
    ring.className='water-ripple';
    ring.style.setProperty('--ring-delay',(i*105)+'ms');
    const fraction=i===0?.16:(.26+i*.115);
    ring.style.setProperty('--ring-size',Math.max(62,wideDiameter*fraction)+'px');
    frag.appendChild(ring);
  }

  // A handful of tiny bubbles rise out of the touch point.
  const bubbles=mobile()?10:14;
  for(let i=0;i<bubbles;i++){
    const b=document.createElement('span');
    b.className='water-bubble';
    const a=Math.random()*Math.PI*2;
    const dist=24+Math.random()*(mobile()?92:145);
    b.style.setProperty('--bx',Math.cos(a)*dist+'px');
    b.style.setProperty('--by',Math.sin(a)*dist-24-Math.random()*34+'px');
    b.style.setProperty('--bs',(3+Math.random()*(mobile()?7:10))+'px');
    b.style.setProperty('--bd',(Math.random()*180)+'ms');
    frag.appendChild(b);
  }

  // Keep a light trace of the heart language, but let the water do the opening.
  const hearts=mobile()?10:16;
  for(let i=0;i<hearts;i++){
    const h=document.createElement('span');
    h.className='burst-heart soft-heart';
    h.textContent=i%5===0?'♥':'♡';
    const a=Math.PI*2*(i/hearts)+(Math.random()-.5)*.35;
    const dist=(mobile()?42:58)+Math.random()*(mobile()?100:170);
    h.style.setProperty('--tx',Math.cos(a)*dist+'px');
    h.style.setProperty('--ty',Math.sin(a)*dist+'px');
    h.style.setProperty('--rot',(Math.random()*38-19)+'deg');
    h.style.setProperty('--size',(mobile()?7:8)+Math.random()*(mobile()?8:11)+'px');
    h.style.setProperty('--delay',(420+Math.random()*240)+'ms');
    h.style.setProperty('--dur',(1.25+Math.random()*.45)+'s');
    frag.appendChild(h);
  }

  burstLayer.appendChild(frag);
  later(()=>{
    burstLayer.classList.remove('active','water-mode');
    burstLayer.innerHTML='';
  },2200);
}
function clearTyping(){
  if(typingRAF){cancelAnimationFrame(typingRAF);typingRAF=null;}
  timers.forEach(clearTimeout); timers=[];
  document.querySelectorAll('.letter-progress i').forEach(x=>x.style.width='0%');
}

// A deliberately cinematic 20-second reveal: still genuinely character-by-character,
// but the total duration stays predictable on phones instead of depending on frame rate.
function typeLetter(d){
  greeting.textContent=''; body.innerHTML=''; sign.classList.remove('show');
  const progress=document.querySelector('.letter-progress i');
  const paras=[d.greeting,...d.paragraphs];
  const nodes=[greeting,...d.paragraphs.map(()=>document.createElement('p'))];
  d.paragraphs.forEach((_,i)=>{nodes[i+1].className='letter-paragraph';body.appendChild(nodes[i+1]);});
  const texts=paras.map(x=>String(x||''));
  const totalChars=texts.reduce((a,x)=>a+x.length,0);
  const totalDuration=mobile()?18000:16500;
  const paragraphGap=mobile()?620:520;
  const totalGaps=paragraphGap*3;
  const typingDuration=totalDuration-totalGaps;
  let elapsed=0, last=performance.now(), lastSound=0, soundIndex=0, lastVisible=0;
  const flat=[];
  texts.forEach((text,pi)=>{for(let ci=0;ci<text.length;ci++)flat.push({pi,ci,text});});

  // Variable rhythm: punctuation creates tiny local pauses while the overall clock remains fixed.
  const weightAt=(item)=>{
    const ch=item.text[item.ci];
    if(/[.!?…]/.test(ch)) return 2.0;
    if(/[,;:—–]/.test(ch)) return 1.35;
    if(ch===' ') return .42;
    return 1;
  };
  const weights=flat.map(weightAt);
  const weightTotal=weights.reduce((a,b)=>a+b,0);

  // Map elapsed time to character position, then reveal any characters that have arrived.
  const step=now=>{
    const dt=Math.min(80,now-last); last=now; elapsed+=dt;
    const typingElapsed=Math.max(0,elapsed-totalGaps*0.12);
    const t=Math.min(1,typingElapsed/typingDuration);
    const eased=t<.5 ? 2*t*t : 1-Math.pow(-2*t+2,2)/2;
    const targetWeight=eased*weightTotal;
    let acc=0,targetIndex=0;
    for(let i=0;i<weights.length;i++){acc+=weights[i];if(acc>=targetWeight){targetIndex=i+1;break;}targetIndex=weights.length;}
    while(lastVisible<targetIndex){
      const item=flat[lastVisible++];
      nodes[item.pi].append(document.createTextNode(item.text[item.ci]));
      const ch=item.text[item.ci];
      if(ch.trim() && (lastVisible-lastSound>=2 || /[.!?]/.test(ch))){
        keySound(ch); lastSound=lastVisible; soundIndex++;
      }
    }
    if(progress)progress.style.width=Math.round(Math.min(100,t*100))+'%';
    // Let each finished paragraph settle with a tiny ink glow.
    if(lastVisible>0){
      let cumulative=0;
      texts.forEach((text,i)=>{
        cumulative+=text.length;
        if(lastVisible>=cumulative && nodes[i].classList) nodes[i].classList.add('settled');
      });
    }
    if(t>=1){
      flat.forEach((item)=>{});
      nodes.forEach((n,i)=>{if(i===0)n.textContent=texts[0];else n.textContent=texts[i];n.classList.remove('typing');n.classList.add('settled');});
      if(progress)progress.style.width='100%';
      later(()=>{sign.classList.add('show');paper.classList.add('finished');letter.classList.add('finished');showAfterLetter();tone(880,.16,.028,'sine');},180);
      typingRAF=null; return;
    }
    typingRAF=requestAnimationFrame(step);
  };
  nodes[0].classList.add('typing');
  typingRAF=requestAnimationFrame(step);
}
function closeReply(){}
function showAfterLetter(){const el=$('#afterLetter');if(el){el.classList.add('show');el.setAttribute('aria-hidden','false');}}
function hideAfterLetter(){const el=$('#afterLetter');if(el){el.classList.remove('show');el.setAttribute('aria-hidden','true');}}

function clearLetterPhoto(){
  if(letterPhotoNode){
    letterPhotoNode.remove();
    letterPhotoNode=null;
  }
  if(photoInput) photoInput.value='';
  if(photoUploadWrap) photoUploadWrap.hidden=false;
  if(photoPicked) photoPicked.hidden=true;
}
function addPhotoToLetter(file){
  if(!file) return;
  if(!file.type.startsWith('image/')){
    showReplyToast('Mình chỉ nhận ảnh thôi nha ♡');
    return;
  }
  if(file.size > 12*1024*1024){
    showReplyToast('Ảnh hơi nặng rồi, chọn ảnh dưới 12MB nhaa ♡');
    if(photoInput) photoInput.value='';
    return;
  }
  const reader=new FileReader();
  reader.onload=()=>{
    const img=new Image();
    img.onload=()=>{
      const maxSide=1600;
      const scale=Math.min(1,maxSide/Math.max(img.naturalWidth,img.naturalHeight));
      const canvas=document.createElement('canvas');
      canvas.width=Math.max(1,Math.round(img.naturalWidth*scale));
      canvas.height=Math.max(1,Math.round(img.naturalHeight*scale));
      const ctx=canvas.getContext('2d',{alpha:false});
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
      const dataUrl=canvas.toDataURL('image/jpeg',0.86);

      clearLetterPhoto();
      const card=document.createElement('figure');
      card.className='photo-in-letter';
      const image=document.createElement('img');
      image.src=dataUrl;
      image.alt='Ảnh bạn đã chọn';
      image.decoding='async';
      card.appendChild(image);
      body.appendChild(card);
      letterPhotoNode=card;
      if(photoUploadWrap) photoUploadWrap.hidden=true;
      if(photoPicked) photoPicked.hidden=false;
    };
    img.onerror=()=>showReplyToast('Ảnh này không đọc được, thử ảnh khác nhaa ♡');
    img.src=reader.result;
  };
  reader.onerror=()=>showReplyToast('Không đọc được ảnh, thử lại nhaa ♡');
  reader.readAsDataURL(file);
}
if(photoInput) photoInput.addEventListener('change',e=>addPhotoToLetter(e.target.files?.[0]));
if(changePhoto) changePhoto.addEventListener('click',()=>photoInput?.click());
if(removePhotoAfter) removePhotoAfter.addEventListener('click',clearLetterPhoto);

function show(d){
  clearTyping(); clearLetterPhoto(); currentLetterData=d;
  subject.textContent=d.subject;
  paper.classList.remove('finished');
  greeting.textContent=''; body.innerHTML=''; sign.textContent=d.sign||'Từ các bạn nam, với một lời chúc nhỏ ♡'; sign.classList.remove('show');
  letter.classList.toggle('teacher-letter',!!d.teacher); paper.classList.toggle('teacher-paper',!!d.teacher); letter.classList.remove('finished'); hideAfterLetter(); closeReply();
  letter.classList.add('open'); letter.setAttribute('aria-hidden','false');
  later(()=>typeLetter(d),260);
}
function choose(d,b){if(busy)return;busy=true;lastScroll=scrollY; ensureAudio();openingSound();haptic(14);document.querySelectorAll('.heart-bubble').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');field.classList.add('choosing');const r=b.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2);later(()=>{show(d);busy=false},1520);}
function closeLetter(){
  if(!letter.classList.contains('open'))return;
  clearTyping();
  letter.classList.add('closing');
  haptic(8);
  later(()=>{
    letter.classList.remove('open','teacher-letter','closing','finished');
    paper.classList.remove('teacher-paper','finished'); hideAfterLetter(); closeReply(); closeBonus(); clearLetterPhoto(); currentLetterData=null;
    letter.setAttribute('aria-hidden','true');
    field.classList.remove('choosing');
    burstLayer.innerHTML=''; burstLayer.classList.remove('active');
    busy=false;
    render(searchInput.value?girls.filter(x=>x.name.toLocaleLowerCase('vi').includes(searchInput.value.trim().toLocaleLowerCase('vi'))):girls);
    later(()=>scrollTo({top:lastScroll,behavior:'auto'}),80);
  },520);
}


function findSecret(){
  if(secretFound)return;
  secretFound=true;
  ensureAudio(); tone(1046,.22,.035,'sine'); haptic(10);
  const toast=document.createElement('div'); toast.className='secret-toast'; toast.textContent='Bạn tìm thấy một điều mà không phải ai cũng để ý. ♡'; document.body.appendChild(toast);
  requestAnimationFrame(()=>toast.classList.add('show'));
  later(()=>{toast.classList.remove('show');later(()=>toast.remove(),420)},2800);
  for(let i=0;i<8;i++){
    const h=document.createElement('span');h.className='trail-heart';h.textContent=i%2?'♡':'♥';h.style.setProperty('--x',(innerWidth/2-5)+'px');h.style.setProperty('--y',(innerHeight-70)+'px');h.style.setProperty('--dx',(Math.cos(i/8*Math.PI*2)*35)+'px');h.style.setProperty('--dy',(-35-Math.sin(i/8*Math.PI*2)*28)+'px');h.style.setProperty('--r',(Math.random()*35-17)+'deg');document.querySelector('#touchTrail').appendChild(h);later(()=>h.remove(),800);
  }
}
function showFinale(){
  const f=$('#finale'); if(!f)return;
  f.classList.add('open'); f.setAttribute('aria-hidden','false'); ensureAudio(); openingSound();
}
function closeFinale(){const f=$('#finale');if(!f)return;f.classList.remove('open');f.setAttribute('aria-hidden','true');}
$('#finaleClose').addEventListener('click',closeFinale);
$('#bonusBtn').addEventListener('click',openBonus);
$('#bonusClose').addEventListener('click',closeBonus);
$('#bonusModal').addEventListener('click',e=>{if(e.target.id==='bonusModal')closeBonus();});
document.querySelector('.reaction-row').addEventListener('click',e=>{const b=e.target.closest('button[data-reaction]');if(b)react(b.dataset.reaction);});

function makeTrail(x,y){
  const layer=$('#touchTrail'); if(!layer || reducedMotion)return;
  const h=document.createElement('span'); h.className='trail-heart'; h.textContent=Math.random()>.78?'♥':'♡';
  h.style.setProperty('--x',x+'px'); h.style.setProperty('--y',y+'px'); h.style.setProperty('--dx',(Math.random()*26-13)+'px'); h.style.setProperty('--dy',(-8-Math.random()*24)+'px'); h.style.setProperty('--r',(Math.random()*40-20)+'deg');
  layer.appendChild(h); later(()=>h.remove(),720);
}
addEventListener('pointermove',e=>{
  if(e.pointerType==='mouse' || e.pointerType==='touch' || e.pointerType==='pen'){
    const now=performance.now();
    const interval=mobile()?110:85;
    if(now-lastTrailAt>interval){lastTrailAt=now;makeTrail(e.clientX,e.clientY)}
  }
},{passive:true});

$('#enterBtn').addEventListener('click',()=>{ensureAudio();$('#garden').scrollIntoView({behavior:'smooth'});});
$('#searchBtn').addEventListener('click',()=>{searchWrap.hidden=!searchWrap.hidden;if(!searchWrap.hidden)searchInput.focus();});
searchInput.addEventListener('input',()=>{const q=searchInput.value.trim().toLocaleLowerCase('vi');render(girls.filter(x=>x.name.toLocaleLowerCase('vi').includes(q)));});
$('#teacherBtn').addEventListener('click',()=>{if(busy)return;busy=true;lastScroll=scrollY;ensureAudio();openingSound();haptic(16);field.classList.add('choosing');const r=$('#teacherBtn').getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2);later(()=>{show(teacher);busy=false},1520);});
$('#closeLetter').addEventListener('click',closeLetter);addEventListener('keydown',e=>{if(e.key==='Escape'){closeReply();closeBonus();closeLetter();}});
letter.addEventListener('click',e=>{if(e.target===letter)closeLetter();});
$('#finale').addEventListener('click',e=>{if(e.target.id==='finale')closeFinale();});
addEventListener('resize',()=>{clearTimeout(window.__resize);window.__resize=setTimeout(()=>{ambientHearts();if(!letter.classList.contains('open'))render(searchInput.value?girls.filter(x=>x.name.toLocaleLowerCase('vi').includes(searchInput.value.trim().toLocaleLowerCase('vi'))):girls)},180)});
ambientHearts();render(girls);


const modal = document.getElementById('complimentModal');
const openBtn = document.getElementById('complimentOpen');
const closeBtn = document.getElementById('complimentClose');
const spinBtn = document.getElementById('complimentSpin');
const wheel = document.getElementById('complimentWheel');
const result = document.getElementById('complimentResult');

openBtn.addEventListener('click', () => {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
});

function closeComplimentModal() {
  if (spinning) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

closeBtn.addEventListener('click', closeComplimentModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeComplimentModal();
});
const compliments = [
  'Bạn có một nét đáng yêu rất riêng mà không cần giống bất kỳ ai ♡',
  'Nụ cười của bạn có thể khiến một ngày bình thường vui hơn đó!',
  'Bạn xứng đáng được yêu quý chỉ vì bạn là chính mình.',
  'Sự hiện diện của bạn là một điều dễ thương với mọi người.',
  'Bạn có quyền tự tin với những điều khiến mình khác biệt.',
  'Mong bạn luôn gặp được những người trân trọng điều tốt đẹp ở mình.',
  'Bạn đã cố gắng nhiều hơn những gì đôi khi bạn tự công nhận đấy!',
  '10B4 xin phép khen bạn một câu: bạn rất đáng yêu theo cách riêng của mìnhh',
  'Mong bạn luôn tỏa sáng theo cách mà chính bạn yêu thích.',
  'Nhắc nhẹ nè: bạn cũng xứng đáng được dịu dàng yêu thương ♡'
];

let spinning = false;
let rotation = 0;
let lastIndex = -1;

spinBtn.addEventListener('click', () => {
  if (spinning) return;

  spinning = true;
  spinBtn.disabled = true;
  spinBtn.innerHTML = '<span>Đang quay nèeee...</span><span>♡</span>';
  result.innerHTML =
    '<span class="result-mini-heart">♡</span><span>Hồi hộp chưa nè...</span>';

  let index = Math.floor(Math.random() * compliments.length);

  if (index === lastIndex) {
    index = (index + 1) % compliments.length;
  }

  lastIndex = index;

  // Mỗi lời khen ứng với một trong 8 múi.
  // 10 lời khen được phân bổ đều thành 8 kết quả trên bánh xe.
  const segmentAngle = 360 / 8;
  const wheelIndex = index % 8;
  const targetAngle = 360 - (wheelIndex + 0.5) * segmentAngle;
  const currentAngle = ((rotation % 360) + 360) % 360;
  const extraAngle = (targetAngle - currentAngle + 360) % 360;

  rotation += 360 * 5 + extraAngle;
  wheel.style.transform = `rotate(${rotation}deg)`;

  window.setTimeout(() => {
    result.innerHTML =
      `<span class="result-mini-heart">♡</span>` +
      `<span>${compliments[index]}</span>`;

    spinBtn.disabled = false;
    spinBtn.innerHTML = '<span>Quay lại lần nữa!</span><span>♡</span>';
    spinning = false;
  }, 4300);
});

if (
  modal &&
  openBtn &&
  closeBtn &&
  spinBtn &&
  wheel &&
  result
) {
  const compliments = [
    'Bạn có một nét đáng yêu rất riêng mà không cần giống bất kỳ ai ♡',
    'Nụ cười của bạn có thể khiến một ngày bình thường vui hơn đó!',
    'Bạn xứng đáng được yêu quý chỉ vì bạn là chính mình.',
    'Sự hiện diện của bạn là một điều dễ thương với mọi người.',
    'Bạn có quyền tự tin với những điều khiến mình khác biệt.',
    'Mong bạn luôn gặp được những người trân trọng điều tốt đẹp ở mình.',
    'Bạn đã cố gắng nhiều hơn những gì đôi khi bạn tự công nhận đấy!',
    '10B4 xin phép khen bạn một câu: bạn rất đáng yêu theo cách riêng của mìnhh',
    'Mong bạn luôn tỏa sáng theo cách mà chính bạn yêu thích.',
    'Nhắc nhẹ nè: bạn cũng xứng đáng được dịu dàng yêu thương ♡'
  ];

  let spinning = false;
  let rotation = 0;
  let lastIndex = -1;
  let spinTimeout = null;

/* ---------- 1. HIỆU ỨNG ÂM THANH ---------- */
const wheelSound = (() => {
  let audioCtx = null;
  let tickTimer = null;
  let soundEnabled = true;

  function getAudio() {
    try {
      if (!audioCtx) {
        const AudioContextClass =
          window.AudioContext || window.webkitAudioContext;

        if (!AudioContextClass) return null;
        audioCtx = new AudioContextClass();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      return audioCtx;
    } catch (error) {
      return null;
    }
  }

  function playTone(
    freq,
    duration = 0.12,
    volume = 0.08,
    type = 'sine',
    delay = 0
  ) {
    if (!soundEnabled) return;

    const ctx = getAudio();
    if (!ctx) return;

    const now = ctx.currentTime + delay;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(
      Math.min(volume, 0.22),
      now + 0.015
    );
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      now + duration
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start(now);
    oscillator.stop(now + duration + 0.04);
  }

  function stop() {
    if (tickTimer !== null) {
      clearTimeout(tickTimer);
      tickTimer = null;
    }
  }

  function start() {
    stop();

    if (!soundEnabled || !getAudio()) return;

    // Âm thanh khởi động
    playTone(500, 0.18, 0.10, 'triangle');
    playTone(670, 0.20, 0.12, 'triangle', 0.12);

    let interval = 95;

    function tick() {
      if (tickTimer === null || !soundEnabled) return;

      // Tiếng tích tắc khi vòng quay chạy
      playTone(1050, 0.045, 0.055, 'square');

      // Tích tắc chậm dần để tạo cảm giác hồi hộp
      interval = Math.min(260, interval + 3.5);
      tickTimer = setTimeout(tick, interval);
    }

    tickTimer = setTimeout(tick, 180);
  }

  function win() {
    stop();

    if (!soundEnabled) return;

    // Nhạc hiệu chiến thắng kiểu gameshow
    const notes = [
      [523.25, 0],
      [659.25, 0.13],
      [783.99, 0.26],
      [1046.50, 0.42],
      [783.99, 0.62],
      [1046.50, 0.82],
      [1318.50, 1.02],
      [1568.00, 1.25],
      [2093.00, 1.48]
    ];

    notes.forEach(([freq, delay], index) => {
      playTone(
        freq,
        index >= 6 ? 0.42 : 0.25,
        index >= 6 ? 0.17 : 0.13,
        'triangle',
        delay
      );
    });

    // Tiếng chuông lấp lánh kết thúc
    playTone(1760, 0.55, 0.09, 'sine', 1.65);
    playTone(2093, 0.65, 0.07, 'sine', 1.80);
  }

  return {
    start,
    stop,
    win,
    mute() {
      soundEnabled = false;
      stop();
    },
    unmute() {
      soundEnabled = true;
    }
  };
})();

/* ---------- 2. KẾT NỐI GIAO DIỆN ---------- */
const modal = document.getElementById('complimentModal');
const openBtn = document.getElementById('complimentOpen');
const closeBtn = document.getElementById('complimentClose');
const spinBtn = document.getElementById('complimentSpin');
const wheel = document.getElementById('complimentWheel');
const result = document.getElementById('complimentResult');  /* Mở vòng quay */
  openBtn.addEventListener('click', () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });

  /* Đóng vòng quay */
  function closeComplimentModal() {
    if (spinning) return;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    wheelSound.stop();
  }

  closeBtn.addEventListener('click', closeComplimentModal);

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeComplimentModal();
    }
  });

  /* Quay vòng quay */
  spinBtn.addEventListener('click', () => {
    if (spinning) return;

    spinning = true;
    spinBtn.disabled = true;

    // Phát âm thanh ngay khi người dùng bấm quay
    wheelSound.start();

    spinBtn.innerHTML =
      '<span>Đang quay nèeee...</span><span>♡</span>';

    result.innerHTML =
      '<span class="result-mini-heart">♡</span>' +
      '<span>Hồi hộp chưa nè...</span>';

    // Chọn ngẫu nhiên một lời khen
    let index = Math.floor(
      Math.random() * compliments.length
    );

    // Tránh nhận cùng lời khen hai lần liên tiếp
    if (index === lastIndex) {
      index = (index + 1) % compliments.length;
    }

    lastIndex = index;

    // Tính góc dừng theo 8 múi của bánh xe
    const segmentAngle = 360 / 8;
    const wheelIndex = index % 8;
    const targetAngle =
      360 - (wheelIndex + 0.5) * segmentAngle;

    const currentAngle =
      ((rotation % 360) + 360) % 360;

    const extraAngle =
      (targetAngle - currentAngle + 360) % 360;

    // Quay thêm 5 vòng rồi dừng ở kết quả
    rotation += 360 * 5 + extraAngle;
    wheel.style.transform = `rotate(${rotation}deg)`;

    // Chờ hiệu ứng quay hoàn tất
    spinTimeout = window.setTimeout(() => {
      // Dừng tiếng tích tắc và phát nhạc chiến thắng
      wheelSound.win();

      result.innerHTML =
        '<span class="result-mini-heart">♡</span>' +
        `<span>${compliments[index]}</span>`;

      spinBtn.disabled = false;
      spinBtn.innerHTML =
        '<span>Quay lại lần nữa!</span><span>♡</span>';

      spinning = false;
      spinTimeout = null;
    }, 4300);
  });
}

