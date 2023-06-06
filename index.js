var menuHapur=true;
document.getElementById("hapMenu").addEventListener("click", () => {
  if (menuHapur){
  document.getElementById("topNavMenu").style.display="contents";
  menuHapur=false;}
  else if (!menuHapur){
    document.getElementById("topNavMenu").style.display="none";
    menuHapur=true;
  }
});