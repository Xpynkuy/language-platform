import { Header } from "@widgets/header";
import styles from "./Layout.module.scss";
import { Suspense } from "react";
import { Outlet } from "react-router";
import Loader from "@shared/ui/Loader/Loader";
import { Footer } from "@widgets/footer";
export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
