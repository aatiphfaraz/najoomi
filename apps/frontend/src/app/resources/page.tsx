import Image from "next/image";
import { articles } from "../constants/articles";
import Button from "../components/ui/Button";
import Link from "next/link";


export default function ResourcesPage() {
    return (
        <div className=" min-h-screen flex flex-col">

            {/* Decorative Islamic/Magical Touches */}
            <div className="absolute right-12 top-24 z-0 opacity-25 pointer-events-none select-none">
                {/* Crescent moon */}
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 28C44 39.0457 35.0457 48 24 48C20.592 48 17.392 47.16 14.64 45.68C15.76 45.8933 16.9067 46 18.08 46C31.1503 46 42 35.1503 42 22.08C42 20.9067 41.8933 19.76 41.68 18.64C43.16 21.392 44 24.592 44 28Z" fill="#fde68a" />
                </svg>
            </div>
            <main className="flex-1 w-full max-w-6xl mx-auto  pt-12 relative z-10">
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                        Resources & Knowledge
                    </h1>
                    <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
                        Explore our collection of articles, guides, and insights on Islamic spiritual practices, dream interpretation, and personal development
                    </p>
                </header>

                {/* Featured Article */}
                <section className="relative rounded-3xl overflow-hidden shadow-lg mb-14 bg-[#ede9e3] min-h-[20rem] flex items-end">
                    {/* Background image absolutely positioned */}
                    <div className="absolute inset-0 w-full h-full z-0">
                        <Image
                            src={articles[0].image}
                            fill
                            alt={articles[0].title}
                            className="object-cover object-center w-full h-full opacity-80"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1e90c7]/70 via-[#15577a]/50 to-[#fde68a]/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    {/* Content overlay */}
                    <div className="relative z-20 p-8 md:p-14 flex flex-col justify-end h-full min-h-[18rem] w-full">
                        <span className="text-white/80 text-xs font-semibold mb-1">Featured Article</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-md">
                            {articles[0].title}
                        </h2>
                        <p className="text-white/90 mb-4 max-w-2xl">
                            {articles[0].description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
                            <span>{articles[0].date}</span>
                        </div>
                        <a href={`/resources/${articles[0].id}`}>
                            <Button variant="primary" className="w-fit px-6 py-2 mt-2 text-base">
                                Read Article
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>
                        </a>
                    </div>
                </section>

                {/* Resources Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                    {/* Only show all but the last article */}
                    {articles.slice(1).map((r, idx) => (
                        <Link href={`/resources/${r.id}`} key={idx}>
                            <div className="bg-white rounded-2xl shadow-md border border-[#eab308]/20 p-0 flex flex-col h-full min-h-[420px] overflow-hidden relative group transition-transform hover:-translate-y-1 hover:shadow-xl">
                                <div className="h-40 w-full overflow-hidden flex-shrink-0">
                                    <Image src={r.image} alt={r.title} width={400} height={180} className="object-cover w-full h-full" />
                                </div>
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#15577a] mb-1 leading-tight">{r.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{r.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex flex-col gap-0.5 text-xs text-gray-500">
                                            <span>{r.date}</span>
                                        </div>
                                        <div
                                            className="text-[#15577a] font-medium underline underline-offset-4 decoration-[#b6894a] hover:text-[#b6894a] transition-colors flex items-center gap-1 group text-sm px-2 py-1"
                                        >
                                            Read More
                                            <svg className="w-4 h-4 text-[#b6894a] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    );
}
