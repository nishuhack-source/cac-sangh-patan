import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const videos = [
  { id: 1, title: 'वार्षिक समारोह संपूर्ण वीडियो', date: '2026-01-01', duration: '45:30' },
  { id: 2, title: 'शिक्षक प्रशिक्षण वीडियो', date: '2025-12-15', duration: '32:15' },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">वीडियो</h1>
          <p className="opacity-80">संघ के कार्यक्रमों के वीडियो</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                  <span className="text-white text-6xl">▶️</span>
                  <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">{video.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{video.date}</p>
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
