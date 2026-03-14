import { AlphabetPage } from "@pages/alphabet";
import { DictionaryPage } from "@pages/dictionary";
import { ChatPage } from "@pages/gpt-chat";
import { MainPage } from "@pages/main";
import type { RouteProps } from "react-router-dom";

export const AppRoutes = {
  MAIN: "main",
  ALPHABET: "alphabet",
  DICTIONARY: "dictionary",
  CHAT: "chat",
} as const;

export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ALPHABET]: "/alphabet",
  [AppRoutes.DICTIONARY]: "/dictionary",
  [AppRoutes.CHAT]: "/chat",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ALPHABET]: {
    path: RoutePath.alphabet,
    element: <AlphabetPage />,
  },
  [AppRoutes.DICTIONARY]: {
    path: RoutePath.dictionary,
    element: <DictionaryPage />,
  },
  [AppRoutes.CHAT]: {
    path: RoutePath.chat,
    element: <ChatPage />,
  },
};
