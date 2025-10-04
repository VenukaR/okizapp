"use client";

import React, { useState } from 'react';
import Image from 'next/image';

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
                <Image
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