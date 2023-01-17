controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedY == 0) {
        speedX = 0
        speedY = -1
    }
})
function spawnFood () {
    mySprite = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Food)
    isEmptyPosition = false
    while (!(isEmptyPosition)) {
        x = 8 + 16 * randint(0, 9)
        y = 8 + 15 * randint(0, 7)
        isEmptyPosition = true
        for (let value of snake) {
            if (x == value.x && y == value.y) {
                isEmptyPosition = false
            }
        }
    }
    mySprite.setPosition(x, y)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedX == 0) {
        speedX = -1
        speedY = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedX == 0) {
        speedX = 1
        speedY = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedY == 0) {
        speedX = 0
        speedY = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    growth = 1
    spawnFood()
    info.changeScoreBy(1)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
    music.wawawawaa.play()
})
let y = 0
let x = 0
let isEmptyPosition = false
let growth = 0
let speedY = 0
let speedX = 0
let snake: Sprite[] = []
let mySprite: Sprite = null
game.splash("Welcome to Snake Game!" + " Press A to Start!")
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.AutoDestroy, true)
mySprite.setPosition(8, 8)
snake.push(mySprite)
mySprite = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.AutoDestroy, true)
mySprite.setPosition(24, 8)
snake.push(mySprite)
speedX = 1
speedY = 0
growth = 0
spawnFood()
info.setScore(0)
pause(2000)
forever(function () {
    music.playMelody("C5 A B G B A G C5 ", 240)
    if (growth == 0) {
        mySprite = snake.shift()
    } else {
        growth = 0
        mySprite = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.Player)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
    }
    x = snake[snake.length - 1].x + 16 * speedX
    y = snake[snake.length - 1].y + 15 * speedY
    mySprite.setPosition(x, y)
    snake.push(mySprite)
    if (snake.length == 80) {
        game.over(true)
    }
    pause(200)
})
