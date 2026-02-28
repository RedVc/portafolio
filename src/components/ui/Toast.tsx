import { useEffect } from "react";
import { Check, CircleX } from "lucide-react";

interface ToastProps {
  message: string;
  show: boolean; 
  error: boolean; 
  onClose: () => void;
}

export default function Toast({ message, show, error, onClose }: ToastProps) {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div 
        className="fixed right-2/4 top-4 bg-cyan-950 px-6 py-3 rounded-lg shadow-lg animate-bounce flex items-center"
        onClick={onClose}
        >
      {message}

      {
        error ?
        <Check className="ml-2 text-green-400" />:
        <CircleX className="ml-2 text-red-400" />
    }
    </div>
  );
}