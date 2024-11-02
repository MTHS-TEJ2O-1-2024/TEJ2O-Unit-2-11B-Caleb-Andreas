"""
Created by: Caleb Andreas
Created on: Nov 2024
This module is a Micro:bit MicroPython program that compares numbers.
"""

from microbit import *
import random


# Variables.
first_number = 0
second_number = 0

# Make variables random
first_number = random.randint(1, 99)
second_number = random.randint(1, 99)

# Happy at start.
display.clear()
display.show(Image.HAPPY)

while True:
    # Show first number on a button press
    if button_a.is_pressed():
        display.clear()
        display.scroll("#1: " + str(first_number))
        display.show(Image.HAPPY)

    # Show first number on a button press
    if button_b.is_pressed():
        display.clear()
        display.scroll("#2: " + str(second_number))
        display.show(Image.HAPPY)

    if accelerometer.was_gesture("shake"):
        if first_number < second_number:
            display.clear()
            display.scroll(str(first_number) + "<" + str(second_number))
            display.show(Image.SAD)
        else:
            display.clear()
            display.scroll(str(first_number) + ">" + str(second_number))
            display.show(Image.SAD)
