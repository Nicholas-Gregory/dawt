import { useState } from "react"
import Cell from "./Cell";

export default function Grid({ 
    horizontalSpaces, verticalSpaces,
    cellWidth,
    characters
}) {
    function getOutlineProp(index) {
        if ((index + 1) % horizontalSpaces === 0 && index + 1 > characters.length - horizontalSpaces) return 'rb';
        if ((index + 1) % horizontalSpaces === 0) return 'r';
        if (index + 1 > characters.length - horizontalSpaces) return 'b';

        return 'n';
    }

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${horizontalSpaces}, ${cellWidth}px)`,
                margin: 15
            }}
        >
            {characters.map((character, index) => 
                <Cell 
                    character={character}    
                    width={cellWidth}
                    onRightOrBottomOutline={getOutlineProp(index)}
                />
            )}
        </div>
    )
}