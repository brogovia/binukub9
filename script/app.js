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

let order = [0,1,2,3,4,5,6,7,8];
let base = [0,1,2,3,4,5,6,7,8];

//Probabilite d'apparition d'un nombre dans les cases
const proba = 0.3;




function displayGrid() {
    //On recupere la taille de la grille choisie par l'utilisateur
    const e = document.getElementById("size-select");
    const size = e.options[e.selectedIndex].value;

    //On efface un eventuelle ancienne grill qui se trouve à l'interieur du container
    const grid = document.getElementById("grid");
    grid.innerHTML = '';

    const matrix = generateMatrix();

    //On fixe la valeur de la variable css --grid-size
    document.documentElement.style
        .setProperty('--grid-size', parseInt(size)+1);

    //Création des cells
    for (let i = 0; i < parseInt(size)+1; i++) {
        for (let j = 0; j < parseInt(size)+1; j++) {
            addCellToGrid(i,j);
        }
    }

    function generateMatrix() {
        const matrix = [];
        const slicedOrder = order.slice(0,size);
        const slicedBase = shuffle(base.slice(0,size));
        console.log(slicedBase);
        matrix.push([''].concat(slicedBase.map(x=>x+1)));
        console.log(matrix);
        for(let i=1; i<parseInt(size)+1; i++){
            matrix.push([slicedOrder[i-1]+1]);
            console.log(matrix);
            for(let j=1; j<parseInt(size)+1; j++){
                matrix[i].push(Math.random()>proba ? '' : origin[i-1][slicedBase[j-1]]);
            }
        }
        return matrix;
    }

    function addCellToGrid(i, j) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        if(i===0 || j===0){
            cell.classList.add("base");
        }
        cell.innerHTML = `${matrix[i][j]}`;
        grid.appendChild(cell);
    }

}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

