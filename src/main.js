import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";

import { initTheme } from "./features/theme/theme.js";

document.documentElement.classList.add("ready");

function initApp() {
  initTheme();

  // Descomente para usar o alternador de tema:
  // import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle.js";
  // document.body.appendChild(ThemeToggle());
}

initApp();
