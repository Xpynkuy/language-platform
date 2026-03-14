import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./routerConfig";
import { Layout } from "@widgets/layout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {Object.values(routeConfig).map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Route>
    </Routes>
  );
};
