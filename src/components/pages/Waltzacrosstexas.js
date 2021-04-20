import React from "react";
import { motion } from "framer-motion";

import WatGallery from "../WatGallery";

function Waltzacrosstexas() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <>
        <WatGallery />
      </>
    </motion.div>
  );
}

export default Waltzacrosstexas;
