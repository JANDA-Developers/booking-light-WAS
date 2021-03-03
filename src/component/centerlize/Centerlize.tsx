import React from 'react';

interface IProp { }

export const Centerlize: React.FC<IProp> = ({ children }) => {
    return <div style={{
        minHeight: "80vh",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }} >
        <div>
            {children}
        </div>
    </div>;
};
