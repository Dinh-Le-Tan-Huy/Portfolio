export const ENV = {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL,

    // Cấu hình EmailJS
    EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
    EMAILJS_AUTO_REPLY_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID || '',

    // Các biến khác nếu có
    API_URL: import.meta.env.VITE_API_URL || '',
}