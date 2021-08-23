import React, { useState } from 'react';
import Loader from './Loader';
import { modal, backdrop } from './Modal';
import { buttonVariants, containerVariants } from './Home'
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const hardSkills = [
    {
        idx: 1,
        sName: "Agile",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 2,
        sName: "Analytics",
        definition: "The systematic approach to transforming data into actionable insights to make datadriven decisions"
    },
    {
        idx: 3,
        sName: "Artificial intelligence",
        definition: "Software that enables computers to reproduce or surpass tasks that would require intelligence if human workers were performing them"
    },
    {
        idx: 4,
        sName: "Augmented reality",
        definition: "A live view of a physical, real-world environment whose elements are augmented (or supplemented) by computer-generated sensory inputs"
    },
    {
        idx: 5,
        sName: "Automation",
        definition: "Application of machines/computers to tasks in order to increase efficiency and reliability"
    },
    {
        idx: 6,
        sName: "Behavioral sciences",
        definition: "Combines knowledge of sociology, psychology, and anthropology with strong observation, research, and communication skills to examine human behavior and decision-making"
    },
    {
        idx: 7,
        sName: "Big data",
        definition: "Technology that enables the handling of massive amounts of structured and unstructured data (that cannot be handled by traditional database technologies) as well as their storage and analysis for better insights and decision-making"
    },
    {
        idx: 8,
        sName: "Cloud computing",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 9,
        sName: "Community management",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 10,
        sName: "Cybersecurity",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 11,
        sName: "Data science",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 12,
        sName: "Digital manufacturing ",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 13,
        sName: "Search engine optimization (SEO)",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 14,
        sName: "Innovation strategy",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 15,
        sName: "Master data management",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 16,
        sName: "Mobile application design and development",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 17,
        sName: "Robotics",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 18,
        sName: "Robotic process automation",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 19,
        sName: "Internet of things (IoT)",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 20,
        sName: "User experience design",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 21,
        sName: "User interface design",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 22,
        sName: "Virtual reality",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 23,
        sName: "Video content marketing",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
    {
        idx: 24,
        sName: "Web development",
        definition: "A time-boxed, iterative approach to development that divides a product or program into short phases of work, which is then tested early and often throughout the development lifecycle"
    },
]
export const softSkills = [
    {
        idx: 1,
        sName: "Change management",
        definition: "Helping an organization transform itself by focusing on organizational effectiveness, improvement, and development"
    },
    {
        idx: 2,
        sName: "Collaboration",
        definition: "Processes that help multiple people or groups interact and share information to achieve common goals"
    },
    {
        idx: 3,
        sName: "Comfort with ambiguity",
        definition: "Feeling comfortable and confident in acting within an environment of uncertainty or constant change and having higher risk tolerance"
    },
    {
        idx: 4,
        sName: "Customer-centricity",
        definition: "Committing to a top tier level of service to the customer and considering the customer experience above all"
    },
    {
        idx: 5,
        sName: "Entrepreneurial mindset",
        definition: "State of mind which orientates human conduct towards entrepreneurial activities and outcomes; drawn to opportunities, innovation, and new value creation and able to take calculated risks and accept the realities of change and uncertainty"
    },
    {
        idx: 6,
        sName: "Data-driven decision making",
        definition: "Using data and insights to develop a theory, testing the theory in practice to determine its validity, and making business decisions"
    },
    {
        idx: 7,
        sName: "Organizational dexterity",
        definition: "Flexibility to perform varied roles, actions, or activities with skill and grace and the ability to transition between roles, actions, and activities quickly and effectively"
    },
    {
        idx: 8,
        sName: "Passion for learning",
        definition: "A deeply ingrained enthusiasm for seeking out and acquiring new information and knowledge, often across a variety of fields and topics"
    },
]
const tableRowVariants = {
    visible: {
        color: '#0134cd',
        background: 'white',
    },
    hover: {
        scale: 1.02,
        // background: '#0134cd',
        color: '#F43C4E',
        transition: {
            duration: 0.4,
            // yoyo: Infinity
        }
    },
}
const getHardCount = (mask) => {
    let res = 0;
    for (let i = 0; i < hardSkills.length; ++i)
        if ((1 << i) & mask)
            ++res;
    return res;
}
const getSoftCount = (mask) => {
    let res = 0;
    for (let i = hardSkills.length; i < softSkills.length + hardSkills.length; ++i)
        if ((1 << i) & mask)
            ++res;
    return res;
}
const TalentChoosing = () => {
    const [showHardSkills, setShowHardSkills] = useState(true);
    const [showSoftSkills, setShowSoftSkills] = useState(false);
    const [mask, setMask] = useState(0);
    return (
        <>
            <motion.div className="home container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h2>Choose skills that you think you might have</h2>
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    onClick={() => setShowHardSkills(true)}
                >
                    Show hard skills
                </motion.button>
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    onClick={() => setShowSoftSkills(true)}
                >
                    Show soft skills
                </motion.button>
                <p>You have chosen {getHardCount(mask)} hard skills and {getSoftCount(mask)} soft skills</p>
                <Link to='/base'>
                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        Next
                    </motion.button>
                </Link>

                <Loader />
            </motion.div>
            <AnimatePresence>
                {showHardSkills && (
                    <motion.div className="backdrop"
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.div className="skill-modal"
                            variants={modal}
                            exit="exit"
                        >
                            <div className="table-container">
                                <table className={`skill-table`}>
                                    <tbody>
                                        {hardSkills.map((skill, idx) => {
                                            const trClassName = ((1 << idx) & mask) ? 'selected' : ''
                                            return (
                                                <motion.tr
                                                    onClick={() => setMask((1 << idx) ^ mask)}
                                                    className={trClassName}
                                                    variants={tableRowVariants}
                                                    whileHover="hover"
                                                    visible="visible"
                                                >
                                                    <td className="index-col" >{skill.idx}</td>
                                                    <td>{skill.sName}</td>
                                                    <td>{skill.definition}</td>
                                                </motion.tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <p>Selected: {getHardCount(mask)}/{hardSkills.length}</p>
                                <button
                                    onClick={() => setShowHardSkills(false)}
                                >Done</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
                {showSoftSkills && (
                    <motion.div className="backdrop"
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.div className="skill-modal"
                            variants={modal}
                            exit="exit"
                        >
                            <div className="table-container">
                                <table className={`skill-table`}>
                                    <tbody>
                                        {softSkills.map((skill, idx) => {
                                            const trClassName = ((1 << (idx + hardSkills.length)) & mask) ? 'selected' : ''
                                            return (
                                                <motion.tr
                                                    onClick={() => setMask((1 << (idx + hardSkills.length)) ^ mask)}
                                                    className={trClassName}
                                                    variants={tableRowVariants}
                                                    whileHover="hover"
                                                    visible="visible"
                                                >
                                                    <td className="index-col" >{skill.idx}</td>
                                                    <td>{skill.sName}</td>
                                                    <td>{skill.definition}</td>
                                                </motion.tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <p>Selected: {getSoftCount(mask)}/{softSkills.length}</p>
                                <button
                                    onClick={() => setShowSoftSkills(false)}
                                >Done</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
export default TalentChoosing;