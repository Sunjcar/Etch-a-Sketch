let container = document.createElement('container')
container.className='grid'
container.id = 'box'
document.body.appendChild(container);


//Creates a 16 * 16 grid
for (let i=0; i < 256; i++){
    let newDiv = document.createElement('div');
    newDiv.id = 'd';
    newDiv.className = 'grid-items';
    container.appendChild(newDiv);

}

//Resets grid to user input
function newGrid(){
    let el = document.getElementById('box')
    while (el.firstChild){
        el.removeChild(el.firstChild);
    }
    numGrid = parseInt(prompt("Enter desire grid 1-99"));
    gridSize = numGrid * numGrid;
    container.style.gridTemplateColumns = "repeat("+numGrid+", 30px)";
    container.style.gridTemplateRows = "repeat("+numGrid+", 30 px)";
    for (i=0; i<gridSize; i++){
        let newDiv = document.createElement('div');
        container.appendChild(newDiv).className = 'grid-items';
    }
    let grid = document.querySelectorAll('.grid-items');
grid.forEach(item => item.addEventListener('mouseover', (e) => {
    changeColor(item);

}));
}

let resetBtn = document.getElementById('btn');
resetBtn.addEventListener('click', event => {
    newGrid()
});

let grid = document.querySelectorAll('.grid-items');
grid.forEach(item => item.addEventListener('mouseover', (e) => {
    changeColor(item);

}));

function changeColor(item){
  item.style.background = getRandomColor()
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}