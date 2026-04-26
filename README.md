# 🤝 KeenKeeper - Personal Connection Tracker

KeenKeeper is a streamlined web application designed to help users maintain and nurture their relationships. By tracking interactions like calls, texts, and meetups, KeenKeeper provides users with a visual "timeline" of their social life and analytics to see who they are connecting with most.

Built as part of **Assignment 07 (Batch 13)**, this project focuses on state management, data persistence, and modern UI/UX principles.

---

## 🌟 Key Features

* **Interaction Tracking:** Easily log every time you call, text, or video chat with a friend.
* **Friendship Analytics:** Beautifully rendered **Pie Charts** (via Recharts) that break down your interaction types by percentage.
* **Persistent Timeline:** A filterable history of all past interactions. Even if you refresh the page, your data stays safe thanks to **LocalStorage** synchronization.
* **Dynamic Filtering:** Filter your timeline by "Calls," "Texts," or "Videos" to find specific moments quickly.
* **Modern Design:** A clean, minimal interface built with **Tailwind CSS v4** and **Lucide React** icons.
* **Zero Data Loss:** Custom hooks and Context API logic handle hydration to ensure a smooth, error-free experience on page reloads.

---

## 🚀 Live Demo

https://b13-assignment-07-chi.vercel.app/
---

## 🛠️ The Tech Stack

* **Core:** [Next.js 15](https://nextjs.org/) (App Router)
* **Language:** JavaScript (ES6+)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Visuals:** [Recharts](https://recharts.org/) for data visualization
* **Icons:** [Lucide React](https://lucide.dev/)
* **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
* **State Management:** React Context API

---

## 🏗️ Project Structure

```text
├── src
│   ├── app            # Next.js pages & layout logic
│   ├── components     # Modular UI elements (Navbar, Footer, Charts)
│   ├── context        # Global state management (Call, Text, Video Contexts)
│   ├── lib            # Context providers & library configs
│   └── styles         # Tailwind globals
