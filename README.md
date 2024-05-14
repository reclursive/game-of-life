# Conway's Game of Life
dependencies: Bootstrap, React Icons and styled components

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine

In computability theory, a system of data-manipulation rules (such as a model of computation, a computer's instruction set, a programming language, or a cellular automaton) is said to be Turing-complete or computationally universal if it can be used to simulate any **Turing machine**


A **Turing machine** is a mathematical model of computation describing an abstract machine that manipulates symbols on a strip of tape according to a table of rules.[2] Despite the model's simplicity, it is capable of implementing any computer algorithm.

# RULES 

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells,
n geometry, the square tiling, square tessellation or square grid is a regular tiling of the Euclidean plane. It has Schläfli symbol of {4,4}, meaning it has 4 squares around every vertex. Conway called it a quadrille.
The internal angle of the square is 90 degrees so four squares at a point make a full 360 degrees. It is one of three regular tilings of the plane. The other two are the triangular tiling and the hexagonal tiling.

 each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). Every cell interacts with its eight neighbors (In cellular automata, the Moore neighborhood is defined on a two-dimensional square lattice and is composed of a central cell and the eight cells that surround it.), which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbors dies, as if by underpopulation.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by overpopulation.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed, live or dead; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.