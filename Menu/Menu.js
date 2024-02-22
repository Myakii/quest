const { redirect } = require("react-router-dom");

document.getElementById('redirectionGame').addEventListener('click', redirect);

function redirect() {
    window.location('http://127.0.0.1:5500/Game.html');
}