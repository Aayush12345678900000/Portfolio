type HeroProps = {
    name : string
    tagline : string
    description : string
}
function Hero({ name, tagline, description }: HeroProps) {
  return(
    <div className="flex flex-col items-center justify-center text-center bg-black min-h-screen">
        <h1 className="font-extrabold text-white text-4xl" >{name}</h1>
        <h2 className="text-blue-500 text-xl mt-2 font-semibold">{tagline}</h2>
        <p className="font-bold text-gray-300 text-lg mt-2 p-2 max-w-3xl">{description}</p>
        <div className="flex gap-4 mt-6">
            <button className="bg-blue-400 text-yellow-200 rounded-lg p-2">Explore My Work</button>
            <button className="bg-blue-400 text-yellow-200 rounded-lg p-2">Download Resume</button>
        </div>
    </div>
  )
}

export default Hero