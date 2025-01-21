interface  ServiceCardProps{
    imagePath:string,
    title:string,
    text:string
}
export default function ServiceCard({imagePath,title,text}:ServiceCardProps){
    return (
        <div className="flex flex-col items-center text-center gap-[10px]">
            <img src={imagePath} alt="icon" className="w-[80px] h-[80px]" />
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}