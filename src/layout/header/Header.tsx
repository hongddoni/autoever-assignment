export const Header = () => {
  return (
    <header className={"header"}>
      <div className={"inner"}>
        <a className={"logo"}>Kia BIZ</a>

        <nav>
          <ul>
            <li>
              <a href="/">서비스 소개</a>
            </li>
            <li className="active">
              <a href="/">자주 묻는 질문</a>
            </li>
            <li>
              <a href="/">새소식</a>
            </li>
            <li>
              <a href="/">상담문의</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
