import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function CardStopWatch() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = (): void => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stopTimer = (): void => {
    if (isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = (): void => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time: number): string => {
    const centiseconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}:${centiseconds}`;
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div className="card-stop-watch">
      <h2>Cronômetro</h2>
      <div className="card-stop-watch-time">
        <h3 id="watch"> {formatTime(time)}</h3>
      </div>
      <div className="card-stop-watch-btns">
        <button onClick={startTimer} className="btn-start">Iniciar</button>
        <button onClick={stopTimer} className="btn-pause">Pausar</button>
        <button onClick={resetTimer} className="btn-reset">Resetar</button>
      </div>
    </div>
  );
}
