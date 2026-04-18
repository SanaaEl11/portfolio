// import React from 'react'
// import { useState } from 'react'
// import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'

// export default function Navbar() {
//     const[nav,setNav]=useState(false)
//     function handleNav(){
//         setNav(!nav)
//     }
//   return (
//         <div className='bg-black  text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center '>
            
//             <h1 className='text-3xl font-bold primary-color ml-4'>SANAA.ELHAFER</h1>
//                <ul className='hidden md:flex'>
//                  <li className='p-5'><a href='#education'>Education</a></li>
//                  <li className='p-5'><a href='#certification'>Certification</a></li>
//                 <li className='p-5'><a href='#about'>About</a></li>
//                 <li className='p-5'><a href='#work'>work</a></li>
                
//                 <li className='p-5'><a href='#contact'>Contact</a></li>
//                </ul>

//             <div onClick={handleNav} className='block md:hidden mr-6'>
//                 {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
//             </div>

//             <div className={nav ?'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500':
//                 'fixed left-[-100%]'}>
//             <h1 className='text-3xl font-bold primary-color m-4'>SANAA.ELHAFER</h1>
//                <ul className='p-8 text-2xl'>
//              <li className='p-2'><a href='#education'>Education</a></li>
//                 <li className='p-2'><a href='#certification'>Certification</a></li>
//                 <li className='p-2'><a href='#about'>About</a></li>
//                 <li className='p-2'><a href='#work'>work</a></li>
//                 <li className='p-2'><a href='#skills'>Skills</a></li>
//                 <li className='p-2'><a href='#contact'>Contact</a></li>
//                </ul> 
//             </div>
     
//      </div>
//   )
// }

import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
    const [nav, setNav] = useState(false)

    function handleNav() {
        setNav(!nav)
    }

    // New function to close menu when clicking a link
    const closeNav = () => {
        setNav(false)
    }

    return (
        <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            
            <h1 className='text-3xl font-bold primary-color ml-4'>SANAA.ELHAFER</h1>
            
            {/* Desktop Menu */}
            <ul className='hidden md:flex'>
                <li className='p-5'><a href='#education'>Education</a></li>
                <li className='p-5'><a href='#certification'>Certification</a></li>
                <li className='p-5'><a href='#about'>About</a></li>
                <li className='p-5'><a href='#work'>work</a></li>
                <li className='p-5'><a href='#skills'>Skills</a></li>
                <li className='p-5'><a href='#contact'>Contact</a></li>
            </ul>

            {/* Mobile Hamburger Button */}
            <div onClick={handleNav} className='block md:hidden mr-6 cursor-pointer'>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>

            {/* Mobile Sidebar Menu - Fixed */}
            <div className={`fixed h-full left-0 top-0 w-[75%] bg-[#202121] z-50 ease-in-out duration-500 
                ${nav ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className="flex justify-between items-center p-6 border-b border-zinc-700">
                    <h1 className='text-3xl font-bold primary-color'>SANAA.ELHAFER</h1>
                    <div onClick={handleNav} className='cursor-pointer'>
                        <AiOutlineClose size={25} />
                    </div>
                </div>

                <ul className='p-8 text-2xl'>
                    <li className='p-4 hover:bg-zinc-800 rounded-lg transition-colors'>
                        <a href='#education' onClick={closeNav}>Education</a>
                    </li>
                    <li className='p-4 hover:bg-zinc-800 rounded-lg transition-colors'>
                        <a href='#certification' onClick={closeNav}>Certification</a>
                    </li>
                    <li className='p-4 hover:bg-zinc-800 rounded-lg transition-colors'>
                        <a href='#about' onClick={closeNav}>About</a>
                    </li>
                    <li className='p-4 hover:bg-zinc-800 rounded-lg transition-colors'>
                        <a href='#work' onClick={closeNav}>Work</a>
                    </li>
                    <li className='p-4 hover:bg-zinc-800 rounded-lg transition-colors'>
                        <a href='#skills' onClick={closeNav}>Skills</a>
                    </li>
                    <li className='p-4 hover:bg-zinc-800 rounded-lg transition-colors'>
                        <a href='#contact' onClick={closeNav}>Contact</a>
                    </li>
                </ul>
            </div>

            {/* Overlay (click outside to close) */}
            {nav && (
                <div 
                    className="fixed inset-0 bg-black/70 z-40 md:hidden"
                    onClick={closeNav}
                />
            )}
        </div>
    )
}
