---
title: "Step 2: OS Environment Setup"
description: Configure NVM, Node.js, Git, and SSH on your machine.
---

To participate in the fellowship, you need a local shell and Node development environment. We support Windows (WSL), macOS, and Linux.

---

## 🎯 Step Objectives
*   Configure a Unix terminal shell (Bash/Zsh).
*   Install NVM (Node Version Manager) and Node.js.
*   Configure Git and SSH keys for secure authentication with GitHub.

---

## 🏃‍♂️ Action Guide

Refer to our complete [Operating System Setup Guide](/docs/operating-system-guides) for specific installation steps tailored to your environment. Here is a summary of the terminal commands you'll need:

### 1. Unix Terminal Setup
*   **Windows:** Windows Command Prompt and PowerShell are not supported. You must install and use **WSL 2 (Ubuntu)**.
    ```powershell
    wsl --install
    ```
*   **macOS:** Install **Homebrew** to manage packages:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

### 2. Node.js & NVM Installation
We manage Node versions using NVM (Node Version Manager). Install NVM by running:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
Restart your shell and install Node.js (LTS):
```bash
nvm install --lts
nvm use --lts
```
Verify the installation by running `node -v` (should print `v20.x` or `v22.x` or newer) and `npm -v`.

### 3. Generate & Configure SSH
SSH keys are required to authenticate securely with GitHub without typing your password each time you push code.
1. Generate a new SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   Press Enter to accept default locations.
2. Start the ssh-agent and add your key:
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```
3. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
4. Paste the copied key into your GitHub account:
   * Go to **GitHub Settings** -> **SSH and GPG keys** -> **New SSH key**.
   * Give it a title (e.g. "My Laptop") and paste your key.
5. Test the connection:
   ```bash
   ssh -T git@github.com
   ```
   *(You should see a message: "Hi [your-username]! You've successfully authenticated...")*
