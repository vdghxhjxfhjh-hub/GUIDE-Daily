(()=>{
 const container=document.getElementById('messages'),nav=document.getElementById('record-nav');
 const make=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text)el.textContent=text;return el;};
 window.COPY_RECORDS.forEach((record,i)=>{
  const section=make('section','day');section.id='record-'+i;
  const link=make('a','',record.date);link.href='#'+section.id;link.append(make('small','',record.label));nav.append(link);
  const title=make('h3','day-label',record.date);title.append(make('span','',record.label));section.append(title);
  record.messages.forEach(([id,time,body])=>{
   const article=make('article','message '+(id==='AD-000'?'admin':'researcher'));
   const avatar=make('span','avatar');avatar.setAttribute('aria-hidden','true');
   const url=window.COPY_IMAGES?.[id]?.trim();if(url){const photo=make('img','');photo.alt='';photo.referrerPolicy='no-referrer';photo.onload=()=>avatar.classList.add('has-photo');photo.onerror=()=>{photo.remove();avatar.classList.remove('has-photo');};photo.src=url;avatar.append(photo);}
   const content=make('div','message-content'),meta=make('div','message-meta');
   meta.append(make('strong','',id),make('span','role',id==='AD-000'?'관리자':'연구원'));
   const date=make('time','',time);date.dateTime=record.date.replaceAll('.','-')+'T'+time;meta.append(date);
   content.append(meta,make('p','bubble',body));article.append(avatar,content);section.append(article);
  });container.append(section);
 });
})();
