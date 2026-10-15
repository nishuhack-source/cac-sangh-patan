import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const bearers = [
  { id: 1, designation: 'संरक्षक', name: 'विकासखंड शिक्षा अधिकारी, पाटन', icon: '🏛️', mobile: null },
  { id: 2, designation: 'ब्लॉक अध्यक्ष', name: 'श्री महेंद्र बहादुर', icon: '👤', mobile: '+91 9039790762' },
  { id: 3, designation: 'उपाध्यक्ष', name: 'श्री अशोक सिन्हा', icon: '👤', mobile: null },
  { id: 4, designation: 'सचिव', name: 'श्री टिकेश्वर गजपाल', icon: '👤', mobile: null },
  { id: 5, designation: 'सहसचिव', name: 'श्रीमती योगिता साहू', icon: '👤', mobile: null },
  { id: 6, designation: 'कोषाध्यक्ष', name: 'श्री हरिशंकर देवांगन', icon: '👤', mobile: null },
];

const quickActions = [
  { href: '/notices', icon: '📢', label: 'सूचनाएँ', color: 'from-orange-500 to-orange-600' },
  { href: '/events', icon: '📅', label: 'कार्यक्रम', color: 'from-blue-500 to-blue-600' },
  { href: '/documents', icon: '📄', label: 'दस्तावेज', color: 'from-emerald-500 to-emerald-600' },
  { href: '/gallery', icon: '📸', label: 'गैलरी', color: 'from-purple-500 to-purple-600' },
  { href: '/videos', icon: '🎥', label: 'वीडियो', color: 'from-rose-500 to-rose-600' },
  { href: '/contact', icon: '📞', label: 'संपर्क', color: 'from-amber-500 to-amber-600' },
];

const objectives = [
  { icon: '🛡️', title: 'शिक्षकों के अधिकारों की रक्षा', desc: 'व्यावसायिक अधिकारों की सुरक्षा' },
  { icon: '📚', title: 'शिक्षा के स्तर को ऊँचा उठाना', desc: 'गुणवत्तापूर्ण शिक्षा का प्रचार' },
  { icon: '🤝', title: 'सदस्यों के कल्याण हेतु कार्य', desc: 'सामूहिक हित का संवर्धन' },
  { icon: '💡', title: 'शैक्षणिक सहयोग एवं समन्वय', desc: 'ज्ञान एवं अनुभव का आदान-प्रदान' },
];

const notices = [
  { id: 1, title: 'मासिक बैठक की सूचना', date: '15 जनवरी 2026', important: true },
  { id: 2, title: 'शैक्षणिक कार्यक्रम आयोजन', date: '10 जनवरी 2026', important: false },
  { id: 3, title: 'वार्षिक रिपोर्ट प्रस्तुति', date: '05 जनवरी 2026', important: false },
];

