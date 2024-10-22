import imgAnimatedHomePage from "../../assets/AnimatedHomePage.svg";
import CardLogin from "../../components/CardLogin";

export default function LoginPage() {
  return (
    <section>
      <div>
        <img src={imgAnimatedHomePage} alt="" />
      </div>
      <div>
      <CardLogin />
      </div>
    </section>
  );
}
