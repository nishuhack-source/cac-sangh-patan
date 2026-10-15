"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Notice {
  id: number;
  title: string;
  date: string;
  important: boolean;
  published: boolean;
}

export default function AdminNoticesPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch('/api/admin/session');
        if (res.ok) {
          setAuthenticated(true);
          // Load notices (mock data for now)
          setNotices([
            { id: 1, title: 'मासिक बैठक की सूचना', date: '2026-01-15', important: true, published: true },
            { id: 2, title: 'शैक्षणिक कार्यक्रम आयोजन', date: '2026-01-10', important: false, published: true },
            { id: 3, title: 'वार्षिक रिपोर्ट प्रस्तुति', date: '2026-01-05', important: false, published: true },
          ]);
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

  const togglePublish = (id: number) => {
    setNotices(prev => prev.map(n => 
      n.id === id ? { ...n, published: !n.published } : n
    ));
  };

  const toggleImportant = (id: number) => {
    setNotices(prev => prev.map(n => 
      n.id === id ? { ...n, important: !n.important } : n
    ));
  };

  const deleteNotice = (id: number) => {
    if (confirm('क्या आप इस सूचना को हटाना चाहते हैं?')) {
      setNotices(prev => prev.filter(n => n.id !== id));
    }
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
              <h1 className="font-bold text-gray-900">📢 सूचनाएँ</h1>
            </div>
            <button onClick={handleLogout} className="text-sm text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg">
              लॉगआउट
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add New Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">सभी सूचनाएँ</h2>
          <button 
            onClick={() => setShowForm(true)}
            className="btn btn-primary"
          >
            ➕ नई सूचना
          </button>
        </div>

        {/* Notices List */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">शीर्षक</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">तारीख</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">महत्वपूर्ण</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">प्रकाशित</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">कार्य</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {notices.map((notice) => (
                  <tr key={notice.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">{notice.title}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{notice.date}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => toggleImportant(notice.id)}
                        className={`w-10 h-10 rounded-lg transition-colors ${
                          notice.important 
                            ? 'bg-red-100 text-red-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}
                        title={notice.important ? 'महत्वपूर्ण' : 'सामान्य'}
                      >
                        {notice.important ? '⚠️' : '○'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => togglePublish(notice.id)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          notice.published 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {notice.published ? '✓ प्रकाशित' : 'ड्राफ्ट'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button 
                          onClick={() => setEditingId(notice.id)}
                          className="px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-lg text-sm"
                        >
                          ✏️ संपादन
                        </button>
                        <button 
                          onClick={() => deleteNotice(notice.id)}
                          className="px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg text-sm"
                        >
                          🗑️ हटाएं
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {notices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">कोई सूचना नहीं मिली।</p>
              <button 
                onClick={() => setShowForm(true)}
                className="mt-4 text-orange-600 hover:underline"
              >
                पहली सूचना जोड़ें
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Add/Edit Modal */}
      {(showForm || editingId) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                {editingId ? 'सूचना संपादित करें' : 'नई सूचना जोड़ें'}
              </h3>
              <button 
                onClick={() => { setShowForm(false); setEditingId(null); }}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setShowForm(false); setEditingId(null); }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">शीर्षक</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                    placeholder="सूचना का शीर्षक..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">विवरण</label>
                  <textarea 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 h-32"
                    placeholder="सूचना का विवरण..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">तारीख</label>
                    <input 
                      type="date" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-sm text-gray-700">महत्वपूर्ण</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button 
                  type="button"
                  onClick={() => { setShowForm(false); setEditingId(null); }}
                  className="flex-1 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  रद्द करें
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg"
                >
                  सहेजें
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
