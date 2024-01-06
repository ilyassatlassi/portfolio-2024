import Tonic from "../assets/snapshoot-portfolio.png";
import Image from "next/image";
import { EvenPopup } from "@/interfaces/evenPopup";
import Button from "./Button";

const ProjectCard = ({ handlePopUp }: EvenPopup) => {
  // <img className="lg:w-full lg:h-[448px]" src={Tonic} alt="Tonic" />

  return (
    <>
      <div
        className={`flex flex-col p-4 bg-[#FFFFFF] rounded-2xl gap-3 
          lg:odd:flex-row-reverse lg:flex-row`}
      >
        <div className="lg:w-1/2">
          <Image className="w-full lg:h-[448px]" src={Tonic} alt="image project" />
        </div>
        <div className="gap-3 flex flex-col lg:w-1/2 lg:p-6 lg:gap-6">
          <h3 className="font-bold lg:text-[40px]">Tonic</h3>
          <ul className="flex items-center gap-3">
            <li className="text-[#344563] font-semibold">CANOPY</li>
            <span className="rounded-full bg-[#C1C7D0] w-2 h-2"></span>
            <li className="text-[#7A869A]">Back End Dev</li>
            <span className="rounded-full bg-[#C1C7D0] w-2 h-2"></span>
            <li className="text-[#7A869A]">2023</li>
          </ul>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            facilis dolor deserunt ipsa distinctio omnis accusantium unde nulla
            quibusdam odit, velit rerum ex similique, fuga, hic aut possimus
            quod. Voluptas.
          </p>
          <ul className="flex gap-1">
            <li className="rounded-lg bg-[#EBEBFF] text-[#6070FF] items-center px-3 py-1 font-medium">
              HTML
            </li>
            <li className="rounded-lg bg-[#EBEBFF] text-[#6070FF] items-center px-3 py-1 font-medium">
              CSS
            </li>
            <li className="rounded-lg bg-[#EBEBFF] text-[#6070FF] items-center px-3 py-1 font-medium font">
              JavaScript
            </li>
          </ul>
          <div className="py-3 pr-[169px]">
            <Button handlePopUp={handlePopUp} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
