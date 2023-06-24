import React from "react";

export default function CrossTop(params) {
    return (
        <React.Fragment>
            <div className='line' style={{
                left: 0,
                right: 0,
                top: '50%',
                height: 3,
                transform: 'translateY(-50%)',
            }}></div>
            <div className='line' style={{
                left: '50%',
                top: '50%',
                bottom: 0,
                width: 3,
                transform: 'translateX(-50%)',
            }}></div>
            <div className="lineText">{params.text}</div>
        </React.Fragment>
    );
}
