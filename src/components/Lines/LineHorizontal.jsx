import React from "react";

export default function LineHorizontal(params) {
    return (
        <React.Fragment>
            <div className='line' style={{
                left: 0,
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                height: 3,
            }}></div>
            <div className="lineText">{params.text}</div>
        </React.Fragment>
    );
}
