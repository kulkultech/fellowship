---
title: "Step 10: Submit & Review"
description: Add your profile to the Fellows Directory and submit your Pull Request.
---

In this final step, you will document your onboarding by adding yourself to the Fellows Directory and opening a GitHub Pull Request.

---

## 🎯 Step Objectives
*   Add your profile card to the fellows documentation.
*   Submit a Pull Request (PR) containing your sandbox and wiki changes.
*   Request peer reviews in Discord and book your match interview.

---

## 🏃‍♂️ Action Guide

### 1. Add Yourself to the Fellows Directory
Create a new markdown file in the wiki content folder at:
`src/content/docs/fellows/YOUR_GITHUB_USERNAME.md`

Paste and fill out this template:
```markdown
---
title: "Your Name"
description: "Fellow profile"
---

# Your Name 👋

- **Background:** (e.g. CS Student, transitioner, designer)
- **Interests:** (e.g. React, Flutter, LLM agents)
- **Goal in Fellowship:** (e.g. build team products, learn deployment)
- **GitHub:** [@YOUR_GITHUB_USERNAME](https://github.com/YOUR_USERNAME)
```

### 2. Commit and Push Your Changes
Since the sandbox is a git submodule inside your main project repository, you must commit your changes in both the submodule and the parent repository:

```bash
# 1. Navigate to the sandbox folder, commit and push your bug fixes
cd sandbox
git add .
git commit -m "feat: resolve sandbox management system bugs"
git push origin feature/solve-onboarding-issue

# 2. Return to the root folder, stage the submodule update and your new fellow profile file
cd ..
git add sandbox src/content/docs/fellows/YOUR_GITHUB_USERNAME.md
git commit -m "feat: complete AI challenge steps and register profile"
git push origin feature/solve-onboarding-issue
```
*Note: If your local git requires you to sign commits but has not been set up yet, use `git commit --no-gpg-sign` to commit.*

### 3. Open a Pull Request (PR)
1. Go to the [KulKul Fellowship GitHub Repo](https://github.com/kulkultech/fellowship).
2. Click **New Pull Request**.
3. Choose your fork's `feature/solve-onboarding-issue` branch as the source and the KulKul main repository's `main` branch as the target.
4. Fill out the description with a summary of the issues you fixed and a link to your live Netlify deployment. Click **Create Pull Request**.

### 4. Code Review & Interview Scheduling
*   **Discord Announcement:** Post a link to your open PR in the Discord `#first-steps` channel and tag `@empeje @haka2608 @ragilzakaria @ahloct`. 
*   **Peer Reviews:** Look at other open PRs from fellows, review their changes, and leave helpful comments. Collaborative review is the heart of the fellowship!
*   Once your PR is reviewed and approved by facilitators, we will schedule your final matching interview.

---

### 🎉 You Made It!

You’ve reached the end of the 10-Step AI Challenge! Thank you for building with us—we look forward to seeing what you do next! 🚀
