var highscoreContainer = document.querySelector('#highscoreContainer');
var highscoreList = document.querySelector('#highscoreList');
var goBack = document.querySelector('#goBack');
var clearHighscore = document.querySelector('#clearHighscore');

for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  var value = localStorage.getItem(key);
  var li = document.createElement('li');
  li.textContent = key + ' ' + value;
  highscoreList.appendChild(li);
}

goBack.addEventListener('click', function() {
  window.location.href = 'index.html';
});

clearHighscore.addEventListener('click', function() {
  localStorage.clear();
  highscoreList.innerHTML = '';
});