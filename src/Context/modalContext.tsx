import { createContext, ReactNode, useState } from "react";
import { modalContextData } from '../types/modalContextData';
import { IsformProps } from '../types/Agent'

interface ModalProviderProps {
    children: ReactNode
}

export const ModalContext = createContext<modalContextData>({} as modalContextData);

export function ModalProvider({children}: ModalProviderProps): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [needReload, setNeedReload] = useState(false);
    const [isform, setIsform] = useState("Yes");
    const [searchString, setSearchString] = useState("");
    const [agentReview, setAgentReview] = useState("");
    
    const openModal = () => {
        setIsform("Yes");
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const reload = () => {
        setNeedReload(!needReload);
    }

    const set_Isform = (key: IsformProps) => {
        setIsform(key.key1);
        setAgentReview(key.key2);
        setIsModalOpen(true);
    }

    return (
        <ModalContext.Provider
            value={{
                needReload,
                isModalOpen,
                isform,
                searchString,
                agentReview,
                openModal,
                closeModal,
                reload,
                set_Isform,
                setSearchString
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}