const sketch = document.getElementById("sketch");
const gridSize = document.getElementById('gridSize');
const sizeCounter = document.getElementById('sizeCounter');
sizeCounter.textContent = `${gridSize.value}`
const clearBtn = document.getElementById('clear');


// returns a random css rgb color
const genColor = () => {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
}

// creates canvas with num * num fields
const createCanvas = (num) => {
    let c = 500 / num;

    for (let k = 0; k < num; k++) {
        const row = document.createElement("div");
        row.className = 'row';
        row.style = 'display: flex';
        for (let i = 0; i < num; i++) {
            let field = document.createElement("div");
            field.style = `width: ${c}px;height: ${c}px;`;
            field.onmouseover = () => { field.style.backgroundColor = genColor() }
            field.className = "field"
            row.appendChild(field);
        }
        sketch.appendChild(row)
    }
}

clearBtn.onclick = () => {
    sketch.innerHTML = '';
    createCanvas(gridSize.value);
}

gridSize.onchange = () => {
    sketch.innerHTML = "";
    sizeCounter.textContent = `${gridSize.value}`
    createCanvas(gridSize.value);
}

createCanvas(16);