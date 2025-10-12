"use client";

import React, { useState } from 'react';
 

interface TrustedUniProps {
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;

}



const defaultCompanies = [
  {
    src: "/img/unilogo/iit.png",
    alt: "IIT",
  },
  {
    src: "/img/unilogo/sliit.png",
    alt: "SLIIT",
  },
  {
    src: "/img/unilogo/uc.png",
    alt: "University of Colombo",
  },
  {
    src: "/img/unilogo/um.png",
    alt: "University of Moratuwa",
  },
  {
    src: "/img/unilogo/nsbm.png",
    alt: "NSBM",
  },
  {
    src: "/img/unilogo/nibm.png",
    alt: "NIBM",
  },
  {
    src: "/img/unilogo/uj.png",
    alt: "University of Jpura",
  },
  {
    src: "/img/unilogo/up.png",
    alt: "University of Peradeniya",
  },
  {
    src: "/img/unilogo/cinec.png",
    alt: "CINEC",
  },
  {
    src: "/img/unilogo/esoft.png",
    alt: "ESOFT",
  },
  {
    src: "/img/unilogo/horizon.png",
    alt: "Horizon Campus",
  },
  {
    src: "/img/unilogo/kdu.png",
    alt: "General Sir John Kotelawala Defence University",
  },
  {
    src: "/img/unilogo/open.png",
    alt: "Open University of Sri Lanka",
  },
  {
    src: "/img/unilogo/ujaffna.png",
    alt: "University of Jaffna",
  },
  {
    src: "/img/unilogo/uk.png",
    alt: "University of Kelaniya",
  },
  {
    src: "/img/unilogo/ur.png",
    alt: "University of Ruhuna",
  },
  {
    src: "/img/unilogo/wayamba.png",
    alt: "Wayamba University of Sri Lanka",
  },
];


const TrustedUni = ({
  companiesTitle = "Trusted by Leading Universities",
  companies = defaultCompanies,

}: TrustedUniProps = {}) => {
  const [hoveredCompany, setHoveredCompany] = useState<number | null>(null);

  return (
    <section className="py-16 bg-transparent">
        {/* Companies Section */}
        <div className="py-16 px-4 rounded-2xl bg-white shadow-lg mb-20">
          <p className="text-center text-lg font-semibold text-gray-700 mb-10">{companiesTitle}</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, idx) => (
              <div 
                className="transition-all duration-700 ease-in-out transform-gpu hover:scale-110 cursor-pointer will-change-transform"
                key={company.src + idx}
                onMouseEnter={() => setHoveredCompany(idx)}
                onMouseLeave={() => setHoveredCompany(null)}
              >
                <img
                  src={company.src}
                  alt={company.alt}
                  width={100}
                  height={50}
                  className={`h-16 md:h-20 w-auto object-contain transition-all duration-700 ease-in-out will-change-opacity ${
                    hoveredCompany === idx ? 'opacity-100 filter-none' : 'opacity-60 grayscale'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default TrustedUni;