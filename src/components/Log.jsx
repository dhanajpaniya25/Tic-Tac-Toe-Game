// This component displays the history of moves made during the game
// It receives 'turns' which is an array of all moves played
export default function Log({ turns }) {
    return (
        <>
            {/* Ordered list to show each move step-by-step */}
            <ol id="log">
                {turns.map(turn =>

                    // Each turn is rendered as a list item
                    // The key is generated using row and column to uniquely identify each move
                    <li key={`${turn.square.row}${turn.square.col}`}>

                        {/* 
                          Display which player made the move
                          and the position (row, column) they selected
                        */}
                        {turn.player} selected {turn.square.row},{turn.square.col}
                    </li>
                )}
            </ol>
        </>
    );
}