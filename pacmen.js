// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  let velocity = setToRandom(10); // Random velocity
  let position = setToRandom(200); // Random initial position

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  // Set the initial position of the PacMan
  newimg.style.left = `${position.x}px`;
  newimg.style.top = `${position.y}px`;

  // Append the new image to the game div
  game.appendChild(newimg);

  // Return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    // Update the DOM with new position
    item.newimg.style.left = `${item.position.x}px`;
    item.newimg.style.top = `${item.position.y}px`;
  });

  setTimeout(update, 20);
}

function checkCollisions(item) {
  let gameWidth = window.innerWidth;
  let gameHeight = window.innerHeight;

  if (item.position.x + item.newimg.width >= gameWidth || item.position.x <= 0) {
    item.velocity.x = -item.velocity.x;
  }
  if (item.position.y + item.newimg.height >= gameHeight || item.position.y <= 0) {
    item.velocity.y = -item.velocity.y;
  }
}

function makeOne() {
  pacMen.push(makePac()); // Add a new PacMan
}

// Don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}