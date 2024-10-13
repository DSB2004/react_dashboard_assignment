import {
  useContext,
  createContext,
  useState,
  useEffect,
  FC,
  ReactNode,
} from "react";

import { MdErrorOutline } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp, IoClose } from "react-icons/io5";

interface AlertType {
  bg: string;
  icon: ReactNode;
  msg: string;
}

interface AlertContextType {
  renderAlert: (type: string, msg: string) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

const AlertProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const alertMap: { [key: string]: { bg: string; icon: ReactNode } } = {
    SUCCESS: {
      bg: "bg-green-600",
      icon: <IoCheckmarkDoneCircleSharp className="w-6 h-6" />,
    },
    ERROR: {
      bg: "bg-red-600",
      icon: <MdErrorOutline className="w-6 h-6" />,
    },
  };

  const [alert, setAlert] = useState<AlertType | null>(null);

  useEffect(() => {
    let alertInterval: NodeJS.Timeout | null = null;
    if (alert) {
      alertInterval = setTimeout(() => {
        setAlert(null);
      }, 3500);
    }
    return () => {
      if (alertInterval) {
        clearTimeout(alertInterval);
      }
    };
  }, [alert, setAlert]);

  const renderAlert = (type: string, msg: string) => {
    setAlert({ ...alertMap[type], msg });
  };

  return (
    <>
      <AlertContext.Provider value={{ renderAlert }}>
        {!alert || alert === null ? (
          <></>
        ) : (
          <>
            <div
              className={`fixed z-50  top-3 right-3 animate-slider shadow-2xl  ${alert?.bg}`}
            >
              <div className={`p-3 min-w-80  `}>
                <p className="text-sm font-normal text-white flex gap-1 items-center">
                  {alert?.icon}
                  {alert?.msg}
                  <span className="ml-auto mr-1">
                    <IoClose
                      className="w-6 h-6"
                      onClick={() => setAlert(null)}
                    />
                  </span>
                </p>
              </div>
            </div>
          </>
        )}
        {children}
      </AlertContext.Provider>
    </>
  );
};

const useAlert = () => {
  let context: AlertContextType | null = null;
  context = useContext(AlertContext);

  if (context === null) {
    throw new Error("useAlert must be used inside Alert Provider");
  }
  return context;
};

export { useAlert };
export default AlertProvider;
