// "use client";

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaTshirt, FaLaptop, FaUtensils, FaChartBar, FaUsers, FaHandshake, FaMobileAlt, FaGlobe } from 'react-icons/fa';
// import { IoMdCheckmarkCircle } from 'react-icons/io';
//  
// // import { Hero47 } from '@/components/sections/HeroSection';

// export default function Home() {
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);
//   const [stats, setStats] = useState({
//     brands: 0,
//     students: 0,
//     savings: 0
//   });

//   // Animate stats on component mount
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStats(prev => {
//         const newBrands = Math.min(prev.brands + 23, 5000);
//         const newStudents = Math.min(prev.students + 76000, 2000000);
//         const newSavings = Math.min(prev.savings + 100000, 20000000);
        
//         if (newBrands === 5000 && newStudents === 2000000 && newSavings === 20000000) {
//           clearInterval(interval);
//         }
        
//         return {
//           brands: newBrands,
//           students: newStudents,
//           savings: newSavings
//         };
//       });
//     }, 30);
    
//     return () => clearInterval(interval);
//   }, []);

//   const categories = [
//     {
//       name: 'Outfit',
//       icon: <FaTshirt className="text-6xl text-primary-dark dark:text-blue-400" />,
//       description: 'Get discounts on stylish clothes from your favorite brands.',
//     },
//     {
//       name: 'Tech',
//       icon: <FaLaptop className="text-6xl text-green-600 dark:text-green-400" />,
//       description: 'Save on top tech gadgets, laptops, and accessories.',
//     },
//     {
//       name: 'Food',
//       icon: <FaUtensils className="text-6xl text-red-600 dark:text-red-400" />,
//       description: 'Enjoy deals on food delivery and dining out.',
//     },
//   ];

//   const toggleCategory = (name: string) => {
//     setActiveCategory(activeCategory === name ? null : name);
//   };

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }
//     }
//   };

//   const leadershipTeam = [
//     {
//       name: "Emma Johnson",
//       role: "CEO & Co-founder",
//       image: "/vercel.svg", // Placeholder image
//       bio: "Emma founded OKIZ with a vision to make student life more affordable and enjoyable."
//     },
//     {
//       name: "David Chen",
//       role: "CTO & Co-founder",
//       image: "/vercel.svg", // Placeholder image
//       bio: "David oversees all technological innovations at OKIZ, ensuring students have a seamless experience."
//     },
//     {
//       name: "Sarah Williams",
//       role: "Chief Marketing Officer",
//       image: "/vercel.svg", // Placeholder image
//       bio: "Sarah leads our marketing efforts to connect students with the brands they love."
//     }
//   ];

//   return (
//     <main className="min-h-screen flex flex-col">
//       {/* Hero Section */}
//       {/* <HeroSection /> */}
//       {/* <Hero47/> */}
      
//       {/* Categories Section */}
//       <section className="w-full py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
//         <div className="max-w-6xl mx-auto">
//           <motion.div 
//             className="text-center mb-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             // //variants={fadeInUp}
//             animate="active"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
//               OKIZ: <span className="text-primary-dark dark:text-blue-400">Student Discounts</span> Reimagined
//             </h1>
//             <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
//               Our mission has been to empower students to thrive. Here to take the sting out of everyday life, we help you save money on what you need, what you want and what you love.
//             </p>
//           </motion.div>

//           <motion.div
//             className="mt-12 flex justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.7 }}
//           >
//             <button className="px-8 py-4 bg-primary-dark text-white rounded-md hover:bg-blue-700 transition shadow-lg text-lg font-semibold">
//               Join OKIZ Today
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Section */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             //variants={fadeInUp}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Why Choose OKIZ?</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Unlocking a world of student discounts from thousands of stores online and in-store, OKIZ gives you access to more savings than any other platform.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//             {categories.map((category) => (
//               <motion.div
//                 key={category.name}
//                 className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md cursor-pointer"
//                 whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => toggleCategory(category.name)}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={{
//                   hidden: { opacity: 0, y: 30 },
//                   visible: { 
//                     opacity: 1, 
//                     y: 0, 
//                     transition: { 
//                       duration: 0.5,
//                       delay: categories.findIndex(c => c.name === category.name) * 0.2 
//                     } 
//                   }
//                 }}
//               >
//                 <motion.div
//                   animate={{ rotate: activeCategory === category.name ? 360 : 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {category.icon}
//                 </motion.div>
//                 <h3 className="text-2xl font-semibold mt-4 text-gray-800 dark:text-white">{category.name}</h3>
//                 {activeCategory === category.name && (
//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-gray-600 dark:text-gray-300 mt-2 text-center"
//                   >
//                     {category.description}
//                   </motion.p>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership Message */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
//         <div className="max-w-6xl mx-auto">
//           <motion.div 
//             className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-2xl shadow-xl"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             //variants={fadeInUp}
//           >
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="w-full md:w-1/3 mb-6 md:mb-0">
//                 <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
//                   <img 
//                     src="/vercel.svg" 
//                     alt="CEO" 
//                     layout="fill"
//                     className="rounded-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="w-full md:w-2/3">
//                 <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">A Message from Our CEO</h2>
//                 <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
//                   "At OKIZ, we believe every student deserves access to the best products and services at affordable prices. Our platform connects you with thousands of brands offering exclusive student discounts, helping you make the most of your college experience without breaking the bank."
//                 </p>
//                 <p className="text-lg font-semibold text-gray-800 dark:text-white">
//                   Emma Johnson, CEO & Co-founder
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <motion.div 
//             className="text-center mb-16"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             //variants={fadeInUp}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Story</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               Founded in 2020, OKIZ began with a simple idea: make student life more affordable. What started as a small project between college friends has grown into a platform serving millions of students across the country.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//             <motion.div 
//               className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { 
//                   opacity: 1, 
//                   y: 0, 
//                   transition: { duration: 0.5, delay: 0 } 
//                 }
//               }}
//             >
//               <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4 mx-auto">
//                 <FaUsers className="h-8 w-8 text-primary-dark dark:text-blue-400" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">The Beginning</h3>
//               <p className="text-gray-600 dark:text-gray-300 text-center">
//                 Started by three university students who were frustrated with the high cost of student life.
//               </p>
//             </motion.div>

//             <motion.div 
//               className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { 
//                   opacity: 1, 
//                   y: 0, 
//                   transition: { duration: 0.5, delay: 0.2 } 
//                 }
//               }}
//             >
//               <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-4 mx-auto">
//                 <FaHandshake className="h-8 w-8 text-green-600 dark:text-green-400" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">Growing Partnerships</h3>
//               <p className="text-gray-600 dark:text-gray-300 text-center">
//                 We've built relationships with thousands of brands to bring exclusive discounts to students.
//               </p>
//             </motion.div>

//             <motion.div 
//               className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { 
//                   opacity: 1, 
//                   y: 0, 
//                   transition: { duration: 0.5, delay: 0.4 } 
//                 }
//               }}
//             >
//               <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 mb-4 mx-auto">
//                 <FaGlobe className="h-8 w-8 text-purple-600 dark:text-purple-400" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">Today</h3>
//               <p className="text-gray-600 dark:text-gray-300 text-center">
//                 Now serving over 2 million students and partnering with 5,000+ brands nationwide.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Leadership Team */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
//         <div className="max-w-6xl mx-auto">
//           <motion.div 
//             className="text-center mb-16"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             //variants={fadeInUp}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Meet Our Leadership Team</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               The passionate individuals behind OKIZ who are committed to making student life more affordable.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {leadershipTeam.map((leader, index) => (
//               <motion.div 
//                 key={leader.name}
//                 className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={{
//                   hidden: { opacity: 0, y: 30 },
//                   visible: { 
//                     opacity: 1, 
//                     y: 0, 
//                     transition: { duration: 0.5, delay: index * 0.2 } 
//                   }
//                 }}
//                 whileHover={{ y: -10, transition: { duration: 0.3 } }}
//               >
//                 <div className="h-48 relative">
//                   <img
//                     src={leader.image}
//                     alt={leader.name}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-800 dark:text-white">{leader.name}</h3>
//                   <p className="text-primary-dark dark:text-blue-400 mb-4">{leader.role}</p>
//                   <p className="text-gray-600 dark:text-gray-300">{leader.bio}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 px-4 bg-primary-dark dark:bg-blue-800 text-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.div 
//             className="text-center mb-16"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             //variants={fadeInUp}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">OKIZ by Numbers</h2>
//             <p className="text-lg max-w-2xl mx-auto">
//               Our growing community of students and brands continues to make an impact.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div 
//               className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0 }}
//             >
//               <FaChartBar className="h-12 w-12 mx-auto mb-4" />
//               <h3 className="text-4xl font-bold text-center mb-2">{stats.brands.toLocaleString()}+</h3>
//               <p className="text-center text-lg">Brand Partners</p>
//             </motion.div>

//             <motion.div 
//               className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <FaUsers className="h-12 w-12 mx-auto mb-4" />
//               <h3 className="text-4xl font-bold text-center mb-2">{stats.students.toLocaleString()}+</h3>
//               <p className="text-center text-lg">Active Students</p>
//             </motion.div>

//             <motion.div 
//               className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <IoMdCheckmarkCircle className="h-12 w-12 mx-auto mb-4" />
//               <h3 className="text-4xl font-bold text-center mb-2">${(stats.savings / 1000000).toFixed(1)}M+</h3>
//               <p className="text-center text-lg">Student Savings</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* App Promotion */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center">
//             <motion.div 
//               className="w-full md:w-1/2 mb-10 md:mb-0"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               //variants={fadeInUp}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Take OKIZ Everywhere You Go</h2>
//               <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
//                 Download our mobile app to access student discounts anytime, anywhere. Get exclusive mobile-only offers and instant notifications for new deals from your favorite brands.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition flex items-center">
//                   <FaMobileAlt className="mr-2" /> App Store
//                 </button>
//                 <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition flex items-center">
//                   <FaMobileAlt className="mr-2" /> Google Play
//                 </button>
//               </div>
//             </motion.div>
//             <motion.div 
//               className="w-full md:w-1/2"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="relative h-96 md:h-[500px]">
//                 <img
//                   src="/file.svg" // Replace with actual app mockup image
//                   alt="OKIZ Mobile App"
//                   layout="fill"
//                   objectFit="contain"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 px-4 bg-gradient-to-r from-primary-dark to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             //variants={fadeInUp}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Saving?</h2>
//             <p className="text-xl mb-8">
//               Join millions of students already saving with OKIZ. Sign up today - it's free!
//             </p>
//             <button className="px-8 py-4 bg-white text-primary-dark rounded-md hover:bg-gray-100 transition shadow-lg text-lg font-semibold">
//               Join OKIZ Today
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }