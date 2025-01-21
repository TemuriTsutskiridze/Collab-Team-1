import { useState } from "react";
export default function ListItem({itemName}:{itemName:string}){
    const [
        underLine,
        setUnderLine,
      ] = useState<boolean>(false)
    return  (
        <div>
        <li className="font-normal text-[16px] cursor-pointer" onMouseEnter={()=>{
            setUnderLine(true);
        }} onMouseLeave={()=>{
            setUnderLine(false);
        }}>
          {itemName}
        </li>
        <div
          className={`w-full bg-[#000000] h-[1px] mt-[2px] ${
            underLine
              ? "block"
              : "hidden"
          }`}
        ></div>
      </div>
    )
}