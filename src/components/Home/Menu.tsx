import ListItem from "./ListItem";
const menuItems = [
  "Home",
  "Contact",
  "About",
  "Sign-up",
];
export default function Menu() {
  return (
    <div className="font-poppins flex justify-around items-center w-[100%] mt-[88px]">
      <div>
        <h1 className="font-inter font-bold text-[24px] tracking-[0.03em]">
          Exclusive
        </h1>
      </div>
      <div className="w-[50%]">
        <ul className="flex justify-around">
          {menuItems.map(
            (
              menuItem,
              index
            ) => {
              return (
                <ListItem
                  key={index}
                  itemName={
                    menuItem
                  }
                />
              );
            }
          )}
        </ul>
      </div>
      <div>
        <div className="w-[243px] h-[38px] bg-[#F5F5F5] px-[4px] flex items-center justify-evenly">
          <input
            type="search"
            placeholder="what are you looking for"
            className="w-[80%] text-[12px] text-[#000000] bg-[#F5F5F5] "
          ></input>
           <img
            src="src/assets/Vector (1).svg"
            className="w-[16px] h-[16px]"
          ></img>
        </div>
      </div>
    </div>
  );
}
