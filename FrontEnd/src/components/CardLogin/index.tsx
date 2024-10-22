import "./styles.css";

export default function CardLogin() {
  return (
    <div className="card-login">
      <h1>Login</h1>
      <div className="card-login-content">
        <div className="textfield">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Digite seu email" />
        </div>

        <div className="textfield">
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" placeholder="Digite sua senha" />
        </div>

        <button className="btn-login">Login</button>
          <a href="">Clique aqui para se cadastrar.</a>
      </div>
    </div>
  );
}
