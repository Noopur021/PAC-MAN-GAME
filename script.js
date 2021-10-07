document.addEventListener('DOMContentLoaded', function () {
    let scorecard = document.getElementById('score');
    let gamegrid = document.querySelector('.game-grid');
    const width = 28 //28*28 784
    let score = 0;


    //layout of the grid there must be 784 items in it
    var layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    //0- pac -dots
    //1- wall
    //2- ghost liar
    //3-power-pellet
    //4- empty
    const squares = [];
    function Createboard() {
        for (let i = 0; i < layout.length; i++) {
            let square = document.createElement('div');  //create a div element for each 784 

            gamegrid.appendChild(square);  // add that div to game-grid box as a child
            squares.push(square);

            if (layout[i] === 0) {
                squares[i].classList.add('pac-mandots');
            }

            else if (layout[i] === 1) {
                squares[i].classList.add('wall');
            }
            else if (layout[i] === 2) {
                squares[i].classList.add('ghost-liars');
            }
            else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet');
            }
        }
    }
    //calling function create board
    Createboard();
  pacmancurrentIndex = 480;
    squares[pacmancurrentIndex].classList.add('pac-man');

    function movepacman(e) {
        squares[pacmancurrentIndex].classList.remove('pac-man');

        switch (e.keyCode) {
            //left movement
            case 37: {
                //pacman must not be on left side edge
                if ((pacmancurrentIndex % width !== 0) && !squares[pacmancurrentIndex - 1].classList.contains('wall')
                    && !squares[pacmancurrentIndex - 1].classList.contains('ghost-liar'))
                    pacmancurrentIndex -= 1;
                break;
            }
            //up movement
            case 38:
                if ((pacmancurrentIndex - width >= 0) && !squares[pacmancurrentIndex - width].classList.contains('wall')
                    && !squares[pacmancurrentIndex - width].classList.contains('ghost-liar'))
                    pacmancurrentIndex -= width;
                break;
            //right movement
            case 39:

                if ((pacmancurrentIndex % width < width - 1) && !squares[pacmancurrentIndex + 1].classList.contains('wall')
                    && !squares[pacmancurrentIndex + 1].classList.contains('ghost-liar'))
                    pacmancurrentIndex += 1;
                break;
            //down movement
            case 40:
                if ((pacmancurrentIndex + width < width * width) && !squares[pacmancurrentIndex + width].classList.contains('wall')
                    && !squares[pacmancurrentIndex + width].classList.contains('ghost-liar'))
                    pacmancurrentIndex += width;
                break;

        }
        squares[pacmancurrentIndex].classList.add('pac-man');
        pacdotEaten();
        powerpelletEaten();
        checkgameover();
        checkforWin();
    }

    document.addEventListener('keyup', movepacman);


    //what happens when pacman surpasses a dot
    function pacdotEaten() {
        if (squares[pacmancurrentIndex].classList.contains('pac-mandots')) {
            score++;
            scorecard.innerHTML = score;
            squares[pacmancurrentIndex].classList.remove('pac-mandots');

        }
    }

    //power pellet eaten
    function powerpelletEaten() {
        if (squares[pacmancurrentIndex].classList.contains('power-pellet')) {

            score += 10;
            Ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScaredghosts, 10000);
            squares[pacmancurrentIndex].classList.remove('power-pellet');

        }

    }

    function unScaredghosts() {
        Ghosts.forEach(ghost =>
            ghost.isScared = false
        )

    }

    //creating ghost template
    class Ghost {
        constructor(className, startingIndex, speed) {
            this.className = className;
            this.startingIndex = startingIndex;
            this.speed = speed;
            this.currentImdex = startingIndex;
            this.timerId = NaN;
            this.isScared = false;
        }
    }

    let Ghosts = [
        new Ghost('pinky', 351, 200),
        new Ghost('blinky', 379, 150),
        new Ghost('clide', 380, 250),
        new Ghost('inky', 376, 350)
    ];

    //drawing ghosts on ggame grid

    Ghosts.forEach(ghosts => {
        squares[ghosts.currentImdex].classList.add(ghosts.className);
        squares[ghosts.currentImdex].classList.add('ghost');
    })


    //move the ghosts function
    Ghosts.forEach(ghost => MoveGhost(ghost))

    //write the function to move ghost
    function MoveGhost(ghost) {

        const directions = [-1, 1, width, -width];
        let direction = Math.floor(Math.random() * directions.length);


        ///after each nterval equals to speed of ghost function will execute
        ghost.timerId = setInterval(function () {
            //check whether new position of ghost do not contain ghost and wall
            if (!squares[ghost.currentImdex + direction].classList.contains('wall') && !squares[ghost.currentImdex + direction].classList.contains('ghost'))
            //ghost can move in hat direction
            {
                squares[ghost.currentImdex].classList.remove(ghost.className, 'ghost', 'ghost-liars', 'scared-ghost');

                ghost.currentImdex += direction;
                squares[ghost.currentImdex].classList.add(ghost.className, 'ghost', 'ghost-liars');
                   }
            else direction = directions[Math.floor(Math.random() * directions.length)];
            //when ghost is scared
            if (ghost.isScared) {
                squares[ghost.currentImdex].classList.add('scared-ghost');
            }
            //if scared ghost meets pacman
            if (ghost.isScared && squares[ghost.currentImdex].classList.contains('pac-man')) {
                squares[ghost.currentImdex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
                ghost.currentImdex = ghost.startingIndex;
                squares[ghost.currentImdex].classList.add(ghost.className, 'ghost');

                scrore += 100;
           }
      }, ghost.speed)

    }
    function checkgameover() {
        // check whether ghost and pacman are on same square
        if (squares[pacmancurrentIndex].classList.contains('ghost') && !squares[pacmancurrentIndex].classList.contains('scared-ghost')) {
            console.log('out')

            Ghosts.forEach(ghost => {
                clearInterval(ghost.timerId);
            })
            document.removeEventListener('keyup', movepacman);
            console.log("out");
            setTimeout(function () {
                alert("GAME OVER..TRY AGAIN")
            }, 500)
            scorecard.innerHTML = 'GAME OVER';
        }
    }

    function checkforWin() {
        if (score === 274) {
            Ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movepacman);
            scorecard.innerHTML = 'YOU WON';
        }}
})