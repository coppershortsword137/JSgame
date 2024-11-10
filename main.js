let map = [];
let mapSize = {
    x: 10,
    y: 10
};
let buffer = [];

const Direction = Object.freeze({
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right'
});

const player = {
    position: {
        x: 5,
        y: 6
    },

    move(dir) {
        switch (dir) {
            case Direction.UP:
                player.position.y--;
                break;
            case Direction.DOWN:
                player.position.y++;
                break;
            case Direction.LEFT:
                player.position.x--;
                break;
            case Direction.RIGHT:
                player.position.x++;
                break;
        }
    }
};

let isKeyPressed = false;

start();
gameLoop();

function start() {
    // filling the map [LATER: map generator]
    for (let i = 0; i < mapSize.y; i++) {
        map[i] = [];
        for (let j = 0; j < mapSize.x; j++)
            map[i][j] = ".";
    }

    // filling the buffer
    refreshScreen();
}
function refreshScreen() {
    // filling the buffer with '.'
    for (let i = 0; i < mapSize.y; i++) {
        buffer[i] = [];
        for (let j = 0; j < mapSize.x; j++)
            buffer[i][j] = ".";
    }

    // drawing the player
    buffer[player.position.y][player.position.x] = "<b>#</b>";
}
function gameLoop() {
    // refresh the buffer
    refreshScreen();

    // check pressed keys
    window.addEventListener('keyup', function(event) {
        switch (event.key){
            case 'w' || 'W':
                isKeyPressed = false;
                break;
            case 's' || 'S':
                isKeyPressed = false;
                break;
            case 'a' || 'A':
                isKeyPressed = false;
                break;
            case 'd' || 'D':
                isKeyPressed = false;
                break;
        }
    });
    window.addEventListener('keydown', function(event) {
        if (isKeyPressed === false){
            switch (event.key){
                case 'w' || 'W':
                    isKeyPressed = true;
                    player.move(Direction.UP)
                    break;
                case 's' || 'S':
                    isKeyPressed = true;
                    player.move(Direction.DOWN)
                    break;
                case 'a' || 'A':
                    isKeyPressed = true;
                    player.move(Direction.LEFT)
                    break;
                case 'd' || 'D':
                    isKeyPressed = true;
                    player.move(Direction.RIGHT)
                    break;
            }
        }
    });

    // draw the map
    drawScreen();

    // repeat the cycle
    requestAnimationFrame(gameLoop);
}

function drawScreen() {
    // output
    let content = "";
    for (let i = 0; i < mapSize.y; i++) {
        for (let j = 0; j < mapSize.x; j++)
            content += " " + buffer[i][j] + " ";
        content += "<br>";
    }
    content += `X: ${player.position.x}; Y: ${player.position.y}` + "<br>";
    content += `${isKeyPressed}`;
    document.getElementById("paragraph").innerHTML = content;
}