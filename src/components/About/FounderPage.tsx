interface Founder {
  imagePath: string;
  name: string;
  position: string;
}
export default function FounderPage({ imagePath, name, position }: Founder) {
  return (
    <>
      <div className="w-[370px] h-[564px] font-poppins">
        <img src={imagePath} alt="Founder-image" />
        <div className="mt-[30px]">
          <h1 className="font-inter tracking-[0.04em] font-medium text-[32px]">{name}</h1>
          <p>{position}</p>
        </div>
        <div className="flex  justify-between w-[40%] mt-[20px]">
          <img src="src/assets/Twitter.svg" alt="Twitter"></img>
          <img src="src/assets/Ista.svg" alt="Insta"></img>
          <img src="src/assets/Linkdin.svg" alt="Linkdin"></img>
        </div>
      </div>
    </>
  );
}
