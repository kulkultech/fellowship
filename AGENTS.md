# Repository Purpose Index

This repository serves as the central hub for the **KulKul Fellowship Program**. Its primary functions and documentation nodes are indexed below.

---

## 🎯 Core Purposes

1. **Onboarding Portal (Astro Starlight):** A modern, visually stunning documentation wiki that outlines the fellowship structure, fellowship guidelines, FAQ, and steps.
2. **10-Step AI Challenge:** An AI-native, hands-on screening challenge designed to assess candidate prompting, code understanding, and git collaboration.
3. **Intern Management System (Sandbox):** A placeholder for the upcoming Supabase-based sandbox application which candidates will learn to edit, test, and deploy.
4. **AI Agent Constraints & Workflows:** Standardizing rules for AI agent copilots (like avoiding GPG signing, using `uv run`, and keeping telemetry off).

---

## 📂 Detailed Documentation Loops (`/docs`)

Due to the length of detailed guidelines, we store in-depth documentation inside the [docs/](file:///Users/abdurrachmanmappuji/Development/kulkultech/fellowship/docs) directory:

*   **[Vision & Gaps](file:///Users/abdurrachmanmappuji/Development/kulkultech/fellowship/docs/grand-vision-and-gaps.md):** Outlines the AI-native philosophy and tracks development gaps.
*   **[OS Setup Guide](file:///Users/abdurrachmanmappuji/Development/kulkultech/fellowship/docs/operating-system-guides.md):** localized setup steps for Windows (WSL), macOS, and Linux.
*   **[AI Tools Guidelines](file:///Users/abdurrachmanmappuji/Development/kulkultech/fellowship/docs/ai-tools-guidelines.md):** Editor configs (Cursor, Antigravity IDE), telemetry instructions, tool details, and test prompting.

---

## 💻 Development Workflow

### Astro Dev Server
When starting the dev server for the wiki, always use background mode:
```bash
astro dev --background
```
Manage the background server with:
*   `astro dev stop`
*   `astro dev status`
*   `astro dev logs`

### Package Commands
All commands run in this workspace must be prefixed with `uv run` where applicable.
*   **Do not use GPG signing** when committing changes in this repository.
