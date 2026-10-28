
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
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
                { status: 400 }
            );
        }

        const scriptUrl = process.env.GOOGLE_SHEET_SCRIPT_URL;

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
            throw new Error(`Apps Script HTTP ${response.status}`);
        }

        const result = await response.json();

        if (result.success !== true) {
            throw new Error(result.message || "Sheet save failed");
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("New Google Sheet error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to save lead in Google Sheet.",
            },
            { status: 500 }
        );
    }
}
