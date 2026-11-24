import Link from "next/link";
import {  FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";

export default function Footer() {
    return <>
        <footer className="footer">
            <div className="footersec flex flex-center flex-col gap-2">
                <div className="logo">
                    <img src="/img/logo.png" alt="" />
                </div>
                <ul className="flex gap-2">
                    <li><Link href='/services'>Services</Link></li>
                    <li><Link href='/projects'>Works</Link></li>
                    <li><Link href='/'>Resume</Link></li>
                    <li><Link href='/services'>Skills</Link></li>
                    <li><Link href='/'>Testimonials</Link></li>
                    <li><Link href='/contacts'>Contact</Link></li>
                </ul>
                <ul className="hero_social">
                 <li><a href="https://www.instagram.com/subash.poudel58/"><FaInstagram /></a></li>
                <li><a href="/"><LiaBasketballBallSolid /></a></li>
                <li><a href="https://www.linkedin.com/in/subash-poudel-766088380/"><GrLinkedinOption /></a></li>
                <li><a href="https://github.com/subashpoudel24"><FaGithub /></a></li>
                </ul>
                <div className="copyrights">&copy; 2025 All Rights Reserved By <span><a href="https://subashpoudel.com/">subashpoudel.com</a></span></div>
            </div>
        </footer>
    </>
}