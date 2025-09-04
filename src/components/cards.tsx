"use client"
import React from 'react'
import { motion } from "motion/react"

export const Cards = () => {
    return (
        <div className='max-w-sm mx-auto w-full py-10 relative mt-28 mb-10'>
            <motion.div
                initial={{ top: '54px', opacity: 0, rotate: '-10deg' }}

                animate={{ top: '54px', opacity: 1, rotate: [18, 24, 18] }}
                style={{ transformOrigin: "right center" }}
                transition={{ duration: 1, delay: 1.2, ease: "linear", }}
                className=' absolute p-1 top-6 left-19 bg-white shadow-2xl z-20 rounded-lg flex gap-2 max-w-[280px] w-full'>
                <img src={"/avtar.png"} alt='avtar' width={40} height={30} className='rotate-[4deg] object-fill size-11 ' />
                <div className='w-full pr-1'>
                    <div className='flex justify-between'>
                        <h2 className='text-md tracking-tighter font-[400]'> Jony Frances</h2>
                        <span className='text-xs text-neutral-400 font-[400]'>Now</span>
                    </div>
                    <p className='text-xs text-neutral-500 font-light tracking-tight pb-1'>Lorem ipson lorem ipson lorem  ipson...</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ top: "52px", opacity: 0, rotate: '0deg' }}
                animate={{ top: ['60px',], opacity: 1, rotate: [9, 12, 9, 7] }}
                style={{ transformOrigin: "right center" }}
                transition={{ duration: 1, delay: 1.1, ease: "linear", }}
                className='absolute p-1 top-13 left-14 bg-white shadow-2xl z-20 rounded-lg  flex gap-2 max-w-[290px] w-full'>
                <img src={"/avtar.png"} alt='avtar' width={40} height={30} className='rotate-[4deg] object-fill size-11 ' />
                <div className='w-full pr-1'>
                    <div className='flex justify-between'>
                        <h2 className='text-md tracking-tighter font-[400]'> Jony Frances</h2>
                        <span className='text-xs text-neutral-400 font-[400]'>Now</span>
                    </div>
                    <p className='text-xs text-neutral-500 font-light tracking-tight pb-1'>Lorem ipson lorem ipson lorem  ipson...</p>
                </div>
            </motion.div>
            <div className='absolute size-48 bg-white z-20 rounded-full right-0 -top-8 blur-lg'>
            </div>
            <motion.div
                initial={{ opacity: 0, rotate: -4 }}
                animate={{ opacity: 1, rotate: [-4, 4, 2, 0] }}
                transition={{ duration: 1, ease: "linear", delay: 1 }}
                style={{ transformOrigin: "right center" }}
                className="absolute p-1 top-20 left-10 bg-white shadow-2xl z-20 rounded-lg flex gap-1 max-w-[300px] w-full"
            >
                <img
                    src="/avtar.png"
                    alt="avtar"
                    width={40}
                    height={30}
                    className="object-fill size-11"
                />
                <div className="w-full pr-1">
                    <div className="flex justify-between">
                        <h2 className="text-md tracking-tighter font-[400]">Jony Frances</h2>
                        <span className="text-xs text-neutral-400 font-[400]">Now</span>
                    </div>
                    <p className="text-xs text-neutral-500 font-light tracking-tight pb-1">
                        Lorem ipson lorem ipson lorem ipson...
                    </p>
                </div>
            </motion.div>

        </div>
    )
}
