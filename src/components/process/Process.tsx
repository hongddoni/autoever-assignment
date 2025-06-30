export const Process = () => {
  return (
    <>
      <h2 className="heading-2">이용 프로세스 안내</h2>
      <ol className="process-info">
        <li>
          <i className="ic process-1"></i>
          <span>
            <strong>문의 등록</strong>
            <em>
              상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.
            </em>
          </span>
        </li>
        <li>
          <i className="ic process-2"></i>
          <span>
            <strong>관리자 설정</strong>
            <em style={{ maxWidth: "225px" }}>
              관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.
            </em>
          </span>
        </li>
        <li>
          <i className="ic process-3"></i>
          <span>
            <strong>임직원 가입</strong>
            <em style={{ maxWidth: "200px" }}>
              이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.
            </em>
          </span>
        </li>
        <li>
          <i className="ic process-4"></i>
          <span>
            <strong>서비스 이용</strong>
            <em style={{ maxWidth: "230px" }}>
              이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!
            </em>
          </span>
        </li>
      </ol>
    </>
  );
};
