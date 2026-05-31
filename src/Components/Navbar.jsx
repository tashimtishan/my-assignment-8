import {GraduationCap} from '@gravity-ui/icons';
import {ArrowRightToSquare} from '@gravity-ui/icons';
import {PersonPlus} from '@gravity-ui/icons';
import Link from 'next/link';
const Navbar = () => {
    return (
       <nav className='bg-linear-to-r from-blue-900 via-blue-700 to-cyan-500'>
      <div className='flex justify-between container mx-auto items-center p-5'>
          <div className='flex items-center gap-2 text-white'>
        <GraduationCap className='h-8 w-8'/>
        <p className='font-bold text-xl'>SkillSphere</p>
        </div>
        <div>
        <ul className='flex gap-5 text-white font-semibold'>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/Courses"}><li>Courses</li></Link>
            <Link href={"/MyProfile"}><li>My Profile</li></Link>
        </ul>
        </div>
        <div className='flex gap-5 items-center'>
        <button className='btn w-25 flex items-center'><ArrowRightToSquare></ArrowRightToSquare>Login</button>
        <button className='btn btn-info w-30 text-white'><PersonPlus className='h-4 w-4'></PersonPlus>Register</button>
        </div>
      </div>
       </nav>
    );
};

export default Navbar;