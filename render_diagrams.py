import base64
import zlib
import urllib.request
import os

diagrams = {
    "arch_system": """graph TD 
    subgraph "Couche Présentation (Frontend)" 
        A[Application Web - React/Next.js] 
        B[Application Mobile - Flutter] 
    end 
  
    subgraph "Couche Application (Backend)" 
        C[API Gateway / Express Server] 
        D[Gestion Authentification] 
        E[Logique Métier / Services] 
    end 
  
    subgraph "Couche Données & Services" 
        F[(Base de données PostgreSQL)] 
        G[(Cache/NoSQL MongoDB)] 
        H{API IA Externe - OpenAI/Claude} 
    end 
  
    A & B <-->|Requêtes HTTP/REST| C 
    C --> D 
    C --> E 
    E <--> F 
    E <--> G 
    E <-->|JSON Prompt/Response| H 
  
    style A fill:#f9f,stroke:#333,stroke-width:2px 
    style B fill:#f9f,stroke:#333,stroke-width:2px 
    style C fill:#bbf,stroke:#333,stroke-width:2px 
    style H fill:#dfd,stroke:#333,stroke-width:2px""",
    
    "seq_diagram": """sequenceDiagram 
    participant U as Étudiant 
    participant F as Frontend (React) 
    participant B as Backend (Node.js) 
    participant DB as Base de données 
    participant IA as API Intelligence Artificielle 
  
    U->>F: Clique sur "Générer un Quiz" 
    F->>B: POST /api/generate-quiz (Token + ID_Cours) 
    B->>DB: Récupérer contenu du cours 
    DB-->>B: Données textuelles du cours 
    B->>IA: Envoyer Prompt (Données cours + Format JSON) 
    Note over IA: Traitement du modèle LLM 
    IA-->>B: Retourne Questions/Réponses (JSON) 
    B->>DB: Sauvegarder le quiz généré 
    B-->>F: Envoi du Quiz (200 OK) 
    F-->>U: Affiche le Quiz interactif""",
    
    "deploy_diagram": """graph LR 
    subgraph "Internet" 
        User((Utilisateurs)) 
    end 
  
    subgraph "Cloud Infrastructure (AWS/Azure/GCP)" 
        LB[Load Balancer] 
         
        subgraph "Cluster d'Application" 
            S1[Serveur Web 1] 
            S2[Serveur Web 2] 
        end 
  
        subgraph "Managed Services" 
            DB[(PostgreSQL Managed)] 
            Storage[(Stockage Cloud S3)] 
        end 
    end 
  
    subgraph "External" 
        AI_Service(API IA Service) 
    end 
  
    User -->|HTTPS| LB 
    LB --> S1 
    LB --> S2 
    S1 & S2 <--> DB 
    S1 & S2 <--> Storage 
    S1 & S2 <--> AI_Service"""
}

def generate_url(diagram_text, diagram_type="mermaid", output_format="png"):
    compressed = zlib.compress(diagram_text.encode('utf-8'), 9)
    encoded = base64.urlsafe_b64encode(compressed).decode('utf-8')
    return f"https://kroki.io/{diagram_type}/{output_format}/{encoded}"

for name, text in diagrams.items():
    url = generate_url(text)
    print(f"Downloading {name}.png...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    with urllib.request.urlopen(req) as response, open(f"{name}.png", 'wb') as out_file:
        out_file.write(response.read())
    print(f"Saved {name}.png")
