import "./styles.css";
import imgAnimatedHomePage from "../../assets/AnimatedHomePage.svg";
import CardLogin from "../../components/CardLogin";

export default function LoginPage() {
  return (
    <section id="section-login-page">
      <div id="login-page-left">
        <img src={imgAnimatedHomePage} alt="" />
      </div>
      <div id="login-page-right">
        <CardLogin />
      </div>
    </section>
  );
}
