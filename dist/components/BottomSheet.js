import React from 'react';
import './BottomSheet.css';
import { createPortal } from 'react-dom';
export const BottomSheet = ({ children, isOpen, onToggleOpen, }) => {
    return (React.createElement(React.Fragment, null, isOpen &&
        createPortal(React.createElement("div", { className: 'bottom-sheet' },
            React.createElement("div", { className: 'back-drop', onClick: onToggleOpen }),
            React.createElement("div", { className: 'bottom-sheet-body' }, children)), document.body)));
};
