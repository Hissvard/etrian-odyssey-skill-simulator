import React from "react";

export default function ArrowUp() {
    return (
        <div className='triangle-pointing-up' style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 0,
        }}></div>
    );
}
