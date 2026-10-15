"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDocumentsPage() {
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
            <h1 className="font-bold text-gray-900">📄 दस्तावेज</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">दस्तावेज़ प्रबंधन</h2>
          <button className="btn btn-primary">⬆️ दस्तावेज़ अपलोड करें</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center text-3xl">📄</div>
          <h3 className="font-semibold text-gray-900 mb-2">अभी तक कोई दस्तावेज़ नहीं है</h3>
          <p className="text-gray-500 text-sm mb-4">PDFs, पत्र, आदेश और अन्य दस्तावेज़ यहाँ अपलोड करें</p>
          <button className="btn btn-primary">⬆️ पहला दस्तावेज़ अपलोड करें</button>
        </div>
      </main>
    </div>
  );
}
