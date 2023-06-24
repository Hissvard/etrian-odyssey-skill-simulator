import React from "react";

export default function CornerTopRight(params) {
    return (
        <React.Fragment>
            <div className='line' style={{
                height: 3,
                left: 0,
                right: '50%',
                top: '50%',
                transform: 'translateY(-50%)',
            }}></div>
            <div className='line' style={{
                width: 3,
                left: '50%',
                top: '50%',
                bottom: 0,
            }}></div>
            <div className="lineText">{params.text}</div>
        </React.Fragment>
    );
}
