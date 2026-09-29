import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const albums = [
  { id: 1, title: 'वार्षिक समारोह 2026', count: 25, date: '2026-01-01' },
  { id: 2, title: 'शिक्षक दिवस 2025', count: 18, date: '2025-09-05' },
  { id: 3, title: 'प्रशिक्षण कार्यक्रम', count: 12, date: '2025-12-15' },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">फोटो गैलरी</h1>
          <p className="opacity-80">संघ की गतिविधियों के चित्र</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <div key={album.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-[#C05621] to-[#E57A38] flex items-center justify-center">
                  <span className="text-white text-5xl">🖼️</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">{album.title}</h3>
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                    <span>📸 {album.count} फोटो</span>
                    <span>{album.date}</span>
                  </div>
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
