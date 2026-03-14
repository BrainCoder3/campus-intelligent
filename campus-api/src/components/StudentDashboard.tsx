import React from 'react';
import Link from 'next/link';
import { BookOpen, Target, BrainCircuit, Zap, ArrowRight, Sparkles } from 'lucide-react';

export default function StudentDashboard() {
  const aiRecommendations = [
    { title: "Révision de base", subject: "Physique Quantique", urgency: "Haute", color: "danger" },
    { title: "Renforcer les exercices", subject: "Mathématiques", urgency: "Moyenne", color: "blue" },
    { title: "Maintenir le cap", subject: "Programmation C", urgency: "Basse", color: "secondary" }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-white mb-1">
            Bonjour, <span className="text-secondary">Étudiant</span>
          </h2>
          <p className="text-gray-400">Voici votre analyse académique basée sur l'IA.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/performance" className="glass-panel p-3 text-gray-300 hover:text-white rounded-xl transition-all">
            <Zap size={20} />
          </Link>
          <Link href="/revisions" className="flex items-center gap-2 btn-primary rounded-xl">
            <Sparkles size={18} />
            <span>Générer un Quiz IA</span>
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Performance Overview (Takes up 2 columns) */}
        <div className="lg:col-span-2 glass-panel p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10 group-hover:bg-blue-600/20 transition-all duration-500"></div>
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Target className="text-secondary" size={20} />
                Progression Globale
              </h3>
              <p className="text-sm text-gray-400 flex max-w-md">
                L'Intelligence Artificielle a analysé vos dernières évaluations. Vous êtes sur une excellente dynamique de progression globale.
              </p>
            </div>
            <div className="text-right">
              <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                14.5
              </span>
              <p className="text-xs text-secondary mt-1 tracking-wider uppercase font-semibold">Moyenne Estimée</p>
            </div>
          </div>

          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
            <div className="absolute top-0 left-0 h-full w-[72%] bg-gradient-to-r from-blue-600 to-secondary rounded-full relative">
              <div className="absolute top-0 right-0 w-4 h-full bg-white opacity-30 shadow-[0_0_10px_white]"></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Début du semestre</span>
            <span>Objectif: 16.0</span>
          </div>
        </div>

        {/* AI Quick Stats */}
        <div className="glass-panel p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] -z-10 group-hover:bg-secondary/20 transition-all duration-500"></div>
          
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-secondary/20 border border-secondary/30 flex items-center justify-center mb-4">
            <BrainCircuit size={32} className="text-secondary animate-pulse" />
          </div>
          <h4 className="text-white font-semibold text-lg">Prêt pour l'examen</h4>
          <p className="text-sm text-gray-400 mt-2 mb-4">Basé sur vos 4 derniers quiz interactifs, votre taux de réussite est de 85%.</p>
          <Link href="/performance" className="mt-auto pt-4 w-full block text-center py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white font-medium transition-all duration-200 border border-white/5">
            Voir l'analyse détaillée
          </Link>
        </div>
      </div>

      {/* AI Recommendations Section */}
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Sparkles className="text-yellow-400" size={20} />
        Recommandations IA
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiRecommendations.map((rec, idx) => {
           let bgGlow = "bg-blue-600/20";
           let textColor = "text-blue-400";
           let borderColor = "border-blue-500/30";
           
           if (rec.color === 'danger') {
             bgGlow = "bg-danger/10 group-hover:bg-danger/20";
             textColor = "text-danger";
             borderColor = "border-danger/30";
           } else if (rec.color === "secondary") {
             bgGlow = "bg-secondary/10 group-hover:bg-secondary/20";
             textColor = "text-secondary";
             borderColor = "border-secondary/30";
           }

           return (
             <div key={idx} className={`glass-panel p-5 group cursor-pointer border ${borderColor} hover:border-${rec.color}-500/50`}>
               <div className="flex justify-between items-start mb-4">
                 <div className={`px-2 py-1 rounded text-xs font-semibold ${bgGlow} ${textColor} uppercase tracking-wide`}>
                   {rec.urgency}
                 </div>
                 <div className={`p-1.5 rounded-lg ${bgGlow}`}>
                   <BookOpen size={16} className={textColor} />
                 </div>
               </div>
               <h4 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                 {rec.subject}
               </h4>
               <p className="text-sm text-gray-400">{rec.title}</p>
               
               <Link href="/courses" className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between hover:opacity-80 transition-opacity">
                 <span className={`text-xs font-medium ${textColor}`}>Voir le plan</span>
                 <ArrowRight size={16} className={`${textColor} transform group-hover:translate-x-1 transition-transform`} />
               </Link>
             </div>
           );
        })}
      </div>
    </div>
  );
}
