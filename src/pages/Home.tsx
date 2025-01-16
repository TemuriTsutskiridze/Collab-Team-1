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
      <div className="flex justify-around  items-center w-[90%] h-[344px] mt-[50px]">
        <ul className="flex flex-col justify-between h-[100%]">
          {ListItems.map((ListItem)=>{
            return <div>
              <li>{ListItem}</li>
              <div></div>
            </div>
          })}
        </ul>
        <div>
          <img src="src/assets/Frame 560.svg"></img>
        </div>
      </div>
    </>
  );
}
