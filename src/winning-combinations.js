// This file exports all possible winning combinations for Tic Tac Toe
// It is a plain JavaScript configuration file (not a React component)

// Each combination represents a set of 3 positions on the board
// If the same player (X or O) occupies all 3 positions, they win
export const WINNING_COMBINATIONS = [

    // Top row
    [
        { row: 0, column: 0 },
        { row: 0, column: 1 },
        { row: 0, column: 2 },
    ],

    // Middle row
    [
        { row: 1, column: 0 },
        { row: 1, column: 1 },
        { row: 1, column: 2 },
    ],

    // Bottom row
    [
        { row: 2, column: 0 },
        { row: 2, column: 1 },
        { row: 2, column: 2 },
    ],

    // Left column
    [
        { row: 0, column: 0 },
        { row: 1, column: 0 },
        { row: 2, column: 0 },
    ],

    // Middle column
    [
        { row: 0, column: 1 },
        { row: 1, column: 1 },
        { row: 2, column: 1 },
    ],

    // Right column
    [
        { row: 0, column: 2 },
        { row: 1, column: 2 },
        { row: 2, column: 2 },
    ],

    // Diagonal (top-left → bottom-right)
    [
        { row: 0, column: 0 },
        { row: 1, column: 1 },
        { row: 2, column: 2 },
    ],

    // Diagonal (top-right → bottom-left)
    [
        { row: 0, column: 2 },
        { row: 1, column: 1 },
        { row: 2, column: 0 },
    ],
];