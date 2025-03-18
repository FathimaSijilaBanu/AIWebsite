const Awards = () => {
  const awards = [
    {
      icon: "/magento.svg",
      title: "Recognized as a trusted digital transformation partner",
      year: "2020",
      bgColor: "#FF5B24",
    },
    {
      icon: "/shopify.svg",
      title: "Top E-Commerce Development Company",
      year: "2023",
      bgColor: "#7214FF",
    },
    {
      icon: "/square.svg",
      title: "Recognized as a trusted digital transformation partner",
      year: "2020",
      bgColor: "#FF1414",
    },
    {
      icon: "/shopify.svg",
      title: "Shopify Plus Partner Certification",
      year: "2024",
      bgColor: "#B8A614",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-32" style={{ minHeight: '1000px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-sm uppercase tracking-wider mb-2">AWARDS & RECOGNITIONS</h2>
          <h3 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-4">
            Step into our Hall of Fame <Image src="/trophy.svg" alt="trophy" width={40} height={40} />
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="rounded-lg p-6"
              style={{ 
                backgroundColor: award.bgColor,
                minHeight: '500px'
              }}
            >
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
              
              <span className="block mt-[81px]">
                {award.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards; 