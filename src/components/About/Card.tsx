import { useState } from "react";

interface CardProps {
  iconPath: string;
  price: number;
  text: string;
}
export default function Card({ iconPath, price, text }: CardProps) {
  const [hover, SetHover] = useState(false);
  return (
    <div
      className={`w-[270px] h-[230px] border border-[#000000] flex flex-col justify-between items-center p-[25px] cursor-pointer rounded-[4px] ${
        hover && "bg-[#DB4444]"
      }`}
      onMouseEnter={()=>{
        SetHover(true)
      }}
      onMouseLeave={()=>{
        SetHover(false);
      }}
    >
      <img src={iconPath} alt="icon" className="w-[40px] h-[40px]"></img>
      <h1 className="font-inter font-bold text-[32px] ">{price} $</h1>
      <p className="font-poppins">{text}</p>
    </div>
  );
}
