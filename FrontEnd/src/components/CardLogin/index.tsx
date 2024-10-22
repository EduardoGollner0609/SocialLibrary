import "./styles.css";

export default function CardLogin() {
  return (
    <div id="card-login" className="card">
      <h2>Login</h2>
      <label htmlFor="">Email</label>
      <input type="text" />

      <label htmlFor="">Senha</label>
      <input type="password" />
    </div>
  );
}
