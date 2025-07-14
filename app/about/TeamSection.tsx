
'use client';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      description: "Passionate about design and quality, Sarah has led our company to become an industry leader with her vision for exceptional furniture.",
      image: "https://thumbs.dreamstime.com/b/happy-young-woman-25259406.jpg",
      social: {
        linkedin: "sarah-mitchell-ceo",
        twitter: "sarahmitchell",
        email: "sarah@furniture.com"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Design",
      description: "With over 15 years of experience, Michael brings innovative design concepts that blend functionality with aesthetic appeal.",
      image: "https://t3.ftcdn.net/jpg/05/31/32/36/360_F_531323691_ai5HJlsq7BC7wChtR21DDmhunXC35YG6.jpg",
      social: {
        linkedin: "michael-rodriguez-design",
        twitter: "mikedesigns",
        email: "michael@furniture.com"
      }
    },
    {
      name: "Emily Chen",
      role: "Quality Director",
      description: "Emily ensures every piece meets our highest standards through rigorous quality control and attention to detail.",
      image: "https://media.istockphoto.com/id/687128212/photo/portrait-of-smiling-beautiful-indian-woman.jpg?s=170667a&w=0&k=20&c=seuR6pKFUr0DF1GPPDAPIjkKR46DQGVUkJ5kO4sCLt4=",
      social: {
        linkedin: "emily-chen-quality",
        twitter: "emilyqc",
        email: "emily@furniture.com"
      }
    },
    {
      name: "David Thompson",
      role: "Master Craftsman",
      description: "A third-generation furniture maker, David brings traditional craftsmanship techniques to modern furniture production.",
      image: "https://img.freepik.com/free-photo/smiley-man-holding-camera-front-view_23-2149915895.jpg",
      social: {
        linkedin: "david-thompson-craftsman",
        twitter: "davidcrafts",
        email: "david@furniture.com"
      }
    }
  ];

  const handleSocialClick = (platform: string, handle: string) => {
    const urls = {
      linkedin: `https://linkedin.com/in/${handle}`,
      twitter: `https://twitter.com/${handle}`,
      email: `mailto:${handle}`
    };
    
    if (platform === 'email') {
      window.location.href = urls[platform];
    } else {
      window.open(urls[platform as keyof typeof urls], '_blank');
    }
  };

  const handleViewPositions = () => {
    alert('We are currently hiring for the following positions:\n\n• Senior Furniture Designer\n• Quality Control Specialist\n• Customer Service Representative\n• Warehouse Associate\n\nPlease send your resume to careers@furniture.com');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate individuals who bring expertise, creativity, and dedication to every piece we create
          </p>
        </div>

        <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-30 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">{member.description}</p>
              
              <div className="flex justify-center space-x-4 mt-6">
                <button 
                  onClick={() => handleSocialClick('linkedin', member.social.linkedin)}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill"></i>
                </button>
                <button 
                  onClick={() => handleSocialClick('twitter', member.social.twitter)}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-twitter-fill"></i>
                </button>
                <button 
                  onClick={() => handleSocialClick('email', member.social.email)}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-mail-fill"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Join Our Team</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for quality furniture and exceptional customer service.
          </p>
          <button 
            onClick={handleViewPositions}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}
