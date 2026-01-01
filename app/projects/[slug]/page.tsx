// app/projects/[slug]/page.tsx

import { PROJECTS } from "@/lib/content";
import { notFound } from "next/navigation";
import ProjectDetailContent from "@/components/sections/ProjectDetailContent";

// --- GENERATE STATIC PARAMS (Server Side) ---
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

// --- SERVER COMPONENT ---
// Perhatikan: params di Next.js 15+ adalah Promise
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // Await params dulu
  const { slug } = await params;
  
  // Cari Project
  const project = PROJECTS.find((p) => p.slug === slug);

  // Jika tidak ketemu
  if (!project) {
    return notFound();
  }

  // Render Client Component dan kirim data project sebagai props
  return <ProjectDetailContent project={project} />;
}