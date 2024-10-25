# imagej_drop_align

This code is constructed to create stacks in Image J with following properties:
* stack images with alignment
* add date as a string in each image in stack
* add scale bar

This set of codes requires these plugins:
* TurboReg(https://bigwww.epfl.ch/thevenaz/turboreg/)
* StackReg(https://bigwww.epfl.ch/thevenaz/stackreg/)

*** Warning ***
This code takes sooooo long time to compile stacks.
In my environment, it took about 4 hours to compile 20 stacks with around 20 images.
The time consuming part is where StackReg is been activated.
