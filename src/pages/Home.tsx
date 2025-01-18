import Menu from "../components/Home/Menu";
import Timer from "../components/Home/Timer";
import ArrowButton from "../components/Home/ArrowButtons";
export default function Home() {
  const ListItems = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  return (
    <>
      <Menu />
      <div className="flex justify-center flex-col items-center md:flex-row w-[90%] md:justify-around  h-[344px] mt-[50px]">
        <ul className="flex flex-col justify-between h-[100%]">
          {ListItems.map((ListItem, index) => {
            return (
              <div className="w-[217px] flex justify-between items-center">
                <li>{ListItem}</li>
                <div>{index < 2 && <img src="src/assets/Arrow.svg"></img>}</div>
              </div>
            );
          })}
        </ul>
        <div className="w-[0.5px] h-[442px] bg-[#000000] hidden md:block"></div>
        <div>
          <img src="src/assets/Frame-560.svg"></img>
        </div>
      </div>
      <div className="w-[90%] flex justify-between items-center mt-[100px] px-[100px]">
        <div className="flex justify-between items-center w-[50%] h-[100px] gap-[10px]">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-[20px] h-[40px] gap-[10px] bg-[#DB4444]"></div>
              <h2 className="text-[#DB4444]">Todays</h2>
            </div>
            <h1 className="font-bold font-inter text-[36px]">Flash Sales</h1>
          </div>
          <Timer />
        </div>
        <div className="flex cursor-pointer">
          <ArrowButton Arrow={"src/assets/arrow-left.svg"} />
          <ArrowButton Arrow={"src/assets/arrow-right.svg"} />
        </div>
      </div>
    </>
  );
}
