"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import reviews from '../../public/assets/images/socials/reviews.svg';
import instagram from '../../public/assets/images/socials/instagram.svg';
import tiktok from '../../public/assets/images/socials/tiktok.svg';
import Bark from '../../public/assets/images/socials/bark.webp';
import g2 from '../../public/assets/images/socials/g2.png';
import ibpaonline from '../../public/assets/images/socials/ibpa-online.jpg';


const StickySocialStripLeft = () => {
    const socialLinks = [
        // {
        //     name: 'ibpaonline',
        //     href: 'https://www.ibpa-online.org/',
        //     img: ibpaonline
        // },
        {
            name: 'Bark',
            href: 'https://www.bark.com/en/us/company/collingwood-press/AVXNky',
            img: Bark
        },

        {
            name: 'G2',
            href: 'https://www.g2.com/sellers/collingwood-press',
            img: g2
        },
        {
            name: 'Reviews',
            href: 'https://www.reviews.io/company-reviews/store/www.thecollingwoodpress.com',
            img: reviews
        }

    ];

    return (
        <div className="fixed left-0 top-1/2 z-[9999] hidden -translate-y-1/2 md:flex">
            <div className="flex flex-col items-center gap-1.5 rounded-r-2xl border border-l-0 border-white/20 bg-gradient-to-b from-[#1d2a48]/95 to-[#111a33]/95 px-2 py-3 shadow-[0_10px_24px_rgba(4,10,30,0.42)] backdrop-blur-md">
                {/* BBB Seal */}
                <Link
                    href="https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/#sealclick"
                    target="_blank"
                    rel="nofollow"
                    aria-label="Open BBB profile"
                    className="mb-0.5 flex w-9 items-center justify-center rounded-md border border-white/30 bg-white/95 p-1 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                    <Image
                        src="https://seal-austin.bbb.org/seals/blue-seal-63-134-bbb-1000231047.png"
                        alt="BBB Review"
                        width={28}
                        height={60}
                        className="h-auto w-7 object-contain"
                    />
                </Link>
                <Link
                    href="https://www.ibpa-online.org/"
                    target="_blank"
                    rel="nofollow"
                    aria-label="Open IBPA profile"
                    className="mb-1 flex w-9 items-center justify-center rounded-md border border-white/30 bg-white/95 p-1 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                    <Image
                        src={ibpaonline}
                        alt="IBPA Online"
                        width={28}
                        height={36}
                        className="h-auto w-7 object-contain"
                    />
                </Link>
                {socialLinks.map((social) => (
                    <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${social.name}`}
                        className="group grid h-9 w-9 place-items-center rounded-md border border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-[0_5px_14px_rgba(0,0,0,0.26)]"
                        title={social.name}
                    >
                        {social.img ? (
                            <Image
                                src={social.img}
                                alt={`${social.name} Icon`}
                                width={28}
                                height={28}
                                className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        ) : (
                            // <div className="flex h-7 w-7 items-center justify-center transition-transform duration-300 group-hover:scale-110 [&>svg]:h-full [&>svg]:w-full">
                            //     {social.icon}
                            // </div>
                            ""
                        )}
                    </Link>
                ))}

            </div>
        </div>
    );
};


export {
    StickySocialStripLeft,
};
