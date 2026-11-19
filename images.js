// 외부 이미지 파일의 직접 HTTPS URL을 입력하세요. GIF / WebP / PNG / JPG 지원.
// 빈 URL 또는 로딩 실패 시 기존 회색 배경/실루엣을 유지합니다.
window.NEWS_IMAGES = {
  pink: {article:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/pink%20article.png', portrait:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/pink%20portrait.png'}, // [핑크 기사 / 인물 이미지]
  gold: {article:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/gold%20article.png', portrait:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/gold%20portrait.png'}, // [골드 기사 / 인물 이미지]
  green: {article:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/green%20article.png', portrait:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/green%20portrait.png'}, // [그린 기사 / 인물 이미지]
  blue: {article:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/blue%20article.png', portrait:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/blue%20portrait.png'}, // [블루 기사 / 인물 이미지]
  black: {article:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/black%20article.png', portrait:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/black%20portrait.png'} // [블랙 기사 / 인물 이미지]
};
// 숨은 대화 사본의 프로필. 비워 두면 기존 회색 실루엣을 사용합니다.
window.COPY_IMAGES = {'AD-000':'', 'RE-001':''};
if(window.NEWS_PEOPLE) window.NEWS_PEOPLE.forEach(person=>{
  const images=window.NEWS_IMAGES[person.id];
  person.image.src=images.article.trim();
  person.portrait.src=images.portrait.trim();
});
