import { useEffect } from "react";
import { Layout } from "./layout/Layout";
import { Header } from "./layout/header/Header";
import { Content } from "./layout/content/Content";
import { FAQContent } from "./components/faq/FAQContent";
import { Inquiry } from "./components/inquiry/Inquiry";
import { Process } from "./components/process/Process";
import { AppInfo } from "./components/appInfo/AppInfo";
import { Footer } from "./layout/footer/footer";
import { QuickUtils } from "./components/quickUtil/QuickUtils";
import { FAQProvider } from "./components/faq/context/FAQProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <FAQProvider>
        <Layout>
          <i className="sticky-checker" />
          <Header />
          <Content>
            <h1>
              자주 묻는 질문
              <em>궁금하신 내용을 빠르게 찾아보세요.</em>
            </h1>
            <FAQContent />
            <Inquiry />
            <Process />
            <AppInfo />
          </Content>
          <Footer />
          <QuickUtils />
        </Layout>
      </FAQProvider>
    </QueryClientProvider>
  );
}

export default App;
