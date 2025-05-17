const body = document.body;
body.style.margin = "0";
body.style.height = "100vh";
body.style.backgroundColor = "green";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.fontFamily = "Arial, sans-serif";
body.style.color = "white";
body.style.overflow = "hidden";

const loadingScreen = document.createElement("div");
loadingScreen.style.display = "flex";
loadingScreen.style.flexDirection = "column";
loadingScreen.style.alignItems = "center";
loadingScreen.style.gap = "20px";

const spinner = document.createElement("div");
spinner.style.width = "60px";
spinner.style.height = "60px";
spinner.style.border = "6px solid rgba(255, 255, 255, 0.3)";
spinner.style.borderTopColor = "white";
spinner.style.borderRadius = "50%";
spinner.style.animation = "spin 1s linear infinite";

const loadingText = document.createElement("div");
loadingText.textContent = "Loading...";
loadingText.style.fontSize = "1.5rem";

loadingScreen.appendChild(spinner);
loadingScreen.appendChild(loadingText);
body.appendChild(loadingScreen);

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

setTimeout(() => {
  body.removeChild(loadingScreen);
  const content = document.createElement("div");
  content.textContent = "Welcome! The app has loaded.";
  body.appendChild(content);
}, 3000);
