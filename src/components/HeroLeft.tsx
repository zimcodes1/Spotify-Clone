import { useState } from "react"


function HeroLeft() {

    const [isActive, setIsActive] = useState(['hidden', 'bx-menu']);

    return (
        <div className="flex flex-col justify-between items-start h-full max-sm:h-fit px-15 max-[900px]:px-5 max-sm:px-5 gap-4 w-[49%] max-sm:w-full pb-[15%] pt-7 bg-[#16161691] rounded-4xl">
            <div className="w-full flex justify-between items-center">
                <span className="flex justify-between items-center">
                    <img src="/images/logo.png" alt="Spotify Logo" />
                    <p className="ml-2 text-xl font-bold text-gray-50">Spotify</p>
                </span>

                {/* Menu Drop */}
                <div className="relative lg:hidden">
                    <i onClick={()=>{
                        if (isActive[0] === 'hidden'){
                            setIsActive(['flex', 'bx-x'])
                        }
                        else setIsActive(['hidden', 'bx-menu'])
                    }} className={`bx ${isActive[1]} text-gray-200 text-4xl cursor-pointer`}></i>
                    <div className={`${isActive[0]} absolute right-0 -bottom-35 w-40 h-fit rounded-xl flex-col bg-[#424242b6] backdrop-blur-2xl border border-[#424242] overflow-hidden`}>
                        <span className="w-full py-2 hover:bg-[#2b2b2bb6] text-gray-50 text-sm px-3 cursor-pointer">Download <i className="bx bx-down-arrow-alt"></i></span>
                        <span className="w-full py-2 hover:bg-[#424242b6] text-gray-50 text-sm px-3 cursor-pointer">Support <i className="bx bx-phone"></i></span>
                        <span className="w-full py-2 hover:bg-[#424242b6] text-gray-50 text-sm px-3 cursor-pointer">Premium <i className="bx bx-dollar"></i></span>
                        <span className="w-full py-2 hover:bg-[#424242b6] text-gray-50 text-sm px-3 cursor-pointer">Profile <i className="bx bx-user"></i></span>
                    </div>
                </div>

            </div>
            <span className="flex flex-col">
                <h1 className="text-4xl font-bold text-gray-50 max-sm:mt-5 max-[900px]:text-3xl">Discover a world of music and podcasts with Spotify</h1>
                <p className="text-gray-400 mt-3 text-sm">Step into a limitless world of audio. With Spotify, you can stream millions of songs, discover trending podcasts, and create the perfect soundtrack for every moment of your day. Discover new artists, explore diverse genres, all at your fingertips.</p>
                <button className="bg-none hover:bg-green-500 hover:border-green-500 transition duration-300 hover:text-gray-950 cursor-pointer rounded-3xl py-2 px-3 mt-4 border-2 border-gray-50 w-fit text-gray-50">Download The App <i className="bx bx-right-arrow p-2 rounded-full bg-gray-50 text-gray-950"></i></button>
                <span className="flex justify-start items-center mt-3">
                    <img src="/images/users.png" alt="Users" />
                    <p className="text-gray-400 text-sm ml">Join over 500 million Sportify <br className="max-[900px]:hidden" /> users worldwide</p>
                </span>
            </span>
        </div>
    )
}


export default HeroLeft