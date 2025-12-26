import { TopBar } from "./TopBar"

function HeroRight() {
  return (
    <div className="flex flex-col px-15 justify-between items-start h-full overflow-hidden gap-4 w-[49%] pb-[15%] pt-5 rounded-4xl heroImg relative">
        <TopBar />
        <img className="w-[90%] mx-auto mt-[15%]" src="/images/spotify_curves.png" alt="Spotify Curves" />
        <img src="/images/phone.png" alt="Phone" className="absolute bottom-0 right-15 h-full" />
    </div>
  )
}

export default HeroRight