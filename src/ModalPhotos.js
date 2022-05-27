import React from 'react'
import {motion} from "framer-motion"


function ModalPhotos({selectedImg, setSelectedImg}) {

  const handleclick = (e) => {
    setSelectedImg(null)
  }

  return (
    <motion.div className="backdrop-photos" 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    onClick={handleclick}
    >
        <motion.img src={selectedImg} alt="enlarged pic"
        initial={{ y: "-100vh"}}
        animate={{ y: 0}}
        transition={{ type: "spring", stiffness: 50, damping: 10}}
        />
    </motion.div>
  )
}

export default ModalPhotos