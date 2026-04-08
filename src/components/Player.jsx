import { useState } from "react";

export default function Player({ initialPlayerName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialPlayerName);

    function handleEditClick() {
        setIsEditing((editing) => !editing); // to get the latest value for state updation
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }
    return (
        <>
            <li>
                <span className="player">
                    {!isEditing ?
                        <span className="player-name">{playerName}</span>
                        :
                        <input type="text" required value={playerName} onChange={handleNameChange} />} {/*displaying input box or name conditionally rendered*/}
                    {/*Two Way Biniding Done Here*/}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button> {/*Button text conditionally rendered*/}
            </li>
        </>
    );
}