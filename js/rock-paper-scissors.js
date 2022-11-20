let message = document.querySelector('.message');
let buttons = document.querySelectorAll('button');
let score = document.querySelector('.score');
let winnerScores = [0,0];

    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', playGame);
    }

    function playGame(e) {
        let plrSelection = e.target.innerText;
        let comSelection = Math.random();
        if (comSelection < .34) {
            comSelection = 'Rock';
        } else if (comSelection <= .67) {
            comSelection = 'Paper';
        } else {
            comSelection = 'Scissors';
        }

        let result = checkWinner(plrSelection, comSelection);

        if (result === 'Player') {
            result += ' wins!';
            winnerScores[0]++;
        }

        if (result === 'Computer') {
            result += ' wins!';
            winnerScores[1]++;
        }

        if (result === 'Draw') {
            result += ' it\'s a tie!'
        }

        score.innerHTML = 'Player: [' + winnerScores[0] + '] Computer: [' + winnerScores[1] + ']';
        
        messenger('Player: <strong>' + plrSelection + '</strong> Computer: <strong>' + comSelection + '</strong> <br>' + result);

        function messenger(selectionMessage){
            message.innerHTML = selectionMessage;
        }

        function checkWinner(player, computer) {
            if (player === computer){
                return 'Draw';
            }

            if (player === 'Rock') {
                if (computer === 'Paper') {
                    return 'Computer';
                } else {
                    return 'Player'
                }
            }

            if (player === 'Paper') {
                if (computer === 'Scissors') {
                    return 'Computer'
                } else {
                    return 'Player'
                }
            }

            if (player === 'Scissors') {
                if (computer === "Rock") {
                    return 'Computer'
                } else {
                    return 'Player'
                }
            }
        }
    } 