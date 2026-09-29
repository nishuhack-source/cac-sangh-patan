import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const menuItems = [
  { icon: '🏠', label: 'Homepage', href: '/admin' },
  { icon: '👤', label: 'पदाधिकारी', href: '/admin/bearers' },
  { icon: '📰', label: 'सूचनाएँ', href: '/admin/notices' },
  { icon: '📑', label: 'समाचार', href: '/admin/news' },
  { icon: '📄', label: 'दस्तावेज़', href: '/admin/documents' },
  { icon: '📅', label: 'कार्यक्रम', href: '/admin/events' },
  { icon: '🖼️', label: 'गैलरी', href: '/admin/gallery' },
  { icon: '🎬', label: 'वीडियो', href: '/admin/videos' },
  { icon: '⬇️', label: 'डाउनलोड', href: '/admin/downloads' },
  { icon: '🔗', label: 'लिंक', href: '/admin/links' },
  { icon: '📞', label: 'संपर्क', href: '/admin/contact' },
  { icon: '⚙️', label: 'सेटिंग्स', href: '/admin/settings' },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navigation />
      
      <section className="bg-[#1E3A5F] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="opacity-80">संघ प्रबंधन पैनल</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Stats */}
          <div className="grid sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-2xl font-bold text-[#C05621]">4</p>
              <p className="text-sm text-gray-600">पदाधिकारी</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-2xl font-bold text-[#1E3A5F]">3</p>
              <p className="text-sm text-gray-600">सूचनाएँ</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-2xl font-bold text-green-600">2</p>
              <p className="text-sm text-gray-600">समाचार</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-2xl font-bold text-[#F59E0B]">1</p>
              <p className="text-sm text-gray-600">कार्यक्रम</p>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-bold mb-4 text-gray-800">प्रबंधन मेन्यू</h2>
            <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4">
              {menuItems.map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#C05621] hover:text-white transition-colors group"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-yellow-800 text-sm">
              ⚠️ यह एक demonstration admin panel है। पूर्ण CRUD functionality के लिए database और authentication setup आवश्यक है।
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
