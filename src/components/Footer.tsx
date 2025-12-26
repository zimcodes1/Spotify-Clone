

function Footer() {
    return (
        <div className="w-[98%] h-75 rounded-t-4xl bg-[#16161691] flex mx-auto mt-10 justify-between items-center max-sm:h-fit">
            <div className="w-[20%] max-sm:w-full h-full flex flex-col justify-center items-center pt-10 max-sm:py-5">
                <span className="flex items-center">
                    <img src="/images/logo.png" alt="Spotify Logo" />
                    <p className="text-lg font-bold ml-2 text-gray-50"> Spotify</p>
                </span>
            </div>
            <div className="w-[20%] h-full flex flex-col pt-20 max-sm:hidden">
                <span className="text-gray-50 flex gap-4 flex-col">
                    <a href="#">Company</a>
                    <a href="#">About</a>
                    <a href="#">Jobs</a>
                    <a href="#">Latest</a>
                </span>
            </div>
            <div className="w-[20%] h-full flex flex-col pt-20 max-sm:hidden">
                <span className="text-gray-50 flex gap-4 flex-col">
                    <a href="#">Company</a>
                    <a href="#">For Artists</a>
                    <a href="#">Albums</a>
                    <a href="#">Developers</a>
                    <a href="#">Careers</a>
                </span>
            </div>
            <div className="w-[20%] h-full flex flex-col pt-20 max-sm:hidden">
                <span className="text-gray-50 flex gap-4 flex-col">
                    <a href="#">Download</a>
                    <a href="#">Support</a>
                    <a href="#">Web Player</a>
                    <a href="#">Subscription</a>
                </span>
            </div>
            <div className="w-[20%] h-full flex flex-col pt-20 max-sm:hidden">
                <span className="text-gray-50 flex gap-4 flex-col">
                    <a href="#"> Instagram</a>
                    <a href="#"> Facebook</a>
                    <a href="#"> X</a>
                </span>
            </div>
        </div>
    )
}

export default Footer;