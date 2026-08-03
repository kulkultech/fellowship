---
title: "Step 9: Deploy Your Application"
description: Deploy your working sandbox to production using Vercel and Supabase.
---

A feature is not done until it is deployed to production. In this step, you will deploy your sandbox application to Vercel and configure it to talk to a live Supabase instance.

---

## 🎯 Step Objectives
*   Deploy your working sandbox frontend and serverless backend to Netlify.
*   Configure the repository submodule build configuration.
*   Verify that candidate registration works dynamically in production.

---

## 🏃‍♂️ Action Guide

A feature is not done until it is deployed. In this step, you will deploy the Fellowship Management System sandbox to **Netlify**, which automatically hosts your static Vite React frontend and runs your serverless Netlify Functions backend.

### 1. Import Your Project in Netlify
1. Go to [Netlify](https://app.netlify.com/) and sign up or log in using your GitHub account.
2. Click **Add new site** -> **Import an existing project**.
3. Select **GitHub** as your Git provider, authorize Netlify, and select your forked **`fellowship`** repository.

### 2. Configure Build & Submodule Settings
Under the Site configuration page, Netlify needs to compile the `sandbox` subdirectory. Configure these exact settings:
*   **Base directory:** `sandbox`
*   **Build command:** `npm run build`
*   **Publish directory:** `sandbox/dist`
*   **Build settings (Submodules):** Netlify will automatically detect and pull the `sandbox` git submodule folder.

### 3. Deploy the Sandbox
1. Click **Deploy Site**. Netlify will clone your repository (including its submodules), run Vite build, bundle the serverless functions under `netlify/functions/`, and deploy a public URL.
2. Once the deployment finishes, open the live URL.

### 4. Verify Live Production Database
On your live deployed website:
1. Click **Apply Now** and register yourself as a fellow candidate.
2. Keep the email empty to verify that it defaults to your `username@placeholder.kulkul.tech` format.
3. Verify that your profile registers successfully in the dashboard and you can view your personal progress checklist. Since it runs in production, Netlify will automatically spin up **Netlify Blobs** to persist candidate states with no manual database credentials!

**Post a message in the Discord channel saying you have completed the installation. Don't forget to attach a screenshot of your completed setup.**
