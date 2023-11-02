
import FormContact from "./FormContact";

function Contact() {
  return (
    <section id="Contact" className="relative h-[100dvh] overflow-hidden">
      <div className="w-full relative bg-[#6070FF] h-full rounded-tl-[124px]">
        {/* Background div for mobile screens */}
        <div className="relative lg:hidden">
          <svg
            className="absolute top-14 left-[153px]"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle cx="10.5" cy="10.5" r="10.5" fill="#7F8CFF" />
          </svg>
          <svg
            className="absolute top-[48.75px] right-0"
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="86"
            viewBox="0 0 47 86"
            fill="none"
          >
            <path
              d="M84.2067 23.4103C80.7385 17.3223 75.8692 12.1276 69.9932 8.24664C64.1172 4.36571 57.3996 1.9077 50.3842 1.07163C43.3689 0.235572 36.2531 1.04496 29.6129 3.43425C22.9728 5.82355 16.9949 9.72559 12.1634 14.8244C7.33183 19.9233 3.78242 26.0756 1.80255 32.7833C-0.177326 39.491 -0.532025 46.5655 0.767174 53.4339C2.06637 60.3023 4.98295 66.7717 9.28075 72.3182C13.5786 77.8646 19.1368 82.3323 25.5054 85.3594L33.8939 68.1011C30.2658 66.3766 27.0992 63.8314 24.6508 60.6716C22.2023 57.5117 20.5408 53.8261 19.8006 49.9132C19.0605 46.0003 19.2625 41.9699 20.3905 38.1486C21.5184 34.3272 23.5405 30.8222 26.293 27.9174C29.0455 25.0126 32.4511 22.7896 36.234 21.4285C40.0169 20.0673 44.0708 19.6062 48.0674 20.0825C52.064 20.5588 55.891 21.9591 59.2386 24.1701C62.5862 26.381 65.3602 29.3405 67.336 32.8088L84.2067 23.4103Z"
              fill="white"
            />
          </svg>
          <svg
            className="absolute bottom-[48.83px] right-[77.83px]"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle
              cx="16.2283"
              cy="16.2188"
              r="15.5552"
              transform="rotate(48.9435 16.2283 16.2188)"
              fill="white"
            />
          </svg>
        </div>
        <svg
          className="absolute top-[21px] right-0"
          width="65"
          height="46"
          viewBox="0 0 65 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="29.3994"
            width="74.7012"
            height="17.2106"
            transform="rotate(-23.1765 0 29.3994)"
            fill="#7F8CFF"
          />
        </svg>
        <svg
          className="absolute bottom-[58.55px] right-[47px]"
          width="70"
          height="58"
          viewBox="0 0 70 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="76.175"
            height="13.6273"
            transform="matrix(0.801365 0.598176 0.598176 -0.801365 0.804688 11.8887)"
            fill="#7F8CFF"
          />
        </svg>

        {/* Background div for larger screens */}
        {/* bg-[url('../assets/contact-form-background-shapes-2-x.png')]  */}
        <div
          className={`hidden z-0 lg:flex  bg-cover bg-no-repeat bg-[url('../assets/contact-form-background-shapes-2-x.png')] absolute inset-0`}
        ></div>
        <div className="z-[99] flex flex-col px-6 justify-center content-center h-full lg:items-center">
          <h2 className="text-white text-[40px] font-bold text-center mb-3">
            Contact me
          </h2>
          <p className="text-[#EBEBFF] lg:w-[569px] font-normal text-center mb-3  ">
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding. I’d love
            to help with it!
          </p>

          <FormContact/>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;
