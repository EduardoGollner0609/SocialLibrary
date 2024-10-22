import { Outlet } from "react-router-dom";
import SlideBarSide from "../../components/SlideBarSide";
import "./styles.css";

export default function SocialPage() {
  return (
    <>
      <SlideBarSide />
      <Outlet />
    </>
  );
}
