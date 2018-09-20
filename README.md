NodexA Documentation
====================
Welcome to the NodexA Docmentation

Specifications
--------------
```
65534 Bytes of RAM (Aproximately 64KiB)
150 Printable characters at the same time
```

Code documentation
------------------

Each line of code consists of 16 bytes.
This are the functions

|Type|Function|Arguments|Description|Example|
|----|:--------:|---------|-----------|-------|
|Memory Managment|10|Location (2 Bytes), Value|Modifies a section of the ram|10 A5 41 (Change 10A5 to 41)|
|Memory Managment|11|Location (2 Bytes), Length, Location on file (Number of bytes specified on the length)| Replace a byte on the program (Temporal) with the value of the section of RAM specified|11 A5 41 01 30(Replace the 30 byte with the value in A541) 
|