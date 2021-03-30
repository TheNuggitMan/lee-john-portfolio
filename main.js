function softScroll(pressed) {
switch (pressed) {
case about:
  document.getElementById("about").scrollIntoView({behavior:'smooth'})
  console.log('about');
  break;
case projects:
  document.getElementById("projects").scrollIntoView({behavior:'smooth'})
  console.log('projects');
  break;
case contact:
  document.getElementById("contact").scrollIntoView({behavior:'smooth'})
  console.log('contact');
  break;
case top:
  document.querySelector("html").scrollIntoView({behavior:'smooth'});
  console.log('top');
  break;
default:
  console.log('none pressed');
}
};
