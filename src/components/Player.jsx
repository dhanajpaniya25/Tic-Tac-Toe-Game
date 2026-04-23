import { useState } from "react";

// This component represents a single player (Player X or Player O)
// It allows editing the player's name and highlights the active player
export default function Player({ initialPlayerName, symbol, isActive, onChangeName }) {

    // State to track whether the player name is being edited or not
    const [isEditing, setIsEditing] = useState(false);

    // State to store the current player name (controlled input)
    const [playerName, setPlayerName] = useState(initialPlayerName);

    function handleEditClick() {
        // Toggle editing mode (true ↔ false)
        // Using a callback ensures we always get the latest state value
        setIsEditing((editing) => !editing);

        // If we are exiting edit mode (i.e., saving the name),
        // notify the parent component with updated name and symbol
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleNameChange(event) {
        // Update playerName state whenever user types in the input field
        // This makes it a controlled component (React controls the input value)
        setPlayerName(event.target.value);
    }

    return (
        <>
            {/* 
              Apply 'active' class if this player is currently playing
              This helps visually highlight the active player
            */}
            <li className={isActive ? 'active' : ''}>
                <span className="player">

                    {/* 
                      Conditionally render:
                      - Text when not editing
                      - Input field when editing
                    */}
                    {!isEditing ?
                        <span className="player-name">{playerName}</span>
                        :
                        <input
                            type="text"
                            required
                            value={playerName}
                            onChange={handleNameChange}
                        />
                    }

                    {/* 
                      Two-way binding:
                      Input value comes from state,
                      and onChange updates that state
                    */}

                    {/* Display player's symbol (X or O) */}
                    <span className="player-symbol">{symbol}</span>
                </span>

                {/* 
                  Button toggles between Edit and Save
                  Text changes based on editing state
                */}
                <button onClick={handleEditClick}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </li>
        </>
    );
}