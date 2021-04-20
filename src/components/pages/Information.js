import React from 'react'
import '../../App.css'

import InfoSection from '../InfoSection'

import { motion } from 'framer-motion';

function Information (){
    return (

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <>
        <InfoSection/>
        </> 
        </motion.div>
    )
}

export default Information
