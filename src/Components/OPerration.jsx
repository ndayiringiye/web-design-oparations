import { Star } from 'lucide-react';
import first from "../../public/images/first.png";
import second from "../../public/images/second.png";
import third from "../../public/images/third.png"
export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Greg House",
      image: {first},
      rating: 5,
      text: "I Had A Session With William And Was Amazed! He's Creative And Made Me Feel At Ease. The Stunning Photos Far Exceeded My Expectations. Highly Recommend For A Professional Experience!"
    },
    {
      id: 2,
      name: "Emily Thompson",
      image: {second},
      rating: 5,
      text: "William Is An Outstanding Photographer! He Made Our Engagement Shoot Perfect, Showing Great Attention To Detail. The Photos Are Magazine-Quality. Highly Recommend For Anyone Seeking Excellence!"
    },
    {
      id: 3,
      name: "James Anderson",
      image: {third},
      rating: 5,
      text: "Working With William Was Great! He Captures Candid Moments Beautifully. The Family Photos He Took Were Breathtaking And Captured Our Essence. Definitely A Five-Star Experience!"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="mb-16 text-right pr-4">
          <h2 className="text-5xl font-bold mb-2">What clients say</h2>
          <p className="text-gray-400 text-sm">Over a hundred real reviews with an average rating of 4.9 out of 5</p>
        </div>
        
        <div className="relative flex flex-wrap">
          <div className="w-full md:w-1/3 p-4 transform transition-all duration-700 animate-fade-in-left">
            <div className="relative bg-gray-800/40 rounded-3xl p-8 h-full">
              <div className="absolute -top-12 -left-4 w-24 h-24">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500">
                  <img 
                    src={first} 
                    alt={testimonials[0].name}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              <div className="mt-10 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="text-purple-500" 
                      fill="#a855f7" 
                      size={18} 
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-6">{testimonials[0].text}</p>
              
              <p className="font-semibold text-sm">{testimonials[0].name}</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4 md:mt-12 transform transition-all duration-700 animate-fade-in-up">
            <div className="relative bg-gray-800/40 rounded-3xl p-8 h-full">
              <div className="absolute -top-12 left-0 right-0 mx-auto w-24 h-24 flex justify-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500">
                  <img 
                    src={second} 
                    alt={testimonials[1].name}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              <div className="mt-10 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="text-purple-500" 
                      fill="#a855f7" 
                      size={18} 
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-6">{testimonials[1].text}</p>
              
              <p className="font-semibold text-sm">{testimonials[1].name}</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4 transform transition-all duration-700 animate-fade-in-right">
            <div className="relative bg-gray-800/40 rounded-3xl p-8 h-full">
              <div className="absolute -top-12 -right-4 w-24 h-24 flex justify-end">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500">
                  <img 
                    src={third} 
                    alt={testimonials[2].name}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="mt-10 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="text-purple-500" 
                      fill="#a855f7" 
                      size={18} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-6">{testimonials[2].text}</p>
              
              <p className="font-semibold text-sm">{testimonials[2].name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .animate-fade-in-left {
    animation: fadeInLeft 0.8s ease-out forwards;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }
  
  .animate-fade-in-right {
    animation: fadeInRight 0.8s ease-out forwards;
  }
`;

document.head.appendChild(style);