import { useEffect } from "react";
import './index.css';



export function ToastNotification ({message , onClose}) {


    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [message , onClose]);

    return(
        <div className="toast-notification">
            {message}
        </div>
    )
}