# 🏗️ Architecture

MolBase follows a modular architecture designed for scalability and GPU acceleration.

## Components

- **Frontend**: React + Material UI
- **Backend**: Hybrid .NET + FastAPI
- **Database**: PostgreSQL with RDKit & pgvector
- **GNN Model**: PyTorch-based molecular embedding
- **Worker**: Celery tasks for parsing, import, training, etc.
- **Reverse Proxy**: Caddy with Docker Compose

## Diagram

*Insert architecture diagram here (optional)*
