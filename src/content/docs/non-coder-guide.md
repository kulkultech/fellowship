---
title: "Non-Coder Contribution Guide"
description: Learn how to edit pages and contribute to the KulKul Fellowship portal directly through the GitHub website.
---

You do not need to be a software engineer or know how to write code to contribute to the **KulKul Fellowship** portal! 

All our content is written in Markdown (`.md` or `.mdx` files), which are simple text files. GitHub allows you to edit these files, preview your changes, and submit them directly from your web browser without downloading any tools or using the command line.

---

## 🏃‍♂️ Quick Steps to Edit Existing Content

If you see a typo, want to update an FAQ answer, or update your profile bio, follow these steps:

### 1. Locate the Page File
At the bottom of every documentation page, you will find an **"Edit page"** link. Clicking this link will take you directly to that file's location inside our GitHub repository.
*(Alternatively, you can browse the [GitHub repository](https://github.com/kulkultech/fellowship) and navigate to `src/content/docs/` where all pages are stored).*

### 2. Enter Edit Mode
1. Click the **Pencil Icon** (or click the **"Edit this file"** button) in the top-right corner of the file view.
2. If this is your first contribution, GitHub will automatically create a "fork" (your own copy) of the project for you to edit.

### 3. Make Your Edits
You can now edit the text directly. We use standard **Markdown** formatting. Here are the basics:

*   **Frontmatter Header (Keep this intact!):**
    At the very top of every file, you will see a block enclosed in `---` lines. This is metadata for the website. Make sure not to delete it:
    ```yaml
    ---
    title: "Your Page Title"
    description: "Brief page description"
    ---
    ```
*   **Headings:** Use `#` for headers. Use `##` for sub-headers (e.g. `## About Me`).
*   **Links:** Write link text in brackets and the URL in parentheses: `[Google](https://google.com)`.
*   **Lists:** Start a line with an asterisk `*` or a hyphen `-` to make a bullet point.

### 4. Propose Changes
1. Scroll down to the bottom of the page to the **"Commit changes..."** form.
2. Write a short, descriptive title (e.g., *"Fix typo in FAQ"*).
3. Select the option: **"Create a new branch for this commit and start a pull request."**
4. Click **Propose changes** (or **Commit changes**).

### 5. Open the Pull Request (PR)
1. On the next screen, click **Create pull request**.
2. Our core crew will review your changes. Once approved, we will merge them, and they will automatically go live on the website!

---

## 📝 How to Add a New Page (e.g., Your Fellow Profile)

If you are a new fellow and want to add your profile page to the **Fellows Directory**, do it directly on the GitHub website:

1. Navigate to the **`src/content/docs/fellows/`** directory in our [GitHub Repository](https://github.com/kulkultech/fellowship/tree/main/src/content/docs/fellows).
2. Click **Add file** -> **Create new file** in the top-right corner.
3. Name your file in lowercase, using your GitHub username (e.g., `username.md`).
4. Paste the following template into the file editor and replace it with your bio:
   ```markdown
   ---
   title: "Your Name"
   description: "Fellow profile"
   ---

   # Your Name 👋

   - **Background:** (Describe your background)
   - **Interests:** (E.g., design, writing, product management)
   - **Why I joined the Fellowship:** (Your goals)
   ```
5. Scroll down, choose **"Create a new branch for this commit and start a pull request"**, and click **Propose new file**.
6. Submit the Pull Request!
