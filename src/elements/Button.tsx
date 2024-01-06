"use client"
import { EvenPopup } from "@/interfaces/evenPopup"

const Button = ({handlePopUp}:EvenPopup) => {
  return (
    <button
      onClick={handlePopUp}
      className="p-3 whitespace-nowrap rounded-lg border-[#6070FF] border text-[#396DF2] font-medium hover:bg-[#6070FF] hover:text-[#FFFFFF] transition-all duration-1000 ease-out active:bg-[#2230D2] active:text-[#FFFFFF] disabled:text-[#5E6C84] disabled:border-[#C1C7D0] hover:scale-110 disabled:bg-[#ffffff]"
    >
      See project
    </button>
  )
}

export default Button