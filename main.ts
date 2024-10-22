/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Oct 2024
 * This program compares numbers.
*/

// Variables.
let firstNumber: number
let secondNumber: number

// Set variables to be random
firstNumber = randint(0, 99)
secondNumber = randint(0, 99)

// Happy at start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Show firstNumber value when A button pressed.
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString("#1: " + (firstNumber).toString())
    basic.showIcon(IconNames.Happy)
})

// Show secondNumber value when B button pressed.
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString("#2: " + (secondNumber).toString())
    basic.showIcon(IconNames.Happy)
})

// Compare values of both of the variables.
input.onGesture(Gesture.Shake, function() {
    if (firstNumber < secondNumber)
        basic.showString((firstNumber).toString, "<", (secondNumber).toString)
})
