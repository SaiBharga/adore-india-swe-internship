
const pink_increment = document.getElementById('pink_increment');

const pink_decrement = document.getElementById('pink_decrement');


const pink_count_display = document.getElementById('pink_count_display');

pink_count_display.textContent = localStorage.getItem('pink') ?? "0";

function handleClick(event){
  const old_value = localStorage.getItem("pink") | 0;
  const new_value = event.currentTarget.id === "pink_increment" ? (old_value + 1) : (Math.max(0, old_value - 1));
  localStorage.setItem("pink", new_value);
  blue_count_display.textContent = new_value? new_value: "0";
}


pink_increment.addEventListener('click', handleClick);

pink_decrement.addEventListener('click', handleClick);
