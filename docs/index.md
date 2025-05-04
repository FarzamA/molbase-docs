# MolBase

Welcome to the public documentation for **MolBase** — a hybrid AI + RDKit-based molecular search engine.

📌 **Note:** This project is home-hosted. The live demo is generally available between **9 AM and 5 PM EST**. If the link is temporarily down, please refer to this documentation to explore features, architecture, and usage.

👉 [Live Demo](https://molbase.duckdns.org/)

---

## 📌 Overview

MolBase is a full-stack chemical search platform that combines traditional RDKit-based structure search with neural embedding similarity powered by a custom Graph Neural Network (GNN).

It supports:

- Substructure, GNN powered substructure, exact, and similarity search
- Explore a dataset of over **6 million molecules** imported from **PubChem**
- Sketch or input molecule structures to search
- Compare traditional RDKit vs. learned GNN-based search
- Visualize results with embedded SVG renderers

---

## 📷 Demo

GNN powered similarity search on a database of over **6 million molecules** returning instantaneous results

??? search-check "Demo"
    <div style="display: flex; justify-content: center; margin: 1.5rem 0;">
        <video 
            src="media/mp4/gnn_sim_search.mp4" 
            autoplay 
            muted 
            playsinline 
            loop 
            style="max-width: 100%; border-radius: 12px;">
        </video>
    </div>

---

## 📁 Docs

- [Features](features.md) – Core functionality and tools used
- [Architecture](architecture.md) – How the platform is built
- [Setup Instructions](setup.md) – How it runs in Docker
