# AI Tools Setup & Guidelines

To participate in the fellowship, we leverage AI-first IDEs and tools. This guide details how to configure these tools and turn off telemetry to respect privacy and commercial code integrity.

---

## 💻 1. Text Editors (IDEs)

We recommend using **Cursor** or the **Antigravity IDE**.

### Cursor Setup
Cursor is an AI-first fork of VS Code.
1. Download Cursor from [cursor.sh](https://cursor.sh).
2. **Turn Off Telemetry (Crucial):**
   * Go to **Settings** (Gear icon) -> **Cursor Settings**.
   * Under **Privacy Mode**, toggle it **ON**. Enabling Privacy Mode ensures Cursor does not save or train on your code.
   * Go to **File** -> **Preferences** -> **Settings**. Search for `telemetry` and disable all telemetry settings (VS Code telemetry).

### Antigravity IDE Setup
Antigravity is Google's advanced agentic coding environment.
1. Install Antigravity using the provided setup bundle.
2. **Turn Off Telemetry:**
   * Open configuration settings (`.antigravityrc` or system settings).
   * Set `telemetry.enabled = false` and `agent.sharing = false`.

---

## 🤖 2. Recommended AI Assistants & Cost Considerations

When working on challenges, use the following tools:

| Tool | Cost | Recommended Use |
| :--- | :--- | :--- |
| **ChatGPT (Free / Codex)** | Free / $0 | Explaining code, drafting algorithms, answering questions. |
| **Open Code** | Free / $0 | Free open-source assistant integrations. |
| **Antigravity CLI** | Free / $0 | Locally running agent scripts and files. |
| **Claude Code** | Paid (Expensive) | *Not prioritized due to high API consumption costs.* Use only if you have active credits. |
| **Conductor** | Team Paid | Orchestrating multi-agent systems and task planning. |

---

## 🧪 3. Prompting AI for Automated Testing

Writing tests is a key part of the fellowship. Instead of writing tests by hand, learn to prompt your AI companion.

### Example Prompt: Creating a Unit Test
Provide the file you want to test and paste this prompt:
```text
Context: I am working in a React + Vite application using Vitest and React Testing Library.
Code to test:
[PASTE APP.JSX HERE]

Task: Write a unit test file App.test.jsx that tests:
1. That the component renders without crashing.
2. That clicking a task toggles its completion state (verify state change).
3. That task filtering works when clicking 'All', 'Pending', and 'Completed'.

Please write clean, readable test cases and avoid mocks where possible.
```

### Example Prompt: Debugging a Failing Test
If your tests fail, paste the test output and the code:
```text
The following test case is failing:
[PASTE TEST FAILURE OUTPUT]

Here is my current code:
[PASTE APP.JSX]

Can you explain the cause of the failure and suggest the exact code change to fix it? Make sure not to mutate React state directly.
```
