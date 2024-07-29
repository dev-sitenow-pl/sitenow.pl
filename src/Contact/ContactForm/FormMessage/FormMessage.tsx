import { useEffect, useState } from "react";
import { Loader } from "../../../Loader/Loader";
import { MessageStatus } from "../../../types/types";

interface FormMessageProps {
  mes_stat: MessageStatus;
  loading_stat: boolean;
  countdown_time: number;
}

const FormMessage: React.FC<FormMessageProps> = ({ mes_stat: { message, status }, loading_stat, countdown_time }) => {
  const [time, setTime] = useState(countdown_time / 1000);

  const messageBoxClass = `message-box ${status === 'success' ? 'success' : status === 'error' ? 'error' : ''}`;

  useEffect(() => {
    setTime(countdown_time / 1000);
    if (status && time > 0) {
      const interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000)
      return () => clearInterval(interval);
    }
  }, [status, countdown_time]);

  if (loading_stat || status) {
    return <>
      <div className={messageBoxClass}>
        {loading_stat && <>
          <h4>Wysyłam...</h4>
          <Loader />
        </>
        }
        <h4>{message}</h4>
        {status && <small>Zniknę za {time} sekund</small>}
      </div>

    </>
  }
  return null;
}

export { FormMessage };