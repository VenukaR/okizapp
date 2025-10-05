"use client";

export function ContactMap() {
  return (
    <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9943050423256!2d79.8442733!3d6.8944953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bcfdee7764d%3A0xdf97fbb66912b0c5!2sIndependence%20Square!5e0!3m2!1sen!2slk!4v1696498780048!5m2!1sen!2slk" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}