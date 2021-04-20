import React from "react";
import { motion } from "framer-motion";

import NwGallery from "../NwGallery";

function Nightwheelin() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <>
        <NwGallery />
      </>
    </motion.div>
  );
}

export default Nightwheelin;
