import "./styles.css";
import imgCommunity from '../../assets/foto-gc.jpg';

export default function CardCommunity() {
  return (
  <div className="card-community">
<img src={imgCommunity} alt="" />
<p>Nome da comunidade</p>
<p>0/50</p>
  </div>
  );
}
