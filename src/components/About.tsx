import Card from "./About/Card";
import { cardData } from "./About/CardData";
import GoBack from "./GoBack";
import { foundersData } from "./About/FoundersData";
import FounderPage from "./About/FounderPage";
import Button from "./About/Button";
import ButtonsData from "./About/ButtonsData";
import { useState } from "react";
export default function About() {
  const [ButtonsObjects,SetButtonsObject] = useState([...ButtonsData]);
  console.log(ButtonsObjects)
  return (
    <>
      <GoBack componentName={"AboutPage"} />
      <div className="flex flex-col md:flex-row  justify-between items-center w-[90%] px-[30px] font-poppins">
        <div className="flex flex-col w-[70%] w-[525px]">
          <h1 className="font-inter text-[54px] font-bold tracking-[0.06em]">
            Our Story
          </h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace
            with an active presense in Bangladesh. Supported by wide range of tailored
            marketing, data and service solutions, Exclusive has 10,500 sallers and 300
            brands and serves 3 millioons customers across the region. Exclusive has more
            than 1 Million products to offer, growing at a very fast. Exclusive offers a
            diverse assotment in categories ranging from consumer.
          </p>
        </div>
        <img
          src={
            "src/assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
          }
          className="w-[50%] h-[]"
          alt="pic"
        />
      </div>
      <div className="w-[90%] mt-[40px] flex justify-around gap-[10px]">
        {cardData.map((cardObject, index) => {
          return (
            <Card
              key={index}
              iconPath={cardObject.iconPath}
              price={cardObject.price}
              text={cardObject.text}
            />
          );
        })}
      </div>
      <div className="w-[90%] mt-[40px] flex flex-col md:flex-row justify-around">
        {foundersData.map((dataObject, index) => {
          return (
            <FounderPage
              key={index}
              imagePath={dataObject.iconPath}
              name={dataObject.name}
              position={dataObject.position}
            />
          );
        })}
      </div>
      <div className="w-[100%] mt-[40px] flex justify-center">
        <div className="w-[10%] flex justify-between">
          {ButtonsObjects.map((ButtonsObj)=>{
            return <Button key={ButtonsObj.id} id = {ButtonsObj.id} isClicked = {ButtonsObj.isClicked} setButtonsObject = {SetButtonsObject} ></Button>
          })}
        </div>
      </div>
    </>
  );
}
