import { useEffect } from "react";
import "./Toast.scss";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

const Toast = ({ message, type = "success", onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000); // Desaparece después de 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${type}`}>
      {message}
    </div>
  );
};

export default Toast;
