import { useEffect, useRef } from "react";
import { Portal } from "./Portal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: "small" | "medium" | "large" | "full";
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
}

const MODAL_SIZES = {
  small: { width: "400px", maxHeight: "300px" },
  medium: { width: "600px", maxHeight: "500px" },
  large: { width: "800px", maxHeight: "700px" },
  full: { width: "90vw", maxHeight: "90vh" },
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = "medium",
  closeOnOverlayClick = true,
  closeOnEsc = true,
  showCloseButton = true,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOnEsc, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalSize = MODAL_SIZES[size];

  return (
    <Portal>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px",
        }}
        onClick={handleOverlayClick}
      >
        <div
          ref={modalRef}
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            ...modalSize,
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            animation: "modalFadeIn 0.3s ease-out",
          }}
        >
          {/* 헤더 */}
          {(title || showCloseButton) && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 24px 16px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              {title && (
                <h2
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "24px",
                    cursor: "pointer",
                    color: "#6b7280",
                    padding: "4px",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f3f4f6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  ×
                </button>
              )}
            </div>
          )}

          <div
            style={{
              padding: title || showCloseButton ? "16px 24px 24px" : "24px",
              overflow: "auto",
              flex: 1,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
