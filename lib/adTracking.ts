export const AD_TRACKING_KEYS = {
    MSCLKID: 'cwp_msclkid',
    MSCLKID_TS: 'cwp_msclkid_ts',
    LANDING_URL: 'cwp_landing_url',
};


function getMsclkidFromUrl() {
    if (typeof window === 'undefined') return '';

    const params = new URLSearchParams(window.location.search);
    const direct = params.get('msclkid');
    if (direct) return direct;

    for (const [key, value] of params.entries()) {
        if (key.toLowerCase().includes('msclkid') && value) return value;
    }

    return '';
}

/**
 * Reads msclkid from the current URL and, if present, persists it (plus a
 * timestamp and the landing URL) to localStorage, overwriting any prior value.
 * Returns the tracking data currently in effect (freshly written or previously stored).
 */
export function captureAndGetAdTracking() {
    if (typeof window === 'undefined') {
        return { msclkid: '', msclkidTs: '', landingUrl: '' };
    }

    const msclkid = getMsclkidFromUrl();

    if (msclkid) {
        const ts = new Date().toISOString();
        const landingUrl = window.location.href;

        try {
            window.localStorage.setItem(AD_TRACKING_KEYS.MSCLKID, msclkid);
            window.localStorage.setItem(AD_TRACKING_KEYS.MSCLKID_TS, ts);
            window.localStorage.setItem(AD_TRACKING_KEYS.LANDING_URL, landingUrl);
        } catch (error) {
            console.warn('Ad tracking localStorage write failed:', error);
        }

        return { msclkid, msclkidTs: ts, landingUrl };
    }

    return getStoredAdTracking();
}


/** Reads previously stored ad tracking data without capturing anything new. */
export function getStoredAdTracking() {
    if (typeof window === 'undefined') {
        return { msclkid: '', msclkidTs: '', landingUrl: '' };
    }

    try {
        return {
            msclkid: window.localStorage.getItem(AD_TRACKING_KEYS.MSCLKID) || '',
            msclkidTs: window.localStorage.getItem(AD_TRACKING_KEYS.MSCLKID_TS) || '',
            landingUrl: window.localStorage.getItem(AD_TRACKING_KEYS.LANDING_URL) || '',
        };
    } catch (error) {
        console.warn('Ad tracking localStorage read failed:', error);
        return { msclkid: '', msclkidTs: '', landingUrl: '' };
    }
}