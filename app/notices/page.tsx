import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const notices = [
  {
    id: 1,
    title: 'मासिक बैठक की सूचना',
    date: '2026-01-15',
    description: 'संघ की मासिक बैठक दिनांक 20 जनवरी 2026 को पाटन ब्लॉक कार्यालय में आयोजित होगी। सभी सदस्यों को सावधानीपूर्वक उपस्थित होना अपेक्षित है।',
    important: true,
    pdfUrl: null
  },
  {
    id: 2,
    title: 'शैक्षणिक कार्यक्रम आयोजन',
    date: '2026-01-10',
    description: 'आगामी शैक्षणिक कार्यक्रम के संबंध में सभी सदस्यों को सूचित किया जाता है।',
    important: false,
    pdfUrl: null
  },
  {
    id: 3,
    title: 'वार्षिक रिपोर्ट प्रस्तुति',
    date: '2025-12-20',
    description: 'वित्तीय वर्ष 2025-26 की वार्षिक रिपोर्ट प्रस्तुत की जाएगी।',
    important: false,
    pdfUrl: null
  },
];

export default function NoticesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">सूचनाएँ</h1>
          <p className="opacity-80">संघ से प्रकाशित आधिकारिक सूचनाएँ</p>
        </div>
      </section>

      {/* Notices List */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {notices.map((notice) => (
            <article key={notice.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Date Box */}
                <div className="bg-gradient-to-b from-[#C05621] to-[#9A441A] text-white p-4 flex flex-col items-center justify-center min-w-[100px]">
                  <span className="text-sm">{notice.date.split('-')[1]}</span>
                  <span className="text-3xl font-bold">{notice.date.split('-')[2]}</span>
                  <span className="text-xs">{notice.date.split('-')[0]}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-bold text-gray-800">{notice.title}</h2>
                    {notice.important && (
                      <span className="badge-important whitespace-nowrap">महत्वपूर्ण</span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-2">{notice.description}</p>
                  
                  {notice.pdfUrl && (
                    <a href={notice.pdfUrl} className="inline-flex items-center gap-2 mt-4 text-[#C05621] hover:underline">
                      📄 PDF डाउनलोड करें
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
