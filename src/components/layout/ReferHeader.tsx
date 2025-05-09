import { IoMdClose } from "react-icons/io";
import style from './ReferHeader.module.css'

interface ReferHeaderProps {
    isVisible: boolean;
    onClose: () => void;
}

const ReferHeader: React.FC<ReferHeaderProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className={`${style.RefHeader} flex items-center justify-between bg-slate-700 py-1 px-4`}>
            <p className="flex-grow gap-1 text-[14px] md:text-[16px] font-normal tracking-wider text-white text-center">
                <span className={`${style.RefSpan} block md:inline`}>Refer friends and earn coins for yourself! </span>
                <a className="text-indigo-400 font-medium underline" href="/login">Get Refer Link</a>
                <span> To start with AI PRO RESUME</span>
            </p>
            <button type="button" aria-label="Close" onClick={onClose}>
                <IoMdClose className="h-6 w-6 text-white" />
            </button>
        </div>
    );
};

export default ReferHeader;
