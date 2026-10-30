export const editorialTiers = [
    {
        tier: "Tier 01",
        name: "Proofreading",
        tagline: "The Final Pass Before Publication",
        description:
            "Final check before publishing. We fix lingering typos, spelling errors, punctuation mistakes, and formatting issues for a flawless, professional book.",
        focus: [
            "Typographical errors and spelling mistakes",
            "Punctuation and formatting consistency",
            "Final manuscript quality checks",
            "Clean, corrected manuscript with tracked changes",
        ],
        bestFor:
            "Manuscripts that are finished and ready for production.",
        startingPrice: "$0.01 per word",
        turnaround: "1 to 2 weeks",
        badge: "Final Quality Check",
    },
    {
        tier: "Tier 02",
        name: "Copy Editing",
        tagline: "Grammar, Clarity, and Consistency",
        description:
            "We perfect grammar, punctuation, spelling, and syntax per Chicago Manual of Style, flagging timeline errors, name mismatches, and factual inconsistencies.",
        focus: [
            "Grammar, punctuation, spelling, and syntax",
            "Chicago Manual of Style compliance",
            "Timeline, character names, and factual consistency",
            "Custom style sheet and tracked changes",
        ],
        bestFor:
            "Books with solid structure that need precision.",
        startingPrice: "$0.02 per word",
        turnaround: "2 to 4 weeks",
        badge: "Editorial Precision",
    },
    {
        tier: "Tier 03",
        name: "Line Editing",
        tagline: "Stronger Prose and Author Voice",
        description:
            "We refine flow, pacing, and word choice, cut repetition, and maintain consistent tone improving your writing while preserving your voice.",
        focus: [
            "Sentence flow, rhythm, and pacing",
            "Word choice and repetition reduction",
            "Author voice and tonal consistency",
            "Editorial comments and tracked changes",
        ],
        bestFor:
            "Structurally sound manuscripts that need stronger prose.",
        startingPrice: "$0.03 per word",
        turnaround: "3 to 5 weeks",
        badge: "Flow & Pacing",
    },
    {
        tier: "Tier 04",
        name: "Developmental Editing",
        tagline: "Structure, Story, and Manuscript Development",
        description:
            "We analyze your entire book pacing, chapter flow, character arcs, themes, and argument structure to ensure a powerful, cohesive read.",
        focus: [
            "Narrative pacing and chapter organization",
            "Character arcs, themes, and genre expectations",
            "Nonfiction argument structure and reader progression",
            "Detailed editorial letter and inline comments",
        ],
        bestFor:
            "First drafts, and books where the story or argument isn't working yet.",
        startingPrice: "$0.05 per word",
        turnaround: "4 to 8 weeks",
        badge: "Structural Editing",
    },
];

export const editingSteps = [
    {
        id: 1,
        title: "Send Your Manuscript",
        description:
            "Upload your manuscript in Word (.doc or .docx). Google Docs and RTF files are accepted too. Want to test the fit first? Ask for a free sample edit.",
        link: {
            text: "manuscript",
            href: "/blogs/prepare-a-manuscript-for-an-editor",
        },
    },
    {
        id: 2,
        title: "Get a Fixed-Price Quote",
        description:
            "An editor reads your opening pages, confirms the level of work and sends a quote with the scope, price and timeline.",
        needsVerification: true,
    },
    {
        id: 3,
        title: "Your Editor Gets to Work",
        description:
            "Your assigned editor works through your manuscript in Microsoft Word, at the level you chose.",
    },
    {
        id: 4,
        title: "Review Every Change",
        description:
            "You receive the edited manuscript with everything that goes with it, then accept or reject each change.",
    },
];
