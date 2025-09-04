"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"

export const Navbar = () => {
    const navItems = ["Home", "About us", "Features", "Pricing", "Blog"]
    return (
        <motion.nav
            initial={{
                y: -80
            }}
            animate={{
                y: 0
            }}
            transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeInOut"
            }}
            className='relative z-20  bg-white max-w-2xl mx-auto shadow-nav border border-neutral-200 flex rounded-full py-2 pl-4 items-center justify-between px-2 font-inter mb-10'>
            <div className='flex gap-1'>
                <img src="/logo13.svg" alt='logo' width={26} height={26} />
                <h1 className='text-xl text-neutral-800 font-medium'>InboxWarden</h1>
            </div>
            <div className='flex gap-3 '>
                {navItems.map((item, idx) =>
                    <Link
                        key={idx}
                        className='text-sm text-neutral-500 hover:text-black cursor-pointer tracking-tight'
                        href={"/"}>
                        {item}
                    </Link>)}
            </div>
            <button className=' bg-primary py-[10px] px-4 rounded-full text-md  font-medium text-white flex gap-1 items-center' >

                <span className='size-2 bg-white rounded-full ml-1'></span>
                Get Started

            </button>
        </motion.nav>
    )
}
