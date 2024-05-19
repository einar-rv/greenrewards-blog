import Image from "next/image"
import logo from "../../public/logo.png"
export function Header(){
    return(
        <div className="flex justify-around bg-emerald-500 p-3 shadow fixed top-0 w-full">
            <header className="flex items-center gap-2">
                <Image
                    src={logo}
                    alt="GreenRewards logo"
                    className=" h-8 w-5"
                />
                
            
                <a href="/"><h1 className="text-2xl font-bold p-1">GreenRewards</h1></a>
            </header>
            <nav className="flex gap-14 items-center">
                <a href="/nosotros" className="font-bold">Nosotros</a>
                <a href="/blog" className="font-bold">Blog</a>
                <a href="/contacto" className="font-bold">Contacto</a>
                <div className=" bg-emerald-200 p-2 rounded hover:bg-emerald-300">
                    <a href="" className="font-bold">Descarga</a>
                </div>
            </nav>
        </div>
    )
}