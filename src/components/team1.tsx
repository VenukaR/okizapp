import React, { useRef } from 'react';
 

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface Team1Props {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

const Team1 = ({
  heading = "Meet Our Team",
  description = "Our diverse team of experts brings together decades of experience in design, engineering, and product development.",
  members = [
    // {
    //   id: "member-1",
    //   name: "Dimal Chandrawansha",
    //   role: "CEO & Founder",
    //   avatar: "/img/team/dimal.jpeg",
    // },
    // {
    //   id: "member-2",
    //   name: "Dimal Chandrawansha",
    //   role: "CTO",
    //   avatar: "/img/team/dimal.jpeg",
    // },
    // {
    //   id: "member-3",
    //   name: "Dimal Chandrawansha",
    //   role: "Head of Design",
    //   avatar: "/img/team/dimal.jpeg",
    // },
    // {
    //   id: "member-4",
    //   name: "Dimal Chandrawansha",
    //   role: "Lead Engineer",
    //   avatar: "/img/team/dimal.jpeg",
    // },
    // {
    //   id: "member-5",
    //   name: "Dimal Chandrawansha",
    //   role: "Product Manager",
    //   avatar: "/img/team/dimal.jpeg",
    // },
    // {
    //   id: "member-6",
    //   name: "Dimal Chandrawansha",
    //   role: "UX Designer",
    //   avatar: "/img/team/dimal.jpeg",
    // },
    // {
    //   id: "member-7",
    //   name: "Sophia Martinez",
    //   role: "Marketing Director",
    //   avatar: "/img/team/dimal.jpeg",
    // },
    // {
    //   id: "member-8",
    //   name: "James Wilson",
    //   role: "Sales Lead",
    //   avatar: "/img/team/dimal.jpeg",
    // },
  ],
}: Team1Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-4">
            {heading}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-lightdark to-primary-dark rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => scroll('left')}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-blue-100 text-primary-dark hover:bg-primary-lightdark hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-blue-100 text-primary-dark hover:bg-primary-lightdark hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Team Members Horizontal Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 px-4 scrollbar-hide snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {members.map((member) => (
            <div 
              key={member.id} 
              className="flex-shrink-0 w-72 snap-center group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 overflow-hidden">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      width={400}
                      height={400}
                    />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <a 
                        href="#" 
                        className="p-2 bg-white rounded-full text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 transform hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="p-2 bg-white rounded-full text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 transform hover:scale-110"
                        aria-label="Twitter"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-dark transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm bg-blue-50 inline-block px-4 py-1 rounded-full">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(members.length / 3) }).map((_, idx) => (
            <div 
              key={idx}
              className="w-2 h-2 rounded-full bg-blue-200 hover:bg-primary-dark transition-colors duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Team1;