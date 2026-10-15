"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const officeBearers = [
  { 
    id: 1, 
    designation: 'संरक्षक', 
    name: 'विकासखंड शिक्षा अधिकारी, पाटन',
    role: 'शैक्षणिक संरक्षण एवं मार्गदर्शन',
    mobile: null,
    gradient: 'from-navy-900 to-gold-500'
  },
  { 
    id: 2, 
    designation: 'ब्लॉक अध्यक्ष', 
    name: 'श्री महेंद्र बहादुर',
    role: 'संघ का नेतृत्व एवं प्रबंधन',
    mobile: '+91 9039790762',
    gradient: 'from-navy-900 to-gold-500'
  },
  { 
    id: 3, 
    designation: 'उपाध्यक्ष', 
    name: 'श्री अशोक सिन्हा',
    role: 'कार्यकारिणी संचालन',
    mobile: null,
    gradient: 'from-navy-900 to-gold-500'
  },
  { 
    id: 4, 
    designation: 'सचिव', 
    name: 'श्री टिकेश्वर गजपाल',
    role: 'सचिवीय कार्य',
    mobile: null,
    gradient: 'from-navy-900 to-gold-500'
  },
  { 
    id: 5, 
    designation: 'सहसचिव', 
    name: 'श्रीमती योगिता साहू',
    role: 'सहायता एवं दस्तावेजीकरण',
    mobile: null,
    gradient: 'from-navy-900 to-gold-500'
  },
  { 
    id: 6, 
    designation: 'कोषाध्यक्ष', 
    name: 'श्री हरिशंकर देवांगन',
    role: 'वित्तीय प्रबंधन',
    mobile: null,
    gradient: 'from-navy-900 to-gold-500'
  },
];

const mediaPrabhari = {
  name: 'नितेश कुमार साहू',
  mobile: '8120397425',
  designation: 'मीडिया प्रभारी'
};

export default function OfficeBearersPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#172554] via-[#1E3A8A] to-[#172554] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-500 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-300 blur-3xl"></div>
        </div>
        <div className="container text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium text-orange-300 mb-4">
            👥 नेतृत्व
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">पदाधिकारी</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            सी.ए.सी. संघ विकासखंड पाटन के निर्वाचित पदाधिकारीगण
          </p>
        </div>
      </section>

      {/* Office Bearers Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {officeBearers.map((bearer, i) => (
              <div 
                key={bearer.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient Header */}
                <div className="h-28 bg-gradient-to-br from-[#172554] to-[#1E3A8A] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id={`grid-${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-${i})`}/>
                    </svg>
                  </div>
                  {/* Avatar */}
                  <div className="absolute -bottom-10 left-6">
                    <div className="w-20 h-20 bg-white rounded-xl shadow-xl flex items-center justify-center border-4 border-white">
                      <span className="text-3xl font-bold bg-gradient-to-br from-[#172554] to-[#F97316] bg-clip-text text-transparent">
                        {bearer.name.split(' ').pop()?.charAt(0) || bearer.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold text-white">
                    #{i + 1}
                  </div>
                </div>
                {/* Content */}
                <div className="pt-14 pb-6 px-6">
                  <div className="mb-3">
                    <h2 className="text-xl font-bold text-[#172554] mb-1">{bearer.designation}</h2>
                    <h3 className="text-base font-semibold text-gray-900">{bearer.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{bearer.role}</p>
                  </div>
                  {bearer.mobile && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a 
                        href={`tel:${bearer.mobile.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-lg shadow hover:shadow-lg transition-all"
                      >
                        📞 {bearer.mobile}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Prabhari Section */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl shadow-lg">
                📰
              </div>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-3">
                मीडिया प्रभारी
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{mediaPrabhari.name}</h3>
              <p className="text-gray-600 text-sm mb-4">संघ प्रवक्ता एवं मीडिया संपर्क</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a 
                  href={`tel:${mediaPrabhari.mobile}`}
                  className="btn btn-primary text-sm"
                >
                  📞 {mediaPrabhari.mobile}
                </a>
                <a 
                  href={`https://wa.me/91${mediaPrabhari.mobile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-green-500 hover:bg-green-600 text-white text-sm"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
