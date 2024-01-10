import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { OutletWrapper } from "./style";
import { Suspense } from "react";

export default function RootLayout() {
  return (
    <>
      <Header />
      <OutletWrapper>
        <Suspense fallback={<div>Loading.....</div>}>
          <Outlet />
        </Suspense>
      </OutletWrapper>
    </>
  );
}
