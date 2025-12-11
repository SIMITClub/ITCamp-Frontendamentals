# 🧠 06 - React Fundamentals & Next.js Introduction

> **TLDR:** Learn why React exists, build reusable components, and create your first Next.js application with routing and Tailwind styling.
> React = LEGO blocks for UI. Next.js = Complete framework with routing, optimization, and structure built-in.



## 📚 Table of Contents

1. [🔍 Topic Overview](#-topic-overview)
2. [📦 Project Setup](#-project-setup)
3. [📄 Code Walkthrough](#-code-walkthrough)
4. [🧪 Exercises](#-exercises)
5. [📝 Resources](#-resources)
6. [🙌 Contributors](#-contributors)



## 🔍 Topic Overview

**Problems with Traditional Web Dev (html,css,javascript):**
- No code reusability (copy-paste navbar across 10 files)
- Manual DOM manipulation (tedious and error-prone)
- Poor scalability (simple features = massive code)

**React Solves This With:**
- **Components** - Reusable UI pieces (build once, use everywhere)
- **Virtual DOM** - Automatic, efficient UI updates
- **Declarative** - Describe what you want, React handles how

**Library vs Framework:**
- **React (Library)** - You control the structure
- **Next.js (Framework)** - Provides structure, you add content

**Next.js Benefits:**
- File-based routing (`app/about/page.js` → `/about`)
- Built-in optimization (images, code splitting)
- Server & Client components
- Production-ready out of the box


## 📦 Project Setup

### Prerequisites

**Required:**
- Node.js 18+ ([download here](https://nodejs.org/))
- VS Code with [ES7+ React Snippets](https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets)

Before we begin:

1. **Sync your fork**
    * To make sure your forked repo is up to date with the main repo.
    * **Go to your forked repo on GitHub** and click the **Sync** fork button (top right)

2. **Open your project folder**
    * Navigate to the folder where you cloned your forked repo.

3. **Pull the changes to your local machine**
   ```bash
       git checkout main
       git pull origin main
   ```
  


## 📄 Code Walkthrough

### 1. Create Next.js Project
```bash
# Check Node.js version
node --version  # Should be 18+

# Create app
npx create-next-app@latest my-blog-site

# - Settings Option-
# Would you like to use the recommended Next.js default? … No, customize settings
# Would you like to use Typescript? … No
# Which linter would you like to use? … ESLint
# Would you like to use React Compiler? … No
# Would you like to use Tailwind CSS? … Yes
# Would you like to use `src/` directory? … Yes
#  Would you like to use App Router? (recommended) … Yes
# Would you like to customize the default import alias (@/*)? … No


# Start development
cd my-blog-site
npm run dev
```

Open `http://localhost:3000` to verify it works!

### File Structure
```
my-blog-site/
├── src/
│   ├── app/
│   │   ├── layout.js       # Root layout (wraps all pages)
│   │   ├── page.js         # Homepage (/)
│   │   └── globals.css     # Global styles
│   └── components/         # Reusable components ( we will create this)
├── public/                 # Static files (images)
└── package.json
```

**Key Concept:** File structure = URL routes
- `app/page.js` → `/`
- `app/about/page.js` → `/about`
- `app/blog/page.js` → `/blog`


### 2. Creating Reusable Navbar Component

First create a folder called  `/components` & a file  `Navbar.js`.

**File:** `src/components/Navbar.js`
```jsx
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    MyBlog
                </div>
                <div className="flex gap-6">
                    <Link href="/" className="hover:text-blue-200 transition">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-blue-200 transition">
                        About
                    </Link>
                    <Link href="/blog" className="hover:text-blue-200 transition">
                        Blog
                    </Link>
                </div>
            </div>
        </nav>
    )
}
```

### 2.1 Use Navbar in Layout

**File:** `src/app/layout.js`
```jsx
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'My Blog',
  description: 'A simple blog built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
```

### 3. Create About & Blog Pages

3.1 Create an **About** page. Create `about` folder and a  `page.js` file.

**File:** `src/app/about/page.js`
```jsx
export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About MyBlog</h1>
      <p className="mb-4">
        Welcome to MyBlog! This is a simple blog built with Next.js 
        to demonstrate modern web development.
      </p>
    </div>
  )
}
```


> You should see your about page with some content.


3.2 Create a **Blog** page. Create `blog` folder and a  `page.js` file.

**File:** `src/app/blog/page.js`

```jsx
export default function Blog() {
  const posts = [
    { id: 1, title: "Getting Started with React", date: "Dec 1, 2024" },
    { id: 2, title: "Why Next.js is Awesome", date: "Dec 3, 2024" },
    { id: 3, title: "Tailwind CSS Tips", date: "Dec 5, 2024" }
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.id} className="border-b pb-6">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
```

### 4. Container / Section Components (Optional)

These are larger components that group smaller components into sections.

Examples:

- `HeroSection.js`
- `FeaturesSection.js`
- `TestimonialsSection.js`

They help organize large designs into understandable units.

4.1 Create a **FeatureSection**. Create `FeaturesSection.js` file in your `/components` file.

**File:** `src/components/FeaturesSection.js`
```jsx

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Fast Performance",
      description: "Built with Next.js for lightning-fast page loads and smooth navigation.",
      icon: "⚡"
    },
    {
      id: 2,
      title: "Easy to Use",
      description: "Simple, intuitive design that makes reading and writing enjoyable.",
      icon: "✨"
    },
    {
      id: 3,
      title: "Responsive Design",
      description: "Looks great on any device - desktop, tablet, or mobile.",
      icon: "📱"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose MyBlog?</h2>
          <p className="text-gray-600 text-lg">
            Everything you need for a modern blogging experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(feature => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

```

Add it to any page you want!

In this example we will add in in the `about` page.

**Navigate to:** `src/app/about/page.js`

Add this at the top of the file:
```jsx
import FeaturesSection from '@/components/FeaturesSection'
```

Add  the **FeaturesSection!** just like how we added **Navbar** into layout.js

```jsx
export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About MyBlog</h1>
      <p className="mb-4">
        Welcome to MyBlog! This is a simple blog built with Next.js 
        to demonstrate modern web development.
      </p>

    {/* ADD THIS HERE Features Section - Same component, different page! */}
     <FeaturesSection />
  
    </div>
  )
}
```

## 🧪 Exercises

### 🔧 Exercise 1: Build Footer Component
1. Create `src/components/Footer.js`
2. Add copyright text with dark background
3. Import in `layout.js`
4. ✅ Success: Footer appears on all pages

### ⚔️ Exercise 2: Complete Blog Site (25 min)

**Requirements:**
1. **Contact Page** - Create `src/app/contact/page.js` with form
2. **Homepage Hero** - Add gradient hero section with title
3. **Blog Cards** - Grid of 3 featured post cards
4. **Navbar Update** - Add "Contact" link

**Starter Contact Form:**
```jsx
export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea rows="4" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  )
}
```


## 🙌 Contributors

| Name | Role | GitHub |
| ------------ | ------------------- | -------------------------------------------------- |
| Yan Mei | Speaker  | [@yxnmei](https://github.com/yxnmei) |
| Vanness Yang | Speaker | [@vanness1900](https://github.com/vanness1900) |
| Desmond | Reviewer 1| [@desraymondz](https://github.com/desraymondz) |
| Yan Mei | Reviewer 2 | [@yxnmei](https://github.com/yxnmei) |

