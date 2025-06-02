function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  const main = document.getElementById("main");
  main.style.marginLeft = "250px";
  main.classList.add("dimmed"); // Add dim effect
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  const main = document.getElementById("main");
  main.style.marginLeft = "0";
  main.classList.remove("dimmed"); // Remove dim effect
  document.body.style.backgroundColor = "#e9e8e2";
}
