var correctNumber = 0;
let lastNumbers = []; 

function startGame() {
    correctNumber = Math.floor(Math.random() * (100 - 1) + 1);
    document.getElementById('art-start').style = 'display: none;';
    document.getElementById('art-game').style = 'display: block;';
};

function tryNumber() {
    const inputNumber = document.getElementById('input-number').value;
    document.getElementById('input-number').value = '';
    if (inputNumber >= 1 && inputNumber <= 100) {
        analyze(inputNumber);
    } else if (inputNumber < 1) {
        alert('the number entered must start from 1.');
    } else if (inputNumber > 100) {
        alert('You can only enter numbers below 100.');
    } else {
        alert('The input entered is invalid.');
    }
};

function analyze(num) {
    lastNumbers.push(num);
    updateLastNumbers();
    if (lastNumbers.length == 10) {
        lostGame();
        return;
    }
    document.getElementById('dintance').style = 'display: block;';
    var diference = 0;
    if (correctNumber > num) {
        diference = correctNumber - num;
        if (diference > 0 && diference <= 11) graphics(1);
        if (diference > 11 && diference <= 31) graphics(2);
        if (diference > 31) graphics(3);
    } else {
        diference = num - correctNumber;
        if (diference > 0 && diference <= 11) graphics(-1);
        if (diference > 11 && diference <= 31) graphics(-2);
        if (diference > 31) graphics(-3);
    }
    if (diference == 0) winGame();
}

function graphics(opt) {
    document.getElementById('left3').className = 'left3';
    document.getElementById('left2').className = 'left2';
    document.getElementById('left1').className = 'left1';
    document.getElementById('right3').className = 'right3';
    document.getElementById('right2').className = 'right2';
    document.getElementById('right1').className = 'right1';
    switch (opt) {
        case -3:
            document.getElementById('left3').className = 'left3-color';
            document.getElementById('left2').className = 'left2-color';
            document.getElementById('left1').className = 'left1-color';
        break;
        case -2:
            document.getElementById('left2').className = 'left2-color';
            document.getElementById('left1').className = 'left1-color';
        break;
        case -1:
            document.getElementById('left1').className = 'left1-color';
        break;
        case 1:
            document.getElementById('right1').className = 'right1-color';
        break;
        case 2:
            document.getElementById('right2').className = 'right2-color';
            document.getElementById('right1').className = 'right1-color';
        break;
        case 3:
            document.getElementById('right3').className = 'right3-color';
            document.getElementById('right2').className = 'right2-color';
            document.getElementById('right1').className = 'right1-color';
        break;
    }
}

function updateLastNumbers() {
    if (lastNumbers.length > 0) {
        var text = '<table><tr><td>No.</td>';
        for (let index = 0; index < lastNumbers.length; index++) text += '<td>' + (index + 1) + '</td>';
        text += '</tr><tr><td>Value</td>'
        lastNumbers.forEach(element => {text += '<td>' + element + '</td>'});
        text += '</tr></table>';
        document.getElementById('last-tries').innerHTML = text;
    } else {
        document.getElementById('last-tries').innerHTML = '';
    }
}

function lostGame() {
    document.getElementById('left3').className = 'left3-color';
    document.getElementById('left2').className = 'left2-color';
    document.getElementById('left1').className = 'left1-color';
    document.getElementById('right3').className = 'right3-color';
    document.getElementById('right2').className = 'right2-color';
    document.getElementById('right1').className = 'right1-color';

    document.getElementById('panel-insert').style = 'display: none;';
    document.getElementById('panel-datashow').style = 'margin-top: 5px;';

    document.getElementById('message').style = 'display: block;';
    document.getElementById('defeat').style = 'display: block;';

    document.getElementById('number-text').innerHTML = correctNumber;
    
    document.getElementById('restart-btn').style = 'display: block';
}

function winGame() {
    document.getElementById('left3').className = 'left3-color';
    document.getElementById('left2').className = 'left2-color';
    document.getElementById('left1').className = 'left1-color';
    document.getElementById('right3').className = 'right3-color';
    document.getElementById('right2').className = 'right2-color';
    document.getElementById('right1').className = 'right1-color';

    document.getElementById('panel-insert').style = 'display: none;';
    document.getElementById('panel-datashow').style = 'margin-top: 5px;';

    document.getElementById('message').style = 'display: block;';
    document.getElementById('victory').style = 'display: block;';

    document.getElementById('number-text').innerHTML = correctNumber;
    
    document.getElementById('restart-btn').style = 'display: block';
}