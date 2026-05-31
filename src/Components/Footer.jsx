import { GraduationCap } from "@gravity-ui/icons";
import {Handset} from '@gravity-ui/icons';
import {Envelope} from '@gravity-ui/icons';
import {LocationArrow} from '@gravity-ui/icons';
import {ClockFill} from '@gravity-ui/icons';

const Footer = () => {
    return (
       <footer className="bg-[#212a38] text-white p-20">
       <div className="max-w-7xl gap-30 mx-auto flex">
         <div className="text-xl">
       <div className="flex items-center gap-2">
         <GraduationCap className="h-8 w-8"></GraduationCap>
        <p className="font-bold text-2xl text-sky-400">SkillSphere</p>
       </div>
        <p className="text-gray-300 font-semibold">Master skills that matter. <br />Learn from experts and grow your career at your own pace.</p>
        <div className="flex gap-4 items-center mt-3">
            <img src="/Frame 1171277687.png" className="border p-2 rounded-full bg-white" alt="" />
            <img src="/Frame 1171277689.png" className="border p-2 rounded-full bg-white" alt="" />
            <img src="/Frame 1171277690.png" className="border p-2 rounded-full bg-white" alt="" />
        </div>
        </div>
        <div className="space-y-2 text-xl">
        <p className="text-sky-400 font-bold text-2xl">Contact Us</p>
        <ul className="text-gray-300 font-semibold space-y-1">
            <li className="flex items-center gap-1"><Envelope className="h-5 w-5"></Envelope>Hello@skillsphare.com</li>
            <li className="flex items-center gap-1"><Handset className="h-5 w-5"></Handset>+1 8005550123</li>
            <li className="flex items-center gap-1"><LocationArrow className="h-5 w-5"></LocationArrow>123 Learning Ave</li>
            <li className="flex items-center gap-1"><ClockFill className="h-5 w-5"></ClockFill>Mon-Fri,9am-6pm EST</li>
        </ul>
        </div>
        <div className="space-y-2 text-xl">
        <p className="text-sky-400 font-bold text-2xl">EXPLORE</p>
        <ul className="text-gray-300 font-semibold space-y-1">
            <li>Browse course</li>
            <li>Certifications</li>
            <li>Mentorship</li>
            <li>For teams</li>
            <li>Pricing</li>
        </ul>
        </div>
        <div className="space-y-2 text-xl">
        <p className="text-sky-400 text-2xl font-bold">Support</p>
        <ul className="text-gray-300 font-semibold space-y-1">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Refund Policy</li>
        </ul>
        </div>
        <div className="space-y-2 text-xl">
            <p className="text-sky-400 font-bold text-2xl">Legal</p>
            <ul className="text-gray-300 font-semibold space-y-1">
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
       
       </div>
        <hr className="mt-8 text-gray-400 pb-3"/>
        <div className="mt-5">
            © 2026 SkillSphere. All rights reserved.
        </div>
       </footer>
    );
};

export default Footer;