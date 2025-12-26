

function HeroLeft() {
    return(
        <div className="flex flex-col justify-between items-start h-full max-sm:h-fit px-15 max-[900px]:px-5 max-sm:px-5 gap-4 w-[49%] max-sm:w-full pb-[15%] pt-7 bg-[#16161691] rounded-4xl">
            <div className="w-full flex justify-start items-center">
                <img src="/images/logo.png" alt="Spotify Logo" />
                <p className="ml-2 text-xl font-bold text-gray-50">Spotify</p>
            </div>
            <span className="flex flex-col">
                <h1 className="text-4xl font-bold text-gray-50 max-[900px]:text-3xl">Discover a world of music and podcasts with Spotify</h1>
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