'use client'
import { GraduationCap, Xmark } from '@gravity-ui/icons';
import { ArrowRightToSquare } from '@gravity-ui/icons';
import { PersonPlus } from '@gravity-ui/icons';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='bg-linear-to-r from-blue-900 via-blue-700 to-cyan-500'>
      <div className='container mx-auto px-5'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex items-center gap-2 text-white'>
            <GraduationCap className='h-8 w-8' />
            <p className='font-bold text-xl'>SkillSphere</p>
          </div>
          <ul className='hidden md:flex text-white font-semibold gap-5'>
            <Link href="/"><li className="hover:text-cyan-200 transition-colors">Home</li></Link>
            <Link href="/Courses"><li className="hover:text-cyan-200 transition-colors">Courses</li></Link>
            <Link href="/MyProfile"><li className="hover:text-cyan-200 transition-colors">My Profile</li></Link>
          </ul>
          <div className='hidden md:flex gap-3 items-center'>
            <Link href="/signin">
              <button className='btn w-25 flex items-center gap-1'>
                <ArrowRightToSquare />Login
              </button>
            </Link>
            <Link href="/signup">
              <button className='btn btn-info w-30 text-white flex items-center gap-1'>
                <PersonPlus className='h-4 w-4' />Register
              </button>
            </Link>
          </div>
          <button
            className="md:hidden text-white" onClick={()=>setMenuOpen(!menuOpen)}aria-label="Toggle menu">
            {menuOpen ? <Xmark className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2 text-white font-semibold">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <p className="py-2 border-b border-white/20 hover:text-cyan-200 transition-colors">Home</p>
            </Link>
            <Link href="/Courses" onClick={() => setMenuOpen(false)}>
              <p className="py-2 border-b border-white/20 hover:text-cyan-200 transition-colors">Courses</p>
            </Link>
            <Link href="/MyProfile" onClick={() => setMenuOpen(false)}>
              <p className="py-2 border-b border-white/20 hover:text-cyan-200 transition-colors">My Profile</p>
            </Link>
            <div className="flex gap-3 pt-2">
              <Link href="/signin" onClick={() => setMenuOpen(false)}>
                <button className='btn flex items-center gap-1'>
                  <ArrowRightToSquare className='h-4 w-4' />Login
                </button>
              </Link>
              <Link href="/signup" onClick={() => setMenuOpen(false)}>
                <button className="btn btn-info text-white flex items-center gap-1">
                  <PersonPlus className='h-4 w-4' />Register
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;