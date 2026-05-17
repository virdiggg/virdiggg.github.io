import { notFound } from 'next/navigation';
import Link from 'next/link';
import portfolioData from '@public/projects.json';
import { Project } from '@app/interface/project';

interface ProjectDetailPageProps {
    params: Promise<{ id: string }> | { id: string };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const resolvedParams = await params;

    const projects = portfolioData.projects as Project[];
    const project = projects.find((p) => p.id === resolvedParams.id);

    if (!project) {
        notFound();
    }

    return (
        <main className="max-w-4xl mx-auto px-6 py-12 text-zinc-800">
            {/* Back Button */}
            <Link href="/" className="text-zinc-500 hover:text-blue-600 text-sm mb-8 inline-flex items-center gap-1 font-medium transition">
                &larr; Back to Home
            </Link>

            {/* Title Section */}
            <h1 className="text-3xl font-extrabold mb-2 text-zinc-900 tracking-tight">
                {project.id.replace(/-/g, " ").toUpperCase()}{" "}
                <span className="text-zinc-300 font-normal mx-1">—</span> {project.title}
            </h1>

            <p className="text-zinc-600 text-lg mb-6 text-justify leading-relaxed">{project.summary}</p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                    <span 
                        key={tech} 
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 border border-blue-100 text-blue-700"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="space-y-10">
                {/* Description */}
                <section className="border-t border-zinc-200 pt-6">
                    <h2 className="text-xl font-bold mb-4 text-zinc-900">Description</h2>
                    <div className="space-y-4 text-zinc-600 leading-relaxed text-justify">
                        {project.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </section>

                {/* Key Features */}
                <section className="border-t border-zinc-200 pt-6">
                    <h2 className="text-xl font-bold mb-4 text-zinc-900">Key Features</h2>
                    <dl className="grid gap-4 sm:grid-cols-2">
                        {project.keyFeatures.map((feature, index) => (
                            <div key={index} className="p-5 rounded-xl bg-white border border-zinc-200 shadow-sm">
                                <dt className="font-bold text-zinc-900 mb-1.5">{feature.title}</dt>
                                <dd className="text-sm text-zinc-600 text-justify leading-relaxed">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                {/* System Architecture - Latar belakang putih bersih agar panah hitam terlihat jelas */}
                {project.systemArchitecture && (
                    <section className="border-t border-zinc-200 pt-6">
                        <h2 className="text-xl font-bold mb-4 text-zinc-900">System Architecture</h2>
                        <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-sm text-center">
                            <span className="text-zinc-400 text-xs block mb-3 break-all font-mono">Source: {project.systemArchitecture}</span>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.systemArchitecture}
                                alt={`${project.title} System Architecture`}
                                className="mx-auto rounded-lg border border-zinc-100 max-h-[500px] object-contain bg-white"
                            />
                        </div>
                    </section>
                )}

                {/* Workflows */}
                {project.workflow && (
                    <section className="border-t border-zinc-200 pt-6">
                        <h2 className="text-xl font-bold mb-4 text-zinc-900">Workflows</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <a href={project.workflow.business} target="_blank" rel="noreferrer" className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-blue-300 hover:shadow-sm transition block text-center group">
                                <span className="font-semibold text-blue-600 block mb-1 group-hover:text-blue-700">Business Workflow &rarr;</span>
                                <span className="text-xs text-zinc-400 block truncate">{project.workflow.business}</span>
                            </a>
                            <a href={project.workflow.system} target="_blank" rel="noreferrer" className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-blue-300 hover:shadow-sm transition block text-center group">
                                <span className="font-semibold text-blue-600 block mb-1 group-hover:text-blue-700">System Workflow &rarr;</span>
                                <span className="text-xs text-zinc-400 block truncate">{project.workflow.system}</span>
                            </a>
                        </div>
                    </section>
                )}

                {/* Confidentiality Notice */}
                {project.note && (
                    <section className="p-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 text-sm leading-relaxed shadow-sm">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                            <div>
                                <span className="font-bold block text-amber-950 mb-0.5">Project Note:</span>
                                {project.note}
                            </div>
                        </div>
                    </section>
                )}

                {/* Screenshots */}
                <section className="border-t border-zinc-200 pt-6">
                    <h2 className="text-xl font-bold mb-4 text-zinc-900">Screenshots</h2>
                    <div className="grid gap-6">
                        {project.screenshots.map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm p-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`${project.title} Screenshot ${index + 1}`}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}