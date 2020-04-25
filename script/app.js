const origin = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['10', '11', '12', '13', '14', '15', '16', '17', '18'],
    ['19', '20', '21', '22', '23', '24', '25', '26', '27'],
    ['28', '29', '30', '31', '32', '33', '34', '35', '36'],
    ['37', '38', '39', '40', '41', '42', '43', '44', '45'],
    ['46', '47', '48', '49', '50', '50', '51', '52', '53'],
    ['55', '56', '57', '58', '59', '60', '61', '62', '63'],
    ['64', '65', '66', '67', '68', '69', '70', '71', '72'],
    ['73', '74', '75', '76', '77', '78', '79', '80', '81']
]


function GenerateGrid() {
    const e = document.getElementById("size-select");
    const container = document.getElementById("container");
    container.innerHTML = '';
    const grid = document.createElement('div');
    grid.id = 'grid';
    container.appendChild(grid);
    const size = e.options[e.selectedIndex].value;
    document.documentElement.style
        .setProperty('--grid-size', size);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            addCellToGrid(i,j);
        }
    }
}

function addCellToGrid(i, j) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerHTML = `${origin[i][j]}`;
    grid.appendChild(cell);
}