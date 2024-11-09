/* -= CLASSES =- */
class Vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

/* -= CONSTANTS =- */
let mapSize: Vector2 = new Vector2(10, 10);

let map: string;
for (let i = 0; i < mapSize.x; i++)
    for (let j = 0; j < mapSize.y; j++)
        map[i][j] = "#";