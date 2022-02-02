basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            . # . # .
            # . # . #
            `)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
