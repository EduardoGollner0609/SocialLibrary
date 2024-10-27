import "./styles.css";

export default function CardResumeBook() {
  return (
    <div className="card-resume-book">
     <h2>Sobre a sua leitura</h2>
 <form action="">
  <div className="form-item">
  <label htmlFor="">Livro</label>
  <input type="text" />
  </div>

  <div className="form-item-resume">
 <label htmlFor="">Resumo</label> 
 <textarea name="" id="" placeholder="Compartilhe com a gente sobre a sua leitura =)"></textarea>
  </div>
 <button>Salvar</button>
 </form>
      </div>
  );
}
