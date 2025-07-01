import { http, HttpResponse } from "msw";
import type { CategoryId } from "../types/category";
import type { FaqRs } from "../network/rs/faqRs";

const mockConsultFaqList: {
  [K in "ALL" | "PRODUCT" | "COUNSELING" | "CONTRACT"]: FaqRs;
} = {
  ALL: {
    pageInfo: {
      totalRecord: 4,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 0,
    },
    items: [
      {
        id: 38,
        categoryName: "도입문의",
        subCategoryName: "서비스 상품",
        question: "기아 비즈에서는 어떤 상품을 이용할 수 있나요?",
        answer:
          "\u003cp\u003e소속 회사가 기아 비즈 이용 계약이 되어있다면,\u003cbr\u003e업무 시간에는 이용 건별 별도 결제 없이 편리하게 업무용 차량을 이용할 수 있고(대여 요금은 소속 회사에서 부담), \u003cbr\u003e비업무 시간에는 출퇴근 및 주말 여가옹으로 차량을 이용 (대여 요금은 개인이 부담) 할 수 있습니다.\u003c/p\u003e\u003cp\u003e \u003c/p\u003e\u003cp\u003e자세한 상품 안내는 메뉴 \u0026gt; 하단의 \u0026#39;이용가이드\u0026#39; \u0026gt; 상품 안내 탭을 통해 확인하실 수 있습니다.\u003cbr\u003e \u003c/p\u003e\u003cp\u003e \u003c/p\u003e",
      },
      {
        id: 107,
        categoryName: "도입문의",
        subCategoryName: "서비스 상품",
        question: "기아 비즈 비즈니스용 상품 이용 시 무엇이 좋은가요?",
        answer:
          "\u003cp\u003e기아 비즈의 \u0026#39;비즈니스 상품\u0026#39; 이용 시, 기존 차량 이용 대비 아래와 같은 장점이 있습니다.\u003c/p\u003e\u003cp\u003e- 차량 보유 및 유지관리비 부담 없이, 우리 회사의 차량 이용 패턴에 딱 맞는 상품으로 계약 후 업무용 차량 운영 가능\u003c/p\u003e\u003cp\u003e- App 하나로 편하게 예약하고, 스마트키로 제어하는 비대면 간편 대여\u003c/p\u003e\u003cp\u003e- 회사가 등록한 결제 수단으로 자동 결제 및 간편한 증빙 가능\u003c/p\u003e\u003cp\u003e* 재직 중인 회사의 기아 비즈 차량 이용과 관련한 자세한 내용은 사내 기아 비즈 담당자에게 문의하시기 바랍니다.\u003c/p\u003e",
      },
      {
        id: 134,
        categoryName: "도입문의",
        subCategoryName: "도입 상담",
        question: "비즈니스 상품 도입 기간은 얼마나 걸리나요?",
        answer:
          '\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e기아 비즈 도입 상담을 신청하신 경우, 빠른 시일 내에 기재해주신 연락처로 연락드릴 예정입니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e담당자와의 1:1 상담 후 최대한 원하시는 시기에 맞춰 서비스가 도입될 수 있도록 도와드리고 있으나, 도입하시는 상품에 따라 소요되는 기간은 다소 상이할 수 있습니다. \u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 135,
        categoryName: "도입문의",
        subCategoryName: "계약",
        question: "비즈니스 상품 도입 절차가 어떻게 되나요?",
        answer:
          "\u003cp\u003e기아 비즈 \u0026#39;비즈니스 상품\u0026#39; 도입 절차는 아래와 같습니다.\u003c/p\u003e\u003cp\u003e① 상담 문의 등록 후 1:1 맞춤 상담 진행\u003c/p\u003e\u003cp\u003e② 서비스 도입 상품 및 세부 조건 협의 후 계약 진행\u003c/p\u003e\u003cp\u003e③ 관리자 Web 계정 생성 후 회사 정보 설정\u003c/p\u003e\u003cp\u003e④ 임직원 회원가입 진행\u003c/p\u003e\u003cp\u003e⑤ 전용 K존에서 차량 대여 및 이용\u003c/p\u003e",
      },
    ],
  },
  PRODUCT: {
    pageInfo: {
      totalRecord: 2,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 0,
    },
    items: [
      {
        id: 38,
        categoryName: "도입문의",
        subCategoryName: "서비스 상품",
        question: "기아 비즈에서는 어떤 상품을 이용할 수 있나요?",
        answer:
          "\u003cp\u003e소속 회사가 기아 비즈 이용 계약이 되어있다면,\u003cbr\u003e업무 시간에는 이용 건별 별도 결제 없이 편리하게 업무용 차량을 이용할 수 있고(대여 요금은 소속 회사에서 부담), \u003cbr\u003e비업무 시간에는 출퇴근 및 주말 여가옹으로 차량을 이용 (대여 요금은 개인이 부담) 할 수 있습니다.\u003c/p\u003e\u003cp\u003e \u003c/p\u003e\u003cp\u003e자세한 상품 안내는 메뉴 \u0026gt; 하단의 \u0026#39;이용가이드\u0026#39; \u0026gt; 상품 안내 탭을 통해 확인하실 수 있습니다.\u003cbr\u003e \u003c/p\u003e\u003cp\u003e \u003c/p\u003e",
      },
      {
        id: 107,
        categoryName: "도입문의",
        subCategoryName: "서비스 상품",
        question: "기아 비즈 비즈니스용 상품 이용 시 무엇이 좋은가요?",
        answer:
          "\u003cp\u003e기아 비즈의 \u0026#39;비즈니스 상품\u0026#39; 이용 시, 기존 차량 이용 대비 아래와 같은 장점이 있습니다.\u003c/p\u003e\u003cp\u003e- 차량 보유 및 유지관리비 부담 없이, 우리 회사의 차량 이용 패턴에 딱 맞는 상품으로 계약 후 업무용 차량 운영 가능\u003c/p\u003e\u003cp\u003e- App 하나로 편하게 예약하고, 스마트키로 제어하는 비대면 간편 대여\u003c/p\u003e\u003cp\u003e- 회사가 등록한 결제 수단으로 자동 결제 및 간편한 증빙 가능\u003c/p\u003e\u003cp\u003e* 재직 중인 회사의 기아 비즈 차량 이용과 관련한 자세한 내용은 사내 기아 비즈 담당자에게 문의하시기 바랍니다.\u003c/p\u003e",
      },
    ],
  },
  COUNSELING: {
    pageInfo: {
      totalRecord: 1,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 0,
    },
    items: [
      {
        id: 134,
        categoryName: "도입문의",
        subCategoryName: "도입 상담",
        question: "비즈니스 상품 도입 기간은 얼마나 걸리나요?",
        answer:
          '\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e기아 비즈 도입 상담을 신청하신 경우, 빠른 시일 내에 기재해주신 연락처로 연락드릴 예정입니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e담당자와의 1:1 상담 후 최대한 원하시는 시기에 맞춰 서비스가 도입될 수 있도록 도와드리고 있으나, 도입하시는 상품에 따라 소요되는 기간은 다소 상이할 수 있습니다. \u003c/span\u003e\u003c/p\u003e',
      },
    ],
  },
  CONTRACT: {
    pageInfo: {
      totalRecord: 1,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 0,
    },
    items: [
      {
        id: 135,
        categoryName: "도입문의",
        subCategoryName: "계약",
        question: "비즈니스 상품 도입 절차가 어떻게 되나요?",
        answer:
          "\u003cp\u003e기아 비즈 \u0026#39;비즈니스 상품\u0026#39; 도입 절차는 아래와 같습니다.\u003c/p\u003e\u003cp\u003e① 상담 문의 등록 후 1:1 맞춤 상담 진행\u003c/p\u003e\u003cp\u003e② 서비스 도입 상품 및 세부 조건 협의 후 계약 진행\u003c/p\u003e\u003cp\u003e③ 관리자 Web 계정 생성 후 회사 정보 설정\u003c/p\u003e\u003cp\u003e④ 임직원 회원가입 진행\u003c/p\u003e\u003cp\u003e⑤ 전용 K존에서 차량 대여 및 이용\u003c/p\u003e",
      },
    ],
  },
};

