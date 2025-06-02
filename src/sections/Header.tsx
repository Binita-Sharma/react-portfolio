export const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-center items-center h-20 px-4">
        {/* Cosmic Nav Container */}
        <nav className="relative flex gap-1 p-1 rounded-full bg-gradient-to-br from-purple-900/80 to-blue-900/50 border border-indigo-500/30 shadow-lg shadow-indigo-500/10 backdrop-blur-lg">
          
          {/* Nav items */}
          <a 
            href="#home" 
            className="relative px-5 py-2.5 text-sm font-medium rounded-full 
                      text-white hover:bg-white/10 transition-all duration-300
                      hover:text-purple-200 group"
          >
            Home
            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full 
                            opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></span>
          </a>
          
          <a 
            href="#projects" 
            className="relative px-5 py-2.5 text-sm font-medium rounded-full 
                      text-white hover:bg-white/10 transition-all duration-300
                      hover:text-blue-200 group"
          >
            Projects
            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full 
                            opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></span>
          </a>
          
          <a 
            href="#about" 
            className="relative px-5 py-2.5 text-sm font-medium rounded-full 
                      text-white hover:bg-white/10 transition-all duration-300
                      hover:text-indigo-200 group"
          >
            About
            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full 
                            opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></span>
          </a>
          
          <a 
            href="#contact" 
            className="relative px-5 py-2.5 text-sm font-medium rounded-full 
                      bg-gradient-to-r from-purple-500 to-blue-600 text-white 
                      hover:from-purple-400 hover:to-blue-500 transition-all duration-300
                      shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};