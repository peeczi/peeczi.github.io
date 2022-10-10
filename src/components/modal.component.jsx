import { motion } from "framer-motion";
import "../css/modal.styles.css";
import Resume from '../routes/resume';
import Backdrop from "./backdrop.component";
import resume from '../data/resume.json';

function Modal({ handleClose, text}) {
    const dropIn = {
        hidden: {
            y: "-1vh",
            opacity: 0,
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500,
            }
        },
        exit: {
            y: "1vh",
            opacity: 0,
        }
    }
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal blue-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p>{text}</p>
                <Resume resume={resume}/>
                {/* <button onClick={handleClose}>Close</button> */}
            </motion.div>
        </Backdrop>
    )
}

export default Modal