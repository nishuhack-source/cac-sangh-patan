import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const documents = [
  { id: 1, title: 'पत्र संख्या 101/2026', category: 'आदेश', date: '2026-01-10', letterNumber: '101/2026' },
  { id: 2, title: 'शैक्षणिक गतिविधियाँ', category: 'दस्तावेज', date: '2026-01-05', letterNumber: '102/2026' },
  { id: 3, title: 'बैठक कार्यवाही', category: 'प्रस्ताव', date: '2025-12-20', letterNumber: '100/2025' },
];

const categories = ['सभी', 'आदेश', 'दस्तावेज', 'प्रस्ताव', 'अन्य'];

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">पत्र / आदेश / दस्तावेज</h1>
          <p className="opacity-80">आधिकारिक दस्तावेज़ संग्रह</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button key={cat} className="px-4 py-2 bg-white rounded-lg text-sm font-medium hover:bg-[#C05621] hover:text-white transition-colors border">
                {cat}
              </button>
            ))}
          </div>

          {/* Documents Table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">दस्तावेज़ नाम</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">पत्र संख्या</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">श्रेणी</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">दिनांक</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-800 font-medium">{doc.title}</td>
                    <td className="px-6 py-4 text-[#C05621]">{doc.letterNumber}</td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-200 px-2 py-1 rounded text-xs">{doc.category}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{doc.date}</td>
                    <td className="px-6 py-4">
                      <button className="bg-[#C05621] text-white px-3 py-1 rounded text-sm hover:bg-[#9A441A]">
                        देखें
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
