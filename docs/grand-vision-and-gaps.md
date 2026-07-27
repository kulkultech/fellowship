# KulKul Fellowship: Grand Vision & Implementation Gaps

This document defines the overarching vision for the AI-Native Fellowship at KulKul.tech and outlines the current gaps we must resolve to make the program fully operational.

---

## 👑 The Grand Vision: AI-Native Engineering

Traditionally, software engineering internships focus on syntax, language rules, and basic manual coding. The KulKul.tech Fellowship flips this paradigm. With the rise of AI agents (Cursor, Claude Code, Antigravity, Conductor), writing boilerplate code has become a solved problem. 

**Our core philosophy is AI-First and AI-Native:**
*   **Prompting & Orchestration:** We assess candidates on how well they use AI to scaffold, debug, and test code, rather than their ability to memorize syntax.
*   **Explanation & Comprehension:** A fellow must fully understand what their AI companion generates. The final interview is an oral code walkthrough where they explain their design decisions.
*   **Practical Contribution:** Candidates contribute to a real-world sandbox (Intern Management System) and the onboarding wiki itself, mastering Git workflows and social coding.

---

## ⚠️ Current Gaps & Action Plan

Below is an index of current gaps between our vision and the repository state, alongside the planned actions to resolve them.

### 🔴 Gap 1: Sandbox Codebase (Intern Management System)
*   **Description:** The sandbox folder currently contains only a placeholder. We need a functional Vite + Supabase starter app that mimics a real intern management dashboard.
*   **Required Action:** Build the basic schema (Supabase tables for interns, tasks, mentors) and introduce 3 intentional bugs/feature gaps in the React frontend for fellows to resolve.

### 🟡 Gap 2: Telemetry Disabling Guides
*   **Description:** We require candidates to disable telemetry in Cursor and Antigravity IDE for privacy and professional standards, but we haven't provided step-by-step instructions.
*   **Required Action:** Document the exact telemetry toggles for each IDE in [ai-tools-guidelines.md](file:///Users/abdurrachmanmappuji/Development/kulkultech/fellowship/docs/ai-tools-guidelines.md).

### 🔴 Gap 3: Setup Videos (YouTube Playlist)
*   **Description:** The meeting note states: *"Every step and tool explained will have a video introduction... Puji, Zain, Ragil, Celina, Linda."* We currently have no links or placeholders for these videos.
*   **Required Action:** The core team needs to record these short loom/YouTube videos. Once done, we will embed the playlists in the wiki steps.

### 🟡 Gap 4: Automated Testing Prompts
*   **Description:** Candidates need to run automated tests. We need to provide clear examples of prompts (e.g. for ChatGPT or Claude Code) to write unit tests for the Sandbox app.
*   **Required Action:** Add a prompting cheatsheet for testing in [ai-tools-guidelines.md](file:///Users/abdurrachmanmappuji/Development/kulkultech/fellowship/docs/ai-tools-guidelines.md).

### 🟡 Gap 5: Deploy Template (Vercel + Supabase)
*   **Description:** We need a clean script or button to let candidates deploy the Vite + Supabase app to Vercel and create their own Supabase sandbox instance.
*   **Required Action:** Set up a "Deploy to Vercel" template button and write a schema SQL file for easy Supabase database provisioning.

---

## 🔄 The Feedback Loop

As fellows go through the program, they are required to open GitHub Issues for any confusing instructions they encounter, and submit PRs to fix them. This keeps the onboarding wiki constantly improving.
