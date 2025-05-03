# 🔍 Features

---

## 🔐 Authentication

MolBase offers a secure and seamless login experience via:

- OAuth login via Google, Microsoft, Facebook, or Github  
    <img src="/media/login_modal.gif" alt="Login Modal Demo"
        style="height: 500px; width: auto;  border-radius: 12px; margin: 1.5rem 0;" />

- Email-based registration  
    <img src="/media/email_signup.gif" alt="Email Registration Demo"
       style="max-width: 400px; display: block; margin-top: 0.5rem; border-radius: 8px;" />

- Email verification for user to be activated  
    <img src="/media/email_verification.gif" alt="Email Verification Demo"
       style="max-width: 400px; display: block; margin-top: 0.5rem; border-radius: 8px;" />

- Username based login
    <img src="/media/username_login.gif" alt="Username Login Demo"
        style="max-width: 400px; display: block; margin-top: 0.5rem; border-radius: 8px;" />

- Optional 2FA for enhanced security  
    <img src="/media/2fa_setup.gif" alt="2FA Setup Demo"
       style="max-width: 400px; display: block; margin-top: 0.5rem; border-radius: 8px;" />

- Email based password reset
    <img src="/media/forgot_pass.gif" alt="Forgot Password Demo"
       style="max-width: 400px; display: block; margin-top: 0.5rem; border-radius: 8px;" />

- Guest user login session


---

## 🏠 Main Application View

After login, users land on the Molecule Search Dashboard.

- Search bar with toggle for exact, substructure, and similarity modes
- Load More results system with real-time filters
- Dark mode enabled by default for improved focus

![Main View](media/main_app_view.gif)

---

## 🔎 Molecule Search

- **Substructure Search** using RDKit and PostgreSQL
- **Similarity Search** using vector embeddings and pgvector
- Results are ranked and clickable for details

![Substructure Search](media/substructure_demo.gif)

---

## 🎨 Molecule Visualization

- Each result displays a live SVG rendering using OpenChemLib
- Click to view metadata, SMILES, or copy structure
- Tooltips for long names and tag displays

![SVG Rendering](media/svg_preview.gif)

---

## 🧠 AI-Driven Similarity

- Uses GNN with SimCLR-style training
- Embeddings stored in `pgvector` for lightning-fast comparisons
- Includes top-k similarity ranking vs. anchor molecule

---

## 📦 Dataset

- 6M+ molecules imported from PubChem
- Filterable by tags, source, weight, or structure

---
