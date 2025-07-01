import { useState, useCallback } from "react";

export interface UseDialogReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useDialog = (initialState: boolean = false): UseDialogReturn => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    open,
    close,
  };
};
