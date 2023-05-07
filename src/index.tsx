import React, { PropsWithChildren } from 'react';

import './index.css';
import { createPortal } from 'react-dom';

type BottomSheetProps = {
  isOpen: boolean;
  onToggleOpen: () => void;
};

const BottomSheet = ({
  children,
  isOpen,
  onToggleOpen,
}: PropsWithChildren<BottomSheetProps>) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className='bottom-sheet'>
            <div className='back-drop' onClick={onToggleOpen}></div>
            <div className='bottom-sheet-body'>{children}</div>
          </div>,
          document.body
        )}
    </>
  );
};

export default BottomSheet;
