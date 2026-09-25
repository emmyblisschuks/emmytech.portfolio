import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chukwu Chidera Emmanuel | AI Automation Analyst",
  description:
    "Self-taught AI and Automation specialist building intelligent workflows, AI agents, and RAG systems that solve real business problems. Based in Lagos, Nigeria.",
  keywords: [
    "AI Automation",
    "n8n",
    "Workflow Automation",
    "AI Agents",
    "RAG Chatbot",
    "Lagos Nigeria",
    "Chukwu Chidera Emmanuel",
  ],
  authors: [{ name: "Chukwu Chidera Emmanuel" }],
  openGraph: {
    title: "Chukwu Chidera Emmanuel | AI Automation Analyst",
    description: "Building intelligent workflows and AI systems that solve real business problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
