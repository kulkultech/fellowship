# Operating System Setup & Installation Guide

To ensure everyone has a consistent development experience, we support Windows (via WSL), macOS, and Linux. Follow the instructions corresponding to your operating system.

---

## 🪟 Windows Setup (via WSL)

We **strictly require** Windows users to use Windows Subsystem for Linux (WSL) for development. Native Windows command prompt or PowerShell is not supported for our tooling.

### 1. Install WSL 2
Open PowerShell as Administrator and run:
```powershell
wsl --install
```
Restart your computer. This will install Ubuntu by default.

### 2. Install Node.js & NVM in WSL
Inside your WSL terminal (Ubuntu), install NVM (Node Version Manager):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
Close and reopen your terminal, then install Node.js (LTS version):
```bash
nvm install --lts
nvm use --lts
```

### 3. Install Git & SSH
```bash
sudo apt update
sudo apt install git -y
```

---

## 🍎 macOS Setup

macOS comes with a Unix terminal out of the box, making setup straightforward.

### 1. Install Homebrew
Open the Terminal and run:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Install NVM & Node.js
Install NVM via Homebrew:
```bash
brew install nvm
```
Follow the post-install instructions to add NVM to your `~/.zshrc` profile, then install Node.js:
```bash
nvm install --lts
nvm use --lts
```

### 3. Xcode Command Line Tools
```bash
xcode-select --install
```

---

## 🐧 Linux Setup (Ubuntu/Debian)

Linux already provides a native shell and development environment.

### 1. Install NVM & Node.js
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
Reopen your shell and install Node.js:
```bash
nvm install --lts
nvm use --lts
```

### 2. Install Git and Build Essentials
```bash
sudo apt update
sudo apt install build-essential git -y
```
