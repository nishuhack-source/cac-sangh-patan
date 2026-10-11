import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const officeBearers = [
  { 
    id: 1, 
    designation: 'संरक्षक', 
    name: 'विकासखंड शिक्षा अधिकारी, पाटन',
    role: 'शैक्षणिक संरक्षण एवं मार्गदर्शन',
    gradient: 'from-navy-900 to-gold-500'
  },
  { 
    id: 2, 
    designation: 'ब्लॉक अध्यक्ष', 
    name: 'श्री महेंद्र बहादुर',
    role: 'संघ का नेतृत्व एवं प्रबंधन',
    gradient: 'from-navy-900 to-gold-500'
  },
  { 
    id: 3, 
    designation: 'उपाध्यक्ष', 
    name: 'श्री अशोक सिन्हा',
    role: 'कार्यकारिणी संचालन',
    gradient: 'from-navy-900 to-gold-500'
  },
  { 
    id: 4, 
    designation: 'सहसचिव', 
    name: 'श्रीमती योगिता साहू',
    role: 'सहायता एवं दस्तावेजीकरण',
    gradient: 'from-navy-900 to-gold-500'
  },
  { 
    id: 5, 
    designation: 'सेकर9c', 
    name: 'श्री टिकेश्वर गजपाल',
    role: 'सचिवीय कार्य',
    gradient: 'from-navy-900 to-gold-500'
  },
  { 
    id: 6, 
    designation: 'कोषाध्यक्ष', 
    name: 'श्री हरिशंकर देवांगन',
    role: 'वित्तीय प्रबंधन',
    gradient: 'from-navy-900 to-gold-500'
  },
];

export default function OfficeBearersPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-900 via-navy-700 to-navy-900 text-white">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 backdrop-blur rounded-full text-sm font-medium text-gold-600 mb-4">
            👥 नेतृत्व
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">पदाधिकारी</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            सी.ए.सी. संघ विकासखंड पाटन के निर्वाचित पदाधिकारीगण
          </p>
        </div>
      </section>
      {/* Office Bearers Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {officeBearers.map((bearer, i) => (
              <div 
                key={bearer.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${bearer.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id={`grid-${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-${i})`}/>
                    </svg>
                  </div>
                  {/* Avatar */}
                  <div className="absolute -bottom-12 left-8">
                    <div className="w-24 h-24 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                      <span className="text-4xl font-bold bg-gradient-to-br from-gray-700 to-gray-900 bg-clip-text text-transparent">
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
                <div className="pt-16 pb-8 px-8">
                  <div className="mb-4">
                    <h2 className={`text-2xl font-bold bg-gradient-to-r ${bearer.gradient} bg-clip-text text-transparent mb-1`}>
                      {bearer.designation}
                    </h2>
                    <h3 className="text-lg font-semibold text-gray-900">{bearer.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{bearer.role}</p>
                  </div>
                  {/* Contact Actions */}
                  {bearer.mobile && (
                    <div className="flex gap-3 mt-6">
                      <a 
                        href={`tel:${bearer.mobile.replace(/\s/g, '')}`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gold-50 rounded-xl text-sm font-semibold text-gray-700 hover:text-gold-700 transition-all"
                      >
                        📞 कॉल करें
                      </a>
                      <a 
                        href={`https://wa.me/${bearer.whatsapp}`}
                        target="_blank"
                        rel="noopener"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-sm font-semibold text-white transition-all"
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
