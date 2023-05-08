import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './index.css';
import { createPortal } from 'react-dom';
const BottomSheet = ({ children, isOpen, onToggleOpen, }) => {
    return (_jsx(_Fragment, { children: isOpen &&
            createPortal(_jsxs("div", Object.assign({ className: 'bottom-sheet' }, { children: [_jsx("div", { className: 'back-drop', onClick: onToggleOpen }), _jsx("div", Object.assign({ className: 'bottom-sheet-body' }, { children: children }))] })), document.body) }));
};
export default BottomSheet;
