import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import marsImage from "@/assets/images/mars.png";
import venusImage from "@/assets/images/venus.png";
import saturnImage from "@/assets/images/saturn.png";


const FloatingPlanet = ({ 
  src, 
  className = "",
  style = {} 
}: {
  src: any;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div 
    className={`absolute -z-10 ${className}`}
    style={style}
  >
    <Image 
      src={src} 
      alt="Planet" 
      className="animate-float-slow"
      width={120}
      height={120}
    />
  </div>
);


const portfolioProjects = [
  {
    company: "GlobalTrend",
    year: "2025",
    title: "Figma UI Design HomePage",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.figma.com/design/6vzlu0uki7U9ACULBZxZIe/Global-Trend?node-id=59-38&t=tNWhexCGfTXKbO1f-1",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {


  return (
    <section className="pb-16 lg:py-24 relative overflow-hidden">

      {/* Add these planets at random positions */}
      <FloatingPlanet
        src={marsImage}
        className="top-[10%] left-[5%] opacity-80"
        style={{ width: '80px', height: '80px' }}
      />
      <FloatingPlanet
        src={venusImage}
        className="top-[30%] right-[8%] opacity-70"
        style={{ width: '60px', height: '60px' }}
      />
      <FloatingPlanet
        src={saturnImage}
        className="bottom-[15%] left-[10%] opacity-90"
        style={{ width: '100px', height: '100px' }}
      />
      <FloatingPlanet
        src={marsImage}
        className="bottom-[25%] right-[5%] opacity-60"
        style={{ width: '50px', height: '50px' }}
      />
      

      <div className="container relative z-10">
        <div className="flex justify-center">
          <p
            className="uppercase font-semibold tracking-widest 
          bg-gradient-to-r from-purple-300 to-blue-400 
          text-transparent bg-clip-text text-center 
          animate-gradient-shift bg-300%">
            UX that Speaks. Designs that Work.
          </p>
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 
         bg-gradient-to-r from-white to-indigo-200
        bg-clip-text text-transparent">
          Featured Projects</h2>

        <p className="text-center md:text-lg lg:text-xl
         text-white/60 mt-4 max-w-md mx-auto">
          Real challenges, real users, real impact — here’s how I made it happen.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}

              className=
              {`galaxy-card bg-gray-900/80 rounded-3xl relative
            z-0 overflow-hidden border border-indigo-500/20 shadow-lg
            ${index % 2 === 0 ? 'shadow-purple-500/10' : 'shadow-blue-500/10'}
            hover:shadow-xl transition-all duration-500
            group hover:border-indigo-400
            after:-z-10 after:content-[''] after:absolute 
            after:inset-0 after:outline-2 after:outline after:-outline-offset-2
            after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 
            md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none`}>

              <div
                className="absolute inset-0 -z-10 opacity-30"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(10px)",
                  mixBlendMode: "overlay"
                }}>
              </div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16 px-8 
              pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300
                   to-sky-400 inline-flex gap-2 font-bold 
                  uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span> &bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5
                    md:text-4xl text-white group-hover:text-transparent 
                    group-hover:bg-clip-text
                    group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-400 
                    transition-all duration-500">
                    {project.title}
                  </h3>
                  <hr className="border-t border-white/10 mt-4 md:mt-5 group-hover:border-indigo-500/50 transition-colors duration-500" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button
                      className="bg-gradient-to-r from-purple-500 to-blue-600 text-white
                      h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center
                      gap-2 mt-8 hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-1">
                      <span>Explore Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative mt-8 lg:mt-0">
                  <Image
                    src={project.image}
                    alt={project.title}
className="rounded-xl border border-white/10 group-hover:border-indigo-500/30 transition-all duration-500 shadow-lg group-hover:shadow-indigo-500/20 w-full h-auto lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:animate-float"                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};
