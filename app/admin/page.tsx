"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface DashboardStats {
  notices: number;
  events: number;
  images: number;
  documents: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [stats, setStats] = useState<DashboardStats>({ notices: 0, events: 0, images: 0, documents: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch('/api/admin/session');
        if (res.ok) {
          setAuthenticated(true);
          // Load dashboard stats
          // In production, this would fetch from actual APIs
          setStats({ notices: 3, events: 1, images: 0, documents: 0 });
        } else {
          setAuthenticated(false);
          router.push('/admin/login');
        }
      } catch {
        setAuthenticated(false);
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    }
    checkSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
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

  if (!authenticated) {
    return null;
  }

  const menuItems = [
    { href: '/admin/notices', icon: '📢', label: 'सूचनाएँ', count: stats.notices, color: 'from-orange-500 to-orange-600' },
    { href: '/admin/events', icon: '📅', label: 'कार्यक्रम', count: stats.events, color: 'from-blue-500 to-blue-600' },
    { href: '/admin/gallery', icon: '📸', label: 'गैलरी', count: stats.images, color: 'from-purple-500 to-purple-600' },
    { href: '/admin/documents', icon: '📄', label: 'दस्तावेज', count: stats.documents, color: 'from-emerald-500 to-emerald-600' },
    { href: '/admin/office-bearers', icon: '👥', label: 'पदाधिकारी', count: 6, color: 'from-amber-500 to-amber-600' },
    { href: '/admin/settings', icon: '⚙️', label: 'सेटिंग्स', count: 0, color: 'from-gray-500 to-gray-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold shadow">
                CAC
              </div>
              <div>
                <h1 className="font-bold text-gray-900">प्रशासन पैनल</h1>
                <p className="text-xs text-gray-500">सी.ए.सी. संघ पाटन</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/" target="_blank" className="text-sm text-gray-600 hover:text-orange-600">
                🌐 वेबसाइट देखें
              </Link>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                🚪 लॉगआउट
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">स्वागतम्! 🙏</h2>
          <p className="text-gray-600">संघ की वेबसाइट का प्रबंधन यहाँ से करें</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <div className="text-3xl font-bold text-orange-600">{stats.notices}</div>
            <div className="text-sm text-gray-600">सूचनाएँ</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <div className="text-3xl font-bold text-blue-600">{stats.events}</div>
            <div className="text-sm text-gray-600">कार्यक्रम</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <div className="text-3xl font-bold text-purple-600">{stats.images}</div>
            <div className="text-sm text-gray-600">तस्वीरें</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <div className="text-3xl font-bold text-emerald-600">{stats.documents}</div>
            <div className="text-sm text-gray-600">दस्तावेज</div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg hover:border-orange-200 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.label}</h3>
                  {item.count > 0 && (
                    <p className="text-sm text-gray-500">{item.count} आइटम</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
          <h3 className="font-semibold text-gray-900 mb-4">⚡ त्वरित कार्य</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/admin/notices/new" className="btn btn-primary text-sm">
              📢 नई सूचना
            </Link>
            <Link href="/admin/events/new" className="btn btn-secondary text-sm">
              📅 नया कार्यक्रम
            </Link>
            <Link href="/admin/gallery/upload" className="btn btn-secondary text-sm">
              📸 फोटो अपलोड
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
