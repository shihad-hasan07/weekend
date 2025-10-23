import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <div className="container mx-auto px-10 xl:px-20 flex justify-between mt-6 items-center">

            <div>
                <img src="/logo.png" alt=""
                className="w-[90%]" />
            </div>


            <div className="flex gap-12 items-center">
                <div className="hidden lg:flex">
                    <div className="relative">
                        <input type="text" placeholder="Want to learn?"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#20B486]" />
                        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl " />
                    </div>
                </div>

                <div className="font-semibold text-lg flex gap-4 ">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About us</Link>
                    <Link href='/courses'>Courses</Link>
                    <Link href='/contact'>Contact us</Link>
                    <Link href='/faq'>FAQ's</Link>
                </div>
            </div>

            <div>
                <button className="font-semibold pr-5 text-lg">Sign in </button>
                <button className="bg-[#20B486]  px-4 border-2- py-2 rounded-lg font-semibold text-white">Create free account</button>
            </div>

        </div>
    );
};

export default Navbar;