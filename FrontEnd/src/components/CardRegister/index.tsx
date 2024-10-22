import "./styles.css";

export default function CardRegister() {
  return (
    <div className="card-register">
      <div className="textfield">
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" placeholder="Nome Completo" />
      </div>

      <div className="textfield">
        <label htmlFor="data-de-nascimento">Data de Nascimento</label>
        <input type="date" name="data-de-nascimento" />
      </div>

      <div className="textfield">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="Digite seu email" />
      </div>

      <div className="textfield">
        <label htmlFor="senha">Nome</label>
        <input type="password" name="senha" placeholder="Digite sua senha" />
      </div>

      <button>Cadastrar</button>
    </div>
  );
}
