# 🧠 01 - Tailwind CSS in HTML

> TLDR; Master Tailwind CSS utility classes to build beautiful, responsive websites faster than ever.
> Think of Tailwind as pre-made LEGO blocks for styling — no need to write custom CSS from scratch.

## 📚 Table of Contents

1. [🔍 Topic Overview](#-topic-overview)
2. [📦 Project Setup](#-project-setup)
3. [📄 Code Walkthrough](#-code-walkthrough)
4. [🧪 Exercises](#-exercises)
5. [🛠️ Pushing Your Work](#-pushing-your-work)
6. [📝 Bonus Resources](#-bonus-resources)
7. [🙌 Contributors](#-contributors)

## 🔍 Topic Overview

- **Why Tailwind CSS?**
   Discover how utility-first CSS eliminates the pain of writing and maintaining custom stylesheets.
   > Vanilla CSS = writing recipes from scratch. Tailwind = ordering from a well-stocked menu.
- **Setup & Installation**
   Get started quickly with the Tailwind CLI browser script — no complex build tools required for learning.
- **Core Utility Classes**
   Master the building blocks: colors, typography, spacing, sizing, and layout fundamentals.
- **Flexbox & Grid Made Easy**
   Learn to create flexible, responsive layouts with simple, intuitive class names.
- **Responsive Design**
   Use breakpoint prefixes (sm:, md:, lg:, xl:) to adapt your design to any screen size.
- **Interactive Components**
   Build real-world UI elements like navbars, cards, and buttons with hover effects and transitions.
- **Rapid Iteration Power**
   Experience how design revisions become class tweaks instead of file edits — the ultimate productivity boost.

> By the end of this workshop, students will confidently style modern web pages with Tailwind,
> understand responsive design principles, and iterate on designs at lightning speed.

## 📦 Project Setup

Before we begin:

1. **Check prerequisite**
   ```bash
   node -v
   ```

2. **Copy starter code**
   * Navigate to github and copy the starter code to check if Tailwind is working

3. **Setup Your HTML File**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Tailwind CSS Workshop</title>
     <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
   </head>
   <body>
     <h1 class="text-3xl font-bold underline m-8 text-blue-500">
       Tailwind is working! 🎉
     </h1>
   </body>
   </html>
   ```

## 📄 Code Walkthrough

```html
<!-- ------------------------------- -->
<!-- 3.1 Colors & Typography         -->
<!-- ------------------------------- -->

<!-- Text color -->
<p class="text-blue-500">Skibidi Rizz</p>

<!-- Background color -->
<p class="bg-red-500 text-white">Skibidi Rizz</p>

<!-- Border color -->
<p class="border-2 border-green-500">Skibidi Rizz</p>

<!-- Font size -->
<p class="text-4xl">Tralalero Tralala</p>

<!-- Font weight -->
<p class="font-bold">Tralalero Tralala</p>

<!-- Text transform -->
<p class="uppercase">Tralalero Tralala</p>
<p class="lowercase">Tralalero Tralala</p>

<!-- Text decoration -->
<p class="underline">Tralalero Tralala</p>
<p class="line-through">Tralalero Tralala</p>
<p class="overline">Tralalero Tralala</p>

<!-- Text alignment -->
<p class="text-left">Left aligned text</p>
<p class="text-center">Centered text</p>
<p class="text-right">Right aligned text</p>
<p class="text-justify">Justified text stretches evenly.</p>


<!-- ------------------------------- -->
<!-- 3.2 Spacing & Sizing            -->
<!-- ------------------------------- -->

<!-- Padding + width -->
<p class="bg-green-500 text-white w-fit">Whatsapp</p>

<p class="bg-green-500 text-white p-4 w-fit rounded-xl">Whatsapp</p>

<!-- Space between (horizontal) -->
<div class="flex space-x-4">
  <p class="bg-amber-900 text-white p-4 w-fit rounded-xl">Soul Sand</p>
  <p class="bg-amber-900 text-white p-4 w-fit rounded-xl">Soul Sand</p>
  <p class="bg-amber-900 text-white p-4 w-fit rounded-xl">Soul Sand</p>
</div>

<!-- Space between (vertical) -->
<div class="space-y-4 mt-4">
  <p class="bg-amber-900 text-white p-4 w-fit rounded-xl">Soul Sand</p>
  <p class="bg-amber-900 text-white p-4 w-fit rounded-xl">Soul Sand</p>
</div>


<!-- ------------------------------- -->
<!-- 3.3 Layout & Display            -->
<!-- ------------------------------- -->

<!-- Absolute positioning -->
<div class="relative h-32 bg-gray-100">
  <p class="absolute right-[50px] bg-blue-200">Slide to the left</p>
  <p class="absolute left-[50px] bg-green-200">Slide to the right</p>
</div>

<!-- Top and bottom positioning -->
<div class="relative h-32 bg-gray-200 mt-4">
  <p class="absolute top-0 bg-red-200">Top element</p>
  <p class="absolute bottom-10 bg-yellow-200">Bottom element</p>
</div>

<!-- Visibility -->
<p class="visible bg-green-200 p-2">Visible text</p>
<p class="invisible bg-red-200 p-2">Invisible text (still takes space)</p>

<!-- Display types -->
<p class="hidden bg-gray-300">Hidden</p>
<p class="block bg-blue-300">Block element</p>
<p class="inline bg-pink-300">Inline element</p>


<!-- ------------------------------- -->
<!-- 3.4 Flexbox                     -->
<!-- ------------------------------- -->

<!-- Direction -->
<div class="flex flex-row gap-2 bg-blue-100 p-4">
  <div class="bg-blue-500 text-white p-2 rounded">1</div>
  <div class="bg-blue-500 text-white p-2 rounded">2</div>
  <div class="bg-blue-500 text-white p-2 rounded">3</div>
</div>

<!-- Column direction -->
<div class="flex flex-col gap-2 bg-green-100 p-4 mt-4">
  <div class="bg-green-500 text-white p-2 rounded">A</div>
  <div class="bg-green-500 text-white p-2 rounded">B</div>
  <div class="bg-green-500 text-white p-2 rounded">C</div>
</div>

<!-- Wrap -->
<div class="flex flex-wrap bg-yellow-100 p-4 mt-4">
  <div class="bg-yellow-400 text-white p-2 m-1 rounded w-24">1</div>
  <div class="bg-yellow-400 text-white p-2 m-1 rounded w-24">2</div>
  <div class="bg-yellow-400 text-white p-2 m-1 rounded w-24">3</div>
  <div class="bg-yellow-400 text-white p-2 m-1 rounded w-24">4</div>
  <div class="bg-yellow-400 text-white p-2 m-1 rounded w-24">5</div>
</div>

<!-- Gap -->
<div class="flex gap-16 bg-red-100 p-4 mt-4">
  <div class="bg-red-500 text-white p-2 rounded">1</div>
  <div class="bg-red-500 text-white p-2 rounded">2</div>
  <div class="bg-red-500 text-white p-2 rounded">3</div>
</div>


<!-- ------------------------------- -->
<!-- 3.5 Grid                        -->
<!-- ------------------------------- -->

<!-- Columns -->
<div class="grid grid-cols-3 gap-2 bg-blue-100 p-4">
  <div class="bg-blue-500 text-white p-2 rounded">1</div>
  <div class="bg-blue-500 text-white p-2 rounded">2</div>
  <div class="bg-blue-500 text-white p-2 rounded">3</div>
</div>

<!-- Rows -->
<div class="grid grid-rows-2 gap-2 bg-green-100 p-4 h-32 mt-4">
  <div class="bg-green-500 text-white p-2 rounded">Row 1</div>
  <div class="bg-green-500 text-white p-2 rounded">Row 2</div>
</div>


<!-- ------------------------------- -->
<!-- 3.6 Interactivity & State       -->
<!-- ------------------------------- -->

<!-- Responsive text color -->
<p class="sm:text-red-800 md:text-orange-500 lg:text-yellow-500 xl:text-green-500">
  Health Meter
</p>

<!-- Hover and transition effects -->
<button class="bg-blue-300 text-white px-4 py-2 rounded-lg
               hover:bg-blue-700 transition duration-300 ease-in-out
               hover:scale-150 hover:rotate-180 mt-4">
  Touch Me
</button>

<!-- Dark mode support -->
<div class="bg-white dark:bg-gray-900 text-black dark:text-white mt-4 p-4 rounded">
  Responsive & Dark Mode Ready
</div>


<!-- ------------------------------- -->
<!-- Component Example: Navbar       -->
<!-- ------------------------------- -->

<nav class="bg-red-500 shadow-md px-6 py-4 flex justify-between items-center">
  <div class="flex space-x-1 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" class="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
    <h1 class="text-xl font-bold">SIMITC</h1>
  </div>
  <div class="space-x-6 flex">
    <a href="#" class="hover:text-white transition">Home</a>
    <a href="#" class="hover:text-white transition">About</a>
    <a href="#" class="hover:text-white transition">Contact</a>
  </div>
</nav>
```

## 🧪 Exercises

Scenario: Client revision requests
Tasks:
- Change navbar background to bg-gray-100
- Change Links to uppercase
- Rebrand “SIMITC” to “ITCommunity”, change the logo to a house
- Add a Hero section, an image covering the whole screen, any image
- Add a Hero title, a text in the middle of the screen with SIM ITC slogan “Your Arrow Into Tech”
- Change the Hero title Typography to Bold, 4xl size, font to something else

## 📝 Bonus Resources

* [Tailwind Docs](https://tailwindcss.com/)

## 🙌 Contributors
<!-- TODO: Update this, add your name, edit the role and github username and links -->
| Name         | Role                | GitHub                                             |
| ------------ | ------------------- | -------------------------------------------------- |
| Vanness Yang    | Speaker & Activity Creator 1 | [@yourgithub](https://github.com/yourgithub)       |
| Jayadipa Fukutaro    | Speaker & Activity Creator 2 | [@vanness1900](https://github.com/vanness1900)       |
| Desmond | Reviewer 1         | [@desraymondz](https://github.com/desraymondz)       |
| Yan Mei | Reviewer 2         | [@yxnmei](https://github.com/yxnmei)       |
