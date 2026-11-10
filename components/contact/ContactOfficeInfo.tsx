import { MapPin, Phone, Mail } from "lucide-react";
export default function ContactOfficeInfo() {
 return (
<div className="rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-9 lg:p-10 shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]">
                                <div className="mb-7">
                                    <span className="font-sans text-[10px] uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                        Direct Editorial Contact
                                    </span>

                                    <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-ink">
                                        Connect with Us
                                    </h3>

                                    <p className="mt-3 font-sans text-sm text-ink-soft leading-relaxed">
                                        Prefer to speak directly with our team?
                                        Reach us using the contact details below.
                                    </p>
                                </div>

                                {/* Map */}
                                <div className="overflow-hidden rounded-xl border border-[#E7665D]/20 shadow-sm">
                                    <a href="https://www.google.com/maps/search/?api=1&query=The+Collingwood+Press+6777+Camp+Bowie+Blvd+Fort+Worth+TX+76116"
                                        target="_blank"
                                    >
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.963072729635!2d-97.4339746!3d32.7202269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7323299d9751%3A0xcc1f2e674682154f!2sThe%20Collingwood%20Press!5e1!3m2!1sen!2sus!4v1792605694864!5m2!1sen!2sus"
                                            width="100%"
                                            height="260"
                                            style={{ border: "0" }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            title="The Collingwood Press Location"
                                        />
                                    </a>

                                </div>

                                {/* Contact Details */}
                                <div className="mt-8 flex flex-col gap-5">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D]">
                                            <MapPin size={19} />
                                        </div>

                                        <div>
                                            <h4 className="font-sans text-sm font-semibold text-ink">
                                                Office Address
                                            </h4>
                                            <a href="https://www.google.com/maps/search/?api=1&query=The+Collingwood+Press+6777+Camp+Bowie+Blvd+Fort+Worth+TX+76116" target="_blank">

                                                <p className="mt-1 font-sans text-sm leading-relaxed text-ink-soft">
                                                    6777 Camp Bowie Blvd Ste. 125,
                                                    Fort Worth, TX 76116
                                                </p>
                                            </a>

                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D]">
                                            <Phone size={19} />
                                        </div>

                                        <div>
                                            <h4 className="font-sans text-sm font-semibold text-ink">
                                                Phone Number
                                            </h4>

                                            <a
                                                href="tel:+19362233644"
                                                className="mt-1 block font-sans text-sm text-ink-soft hover:text-[#E7665D]"
                                            >
                                                +1 (936) 223-3644
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D]">
                                            <Mail size={19} />
                                        </div>

                                        <div>
                                            <h4 className="font-sans text-sm font-semibold text-ink">
                                                Email Address
                                            </h4>

                                            <a
                                                href="mailto:contact@thecollingwoodpress.com"
                                                className="mt-1 block break-all font-sans text-sm text-ink-soft hover:text-[#E7665D]"
                                            >
                                                contact@thecollingwoodpress.com
                                            </a>
                                        </div>
                                    </div>
                                </div>



                            </div>
 );
}
