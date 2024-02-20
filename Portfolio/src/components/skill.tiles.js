import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const SkillTiles = ({ name, width, height, index}) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.2
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{delay: index * animationDelay}}
        >
            <div className="bg-[#223145] p-2 border-2 border-white rounded-md m-1 md:m-3 lg:m-5">
                <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`}
                    width={width}
                    height={height}
                    alt='skill image'
                />
            </div>
        </motion.div>
    )
}

export const SkillList = ({list}) => {
    return (
        <div className="flex flex-row flex-wrap justify-center">
            {list.map((e, index) => (
                <SkillTiles width={40} height={40} index={index} name={e}/>
            ))}
        </div>
    )
}
