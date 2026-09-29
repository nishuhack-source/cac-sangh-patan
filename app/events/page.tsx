import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const events = [
  { 
    id: 1, 
    title: 'शिक्षक दिवस समारोह', 
    date: '2026-09-05',
    venue: 'पाटन ब्लॉक कार्यालय',
    description: 'शिक्षक दिवस के अवसर पर समारोह का आयोजन',
    status: 'upcoming'
  },
  { 
    id: 2, 
    title: 'मासिक समीक्षा बैठक', 
    date: '2026-02-15',
    venue: 'ब्लॉक सभागार',
    description: 'शैक्षणिक गतिविधियों की समीक्षा',
    status: 'upcoming'
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">कार्यक्रम एवं गतिविधियाँ</h1>
          <p className="opacity-80">आगामी और पूर्व संपन्न कार्यक्रम</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Upcoming Events */}
          <h2 className="text-xl font-bold mb-6 text-gray-800">आगामी कार्यक्रम</h2>
          <div className="space-y-6 mb-12">
            {events.map((event) => (
              <article key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-b from-[#1E3A5F] to-[#2D5A87] text-white p-6 flex flex-col items-center justify-center min-w-[120px]">
                    <span className="text-sm">{event.date.split('-')[1]}</span>
                    <span className="text-4xl font-bold">{event.date.split('-')[2]}</span>
                    <span className="text-sm">{event.date.split('-')[0]}</span>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">आगामी</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <p className="text-sm text-gray-500">📍 {event.venue}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Completed Events */}
          <h2 className="text-xl font-bold mb-6 text-gray-800">संपन्न कार्यक्रम</h2>
          <div className="bg-gray-100 rounded-xl p-8 text-center text-gray-500">
            कोई पूर्व संपन्न कार्यक्रम उपलब्ध नहीं
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
