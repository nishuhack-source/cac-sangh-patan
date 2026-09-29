import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const downloads = [
  { id: 1, title: 'सदस्यता फॉर्म', category: 'फॉर्म', size: '245 KB' },
  { id: 2, title: 'वार्षिक रिपोर्ट 2025', category: 'रिपोर्ट', size: '1.2 MB' },
];

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">डाउनलोड</h1>
          <p className="opacity-80">दस्तावेज़ एवं फॉर्म डाउनलोड</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-4">
          {downloads.map((d) => (
            <div key={d.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <h3 className="font-medium">{d.title}</h3>
                <p className="text-sm text-gray-500">{d.category} • {d.size}</p>
              </div>
              <button className="bg-[#C05621] text-white px-4 py-2 rounded hover:bg-[#9A441A]">⬇️</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