const mediaPrabhari = { name: 'नितेश कुमार साहू', mobile: '8120397425' };

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* HERO */}
      <section className="hero relative">
        <div className="hero-pattern" />
        <div className="container relative z-10 text-center py-20 md:py-28 lg:py-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            जिला – दुर्ग, छत्तीसगढ़
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            सी.ए.सी. संघ विकासखण्ड
            <span className="block text-orange-300"> – पाटन</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-3 font-medium">
            क्लस्टर अकादमिक समन्वयक संघ
          </p>

          <div className="flex justify-center gap-3 mb-10">
            <span className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold rounded-full shadow-lg shadow-orange-500/30">
              संघे शक्ति: सर्वदा
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="btn btn-primary px-8 py-4 text-base">
              संघ के बारे में जानें →
            </Link>
            <Link href="/notices" className="btn btn-ghost px-8 py-4 text-base">
              📢 नवीनतम सूचनाएँ
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {quickActions.map(a => (
              <Link key={a.href} href={a.href} className="quick-action group">
                <div className={`quick-action-icon bg-gradient-to-br ${a.color} text-white text-xl shadow-lg`}>
                  {a.icon}
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-gray-900">{a.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section bg-gradient-to-b from-white to-[#FFFBF5]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              🏛️ संघ परिचय
            </div>
            <h2 className="section-title mb-4">शिक्षक समुदाय की आवाज़</h2>
            <p className="section-subtitle mb-8 mx-auto leading-relaxed">
              सी.ए.सी. संघ विकासखण्ड पाटन, जिला दुर्ग, छत्तीसगढ़ के शैक्षणिक समन्वयकों का एक संगठन है।
              हम शिक्षकों के अधिकारों, व्यावसायिक विकास और शिक्षा के स्तर को ऊँचा उठाने के लिए प्रतिबद्ध हैं।
            </p>
            <Link href="/about" className="btn btn-secondary">
              विस्तार से देखें →
            </Link>
          </div>
        </div>
      </section>

      {/* BEARERS */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="badge badge-primary mb-3">👥 नेतृत्व</div>
            <h2 className="section-title">मुख्य पदाधिकारी</h2>
            <p className="section-subtitle mx-auto">संघ के निर्वाचित पदाधिकारीगण</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {bearers.map((b) => (
              <div key={b.id} className="bearer-card">
                <div className="bearer-card-header relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" className="text-white">
                      <pattern id={`bearer-pattern-${b.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.3"/>
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#bearer-pattern-${b.id})`}/>
                    </svg>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mx-auto -mt-10 mb-4 flex items-center justify-center text-3xl shadow-xl border-4 border-white">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{b.designation}</h3>
                  <p className="text-gray-600 text-sm mb-3">{b.name}</p>
                  {b.mobile && (
                    <a 
                      href={`tel:${b.mobile.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold rounded-lg hover:shadow-lg transition-all"
                    >
                      📞 {b.mobile}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            ℹ️ विस्तृत सूची के लिए <Link href="/office-bearers" className="text-orange-600 hover:underline font-medium">पदाधिकारी पृष्ठ</Link> देखें।
          </p>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="badge badge-primary mb-3">🎯 उद्देश्य</div>
            <h2 className="section-title">संघ के उद्देश्य</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {objectives.map((o, i) => (
              <div key={i} className="card p-6 text-center hover:border-orange-200 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#172554] to-[#1E3A8A] rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{o.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{o.title}</h3>
                <p className="text-gray-500 text-sm">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICES */}
      <section className="section bg-[#FFFBF5]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <div className="badge badge-primary mb-2">📢 सूचनाएँ</div>
              <h2 className="section-title">नवीनतम सूचनाएँ</h2>
            </div>
            <Link href="/notices" className="btn btn-secondary text-sm">सभी देखें →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {notices.map(n => (
              <div key={n.id} className={`notice-card ${n.important ? 'important' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#172554] to-[#1E3A8A] text-white px-3 py-2 rounded-lg text-center min-w-[70px] shadow">
                    <div className="text-xs opacity-80">जनवरी</div>
                    <div className="text-xl font-bold">{n.date.split(' ')[0]}</div>
                  </div>
                  <div>
                    {n.important && <span className="badge badge-important text-xs mb-1">⚠️ महत्वपूर्ण</span>}
                    <h3 className="font-semibold text-gray-900">{n.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <div className="badge badge-primary mb-3">📅 कार्यक्रम</div>
            <h2 className="section-title">आगामी कार्यक्रम</h2>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="event-card p-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="bg-white/20 backdrop-blur px-4 py-3 rounded-xl text-center shadow-lg">
                  <div className="text-xs text-white/80">सितंबर</div>
                  <div className="text-3xl font-bold text-white">05</div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-1">शिक्षक दिवस समारोह</h3>
                  <p className="text-white/80 text-sm">📍 पाटन ब्लॉक कार्यालय</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/events" className="btn btn-secondary">सभी कार्यक्रम →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT LINKS */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <div className="badge badge-primary mb-3">🔗 महत्वपूर्ण लिंक</div>
            <h2 className="section-title">संबंधित विभाग</h2>
          </div>
          <div className="max-w-lg mx-auto">
            <a 
              href="https://shiksha.cg.nic.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-flat p-6 flex items-center gap-4 hover:border-orange-300 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform">
                🔗
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">स्कूल शिक्षा विभाग, छत्तीसगढ़</div>
                <div className="text-sm text-gray-500">shiksha.cg.nic.in</div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* MEDIA PRABHARI */}
      <section className="section bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl shadow-lg">
                📰
              </div>
              <div className="badge badge-primary mb-3">मीडिया प्रभारी</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{mediaPrabhari.name}</h3>
              <p className="text-gray-600 text-sm mb-5">संघ प्रवक्ता एवं मीडिया संपर्क</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={`tel:${mediaPrabhari.mobile}`} className="btn btn-primary text-sm">
                  📞 {mediaPrabhari.mobile}
                </a>
                <a href={`https://wa.me/91${mediaPrabhari.mobile}`} target="_blank" rel="noopener noreferrer" className="btn bg-green-500 hover:bg-green-600 text-white text-sm">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#172554] via-[#1E3A8A] to-[#172554] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">संघ से जुड़ें</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">सी.ए.सी. संघ पाटन के सदस्य बनें और शिक्षक समुदाय की आवाज़ बनें</p>
          <Link href="/contact" className="btn btn-primary">
            📧 संपर्क करें
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
