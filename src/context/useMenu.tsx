import {
  useContext,
  createContext,
  useState,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
} from "react";

interface MenuContextType {
  isOpen: boolean;
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextType | null>(null);

const MenuProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, toggleOpen] = useState<boolean>(false);

  return (
    <>
      <MenuContext.Provider value={{ isOpen, toggleOpen }}>
        {children}
      </MenuContext.Provider>
    </>
  );
};

const useMenu = () => {
  let context: MenuContextType | null = null;
  context = useContext(MenuContext);

  if (context === null) {
    throw new Error("useAlert must be used inside Alert Provider");
  }
  return context;
};

export { useMenu };
export default MenuProvider;
