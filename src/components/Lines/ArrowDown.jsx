import React from "react";

export default function ArrowDown() {
    return (
        <div className='triangle-pointing-right' style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 0,
        }}></div>
    );
}
