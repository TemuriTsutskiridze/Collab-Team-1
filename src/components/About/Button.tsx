import { useState } from "react";
import ButtonsData from "./ButtonsData";
export default function Button({
  isClicked,
  id,
  setButtonsObject,
}: {
  isClicked: boolean;
  id:number,
  setButtonsObject: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        isClicked: boolean;
      }[]
    >
  >;
}) {
  return (
    <div className="w-[10%] flex justify-between">
      <div
        className={`w-[10px] h-[10px] border border-[#D3D3D3]  rounded-[50%] cursor-pointer ${
          isClicked ? "bg-[#DB4444]" : "bg-[#D3D3D3]"
        }`}
        onClick={()=>{
          const updatedData = ButtonsData.map((dataObj)=>{
            if(id === dataObj.id){
              dataObj.isClicked = true;
            }else{
              dataObj.isClicked = false;
            }
            return dataObj;
          })
          setButtonsObject([...updatedData])
        }}
      ></div>
    </div>
  );
}
