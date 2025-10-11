"use client"

import React, {
  useCallback,
  useEffect,
  useState,
} from "react"
import { AnimatePresence, motion } from "framer-motion"

interface Logo {
  name: string;
  id: number;
  logo: string;
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000
    const columnDelay = index * 200
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const currentLogo = logos[currentIndex]

    return (
      <motion.div
        className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLogo.id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <img 
              src={currentLogo.logo} 
              alt={currentLogo.name}
              width={100}
              height={50}
              className="h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

LogoColumn.displayName = 'LogoColumn'

interface AnimatedLogoCarouselProps {
  title?: string;
  subtitle?: string;
  columnCount?: number;
  logos: {
    name: string;
    logo: string;
    id?: number;
  }[];
}

export function AnimatedLogoCarousel({ 
  title = "Our Partner Shops",
  subtitle = "Join these businesses offering exclusive discounts",
  columnCount = 4, 
  logos 
}: AnimatedLogoCarouselProps) {
  // Add IDs if they don't exist - process this once during initial render
  const logosWithIds = React.useMemo(() => {
    return logos.map((logo, index) => ({
      ...logo,
      id: logo.id || index + 1
    }));
  }, [logos]);

  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  // Initialize logo sets only once based on the memoized logosWithIds
  useEffect(() => {
    const distributedLogos = distributeLogos(logosWithIds, columnCount)
    setLogoSets(distributedLogos)
  }, [logosWithIds, columnCount])

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
        )}
        
        <div className="flex justify-center">
          <div className="flex space-x-8 mx-auto">
            {logoSets.map((logos, index) => (
              <LogoColumn
                key={index}
                logos={logos}
                index={index}
                currentTime={currentTime}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}