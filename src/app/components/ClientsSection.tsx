import { Hexagon, Triangle, Circle, Box, Code, Layers } from 'lucide-react';

export default function ClientsSection() {
    const techStack = [
        { name: 'React', icon: Hexagon },
        { name: 'Next.js', icon: Triangle },
        { name: 'Flutter', icon: Circle },
        { name: 'Laravel', icon: Box },
        { name: 'Python', icon: Code },
        { name: 'n8n', icon: Layers }
    ];

    return (
        <section className="py-12 border-t border-b border-gray-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">Technologies We Use</p>
                <div className="flex flex-wrap items-center justify-between gap-8 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                    {techStack.map((tech, i) => (
                        <div key={i} className="flex items-center gap-2 group cursor-pointer">
                            <tech.icon className="h-6 w-6 text-teal-600 transition-transform group-hover:scale-110" />
                            <span className="text-xl font-bold text-slate-700">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
