const WEBHOOK_URL = 'https://hook.us1.make.com/lqy6w5qba6mwnnbak7likgzti4edzt4h';

export async function submitToGoogleSheet(data: any) {
    try {
        const name = data.name || '';
        const email = data.email || '';
        const phone = data.phone || '';
        const message = data.message || '';
        const bookTitle = data.bookTitle || '';
        const genre = data.genre || '';
        const manuscriptStatus = data.manuscriptStatus || '';
        const baseSource = data.source || 'Unknown Form';
        const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
        const source = pageUrl ? `${baseSource} | Page URL: ${pageUrl}` : baseSource;
        const timestamp = new Date().toISOString();
        const promotion_channel = data.promotion_channel || 'Unknown Channel';
        const marketingConsent = data.marketingConsent ? 'Yes' : 'No';

        // Prevent Sheets from treating values like "+1..." as formulas when Make writes them
        const sanitizeForSheet = (value: any) => {
            const str = (value || '').toString();
            return /^[=+\-@]/.test(str) ? `'${str}` : str;
        };

        const sheetPhone = sanitizeForSheet(phone);

        const emailBody = `Hi,

You have received a new lead from the website. Here are the details:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
Book Title: ${bookTitle}
Genre: ${genre}
Manuscript Status: ${manuscriptStatus}
Source: ${source}
Submitted At: ${timestamp}
Marketing Consent: ${marketingConsent}
promotion_channel: ${promotion_channel}

---
This is an auto-generated lead notification from the website.`;

        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                phone: sheetPhone,
                manuscriptStatus,
                source,
                timestamp,
                marketingConsent,
                emailBody,
                promotion_channel,
                emailSubject: `New Lead: ${name} via ${source}`,
            }),
        });

        if (!response.ok) {
            throw new Error(`Webhook error: ${response.status}`);
        }

        // Redirect to Thank You page
        if (typeof window !== 'undefined' && !data.preventRedirect) {
            window.location.href = '/thankyou/';
        }

        return {
            success: true,
            message: "Thank you! Your submission has been received. We'll get back to you within 24 hours.",
        };
    } catch (error) {
        console.error('Submission error:', error);
        return {
            success: false,
            message: 'There was an issue submitting your form. Please try again or contact us directly.',
        };
    }
}
