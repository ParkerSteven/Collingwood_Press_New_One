import Container from "@/components/ui/Container";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { formats } from "@/lib/formats";

export default function PublishingFormats() {
  return (
<section className="py-20 lg:py-24 bg-white border-b border-line">
                    <SectionHeading
                        eyebrow="Three Coordinated Editions"
                        title={
                            <>
                                Publish Your Book In Paperback, {" "}
                                <span className="italic text-[#E7665D]">
                                    Hardcover &amp; eBook Formats
                                </span>
                            </>
                        }
                        description="Every book is published in three editions hardcover, paperback and ebook, each designed for its format and built to one publishing standard."
                    />

                    <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-8">
                        {/* LEFT: Content */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col">
                                {formats.map((f, index) => {
                                    const Icon = f.icon;

                                    const updatedFormats = [
                                        {
                                            title: "Collector-Grade Hardcovers",
                                            description: (
                                                <>
                                                    Premium binding with dust jacket, built for bookstores, gifting, and long-term shelf presence.
                                                </>
                                            ),
                                        },
                                        {
                                            title: "French-Fold Trade Paperbacks",
                                            description: (
                                                <>
                                                    High-quality trade paperback with professional finishes, designed for wider retail reach.
                                                </>
                                            ),
                                        },
                                        {
                                            title: "Mastered Reflowable ePubs & Kindle",
                                            description: (
                                                <>
                                                    Clean, properly formatted files for Kindle and other devices that read well across platforms
                                                </>
                                            ),
                                        },
                                    ];

                                    const content = updatedFormats[index];

                                    if (!content) return null;

                                    return (
                                        <div
                                            key={content.title}
                                            className="flex items-start gap-5 py-6 border-t border-[#E7665D]/20 last:border-b"
                                        >
                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30">
                                                <Icon size={22} />
                                            </span>

                                            <div className="flex-1">
                                                <div className="flex items-center justify-between gap-3">
                                                    <h3 className="font-serif text-[1.2rem] font-bold text-ink">
                                                        {content.title}
                                                    </h3>

                                                    <span className="shrink-0 font-sans text-[10.5px] uppercase tracking-[0.16em] text-ink-muted font-semibold bg-[#fdf6f5] px-2.5 py-1 rounded-md border border-[#E7665D]/20">
                                                        {f.badge}
                                                    </span>
                                                </div>

                                                <p className="text-sm text-ink-soft leading-relaxed mt-3">
                                                    {content.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* RIGHT: Book Covers */}
                        <div className="relative flex items-center justify-center py-10">
                            <div className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-3xl bg-[#fdf6f5] border border-[#E7665D]/15 -z-10" />

                            <Image
                                src="/Publishing Mckp.png"
                                alt="Publishing Book Editions Mockup"
                                width={650}
                                height={650}
                                className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                                priority
                            />
                        </div>
                    </Container>
                </section>
  );
}
