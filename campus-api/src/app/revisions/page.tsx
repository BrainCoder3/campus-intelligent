"use client";

import React, { useState } from 'react';
import { Brain, Search, CheckCircle, Zap, Sparkles } from 'lucide-react';

export default function RevisionsPage() {
  const [topic, setTopic] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);

  const recommendedTopics = ['Algorithmique Avancée', 'Probabilités CPT', 'Architecture Réseau'];

  const quizQuestions = [
    { q: "Quelle est la principale différence entre une adresse MAC et une adresse IP ?", options: ["Couche physique vs réseau", "Fixe vs dynamique", "Aucune différence"] },
    { q: "Quel algorithme de tri parmi les suivants a la pire complexité temporelle ?", options: ["Quick Sort", "Bubble Sort", "Merge Sort"] }
  ];

  return (
    <div className="w-full">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Brain className="text-secondary" size={32} />
          Révisions <span className="text-secondary">Intelligentes</span>
        </h2>
        <p className="text-gray-400">Demandez à l'IA de générer des quiz spécifiques ou révisez selon vos lacunes détectées.</p>
      </header>

      {!quizStarted ? (
        <div className="flex flex-col gap-8">
          {/* Quick Start / AI search */}
          <div className="glass-panel p-8 relative overflow-hidden">
            <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]"></div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Que voulez-vous réviser aujourd'hui ?</h3>
            
            <div className="relative mb-6">
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ex: Les algorithmes de tri, Les requêtes SQL JOINS..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors"
                autoComplete="off"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              
              <button 
                onClick={() => setQuizStarted(true)}
                disabled={!topic.trim()}
                className={`absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg font-medium transition-all ${
                  topic.trim() ? "bg-gradient-to-r from-blue-600 to-secondary text-white shadow-[0_0_10px_rgba(0,229,255,0.4)]" : "bg-white/5 text-gray-500 cursor-not-allowed"
                }`}
              >
                Générer (IA)
              </button>
            </div>

            {/* Smart Suggestions */}
            <div>
              <p className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-yellow-400" /> Suggestions de l'IA basées sur vos faiblesses
              </p>
              <div className="flex flex-wrap gap-3">
                {recommendedTopics.map((t, idx) => (
                  <button 
                    key={idx}
                    onClick={() => { setTopic(t); setQuizStarted(true); }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 text-blue-400 text-sm hover:bg-blue-600/20 transition-all bg-white/5"
                  >
                    <Zap size={14} /> {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Active Quiz UI */
        <div className="glass-panel p-8 animate-fade-in relative z-10 border border-secondary/50 shadow-[0_0_30px_rgba(0,229,255,0.1)]">
           <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
             <div>
               <h3 className="text-2xl font-bold text-white.">Sujet : {topic}</h3>
               <p className="text-secondary text-sm font-semibold tracking-wider mt-1">GÉNÉRÉ PAR L'IA</p>
             </div>
             <button onClick={() => setQuizStarted(false)} className="text-sm text-gray-400 hover:text-white transition-colors">Retour</button>
           </div>
           
           <div className="space-y-6">
             {quizQuestions.map((item, qIndex) => (
                <div key={qIndex} className="bg-white/5 p-6 rounded-xl border border-white/5">
                  <h4 className="text-lg text-white font-medium mb-4 flex gap-3">
                    <span className="text-secondary font-bold">Q{qIndex + 1}.</span> {item.q}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.options.map((opt, oIndex) => (
                      <button key={oIndex} className="bg-black/30 hover:bg-white/10 border border-transparent hover:border-white/20 p-4 rounded-lg text-left text-gray-300 transition-colors flex items-center gap-3 group">
                        <div className="w-5 h-5 rounded-full border border-gray-500 group-hover:border-secondary flex-shrink-0"></div>
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>
                </div>
             ))}
           </div>
           
           <div className="mt-8 flex justify-end">
             <button className="btn-primary">Valider les réponses</button>
           </div>
        </div>
      )}
    </div>
  );
}
