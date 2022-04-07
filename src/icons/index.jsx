import React from "react";

export const OnlineStatus = ({ color, size, title, className }) => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 -1 17 15"
            xmlns="http://www.w3.org/2000/svg"
            height={size ? size : "29px"}
            width={size ? size : "21px"}
            style={{ color }}
            className={className ? className : 'ListIcon'}
        >
            { title ? <title>{title}</title> : null}
            <path
                fill="green"
                stroke="green"
                strokeWidth="1"
                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            <path
                fill="#2c4533"
                stroke="#2c4533"
                strokeWidth="1"
                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"></path>
            <path
                fill="#2c4533"
                stroke="#2c4533"
                strokeWidth="1"
                d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
            
        </svg>
    );
};

export const IdleStatus = ({ color, size, title, className }) => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 -1 17 15"
            xmlns="http://www.w3.org/2000/svg"
            height={size ? size : "29px"}
            width={size ? size : "21px"}
            style={{ color }}
            className={className ? className : 'ListIcon'}
        >
            { title ? <title>{title}</title> : null}
            <path
                fill="gray"
                stroke="gray"
                strokeWidth="1"
                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            <path
                fill="#4c4d4c"
                stroke="#4c4d4c"
                strokeWidth="1"
                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"></path>
            <path
                fill="#4c4d4c"
                stroke="#4c4d4c"
                strokeWidth="1"
                d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
            
        </svg>
    );
};
