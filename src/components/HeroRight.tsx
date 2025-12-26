import { TopBar } from "./TopBar"

function HeroRight() {
  return (
    <div className="flex flex-col px-15 max-sm:px-5 justify-between items-start h-full max-sm:h-fit max-sm:mt-3 overflow-hidden gap-4 w-[49%] max-sm:w-full pb-[15%] pt-5 rounded-4xl heroImg relative">
        <TopBar />
        <img className="w-full mx-auto mt-[15%]" src="/images/spotify_curves.png" alt="Spotify Curves" />
        <img src="/images/phone.png" alt="Phone" className="absolute bottom-0 right-0 h-full" />
    </div>
  )
}

export default HeroRight