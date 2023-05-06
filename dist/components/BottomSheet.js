"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomSheet = void 0;
const react_1 = __importDefault(require("react"));
require("./BottomSheet.css");
const react_dom_1 = require("react-dom");
const BottomSheet = ({ children, isOpen, onToggleOpen, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null, isOpen &&
        (0, react_dom_1.createPortal)(react_1.default.createElement("div", { className: 'bottom-sheet' },
            react_1.default.createElement("div", { className: 'back-drop', onClick: onToggleOpen }),
            react_1.default.createElement("div", { className: 'bottom-sheet-body' }, children)), document.body)));
};
exports.BottomSheet = BottomSheet;
