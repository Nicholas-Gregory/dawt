export default function Cell({ 
    character, 
    width,
    onRightOrBottomOutline
}) {
    return (
        <div
            style={{
                width: `${width}px`,
                height: `${width}px`,
                position: 'relative'
            }}
        >
            <div
                style={{
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    width: '5px',
                    height: '5px',
                    position: 'absolute',
                    top: '-3px',
                    left: '-3px'
                }}
            ></div>
            <div
                style={{
                    visibility: onRightOrBottomOutline === 'r' || onRightOrBottomOutline === 'rb' ? 'visible' : 'hidden',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    width: '5px',
                    height: '5px',
                    position: 'absolute',
                    top: '-3px',
                    left: `${width - 3}px`
                }}
            ></div>
            <div
                style={{
                    visibility: onRightOrBottomOutline === 'b'  || onRightOrBottomOutline === 'rb' ? 'visible' : 'hidden',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    width: '5px',
                    height: '5px',
                    position: 'absolute',
                    top: `${width - 3}px`,
                    left: '-3px'
                }}
            ></div>
            <div
                style={{
                    visibility: onRightOrBottomOutline === 'rb' ? 'visible' : 'hidden',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    width: '5px',
                    height: '5px',
                    position: 'absolute',
                    top: `${width - 3}px`,
                    left: `${width -3}px`
                }}
            ></div>
            {character}
        </div>
    )
}