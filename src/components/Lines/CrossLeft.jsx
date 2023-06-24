import React from "react";

export default function CrossLeft(params) {
    return (
        <React.Fragment>
            <div className='line' style={{
                width: 3,
                top: 0,
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
            }}></div>
            <div className="line" style={{
                height: 3,
                left: '50%',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
            }}></div>
            <div className="lineText">{params.text}</div>
        </React.Fragment>
    );
}
