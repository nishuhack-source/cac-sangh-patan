import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer pt-12 pb-6">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">CAC</span>
              </div>
              <div>
                <div className="font-bold text-white">सी.ए.सी. संघ विकासखण्ड – पाटन</div>
                <div className="text-sm text-white/60">क्लस्टर अकादमिक समन्वयक संघ</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              जिला दुर्ग, छत्तीसगढ़ के शैक्षणिक समन्वयकों का प्रमुख संगठन। शिक्षक अधिकार, कल्याण और विकास के लिए समर्पित।
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full">संघे शक्ति: सर्वदा</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2">
              {[
                ['/notices', 'सूचनाएँ'],
                ['/events', 'कार्यक्रम'],
                ['/documents', 'दस्तावेज'],
                ['/gallery', 'गैलरी'],
                ['/contact', 'संपर्क'],
              ].map(([h, l]) => (
                <li key={h}>
                  <Link href={h} className="text-white/60 hover:text-orange-400 text-sm transition">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">संपर्क</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white/70"> 📍 पाटन, जिला – दुर्ग, छत्तीसगढ़</li>
              <li><a href="mailto:cacsinghpatan@gmail.com" className="text-white/70 hover:text-orange-400">📧 cacsinghpatan@gmail.com</a></li>
              <li><a href="tel:+919039790762" className="text-white/70 hover:text-orange-400">📞 +91 9039790762</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-sm">© {year} सी.ए.सी. संघ विकासखण्ड पाटन। सर्वाधिकार सुरक्षित।</p>
        </div>
      </div>
    </footer>
  );
}
