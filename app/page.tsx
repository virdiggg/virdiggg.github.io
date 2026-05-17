import Link from 'next/link';
import portfolioData from '@public/projects.json';
import { Project, OpenSource } from '@app/interface/project';

export default function Home() {
    const techs = portfolioData.techs as string[];
    const repos = portfolioData.repos as string[];
    const projects = portfolioData.projects as Project[];
    const openSource = portfolioData.openSource as OpenSource[];

    const getRepoLabel = (url: string) => {
        if (url.includes('github.com')) return 'GitHub Profile';
        if (url.includes('packagist.org')) return 'Packagist (PHP)';
        return 'Repository';
    };

    return (
        <main className="max-w-5xl mx-auto px-6 py-12 text-zinc-800">
            {/* Header */}
            <header className="mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-zinc-900">
                    Virdi Gunawan
                </h1>
                <p className="mt-4 text-xl text-zinc-600 font-medium">
                    Backend Specialist & Systems Architect
                </p>

                {/* Tech Stacks */}
                <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-500">
                    <span className="font-semibold text-zinc-700">Core Stack:</span>
                    <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-0.5 rounded-md text-xs font-semibold border border-blue-100 bg-blue-50 text-blue-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Repos */}
                {repos && repos.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-500">
                        <span className="font-semibold text-zinc-700">Profiles:</span>
                        <div className="flex flex-wrap gap-4">
                            {repos.map((url) => (
                                <a
                                    key={url}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-600 hover:text-blue-600 text-xs font-medium transition inline-flex items-center gap-1 underline decoration-zinc-300 hover:decoration-blue-600"
                                >
                                    {getRepoLabel(url)}
                                    <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Projects Section */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b border-zinc-200 pb-2 text-zinc-900">Projects</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
                        >
                            <h3 className="text-xl font-bold mb-2 text-zinc-900 group-hover:text-blue-600">
                                {project.title}
                            </h3>
                            <p className="text-zinc-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                                {project.summary}
                            </p>

                            {/* Tech Stack Tags Proyek */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {project.techStack.map((tech) => (
                                    <span 
                                        key={tech} 
                                        className="px-2 py-0.5 text-xs font-medium rounded bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <Link 
                                href={`/project/${project.id}`} 
                                className="text-blue-600 text-sm font-semibold hover:text-blue-800 inline-flex items-center gap-1 group"
                            >
                                View Details <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Open Source Section */}
            <section>
                <h2 className="text-2xl font-bold mb-6 border-b border-zinc-200 pb-2 text-zinc-900">Open Source Contributions</h2>
                <div className="space-y-4">
                    {openSource.map((os) => (
                        <div key={os.id} className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm">
                            <h3 className="text-lg font-bold mb-1 text-zinc-900">{os.title}</h3>
                            <p className="text-zinc-600 text-sm mb-4 leading-relaxed">{os.summary}</p>
                            <a
                                href={os.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center gap-1"
                            >
                                View on GitHub &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}