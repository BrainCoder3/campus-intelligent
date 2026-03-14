"use client";

import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, ChevronRight, AlertCircle, RefreshCw } from 'lucide-react';

export default function SchedulePage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [scheduleAvailable, setScheduleAvailable] = useState(false);

  const mockSchedule = [
    { day: "Lundi", task: "Révision de Physique (Chapitre 4)", time: "08:00 - 10:00", type: "urgent", icon: <AlertCircle size={16} /> },
    { day: "Lundi", task: "TD Algorithmique Avancée", time: "14:00 - 16:00", type: "normal", icon: <Clock size={16} /> },
    { day: "Mardi", task: "Quiz IA : Intelligence Artificielle", time: "09:30 - 10:30", type: "ia", icon: <Sparkles size={16} /> },
    { day: "Mardi", task: "Projet de Développement Web", time: "14:00 - 18:00", type: "normal", icon: <Clock size={16} /> },
    { day: "Mercredi", task: "Renforcement Mathématiques (Séries)", time: "10:00 - 12:00", type: "urgent", icon: <AlertCircle size={16} /> },
    { day: "Jeudi", task: "Séminaire Cybersécurité", time: "09:00 - 12:00", type: "normal", icon: <Clock size={16} /> },
    { day: "Vendredi", task: "Révision Générale (Algorithmes de Tri)", time: "15:00 - 17:00", type: "ia", icon: <Sparkles size={16} /> },
  ];

  const handleGenerateSchedule = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setScheduleAvailable(true);
    }, 3000);
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'urgent': return "bg-danger/20 text-danger border border-danger/30";
      case 'ia': return "bg-secondary/20 text-secondary border border-secondary/30";
      default: return "bg-blue-600/20 text-blue-400 border border-blue-600/30";
    }
  };

  return (
    <div className="w-full animate-fade-in relative">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Calendar className="text-secondary" size={32} />
          Emploi du temps <span className="text-secondary">Intelligent</span>
        </h2>
        <p className="text-gray-400">L'IA de Campus-API calcule vos disponibilités et génère un planning optimisé pour combler vos lacunes.</p>
      </header>

      {!scheduleAvailable ? (
        <div className="glass-panel p-10 flex flex-col items-center justify-center text-center min-h-[500px] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10"></div>
          
          <div className="w-24 h-24 bg-blue-600/10 text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            <Calendar size={48} className="text-secondary" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Aucun planning actif</h3>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Autorisez l'IA à analyser vos notes, vos habitudes d'étude et la difficulté perçue des modules afin de générer un planning de révision parfait pour cette semaine.
          </p>
          
          <button 
            onClick={handleGenerateSchedule}
            disabled={isGenerating}
            className="btn-primary flex items-center gap-3 px-8 py-4 text-lg"
          >
            {isGenerating ? (
              <><RefreshCw size={24} className="animate-spin" /> Analyse des données algorithmiques...</>
            ) : (
              <><Sparkles size={24} /> Générer mon emploi du temps IA</>
            )}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 animate-fade-in">
          {/* Calendar List */}
          <div className="lg:col-span-2 space-y-4">
            {mockSchedule.map((item, idx) => (
              <div key={idx} className="glass-panel p-5 flex items-center justify-between border-l-4 border-l-secondary hover:border-l-blue-400 hover:bg-white/5 transition-all w-full group cursor-pointer">
                <div className="flex items-center gap-6">
                  {/* Day Date block */}
                  <div className="w-24 text-center">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{item.day}</p>
                    <p className="text-sm font-semibold text-white mt-1">{item.time}</p>
                  </div>
                  
                  {/* Task details */}
                  <div className="border-l border-white/10 pl-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-secondary transition-colors mb-2">{item.task}</h3>
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold ${getBadgeColor(item.type)}`}>
                      {item.icon} {item.type === 'ia' ? "Recommandé par l'IA" : item.type === 'urgent' ? "Priorité Haute" : "Cours Magistral"}
                    </div>
                  </div>
                </div>
                
                <ChevronRight className="text-gray-600 group-hover:text-white transition-colors" size={24} />
              </div>
            ))}
          </div>

          {/* AI Metrics Side panel */}
          <div className="glass-panel p-6 h-fit border border-secondary/20 shadow-[0_0_30px_rgba(0,229,255,0.05)] sticky top-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <CheckCircle2 className="text-green-400" size={24} />
              Bilan du Planning
            </h3>
            
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Charge de travail estimée</span>
                  <span className="font-bold text-white">28h</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full"><div className="h-full bg-blue-500 rounded-full w-[70%]"></div></div>
              </li>
              <li>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Temps dédié aux révisions IA</span>
                  <span className="font-bold text-secondary">8h</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full"><div className="h-full bg-secondary rounded-full w-[35%] shadow-[0_0_10px_#00e5ff]"></div></div>
              </li>
              <li>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Équilibre Vie/Études</span>
                  <span className="font-bold text-green-400">Optimal</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full"><div className="h-full bg-green-500 rounded-full w-[90%]"></div></div>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400 italic mb-4">"J'ai privilégié le renforcement en Mathématiques Séries ce Mercredi car vos derniers quiz montraient une note moyenne de 11/20." - Campus API</p>
              <button 
                 onClick={() => setScheduleAvailable(false)}
                 className="w-full py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-colors font-medium text-sm"
              >
                Générer un nouveau planning
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
