import { useEffect, useMemo, useState } from "react";
import { Portal } from "../../../components/modal/Portal";
import { useJoinServiceUse } from "./useJoinServiceUse";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinServiceUse = (props: Props) => {
  const { isOpen, onClose } = props;
  const { joinServiceUse, isLoading } = useJoinServiceUse({
    termsClassID: "JOIN_SERVICE_USE",
  });

  const [selectedVersion, setSelectedVersion] = useState(
    joinServiceUse?.[0]?.termsVersion ?? 0
  );

  useEffect(() => {
    if (joinServiceUse && joinServiceUse.length > 0) {
      setSelectedVersion(joinServiceUse[0].termsVersion);
    }
  }, [joinServiceUse]);

  const joinServiceUseItem = useMemo(() => {
    return (
      joinServiceUse.find((item) => item.termsVersion === selectedVersion)
        ?.contents ?? ""
    );
  }, [joinServiceUse, selectedVersion]);

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

  if (!isOpen || isLoading || !joinServiceUse || joinServiceUse.length === 0) {
    return null;
  }

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
        <dialog open={isOpen} style={{ overflowY: "scroll" }}>
          <div className="dialog-wrapper dialog-policy" id="ms_policy1">
            <div className="dialog-header">
              <h4>이용약관</h4>
              <button type="button" className="close" onClick={onClose}>
                닫기
              </button>
            </div>
            <div className="dialog-body">
              <div className="policy-top">
                <select
                  value={selectedVersion}
                  onChange={(e) => {
                    setSelectedVersion(Number(e.target.value));
                  }}
                >
                  {joinServiceUse.map((item) => (
                    <option key={item.termsVersion} value={item.termsVersion}>
                      {new Date(item.startDate).toLocaleDateString()} ~{" "}
                      {item.endDate === 0
                        ? "현재"
                        : new Date(item.endDate).toLocaleDateString()}
                    </option>
                  ))}
                </select>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: joinServiceUseItem,
                }}
              />
            </div>
          </div>
        </dialog>
      </div>
    </Portal>
  );
};
