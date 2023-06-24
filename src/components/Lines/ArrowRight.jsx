import React from "react";

export default function ArrowRight() {
    return (
        <div className='triangle-pointing-right' style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: 0,
        }}></div>
    );
}
