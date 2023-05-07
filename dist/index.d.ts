import { PropsWithChildren } from 'react';
import './index.css';
type BottomSheetProps = {
    isOpen: boolean;
    onToggleOpen: () => void;
};
declare const BottomSheet: ({ children, isOpen, onToggleOpen, }: PropsWithChildren<BottomSheetProps>) => JSX.Element;
export default BottomSheet;
