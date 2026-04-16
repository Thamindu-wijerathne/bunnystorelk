"use client";

import { useState, useEffect } from "react";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = "94702100400";
    const message = "Hello, I need more details";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center gap-2
                 px-6 py-3 rounded-full bg-[#25D366] shadow-lg text-white font-semibold
                 hover:scale-110 transition-transform animate-in fade-in zoom-in duration-300"
        >
            <FaWhatsapp className="text-2xl" />
            <span>Contact Us</span>
        </a>
    );
}
