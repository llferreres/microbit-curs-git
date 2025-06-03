input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("Hola")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendString("Adeu")
})
radio.setGroup(1)
