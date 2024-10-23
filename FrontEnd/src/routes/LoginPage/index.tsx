import "./styles.css";
import imgAnimatedHomePage from "../../assets/AnimatedHomePage.svg";
import CardLogin from "../../components/CardLogin";

export default function LoginPage() {
  return (
    <section id="section-login-page">
      <div className="login-page-left">
        <img src={imgAnimatedHomePage}  />
      </div>
      <div className="login-page-right">
        <CardLogin />
      </div>
    </section>
  );
}
