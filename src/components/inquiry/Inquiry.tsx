export const Inquiry = () => {
  return (
    <>
      <h2 className="heading-2">서비스 문의</h2>
      <div className="inquiry-info">
        <a className="btn-xxlg btn-tertiary" href="">
          <i className="ic download" />
          <span>서비스 제안서 다운로드</span>
        </a>
        <a className="btn-xxlg btn-tertiary" href="">
          <i className="ic write" />
          <span>상담문의 등록하기</span>
        </a>
        <a className="btn-xxlg btn-tertiary" href="">
          <i className="ic talk" />
          <span>
            카톡으로 문의하기 <em>ID : 기아 비즈</em>
          </span>
        </a>
      </div>
    </>
  );
};
