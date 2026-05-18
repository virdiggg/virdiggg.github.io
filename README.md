# Hi, I'm Virdi Gunawan 👋

Backend-focused software engineer passionate about building scalable internal systems, automation platforms, and developer tooling.

I enjoy designing systems that reduce operational overhead, automate repetitive workflows, and improve reliability through practical engineering solutions.

---

## Tech Stack

![PHP](https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

---

## Open Source & Packages

- 🌐 Portfolio  
  https://vercel-portfolio-iota-sage.vercel.app/

- 💻 GitHub Repositories  
  https://github.com/virdiggg?tab=repositories&q=&type=public&language=&sort=

- 📦 Packagist Packages  
  https://packagist.org/users/virdiggg/packages

---

# Featured Projects

---

## Automated Video Media Processing & Distribution Pipeline

### Overview

An event-driven media automation pipeline designed to modernize the fansubbing workflow.

By automating the entire technical delivery pipeline — including encoding, muxing, verification, and release distribution — the system eliminates manual bottlenecks and significantly reduces operational workload, allowing localization teams to focus entirely on human-driven creative tasks such as translation and typesetting.

### Key Highlights

- Automated torrent ingestion and release orchestration
- Parallel queue-based media processing
- Programmatic subtitle, font, chapter, and CRC32 handling
- Integrated Pixeldrain release distribution
- Real-time synchronization and Discord notifications

### Tech Stack

`FastAPI` • `PostgreSQL` • `Celery` • `Redis` • `FFmpeg` • `MKVToolNix` • `Pusher`

### System Architecture

![Architecture](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/architecture-fansub.drawio.png)

### Workflow

#### Business Workflow

![Business Workflow](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/workflow-business-fansub.drawio.png)

#### System Workflow

![System Workflow](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/workflow-sistem-fansub.drawio.png)

### Screenshots

| User Feed | User Feed |
|---|---|
| ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/user-1.png) | ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/user-2.png) |

| Staff Dashboard | Staff Dashboard |
|---|---|
| ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/staff-1.png) | ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/staff-2.png) |

| Staff Dashboard with Queue Running |
|---|
| ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/staff-3.png) |

---

## Python-based Document Information Generator System

### Overview

An automated document engine designed to streamline BPOM regulatory compliance for cosmetic registration.

The system dynamically generates structured Dokumen Informasi Produk (DIP) using centralized relational data mapping and asynchronous background processing, significantly reducing manual revision overhead and generation turnaround times.

### Key Highlights

- Dynamic BPOM-compliant PDF generation
- Centralized relational data synchronization
- Queue-based asynchronous processing
- Secure internal document handling
- Real-time Pusher notifications
- Dynamic PDF merging engine

### Tech Stack

`Flask` • `Laravel` • `PostgreSQL` • `ReactJS` • `Celery` • `Redis` • `FrankenPHP` • `Pusher`

### System Architecture

![Architecture](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/dip/architecture-dip.drawio.png)

### Workflow

#### Business Workflow

![Business Workflow](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/dip/workflow-business-dip.drawio.png)

#### System Workflow

![System Workflow](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/dip/workflow-sistem-dip.drawio.png)

### Screenshots

| PDF Viewer | PDF Password |
|---|---|
| ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/dip/dip-1.png) | ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/dip/dip-2.png) |

| Dashboard | Master Formula |
|---|---|
| ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/dip/dip-3.png) | ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/dip/dip-4.png) |

> **Confidentiality Notice**  
> Due to NDA and BPOM compliance requirements, organization names, product names, and production credentials have been redacted. Screenshots use staging data only.

---

## Log & Performance Tracker

### Overview

A lightweight self-hosted observability dashboard created to centralize internal monitoring without relying on external platforms like Grafana or ELK Stack.

The system consolidates infrastructure telemetry, application logs, API performance, and network monitoring into a single operational dashboard.

### Key Highlights

- Unified application and database log auditing
- API latency and upload telemetry tracking
- Infrastructure resource monitoring
- Internal network availability monitoring
- Visual anomaly and trend analytics

