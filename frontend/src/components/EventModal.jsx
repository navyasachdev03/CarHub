import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCalendar, AiOutlineEnvironment, AiFillStar, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const EventModal = ({ event, closeModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imagePath = `/assets/${event.imgName}.jpeg`;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <div
      className="fixed inset-0 overflow-auto no-scrollbar bg-black bg-opacity-50 flex justify-center items-center z-10"
      onClick={closeModal}
    >
      <motion.div
        className="bg-white rounded-lg w-[80%] max-w-xl relative overflow-hidden"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        style={{
          position: 'absolute',
          top: `${window.scrollY + window.innerHeight / 2 - 200}px`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          className="absolute text-3xl font-semi-bold top-4 right-4 text-white hover:scale-[1.13]"
          onClick={closeModal}
          whileHover={{ scale: 1.2 }}
        >
          x
        </motion.button>

        <motion.img src={imagePath} alt={event.name} className="w-full h-48 object-cover shadow-sm" variants={itemVariants} />

        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h2 className="text-2xl font-bold mt-4 ml-6 mr-6" variants={itemVariants}>
            {event.name}
          </motion.h2>

          <motion.div className="flex items-center mt-2 ml-6 mr-6" variants={itemVariants}>
            <AiFillStar className="text-yellow-500 mr-2" />
            <span className="text-lg">{event.category}</span>
          </motion.div>

          <motion.div className="flex items-center mt-2 ml-6 mr-6" variants={itemVariants}>
            <AiOutlineCalendar className="text-gray-500 mr-2" />
            <span className="text-gray-600">{event.date}</span>
          </motion.div>

          <motion.div className="flex items-center mt-2 ml-6 mr-6" variants={itemVariants}>
            <AiOutlineEnvironment className="text-gray-500 mr-2" />
            <span className="text-gray-600">{event.location}</span>
          </motion.div>

          <motion.h3 className="text-xl font-semibold mt-4 ml-6 mr-6" variants={itemVariants}>About the Event</motion.h3>
          <motion.p className="mt-2 ml-6 mr-6 text-gray-700" variants={itemVariants}>{event.description}</motion.p>

          <div className="m-6">
            <motion.div
              className="flex justify-between items-center cursor-pointer hover:scale-[1.02]"
              onClick={toggleExpand}
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold">Terms and Conditions</h3>
              {isExpanded ? <AiOutlineUp /> : <AiOutlineDown />}
            </motion.div>

            {isExpanded && (
              <motion.div
                className="m-4 bg-gray-100 p-4 rounded-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="list-disc list-inside text-gray-600">
                  <li>Carry a valid ID proof along with you.</li>
                  <li>No refunds on purchased ticket are possible, even in case of any rescheduling.</li>
                  <li>No dangerous or potentially hazardous objects will be allowed in the venue and may be ejected with or without the owner from the venue.</li>
                  <li>Organizers hold the right to deny late entry to the event.</li>
                  <li>Venue rules apply.</li>
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventModal;