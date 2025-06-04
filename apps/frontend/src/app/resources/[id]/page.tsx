import { notFound } from "next/navigation";
import Article from "../../components/Article";
import type { Metadata } from "next";
import { articles } from "../../constants/articles";

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { id } = await params;
    const article = articles.find((r) => r.id === id);
    if (!article) {
        return {
            title: "Article Not Found | Najoomi",
            description: "This article could not be found.",
        };
    }
    const url = `https://najoomi.in/resources/${article.id}`;
    const year = new Date().getFullYear();
    const keywords = article.keywords;
    const imageUrl = article.image.startsWith('http') ? article.image : `https://najoomi.in${article.image}`;
    return {
        title: `${article.title} | Najoomi`,
        description: article.description,
        keywords,
        publisher: "Najoomi",
        robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true },
        },
        openGraph: {
            title: article.title,
            description: article.description,
            url,
            type: "article",
            siteName: "Najoomi",
            locale: "en_US",
            images: [imageUrl],
            publishedTime: article.date,
            tags: [article.title],
            section: "Spirituality",
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.description,
            images: [imageUrl],
            site: "@najoomi",
        },
        icons: {
            icon: "/favicon.ico",
        },
        metadataBase: new URL("https://najoomi.in"),
        category: "Religion, Spirituality, Islamic Guidance",
        other: {
            "theme-color": "#fde68a",
            "copyright": `Najoomi © ${year}`,
            "generator": "Next.js",
            "revisit-after": "7 days",
            "distribution": "global",
            "rating": "general",
            "audience": "all",
            "subject": article.title,
            "summary": article.description,
            "classification": "Religion, Spirituality, Islamic Guidance",
            "apple-mobile-web-app-capable": "yes",
            "apple-mobile-web-app-title": "Najoomi",
            "apple-mobile-web-app-status-bar-style": "black-translucent",
            "Content-Language": "en",
            "X-UA-Compatible": "IE=edge",
            "dc.title": article.title,
            "dc.description": article.description,
            "dc.publisher": "Najoomi",
            "dc.language": "en",
            "dc.subject": article.title,
            "dc.rights": `Najoomi © ${year}`,
        },
    };
}

export default async function Page({ params }: any) {
    const { id } = await params;
    const article = articles.find((r) => r.id === id);
    if (!article) return notFound();

    return (
        <>
            <Article
                title={article.title}
                description={article.description}
                image={article.image}
                contentBody={article.contentBody}
                faqs={article.faqs}
            />
            {article.faqs && article.faqs.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": article.faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })
                    }}
                />
            )}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": `https://najoomi.in/resources/${article.id}`
                        },
                        headline: article.title,
                        description: article.description,
                        image: [article.image.startsWith('http') ? article.image : `https://najoomi.in${article.image}`],
                        publisher: {
                            "@type": "Organization",
                            name: "Najoomi",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://najoomi.in/najoomi-logo.png"
                            }
                        },
                        datePublished: article.date,
                        dateModified: article.date,
                        articleSection: "Spirituality",
                        articleBody: article.description,
                        url: `https://najoomi.in/resources/${article.id}`,
                        inLanguage: "en"
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Resources",
                                item: "https://najoomi.in/resources"
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: article.title,
                                item: `https://najoomi.in/resources/${article.id}`
                            }
                        ]
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Najoomi",
                        url: "https://najoomi.in",
                        logo: {
                            "@type": "ImageObject",
                            url: "https://najoomi.in/najoomi-logo.png"
                        },
                        sameAs: [
                            "https://twitter.com/najoomi",
                            "https://facebook.com/najoomi",
                            "https://instagram.com/najoomi"
                        ]
                    })
                }}
            />
        </>
    );
}
