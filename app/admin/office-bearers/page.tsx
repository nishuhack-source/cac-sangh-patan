"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface OfficeBearer {
  id: number;
  designation: string;
  name: string;
  mobile: string | null;
}

const defaultBearers: OfficeBearer[] = [
  { id: 1, designation: 'संरक्षक', name: 'विकासखंड शिक्षा अधिकारी, पाटन', mobile: null },
  { id: 2, designation: 'ब्लॉक अध्यक्ष', name: 'श्री महेंद्र बहादुर', mobile: '+91 9039790762' },
  { id: 3, designation: 'उपाध्यक्ष', name: 'श्री अशोक सिन्हा', mobile: null },
  { id: 4, designation: 'सचिव', name: 'श्री टिकेश्वर गजपाल', mobile: null },
  { id: 5, designation: 'सहसचिव', name: 'श्रीमती योगिता साहू', mobile: null },
  { id: 6, designation: 'कोषाध्यक्ष', name: 'श्री हरिशंकर देवांगन', mobile: null },
];

export default function AdminOfficeBearersPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [bearers, setBearers] = useState<OfficeBearer[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<OfficeBearer>>({});

  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch('/api/admin/session');
        if (res.ok) {
          setAuthenticated(true);
          setBearers(defaultBearers);
          setLoading(false);
        } else {
          setAuthenticated(false);
          router.push('/admin/login');
        }
      } catch {
        setAuthenticated(false);
        router.push('/admin/login');
      }
    }
    checkSession();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const startEdit = (bearer: OfficeBearer) => {
    setEditingId(bearer.id);
    setFormData({ ...bearer });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({});
  };

  const saveEdit = () => {
    if (editingId && formData) {
      setBearers(prev => prev.map(b => 
        b.id === editingId ? { ...b, ...formData } : b
      ));
    }
    setEditingId(null);
    setFormData({});
  };

  const formatMobileForDisplay = (mobile: string | null) => {
    if (!mobile) return '-';
    return mobile.startsWith('+91') ? mobile : `+91 ${mobile}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">लोड हो रहा है...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Link href="/admin" className="text-gray-600 hover:text-orange-600">
                ← डैशबोर्ड
              </Link>
              <span className="text-gray-300">|</span>
              <h1 className="font-bold text-gray-900">👥 पदाधिकारी</h1>
            </div>
            <button onClick={handleLogout} className="text-sm text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg">
              लॉगआउट
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">पदाधिकारी प्रबंधन</h2>
          <p className="text-gray-600 text-sm mt-1">नाम और संपर्क जानकारी अपडेट करें</p>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <h3 className="font-medium text-blue-800 mb-1">📌 निर्देश</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• नाम और मोबाइल नंबर बदलने के लिए "संपादन" पर क्लिक करें</li>
            <li>• मोबाइल नंबर +91 के साथ दर्ज करें (जैसे: +91 9039790762)</li>
            <li>• पद बदलने के लिए कृपया प्रशासक से संपर्क करें</li>
          </ul>
        </div>

        {/* Bearers Grid */}
        <div className="space-y-4">
          {bearers.map((bearer) => (
            <div 
              key={bearer.id}
              className="bg-white rounded-xl shadow-sm border overflow-hidden"
            >
              {editingId === bearer.id ? (
                // Edit Mode
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#172554] mb-4">{bearer.designation}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">नाम</label>
                      <input 
                        type="text"
                        value={formData.name || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">मोबाइल नंबर (+91 के साथ)</label>
                      <input 
                        type="tel"
                        value={formData.mobile || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button 
                      onClick={cancelEdit}
                      className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      रद्द करें
                    </button>
                    <button 
                      onClick={saveEdit}
                      className="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg"
                    >
                      सहेजें
                    </button>
                  </div>
                </div>
              ) : (
                // View Mode
                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-[#172554] text-white px-2 py-0.5 rounded-full">
                        #{bearer.id}
                      </span>
                      <h3 className="text-lg font-bold text-[#172554]">{bearer.designation}</h3>
                    </div>
                    <p className="text-gray-900 font-medium">{bearer.name}</p>
                    <div className="mt-1">
                      {bearer.mobile ? (
                        <span className="inline-flex items-center gap-1 text-green-700 text-sm bg-green-50 px-2 py-1 rounded">
                          📞 {bearer.mobile}
                        </span>
                      ) : (
                        <span className="text-gray-400 text-sm">संपर्क जानकारी उपलब्ध नहीं</span>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => startEdit(bearer)}
                    className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg text-sm font-medium border border-orange-200 whitespace-nowrap"
                  >
                    ✏️ संपादन
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Media Prabhari */}
        <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200">
          <h3 className="font-bold text-orange-800 mb-2">📰 मीडिया प्रभारी</h3>
          <p className="text-gray-700">नितेश कुमार साहू</p>
          <p className="text-gray-600 text-sm mt-1">📞 +91 8120397425</p>
          <p className="text-gray-500 text-xs mt-2">मीडिया प्रभारी की जानकारी बदलने के लिए प्रशासक से संपर्क करें।</p>
        </div>
      </main>
    </div>
  );
}
