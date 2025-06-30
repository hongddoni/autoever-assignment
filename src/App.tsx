import { useEffect, useState } from "react";
import { Layout } from "./layout/Layout";
import { Header } from "./layout/header/Header";
import { Content } from "./layout/content/Content";
import { FAQ } from "./components/faq/FAQ";
import { Inquiry } from "./components/inquiry/Inquiry";
import { Process } from "./components/process/Process";
import { AppInfo } from "./components/appInfo/AppInfo";
import { Footer } from "./layout/footer/footer";
import { QuickUtils } from "./components/quickUtil/QuickUtils";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const stickyChecker = document.querySelector(".sticky-checker");
      const quickUtil = document.querySelector(".quick-util");

      if (stickyChecker) {
        if (window.scrollY > 0) {
          stickyChecker.classList.add("is-pinned");
        } else {
          stickyChecker.classList.remove("is-pinned");
        }
      }

      if (quickUtil) {
        if (window.scrollY > 0) {
          quickUtil.classList.add("active");
        } else {
          quickUtil.classList.remove("active");
        }
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Layout>
      <i className="sticky-checker" />
      <Header />
      <Content>
        <h1>
          자주 묻는 질문
          <em>궁금하신 내용을 빠르게 찾아보세요.</em>
        </h1>
        <FAQ />
        <Inquiry />
        <Process />
        <AppInfo />
      </Content>
      <Footer />
      <QuickUtils />
    </Layout>
  );
}

export default App;
