interface QuoteApiOptions {
    method: 'getQuote';
    format: 'xml' | 'json' | 'jsonp' | 'html' | 'text';
    key?: number;
    lang?: 'ru' | 'en';
    jsonp?: string;
}

interface QuoteApiResponse {
    quoteText: string;
    quoteAuthor: string;
    senderName: string;
    senderLink: string;
    quoteLink: string;
}

export default async function getQuote() {
    const baseURL = 'https://api.forismatic.com/api/1.0/';
    const apiOptions: QuoteApiOptions = { method: 'getQuote', format: 'json' };

    try {
        const res = await fetch(baseURL + '?' + new URLSearchParams(Object.entries(apiOptions)), { method: 'POST', cache: 'no-store' });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data: QuoteApiResponse = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error('Error fetching quote:', error);
        return { data: null, error };
    }
}
