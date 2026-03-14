"use client";

import React from 'react';
import Link from 'next/link';
import { Activity, TrendingUp, TrendingDown, Target, Zap, Award } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function PerformancePage() {
  const stats = [
    { label: "Moyenne Générale", value: "14.5", change: "+1.2", positive: true, icon: <Target size={24} /> },
    { label: "Modules Validés", value: "6/8", change: "En cours", positive: true, icon: <Award size={24} /> },
    { label: "Temps d'étude hebdo", value: "24h", change: "-2h", positive: false, icon: <Clock size={24} /> },
    { label: "Quiz IA complétés", value: "15", change: "+4", positive: true, icon: <Zap size={24} /> },
  ];

  const subjects = [
    { name: "Algorithmique Avancée", score: 85, color: "bg-green-500" },
    { name: "Architecture Réseau", score: 62, color: "bg-yellow-500" },
    { name: "Intelligence Artificielle", score: 92, color: "bg-blue-500" },
    { name: "Physique Quantique", score: 45, color: "bg-danger" },
  ];

  const evolutionData = [
    { month: 'Sep', moyenne: 11.2 },
    { month: 'Oct', moyenne: 12.5 },
    { month: 'Nov', moyenne: 12.0 },
    { month: 'Déc', moyenne: 13.8 },
    { month: 'Jan', moyenne: 14.2 },
    { month: 'Fév', moyenne: 14.5 },
  ];

  return (
    <div className="w-full">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Activity className="text-secondary" size={32} />
          Analyse des <span className="text-secondary">Performances</span>
        </h2>
        <p className="text-gray-400">Suivi détaillé de vos aptitudes académiques généré par nos algorithmes.</p>
      </header>

      {/* Top Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-panel p-6 relative overflow-hidden group">
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[40px] opacity-20 -z-10 transition-transform ${stat.positive ? 'bg-secondary group-hover:scale-150' : 'bg-red-500 group-hover:scale-150'}`}></div>
            
            <div className="flex justify-between items-start mb-4 text-gray-400">
              <span className="text-sm font-semibold uppercase tracking-wider">{stat.label}</span>
              <div className="text-secondary">{stat.icon}</div>
            </div>
            
            <div className="flex items-end gap-3">
              <span className="text-4xl font-black text-white">{stat.value}</span>
              <span className={`text-sm font-bold flex items-center gap-1 mb-1 ${stat.positive ? 'text-green-400' : 'text-danger'}`}>
                {stat.positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Evolution Graph using Recharts */}
        <div className="glass-panel p-8 flex flex-col relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
           <h3 className="text-xl font-bold text-white mb-6">Courbe d'évolution générale</h3>
           <div className="w-full h-[280px]">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={evolutionData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                 <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                 <XAxis 
                   dataKey="month" 
                   stroke="rgba(255,255,255,0.3)" 
                   tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
                   tickLine={false} 
                   axisLine={false} 
                   dy={10} 
                 />
                 <YAxis 
                   domain={[8, 20]} 
                   stroke="rgba(255,255,255,0.3)" 
                   tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
                   tickLine={false} 
                   axisLine={false} 
                   dx={-10} 
                 />
                 <Tooltip 
                   contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '8px', color: '#fff' }}
                   itemStyle={{ color: '#00E5FF', fontWeight: 'bold' }}
                 />
                 <Line 
                   type="monotone" 
                   dataKey="moyenne" 
                   stroke="#00E5FF" 
                   strokeWidth={4} 
                   dot={{ fill: '#0F172A', stroke: '#00E5FF', strokeWidth: 3, r: 5 }} 
                   activeDot={{ r: 8, fill: '#FF3366', stroke: '#FF3366' }}
                 />
               </LineChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* AI Insight */}
        <div className="glass-panel p-8 flex flex-col justify-center border-l-4 border-l-secondary relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10"></div>
          
          <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center mb-6">
            <Zap size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Analyse Systémique (IA)</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            "Votre évolution montre une excellente dynamique ascendante depuis Novembre. Cependant, une baisse de performance est notée en <strong className="text-danger">Physique Quantique</strong> par rapport au reste du groupe. Nous avons automatiquement généré 3 nouveaux quiz ciblés sur ce chapitre pour corriger la courbe."
          </p>
          <Link href="/revisions" className="self-start px-6 py-3 border border-secondary/50 text-secondary font-medium rounded-xl hover:bg-secondary hover:text-black transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] inline-block">
            Voir le programme de remédiation
          </Link>
        </div>
      </div>

      {/* Module Breakdown */}
      <div className="glass-panel p-8">
        <h3 className="text-xl font-bold text-white mb-6">Répartition par Module</h3>
        
        <div className="space-y-6">
          {subjects.map((sub, idx) => (
             <div key={idx}>
               <div className="flex justify-between items-end mb-2">
                 <span className="text-white font-medium">{sub.name}</span>
                 <span className="text-gray-400 text-sm font-bold">{sub.score}%</span>
               </div>
               <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                 <div 
                   className={`h-full ${sub.color} relative transition-all duration-1000 ease-out`}
                   style={{ width: `${sub.score}%` }}
                 >
                   {/* Gloss effect */}
                   <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/40 to-transparent"></div>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Clock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
