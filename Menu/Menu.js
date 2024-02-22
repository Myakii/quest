const { redirect } = require("react-router-dom");

document.getElementById('redirectionGame').addEventListener('click', redirect);

function redirect() {
    window.location('Game/Game.html');
}