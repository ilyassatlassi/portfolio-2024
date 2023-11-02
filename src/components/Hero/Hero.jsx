"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <section id="hero" className="relative top-16 lg:bg-[#CFD8DC]">
      <div className="w-full min-h-screen lg:min-h-screen bg-white lg:rounded-bl-[124px]">
        {/* Background div for mobile screens */}
        <div className=" lg:hidden ">
          <svg
            className="absolute left-0 top-9"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
          >
            <path
              d="M-11.8095 0.641908C-13.8144 5.33769 -13.8718 10.6376 -11.969 15.3757C-10.0663 20.1137 -6.35924 23.9019 -1.66346 25.9068C3.03231 27.9117 8.3322 27.969 13.0703 26.0663C17.8084 24.1635 21.5965 20.4565 23.6014 15.7607L-11.8095 0.641908Z"
              fill="#6070FF"
            />
          </svg>
          <svg
            className="absolute top-[56px] left-[103.18px]"
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="26.4618"
              height="4.7339"
              transform="matrix(0.757375 0.65298 0.65298 -0.757375 0.18457 3.58533)"
              fill="#6070FF"
            />
          </svg>
          <svg
            className="absolute top-[63.81px] left-[101px]"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
          >
            <ellipse
              cx="5.30398"
              cy="6.21088"
              rx="5.5"
              ry="5"
              transform="rotate(52.9708 5.30398 6.21088)"
              fill="#CBCDFF"
            />
          </svg>
          <svg
            className="absolute top-[60.24px] right-0"
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="101"
            viewBox="0 0 52 101"
            fill="none"
          >
            <path
              d="M98.2411 26.9701C94.1949 19.7876 88.5141 13.659 81.6588 9.08033C74.8034 4.5017 66.9662 1.6018 58.7816 0.615434C50.5971 -0.370932 42.2953 0.583959 34.5484 3.40279C26.8016 6.22162 19.8274 10.8252 14.1906 16.8407C8.5538 22.8562 4.41283 30.1145 2.10297 38.0281C-0.206881 45.9416 -0.620695 54.2879 0.895036 62.3911C2.41077 70.4944 5.81344 78.1268 10.8275 84.6703C15.8416 91.2139 22.3262 96.4848 29.7563 100.056L39.5429 79.6952C35.31 77.6606 31.6158 74.6578 28.7592 70.9299C25.9027 67.2021 23.9642 62.8539 23.1007 58.2375C22.2372 53.6211 22.4729 48.8662 23.7889 44.3579C25.1048 39.8496 27.4639 35.7145 30.6752 32.2874C33.8864 28.8604 37.8596 26.2378 42.273 24.6319C46.6864 23.026 51.4159 22.482 56.0786 23.044C60.7414 23.6059 65.2062 25.258 69.1117 27.8664C73.0172 30.4748 76.2535 33.9663 78.5587 38.0582L98.2411 26.9701Z"
              fill="#6070FF"
            />
          </svg>
          <svg
            className="absolute top-[20px] right-[-12.79px]"
            width="81"
            height="67"
            viewBox="0 0 81 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="47.79"
              width="95.5804"
              height="22.021"
              transform="rotate(-30 0 47.79)"
              fill="#EBEBFF"
            />
          </svg>
          <svg
            className="absolute top-[223px] right-[66px]"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
          >
            <circle cx="5.5" cy="5.5" r="5" fill="white" stroke="#CBCDFF" />
          </svg>
          <svg
            className="absolute bottom-[171px] right-[32.42px]"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="13"
            viewBox="0 0 25 13"
            fill="none"
          >
            <path
              d="M0.496961 -0.000453654C0.278167 3.19352 1.33714 6.3436 3.44091 8.75679C5.54468 11.17 8.52093 12.6486 11.7149 12.8674C14.9089 13.0862 18.059 12.0272 20.4722 9.92347C22.8853 7.8197 24.364 4.84345 24.5828 1.64948L0.496961 -0.000453654Z"
              fill="#6070FF"
            />
          </svg>
          <svg
            className="absolute bottom-[138.8px] right-[32.24px]"
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="26"
            viewBox="0 0 31 26"
            fill="none"
          >
            <path
              d="M26.9067 25.4993C28.4263 23.6894 29.4982 21.5472 30.0358 19.246C30.5734 16.9448 30.5616 14.5493 30.0012 12.2535C29.4408 9.95778 28.3477 7.82624 26.8103 6.03152C25.2729 4.2368 23.3345 2.82935 21.152 1.92312C18.9695 1.01689 16.6043 0.637356 14.2478 0.815252C11.8914 0.993148 9.60991 1.72347 7.58819 2.94709C5.56648 4.17071 3.86134 5.85322 2.61082 7.85841C1.3603 9.86359 0.599568 12.1351 0.390208 14.489L6.84065 15.0627C6.95992 13.7217 7.39331 12.4276 8.10573 11.2853C8.81815 10.1429 9.78957 9.18438 10.9413 8.48729C12.0931 7.79019 13.3928 7.37413 14.7353 7.27278C16.0778 7.17144 17.4253 7.38765 18.6686 7.90393C19.912 8.42021 21.0163 9.22204 21.8922 10.2445C22.768 11.2669 23.3908 12.4813 23.71 13.7892C24.0292 15.0971 24.036 16.4618 23.7297 17.7727C23.4235 19.0837 22.8128 20.3042 21.9471 21.3353L26.9067 25.4993Z"
              fill="#EBEBFF"
            />
          </svg>
          <svg
            className="absolute bottom-[36px] left-[53px]"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <circle cx="7.5" cy="7.49988" r="7" fill="white" stroke="#CBCDFF" />
          </svg>
          <svg
            className="absolute bottom-[40.9px] right-[118px]"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <circle cx="10" cy="10.0956" r="10" fill="#6070FF" />
          </svg>
          <svg
            className="absolute bottom-[26.85px] right-[120.68px]"
            width="68"
            height="39"
            viewBox="0 0 68 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4.82422"
              y="-0.00012207"
              width="68.0631"
              height="12.1762"
              transform="rotate(23.34 4.82422 -0.00012207)"
              fill="#EBEBFF"
            />
          </svg>
        </div>
        {/* Background div for larger screens */}
        <div className="hidden lg:flex ">
          <svg
            className="absolute top-[120px] right-[8px]"
            xmlns="http://www.w3.org/2000/svg"
            width="210"
            height="213"
            viewBox="0 0 210 213"
            fill="none"
          >
            <path
              d="M209.581 57.0278C200.949 41.7052 188.83 28.6308 174.205 18.863C159.581 9.09529 142.861 2.90884 125.401 0.804592C107.94 -1.29966 90.2299 0.737445 73.7033 6.75095C57.1767 12.7645 42.2984 22.5853 30.2733 35.4184C18.2481 48.2515 9.41404 63.736 4.48635 80.6183C-0.441345 97.5005 -1.32415 115.306 1.90941 132.593C5.14297 149.88 12.402 166.162 23.0988 180.122C33.7955 194.081 47.6293 205.326 63.4801 212.945L84.3582 169.508C75.3281 165.168 67.447 158.762 61.3531 150.809C55.2591 142.856 51.1237 133.58 49.2815 123.732C47.4394 113.883 47.9423 103.74 50.7496 94.1219C53.5569 84.5041 58.5896 75.6825 65.4404 68.3716C72.2911 61.0606 80.7672 55.4656 90.1824 52.0397C99.5976 48.6138 109.687 47.4533 119.634 48.6521C129.582 49.8509 139.107 53.3753 147.438 58.94C155.77 64.5046 162.674 71.9532 167.592 80.6824L209.581 57.0278Z"
              fill="#6070FF"
            />
          </svg>
          <svg
            className="absolute top-12 right-[93px]"
            width="201"
            height="143"
            viewBox="0 0 201 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="102"
              width="204"
              height="47"
              transform="rotate(-30 0 102)"
              fill="#EBEBFF"
            />
          </svg>
          <svg
            className="absolute top-[168px] right-[692px]"
            width="57"
            height="23"
            viewBox="0 0 57 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="56.0124"
              height="10.0203"
              transform="matrix(0.977401 -0.211395 -0.211395 -0.977401 2.25342 22.5715)"
              fill="#6070FF"
            />
          </svg>
          <svg
            className="absolute top-[186px] right-[708px]"
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <circle cx="11.5" cy="11.5" r="11.5" fill="#EBEBFF" />
          </svg>
          <svg
            className="absolute top-[121px] left-[65.18px]"
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="57"
            viewBox="0 0 78 57"
            fill="none"
          >
            <path
              d="M3.98415 0.0740829C-0.206438 9.88918 -0.326362 20.967 3.65076 30.8705C7.62788 40.774 15.3763 48.692 25.1914 52.8826C35.0065 57.0732 46.0843 57.1931 55.9878 53.216C65.8913 49.2389 73.8093 41.4905 77.9999 31.6754L3.98415 0.0740829Z"
              fill="#6070FF"
            />
          </svg>
          <svg
            className="absolute top-[69px] left-[34px]"
            width="90"
            height="93"
            viewBox="0 0 90 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.601562"
              y="78.9232"
              width="108.669"
              height="19.4403"
              transform="rotate(-46.1415 0.601562 78.9232)"
              fill="#EBEBFF"
            />
          </svg>
          <svg
            className="absolute bottom-[127px] left-[253.89px]"
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="20"
            viewBox="0 0 37 20"
            fill="none"
          >
            <path
              d="M0.15526 -7.03308e-05C-0.179117 4.88119 1.43927 9.69535 4.65441 13.3834C7.86953 17.0714 12.418 19.3311 17.2993 19.6655C22.1806 19.9999 26.9947 18.3815 30.6827 15.1664C34.3707 11.9512 36.6305 7.40273 36.9649 2.52147L0.15526 -7.03308e-05Z"
              fill="#6070FF"
            />
          </svg>
          <svg
            className="bottom-[77.39px] absolute left-[233px]"
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="38"
            viewBox="0 0 47 38"
            fill="none"
          >
            <path
              d="M41.2341 37.7825C43.5564 35.0166 45.1946 31.7426 46.0163 28.2258C46.8379 24.7089 46.8197 21.048 45.9633 17.5395C45.1069 14.0309 43.4363 10.7734 41.0868 8.03054C38.7373 5.28773 35.7748 3.13676 32.4394 1.7518C29.1039 0.366836 25.4892 -0.213191 21.8879 0.0586811C18.2866 0.330553 14.7999 1.44668 11.7102 3.3167C8.6205 5.18672 6.01458 7.75806 4.10345 10.8225C2.19233 13.887 1.02972 17.3584 0.709762 20.9558L10.5678 21.8326C10.7501 19.7832 11.4124 17.8055 12.5012 16.0597C13.5899 14.3139 15.0745 12.849 16.8347 11.7836C18.5949 10.7183 20.5813 10.0824 22.6329 9.92752C24.6846 9.77264 26.7439 10.1031 28.6441 10.8921C30.5443 11.6811 32.232 12.9065 33.5705 14.4691C34.909 16.0317 35.8608 17.8875 36.3487 19.8863C36.8366 21.8851 36.8469 23.9707 36.3788 25.9743C35.9108 27.9778 34.9774 29.843 33.6545 31.4188L41.2341 37.7825Z"
              fill="#EBEBFF"
            />
          </svg>
          <svg
            className="absolute bottom-[112px] right-[554px] "
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
          >
            <circle cx="23.5" cy="23.5" r="23.5" fill="#6070FF" />
          </svg>
          <svg
            className="absolute bottom-[76.54px] right-[560.36px]"
            width="160"
            height="91"
            viewBox="0 0 160 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="11.4399"
              width="161.407"
              height="28.875"
              transform="rotate(23.34 11.4399 0)"
              fill="#EBEBFF"
            />
          </svg>
        </div>

        {/* Content of the hero section */}
        <div className="flex flex-col px-6 py-28 gap-3 lg:px-64 lg:py-48">
          <div className="flex flex-col gap-3">
            <h1 className="text-[40px] font-bold text-[#172B4D]">
              I&lsquom Ilyass <br />
              Glad to see you!
            </h1>
            <p className="text-[16px] text-[#344563] font-normal">
              I&lsquom a software developer! I can help you build a product , feature
              or website Look through some of my work and experience! If you
              like what you see and have a project you need coded, don’t
              hesitate to contact me.
            </p>
            <h3 className="text-[#7F8CFF] font-medium ">LET&lsquoS CONNECT</h3>
            <ul className="flex text-[#505F79] gap-3">
              <li>
                <a href="https://github.com/ilyassatlassi">
                  <FaGithub size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ilyassatlassi/">
                  <FaLinkedin size={32} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ilyass_atlassi">
                  <FaTwitter size={32} />
                </a>
              </li>
              <li>
                <a href="mailto:atlassiilyass@gmail.com">
                  <AiOutlineMail size={32} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
