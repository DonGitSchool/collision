def on_button_pressed_b():
    music.set_volume(pins.map(pins.analog_read_pin(AnalogPin.P3), 800, 1020, 50, 255))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P0) == 0:
        basic.show_leds("""
            # . . . .
                        . # . . .
                        . . # . .
                        . . . # .
                        . . . . #
        """)
        music.start_melody(music.built_in_melody(Melodies.FUNK), MelodyOptions.ONCE)
        pins.digital_write_pin(DigitalPin.P0, 1)
basic.forever(on_forever)
