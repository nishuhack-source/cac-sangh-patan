"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminSettingsPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch('/api/admin/session');
        if (res.ok) {
          setAuthenticated(true);
          setLoading(false);
        } else {
          router.push('/admin/login');
        }
      } catch {
        router.push('/admin/login');
      }
    }
    checkSession();
  }, [router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-gray-600 hover:text-orange-600">← डैशबोर्ड</Link>
            <span className="text-gray-300">|</span>
            <h1 className="font-bold text-gray-900">⚙️ सेटिंग्स</h1>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">प्रशासनिक सेटिंग्स</h2>

        <div className="space-y-6">
          {/* Password Change */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="font-semibold text-gray-900 mb-4">🔐 पासवर्ड बदलें</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">वर्तमान पासवर्ड</label>
                <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2.5" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">नया पासवर्ड</label>
                <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2.5" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">नया पासवर्ड (पुष्टि)</label>
                <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2.5" placeholder="••••••••" />
              </div>
              <button className="btn btn-primary">पासवर्ड अपडेट करें</button>
            </div>
          </div>

          {/* Contact Email */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="font-semibold text-gray-900 mb-4">📧 संपर्क ईमेल</h3>
            <p className="text-gray-600 text-sm mb-4">वेबसाइट पर दिखाया जाने वाला संपर्क ईमेल</p>
            <div className="flex gap-3">
              <input type="email" className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5" defaultValue="cacsinghpatan@gmail.com" />
              <button className="btn btn-primary">सहेजें</button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 rounded-xl border border-red-200 p-6">
            <h3 className="font-semibold text-red-800 mb-4">⚠️ खतरे का क्षेत्र</h3>
            <p className="text-red-600 text-sm mb-4">निम्नलिखित क्रियाएँ अपरिवर्तनीय हैं।</p>
            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200">
              🗑️ सभी डेटा हटाएं
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
