"use client";

import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, ChevronRight, AlertCircle, RefreshCw, SlidersHorizontal, ArrowRight } from 'lucide-react';

export default function SchedulePage() {
  const [phase, setPhase] = useState<'form' | 'generating' | 'result'>('form');

  // Form State
  const [preferences, setPreferences] = useState({
    hoursPerDay: 4,
    focusModule: 'Physique Algorithmique',
    intensity: 'Équilibrée',
  });

  const mockSchedule = [
    { day: "Lundi", task: `Concentration Intensive : ${preferences.focusModule}`, time: "08:00 - 10:00", type: "urgent", icon: <AlertCircle size={16} /> },
    { day: "Lundi", task: "TD Développement Web", time: "14:00 - 16:00", type: "normal", icon: <Clock size={16} /> },
    { day: "Mardi", task: "Quiz IA : Intelligence Artificielle", time: "09:30 - 10:30", type: "ia", icon: <Sparkles size={16} /> },
    { day: "Mardi", task: "Projet de Synthèse", time: "14:00 - 18:00", type: "normal", icon: <Clock size={16} /> },
    { day: "Mercredi", task: `Renforcement : Base de données`, time: "10:00 - 12:00", type: "urgent", icon: <AlertCircle size={16} /> },
    { day: "Jeudi", task: "Séminaire Cybersécurité", time: "09:00 - 12:00", type: "normal", icon: <Clock size={16} /> },
    { day: "Vendredi", task: `Révision Analytique IA (${preferences.intensity})`, time: "15:00 - 17:00", type: "ia", icon: <Sparkles size={16} /> },
  ];

  const handleGenerateSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    setPhase('generating');
    setTimeout(() => {
      setPhase('result');
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
        <p className="text-gray-400">Configurez vos préférences et laissez l'IA organiser votre semaine de révision.</p>
      </header>

      {phase === 'form' && (
        <form onSubmit={handleGenerateSchedule} className="glass-panel p-8 max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10 animate-pulse-glow"></div>
          
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
             <SlidersHorizontal className="text-secondary" size={24} />
             <h3 className="text-2xl font-bold text-white">Paramètres IA de génération</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Module à prioriser (Faiblesse détectée ou choix libre)</label>
              <select 
                value={preferences.focusModule}
                onChange={(e) => setPreferences({...preferences, focusModule: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
              >
                <option value="Physique Quantique" className="bg-gray-800">Physique Quantique (Recommandation IA)</option>
                <option value="Algorithmique Avancée" className="bg-gray-800">Algorithmique Avancée</option>
                <option value="Intelligence Artificielle" className="bg-gray-800">Intelligence Artificielle</option>
                <option value="Cybersécurité Réseau" className="bg-gray-800">Cybersécurité Réseau</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Heures de travail personnel par jour : <span className="text-secondary font-bold">{preferences.hoursPerDay}h</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="8" 
                value={preferences.hoursPerDay}
                onChange={(e) => setPreferences({...preferences, hoursPerDay: parseInt(e.target.value)})}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Léger (1h)</span>
                <span>Intense (8h)</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Intensité du rythme hebdomadaire</label>
              <div className="flex gap-4">
                {['Relaxé', 'Équilibrée', 'Intensif', 'Période d\'Examen'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setPreferences({...preferences, intensity: lvl})}
                    className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-all ${
                      preferences.intensity === lvl 
                      ? 'bg-secondary/20 border-secondary text-secondary shadow-[0_0_10px_rgba(0,229,255,0.3)]' 
                      : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-10 btn-primary flex items-center justify-center gap-2 py-4 text-lg group"
          >
            <Sparkles size={20} /> Optimiser et Générer mon emploi du temps
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}

      {phase === 'generating' && (
        <div className="glass-panel p-10 flex flex-col items-center justify-center text-center min-h-[500px] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10"></div>
          
          <div className="w-24 h-24 text-secondary rounded-full flex items-center justify-center mb-6">
            <RefreshCw size={56} className="animate-spin" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 animate-pulse">L'IA analyse vos contraintes...</h3>
          <p className="text-gray-400 max-w-sm mx-auto mb-8">
             Croisement de vos disponibilités avec votre baisse de régime en {preferences.focusModule} et calcul des créneaux de mémorisation espacée.
          </p>
        </div>
      )}

      {phase === 'result' && (
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
                  <div className="border-l border-white/10 pl-6 w-full max-w-sm">
                    <h3 className="font-bold text-white group-hover:text-secondary transition-colors mb-2 leading-tight">{item.task}</h3>
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
              Aperçu Pédagogique
            </h3>
            
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Charge {preferences.intensity} Estimée</span>
                  <span className="font-bold text-white">{preferences.hoursPerDay * 5}h / sem</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${(preferences.hoursPerDay / 8) * 100}%`}}></div></div>
              </li>
              <li>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Focus {preferences.focusModule}</span>
                  <span className="font-bold text-secondary">Élevé</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full"><div className="h-full bg-secondary rounded-full w-[85%] shadow-[0_0_10px_#00e5ff]"></div></div>
              </li>
              <li>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Santé / Équilibre</span>
                  <span className="font-bold text-green-400">Optimal</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full"><div className="h-full bg-green-500 rounded-full" style={{ width: `${100 - (preferences.hoursPerDay * 5)}%`}}></div></div>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400 italic mb-4">"J'ai organisé un planning respectant votre limite de {preferences.hoursPerDay}h/jour tout en concentrant les efforts sur vos lacunes en {preferences.focusModule}." - IA Campus API</p>
              <button 
                 onClick={() => setPhase('form')}
                 className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-colors font-medium text-sm flex items-center justify-center gap-2"
              >
                <SlidersHorizontal size={16} /> Reconfigurer le planning
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
