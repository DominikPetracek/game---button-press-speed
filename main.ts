input.onButtonPressed(Button.B, function () {
    if (Tap == false) {
        Tap = true
        if (Game) {
            Game_B += 1
        } else {
            Game_B = Game_B - 1
        }
        Winner("B", Game_B)
    }
})
function Winner (text: string, číslo: number) {
    basic.showString(text)
    basic.showNumber(číslo)
    if (číslo == 5) {
        basic.showString(" Winner is: ")
        basic.showString(text)
    } else {
        basic.pause(2000)
        Tap = false
        Game = false
    }
}
let Tap = false
let Game = false
let Game_B = 0
let Game_A = 0
Game_B = 0
Game = false
Tap = false
basic.showString("START")
basic.forever(function () {
    if (Game == false && Tap == false) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(randint(0, 0))
        Game = true
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
