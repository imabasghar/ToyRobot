# Toy Robot Simulator

The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

Create an application that can read in commands of the following form:

```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```

`PLACE` will put the toy robot on the table in position `X,Y` and facing (F) `NORTH`, `SOUTH`, `EAST` or `WEST`.

- The origin (0,0) can be considered to be the south west most corner.

- The first valid command to the robot is a `PLACE` command, after that, any sequence of commands may be issued, in any order, including another `PLACE` command

- The application should discard all commands in the sequence until a
valid `PLACE` command has been executed.

- `MOVE` will move the toy robot one unit forward in the direction it is currently
facing.

- `LEFT` and `RIGHT` will rotate the robot 90 degrees in the specified direction without changing the position of the robot.

- `REPORT` will announce the `X`,`Y` and `F` of the robot

- This can be in any form, but standard output is sufficient.

- A robot that is not on the table can choose the ignore the `MOVE`, `LEFT`, `RIGHT` and `REPORT` commands.

- Input can be from a file, or from standard input, as the developer chooses.

- Provide test data to exercise the application.

**Constraints:**

The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot. Any move that would cause the robot to fall must be ignored.

**Example Input and Output:**

Example a)
```
PLACE 0,0,NORTH
MOVE
REPORT

> 0,1,NORTH
```

Example b)
```
PLACE 0,0,NORTH
LEFT
REPORT

> 0,0,WEST
```

Example c)
```
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT

> 3,3,NORTH
```

## Deliverables

The source files, the test data and any test code.
It is not required to provide any graphical output showing the movement of the toy robot.

## What are we looking for?

We'll be assessing your ability to write clean, well designed and well tested production-quality ruby.

We respect your time so please don't spend more than 2-3 hours working on this. We'd rather you submitted something partially complete after that time for us to discuss than spend days of your own time working on it.

## What comes next?

We'll send you feedback on your code. If the outcome isn't to the standard we require for the role we'll always aim to have you at least learn something from the process.

We may also want to discuss your code with you, to understand your approach and the tradeoffs you made.

Since a truly objective test of well-designed code is that it accepts changes in a reasonable manner, we often like to ask you to pair with someone from our team on an extension to the problem. For familiarity, we'll always try to do that on your machine, with your text editor.

**Thanks for applying for a job at Hooroo and good luck! :-)**
