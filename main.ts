input.onButtonPressed(Button.B, function () {
    music.setVolume(pins.map(
    pins.analogReadPin(AnalogPin.P3),
    800,
    1020,
    50,
    255
    ))
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