### Tech Stack

`PHP (CodeIgniter 3)` • `PostgreSQL` • `Shell Scripts`

### Screenshots

| Monitoring | Error Analytics |
|---|---|
| ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/monitoring/monitoring-1.png) | ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/monitoring/monitoring-2.png) |

| API Tracking | Trend Dashboard |
|---|---|
| ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/monitoring/monitoring-3.png) | ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/monitoring/monitoring-4.png) |

| Infrastructure | Connectivity |
|---|---|
| ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/monitoring/monitoring-5.png) | ![](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/monitoring/monitoring-6.png) |

> **Confidentiality Notice**  
> This project is internal and confidential. Screenshots use dummy data for demonstration purposes.

---

## Local File Sharing System

### Overview

An offline-first desktop application designed for secure local-network file sharing and backup without internet dependencies or cloud infrastructure.

Built specifically for internal R&D operations, the platform prioritizes simplicity, privacy, and high-speed LAN synchronization.

### Key Highlights

- High-speed LAN file synchronization
- Isolated per-user storage architecture
- Lightweight native desktop experience
- Zero cloud dependency

### Tech Stack

`Node.js` • `Electron`

### Screenshot

![FileSync](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/file-sync/file-sync.png)

---

# Open Source Projects

## CodeIgniter 3 Modded

Customized and modernized CodeIgniter 3 distribution with:

- PHP 8.3 compatibility adjustments
- Composer integration
- Migration support
- Enhanced logging utilities
- Query profiling
- Developer tooling inspired by modern PHP frameworks

🔗 https://github.com/virdiggg/codeigniter-3-modded

---

## Header CodeIgniter 3

Security-focused HTTP header utility for CodeIgniter 3 inspired by Helmet.js, providing centralized management of modern browser security headers for legacy PHP applications including:

- Content Security Policy (CSP)
- HSTS
- X-Frame-Options
- COOP / COEP
- Referrer Policy
- Permissions Policy
- Clickjacking protection
- MIME sniffing protection

🔗 https://github.com/virdiggg/header-ci3

---

## Merge Files

Production-oriented PHP document merging utility designed for real-world compatibility handling. Supports merging multiple file formats—including DOC, DOCX, XLS, XLSX, images, and PDFs—into a unified PDF output while automatically normalizing incompatible PDF versions through Ghostscript preprocessing to ensure compatibility with legacy PHP PDF libraries such as FPDF, FPDI, and mPDF.

Key capabilities include:

- Mixed document ingestion pipeline
- Automatic PDF version normalization
- Ghostscript-based compatibility preprocessing
- Support for legacy PHP PDF ecosystems
- Unified PDF generation workflow
- Image-to-PDF conversion handling
- Multi-source document consolidation

Supported file formats:

- DOC / DOCX
- XLS / XLSX
- JPG / JPEG / PNG
- PDF

🔗 https://github.com/virdiggg/merge-files

---

## CRC32-PY

Lightweight Python utility for:

- MKV remuxing
- Subtitle restructuring
- Audio track management
- Attachment cleanup
- CRC32-standardized packaging workflows

🔗 https://github.com/virdiggg/crc32-py

---

## PyInstaller Generator

Utility script that automates complex PyInstaller command generation including:

- Hidden imports
- Embedded assets
- Dependency packaging
- Additional executable build arguments

🔗 https://github.com/virdiggg/pyinstaller_generator

---

# Philosophy

I enjoy building systems that:

- Reduce repetitive operational work
- Improve reliability through automation
- Simplify complex internal workflows
- Prioritize practical engineering over unnecessary complexity

---

## Contact

<p align="left">
<a href="mailto:virdigunawann@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="mailto:virdigunawan@proton.me">
  <img src="https://img.shields.io/badge/ProtonMail-6D4AFF?style=for-the-badge&logo=protonmail&logoColor=white" />
</a>

<a href="https://www.linkedin.com/in/virdi-gunawan-a61026125/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
</p>