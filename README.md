# KulKul Fellowship Portal & Sandbox

Welcome to the **KulKul Fellowship Onboarding & Challenge Repository**! This repository contains both the fellowship onboarding wiki (powered by Astro Starlight) and the candidate sandbox coding challenge (powered by Vite & React).

---

## 🚀 How-To Guides

This repository contains two main areas of interest:
1. **The Fellowship Wiki (Root Directory):** For onboarding instructions, rules, and the fellows directory.
2. **The Sandbox Application (`/sandbox` Directory):** A React app containing bugs and challenges that candidates must solve.

---

## 📖 1. The Fellowship Wiki (Root)

All command line executions must be prefixed with `uv run` as per our workspace configuration.

### Install Dependencies
To install dependencies for the documentation wiki:
```bash
SHARP_IGNORE_GLOBAL_LIBVIPS=1 uv run npm install
```

### Start the Wiki (Background Dev Server)
To start the wiki local development server in the background:
```bash
uv run npx astro dev --background
```
*The wiki will run on `http://localhost:4321`.*

### Manage the Background Server
- **Check Server Status:**
  ```bash
  uv run npx astro dev status
  ```
- **Check Server Logs:**
  ```bash
  uv run npx astro dev logs
  ```
- **Stop the Server:**
  ```bash
  uv run npx astro dev stop
  ```

---

## 🛠️ 2. The Sandbox Application (`/sandbox`)

The sandbox is a simple task-management application where candidates will solve practical challenges.

### Navigate & Install
```bash
cd sandbox
uv run npm install
```

### Run Locally
To run the sandbox React application locally:
```bash
uv run npm run dev
```
*The sandbox will run on `http://localhost:5173`.*

### Run the Test Suite
Candidates can verify if they solved the coding challenge bugs correctly by running:
```bash
uv run npm run test
```
*This executes the Vitest test suite and outputs the results.*

---

## 🌐 3. How to Deploy the Wiki to Netlify

To deploy the Astro Starlight documentation portal on Netlify, follow these steps:

### Prerequisites
1. Ensure the `.gitmodules` file in the root directory uses the public HTTPS URL for the sandbox (this has already been set up in our repository):
   ```ini
   url = https://github.com/kulkultech/fellowship-management-system.git
   ```
2. Commit and push your code to your GitHub repository:
   ```bash
   git add .gitmodules
   git commit -m "chore: use HTTPS url for sandbox submodule to enable Netlify builds"
   git push origin main
   ```

### Step-by-Step Deployment
1. Log in to your [Netlify Dashboard](https://app.netlify.com/).
2. Click **Add new site** -> **Import an existing project**.
3. Select **GitHub** as your git provider and authorize Netlify.
4. Select the **`kulkultech/fellowship`** repository.
5. In the **Site configuration** window, configure the following settings:
   * **Base directory:** (Leave blank - root directory)
   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
6. Click **Show advanced settings** and define these **Environment Variables**:
   * `SHARP_IGNORE_GLOBAL_LIBVIPS` = `1` (prevents sharp installation crashes on Netlify's build container)
   * `NODE_VERSION` = `20` (ensures Node LTS compatibility)
7. Click **Deploy Site**. Netlify will automatically pull the submodule, compile the Astro pages, generate search indexes, and host your live wiki portal!
