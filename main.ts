let joyV = 0
let joyH = 0
radio.setGroup(1)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (joyH != pins.analogReadPin(AnalogPin.P1) || joyV != pins.analogReadPin(AnalogPin.P2)) {
        joyH = pins.analogReadPin(AnalogPin.P1)
        joyV = pins.analogReadPin(AnalogPin.P2)
        radio.sendValue("joyH", joyH)
        radio.sendValue("joyV", joyV)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("Up")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("Down")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("LEDG")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("LEDY")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("LEDR")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendString("LEDB")
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("LEDW")
    }
})
