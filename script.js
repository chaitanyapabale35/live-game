const choices = ['stone', 'paper', 'scissor'];

function play(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = capitalize(userChoice);
  document.getElementById('computer-choice').textContent = capitalize(computerChoice);

  const winner = getWinner(userChoice, computerChoice);
  document.getElementById('winner').textContent = winner;
}

function getWinner(user, computer) {
  if (user === computer) return "It's a Draw!";

  if (
    (user === 'stone' && computer === 'scissor') ||
    (user === 'paper' && computer === 'stone') ||
    (user === 'scissor' && computer === 'paper')
  ) {
    return "You Win! 🎉";
  } else {
    return "Computer Wins! 😞";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}