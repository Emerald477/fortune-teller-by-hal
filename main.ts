let Set_random_number = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Ask me a question!")
    music.playMelody("A G A F G A F G ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Ask me a question!")
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Set_random_number = randint(0, 3)
    if (Set_random_number == 1) {
        basic.showString("As Always!")
    } else if (Set_random_number == 2) {
        basic.showString("Perhaps?")
    } else if (Set_random_number == 3) {
        basic.showString("Definitely Not")
    }
})
