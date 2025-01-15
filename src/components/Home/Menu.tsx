export default function Menu(){
    const menuItems = ["Home","Contact","About","Sign-up"];
    return (
        <div className="font-poppins">
            <div>
                <h1 className="font-inter font-bold text-[24px] tracking-[0.03em]">Exclusive</h1>
            </div>
            <div>
                <ul>
                {
                    menuItems.map((menuItem) => <li className="font-normal text-[16px]">{menuItem}</li>)
                }
                </ul>
            </div>
            <div>
                <div className="w-[243px] h-[38px] bg-[#F5F5F5] flex justify-between items-center px-[4px]">
                    <p className="text-[12px] text-[#000000]">What are you looking for?</p>
                    <img src="src/assets/Vector (1).svg" className="w-[16px] h-[16px]"></img>
                </div>
            </div>
        </div>
    )
}