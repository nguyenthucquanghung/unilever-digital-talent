import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { containerVariants, buttonVariants } from './Toppings';

const nextVariants = {
	hidden: {
		x: '-100vw'
	},
	visible: {
		x: 0,
		transition: { type: 'spring', stiffness: 120 }
	}
}

const Base = ({ addBase, pizza }) => {
	const bases = ['Handsome', 'Pretty', 'Gorgeous'];

	return (
		<motion.div className="base container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<h3>Quizz 1: Describe Ethan in one word</h3>
			<ul>
				{bases.map(base => {
					let spanClass = pizza.base === base ? 'active' : '';
					return (
						<motion.li key={base} onClick={() => addBase(base)}
							whileHover={{ scale: 1.3, originX: 0, color: '#F43C4E' }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					)
				})}
			</ul>

			{pizza.base && (
				<motion.div className="next"
					variants={nextVariants}
				>
					<Link to="/toppings">
						<motion.button
							variants={buttonVariants}
							whileHover="hover"
						>
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	)
}

export default Base;