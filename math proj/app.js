const start= document.querySelector('.start')


start.onclick = () => {
    const number = document.getElementById("number").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const result = parseInt(number, from).toString(to).toUpperCase();
    document.getElementById("result").innerHTML = `Результат: ${result}`;
  }