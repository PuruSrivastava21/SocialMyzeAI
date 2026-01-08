import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
    const navigate = useNavigate()
    const {user} = useUser()
    const {openSignIn} = useClerk()

  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex 
    justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
        <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-blue-500" />
              <span className="text-xl sm:text-2xl font-bold text-blue">
                SocialMyze AI
              </span>
            </Link>
          </div>
        
        {
          user ? <UserButton/> : (<button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get Started <ArrowRight className='w-4 h-4' /></button>)
        }

        </div>
  )
}

export default Navbar
