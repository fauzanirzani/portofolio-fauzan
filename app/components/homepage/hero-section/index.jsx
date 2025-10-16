"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      {/* Hero background */}
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-12">
        {/* ================= LEFT SIDE ================= */}
        <div className="order-2 lg:order-1 flex flex-col justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, I'm <br />
            <span className=" text-cyan-400">{personalData.name}</span>,<br />
            {`A `}
            <span className=" text-[#fdae44]">{personalData.designation}</span>.
          </h1>

          {/* ================= SOCIAL ICONS ================= */}
          <div className="my-12 flex items-center gap-5">
            <Link href={personalData.github} target="_blank" className="text-pink-500 hover:scale-125 transition-all duration-300">
              <BsGithub size={30} />
            </Link>
            <Link href={personalData.linkedIn} target="_blank" className="text-pink-500 hover:scale-125 transition-all duration-300">
              <BsLinkedin size={30} />
            </Link>
            <Link href={personalData.instagram} target="_blank" className="text-pink-500 hover:scale-125 transition-all duration-300">
              <FaInstagram size={30} />
            </Link>
            <Link href={personalData.youtube} target="_blank" className="text-pink-500 hover:scale-125 transition-all duration-300">
              <FaYoutube size={30} />
            </Link>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-white flex items-center gap-1 hover:gap-3 transition-all duration-200">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 rounded-full text-xs md:text-sm font-medium text-white flex items-center gap-1 hover:gap-3 transition-all duration-200"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <Image
            src="/hero.svg"
            alt="Hero Illustration"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}