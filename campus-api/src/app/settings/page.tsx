"use client";

import React from 'react';
import { Settings, Shield, Bell, User } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Settings className="text-gray-400" size={32} />
          Paramètres <span className="text-gray-400">du Compte</span>
        </h2>
        <p className="text-gray-400">Gérez vos préférences, la sécurité de votre compte et les notifications.</p>
      </header>

      <div className="space-y-6">
        {/* Profile */}
        <div className="glass-panel p-6 flex items-center justify-between border border-white/5">
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-secondary flex items-center justify-center">
               <User size={32} className="text-white" />
             </div>
             <div>
               <h3 className="text-xl font-bold text-white">Profil Étudiant</h3>
               <p className="text-gray-400 text-sm">Gérez vos informations personnelles</p>
             </div>
          </div>
          <button onClick={() => alert("Ouverture du panneau d'édition de profil...")} className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10">
            Modifier
          </button>
        </div>

        {/* Security */}
        <div className="glass-panel p-6 flex items-center justify-between border border-white/5">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-danger/20 flex items-center justify-center text-danger">
               <Shield size={24} />
             </div>
             <div>
               <h3 className="text-lg font-bold text-white">Sécurité et Mot de passe</h3>
               <p className="text-gray-400 text-sm">Authentification à double facteur (2FA)</p>
             </div>
          </div>
          <button onClick={() => alert("Configuration de l'authentification 2FA en cours...")} className="px-4 py-2 bg-danger/10 hover:bg-danger/20 text-danger rounded-lg transition-colors border border-danger/20">
            Configurer
          </button>
        </div>

        {/* Notifications */}
        <div className="glass-panel p-6 flex items-center justify-between border border-white/5">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
               <Bell size={24} />
             </div>
             <div>
               <h3 className="text-lg font-bold text-white">Notifications IA</h3>
               <p className="text-gray-400 text-sm">Alertes de révisions et documents générés</p>
             </div>
          </div>
          <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-secondary appearance-none cursor-pointer transform translate-x-6 transition-transform" defaultChecked onChange={(e) => {
                 if(e.target.checked) alert("Notifications d'IA activées !");
                 else alert("Notifications d'IA désactivées !");
              }}/>
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-secondary cursor-pointer"></label>
          </div>
        </div>
      </div>
    </div>
  );
}
