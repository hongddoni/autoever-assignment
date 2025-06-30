export const QuickUtils = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="quick-util">
      <div className="inner">
        <button
          type="button"
          className="top"
          data-ui-click="scroll-top"
          onClick={scrollToTop}
        >
          상단으로
        </button>
      </div>
    </div>
  );
};
