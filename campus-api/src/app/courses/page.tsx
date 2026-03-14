import React from 'react';
import { BookOpen, Video, Download, PlayCircle, Clock } from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      title: "Architecture Logicielle & Micro-services",
      module: "Génie Logiciel Avancé",
      progress: 75,
      type: "pdf",
      duration: "1h 30m"
    },
    {
      title: "Générer des modèles IA avec Mistral",
      module: "Intelligence Artificielle",
      progress: 30,
      type: "video",
      duration: "45m"
    },
    {
      title: "Déploiement Cloud Sécurisé",
      module: "Cybersécurité",
      progress: 100,
      type: "pdf",
      duration: "2h 15m"
    },
    {
      title: "Analyse des données massives",
      module: "Big Data",
      progress: 10,
      type: "video",
      duration: "3h 00m"
    }
  ];

  return (
    <div className="w-full">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <BookOpen className="text-blue-500" size={32} />
            Mes <span className="text-blue-500">Cours</span>
          </h2>
          <p className="text-gray-400">Accédez à votre bibliothèque pédagogique personnelle.</p>
        </div>
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="Rechercher un cours..." 
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors focus:shadow-[0_0_10px_rgba(37,99,235,0.3)]"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {courses.map((course, idx) => (
          <div key={idx} className="glass-panel group overflow-hidden flex flex-col cursor-pointer border hover:border-blue-500/50">
            {/* Thumbnail Header */}
            <div className={`h-32 p-4 relative flex items-end justify-between ${course.type === 'video' ? 'bg-gradient-to-br from-purple-600/30 to-black' : 'bg-gradient-to-br from-blue-600/30 to-black'}`}>
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-lg backdrop-blur-md">
                {course.type === 'video' ? <Video size={18} className="text-purple-400" /> : <BookOpen size={18} className="text-blue-400" />}
              </div>
              <span className="text-xs font-semibold text-white bg-black/50 px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
                <Clock size={12} /> {course.duration}
              </span>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between relative relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-[30px] -z-10 group-hover:bg-blue-600/20 transition-all"></div>
              
              <div>
                <p className="text-xs text-blue-400 font-semibold mb-1 uppercase tracking-wider">{course.module}</p>
                <h3 className="text-lg font-bold text-white mb-4 line-clamp-2">{course.title}</h3>
              </div>
              
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Progression</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-5">
                   <div 
                    className="h-full bg-blue-500 rounded-full relative" 
                    style={{ width: `${course.progress}%` }}
                   >
                     <div className="absolute top-0 right-0 w-2 h-full bg-white opacity-50 shadow-[0_0_5px_white]"></div>
                   </div>
                </div>

                <button className={`w-full py-2 flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all ${
                  course.type === 'video' 
                    ? 'bg-purple-600/20 text-purple-300 hover:bg-purple-600/40 border border-purple-500/30' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                }`}>
                  {course.type === 'video' ? (
                    <><PlayCircle size={16} /> Reprendre la lecture</>
                  ) : (
                    <><Download size={16} /> Télécharger le PDF</>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
