import { setupWorker } from "msw/browser";
import { mockCategoryHandler } from "./mockCategoryHandler";
import { mockFAQListHandler } from "./mockFAQListHandler";
import { mockJoinServiceUseHandler } from "./mockJoinServiceUseHandler";

export const handlers = [
  ...mockFAQListHandler,
  ...mockCategoryHandler,
  ...mockJoinServiceUseHandler,
];

export const worker = setupWorker(...handlers);

export const startMocking = async () => {
  if (import.meta.env.DEV) {
    return worker.start({
      onUnhandledRequest: "bypass",
    });
  }
};
