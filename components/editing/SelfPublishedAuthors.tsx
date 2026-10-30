import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function SelfPublishedAuthors() {
  return (
<section
                    id="process"
                    className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
                >
                    <Container className="flex flex-col gap-14 sm:gap-16">
                        <AnimatedReveal y={20} duration={0.6}>
                        <SectionHeading
                            eyebrow="Built for Independent Authors"
                            title={
                                <>
                                    Expert{" "}
                                    <span className="italic text-[#E7665D]">
                                        Book Editing Services
                                    </span>{" "}
                                    for Self-Published Authors
                                </>
                            }
                            description={
                                <>
                                    The Collingwood Press provides editing services for independent and self-published authors, whether you are finishing a first draft or preparing the next book in a series. We edit fiction, nonfiction and children&apos;s books, including picture books, chapter books and middle grade, always shaped around the readers each book is written for.
                                </>
                            }
                        />
                        </AnimatedReveal>
                    </Container>
                </section>
  );
}
