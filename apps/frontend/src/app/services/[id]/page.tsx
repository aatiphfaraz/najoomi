import { notFound } from "next/navigation";
import Article from "../../components/Article";
import type { Metadata } from "next";
import { serviceInfo } from "../../constants/services";


export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { id } = await params;
    const service = serviceInfo.find((r) => r.id === id);
    if (!service) {
        return {
            title: "Service Not Found | Najoomi",
            description: "This service could not be found.",
        };
    }
    const url = `https://najoomi.in/services/${service.id}`;
    const year = new Date().getFullYear();
    return {
        title: `${service.title} | Najoomi`,
        description: service.description,
        keywords: [service.title, "Najoomi", "Islamic Guidance", "Spiritual Services"],
        publisher: "Najoomi",
        robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true },
        },
        openGraph: {
            title: service.title,
            description: service.description,
            url,
            type: "article",
            siteName: "Najoomi",
            locale: "en_US",
            images: [service.image.startsWith('http') ? service.image : `https://najoomi.in${service.image}`],
            publishedTime: year + "-01-01",
            tags: [service.title],
            section: "Spirituality",
        },
        twitter: {
            card: "summary_large_image",
            title: service.title,
            description: service.description,
            images: [service.image.startsWith('http') ? service.image : `https://najoomi.in${service.image}`],
            site: "@najoomi",
        },
        icons: {
            icon: "/favicon.ico",
        },
        alternates: {
            canonical: url,
            languages: {
                en: url,
            },
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
            "subject": service.title,
            "summary": service.description,
            "classification": "Religion, Spirituality, Islamic Guidance",
            "apple-mobile-web-app-capable": "yes",
            "apple-mobile-web-app-title": "Najoomi",
            "apple-mobile-web-app-status-bar-style": "black-translucent",
            "Content-Language": "en",
            "X-UA-Compatible": "IE=edge",
            "dc.title": service.title,
            "dc.description": service.description,
            "dc.publisher": "Najoomi",
            "dc.language": "en",
            "dc.subject": service.title,
            "dc.rights": `Najoomi © ${year}`,
        },
    };
}

export default async function ServiceDetailPage({ params }: any) {
    const { id } = await params;
    const service = serviceInfo.find((r) => r.id === id);
    if (!service) return notFound();

    return (
        <>
            <Article
                title={service.title}
                description={service.description}
                image={service.image}
                contentBody={service.contentBody}
                faqs={service.faqs}
                backHref="/services"
            />
            {/* FAQPage Schema */}
            {service.faqs && service.faqs.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": service.faqs.map(faq => ({
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
            {/* Service Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: service.title,
                        description: service.description,
                        image: [service.image.startsWith('http') ? service.image : `https://najoomi.in${service.image}`],
                        provider: {
                            "@type": "Organization",
                            name: "Najoomi",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://najoomi.in/najoomi-logo.png"
                            }
                        },
                        areaServed: "Global",
                        serviceType: "Spiritual Guidance",
                        url: `https://najoomi.in/services/${service.id}`,
                        inLanguage: "en"
                    })
                }}
            />
            {/* BreadcrumbList Schema */}
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
                                name: "Services",
                                item: "https://najoomi.in/services"
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: service.title,
                                item: `https://najoomi.in/services/${service.id}`
                            }
                        ]
                    })
                }}
            />
            {/* Organization Schema */}
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
