import { PropsWithChildren } from 'react';
import './BottomSheet.css';
type BottomSheetProps = {
    isOpen: boolean;
    onToggleOpen: () => void;
};
export declare const BottomSheet: ({ children, isOpen, onToggleOpen, }: PropsWithChildren<BottomSheetProps>) => JSX.Element;
export {};
