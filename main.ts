let NUMBER = 0
input.onButtonPressed(Button.A, function () {
    NUMBER = randint(5, 15)
    basic.showIcon(IconNames.Happy)
    while (0 < NUMBER) {
        NUMBER += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Skull)
    music.playMelody("C5 B A G F E D C ", 1000)
})
basic.forever(function () {
	
})
