// const heroImage = new URL("../assets/vaibhavi_dev.png", import.meta.url).href;


export const HeroSection = () => {
  // console.log("Image path:", heroImage);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 z-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Vaibhavi
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Baware
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

{/*         {/* Right Image */}
        <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg opacity-0 animate-fade-in-delay-5 animate-float">
        <img
        src={heroImage}
        alt="Vaibhavi Baware"
        className="w-full h-full object-cover"
        />
        </div> */}

      </div>
    </section>
  );
};
