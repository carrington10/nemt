// components/VerticalText.js
import Image from 'next/image';
const VerticalText = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6">
    {/* Text Container */}
    <div className="flex-1 md:mr-8 mb-6 md:mb-0">
      <h3 h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who we are?</h3>
      <p className="text-lg leading-relaxed text-lg md:text-xl leading-relaxed text-white bg-sky-900 p-4 rounded-lg">
        Welcome to [insert-website-name] we are dedicated to transforming the way individuals access healthcare through our specialized Non-Emergency Medical Transportation (NEMT) services. With a commitment to reliability, safety, and compassionate care, our team ensures that patients reach their medical appointments on time and with ease. Our mission is to bridge the gap between patients and their healthcare needs, providing dependable transportation solutions tailored to each individual’s requirements. Trust us to be your partner in navigating the journey to better health.
        </p>
      </div>

      {/* Image Container */}
      
      <div className="flex-shrink-0 w-full md:w-1/2 relative">
        <div className="relative w-full h-80">
          <Image
            src="/medicalequipment.webp"
            alt="Description of Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full" // Makes the image rounded
          />
        </div>
      </div>
    </div>
  );
};
  
  export default VerticalText;