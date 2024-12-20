import "./styles.css";

export default function CardRegister() {
  return (
    <div className="card-register">
      <h1>Cadastro</h1>
      <div className="textfield">
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" placeholder="Nome Completo" required />
      </div>

      <div className="textfield">
        <label htmlFor="data-de-nascimento">Data de Nascimento</label>
        <input type="date" name="data-de-nascimento" />
      </div>

      <div className="textfield">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Digite seu email"
          required
        />
      </div>

      <div className="textfield">
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          placeholder="Digite sua senha"
          required
        />
              <p>A senha deve conter entre 6 a 30 caracteres.</p>
      </div>
      <button className="btn-register">Cadastrar</button>
    </div>
  );
}
