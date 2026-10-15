"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  // Static admin panel - no authentication required for demo
  // In production, connect to external CMS or add Cloudflare Workers backend
  
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold text-[#1E3A5F]">
            ← सी.ए.सी. संघ पाटन
          </Link>
          <span className="text-sm text-gray-500">Admin Panel</span>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2a4a6f] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">📊 Admin Dashboard</h1>
          <p className="opacity-80 mt-1">संघ प्रबंधन पैनल - CEC Sangh Patan</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[#C05621]">
            <p className="text-3xl font-bold text-[#C05621]">6+</p>
            <p className="text-sm text-gray-600 mt-1">पदाधिकारी (Office Bearers)</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[#1E3A5F]">
            <p className="text-3xl font-bold text-[#1E3A5F]">3+</p>
            <p className="text-sm text-gray-600 mt-1">सूचनाएँ (Notices)</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
            <p className="text-3xl font-bold text-green-500">2+</p>
            <p className="text-sm text-gray-600 mt-1">कार्यक्रम (Events)</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-amber-500">
            <p className="text-3xl font-bold text-amber-500">1+</p>
            <p className="text-sm text-gray-600 mt-1">दस्तावेज़ (Documents)</p>
          </div>
        </div>

        {/* Management Menu */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-lg font-bold mb-4 text-gray-800">📋 प्रबंधन मेन्यू</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link href="/office-bearers" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#C05621] hover:text-white transition-all duration-200 group">
              <span className="text-2xl">👥</span>
              <div>
                <span className="font-medium block">पदाधिकारी</span>
                <span className="text-xs opacity-70">Office Bearers</span>
              </div>
            </Link>
            <Link href="/notices" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#C05621] hover:text-white transition-all duration-200 group">
              <span className="text-2xl">📰</span>
              <div>
                <span className="font-medium block">सूचनाएँ</span>
                <span className="text-xs opacity-70">Notices</span>
              </div>
            </Link>
            <Link href="/events" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#C05621] hover:text-white transition-all duration-200 group">
              <span className="text-2xl">📅</span>
              <div>
                <span className="font-medium block">कार्यक्रम</span>
                <span className="text-xs opacity-70">Events</span>
              </div>
            </Link>
            <Link href="/gallery" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#C05621] hover:text-white transition-all duration-200 group">
              <span className="text-2xl">🖼️</span>
              <div>
                <span className="font-medium block">गैलरी</span>
                <span className="text-xs opacity-70">Gallery</span>
              </div>
            </Link>
            <Link href="/documents" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#C05621] hover:text-white transition-all duration-200 group">
              <span className="text-2xl">📄</span>
              <div>
                <span className="font-medium block">दस्तावेज़</span>
                <span className="text-xs opacity-70">Documents</span>
              </div>
            </Link>
            <Link href="/contact" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#C05621] hover:text-white transition-all duration-200 group">
              <span className="text-2xl">📞</span>
              <div>
                <span className="font-medium block">संपर्क</span>
                <span className="text-xs opacity-70">Contact</span>
              </div>
            </Link>
            <Link href="/about" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#C05621] hover:text-white transition-all duration-200 group">
              <span className="text-2xl">ℹ️</span>
              <div>
                <span className="font-medium block">संघ परिचय</span>
                <span className="text-xs opacity-70">About</span>
              </div>
            </Link>
            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl opacity-50 cursor-not-allowed">
              <span className="text-2xl">⚙️</span>
              <div>
                <span className="font-medium block">सेटिंग्स</span>
                <span className="text-xs opacity-70">Settings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-medium text-blue-900">Admin Panel</p>
              <p className="text-sm text-blue-800 mt-1">
                यह एक static admin panel है। सभी public pages देखने के लिए ऊपर दिए गए links पर click करें।
                नए content के लिए Hermes से संपर्क करें।
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold text-gray-800 mb-3">🚀 Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+919039790762" className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              📞 अध्यक्ष से संपर्क करें
            </a>
            <a href="https://wa.me/919039790762" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E]">
              💬 WhatsApp
            </a>
            <a href="mailto:cacsinghpatan@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              ✉️ Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
