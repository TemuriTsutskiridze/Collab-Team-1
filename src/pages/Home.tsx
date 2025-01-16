import Menu from "../components/Home/Menu";
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
          {ListItems.map((ListItem,index)=>{
            return <div className="w-[217px] flex justify-between items-center">
              <li>{ListItem}</li>
              <div>
                {
                  index < 2 && <img src="src/assets/Arrow.svg"></img>
                }
              </div>
            </div>
          })}
        </ul>
        <div>
          <img src="src/assets/Frame-560.svg"></img>
        </div>
      </div>
    </>
  );
}
