/* Dependency Imports */
import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContext = createContext<any>(null);

const ToastProvider = (props: ChildProps) => {

    const { children } = props;

    const showToast = (message: string) => {
        toast.error(message);
    };

    return (<div>
        <ToastContext.Provider value={showToast}>{children}</ToastContext.Provider>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover 
        />
    </div>)
};

/* Types */
interface ChildProps {
    children: any;
};

export { ToastContext, ToastProvider };
