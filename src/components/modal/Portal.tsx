import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

interface PortalProps {
  children: React.ReactNode;
  targetId?: string;
}

export const Portal = ({ children, targetId = "modal-root" }: PortalProps) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let modalRoot = document.getElementById(targetId);

    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.setAttribute("id", targetId);
      document.body.appendChild(modalRoot);
    }

    setElement(modalRoot);

    return () => {
      if (
        modalRoot &&
        modalRoot.children.length === 0 &&
        modalRoot.parentNode
      ) {
        modalRoot.parentNode.removeChild(modalRoot);
      }
    };
  }, [targetId]);

  if (!element) return null;

  return ReactDOM.createPortal(children, element);
};
