import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const objectives = [
  'शिक्षकों के अधिकारों और हितों की रक्षा',
  'शैक्षणिक विकास में सहयोग',
  'व्यावसायिक एकता को बढ़ावा',
  'शिक्षा के स्तर को ऊँचा उठाने में योगदान',
];

const roles = [
  'शिक्षकों की आवाज़ को प्रशासन तक पहुँचाना',
  'शैक्षणिक समस्याओं का समाधान',
  'प्रशिक्षण कार्यक्रमों का आयोजन',
  'सदस्यों के कल्याण के लिए कार्य',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">हमारे बारे में</h1>
          <p className="opacity-80">सी.ए.सी. संघ विकासखंड पाटन का परिचय</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">संघ का परिचय</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                सी.ए.सी. संघ विकासखंड पाटन, जिला दुर्ग, छत्तीसगढ़ के शैक्षणिक समन्वयकों का एक संगठन है। 
                यह संघ शिक्षकों के अधिकारों, कल्याण और शैक्षणिक विकास के लिए समर्पित है।
              </p>
              <p>
                <strong>Cluster Academic Coordinator Association (Block - Patan)</strong>
              </p>
              <div className="flex gap-4 mt-4">
                <span className="bg-[#C05621] text-white px-4 py-2 rounded">संघे शक्ति: सर्वदा</span>
                <span className="bg-[#1E3A5F] text-white px-4 py-2 rounded">एकता ही हमारी ताकत है</span>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">संघ के उद्देश्य</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {objectives.map((obj, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                  <span className="w-8 h-8 bg-[#C05621] rounded-full flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Role */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">संघ की भूमिका</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {roles.map((role, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <span className="w-8 h-8 bg-[#1E3A5F] rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-gradient-to-r from-[#C05621] to-[#9A441A] text-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">संघ का कार्यक्षेत्र</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-lg font-medium">विकासखंड</p>
                <p className="text-white/80">पाटन</p>
              </div>
              <div>
                <p className="text-lg font-medium">जिला</p>
                <p className="text-white/80">दुर्ग</p>
              </div>
              <div>
                <p className="text-lg font-medium">राज्य</p>
                <p className="text-white/80">छत्तीसगढ़</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
