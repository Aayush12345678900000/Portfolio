function Navbar(){
    return (
        <nav className="flex bg-gray-800 justify-between p-4 items-center sticky top-0 z-50 shadow-md">
            <a href="#home" className="text-white text-xl font-medium cursor-pointer">Aayush Portfolio</a>
            <div className="flex text-fuchsia-400 gap-4 px-8">
                <a href="#home" className="hover:text-fuchsia-300 transition-colors cursor-pointer">Home</a>
                <a href="#about" className="hover:text-fuchsia-300 transition-colors cursor-pointer">About</a>
                <a href="#skills" className="hover:text-fuchsia-300 transition-colors cursor-pointer">Skills</a>
                <a href="#projects" className="hover:text-fuchsia-300 transition-colors cursor-pointer">Projects</a>
                <a href="#contact" className="hover:text-fuchsia-300 transition-colors cursor-pointer">Contact</a>
            </div>
        </nav>

    )
}

export default Navbar;