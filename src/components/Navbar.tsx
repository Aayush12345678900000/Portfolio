function Navbar(){
    return (
        <div className="flex bg-gray-800 justify-between p-4 items-center">
            <h1 className="text-white text-xl font-medium">Aayush Portfolio</h1>
            <div className="flex text-fuchsia-400 gap-4 px-8">
                <div>Home</div>
                <div>About</div>
                <div>Projects</div>
                <div>Contact</div>
            </div>
        </div>

    )
}

export default Navbar;