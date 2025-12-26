import HeroLeft from "./components/HeroLeft"
import HeroRight from "./components/HeroRight"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="bg-black h-fit w-full flex flex-wrap">
      {/*Hero Section*/}
      <div className="flex justify-evenly p-2 w-full h-160 max-[900px]:h-125 max-sm:h-fit max-sm:flex-col">
        <HeroLeft />
        {/*Hero Right Component will go here*/}
        <HeroRight />
      </div>

      {/* Scan to Download */}
      <div className="h-125 w-[98%] mx-auto rounded-4xl mt-1 flex flex-col justify-between items-center bg-[#16161691] overflow-hidden">
        <h1 className="text-gray-50 text-center text-5xl max-[900px]:text-3xl font-bold mt-15">Scan To Download The App</h1>
        <img src="/images/scan.png" alt="Scan QR Code" className="h-[70%]" />
      </div>
      {/* Premium Plans Section */}
      <div className="h-fit w-[98%] mx-auto">
        <h1 className="text-gray-50 text-center text-5xl max-[900px]:text-3xl font-bold mt-15 max-sm:mt-5">Enhance Your Music Experience With <br /> Premium</h1>
        <p className="text-center text-sm text-gray-400 mt-2">Upgrade to Spotify Premium for an enhanced music experience with ad-free listening, offline playback, and more. <br /> Say goodbye to ads and enjoy uninterrupted music anytime, anywhere.</p>

        <div className="mt-5 w-[80%] max-[900px]:w-[98%] mx-auto h-50 max-sm:h-fit flex max-sm:flex-col justify-between items-center">
          {/* Ad-free */}
          <div className="w-[24%] max-sm:w-full max-sm:h-fit h-full  flex flex-col justify-center items-center">
            <img src="/images/icon2.png" className="w-25 h-auto" alt="Ad-Free Listening" />
            <h2 className="font-bold mt-2 text-gray-50">Ad-Free Listening</h2>
            <p className="text-sm text-center px-2 mt-1 text-gray-400">Enjoy uninterrupted music.</p>
          </div>
          {/* Offline Playback */}
          <div className="w-[24%] max-sm:w-full max-sm:h-fit h-full  flex flex-col justify-center items-center">
            <img src="/images/icon3.png" className="w-25 h-auto" alt="Ad-Free Listening" />
            <h2 className="font-bold mt-2 text-gray-50">Oflline Playback</h2>
            <p className="text-sm text-center px-2 mt-1 text-gray-400">Save your data by listening offline.</p>
          </div>
          {/* Play Everywhere */}
          <div className="w-[24%] max-sm:w-full max-sm:h-fit h-full  flex flex-col justify-center items-center">
            <img src="/images/icon1.png" className="w-25 h-auto" alt="Ad-Free Listening" />
            <h2 className="font-bold mt-2 text-gray-50">Play Everywhere</h2>
            <p className="text-sm text-center px-2 mt-1 text-gray-400">Listen on your speakers, TV and other favourite devices.</p>
          </div>
          {/* Pay Your Way */}
          <div className="w-[24%] max-sm:w-full max-sm:h-fit h-full  flex flex-col justify-center items-center">
            <img src="/images/icon4.png" className="w-25 h-auto" alt="Ad-Free Listening" />
            <h2 className="font-bold mt-2 text-gray-50">Pay Your Way</h2>
            <p className="text-sm text-center px-2 mt-1 text-gray-400">Pay with Paytm, UPI, Mastercard and more.</p>
          </div>
        </div>
        <h1 className="text-gray-50 text-center text-5xl max-[900px]:text-3xl font-bold mt-15 max-sm:mt-5">Pick Your Premium</h1>
        <p className="text-gray-400 text-sm text-center my-2">Upgrade to Spotify Premium and take your music experience to the next level. Enjoy uninterrupted music playback, even in offline mode.</p>
        {/* Payment Methods */}
        <img className="mx-auto my-1" src="/images/payment_methods.png" alt="Payment Methods" />

        {/* Premium Plans */}
        <div className="w-[85%] max-sm:w-[98%] h-100 max-[900px]:h-fit mx-auto flex max-sm:flex-col justify-evenly items-center mt-10 max-sm:mt-5 flex-wrap">
          {/* Mini */}
          <div className="w-[24%] max-[900px]:w-[49%] max-[900px]:mt-1 max-sm:w-full max-sm:h-fit max-sm:mt-2 h-full flex flex-col justify-between items-start  bg-[#16161691] rounded-2xl p-4 transition duration-300 hover:scale-[1.02] cursor-pointer">
            <div className="w-[65%] py-2 rounded-md border border-blue-500"> <p className="text-blue-500 text-xs text-center">One-Time Plan Availaible</p></div>
            <span>
              <h1 className="font-bold text-gray-50 mt-2">Mini</h1>
              <p className="mt-2 text-gray-200 text-sm">From ₦80/Day</p>
              <p className="mt-2 text-gray-200 text-sm">1 account on mobile only.</p>
              <hr className="text-gray-400 border w-full mt-[10%]" />
            </span>
            <span className="w-full h-[30%]">
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Ad-Free music listening</p>
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Group Session</p>
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Up to 30 Downloads on 1 phone.</p>
            </span>

            <span className="w-full">
              <button className="w-[90%] block mx-auto py-1.5 border-2 border-gray-50 text-gray-50 rounded-3xl cursor-pointer transition duration-300 hover:bg-green-500 hover:border-green-500 hover:text-gray-900">View Plan</button>
              <p className="text-center text-gray-400 text-xs underline mt-2">Terms and conditions apply.</p>
            </span>
          </div>
          {/* Individual */}
          <div className="w-[24%] max-[900px]:w-[49%] max-[900px]:mt-1 max-sm:w-full max-sm:h-fit max-sm:mt-2 h-full flex flex-col justify-between items-start  bg-[#16161691] rounded-2xl p-4 transition duration-300 hover:scale-[1.02] cursor-pointer">
            <div className="w-[65%] py-2 rounded-md border border-blue-500"> <p className="text-blue-500 text-xs text-center">One-Time Plan Availaible</p></div>
            <span>
              <h1 className="font-bold text-gray-50 mt-2">Individual</h1>
              <p className="mt-2 text-gray-200 text-sm">From ₦800/Month</p>
              <p className="mt-2 text-gray-200 text-sm">1 account.</p>
              <hr className="text-gray-400 border w-full mt-[10%]" />
            </span>
            <span className="w-full h-[30%]">
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Ad-Free music listening</p>
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Group Session</p>
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Up to 10k Downloads on 2 phones.</p>
            </span>

            <span className="w-full">
              <button className="w-[90%] block mx-auto py-1.5 border-2 border-gray-50 text-gray-50 rounded-3xl cursor-pointer transition duration-300 hover:bg-green-500 hover:border-green-500 hover:text-gray-900">View Plan</button>
              <p className="text-center text-gray-400 text-xs underline mt-2">Terms and conditions apply.</p>
            </span>
          </div>
          {/* Duo */}
          <div className="w-[24%] max-[900px]:w-[49%] max-[900px]:mt-1 max-sm:w-full max-sm:h-fit max-sm:mt-2 h-full flex flex-col justify-between items-start  bg-[#16161691] rounded-2xl p-4 transition duration-300 hover:scale-[1.02] cursor-pointer border-2 border-green-500">
            <div className="w-[65%] py-2 rounded-md border border-blue-500"> <p className="text-blue-500 text-xs text-center">One-Time Plan Availaible</p></div>
            <span>
              <h1 className="font-bold text-gray-50 mt-2">Duo</h1>
              <p className="mt-2 text-gray-200 text-sm">From ₦1600/Month</p>
              <p className="mt-2 text-gray-200 text-sm">2 accounts.</p>
              <hr className="text-gray-400 border w-full mt-[10%]" />
            </span>
            <span className="w-full h-[30%]">
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Ad-Free music listening</p>
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Group Session</p>
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Up to 10k Downloads on up to 6 phones.</p>
            </span>

            <span className="w-full">
              <button className="w-[90%] block mx-auto py-1.5 border-2 hover:border-gray-50 hover:text-gray-50 rounded-3xl cursor-pointer transition duration-300 bg-green-500 border-green-500 text-gray-900 hover:bg-transparent">View Plan</button>
              <p className="text-center text-gray-400 text-xs underline mt-2">Terms and conditions apply.</p>
            </span>
          </div>
          {/* Family */}
          <div className="w-[24%] max-[900px]:w-[49%] max-[900px]:mt-1 max-sm:w-full max-sm:h-fit max-sm:mt-2 h-full flex flex-col justify-between items-start  bg-[#16161691] rounded-2xl p-4 transition duration-300 hover:scale-[1.02] cursor-pointer">
            <div className="w-[65%] py-2 rounded-md border border-blue-500"> <p className="text-blue-500 text-xs text-center">One-Time Plan Availaible</p></div>
            <span>
              <h1 className="font-bold text-gray-50 mt-2">Family</h1>
              <p className="mt-2 text-gray-200 text-sm">From ₦2400/Day</p>
              <p className="mt-2 text-gray-200 text-sm">Up to 6 accounts.</p>
              <hr className="text-gray-400 border w-full mt-[10%]" />
            </span>
            <span className="w-full h-[30%]">
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> For family who live together</p>
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Ad-Free music listening</p>
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Group Session</p>
              <p className="mt-2 text-gray-200 text-sm"><i className="bx bx-arrow-to-right text-green-500"></i> Up to 10k Downloads on 6 devices.</p>
            </span>

            <span className="w-full">
              <button className="w-[90%] block mx-auto py-1.5 border-2 border-gray-50 text-gray-50 rounded-3xl cursor-pointer transition duration-300 hover:bg-green-500 hover:border-green-500 hover:text-gray-900">View Plan</button>
              <p className="text-center text-gray-400 text-xs underline mt-2">Terms and conditions apply.</p>
            </span>
          </div>
        </div>
        <h1 className="text-2xl text-gray-50 font-semibold text-center my-5 max-sm:mb-2">Enjoy Premuim Features With Our Students Discount</h1>
        <p className="text-sm text-gray-400 text-center"> Spotify loves students, and we've got a special treat for you! Elevate your music experience without breaking the bank. Unlock all the <br /> premium features you love at an exclusive student discount.</p>
        <span className="w-full flex justify-center">
          <button className="text-gray-50 border-x border-gray-50 rounded-3xl px-5 py-2 mt-4 transition duration-300 hover:bg-green-500 hover:text-gray-950 hover:border-none">Learn More!</button>
        </span>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}

export default App