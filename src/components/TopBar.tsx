

export function TopBar() {
    return (
        <div className="max-sm:hidden w-full flex z-50 justify-between items-center absolute top-0 right-0 px-15 pt-7 bg-none text-gray-50 max-[900px]:px-5">
            <a href="#">Premium</a>
            <a href="#">Support</a>
            <a href="#">Download</a>
            <span className="flex justify-between items-center"> <span className="flex w-10 h-10 rounded-full overflow-hidden"><img className="w-full h-auto" src="/images/user.jpg" alt="User" /></span> <p className="pl-2">Profile <i className="bx bx-down-arrow-alt"></i></p></span>
        </div>
    )
}