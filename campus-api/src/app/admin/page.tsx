"use client";

import React, { useState } from 'react';
import { FileText, Download, Clock, Loader2, CheckCircle2 } from 'lucide-react';

export default function AdminPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDoc, setGeneratedDoc] = useState<string | null>(null);

  const documentTypes = [
    { id: 'scolarite', name: 'Certificat de Scolarité', time: 'Immédiat' },
    { id: 'inscription', name: 'Attestation d\'Inscription', time: 'Immédiat' },
    { id: 'releve', name: 'Relevé de notes global', time: 'Immédiat' },
    { id: 'stage', name: 'Convention de Stage', time: '1 à 2 jours' },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI processing / Backend generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedDoc('Le document a été généré avec succès par l\'IA avec une signature électronique validée.');
    }, 2500);
  };

  return (
    <div className="w-full animate-fade-in">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <FileText className="text-danger" size={32} />
          Documents <span className="text-danger">Administratifs</span>
        </h2>
        <p className="text-gray-400">Demandez et générez vos attestations instantanément grâce à notre assistant numérique.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Document Selection */}
        <div className="glass-panel p-6">
          <h3 className="text-xl font-bold text-white mb-6">Type de Document</h3>
          
          <div className="space-y-4">
            {documentTypes.map((doc) => (
              <div key={doc.id} className="group relative glass-panel p-4 cursor-pointer hover:bg-white/5 border border-white/5 transition-colors">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{doc.name}</h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <Clock size={12} /> {doc.time}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border border-gray-500 group-hover:border-secondary transition-colors"></div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full mt-6 btn-danger flex items-center justify-center gap-2 group"
          >
            {isGenerating ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              // <MagicWand size={20} className="group-hover:rotate-12 transition-transform" />
              // Using another icon as MagicWand is not universally supported in lucide-react without alias sometimes. We'll use FileText or Sparkles
              <span className="flex items-center gap-2">Générer avec l'IA</span>
            )}
          </button>
        </div>

        {/* AI Processing Status View */}
        <div className="glass-panel p-6 flex flex-col justify-center items-center text-center min-h-[400px] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-danger/10 rounded-full blur-[60px] -z-10"></div>
          
          {isGenerating ? (
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 border-4 border-t-danger border-r-danger/50 border-b-danger/10 border-l-danger/10 rounded-full animate-spin mb-6"></div>
              <h3 className="text-xl font-bold text-white mb-2">Génération en cours...</h3>
              <p className="text-gray-400 text-sm max-w-xs">L'IA rassemble vos données, prépare le modèle administratif et appose la certification.</p>
            </div>
          ) : generatedDoc ? (
            <div className="flex flex-col items-center animate-fade-in">
              <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Document Prêt !</h3>
              <p className="text-gray-400 text-sm max-w-xs mb-8">{generatedDoc}</p>
              
              <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors border border-white/10">
                <Download size={18} />
                Télécharger le PDF
              </button>
            </div>
          ) : (
             <div className="flex flex-col items-center opacity-50">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-6">
                <FileText size={32} className="text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Aucun document demandé</h3>
              <p className="text-gray-400 text-sm max-w-xs">Sélectionnez un type de document sur la gauche et cliquez sur Générer pour commencer.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
