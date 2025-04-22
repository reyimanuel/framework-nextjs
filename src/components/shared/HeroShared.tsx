type HeroSharedProps = {
    title: string
    description?: string
  }
  
  export default function HeroShared({ title, description }: HeroSharedProps) {
    return (
      <header className="relative bg-blue-800 text-white py-23">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
          {description && <p className="text-lg md:text-xl">{description}</p>}
        </div>
  
        {/* Wave shape at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path
              fill="white"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </header>
    )
  }
  