"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  published: boolean;
}

export default function AdminEventsPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch('/api/admin/session');
        if (res.ok) {
          setAuthenticated(true);
          setEvents([
            { id: 1, title: 'शिक्षक दिवस समारोह', date: '2026-09-05', venue: 'पाटन ब्लॉक कार्यालय', published: true },
          ]);
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
            <h1 className="font-bold text-gray-900">📅 कार्यक्रम</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">सभी कार्यक्रम</h2>
          <button className="btn btn-primary">➕ नया कार्यक्रम</button>
        </div>

        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">📅 {event.date} | 📍 {event.venue}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {event.published ? 'प्रकाशित' : 'ड्राफ्ट'}
                </span>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-lg text-sm">✏️ संपादन</button>
                <button className="px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg text-sm">🗑️ हटाएं</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
