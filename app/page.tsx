import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Data - NO Secretary, Media separate
const bearers = [
  { id: 1, designation: 'संरक्षक', name: 'विकासखण्ड शिक्षा अधिकारी, पाटन', icon: '🏛️' },
  { id: 2, designation: 'ब्लॉक अध्यक्ष', name: 'श्री महेंद्र बहादुर', mobile: '9039790762', icon: '👤' },
  { id: 3, designation: 'उपाध्यक्ष', name: 'श्री अशोक सिन्हा', mobile: '8959597693', icon: '👤' },
  { id: 4, designation: 'कोषाध्यक्ष', name: 'श्री हरिशंकर दर्शनी', mobile: '9755036159', icon: '👤' },
];

const quickActions = [
  { href: '/notices', icon: '📢', label: 'सूचनाएँ' },
  { href: '/events', icon: '📅', label: 'कार्यक्रम' },
  { href: '/documents', icon: '📄', label: 'दस्तावेज' },
  { href: '/gallery', icon: '📸', label: 'गैलरी' },
  { href: '/videos', icon: '🎥', label: 'वीडियो' },
  { href: '/contact', icon: '📞', label: 'संपर्क' },
];

const objectives = [
  'शिक्षकों के व्यावसायिक अधिकारों की रक्षा',
  'शिक्षा के स्तर को ऊँचा उठाना',
  'सदस्यों के कल्याण हेतु कार्य करना',
  'शैक्षणिक सहयोग एवं समन्वय',
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
        <div className="container relative z-10 text-center py-20 md:py-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white/90 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            जिला – दुर्ग, छत्तीसगढ़
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            सी.ए.सी. संघ विकासखण्ड – पाटन
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-2">
            क्लस्टर अकादमिक समन्वयक संघ
          </p>

          <div className="flex justify-center gap-3 mb-10">
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-full shadow-lg">
              संघे शक्ति: सर्वदा
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="btn btn-primary px-8 py-4">
              संघ के बारे में जानें →
            </Link>
            <Link href="/notices" className="btn btn-ghost px-8 py-4">
              📢 नवीनतम सूचनाएँ
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="py-10 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {quickActions.map(a => (
              <Link key={a.href} href={a.href} className="quick-action">
                <div className="quick-action-icon">{a.icon}</div>
                <span className="text-sm font-medium text-gray-700">{a.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              🏛️ संघ परिचय
            </div>
            <h2 className="section-title mb-4">शिक्षक समुदाय की आवाज़</h2>
            <p className="section-subtitle mb-8">
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
          <div className="text-center mb-10">
            <div className="badge badge-primary mb-3">👥 नेतृत्व</div>
            <h2 className="section-title">मुख्य पदाधिकारी</h2>
            <p className="section-subtitle">संघ के निर्वाचित पदाधिकारीगण</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bearers.map((b, i) => (
              <div key={b.id} className="bearer-card">
                <div className="bearer-card-header" />
                <div className="p-5 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mx-auto -mt-10 mb-4 flex items-center justify-center text-3xl shadow-lg border-4 border-white">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{b.designation}</h3>
                  <p className="text-gray-600 text-sm mb-3">{b.name}</p>
                  {b.mobile && (
                    <a href={`tel:${b.mobile}`} className="btn btn-secondary text-xs py-2 px-4">
                      📞 {b.mobile}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            ℹ️ सचिव का पद वर्तमान में रिक्त है।
          </p>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <div className="badge badge-primary mb-3">🎯 उद्देश्य</div>
            <h2 className="section-title">संघ के उद्देश्य</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {objectives.map((o, i) => (
              <div key={i} className="card p-6 text-center hover:border-orange-200">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">{i + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICES */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
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
                  <div className="bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-center min-w-[70px]">
                    <div className="text-xs">जनवरी</div>
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
            <div className="event-card p-6">
              <div className="flex gap-4">
                <div className="bg-white/20 px-4 py-3 rounded-xl text-center">
                  <div className="text-xs text-white/70">सितंबर</div>
                  <div className="text-3xl font-bold text-white">05</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">शिक्षक दिवस समारोह</h3>
                  <p className="text-white/70 text-sm">📍 पाटन ब्लॉक कार्यालय</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link href="/events" className="btn btn-secondary">सभी कार्यक्रम →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT LINKS */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <div className="badge badge-primary mb-3">🔗 महत्वपूर्ण लिंक</div>
            <h2 className="section-title">संबंधित विभाग</h2>
          </div>
          <div className="max-w-lg mx-auto">
            <a 
              href="https://shiksha.cg.nic.in/" 
              target="_blank" 
              rel="noopener"
              className="card-flat p-5 flex items-center gap-4 hover:border-orange-300 transition"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl">
                🔗
              </div>
              <div>
                <div className="font-semibold text-gray-900">स्कूल शिक्षा विभाग, छत्तीसगढ़</div>
                <div className="text-sm text-gray-500">shiksha.cg.nic.in</div>
              </div>
              <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* MEDIA PRABHARI */}
      <section className="section bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                📰
              </div>
              <div className="badge badge-primary mb-3">मीडिया प्रभारी</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{mediaPrabhari.name}</h3>
              <p className="text-gray-600 text-sm mb-4">संघ प्रवक्ता एवं मीडिया संपर्क</p>
              <div className="flex gap-3 justify-center">
                <a href={`tel:${mediaPrabhari.mobile}`} className="btn btn-primary">
                  📞 {mediaPrabhari.mobile}
                </a>
                <a href={`https://wa.me/91${mediaPrabhari.mobile}`} target="_blank" rel="noopener" className="btn bg-green-500 hover:bg-green-600 text-white">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-navy-950 text-white text-center">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">संघ से जुड़ें</h2>
          <p className="text-white/70 mb-6">सी.ए.सी. संघ पाटन के सदस्य बनें</p>
          <Link href="/contact" className="btn btn-primary">
            📧 संपर्क करें
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
