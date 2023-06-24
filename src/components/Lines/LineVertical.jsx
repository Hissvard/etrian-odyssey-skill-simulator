import React from "react";

export default function LineHorizontal(params) {
    return (
        <React.Fragment>
            <div className='line' style={{
                left: '50%',
                transform: 'translateX(-50%)',
                top: 0,
                bottom: 0,
                width: 3,
            }}></div>
            <div className="lineText">{params.text}</div>
        </React.Fragment>
    );
}
