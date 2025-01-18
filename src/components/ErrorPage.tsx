import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <>
      <div className="flex font-poppins p-[50px] gap-[20px]">
        <Link to={'/'}><p className="text-[#D3D3D3]">Home</p></Link>
        <div>/</div>
        <p>404 Error</p>
      </div>
      <div className="w-[100%] h-[70vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-[50px]">
        <h1 className="font-inter text-[#000000] text-[115px] tracking-[0.03em]">
          404 Not Found
        </h1>
        <p>Your visited page not found. You may go home page.</p>
        <button className="bg-[#DB4444] w-[254px] h-[56px] text-[#fff]">
          Back to home page
        </button>
      </div>
    </div>
    </>
  );
}
