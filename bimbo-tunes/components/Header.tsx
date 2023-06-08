"use client"
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import {RxCaretLeft} from 'react-icons/rx';
import {RxCaretRight} from 'react-icons/rx';
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
interface HeaderProps{
    children:React.ReactNode;
    className?:string;

}

const Header:React.FC<HeaderProps>=(
  {children,className}
)=>{
    const router = useRouter();
    const handleLogout=()=>{
        //logout in the future
    }

    return(
        <div className={twMerge(`h-fit bg-gradient-to-b from-sky-700 p-6`,className)}>
            <div className="
            w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">

                <button  onClick={()=> router.back()} className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                    <RxCaretLeft className="text-white" size={30}/>
                </button>

                <button onClick={()=> router.forward()} className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                    <RxCaretRight className="text-white" size={30}/>
                </button>

                </div>

                <div className=" flex md:hidden gap-x-2 items-center">
                    <button className=" rounded-full p-2 bg-neutral-900 flex items-center justify-center hover:opacity-75 transition">
                        <HiHome className="text-white" size={20}/>
                    </button>

                    <button className=" rounded-full p-2  flex items-center justify-center hover:opacity-75 transition">
                        <BiSearch className="text-white" size={20}/>
                    </button>    



                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                    <div>
                        <Button className="bg-transparent text-neutral-300 font-medium">

                            Sign up

                        </Button>
                    </div>

                    <div>
                        <Button className="bg-white text-neutral-300 font-medium">

                            Log in

                        </Button>
                    </div>


                    </>
                </div>


            </div>

        </div>
    );
}

export default Header;