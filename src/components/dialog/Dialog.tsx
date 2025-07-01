import { useEffect } from "react";
import { Portal } from "../modal/Portal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Dialog = (props: Props) => {
  const { isOpen, onClose, children } = props;
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
        }}
      >
        <dialog
          className="dialog-wrapper dialog-error"
          id="erro_faq"
          open={isOpen}
        >
          <div className="dialog-body" style={{ marginTop: 35 }}>
            <p className="message">{children}</p>
            <div className="button-group">
              <button
                type="button"
                className="btn-xlg btn-tertiary"
                onClick={onClose}
              >
                확인
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </Portal>
  );
};
