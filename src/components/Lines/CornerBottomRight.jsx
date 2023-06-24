import React from "react";

export default function CornerBottomRight(params) {
    return (
        <React.Fragment>
            <div className='line' style={{
                width: 3,
                top: 0,
                bottom: '50%',
                left: '50%',
            }}></div>
            <div className='line' style={{
                height: 3,
                top: '50%',
                right: '50%',
                left: 0,
            }}></div>
            <div className="lineText">{params.text}</div>
        </React.Fragment>
    );
}
