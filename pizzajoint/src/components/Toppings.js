import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		opacity: 0,
		x: '200px'
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: 'spring', delay: 0.5, mass: 1.5, stiffness: 200 }
	},
	exit: {
		opacity: 0,
		x: -200,
		transition: { ease: 'easeInOut' }
	}
};

const buttonVariants = {
	hover: {
		scale: 1.1,
		textShadow: "0px 0px 8px rgb(255,255,255)",
		boxShadow: "0px 0px 8px rgb(255,255,255)",
		transition: {
			duration: 0.3,
			yoyo: Infinity
		}
	}
}

const Toppings = ({ addTopping, pizza }) => {
	let toppings = ['Integrity', 'Honesty', 'Responsibility', 'Humility', 'Compassion', 'Courageousness'];

	return (
		<motion.div className="toppings container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<h3>Quizz 2: Which of the following personalities does Ethan have?</h3>
			<ul>
				{toppings.map(topping => {
					let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
					return (
						<motion.li key={topping} onClick={() => addTopping(topping)}
							whileHover={{ scale: 1.3, originX: 0, color: '#F43C4E' }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<span className={spanClass}>{topping}</span>
						</motion.li>
					)
				})}
			</ul>
			<Link to="/order">
				<motion.button
					variants={buttonVariants}
					whileHover="hover"
				>
					Finish
				</motion.button>
			</Link>

		</motion.div>
	)
}
export {
	containerVariants,
	buttonVariants
}
export default Toppings;