Legal Dashboard

A modern responsive legal workflow dashboard built with Next.js, TypeScript and Tailwind CSS.

This project helps legal teams manage active matters, monitor assignments, track deadlines and organize workflows through a clean and responsive user interface.

Features
Dashboard Functionality
Responsive dashboard layout
Desktop table view
Mobile card view
Real-time matter filtering
Search by title or assignee
Filter by status
Filter by priority
Matter sorting system
Debounced search functionality
Local storage persistence
Dynamic due date indicators
Loading skeleton states
Empty state UI
Interactive hover animations
Smooth transitions
Sticky navigation header
Clean modern UI design


Tech Stack
Next.js
React
TypeScript
Tailwind CSS
Lucide React Icons


Project Structure
src/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── matter/
│   │   ├── MatterCard.tsx
│   │   ├── MatterFilters.tsx
│   │   └── MatterTable.tsx
│   │
│   └── ui/
│       └── LoadingSkeleton.tsx
│
├── data/
│   └── matter.ts
│
└── types/
    └── matter.ts


Installation
Clone the repository
git clone  https://github.com/SanelisiweMhlawuli/legal-dashboard.git
Navigate into the project
cd legal-dashboard
Install dependencies
npm install
Run the development server
npm run dev
Open in browser
http://localhost:3000
Matter Features

Each matter includes:

Matter title
Current status
Priority level
Assigned team member
Due date tracking

The dashboard dynamically filters and updates results in real time.

Debounced Search

The search input uses debouncing to improve performance and reduce unnecessary filtering while users are typing.

This creates a smoother and more optimized user experience.

Local Storage Persistence

Search values, filters, and sorting preferences are automatically saved using local storage.

This allows users to refresh the page without losing their dashboard state.

Sorting System

Users can sort matters by:

Newest
Oldest
Priority
Alphabetical order (A–Z)

Sorting updates instantly without reloading the page.

Responsive Design
Mobile Experience
Card-based layout
Touch-friendly interactions
Optimized spacing
Responsive stacking layout
Desktop Experience
Interactive data table
Enhanced hover effects
Improved readability
Optimized workflow visibility
UI & UX Improvements

The interface includes several modern UX enhancements:

Smooth hover transitions
Animated loading skeletons
Dynamic urgency colors for deadlines
Rounded modern UI components
Consistent spacing system
Responsive layout behavior
Future Improvements
Authentication
Matter detail pages
Pagination
API integration
Database support
Notifications system
Dark mode
Charts and analytics
Role-based permissions
Author

Built by Sanelisiwe Mhlawuli using Next.js, TypeScript and Tailwind CSS.
