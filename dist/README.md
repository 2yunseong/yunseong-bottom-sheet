# Yunseong-Bottom-Sheet

yunseong's bottom sheet for react-payments mission

## Usage

bottom sheet need just two props.

`isOpen:boolean`: open status of bottom sheet. if bottom sheet open, this state will be `true`

`onToggleOpen:() => void`: method to manage open bottom sheet.

and you can specific modal content used by children props.

let's see example.]

```tsx
const CardNameBottomSheet = ({
  isOpen,
  onToggleOpen,
  setCardCompany,
}: CardNameBottomSheetProps) => {
  const onCardSelectButtonClick = (cardCompany: CardCompany) => {
    onToggleOpen();
    setCardCompany(cardCompany);
  };

  return (
    <BottomSheet isOpen={isOpen} onToggleOpen={onToggleOpen}>
      {/* specific modal content */}
    </BottomSheet>
  );
};

export default CardNameBottomSheet;
```
