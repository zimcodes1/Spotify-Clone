

function QuickMusic() {
    return (
        <div className="flex flex-row justify-between items-center h-15 w-100 bg-[#252525] rounded-md border border-[#16161691] border-b-2 border-b-[#4b4b4bb4] absolute bottom-30 right-[25%] max-[900px]:right-5 max-[900px]:top-[37%] z-50 px-2 max-sm:hidden">
            <span className="flex">
                <span className="flex w-10 h-10 rounded-md overflow-hidden">
                    <img className="w-full h-full" src="/images/user.jpg" alt="Artist Picture" />
                </span>
                <span className="flex flex-col justify-between pl-2">
                    <h1 className="text-gray-50 font-semibold text-sm">Bad Blood</h1>
                    <p className="text-gray-300 text-xs font-medium">Taylor Swift</p>
                </span>
            </span>
            <span className="flex justify-between items-center">
                <i className="bx bx-speaker text-gray-200 text-3xl cursor-pointer"></i>
                <i className="bx bx-heart text-gray-200 text-3xl cursor-pointer mx-2"></i>
                <i className="bx bx-play text-gray-50 text-3xl cursor-pointer"></i>
            </span>
        </div>
    )
}
export default QuickMusic