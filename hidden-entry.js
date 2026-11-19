// 블루의 인물 기록 아래 영문명에서만 동작하는 숨은 입력란.
(()=>{
 const slot=document.getElementById('english-name');
 function edit(){
  if(slot.dataset.person!=='blue'||slot.querySelector('input'))return;
  const input=document.createElement('input');
  input.type='text';input.value='BLUE';input.className='name-editor';
  input.setAttribute('aria-label','영문명 입력');input.autocomplete='off';input.spellcheck=false;input.maxLength=32;
  input.setAttribute('autocapitalize','characters');
  const cancel=()=>{if(input.parentElement===slot)slot.textContent='BLUE';};
  input.addEventListener('keydown',e=>{
   if(e.key==='Escape'){e.preventDefault();e.stopPropagation();cancel();slot.focus();}
   if(e.key==='Enter'&&!e.isComposing){e.preventDefault();e.stopPropagation();if(input.value.trim().toUpperCase()==='BLIND')location.href='record-copy.html';}
  });
  input.addEventListener('blur',cancel);
  slot.replaceChildren(input);input.focus();input.select();
 }
 slot.addEventListener('dblclick',edit);
 // 키보드 사용자도 동일한 입력란에 접근할 수 있습니다.
 slot.addEventListener('keydown',e=>{if(e.target===slot&&e.key==='Enter'){e.preventDefault();edit();}});
})();
