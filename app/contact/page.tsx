"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const mediaPrabhari = {
  name: 'श्री नितेश कुमार साहू',
  mobile: '+91 81203 97425',
  whatsapp: '918120397425'
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('संदेश भेजा गया। हम जल्द ही संपर्क करेंगे।');
  };

  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium text-amber-400 mb-4">
            📞 संपर्क
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">संपर्क करें</h1>
          <p className="text-lg text-white/70">हमसे जुड़ें, अपनी बात रखें</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-2xl">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">पता</h3>
                    <p className="text-gray-600">पाटन, जिला – दुर्ग, छत्तीसगढ़</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-2xl">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">ईमेल</h3>
                    <a href="mailto:cacsinghpatan@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">cacsinghpatan@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-2xl">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">फोन</h3>
                    <a href="tel:+919039790762" className="text-emerald-600 hover:text-emerald-700 font-medium">+91 9039790762</a>
                  </div>
                </div>
              </div>

              {/* Media Prabhari Card */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl">📰</div>
                  <div>
                    <h3 className="font-bold text-amber-800">मीडिया प्रभारी</h3>
                    <p className="text-amber-600 text-sm">{mediaPrabhari.name}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={`tel:${mediaPrabhari.mobile.replace(/\s/g, '')}`} className="flex-1 py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-semibold text-center transition-colors">
                    📞 {mediaPrabhari.mobile}
                  </a>
                  <a href={`https://wa.me/${mediaPrabhari.whatsapp}`} target="_blank" rel="noopener" className="flex-1 py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-semibold text-center transition-colors">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">संदेश भेजें</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">नाम *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ईमेल *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">फोन</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">विषय</label>
                  <input type="text" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">संदेश *</label>
                  <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"></textarea>
                </div>
                
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  संदेश भेजें →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
