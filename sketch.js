const container = document.getElementById("container");
let rows = document.getElementsByClassName('gridRow');
const scale_button = document.getElementById('scale');
const reset_color = document.getElementById('reset');
let set_color;
let colorPicker = document.querySelectorAll('input');

var mouseDown = 0;
document.body.onmousedown = function() {
  mouseDown = 1;
}
document.body.onmouseup = function () {
  mouseDown = 0;
}


function pickedColor(){

  for (let i = 0; i < colorPicker.length; i++) {
        let red = document.getElementById('slideRed').value;
        let green = document.getElementById('slideGreen').value;
        let blue = document.getElementById('slideBlue').value;
        return 'rgb('+ red +' , '+ green +', '+ blue +')';
    }

  }

function colorChoose(){

  for (let i = 0; i < colorPicker.length; i++) {
      colorPicker[i].addEventListener("input", function(){
        let red = document.getElementById('slideRed').value;
        let green = document.getElementById('slideGreen').value;
        let blue = document.getElementById('slideBlue').value;
        let display = document.getElementById('change');
        display.style.backgroundColor = 'rgb('+ red +' , '+ green +', '+ blue +')';
        });
  }

}
colorChoose();
reset_color.addEventListener('click', (e) => {
  set_color.forEach((cells) => {
    cells.style.backgroundColor = '';
  })
})
scale_button.addEventListener('click', (e) => {
  makeRows(buttonWork());
});
function buttonWork () {
  return prompt('Pick Size', 16);
}

function changeColor() {
  set_color.forEach ((cells) => {
      cells.addEventListener('mouseover', (e) => {
        if (mouseDown == 1){
          cells.style.backgroundColor = pickedColor();
          }
        });

});
}

function makeRows(rowNum) {
  let last_cont = container.lastElementChild;
  while(last_cont) {
    container.removeChild(last_cont);
    last_cont= container.lastElementChild;
  }

  container.style.gridTemplateColumns = "repeat("+rowNum+", 1fr)";

  for (i = 0; i < rowNum; i++){
    for ( j = 0; j < rowNum; j++){
        var cell = document.createElement('div');
        container.appendChild(cell);
        cell.classList.add('cells');
        cell.setAttribute('style','background-color:""');
        set_color = document.querySelectorAll('.cells');
        }

  }
  changeColor();
  colorChoose();
}
