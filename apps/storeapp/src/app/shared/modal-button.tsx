'use client';

import { PiPlusBold } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { Button, type ButtonProps } from 'rizzui';
import cn from '@core/utils/class-names';

interface ModalButtonProps extends ButtonProps {
  label?: string;
  className?: string;
  customSize?: string;
  icon?: React.ReactNode;
  view: React.ReactNode;
  onClickCustom?: () => void
}

export default function ModalButton({
  label = 'Add New',
  className,
  customSize = '500px',
  view,
  icon = <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />,
  onClickCustom,
  ...rest
}: ModalButtonProps) {
  const { openModal } = useModal();
  return (
    <Button
      className={cn(
        'mt-5 w-full text-xs capitalize @lg:w-auto sm:text-sm lg:mt-0',
        className
      )}
      onClick={() => {
        onClickCustom?.();
        openModal({
          view,
          customSize,
        });
      }
      }
      {...rest}
    >
      {icon}
      {label}
    </Button>
  );
}
