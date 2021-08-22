import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
	exit: {
		opacity: 0,
		transition: { ease: 'easeInOut' }
	}
}

const modal = {
	hidden: { y: "-100vh", opacity: 0 },
	visible: {
		y: "150px",
		opacity: 1,
		transition: { delay: 0.5 }
	},
	exit: {
		y: "-100vh",
		opacity: 0,
		transition: { ease: 'easeInOut' }
	}
}

const Modal = ({ showModal }) => {
	return (
		<AnimatePresence>
			{showModal && (
				<motion.div className="backdrop"
					variants={backdrop}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<motion.div className="modal"
						variants={modal}
					>
						<p>Thanks for your response!</p>
						<Link to="/">
							<button>Go to Unilerver education page</button>
						</Link>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
export {
	modal,
	backdrop
}
export default Modal;