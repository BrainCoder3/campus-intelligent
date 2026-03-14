"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Brain, Activity, Settings, LogOut, FileText, Calendar } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: <Home size={20} />, label: 'Tableau de Bord', path: '/' },
    { icon: <Calendar size={20} />, label: 'Emploi du temps', path: '/schedule' },
    { icon: <BookOpen size={20} />, label: 'Mes Cours', path: '/courses' },
    { icon: <Brain size={20} />, label: 'Révisions IA', path: '/revisions' },
    { icon: <Activity size={20} />, label: 'Performances', path: '/performance' },
    { icon: <FileText size={20} />, label: 'Documents Admin', path: '/admin' },
  ];

  const bottomItems = [
    { icon: <Settings size={20} />, label: 'Paramètres', path: '/settings' },
    { icon: <LogOut size={20} />, label: 'Déconnexion', path: '/logout' },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 p-6 flex flex-col glass-panel border-l-0 border-y-0 border-r border-white/5 z-40 rounded-none rounded-r-3xl">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-3 mb-10 pl-2 cursor-pointer group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:scale-110 transition-transform duration-300">
          <Brain className="text-white" size={24} />
        </div>
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Campus<span className="text-secondary">API</span>
        </h1>
      </Link>

      {/* Main Nav */}
      <nav className="flex-1">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 pl-2">Menu Principal</p>
        <ul className="space-y-2">
          {menuItems.map((item, idx) => {
            const isActive = pathname === item.path;
            return (
              <li key={idx}>
                <Link 
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600/20 to-secondary/10 text-secondary border border-secondary/20 shadow-[inset_0_0_10px_rgba(0,229,255,0.1)]' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-secondary ml-auto shadow-[0_0_5px_#00e5ff] animate-pulse"></div>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Nav */}
      <div className="mt-auto pt-8 border-t border-white/5">
        <ul className="space-y-2">
          {bottomItems.map((item, idx) => (
            <li key={idx}>
              <Link 
                href={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 transition-all duration-300 hover:text-danger hover:bg-danger/10 group"
              >
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
