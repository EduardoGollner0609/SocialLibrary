import "./styles.css";
import qrCode from "../../assets/QRCode.png";

export default function MoreDetails() {
  return (
    <section id="section-more-details">
      <div className="more-details-content">
        <div className="more-details-content-left">
          <h2>Vem pra cá</h2>
          <p>
            Você ama ler e gostaria de compartilhar com as pessoas sobre seus
            momentos de leitura?
          </p>
          <br />
          <p>
            Então saiba que a Social Library foi desenvolvida com tamanho
            carinho pensando em você que é um amante da leitura, aqui você pode
            conhecer e se conectar com pessoas com interesses semelhantes.
          </p>
          <br />
          <p>
            Caso não goste de ler, se liga só em alguns beneficios que você está
            perdendo:
          </p>
          <p>- Aumento do conhecimento</p>
          <p>- Melhora da habilidade de comunicação</p>
          <p> - Reduzação do estresse</p>
          <p> - Melhora da memória</p>
          <p> - Grande desenvolvimento da criatividade </p>

          <br />
          <p>
            Então venha já e cadastre-se aqui na Social Library, para
            desenvolver esse hábito tão prazeroso e benefico.
          </p>
        </div>

        <div className="more-details-content-right">
          <h2>Sobre Nós</h2>
          <p>
            Este site foi desenvolvido por <i>Eduardo Sousa Gollner</i> afim de
            conectar pessoas que sejam amantes da leitura ou que buscam
            desenvolver o hábito da leitura em suas vidas.
          </p>
          <br />
          <p>
            Este site está de pé sendo custeado apenas por mim, mas a boa
            noticia é que você pode nos ajudar a levar essa rede social para
            frente nos ajudando tanto em divulgação quanto em qualquer valor
            caso tenha interesse:
          </p>
          <div className="more-details-content-right-img">
            <img src={qrCode} alt="" />
          </div>
          <p>Chave pix: 27 992657127</p>
        </div>
      </div>
    </section>
  );
}
