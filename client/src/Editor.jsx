import { useState } from "react";
import Grid from "./Grid";

export default function Editor({}) {
    const [gridDimensions, setGridDimensions] = useState({
        horizontalSpaces: 10,
        verticalSpaces: 10
    });
    const [horizontalSpacesInput, setHorizontalSpacesInput] = useState('');
    const [verticalSpacesInput, setVerticalSpacesInput] = useState('');
    const [characters, setCharacters] = useState([...new Array(gridDimensions.horizontalSpaces * gridDimensions.verticalSpaces)]);

    function handleGridDimesionsFormSubmit(e) {
        e.preventDefault();

        const newX = Number(horizontalSpacesInput);
        const newY = Number(verticalSpacesInput);

        setGridDimensions({
            horizontalSpaces: newX,
            verticalSpaces: newY
        });

        setCharacters([...new Array(newX * newY)])
    }

    return (
        <>
            <form onSubmit={handleGridDimesionsFormSubmit}>
                <label htmlFor="horizontal-spaces">
                    Horizonal Spaces:
                </label>
                <input
                    type="number"
                    value={horizontalSpacesInput}
                    onChange={e => setHorizontalSpacesInput(e.target.value)}
                />
                <label htmlFor="vertical-spaces">
                    Vertical Spaces:
                </label>
                <input
                    type='number'
                    value={verticalSpacesInput}
                    onChange={e => setVerticalSpacesInput(e.target.value)}
                />
                <button>Change Dimensions</button>
            </form>
            <Grid 
                horizontalSpaces={gridDimensions.horizontalSpaces}
                verticalSpaces={gridDimensions.verticalSpaces}
                cellWidth={50}
                characters={characters}
            />
        </>
    )
}