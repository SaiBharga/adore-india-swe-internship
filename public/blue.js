
const blue_increment = document.getElementById('blue_increment');

const blue_decrement = document.getElementById('blue_decrement');


const blue_count_display = document.getElementById('blue_count_display'); 

blue_count_display.textContent = localStorage.getItem('blue') ?? "0";

function handleClick(event){
  const old_value = localStorage.getItem("blue") | 0;
  const new_value = event.currentTarget.id === "blue_increment" ? (old_value + 1) : (Math.max(0, old_value - 1));
  localStorage.setItem("blue", new_value);
  blue_count_display.textContent = new_value? new_value: "0";
}


blue_increment.addEventListener('click',handleClick);

blue_decrement.addEventListener('click',handleClick); 
