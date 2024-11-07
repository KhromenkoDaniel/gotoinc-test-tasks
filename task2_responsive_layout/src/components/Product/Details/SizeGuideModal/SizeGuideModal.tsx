import measureFeetImg from "@/assets/measure-ur-feet.svg";
import cross from "@/assets/icons/cross.svg";

type SizeGuideModalProps = {
    isOpen: boolean;
    closeModal: () => void;
};

const SizeGuideModal = ({ isOpen, closeModal }: SizeGuideModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="size-guide__wrapper" onClick={closeModal}>
            <div className="size-guide__dialog" onClick={(e) => e.stopPropagation()}>
                <div className="size-guide__header">
                    <div className="size-guide__header--top">
                        <h2>Size Guide</h2>
                        <button className="size-guide__close" onClick={closeModal}>
                            <img src={cross} alt="Close"/>
                        </button>
                    </div>
                    <h3>How to measure shoe size?</h3>
                </div>
                <div className="size-guide__content">
                    <div className="size-guide__content-description">
                        <p>Follow the simple steps below to determine your shoe size. Make sure you do this during or at
                            the
                            end of the day to ensure the right size (feet typically swell during the day).</p>
                        <ol>
                            <li>Put a piece of blank paper under your feet. Stand up straight and have your heel
                                lightly
                                touching against the wall.
                            </li>
                            <li>Have someone mark the end of the longest toe and the back of your heel on the sheet
                                with a
                                pen or pencil. Afterwards measure the length of your feet from heel to toe.
                            </li>
                            <li>Repeat the steps for your other foot and compare it with our size chart below.</li>
                        </ol>
                    </div>
                    <img src={measureFeetImg} alt="How to measure shoe size" className="size-guide__image"/>
                </div>
            </div>
        </div>
    );
};

export default SizeGuideModal;
