
export const openWhatsAppQuote = (itemName) => {
    const phoneNumber = '966500000000'; // Replace with actual number
    const message = `I am interested in getting a quote for ${itemName}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};
