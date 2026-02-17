'use client';

import { openWhatsAppQuote } from '../utils/whatsapp';

export default function WhatsAppButton({ title, className }) {
    return (
        <button
            onClick={() => openWhatsAppQuote(title)}
            className={className}
        >
            Get A Quote <span className="material-icons-outlined">whatsapp</span>
        </button>
    );
}
