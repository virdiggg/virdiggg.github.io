# Hi, I'm Virdi 👋
### Backend Engineer & System Architect

A software developer specializing in backend systems, cross-platform applications, high-performance architectures, and data-driven automation. I focus on building scalable, event-driven pipelines, optimizing database performance, and creating developer-centric tools.

---

## 🛠️ Core Technologies

Tags and frameworks I frequently work with:

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

---

## 🚀 Featured Projects

### 1. Automated Video Media Processing & Distribution Pipeline (`mantan-wibu`)
An event-driven media automation pipeline designed to modernize media localization workflows. By automating the technical delivery pipeline (encoding, muxing, verification, and distribution), it reduces operational overhead so teams can focus entirely on creative tasks like translation and typesetting.

* **Tech Stack:** `FastAPI`, `PostgreSQL`, `Celery`, `Redis`, `FFmpeg`, `MKVToolNix`, `Pusher`
* **Key Features:**
  * **Automated Staff Workflow:** Ingestion, asset validation, and release processing.
  * **Standardized Media Handling:** Programmatic subtitle/font embedding and CRC32 integrity tagging.
  * **Parallel Queue Processing:** Robust queue-based architecture for simultaneous job execution.
  * **Automated Release Distribution:** Hands-off upload natively integrated with the Pixeldrain API.
  * **Real-time Sync:** Instant dashboard feeds and automated Discord notifications.

<details>
<summary><b>📐 Architecture & Screenshots (Click to expand)</b></summary>

#### System Architecture & Workflow
* **System Architecture:**
  ![Architecture](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/architecture-fansub.drawio.png)
* **Business Workflow:**
  ![Business Workflow](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/workflow-business-fansub.drawio.png)
* **System Workflow:**
  ![System Workflow](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/workflow-sistem-fansub.drawio.png)

#### Interface Previews
| User Dashboard | Staff Management |
|---|---|
| ![User 1](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/user-1.png) | ![Staff 1](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/staff-1.png) |
| ![User 2](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/user-2.png) | ![Staff 2](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/fansub/staff-2.png) |

</details>

---

### 2. Document Information Generator System (`dip-pdf-generator`)
An automated document engine built to streamline BPOM regulatory compliance for cosmetic registration. It replaces manual document creation with centralized relational data mapping and asynchronous background processing to generate structured Dokumen Informasi Produk (DIP).

* **Tech Stack:** `Flask`, `PHP (Laravel)`, `PostgreSQL`, `ReactJS`, `Celery`, `Redis`, `FrankenPHP`, `Pusher`
* **Key Features:**
  * **Unified Data Core & Ingestion:** Dynamic forms that centralize formulations, lab testing, and approvals.
  * **Compliance-Driven PDF Engine:** Python backend programmatically generating BPOM-compliant PDF layouts.
  * **Asynchronous Queue Architecture:** Background batch generation reducing turnaround time to < 5 minutes.
  * **Secure-by-Design Viewer:** Built-in web viewer with restricted printing/downloading to prevent data leaks.

> 🔒 **Confidentiality Notice:** Due to NDA and regulatory compliance (BPOM data privacy), organization/brand names have been redacted. Screenshots demonstrate a staging environment with mocked data.

<details>
<summary><b>📐 Architecture & Screenshots (Click to expand)</b></summary>

#### System Architecture & Workflow
* **System Architecture:**
  ![Architecture](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/dip/architecture-dip.drawio.png)
* **System Workflow:**
  ![System Workflow](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/dip/workflow-sistem-dip.drawio.png)

#### Interface Previews
![DIP Step 1](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/dip/dip-1.png)
![DIP Step 2](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/dip/dip-2.png)
</details>

---

### 3. Log & Performance Tracker (`internal-monitoring-dashboard`)
A lightweight, self-hosted observability dashboard designed to centralize internal system monitoring (server health, API latency, application exceptions, DB logs) without the heavy overhead of platforms like Grafana or ELK Stack.

* **Tech Stack:** `PHP (CodeIgniter 3)`, `PostgreSQL`, `Shell scripts`
* **Key Features:**
  * **Unified Log Auditing:** Aggregates server errors, application exceptions, and database access logs.
  * **Infrastructure Telemetry:** Lightweight monitoring for CPU load, memory, disk, and network boundaries.
  * **Anomalies Analytics:** Visual filtering tools to quickly pinpoint daily error trends and bottlenecked endpoints.

> 🔒 **Confidentiality Notice:** Project is internal and confidential. UI screenshots utilize dummy data for presentation purposes.

<details>
<summary><b>📷 Screenshots (Click to expand)</b></summary>

![Monitoring 1](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/monitoring/monitoring-1.png)
![Monitoring 2](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/monitoring/monitoring-2.png)
</details>

---

### 4. Local File Sharing System (`file-sync`)
An offline-first desktop application engineered for secure, low-cost file sharing and backup across a local network (LAN) without internet dependencies, specifically designed for internal R&D formulation teams.

* **Tech Stack:** `Node.js`, `Electron`
* **Key Features:**
  * **LAN-Bound Ingestion:** High-speed secure uploads to a centralized local storage server.
  * **Isolated Clustering:** Dynamically organizes and isolates stored assets inside dedicated per-user workspace clusters.
  * **Native Desktop App:** Ultra-lightweight cross-platform desktop client bypassing third-party web overhead.

<details>
<summary><b>📷 Screenshots (Click to expand)</b></summary>

![File Sync](https://raw.githubusercontent.com/virdiggg/virdiggg-vercel/refs/heads/master/public/images/file-sync/file-sync.png)
</details>

---

## 🔓 Open Source Contributions

Tools and utilities I've built and maintained for the developer community:

* 📦 **[CodeIgniter 3 Modded](https://github.com/virdiggg/codeigniter-3-modded)** - A modernized CI3 distribution with PHP 8.3 compatibility, Composer integration, database migrations, enhanced logging, and query profiling.
* 🐍 **[CRC32-PY](https://github.com/virdiggg/crc32-py)** - Lightweight Python utility for MKV remuxing, subtitle/audio track restructuring, and CRC32-standardized media packaging.
* 🔨 **[PyInstaller Generator](https://github.com/virdiggg/pyinstaller_generator)** - Automates complex PyInstaller command generation including hidden imports, asset embedding, and dependency arguments.

---

## 🔗 Connect With Me

* 📂 **GitHub Profile:** [@virdiggg](https://github.com/virdiggg?tab=repositories)
* 📦 **Packagist Packages:** [virdiggg on Packagist](https://packagist.org/users/virdiggg/packages)