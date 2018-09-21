NodexA Documentation
====================
Welcome to the NodexA Docmentation

Specifications
--------------
```
65534 Bytes of RAM (Aproximately 64KiB)
```

Code documentation
------------------

Each line of code consists of 16 bytes.
This are the functions

|Type|Function|Arguments|Description|Example|
|----|:--------:|---------|-----------|-------|
|Memory Managment|10|Location (2 Bytes), Value|Modifies a section of the ram|10 A5 41 (Change 10A5 to 41)|
|Memory Managment|11|Location (2 Bytes), Length, Location on file (Number of bytes specified on the length)| Replace a byte on the program (Temporal) with the value of the section of RAM specified|11 A5 41 01 30(Replace the 30 byte with the value in A541)
|Memory Managment|12|Location (2 Bytes), Number, Operand, Number|Make an operation and set the result to a section of the RAM. Operand: You can choose 4 operands (+,-,*,/) in respective order|12 A5 41 5 03 5 (Operate 5*5 and set the result to A541)|
|Execution Modification|20|Number, Operator, Number, iftrue, else|This is an if function, the operator can be (=,>,<,>=,<=), if the condition is true the code will jump to the line specified in `iftrue`, if its not it will jump to the line in `else`|20 12 01 1F 10 0D (If `12 > 1F` it will jump to line 10, if not it will jump to line 0D)|
|Execution Modification|21|Length, Number of line (Number of bytes specified on the length)|This function will jump to a specified line|21 02 01 A3 (Jump to the line 01A3)|
|Execution Modification|0F||End the program|0F

RAM
---
|Location|Description|
|--------|-----------|
|0 - 100 |Text buffer|