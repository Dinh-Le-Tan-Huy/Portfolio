# 🚀 Huy Lê — Personal Portfolio

> A modern, high-performance personal portfolio built with **React 19**, **TypeScript**, and **Vite 8** — designed to showcase professional experience, technical skills, and project history to HR teams and technical interviewers.

**Live:** [huy-quan-dui.github.io/Portfolio](https://huy-quan-dui.github.io/Portfolio) &nbsp;|&nbsp; **GitHub:** [github.com/huy-quan-dui/Portfolio](https://github.com/huy-quan-dui/Portfolio)

---

## 🧑‍💻 About the Developer

**Lê Tấn Huy** — Full-Stack Software Engineer based in Ho Chi Minh City, Vietnam.

Experienced in building scalable end-to-end web and mobile applications within the JavaScript/TypeScript ecosystem. Strong background in React Native, Next.js, Node.js, RESTful APIs, secure authentication flows, and real-time systems. Comfortable working independently or leading a small freelance team from UI/UX design through to production deployment.

- 📧 t.huy030826@gmail.com
- 📍 Ho Chi Minh City, Vietnam
- 🔗 [LinkedIn](https://www.linkedin.com/in/tan-huy-673408342/)
- 🏆 TOEIC 600 | Scholarship Recipient | Top 5 Graduate Project

---

## 🏗️ Project Architecture

This portfolio follows a clean **MVVM (Model-View-ViewModel)** pattern, applying separation of concerns at every layer:

```
src/
├── App.tsx                        # Root application, routing setup
├── Model/
│   └── Redux/
│       └── Contact/               # Redux state slice, async thunks, types
│           ├── Contact.Slice.ts
│           ├── Contact.Thunk.ts   # EmailJS integration via Redux Thunk
│           └── Contact.Type.ts
├── View/
│   ├── Components/                # Reusable presentational components
│   │   ├── CardInfo/              # Education timeline component
│   │   ├── CardItem/              # Versatile card (default & note variants)
│   │   ├── ChatBubbleItem/        # FAQ accordion component
│   │   ├── Header/                # Animated navigation header
│   │   ├── Footer/
│   │   ├── Input/                 # Controlled input with validation
│   │   └── ScrollToHash/          # Hash-based scroll restoration
│   ├── DesignSystem/              # Global design tokens
│   │   ├── Colors.ts              # Unified color palette
│   │   ├── Typography.ts
│   │   ├── Spacing.ts
│   │   └── Radius.ts
│   └── layout/                    # Page-level layout components
│       ├── Home/                  # Hero, Education, Skills, Experience, FAQ
│       ├── About/                 # Full profile: bio, education, skills, projects, certs
│       └── Contact/               # Contact form with EmailJS integration
└── ViewModel/
    ├── useContact.ts              # Contact form business logic, Redux integration
    └── useHeader.ts
```

---

## ⚙️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19, TypeScript |
| **Bundler** | Vite 8 |
| **State Management** | Redux Toolkit + React Redux |
| **Routing** | React Router DOM v7 |
| **Animations** | Framer Motion |
| **Email Service** | EmailJS (`@emailjs/browser`) |
| **Typography** | Inter (via `@fontsource/inter`) |
| **Styling** | Vanilla CSS-in-JS (inline styles, Design System tokens) |
| **Typewriter Effect** | react-simple-typewriter |
| **Linting** | ESLint + TypeScript-ESLint |

---

## ✨ Key Features

### 🎨 Premium UI & Design System
- Dark-mode-first design with a curated **navy + cyan neon** color palette
- Glassmorphism card surfaces (`rgba` backgrounds + `backdropFilter: blur`)
- Radial gradient hero sections and animated glow effects
- Fully responsive layout using `clamp()` fluid typography and CSS Grid/Flexbox
- Smooth micro-animations via **Framer Motion** (header, nav transitions)
- Typewriter animation on hero headline

### 📄 Pages & Sections
- **Home** — Hero banner with live typewriter effect, Education timeline, Technical Skills grid (note-card variant), Work Experience cards, FAQ accordion (ChatBubble UI)
- **About** — Full professional profile: bio, academic background, skills, project experience with deep-link highlight scroll, courses & language certifications
- **Contact** — Left-panel info + right-panel form. Form validates required fields (name, email), displays inline errors, and sends emails via **EmailJS + Redux Thunk**. Auto-prefills message from URL query params when navigating from the About page's "Send Detail" button

### 🔗 Smart Navigation
- **Send Detail** button on Experience cards → navigates to `/contact?project=ProjectName`, which auto-fills the message field
- **Deep-link highlighting** on `/about?project=ProjectName` → page smoothly scrolls to the target project card and applies a **neon cyan glow border** for 3 seconds, then fades out
- React Router v7 client-side routing — no page reloads

### 📬 Contact Form
- Redux-managed form state (name, email, message)
- Client-side validation with real-time feedback
- EmailJS integration for direct email delivery without a backend
- Hover micro-animation on submit button

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Clone the repository
git clone https://github.com/huy-quan-dui/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌍 Environment Variables

Create a `.env` file at the project root (see `.env.example` if provided):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These are used by `Contact.Thunk.ts` to send emails client-side via EmailJS.

---

## 🗂️ Design Decisions

| Decision | Rationale |
|---|---|
| **MVVM pattern** | Clean separation of UI logic, business logic, and data — maps directly to team-based workflows |
| **Inline CSS-in-JS with Design System tokens** | Full type safety, co-located styles, no CSS class name conflicts, no Tailwind dependency |
| **Redux Toolkit for contact form** | Demonstrates state management skills beyond `useState`; scalable for future form states |
| **CSS Grid + Flexbox for layout** | Avoids framework lock-in; shows strong fundamental CSS knowledge |
| **React Router v7** | Leverages latest routing APIs (`useSearchParams`, `useNavigate`) for deep-linking UX |
| **No UI component library** | Every component is custom-built to demonstrate UI engineering proficiency |

---

## 📁 Component Overview

### `CardItem`
Versatile card component with two variants:
- **`default`** — Horizontal layout: left column (title, role, time badge, optional action button) + right column (bullet-point responsibilities). Used for Work Experience.
- **`note`** — Vertical compact card with icon, title, description, and list items. Used for Skills grid and Certificates.

Supports an optional `onActionClick` callback which renders a styled **"Send Detail →"** CTA button.

### `CardInfo` (EducationTimeline)
Renders a vertical timeline of academic entries with glowing cyan dots and gradient connector lines.

### `ChatBubbleItem`
Accordion FAQ item styled as a chat bubble. Togglable open/close with smooth height animation.

### `Header`
Animated sticky header using **Framer Motion layout animations**. The navigation menu expands/collapses with a blur fade transition triggered by a dot-grid icon button.

---

## 📬 Contact

Feel free to reach out for collaboration, freelance work, or job opportunities:

- **Email:** t.huy030826@gmail.com
- **LinkedIn:** [linkedin.com/in/tan-huy-673408342](https://www.linkedin.com/in/tan-huy-673408342/)

---

<p align="center">Built with ❤️ by <strong>Lê Tấn Huy</strong> · Ho Chi Minh City, Vietnam · 2025</p>
