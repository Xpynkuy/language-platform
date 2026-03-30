import { AlphabetPage } from "@pages/alphabet";
import { DictionaryPage } from "@pages/dictionary";
import { ChatPage } from "@pages/gpt-chat";
import { MainPage } from "@pages/main";
import { NotFoundPage } from "@pages/not-found";
import type { RouteProps } from "react-router-dom";

export const AppRoutes = {
  MAIN: "main",
  ALPHABET: "alphabet",
  DICTIONARY: "dictionary",
  CHAT: "chat",
  NOT_FOUND: "not_found",
} as const;

export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ALPHABET]: "/alphabet",
  [AppRoutes.DICTIONARY]: "/dictionary",
  [AppRoutes.CHAT]: "/chat",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ALPHABET]: {
    path: RoutePath[AppRoutes.ALPHABET],
    element: <AlphabetPage />,
  },
  [AppRoutes.DICTIONARY]: {
    path: RoutePath[AppRoutes.DICTIONARY],
    element: <DictionaryPage />,
  },
  [AppRoutes.CHAT]: {
    path: RoutePath[AppRoutes.CHAT],
    element: <ChatPage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
