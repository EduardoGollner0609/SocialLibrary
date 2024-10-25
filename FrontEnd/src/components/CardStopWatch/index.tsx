import { useEffect, useState } from "react";
import "./styles.css";

export default function CardStopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval || undefined);
    }

    return () => clearInterval(interval || undefined);
  }, [isRunning, time]);

  const formatTime = (time: number) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div className="card-stop-watch">
      <h1>Cronômetro</h1>
      <h2 id="watch"> {formatTime(time)}</h2>
      <div className="card-stop-watch-btns">
        <button onClick={() => setIsRunning(true)}>Iniciar</button>
        <button onClick={() => setIsRunning(false)}>Pausar</button>
        <button
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
        >
          Resetar
        </button>
      </div>
    </div>
  );
}
