import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const news = [
  {
    id: 1,
    title: 'संघ की वार्षिक बैठक संपन्न',
    date: '2026-01-01',
    excerpt: 'सी.ए.सी. संघ विकासखंड पाटन की वार्षिक बैठक सफलतापूर्वक संपन्न हुई।',
    category: 'बैठक',
    featured: true
  },
  {
    id: 2,
    title: 'शिक्षक प्रशिक्षण कार्यक्रम का आयोजन',
    date: '2025-12-15',
    excerpt: 'ब्लॉक स्तर पर शिक्षक प्रशिक्षण कार्यक्रम आयोजित किया गया।',
    category: 'प्रशिक्षण',
    featured: false
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">समाचार</h1>
          <p className="opacity-80">संघ के गतिविधियों की खबरें</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-[#C05621] to-[#E57A38] flex items-center justify-center">
                  <span className="text-white text-4xl">📰</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#F59E0B] text-white px-2 py-0.5 rounded text-xs">{item.category}</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h2 className="font-bold text-gray-800 mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
