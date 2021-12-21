const orange_increment = document.getElementById('orange_increment');

const orange_decrement = document.getElementById('orange_decrement');


const orange_count_display = document.getElementById('orange_count_display');

orange_count_display.textContent = localStorage.getItem('orange') ?? "0";

function handleClick(event){
  const old_value = localStorage.getItem("orange") | 0;
  const new_value = event.currentTarget.id === "orange_increment" ? (old_value + 1) : (Math.max(0, old_value - 1));
  localStorage.setItem("orange", new_value);
  blue_count_display.textContent = new_value? new_value: "0";
}


orange_increment.addEventListener('click', handleClick);

orange_decrement.addEventListener('click', handleClick);
