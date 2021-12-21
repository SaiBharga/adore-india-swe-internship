
const green_increment = document.getElementById('green_increment');

const green_decrement = document.getElementById('green_decrement');


const green_count_display = document.getElementById('green_count_display');

green_count_display.textContent = localStorage.getItem('green') ?? "0";

function handleClick(event){
  const old_value = localStorage.getItem("green") | 0;
  const new_value = event.currentTarget.id === "green_increment" ? (old_value + 1) : (Math.max(0, old_value - 1));
  localStorage.setItem("green", new_value);
  green_count_display.textContent = new_value ? new_value : "0";
}

green_increment.addEventListener('click', handleClick);
green_decrement.addEventListener('click', handleClick);
