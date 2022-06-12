let btn = document.getElementById('btn');

function changeText() {
  if (btn.textContent === 'ON') {
    btn.textContent = 'OFF';
    btn.style.color = 'crimson';
    btn.style.boxShadow = '5px 5px 5px green';
  } else {
    btn.textContent = 'ON';
    btn.style.color = '#09ff09';
    btn.style.boxShadow = '5px 5px 5px red';
  }
}

btn.addEventListener('click', changeText);
