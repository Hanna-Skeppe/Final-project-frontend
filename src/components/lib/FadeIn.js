import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeIn;
