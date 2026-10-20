'use client';

import { useEffect } from 'react';
import { captureAndGetAdTracking } from '@/lib/adTracking';

/**
 * Site-wide: captures msclkid into localStorage on every page load (last-click-wins).
 * Only syncs to Brevo when a real ad-click id (current or previously stored) exists —
 * pure organic/direct visits are skipped so anonymous browsing doesn't create Brevo contacts.
 */
export default function AdTrackingCapture() {
    useEffect(() => {
        const { msclkid, msclkidTs, landingUrl } = captureAndGetAdTracking();
        if (!msclkid) return;

        fetch('/api/brevo-visit/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                tracking: {
                    id: msclkid,
                    platform: 'Microsoft Ads',
                    time: msclkidTs || new Date().toISOString(),
                    landingUrl,
                },
            }),
        }).catch((error) => {
            console.warn('Brevo visit tracking failed:', error);
        });
    }, []);

    return null;
}
