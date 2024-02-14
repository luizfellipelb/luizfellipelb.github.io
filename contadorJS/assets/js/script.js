// const add = document.getElementById('aumentar');
// const sub = document.getElementById('diminuir');
// const reset = document.getElementById('reset');


// let contador = 0;

// add.addEventListener('click', function(){
//   contador++;
//   result = contador;
//   document.querySelector('#result > span').textContent = result;
// });

// sub.addEventListener('click', function(){
//   contador--;
//   result = contador;
//   document.querySelector('#result > span').textContent = result;
// });

// reset.addEventListener('click', function(){
//   contador = 0;
//   result = contador;
//   document.querySelector('#result > span').textContent = contador;
// });

const result = document.getElementById('result');
const add = document.getElementById('aumentar');
const sub = document.getElementById('diminuir');
const reset = document.getElementById('reset');

let count = 1;
let intervalId = 0;

const updateValue = () => {
  result.innerHTML = count;
};

const increaseCount = () => {
  count++;
  updateValue();
};

const decreaseCount = () => {
  count--;
  updateValue();
};

const startInterval = (action) => {
  intervalId = setInterval(action, 90);
};

const stopInterval = () => {
  clearInterval(intervalId);
};

add.addEventListener('mousedown', () => startInterval(increaseCount));
sub.addEventListener('mousedown', () => startInterval(decreaseCount));
reset.addEventListener('click', () => {
  count = 0;
  updateValue();
});

document.addEventListener('mouseup', stopInterval);

// Touch events
add.addEventListener('touchstart', (event) => {
  event.preventDefault(); // Prevents the default touch behavior (e.g., scrolling)
  startInterval(increaseCount);
});

sub.addEventListener('touchstart', (event) => {
  event.preventDefault(); // Prevents the default touch behavior (e.g., scrolling)
  startInterval(decreaseCount);
});

document.addEventListener('touchend', stopInterval);




































