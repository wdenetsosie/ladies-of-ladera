# System Architecture & Data Schema

## 1. Tech Stack Recommendation (AI-Optimized)
* **Frontend/Backend:** Next.js (App Router)
* **Styling:** Tailwind CSS + Shadcn/ui Components
* **Database:** Prisma ORM with PostgreSQL or Supabase
* **Auth:** NextAuth.js or Supabase Auth

## 2. Database Schema (Prisma/SQL Logic)

### User Model
```prisma
model User {
  id            String         @id @default(cuid())
  name          String
  email         String         @unique
  createdAt     DateTime       @default(now())
  bookings      Booking[]
  rsvps         SocialRSVP[]
}