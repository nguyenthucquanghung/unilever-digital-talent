import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
	hover: {
		scale: 1.1,
		// textShadow: "0px 0px 8px rgb(255,255,255)",
		// boxShadow: "0px 0px 8px rgb(255,255,255)",
		transition: {
			duration: 0.3,
			yoyo: 5
		}
	}
}

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 1.5, duration: 1.5 }
	},
	exit: {
		x: "-100vh",
		transition: { ease: 'easeInOut' }
	}
};

const Home = () => {
	return (
		<motion.div className="home container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<h2>Discover your potential to be a digital talent </h2>
			<Link to="/choosing">
				<motion.button
					variants={buttonVariants}
					whileHover="hover"
				>
					Let's get started
				</motion.button>
			</Link>
			<Loader />
		</motion.div>
	)
}
export {
	buttonVariants,
	containerVariants
}
export default Home;