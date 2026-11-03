import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

type BlogArticle = {
    title: string;
    date: string;
    excerpt: string;
    href: string;
};

type EditorialBlogSectionProps = {
    blogArticles: BlogArticle[];
};

export default function EditorialBlogSection({
    blogArticles,
}: EditorialBlogSectionProps) {
    return (
        <section
            id="blog"
            className="py-20 lg:py-24 bg-[#fdfbf7] border-b border-line"
        >
            <Container className="flex flex-col gap-12">
                <AnimatedReveal y={20} duration={0.55} amount={0.2}>
                    <SectionHeading
                        eyebrow="Author Educational Dispatches"
                        title={
                            <>
                                From the Collingwood Press{" "}
                                <span className="italic text-[#E7665D]">Editorial Blog</span>
                            </>
                        }
                        description="Practical publishing guidance and industry analysis written by our senior editors."
                    />
                </AnimatedReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
                    {blogArticles.map((art, index) => (
                        <AnimatedReveal
                            key={art.href}
                            as="article"
                            y={24}
                            duration={0.5}
                            delay={Math.min(index, 5) * 0.08}
                            amount={0.15}
                            hoverY={-5}
                            className="p-7 sm:p-8 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-[#E7665D]/50 transition-[border-color,box-shadow] duration-300"
                        >
                            <div>
                                <span className="text-[10px] uppercase tracking-wider text-[#E7665D] font-semibold block mb-2">
                                    {art.date}
                                </span>

                                <h4 className="font-serif text-lg font-bold text-ink leading-snug">
                                    {art.title}
                                </h4>

                                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mt-2.5">
                                    {art.excerpt}
                                </p>
                            </div>

                            <div className="mt-5 pt-3 border-t border-line">
                                <Button
                                    href={art.href}
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                >
                                    <span>Read More</span>
                                </Button>
                            </div>
                        </AnimatedReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
