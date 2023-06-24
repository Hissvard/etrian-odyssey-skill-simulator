import React from "react";

export default function ArrowLeft() {
    return (
        <div className='triangle-pointing-left' style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
        }}></div>
    );
}
