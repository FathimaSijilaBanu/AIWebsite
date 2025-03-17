const Awards = () => {
  return (
    <section className="w-full bg-black text-white py-32" style={{ minHeight: '1000px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-sm uppercase tracking-wider mb-2">AWAhhhhRDS & RECOGNITIONS</h2>
          <h3 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-4">
            Step into our Hall of Fame <Image src="/trophy.svg" alt="trophy" width={40} height={40} />
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Award cards content */}
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="rounded-lg p-6 flex flex-col"
              style={{ 
                backgroundColor: award.bgColor,
                minHeight: '500px'
              }}
            >
              <div className="flex flex-col h-full">
                <div className="bg-white rounded-lg p-4 w-fit">
                  <Image 
                    src={award.icon} 
                    alt={award.title} 
                    width={40} 
                    height={40} 
                  />
                </div>
                
                <h4 className="text-2xl font-bold mt-[81px]">
                  {award.title}
                </h4>
                
                <span className="mt-[81px]">
                  {award.year}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="border border-white/20 text-white rounded-full px-8 py-4 flex items-center gap-2 hover:bg-white/10 transition-colors">
            View All <span className="inline-block ml-1">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}; 