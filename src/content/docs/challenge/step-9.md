---
title: "Step 9: Deploy Your Application"
description: Deploy your working sandbox to production using Vercel and Supabase.
---

A feature is not done until it is deployed to production. In this step, you will deploy your sandbox application to Vercel and configure it to talk to a live Supabase instance.

---

## 🎯 Step Objectives
*   Configure a live production database instance on Supabase.
*   Deploy your frontend React application on Vercel.
*   Configure production environment variables.

---

## 🏃‍♂️ Action Guide

### 1. Provision a Supabase Database
1. Go to [Supabase](https://supabase.com) and sign up for a free account.
2. Click **New Project** and name it `KulKul Sandbox`.
3. Set your database password and choose the server region closest to you.
4. Once provisioning finishes, go to the **Project Settings** -> **API** to find your:
   *   `Project API URL`
   *   `Anon Public API Key`

### 2. Deploy to Vercel
1. Go to [Vercel](https://vercel.com) and log in using your GitHub account.
2. Click **Add New** -> **Project**.
3. Import your forked `fellowship` repository.
4. **Configure the Project Root:** Under "Root Directory", select the `sandbox` subfolder.
5. **Configure Environment Variables:** Add the following environment keys:
   *   `VITE_SUPABASE_URL` = (Your Supabase Project URL)
   *   `VITE_SUPABASE_ANON_KEY` = (Your Supabase Anon Key)
6. Click **Deploy**. Vercel will build your static files and publish a public URL.

### 3. Verify Production Setup
Open the Vercel deployment URL in your browser and test the application features. Ensure that database reads/writes work correctly against your live Supabase DB.
