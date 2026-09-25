# EmmyTech Portfolio

Personal portfolio for Chukwu Chidera Emmanuel — AI Automation Analyst based in Lagos, Nigeria.

---

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- tsParticles (interactive particle background)
- Supabase (contact form)
- Vercel (deployment)

---

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file and fill in your Supabase credentials:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and replace the placeholder values:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these in your Supabase dashboard under:
**Settings > API > Project URL and anon public key**

### 3. Set up the Supabase database

- Open your Supabase project
- Go to **SQL Editor > New Query**
- Paste the contents of `supabase_setup.sql`
- Click **Run**

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Add the environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click Deploy

---

## Folder Structure

```
emmytech-portfolio/
├── app/
│   ├── layout.tsx         Root layout and metadata
│   ├── page.tsx           Main page assembly
│   └── globals.css        Global styles and CSS variables
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Journey.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── ParticleBackground.tsx
│       ├── TypeWriter.tsx
│       ├── ScrollReveal.tsx
│       └── GlowCard.tsx
├── lib/
│   ├── data.ts            All content lives here
│   └── supabaseClient.ts
├── public/
│   ├── photo.jpg
│   └── ChukwuChideraEmmanuel_Resume.pdf
├── supabase_setup.sql     Run this in Supabase SQL editor
├── .env.local.example     Copy this to .env.local and fill in values
└── README.md
```

---

## Updating Content

All your content (projects, skills, journey, services) lives in one file:

```
lib/data.ts
```

Edit that file to update anything without touching the components.
