
import { NextResponse } from "next/server";

const ALLOWED_ORIGINS = [
    "https://www.thecollingwoodpress.com",
    "https://thecollingwoodpress.com",
    "https://childrenlp.thecollingwoodpress.com",
    "https://marketinglp.thecollingwoodpress.com",
];

function getCorsHeaders(request: Request) {
    const origin = request.headers.get("origin") || "";

    return {
        ...(ALLOWED_ORIGINS.includes(origin)
            ? { "Access-Control-Allow-Origin": origin }
            : {}),
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Vary": "Origin",
    };
}

// Handle browser preflight requests
export async function OPTIONS(request: Request) {
    const origin = request.headers.get("origin");

    if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
        return new Response(null, { status: 403 });
    }

    return new Response(null, {
        status: 204,
        headers: getCorsHeaders(request),
    });
}

// Handle form submission
export async function POST(request: Request) {
    const corsHeaders = getCorsHeaders(request);

    try {
        const origin = request.headers.get("origin");

        // Allow browser requests from approved domains
        if (origin && !ALLOWED_ORIGINS.includes(origin)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Origin not allowed",
                },
                {
                    status: 403,
                    headers: corsHeaders,
                }
            );
        }

        const data = await request.json();

        const name = String(data.name ?? "").trim();
        const email = String(data.email ?? "").trim();
        const phone = String(data.phone ?? "").trim();
        const message = String(data.message ?? "").trim();

        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill all required fields.",
                },
                {
                    status: 400,
                    headers: corsHeaders,
                }
            );
        }

        const scriptUrl = process.env.GOOGLE_SHEET_SCRIPT_URL?.trim();

        if (!scriptUrl) {
            throw new Error("Apps Script URL missing");
        }

        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
                source: data.source ?? "Contact Form",
                marketingConsent: data.marketingConsent === true,
            }),
            redirect: "follow",
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(
                `Apps Script HTTP ${response.status}`
            );
        }

        const result = await response.json();

        if (result.success !== true) {
            throw new Error(
                result.message || "Sheet save failed"
            );
        }

        return NextResponse.json(
            { success: true },
            { headers: corsHeaders }
        );

    } catch (error) {
        console.error("New Google Sheet error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to save lead in Google Sheet.",
            },
            {
                status: 500,
                headers: corsHeaders,
            }
        );
    }
}
