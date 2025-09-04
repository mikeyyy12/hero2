"use client"
import React from 'react'
import { Navbar } from "./navbar"
import { Cards } from '@/components/cards'
import { motion } from "motion/react"

export const Hero = () => {
    return (
        <div className='pt-4'>
            <img src='/grad2.png' className='h-full w-full absolute -top-40 -left-96' alt='background' />
            <Navbar />
            <Cards />
            <HeroContent />
        </div>
    )
}


function HeroContent() {
    const title = "Get your emails into the inbox"
    const subtext = "Protect your email reputation with an automated warm-up system and real-time domain reputation monitoring."
    return (
        <div className='pt-10 max-w-xl mx-auto relative w-full h-full'>
            <motion.h2

                className=' text-[#303030] text-7xl tracking-tighter leading-16 text-center font-medium'>
                {title.split(" ").map((word, idx) => (
                    <motion.span
                        initial={{ opacity: 0, filter: "blur(10px)", }}
                        animate={{ opacity: 1, filter: "blur(0px)", }}
                        transition={{ duration: 0.8, delay: idx * 0.05 }}
                        key={idx} className='inline-block'>{word}&nbsp;</motion.span>
                ))}
            </motion.h2>

            <div className='relative'>
                <motion.span
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: [1.2, 1.4, 1], opacity: 1, }}
                    transition={{ duration: 0.4, delay: 1.2, ease: 'linear' }}
                    className=' inline-block absolute right-48 -bottom-10 -rotate-[6deg] shadow-sm bg-primary text-white font-semibold text-shadow-sm px-4 py-2 rounded-lg text-3xl text-center '>
                    Not Spam
                </motion.span>
            </div>
            <p className='text-neutral-500 text-md leading-5 tracking-tight pt-16 mx-28 text-center px-6'>
                {subtext.split(" ").map((word, idx) => (
                    <motion.span
                        initial={{ opacity: 0, filter: "blur(10px)", }}
                        animate={{ opacity: 1, filter: "blur(0px)", }}
                        transition={{ duration: 0.8, delay: 0.8 + idx * 0.05 }}
                        key={idx} className='inline-block'>{word}&nbsp;</motion.span>
                ))}
            </p>

        </div >
    )
}