const mockUsageFaqList: {
  [K in Exclude<CategoryId, "PRODUCT" | "COUNSELING" | "CONTRACT">]: FaqRs;
} = {
  ALL: {
    pageInfo: {
      totalRecord: 105,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 10,
    },
    items: [
      {
        id: 23,
        categoryName: "가입문의",
        subCategoryName: "가입",
        question: "가입 및 이용 조건은 어떻게 되나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e⑤ 가입/이용 필수 약관 동의\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 24,
        categoryName: "가입문의",
        subCategoryName: "가입",
        question: "가입 절차는 어떻게 되나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 앱에서 아래와 같은 절차를 통해 회원 가입을 할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 본인 인증 : 본인 명의 휴대폰을 통해 본인 인증\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 약관 동의 : 서비스 이용을 위한 필수/선택 약관 동의\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e③ 개인정보 입력 : 아이디, 비밀번호, 주소 입력 및 마케팅 정보 수신동의 (선택)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e상품 구매(예약) 및 차량을 이용하시려면 운전면허 정보와 결제카드 정보까지 등록해야 합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e④ 운전면허 정보 입력 : 취득일로부터 1년 이상 경과한 대한민국 운전면허 등록 가능 (마이페이지 \u0026gt; 결제/운전면허 관리)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e⑤ 결제정보 입력: 본인 명의의 신용/체크카드 입력 가능 (마이페이지 \u0026gt; 결제/운전면허 관리)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e',
      },
      {
        id: 26,
        categoryName: "가입문의",
        subCategoryName: "가입",
        question:
          "가입한 적이 없는데 이미 가입한 회원이라고 나오며 가입이 되지 않아요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e가입한 적이 없는데 이미 가입한 회원이라고 나오며 가입이 되지 않는 상황일 경우\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 고객센터에 문의해주시면 바로 도움을 드리겠습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 27,
        categoryName: "가입문의",
        subCategoryName: "가입",
        question: "본인 인증이 정상적으로 되지 않아요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e휴대폰 본인인증이 안된다면 아래 경우를 확인해주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e1. 안드로이드\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 본인 명의의 휴대폰을 사용하고 계신가요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 타인 명의의 휴대폰을 사용하고 있다면 인증이 불가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 기기 접근 권한에 동의하셨나요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 기기 접근 권한에 동의하지 않으실 경우 인증을 진행할 수 없습니다. 아래 절차를 통해 기기 접근 권한에 동의해주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e\u0026lt;기기 접근 권한 동의 방법\u0026gt;\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e휴대폰 [설정] - [어플리케이션] - [기아 비즈 앱 권한] - [전화] - 기기 접근 권한 동의\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e③ 입력한 휴대폰 번호와 인증을 시도한 휴대폰 번호가 동일한가요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 입력한 휴대폰 번호와 인증을 시도한 휴대폰 번호가 다르다면 인증이 불가합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e④ 휴대폰 정보에 등록된 번호가 없다고 나오나요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 내장된 USIM에 휴대폰 번호가 정상적으로 인식되지 않은 경우 해당 오류가 발생할 수 있습니다. 문제 해결을 위해 가입하신 통신사로 문의해 주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e2. iOS\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 본인 명의의 휴대폰을 사용하고 계신가요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 타인 명의의 휴대폰을 사용하고 있다면 인증이 불가합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 문자 발송이 안되나요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 문자 내용을 수정한 경우, 문자 내용을 조금이라도 수정했을 경우 인증이 불가합니다. 반드시 자동 입력되는 문자 내용을 일체의 수정없이 그대로 발송해주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 사용 중인 요금제 특성 상 문자 발송이 포함되어 있지 않은 경우, 본인인증은 문자 발송을 이용한 기기인증을 통해 이루어지며, 문자 발송을 하지 못하면 인증이 불가합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e*문자 건당 이용료를 지불하고 있는 회원의 경우 기기인증을 위한 SMS 전송으로 본인 부담 비용이 발생할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e③ 위 두 가지 사항에 해당하지 않을 경우, 와이파이 연결을 해제 후 본인인증을 다시 시도해 주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e④ 인증 도중 앱이 종료되었나요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 인증 도중 앱이 종료된 경우 인증을 처음부터 다시 진행해 주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e위의 방법으로도 인증이 불가하신 경우, 기아 비즈 고객센터에 문의해주시면 도움을 드리겠습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 28,
        categoryName: "가입문의",
        subCategoryName: "로그인",
        question: "아이디/비밀번호를 분실했어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e아이디/비밀번호를 분실하신 경우, 로그인 화면의 ‘아이디 찾기’ 혹은 ‘비밀번호 찾기’를 통해 해결 가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 아이디 분실 시 : 아이디 찾기 \u0026gt; 휴대폰 본인 인증 \u0026gt; 아이디 확인\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 비밀번호 분실 시 : 비밀번호 초기화 \u0026gt; 휴대폰 본인 인증 \u0026gt; 새로운 비밀번호 설정\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e위의 방법으로도 해결이 어려우신 경우, 기아 비즈 고객센터로 문의해주시면 도움을 드리겠습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 29,
        categoryName: "가입문의",
        subCategoryName: "회원등급",
        question: "Greener 등급이란 무엇인가요? 등급별 혜택은 어떻게 되나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈에서는 더 나은 환경을 위하여 친환경 차량 주행을 하시는 회원을 대상으로 ‘Greener’ 등급 제도를 운영하고 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e운전면허를 등록하여 정상적으로 기아 비즈의 차량 이용이 가능한 시점부터 회원 등급이 부여되며, 개인, 비즈니스 프로필의 최근 6개월 간의 월평균 친환경차 주행거리 합산 실적을 기반으로 등급이 부여됩니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e(가입으로부터 6개월이 되지 않은 회원의 경우, 가입 후 개월수의 평균으로 산정)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e매월 1일, Greener 등급이 재산정되며, 등급에 따른 다양한 혜택이 지급됩니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e자세한 혜택은 메뉴 \u0026gt; 나의 등급 옆 \u0026#39;혜택보기\u0026#39; 를 통해 확인하실 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e\u003cp\u003e \u003c/p\u003e',
      },
      {
        id: 30,
        categoryName: "가입문의",
        subCategoryName: "면허",
        question: "기아 비즈를 이용하려면 면허증이 반드시 필요한가요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 차량 이용을 위해서는 반드시 취득일이 1년 이상 경과한 대한민국 운전면허증(실물) 또는 모바일 운전면허증이 필요합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e운전면허증을 분실하였을 경우 운전면허 재발급을 받으신 후 이용이 가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 31,
        categoryName: "가입문의",
        subCategoryName: "면허",
        question: "운전면허를 취득한지 1년이 되지 않았어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e안전한 차량 운행을 위하여 취득일이 1년 이상 경과한 면허증을 소지한 경우에만 차량 이용이 가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 32,
        categoryName: "가입문의",
        subCategoryName: "면허",
        question: "운전면허를 재발급 받은지 1년이 되지 않았어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e면허 취득일로부터 1년이 지났으나 재발급으로 인해 발급일이 1년 미만인 운전면허를 신규로 등록하는 경우,\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 앱 - 왼쪽 상단 메뉴 - [마이페이지] - [결제/운전면허 관리] 에서 면허증을 촬영하여 면허 정보를 우선 등록한 후, \u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 고객센터에 문의하여 안내받은 메일로 면허 승인을 위한 서류(운전경력증명서 - 정부 24(https://www.gov.kr/)에서 발급 가능)를 제출해주시기 바랍니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기존에 면허 정보가 저장되어 있는 고객님 중 면허를 재발급 받아 운전면허 정보 변경이 필요하신 경우, 기아 비즈 고객센터에 문의하신 이후 운전면허를 재등록해 주시기 바랍니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 33,
        categoryName: "가입문의",
        subCategoryName: "면허",
        question: "운전면허를 갱신/재발급했어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기존에 면허 정보가 저장되어 있는 고객님 중 면허를 재발급 받아 운전면허 정보 변경이 필요하신 경우, 기아 비즈 고객센터에 문의하신 이후 운전면허를 재등록해주시기 바랍니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
    ],
  },
  SIGN_UP: {
    pageInfo: {
      totalRecord: 14,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 10,
    },
    items: [
      {
        id: 23,
        categoryName: "가입문의",
        subCategoryName: "가입",
        question: "가입 및 이용 조건은 어떻게 되나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e⑤ 가입/이용 필수 약관 동의\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 24,
        categoryName: "가입문의",
        subCategoryName: "가입",
        question: "가입 절차는 어떻게 되나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 앱에서 아래와 같은 절차를 통해 회원 가입을 할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 본인 인증 : 본인 명의 휴대폰을 통해 본인 인증\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 약관 동의 : 서비스 이용을 위한 필수/선택 약관 동의\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e③ 개인정보 입력 : 아이디, 비밀번호, 주소 입력 및 마케팅 정보 수신동의 (선택)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e상품 구매(예약) 및 차량을 이용하시려면 운전면허 정보와 결제카드 정보까지 등록해야 합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e④ 운전면허 정보 입력 : 취득일로부터 1년 이상 경과한 대한민국 운전면허 등록 가능 (마이페이지 \u0026gt; 결제/운전면허 관리)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e⑤ 결제정보 입력: 본인 명의의 신용/체크카드 입력 가능 (마이페이지 \u0026gt; 결제/운전면허 관리)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e',
      },
      {
        id: 26,
        categoryName: "가입문의",
        subCategoryName: "가입",
        question:
          "가입한 적이 없는데 이미 가입한 회원이라고 나오며 가입이 되지 않아요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e가입한 적이 없는데 이미 가입한 회원이라고 나오며 가입이 되지 않는 상황일 경우\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 고객센터에 문의해주시면 바로 도움을 드리겠습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 27,
        categoryName: "가입문의",
        subCategoryName: "가입",
        question: "본인 인증이 정상적으로 되지 않아요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e휴대폰 본인인증이 안된다면 아래 경우를 확인해주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e1. 안드로이드\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 본인 명의의 휴대폰을 사용하고 계신가요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 타인 명의의 휴대폰을 사용하고 있다면 인증이 불가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 기기 접근 권한에 동의하셨나요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 기기 접근 권한에 동의하지 않으실 경우 인증을 진행할 수 없습니다. 아래 절차를 통해 기기 접근 권한에 동의해주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e\u0026lt;기기 접근 권한 동의 방법\u0026gt;\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e휴대폰 [설정] - [어플리케이션] - [기아 비즈 앱 권한] - [전화] - 기기 접근 권한 동의\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e③ 입력한 휴대폰 번호와 인증을 시도한 휴대폰 번호가 동일한가요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 입력한 휴대폰 번호와 인증을 시도한 휴대폰 번호가 다르다면 인증이 불가합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e④ 휴대폰 정보에 등록된 번호가 없다고 나오나요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 내장된 USIM에 휴대폰 번호가 정상적으로 인식되지 않은 경우 해당 오류가 발생할 수 있습니다. 문제 해결을 위해 가입하신 통신사로 문의해 주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e2. iOS\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 본인 명의의 휴대폰을 사용하고 계신가요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 타인 명의의 휴대폰을 사용하고 있다면 인증이 불가합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 문자 발송이 안되나요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 문자 내용을 수정한 경우, 문자 내용을 조금이라도 수정했을 경우 인증이 불가합니다. 반드시 자동 입력되는 문자 내용을 일체의 수정없이 그대로 발송해주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 사용 중인 요금제 특성 상 문자 발송이 포함되어 있지 않은 경우, 본인인증은 문자 발송을 이용한 기기인증을 통해 이루어지며, 문자 발송을 하지 못하면 인증이 불가합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e*문자 건당 이용료를 지불하고 있는 회원의 경우 기기인증을 위한 SMS 전송으로 본인 부담 비용이 발생할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e③ 위 두 가지 사항에 해당하지 않을 경우, 와이파이 연결을 해제 후 본인인증을 다시 시도해 주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e④ 인증 도중 앱이 종료되었나요?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e: 인증 도중 앱이 종료된 경우 인증을 처음부터 다시 진행해 주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e위의 방법으로도 인증이 불가하신 경우, 기아 비즈 고객센터에 문의해주시면 도움을 드리겠습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 28,
        categoryName: "가입문의",
        subCategoryName: "로그인",
        question: "아이디/비밀번호를 분실했어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e아이디/비밀번호를 분실하신 경우, 로그인 화면의 ‘아이디 찾기’ 혹은 ‘비밀번호 찾기’를 통해 해결 가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 아이디 분실 시 : 아이디 찾기 \u0026gt; 휴대폰 본인 인증 \u0026gt; 아이디 확인\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 비밀번호 분실 시 : 비밀번호 초기화 \u0026gt; 휴대폰 본인 인증 \u0026gt; 새로운 비밀번호 설정\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e위의 방법으로도 해결이 어려우신 경우, 기아 비즈 고객센터로 문의해주시면 도움을 드리겠습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 29,
        categoryName: "가입문의",
        subCategoryName: "회원등급",
        question: "Greener 등급이란 무엇인가요? 등급별 혜택은 어떻게 되나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈에서는 더 나은 환경을 위하여 친환경 차량 주행을 하시는 회원을 대상으로 ‘Greener’ 등급 제도를 운영하고 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e운전면허를 등록하여 정상적으로 기아 비즈의 차량 이용이 가능한 시점부터 회원 등급이 부여되며, 개인, 비즈니스 프로필의 최근 6개월 간의 월평균 친환경차 주행거리 합산 실적을 기반으로 등급이 부여됩니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e(가입으로부터 6개월이 되지 않은 회원의 경우, 가입 후 개월수의 평균으로 산정)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e매월 1일, Greener 등급이 재산정되며, 등급에 따른 다양한 혜택이 지급됩니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e자세한 혜택은 메뉴 \u0026gt; 나의 등급 옆 \u0026#39;혜택보기\u0026#39; 를 통해 확인하실 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e\u003cp\u003e \u003c/p\u003e',
      },
      {
        id: 30,
        categoryName: "가입문의",
        subCategoryName: "면허",
        question: "기아 비즈를 이용하려면 면허증이 반드시 필요한가요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 차량 이용을 위해서는 반드시 취득일이 1년 이상 경과한 대한민국 운전면허증(실물) 또는 모바일 운전면허증이 필요합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e운전면허증을 분실하였을 경우 운전면허 재발급을 받으신 후 이용이 가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 31,
        categoryName: "가입문의",
        subCategoryName: "면허",
        question: "운전면허를 취득한지 1년이 되지 않았어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e안전한 차량 운행을 위하여 취득일이 1년 이상 경과한 면허증을 소지한 경우에만 차량 이용이 가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 32,
        categoryName: "가입문의",
        subCategoryName: "면허",
        question: "운전면허를 재발급 받은지 1년이 되지 않았어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e면허 취득일로부터 1년이 지났으나 재발급으로 인해 발급일이 1년 미만인 운전면허를 신규로 등록하는 경우,\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 앱 - 왼쪽 상단 메뉴 - [마이페이지] - [결제/운전면허 관리] 에서 면허증을 촬영하여 면허 정보를 우선 등록한 후, \u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 고객센터에 문의하여 안내받은 메일로 면허 승인을 위한 서류(운전경력증명서 - 정부 24(https://www.gov.kr/)에서 발급 가능)를 제출해주시기 바랍니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기존에 면허 정보가 저장되어 있는 고객님 중 면허를 재발급 받아 운전면허 정보 변경이 필요하신 경우, 기아 비즈 고객센터에 문의하신 이후 운전면허를 재등록해 주시기 바랍니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 33,
        categoryName: "가입문의",
        subCategoryName: "면허",
        question: "운전면허를 갱신/재발급했어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기존에 면허 정보가 저장되어 있는 고객님 중 면허를 재발급 받아 운전면허 정보 변경이 필요하신 경우, 기아 비즈 고객센터에 문의하신 이후 운전면허를 재등록해주시기 바랍니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
    ],
  },
  BUSINESS: {
    pageInfo: {
      totalRecord: 15,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 10,
    },
    items: [
      {
        id: 106,
        categoryName: "비즈니스(업무용)",
        subCategoryName: "상품",
        question: "기아 비즈 비즈니스용 상품이란 무엇인가요?",
        answer:
          "\u003cp\u003e기아 비즈의 비즈니스 상품은, 이용 계약을 한 회사의 임직원들이 기아 비즈의 차량을 업무용으로 이용할 수 있는 서비스를 말합니다.\u003c/p\u003e\u003cp\u003e기아 비즈 이용 계약이 되어 있는 회사의 임직원께서는 기아 비즈 앱에서 비즈니스 프로필 생성 후, 비즈니스 프로필 상태에서 회사가 계약한 기아 비즈 상품을 이용할 수 있습니다.\u003c/p\u003e\u003cp\u003e▶ 비즈니스 프로필 생성 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - 사용자 정보 상단 [비즈니스↔개인] 터치\u003c/p\u003e\u003cp\u003e자세한 방법은 메뉴 \u0026gt; 하단의 \u0026#39;이용 가이드\u0026#39; \u0026gt; 비즈니스 프로필 안내 탭을 참고해주세요.\u003c/p\u003e\u003cp\u003e\u003cbr\u003e* 비즈니스 프로필 생성 시, 회사 이메일 인증이 되지 않을 경우 고객센터로 문의해 주시면 안내해 드리겠습니다.\u003c/p\u003e\u003cp\u003e* 재직 중인 회사의 기아 비즈 차량 이용과 관련한 자세한 내용은 사내 기아 비즈 담당자에게 문의하시기 바랍니다.\u003c/p\u003e",
      },
      {
        id: 111,
        categoryName: "비즈니스(업무용)",
        subCategoryName: "상품",
        question: "우리 회사의 기아 비즈 상품 계약에 관심이 있어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:rgba(106,122,135,1);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e소속하신 회사의 기아 비즈 상품 계약에 관심이 있으시다면 기업 상담을 신청해 주시면, 빠른 시일 내에 안내해 드리겠습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 108,
        categoryName: "비즈니스(업무용)",
        subCategoryName: "프로필",
        question: "비즈니스 프로필이란 무엇인가요?",
        answer:
          "\u003cp\u003e기아 비즈 이용 계약이 되어 있는 회사의 임직원께서는 기아 비즈 앱에서 비즈니스 프로필 생성 후, 비즈니스 프로필 상태에서 회사가 계약한 기아 비즈 상품을 이용할 수 있습니다.\u003c/p\u003e\u003cp\u003e▶ 비즈니스 프로필 생성 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - 사용자 정보 상단  [비즈니스↔개인] 터치\u003c/p\u003e\u003cp\u003e▶ 비즈니스 프로필 상태인지 확인 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - 상단 사용자 정보에 회사명 및 팀명이 보이면 비즈니스 프로필 상태\u003c/p\u003e\u003cp\u003e*개인 프로필 상태인 경우  [비즈니스↔개인] 버튼을 눌러 비즈니스 프로필 상태로 전환할 수 있습니다.\u003c/p\u003e",
      },
      {
        id: 109,
        categoryName: "비즈니스(업무용)",
        subCategoryName: "프로필",
        question:
          "기아 비즈를 이용하는 회사의 임직원입니다. 비즈니스 프로필은 어떻게 생성하나요?",
        answer:
          "\u003cp\u003e기아 비즈 앱에서 비즈니스 프로필을 생성할 수 있습니다.\u003c/p\u003e\u003cp\u003e▶ 비즈니스 프로필 생성 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - 사용자 정보 상단  [비즈니스↔개인] 터치\u003c/p\u003e\u003cp\u003e* 비즈니스 프로필 생성 시, 회사 이메일 인증이 되지 않을 경우 고객센터로 문의해 주시면 안내해 드리겠습니다.\u003c/p\u003e\u003cp\u003e* 재직 중인 회사의 기아 비즈 차량 이용과 관련한 자세한 내용은 사내 기아 비즈 담당자에게 문의하시기 바랍니다.\u003c/p\u003e",
      },
      {
        id: 110,
        categoryName: "비즈니스(업무용)",
        subCategoryName: "프로필",
        question: "회사 메일을 입력했는데도 인증이 되지 않아요.",
        answer:
          "\u003cp\u003e회사 이메일 인증이 되지 않을 경우 아래 내용을 확인해 주세요.\u003c/p\u003e\u003cp\u003e① 스팸 메일함에 인증 메일이 와 있는지 확인해 주세요.\u003c/p\u003e\u003cp\u003e② 또는 사내 기아 비즈 담당자에게 고객님의 이메일 등록 여부를 확인해 주세요. (사내 기아 비즈 담당자의 관리자 시스템에 등록된 임직원 이메일에 한해 정상적으로 인증됩니다.)\u003c/p\u003e\u003cp\u003e위 방법으로도 회사 이메일 인증이 되지 않을 경우 고객센터로 문의해 주시면 안내해 드리겠습니다.\u003c/p\u003e",
      },
      {
        id: 112,
        categoryName: "비즈니스(업무용)",
        subCategoryName: "프로필",
        question: "비즈니스 프로필을 삭제하고 싶어요.",
        answer:
          "\u003cp\u003e비즈니스 차량을 이용할 필요가 없어진 경우 비즈니스 프로필을 삭제할 수 있습니다.\u003c/p\u003e\u003cp\u003e▶ 비즈니스 프로필 삭제 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - [마이페이지] - [비즈니스 프로필 관리] - 하단 [비즈니스 프로필 삭제] 버튼\u003c/p\u003e\u003cp\u003e*비즈니스 프로필 삭제 시, 더 이상 비즈니스 차량을 이용할 수 없으므로 신중하게 확인해 주시기 바랍니다.\u003c/p\u003e\u003cp\u003e*비즈니스 프로필을 삭제하더라도 개인용 차량은 계속 이용 가능하며, 기아 비즈의 서비스에서는 회원 탈퇴가 되지 않습니다.\u003c/p\u003e",
      },
      {
        id: 113,
        categoryName: "비즈니스(업무용)",
        subCategoryName: "프로필",
        question: "비즈니스 프로필을 삭제하면 기아 비즈 탈퇴가 되는 건가요?",
        answer:
          "\u003cp\u003e비즈니스 프로필을 삭제하더라도 개인 프로필은 계속 이용 가능하며, 기아 비즈의 서비스에서는 회원 탈퇴가 되지 않습니다.\u003c/p\u003e\u003cp\u003e기아 비즈 서비스에서 회원 탈퇴를 원하는 경우 회원 탈퇴를 진행해 주세요.\u003c/p\u003e\u003cp\u003e▶ 회원 탈퇴 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - [마이페이지] - 하단 \u0026#39;탈퇴하려면 여기를 눌러주세요\u0026#39; 버튼\u003c/p\u003e",
      },
      {
        id: 114,
        categoryName: "비즈니스(업무용)",
        subCategoryName: "프로필",
        question: "퇴사 예정입니다. 비즈니스 프로필은 어떻게 해야 하나요?",
        answer:
          "\u003cp\u003e퇴사 예정이라 더 이상 회사의 기아 비즈 비즈니스 차량을 이용할 필요가 없어진 경우 비즈니스 프로필을 삭제해야 합니다.\u003c/p\u003e\u003cp\u003e▶ 비즈니스 프로필 삭제 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - [마이페이지] - [비즈니스 프로필 관리] - 하단 [비즈니스 프로필 삭제] 버튼\u003c/p\u003e\u003cp\u003e*비즈니스 프로필 삭제 시, 더 이상 비즈니스 차량을 이용할 수 없으므로 신중하게 확인해 주시기 바랍니다.\u003c/p\u003e\u003cp\u003e*비즈니스 프로필을 삭제하더라도 개인 프로필은 계속 이용 가능하며, 기아 비즈의 서비스에서는 회원 탈퇴가 되지 않습니다.\u003c/p\u003e",
      },
      {
        id: 116,
        categoryName: "비즈니스(업무용)",
        subCategoryName: "프로필",
        question:
          "개인 프로필에서 비즈니스 프로필로 전환하려면 어떻게 해야 하나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:rgba(106,122,135,1);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 앱에서 아래의 방법으로 개인↔비즈니스 프로필을 전환할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:rgba(106,122,135,1);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e▶ 개인↔비즈니스 프로필 상태 전환 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - 상단 이용자 정보 위 개인↔비즈니스 프로필 전환 버튼\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e',
      },
      {
        id: 115,
        categoryName: "비즈니스(업무용)",
        subCategoryName: "예약",
        question: "비즈니스용 상품 예약은 어떻게 하나요?",
        answer:
          "\u003cp\u003e비즈니스용 상품 예약을 위해서는 먼저 비즈니스 프로필이 생성되어 있어야 합니다. 비즈니스 프로필 생성 방법은 아래 안내를 참고해 주세요.\u003c/p\u003e\u003cp\u003e▶ 비즈니스 프로필 생성 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - 사용자 정보 상단 [비즈니스↔개인] 터치 - 비즈니스 화면으로 이동 - 비즈니스 이메일 입력 후, 인증 번호 입력 - 프로필 생성 완료\u003c/p\u003e\u003cp\u003e비즈니스 프로필 생성 후, 비즈니스 프로필 상태로 설정되어 있는지 확인합니다. (기아 비즈 앱 - 왼쪽 상단 메뉴 - 상단 사용자 정보에 회사명 및 팀명이 보이면 비즈니스 프로필 상태)\u003c/p\u003e\u003cp\u003e메인 지도 화면에서 K존 선택 후 대여 기간 및 차량 선택, 기타 대여 정보 확인 후 차량 예약을 하시면 됩니다.\u003c/p\u003e",
      },
    ],
  },
  ACCIDENT: {
    pageInfo: {
      totalRecord: 9,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 0,
    },
    items: [
      {
        id: 99,
        categoryName: "사고/보험",
        subCategoryName: "사고",
        question: "이용 중 사고가 발생했어요.",
        answer:
          "\u003cp\u003e차량 이용 중 고장이나 사고 발생 시 즉시 고객센터로 연락해 신고해야 하며 회사의 안내를 준수해야 합니다.\u003c/p\u003e\u003cp\u003e사고 후 신고하지 않은 경우에는 보험 혜택을 적용받을 수 없으며 미신고 페널티 요금(10만원)+페널티 점수(10점)가 부과되고 영업 손실 및 사고처리 비용 보상이 청구(차량 손해 면책제도 적용 불가)됩니다.\u003c/p\u003e\u003cp\u003e사고 신고 후, 사고 현장을 미리 촬영해 주시고 상대방과 목격자의 인적사항, 차량번호, 보험사를 확인해 주세요.\u003c/p\u003e\u003cp\u003e자세한 사고 신고 방법은 메뉴 \u0026gt; 하단의 \u0026#39;이용 가이드\u0026#39; \u0026gt; 사고/보험 안내 (사고 촬영 가이드) 탭을 참고하시기 바랍니다.\u003c/p\u003e\u003cp\u003e*사고 미신고 시 자기 차량 손해 면책제도에서 제외되며, 법적 고발 및 이용 불가 조치가 행해질 수 있습니다.\u003c/p\u003e",
      },
      {
        id: 100,
        categoryName: "사고/보험",
        subCategoryName: "사고",
        question: "사고 처리 과정이 궁금해요.",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e사고 처리 과정은 아래와 같으며 사고 접수 후, 기아 비즈 앱 또는 담당자의 별도 안내를 통해 사고 처리 현황을 확인할 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e ▶ 사고 처리 과정:\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ① 사고 접수 \u0026gt; 공업사 입고 \u0026gt; 차량 점검 및 수리 진행\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ② 수리 완료 차량은 운행 상태로 변경\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ③ 공업사로부터 청구된 수리 명세서 검토 및 보험사 과실여부 확인\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ④ 과실 여부 및 비율에 따라 개인 또는 회사에 고객 부담금을 청구하며, 납부가 완료되면 사고 처리가 완료됩니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e ▶ 사고 처리 현황 확인 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - [고객센터] - [사고 신고/처리 현황]\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 101,
        categoryName: "사고/보험",
        subCategoryName: "사고",
        question: "사고 처리 현황은 어디에서 확인할 수 있나요?",
        answer:
          "\u003cp\u003e사고 접수 후, 기아 비즈 앱 또는 담당자의 별도 안내를 통해 사고 처리 현황을 확인할 수 있습니다.\u003c/p\u003e\u003cp\u003e▶ 사고 처리 현황 확인 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - [고객센터] - [사고 신고/처리 현황]\u003c/p\u003e",
      },
      {
        id: 102,
        categoryName: "사고/보험",
        subCategoryName: "사고",
        question: "사고 시 비용이 어느 정도 발생하나요?",
        answer:
          "\u003cp\u003e기아 비즈는 이용 중 발생할 수 있는 사고로부터 고객님의 피해를 보장하기 위해 자기신체사고, 대인, 대물 피해를 보상하는 자동차 종합 보험에 가입하고 있습니다.\u003c/p\u003e\u003cp\u003e또한 차량의 피해에 대해 고객님의 부담을 덜어드리기 위해 차량 손해 면책제도를 운영하고 있습니다.\u003c/p\u003e\u003cp\u003e차량 대여 계약 체결 시 자기부담금을 필수로 지정해야 하며, 고객님이 선택한 면책 상품에 따라 사고 발생 시 기아 비즈 차량 수리 비용에 대해 고객님이 부담해야 하는 최대 금액(자기부담금)이 정해집니다.\u003c/p\u003e\u003cp\u003e차량 수리 비용이 자기부담금을 초과하더라도 선택한 면책 상품에서 정한 자기부담금만큼만 지불하시면 됩니다.\u003c/p\u003e\u003cp\u003e차량 손해 면책제도의 보장 범위는 사고 발생 고객님이 대여한 차량의 수리 비용이며 휴차료, 긴급출동, 견인, 구난 등 현장 처리비용은 보장 범위에서 제외됩니다.\u003c/p\u003e\u003cp\u003e면책 상품 및 면책 보험료는 차종, 대여 기간 등에 따라 상이할 수 있습니다. 대여 계약 체결 시 꼭 확인해 주세요.\u003c/p\u003e\u003cp\u003e*차량손해면책 상품에 가입되어 있더라도 음주, 무면허, 보험사 약관상 보상되지 않는 손해에 해당되는 사고 등 자동차대여약관 제20조 제2항 각호에 해당되는 경우 손해면책에서 제외되며 사고처리비용, 실 수리비 전액 배상과 손해배상 비용이 청구됩니다. 또한 법적 고발 및 이용 불가 조치가 행해지 수 있으니, 이 점을 유의해주시기 바랍니다.\u003c/p\u003e\u003cp\u003e자세한 내용은 메뉴 \u0026gt; 하단의 \u0026#39;이용가이드\u0026#39; \u0026gt; 사고/보험 안내 - 기아 비즈 보험 안내를 확인해 주세요.\u003c/p\u003e",
      },
      {
        id: 132,
        categoryName: "사고/보험",
        subCategoryName: "사고",
        question: "사고 발생 시, 차종 별 휴차료는 어떻게 되나요? ",
        answer:
          "\u003cp\u003e회원의 과실로 인한 사고로 인해 자동차 수리를 위한 휴차를 하는 경우,\u003c/p\u003e\u003cp\u003e회원은 자동차손해면책제도 가입 유무와 관계없이 \u003cbr\u003e기아 비즈에 휴차 기간 동안 해당 차량의 휴차보상료*를 배상하여야 합니다.\u003cbr\u003e(*휴차보상료=자동차수리일수 x 해당 자동차 1일 휴차보상료 x 회원 과실비율)\u003c/p\u003e\u003cp\u003e각 차종별 1일 휴차보상료는 아래와 같습니다. \u003cbr\u003e(단, 위탁차량의 경우 차량 소유사의 휴차보상료 기준에 따릅니다.)\u003c/p\u003e\u003cp\u003e▶ 차종별 1일 휴차보상료\u003cbr\u003eEV3, EV4, 니로EV: 46,000원\u003cbr\u003eEV6, 아이오닉5: 56,000원\u003c/p\u003e",
      },
      {
        id: 103,
        categoryName: "사고/보험",
        subCategoryName: "보험",
        question: "개인 보험이 있어도 기아 비즈 보험을 반드시 가입해야 하나요?",
        answer:
          "\u003cp\u003e개인 차량 보험이 있더라도 기아 비즈 이용 시에는 기아 비즈 보험을 필수로 가입해야 합니다.\u003c/p\u003e\u003cp\u003e자세한 내용은 기아 비즈 이용가이드 \u0026gt; 사고/보험 안내 - 기아 비즈 보험 안내를 확인해 주세요.\u003c/p\u003e",
      },
      {
        id: 104,
        categoryName: "사고/보험",
        subCategoryName: "보험",
        question: "보험 범위에는 어떤 내용이 포함되어 있나요?",
        answer:
          "\u003cp\u003e기아 비즈는 이용 중 발생할 수 있는 사고로부터 고객님의 피해를 보장하기 위해 자기신체사고, 대인, 대물 피해를 보상하는 자동차 종합 보험에 가입하고 있습니다.\u003c/p\u003e\u003cp\u003e▶ 자동차 종합 보험 \u003cbr\u003e- 자기신체사고(상해급수에 따라 실제 치료비 보상) : 사망 1억 원 / 부상 1천5백만 원 \u003cbr\u003e- 대인(상대방의 인명 피해) : 무한\u003cbr\u003e- 대물(상대방의 물적 피해) : (비즈니스) 회원의 소속 회사와 계약한 보험 조건 / (개인) 회원이 예약한 차량의 보험가입 조건 \u003cbr\u003e또한 차량의 피해에 대해 고객님의 부담을 덜어드리기 위해 차량 손해 면책제도를 운용하고 있습니다. 차량 대여 계약 체결 시 자기부담금을 필수로 지정해야 하며, 고객님이 선택한 면책 상품에 따라 사고 발생 시 기아 비즈 차량 수리 비용에 대해 고객님이 부담해야 하는 최대 금액(자기부담금)이 정해집니다.\u003c/p\u003e\u003cp\u003e▶ 차량 손해 면책제도\u003c/p\u003e\u003cp\u003e- 보장범위 : 사고 발생 건당 회원이 대여한 차량의 수리 비용 (제외 : 휴차료, 긴급출동, 견인, 구난 등 현장처리비용) \u003cbr\u003e- 자기부담금 : 회원 개인이 대여 시 직접 선택한 면책 조건\u003cbr\u003e면책 상품 및 면책 보험료는 차종, 대여 기간 등에 따라 상이할 수 있습니다.\u003cbr\u003e대여 계약 체결 시 꼭 확인해 주세요.\u003c/p\u003e\u003cp\u003e*차량 손해 면책상품에 가입되어 있더라도 음주, 무면허, 보험사 약관상 보상되지 않는 손해에 해당되는 사고 등 자동차대여약관 제20조 제2항 각호에 해당되는 경우 손해면책에서 제외되며 사고처리비용, 실 수리비 전액 배상과 손해배상 비용이 청구됩니다. 또한 법적 고발 및 이용 불가 조치가 행해지 수 있으니, 이 점을 유의해주시기 바랍니다.\u003cbr\u003e \u003c/p\u003e",
      },
      {
        id: 105,
        categoryName: "사고/보험",
        subCategoryName: "보험",
        question: "기아 비즈 차량 이용 시 보험을 꼭 가입해야 하나요?",
        answer:
          "\u003cp\u003e기아 비즈 이용 시에는 보험 가입이 필수입니다. 원하는 보장 범위에 따라 구매(예약) 시 면책 상품을 선택할 수 있습니다.\u003c/p\u003e\u003cp\u003e자세한 내용은 메뉴 \u0026gt; 하단의 \u0026#39;이용가이드\u0026#39; \u0026gt; 사고/보험 안내 - 기아 비즈 보험 안내를 확인해 주세요.\u003c/p\u003e",
      },
      {
        id: 136,
        categoryName: "사고/보험",
        subCategoryName: "보험",
        question:
          "사고가 나서 보험 접수가 됐는데 보험사에서 안내해주는 자기부담금이 제가 가입한 면책 상품의 자기부담금과 달라요.",
        answer:
          "\u003cp\u003e보험사에서 안내해드리는 자기부담금은 해당 차량 보험 계약에 적용된 금액으로,\u003c/p\u003e\u003cp\u003e고객님께서 부담하셔야 하는 자기부담금은 차량 이용시 App에서 선택하신 면책 상품 기준으로 부과됩니다.\u003c/p\u003e",
      },
    ],
  },
  RESERVATION: {
    pageInfo: {
      totalRecord: 23,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 10,
    },
    items: [
      {
        id: 39,
        categoryName: "예약/결제",
        subCategoryName: "예약",
        question: "개인용 차량 예약은 어떻게 하나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e결제 카드 정보, 운전 면허 정보를 등록한 후 기아 비즈 메인 지도 화면에서 K존, 이용 시간, 차량을 선택하여 결제 시 차량 예약이 완료됩니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e자세한 상품 안내는 메뉴 \u0026gt; 하단의 \u0026#39;이용가이드\u0026#39; \u0026gt; 차량이용 안내 탭을 통해 확인하실 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e',
      },
      {
        id: 40,
        categoryName: "예약/결제",
        subCategoryName: "예약",
        question:
          "비즈니스 프로필에서 개인 프로필로 전환하려면 어떻게 해야 하나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 앱에서 아래의 방법으로 개인-비즈니스 프로필을 전환할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e▶ 기아 비즈 앱 - 왼쪽 상단 메뉴 - 상단 이용자 정보 위 ‘개인↔비즈니스 프로필 전환’ 버튼\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 41,
        categoryName: "예약/결제",
        subCategoryName: "예약",
        question: "예약한 차량의 차량 번호를 확인하고 싶어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 앱의 예약내역에서 예약한 차량의 차량 번호를 확인할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e▶ 예약내역 확인 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - [예약 및 이용내역] - 해당 예약 건 선택\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e가장 가까운 대여 건의 경우 기아 비즈 앱 접속 시 이용대기 화면에서도 바로 차량 정보를 확인할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 42,
        categoryName: "예약/결제",
        subCategoryName: "예약",
        question: "예약 완료 후 K존 또는 예약시간을 변경할 수 있나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e예약이 완료된 이후에는 K존 및 예약 시간을 변경할 수 없습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e변경이 필요한 경우 기존 예약을 취소하고 다시 신규 예약을 해주시기 바랍니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e*예약 취소 시 예약을 취소한 시점과 대여 시간에 따라 취소 수수료가 발생할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e\u0026lt;취소 수수료 부과 기준\u0026gt;\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e1. 예약을 취소하는 시점에 따라 수수료(이하 “취소수수료”)가 발생될 수 있으며, 취소수수료 산정시에는 ‘취소수수료 미부과’의 조건이 가장 상위 조건으로 고려됩니다. 단, 예약시작 시간을 초과할 경우 취소수수료가 아래 조건에 따라 부과됩니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 취소 수수료 미부과\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e구독권 상품 - 예약 체결 후 30분 이내 혹은 이용 2일전까지 취소 시\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e구독권 외 상품 - 예약 체결 후 30분 이내 혹은 이용 24시간 전까지 취소 시\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 취소 수수료 5%\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e구독권 상품 - 이용 개시일 전일\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e구독권 외 상품 - 대여 시작 3시간 1분 전 ~ 24시간\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e③ 취소 수수료 10%\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e구독권 상품 - 이용 개시일 당일 (단, 개시일 대여 시작 11분 전까지만 취소 가능)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e④ 취소 수수료 15%\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e구독권 외 상품 - 대여 시작 11분 전 ~ 3시간까지\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e⑤ 취소 수수료 30%\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e구독권 외 상품 - 대여 시작 시점 ~ 대여 시작 10분 전까지\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e2. 자동차 제어 또는 운행 기록이 있거나 운행기록이 없더라도 대여시작 시점이 경과된 경우는 예약 취소는 불가합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e이외의 자세한 내용은 자동차 대여약관을 참고해주시기 바랍니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e',
      },
      {
        id: 43,
        categoryName: "예약/결제",
        subCategoryName: "예약",
        question: "예약내역을 확인하고 싶어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈 앱에서 예약내역을 확인할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e▶ 예약내역 확인 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - [예약 및 이용내역] - 해당 예약 건 선택\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 44,
        categoryName: "예약/결제",
        subCategoryName: "예약",
        question:
          "대여 시작 시간 혹은 대여 시작일이 지난 상품을 구매할 수 있나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e1회권의 경우 퇴출근, 주말 특가 상품은 대여 시작 시간이 지났더라도 당일 자정까지는 구매가 가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e이외에 1DAY+, 구독권, 바로 퇴근하기 상품은 대여 시작 시간이 지난 경우 구매할 수 없습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e*상품별 운영 정책은 상시 변경될 수 있으며, 자세한 내용은 기아 비즈 고객센터에 문의해주시기 바랍니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 45,
        categoryName: "예약/결제",
        subCategoryName: "예약",
        question: "공휴일에도 이용할 수 있나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e1회권(퇴출근, 주말) 혹은 퇴출근 구독 상품을 구매 시 이용일 직전 또는 직후가 법정 공휴일인 경우에 한하여 \u0026#39;1DAY+\u0026#39; 상품 추가 구매를 통해 공휴일에 기아 비즈를 이용할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e① 1회권 이용일 직전이 공휴일인 경우 : 1DAY+ 상품 추가 구매 시 픽업 시간을 24시간 앞당겨 공휴일 이용 가능\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e② 1회권 이용일 직후가 공휴일인 경우 : 1DAY+ 상품 추가 구매 시 반납 시간을 24시간 연장하여 공휴일 이용 가능\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e프리미엄 구독 상품 이용 시에는 4주간 퇴출근, 주말, 공휴일을 모두 무료로 이용할 수 있습니다. (대여 요금 한정)\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e*상품별 운영 정책은 상시 변경될 수 있으며, 자세한 내용은 기아 비즈 고객센터에 문의해주시기 바랍니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e \u003c/p\u003e',
      },
      {
        id: 46,
        categoryName: "예약/결제",
        subCategoryName: "예약",
        question: "자주 찾는 K존을 저장해두고 싶어요.",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e자주 찾는 K존은 \u0026#39;즐겨찾기\u0026#39;를 해두시면 편리합니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e차량 예약 화면에서 선택한 K존 이름 옆에 있는 별 모양 버튼을 탭하면 즐겨찾는 K존에 등록됩니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 47,
        categoryName: "예약/결제",
        subCategoryName: "결제",
        question: "기아 비즈를 이용하려면 결제카드를 꼭 등록해야 하나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e기아 비즈를 이용하기 위해서는 이용 상품의 대여 요금 결제를 위해 반드시 유효한 신용/체크카드 정보를 등록해야 합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e등록하신 카드를 통해 이용요금이 결제되며, 최초 1회 등록만으로 편리하게 이용할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e개인용 상품을 결제할 개인용 카드는 본인 명의의 신용/체크카드, 개인 명의의 법인카드(기명), 법인 명의의 법인카드(무기명) 모두 등록 가능합니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e비즈니스 상품은 소속 회사가 선택한 결제 방식에 따라 결제됩니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e▶ 결제정보 입력 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - [마이페이지] - [결제/운전면허 관리] - 결제카드 등록하기\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e결제카드 등록이 원활하지 않은 경우, 기아 비즈 고객센터에 문의해주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 48,
        categoryName: "예약/결제",
        subCategoryName: "결제",
        question: "타인 명의의 결제카드를 등록할 수 없나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e개인용 상품 결제를 위한 개인용 결제카드 정보에 타인 명의의 개인카드 등록은 불가능하며 본인 명의의 신용/체크카드, 개인 명의의 법인카드(기명), 법인 명의의 법인카드(무기명)를 등록할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
    ],
  },
  VEHICLE: {
    pageInfo: {
      totalRecord: 28,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 10,
    },
    items: [
      {
        id: 62,
        categoryName: "차량문의",
        subCategoryName: "차량",
        question: "운행 할 차량의 옵션을 미리 확인하고 싶어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e대여 예약 차량 선택 시 해당 차량의 상세정보 보기 (차량 사진에서 돋보기) 버튼을 클릭하면 운행 차량의 색상과 옵션 등 상세정보를 확인할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e예약 후에는 기아 비즈 앱 - 왼쪽 상단 메뉴 - [예약 및 이용내역] - 해당 건 선택 - 차량 정보에서 상세정보 보기 버튼 클릭 시 상세정보를 확인할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 63,
        categoryName: "차량문의",
        subCategoryName: "차량",
        question: "기아 비즈 차량에는 후방 카메라가 있나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e현재 운행되고 있는 모든 기아 비즈 차량에는 후방카메라가 장착되어 있으니 이용에 참고 부탁드립니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 64,
        categoryName: "차량문의",
        subCategoryName: "차량",
        question: "기아 비즈 차량에는 하이패스 단말기가 장착되어 있나요?",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e현재 운행되고 있는 모든 기아 비즈 차량에는 하이패스 단말기가 장착되어 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e하이패스 구간을 이용하신 경우 반납 이후 주행요금과 함께 하이패스 통행료가 청구되오니 이용에 참고해 주세요.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 65,
        categoryName: "차량문의",
        subCategoryName: "차량",
        question: "차량별 이용 방법을 확인하고 싶어요.",
        answer:
          '\u003cp\u003e\u003cspan style="color:hsl(0, 0%, 0%);font-size:\u0026#39;13pt\u0026#39;;"\u003e\u003cspan style="word-break:keep-all;"\u003e각 차량의 차량별 이용 방법 안내 메뉴에서 차량별 이용 방법, 충전 방법 등을 확인할 수 있습니다.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 66,
        categoryName: "차량문의",
        subCategoryName: "차량",
        question: "블루투스는 어떻게 연결하나요?",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e아래의 방법으로 블루투스를 연결할 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ① 우선 차량 시동을 걸어주세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ② 스마트폰 설정 메뉴에서 블루투스 기능을 켜주세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ③ 블루투스 검색 결과에서 이용하시는 기아 비즈 차종을 선택 후 연결해주세요.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 67,
        categoryName: "차량문의",
        subCategoryName: "차량",
        question: "기아 비즈 차량 이용은 어떻게 하나요?",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e기아 비즈 앱을 통해 스마트폰 하나로 대여 및 차량 제어, 반납까지 가능합니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e기아 비즈 회원가입 후 운전 면허증과 결제 카드 정보를 정상 등록 후 차량을 예약했다면 아래 방법으로 이용하시면 됩니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e   ① 예약한 시간에 맞춰 K존 방문\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e      *예약한 차량이 보이지 않는다면 기아 비즈 앱 스마트키의 [비상등/경적] 버튼을 활용하세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ② 차량에 이상이 없는지 확인 후 기아 비즈 앱 스마트키 화면에서 차량 점검 사진 및 상태 체크\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ③ 스마트키의 [문 열기] 버튼으로 차량 문 열기\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ④ 차량 탑승 후 운행 시작\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 68,
        categoryName: "차량문의",
        subCategoryName: "차량",
        question: "K존의 위치는 어떻게 알 수 있나요?",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e대여하고자 하는 K존의 상세 위치는 K존 안내에서 확인할 수 있습니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e ▶ K존 위치 확인 : 기아 비즈 앱 - 메인 화면 지도 - 해당 K존 맵마커선택 - K존 이름 옆의 i 모양버튼을 터치 - K존 안내 확인\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e *K존의 위치를 더 자세히 알고 싶다면 K존 안내 화면 하단의 [K존 위치를 더 자세히 알고 싶으세요?] 버튼을 눌러주세요. 상세한 K존의 위치를 확인할 수 있습니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 69,
        categoryName: "차량문의",
        subCategoryName: "차량",
        question: "K존에서 예약한 차량의 위치는 어떻게 알 수 있나요?",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e차량 이용 시작 10분 전부터 스마트키가 활성화됩니다. 스마트키의 비상등 및 경적 기능을 활용하여 차량을 찾을 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e기아 비즈 앱 하단의 [스마트키] 탭을 위로 끌어올린 후, [비상등/경적] 버튼을 누릅니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e만약 위의 방법으로도 예약한 차량을 찾지 못할 경우 기아 비즈 고객센터에 문의해주세요.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 70,
        categoryName: "차량문의",
        subCategoryName: "차량",
        question: "K존에 예약한 차량이 보이지 않아요.",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e차량 이용 시작 10분 전부터 스마트키가 활성화됩니다. 스마트키의 비상등 및 경적 기능을 활용하여 차량을 찾을 수 있습니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e기아 비즈 앱 하단의 [스마트키] 탭을 위로 끌어올린 후, [비상등/경적] 버튼을 누릅니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e만약 위의 방법으로도 예약한 차량을 찾지 못할 경우 기아 비즈 고객센터에 문의해주세요.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 71,
        categoryName: "차량문의",
        subCategoryName: "차량",
        question: "차량 문은 어떻게 열 수 있나요?",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e기아 비즈는 별도의 자동차 키 없이 기아 비즈 앱의 스마트키로 차량 문을 열거나 닫고 비상등과 경적을 사용할 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e스마트키는 차량 이용 시작 10분 전부터 활성화됩니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e차량 이용 전 기아 비즈 앱 하단의 [스마트키] 탭에서 차량 점검을 완료한 이후 스마트키를 사용할 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e*블루투스 연결 활성화 시 차량 문을 더욱 빠르게 제어할 수 있습니다.\u003c/span\u003e\u003c/p\u003e",
      },
    ],
  },
  REFUEL: {
    pageInfo: {
      totalRecord: 9,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 0,
    },
    items: [
      {
        id: 90,
        categoryName: "충전",
        subCategoryName: "충전",
        question: "전기차 충전 방법이 궁금해요.",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e차량 충전이 필요하신 경우 인근 전기차 충전소에서 충전해주시고, 충전은 반드시 차량 안에 비치된 전용 충전카드로 결제해주세요. 개인 카드로 충전 시 별도의 충전 비용이 환급되지 않습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e충전 방법 : 충전타입(방식) 선택 \u0026gt; 결제방법 선택 (회원 카드) \u0026gt; 기아 비즈 충전카드로 태깅 \u0026gt; 충전 커넥터 연결 \u0026gt; 완료 시 해제   \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e차종별로 충전타입 및 충전구 위치가 상이하므로, 자세한 내용은 차량별 이용 방법을 확인해주세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e*다음 사용자를 위해 반드시 충전카드는 사용 후 제자리에 놓아주세요. 충전카드 분실 시 별도 페널티가 부과될 수 있습니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 91,
        categoryName: "충전",
        subCategoryName: "충전",
        question: "전기차 충전 비용은 어떻게 결제되나요?",
        answer:
          '\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e차량 충전은 차량 안에 비치된 기아 비즈 전용 충전 카드로 결제 부탁드립니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e해당 카드로 결제 시 해당 충전비용은 기아 비즈가 부담하며, 개인 카드로 충전 시에는 별도의 충전 비용이 환급되지 않습니다. \u003cbr\u003e단, 차량 내 충전카드가 없거나 카드 인식 불가로 인해 불가피하게 개인비용으로 결제해야 하는 경우에 한하여, 결제 비용에 대한 환불이 가능합니다.\u003cbr\u003e(충전기 화면, 카드 결제내역, 충전 전/후 계기판 사진 등 증빙 사진 제출 필수)\u003cbr\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e*차량 이용 후 반납 시 이용하신 주행거리만큼 주행요금은 별도 청구됩니다.\u003cbr\u003e(비즈니스용 상품의 경우, 계약 방식에 따라 주행요금 정산 방식이 상이할 수 있습니다.)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e*청구된 비용은 기아 비즈 앱 - 왼쪽 상단 메뉴 - [예약 및 이용내역] - 해당 건 선택 - 운행 후 요금 결제내역 에서 언제든지 확인이 가능합니다.\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 92,
        categoryName: "충전",
        subCategoryName: "충전",
        question: "차량 안에 충전 카드가 없어요.",
        answer:
          '\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e차량별 충전카드 위치는 \u0026#39;차량별 이용 방법\u0026#39;을 참고해주시고, 차량 내에 전용 충전카드가 없을 경우 고객센터로 연락주시기 바랍니다.  \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e▶ 차량별 충전 전용카드 및 충전구 위치 확인 : 차량별 이용 방법  \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e*전용 충전 카드가 없어 부득이하게 충전이 어려운 경우에는 개인카드로 우선 결제 후 환불처리가 가능합니다.\u003cbr\u003e (단, 충전기 화면, 카드 결제내역, 충전 전/후 계기판 사진 등 증빙 사진 제출 필수)\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 93,
        categoryName: "충전",
        subCategoryName: "충전",
        question: "차량에 비치된 충전 카드가 충전기에서 인식되지 않아요.",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e기아 비즈 충전카드로 태깅이 되지 않을 경우, 카드 회원번호를 직접 입력해주세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e회원번호로도 충전이 진행되지 않는다면 고객센터로 연락주시기 바랍니다.  \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e또한, 카드 인식 오류 관련하여 고객센터로 연락을 주시면 빠른 시일 내에 해당 카드를 교체해드리겠습니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 94,
        categoryName: "충전",
        subCategoryName: "충전",
        question: "차량에 비치된 충전 카드로 결제가 되지 않아요.",
        answer:
          '\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e충전은 기아 비즈 전용 충전카드로 결제하는 것을 기본 원칙으로 하고 있으나, 충전카드 결제 오류로 충전이 불가능한 경우에 한하여 개인카드로 결제하실 수 있도록 안내드리고 있습니다. \u003cbr\u003e(단, 충전기 화면, 카드 결제내역, 충전 전/후 계기판 사진 등 증빙 사진 제출 필수)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e충전카드 결제 오류 시, 고객센터로 미리 연락 주시면 도움을 드리겠습니다.\u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 95,
        categoryName: "충전",
        subCategoryName: "충전",
        question: "전기차 충전 소요 시간이 궁금해요.",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e전기차 충전기는 완속과 급속 두 가지 종류가 있으며, 종류에 따라 충전 소요 시간이 다릅니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e- 완속 충전: 약 9시간 (니로EV 기준, 0%에서 80%까지 충전 시)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e - 급속 충전: 약 40분 (니로EV 기준, 0%에서 80%까지 충전 시)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  *기온 및 차량 배터리 용량에 따라 충전 소요 시간이 상이할 수 있습니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 96,
        categoryName: "충전",
        subCategoryName: "충전",
        question: "충전소 위치는 어디에서 확인할 수 있나요?",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e기아 비즈 앱의 메인 화면 지도에서 [전기차 충전소 위치] 버튼을 통해 전기차 충전소를 검색할 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ① 기아 비즈 앱 메인 화면 지도의 왼쪽 상단 [전기차 충전소 위치] 버튼\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ② 지도 화면을 드래그하여 이용 가능한 가까운 충전소 조회\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ③ 충전소 상세 정보 및 길찾기 확인 가능\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e   * 충전소 정보는 각 운영기관에서 입력한 정보를 활용하여 제공하고 있습니다. 정확한 정보는 각 충전소 운영 기관으로 문의해주시기 바랍니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 97,
        categoryName: "충전",
        subCategoryName: "충전",
        question: "전기차 반납 시 유의해야 하는 내용이 있나요?",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e전기차 반납 시에는 아래 내용을 반드시 확인해주세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ① 반납 위치 : 대여했던 K존(주차구역)에 반납\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ② 차량 라이트/시동 상태 : 라이트/시동 OFF 상태인지 확인 *가(반)시동 상태에서는 반납불가\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ③ 차량 문/창문 상태 : 차량 문이 정상적으로 닫혀 있고 잠금된 상태인지 확인 *뒷문+트렁크 열린 상태에서는 반납 불가\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e차량별 정책이 상이하므로 대여 전 안내 받은 차량 충전 조건 정보를 확인해주세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e반납 전 두고 가는 개인 용품이 없는지 체크해주시고 및 쓰레기를 반드시 수거한 뒤, 스마트키를 통해 문 잠금 후 반납을 진행해주세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e위 조건을 모두 충족했음에도 불구하고 차량 반납이 불가능할 경우 고객센터로 연락 주시면 도움을 드리겠습니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 98,
        categoryName: "충전",
        subCategoryName: "충전",
        question: "제 카드로 충전 요금을 결제했어요.",
        answer:
          "\u003cp\u003e충전은 반드시 차량 안에 비치된 전용 충전 카드로 결제하셔야 하며, 개인 비용으로 결제한 비용은 환불이 불가합니다.\u003c/p\u003e\u003cp\u003e단, 차량 내 충전 카드가 없거나 카드 인식 불가로 인해 불가피하게 개인 비용으로 결제해야 하는 경우에 한하여, 결제 비용에 대한 환불이 가능합니다.\u003cbr\u003e(충전기 화면, 카드 결제 내역, 충전 전/후 계기판 사진 등 증빙 사진 제출 필수)\u003c/p\u003e\u003cp\u003e관련하여 고객센터로 연락 주시면 도움을 드리겠습니다.\u003c/p\u003e",
      },
    ],
  },
  COUPON: {
    pageInfo: {
      totalRecord: 7,
      offset: 0,
      limit: 10,
      prevOffset: 0,
      nextOffset: 0,
    },
    items: [
      {
        id: 122,
        categoryName: "쿠폰/기타",
        subCategoryName: "쿠폰",
        question: "쿠폰으로 할인받을 수 있는 항목은 어떤 것이 있나요?",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e쿠폰 조건에 따라 적용 가능한 할인 상품, 할인 금액이 상이합니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e쿠폰 사용 전에 꼭 해당 쿠폰의 세부 조건을 확인하시기 바랍니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e▶ 쿠폰 확인 방법: 기아 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [내쿠폰] - 해당 쿠폰의 사용 가능 조건 확인\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e*모든 쿠폰은 결제 시, 대여요금에 한해 적용되며 1개만 사용 가능합니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 123,
        categoryName: "쿠폰/기타",
        subCategoryName: "쿠폰",
        question: "쿠폰은 어떻게 등록할 수 있나요?",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e아래 절차에 따라 쿠폰을 등록할 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ① 쿠폰북 다운로드 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [쿠폰북] - 원하는 쿠폰 우측 \u0026#39;다운로드\u0026#39; 버튼 클릭\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ② 개인 쿠폰 등록 : 기아 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [내쿠폰] - [쿠폰 코드 입력] - [등록]\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  *쿠폰 등록이 원활하지 않은 경우, 고객센터에 문의해주시기 바랍니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 124,
        categoryName: "쿠폰/기타",
        subCategoryName: "쿠폰",
        question: "보유한 쿠폰은 어디에서 확인할 수 있나요?",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e보유하신 쿠폰은 기아 비즈 앱에서 간편하게 확인이 가능합니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  ▶ 쿠폰 확인 방법: 기아 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [내쿠폰]\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  *쿠폰이 보이지 않을 경우, 고객센터에 문의해주시기 바랍니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 125,
        categoryName: "쿠폰/기타",
        subCategoryName: "쿠폰",
        question: "예약 시 보유한 쿠폰이 적용되지 않아요.",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e쿠폰 조건에 따라 적용 가능한 쿠폰이 상이합니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e쿠폰이 적용되지 않을 경우, 아래 메뉴에서 해당 쿠폰의 사용 가능 조건을 확인하시기 바랍니다.   \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e▶ 쿠폰 확인 방법: 기아 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [내쿠폰] - 해당 쿠폰의 사용 가능 조건 확인  \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e*모든 쿠폰은 결제 시, 대여요금에 한해 적용되며 1개만 사용 가능합니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 126,
        categoryName: "쿠폰/기타",
        subCategoryName: "쿠폰",
        question:
          "쿠폰을 사용하여 예약 결제했는데 예약을 취소하면 쿠폰도 삭제되나요?",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e예약 취소 시, 쿠폰의 사용기간이 남아있는 경우에는 해당 쿠폰이 재발급됩니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e단, 쿠폰의 사용기간이 만료되었을 경우에는 예약 취소 시 해당 쿠폰은 소멸됩니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e   ▶ 쿠폰 확인 방법: 기아 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [내쿠폰]\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e  *예약 취소 후에도 사용기간이 남아 있는 쿠폰이 재발급되지 않는 경우, 고객센터에 문의해주시기 바랍니다.\u003c/span\u003e\u003c/p\u003e",
      },
      {
        id: 127,
        categoryName: "쿠폰/기타",
        subCategoryName: "기타",
        question: "분실물이 발생했을 때에는 어떻게 해야 하나요?",
        answer:
          '\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e\u0026#39;두고 내린 물건 찾기\u0026#39; 기능으로 반납 후에도 도어 제어를 통해 물건을 찾아가실 수 있습니다. (단, 차량 반납 후 30분 이내) \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e반납 후 30분이 초과되었거나, 해당 차량의 다음 예약 건으로 \u0026#39;두고 내린 물건 찾기\u0026#39; 기능 사용이 불가한 경우, 고객센터(1833-4964)로 연락 주시면 물품 회수에 도움 드리겠습니다.  \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e*기아 비즈에서는 대여하신 차량에서 발생되는 물품 분실에 대한 배상 책임이 없습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="font-size: \u0026#39;13pt\u0026#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;"\u003e*이용 중 이전 고객의 분실물을 발견 시, 분실물 크기에 따라 [보조석 서랍] 또는 [트렁크]에 보관후 고객센터 또는 카카오 상담 채널로 말씀해주시면 감사하겠습니다. \u003c/span\u003e\u003c/p\u003e',
      },
      {
        id: 128,
        categoryName: "쿠폰/기타",
        subCategoryName: "기타",
        question: "차량에서 이전 사용자의 분실물을 발견했어요.",
        answer:
          "\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e이전 사용자의 소지품 발견 시 고객센터로 연락주시기 바랍니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"\u003e안전한 보관을 위해 해당 소지품은 글로브박스 혹은 트렁크에 보관 후 사진 촬영 부탁드립니다.\u003c/span\u003e\u003c/p\u003e",
      },
    ],
  },
};

export const mockFAQListHandler = [
  http.get("/api/faqs", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab") || "CONSULT";
    const question = url.searchParams.get("question") || "";
    const limit = parseInt(url.searchParams.get("limit") || "10");
    const offset = parseInt(url.searchParams.get("offset") || "0");
    const faqList = tab === "CONSULT" ? mockConsultFaqList : mockUsageFaqList;
    const faqCategoryID = url.searchParams.get("faqCategoryID") || "ALL";
    const categoryData = faqList[faqCategoryID as keyof typeof faqList];

    if (!categoryData) {
      return HttpResponse.json({
        data: {
          items: [],
          pageInfo: {
            totalRecord: 0,
            offset: 0,
            limit: limit,
            prevOffset: 0,
            nextOffset: 0,
          },
        },
      });
    }

    let filteredItems = categoryData.items;

    if (question.trim()) {
      const searchTerm = question.toLowerCase();
      filteredItems = filteredItems.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm) ||
          item.answer.toLowerCase().includes(searchTerm)
      );
    }

    const totalRecord = question.trim()
      ? filteredItems.length
      : categoryData.pageInfo.totalRecord;

    const expandedItems = [...filteredItems];
    if (!question.trim() && filteredItems.length < totalRecord) {
      while (expandedItems.length < totalRecord) {
        for (
          let i = 0;
          i < filteredItems.length && expandedItems.length < totalRecord;
          i++
        ) {
          const item = filteredItems[i];
          expandedItems.push({
            ...item,
            id:
              item.id +
              Math.floor(expandedItems.length / filteredItems.length) * 1000,
          });
        }
      }
    }

    const startIndex = 0;
    const endIndex = Math.min(offset + limit, totalRecord);
    const paginatedItems = expandedItems.slice(startIndex, endIndex);

    const prevOffset = Math.max(0, offset - limit);
    const nextOffset = endIndex < totalRecord ? offset + limit : offset;

    return HttpResponse.json({
      data: {
        items: paginatedItems,
        pageInfo: {
          totalRecord,
          offset,
          limit,
          prevOffset,
          nextOffset,
        },
      },
    });
  }),
];
