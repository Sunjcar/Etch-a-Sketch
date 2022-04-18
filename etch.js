const container = document.createElement('container')
container.className='grid'
container.id = 'box'
document.body.appendChild(container);
const clearBtn = document.getElementById('clear');
const blackBtn = document.getElementById('black');
const rainbowBtn = document.getElementById('rainbow');

//Creates a 16 * 16 grid
function createGrid(){
    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'gridItems';
        newDiv.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        container.appendChild(newDiv); 
    }
};
createGrid();

//Resets grid via slider
const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function(){
    let el = document.getElementById('box')
    while (el.firstChild){
        el.removeChild(el.firstChild);
    }
    numGrid = document.getElementById('slider').value;
    screenVal.textContent = numGrid;
    gridSize = numGrid * numGrid;
    container.style.gridTemplateColumns = "repeat("+numGrid+",1fr)";
    container.style.gridTemplateRows = "repeat("+numGrid+",1fr)";
    for (i=0; i<gridSize; i++){
        let newDiv = document.createElement('div');
        container.appendChild(newDiv).className = 'gridItems';
        }
        let grid = document.querySelectorAll('.gridItems');
        grid.forEach(item => item.addEventListener('mouseover', (e) => {
            changeColor(item);}));
});

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

function defaultColor(){
    let letters = "0"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random())];
    }
    return color;
}

function colorBlack(style){
    style.style.background = defaultColor()
}

clearBtn.addEventListener('click', () => {
    let grid = document.querySelectorAll('.gridItems');
    grid.forEach(grid => {
        grid.style.backgroundColor = 'white';
    })
})

blackBtn.addEventListener('click',() => {
    let grid = document.querySelectorAll('.gridItems');
    grid.forEach(style => style.addEventListener('mouseover', (e) => {
        colorBlack(style);}));
})

rainbowBtn.addEventListener('click',() => {
    let grid = document.querySelectorAll('.gridItems');
    grid.forEach(item => item.addEventListener('mouseover', (e) => {
        changeColor(item);}));
})
