"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./BottomSheet.css");
const react_dom_1 = require("react-dom");
const BottomSheet = ({ children, isOpen, onToggleOpen, }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isOpen &&
            (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'bottom-sheet' }, { children: [(0, jsx_runtime_1.jsx)("div", { className: 'back-drop', onClick: onToggleOpen }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'bottom-sheet-body' }, { children: children }))] })), document.body) }));
};
exports.default = BottomSheet;
