import { Link } from "react-router"
export default function GoBack({componentName}:{componentName:string}){
    return (
        <div className="flex font-poppins p-[50px] gap-[20px]">
        <Link to={'/'}><p className="text-[#D3D3D3]">Home</p></Link>
        <div>/</div>
        <p>{componentName}</p>
      </div>
    )
}