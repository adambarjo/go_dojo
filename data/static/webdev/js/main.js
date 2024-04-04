const
  $menu = document.getElementById("menu"),
  $colourMode = document.getElementById("colour-mode"),
  $colourModeStylesheet = document.getElementById("colour-mode-stylesheet"),
  $nav = document.querySelector("nav");

$menu.onclick = () => {
  if ($nav.classList.contains("show")) {
    $nav.classList.remove("show");
    $nav.setAttribute("aria-expanded", "false");
  } else {
    $nav.classList.add("show");
    $nav.setAttribute("aria-expanded", "true");
  }
}

$colourMode.onclick = () => {
  const mode = $colourModeStylesheet.getAttribute("href");

  if (mode.match("dark-mode")) {
    $colourModeStylesheet.setAttribute("href", "/webdev/css/light-mode.css");
  } else {
    $colourModeStylesheet.setAttribute("href", "/webdev/css/dark-mode.css");
  }
}