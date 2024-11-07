import { useState, useEffect, useCallback } from "react";

type ModalHook = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

const useModal = (): ModalHook => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const dialogContent = document.querySelector('.size-guide__content') as HTMLElement;

            if (isOpen && dialogContent && !dialogContent.contains(event.target as Node)) {
                closeModal();
            }
        };

        return () => {
            document.body.style.opacity = '1';
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, closeModal]);

    return {
        isOpen,
        openModal,
        closeModal,
    };
};

export default useModal;
