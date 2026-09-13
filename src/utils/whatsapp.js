import { BUSINESS_CONFIG } from "../data/business";

/**
 * Builds direct WhatsApp URL with structured order inquiry
 */
export function buildWhatsAppLink({
  type = "custom_order",
  productName = "Custom Print Job",
  quantity = "100",
  size = "Standard",
  paper = "Standard GSM",
  finish = "Standard",
  estimatedTotal = "Contact for Estimate",
  customerName = "",
  customerPhone = "",
  deliveryRequired = true,
  notes = ""
}) {
  let message = `🖨️ *NEW PRINT ORDER INQUIRY - ASHOKA PRINTING PRESS*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📦 *Product:* ${productName}\n`;
  message += `🔢 *Quantity:* ${quantity}\n`;
  message += `📐 *Size / Format:* ${size}\n`;
  message += `📄 *Paper / Material:* ${paper}\n`;
  if (finish && finish !== "None") {
    message += `✨ *Finish / Binding:* ${finish}\n`;
  }
  if (estimatedTotal) {
    message += `💰 *Online Estimate:* ${estimatedTotal}\n`;
  }
  message += `🚚 *Delivery Needed:* ${deliveryRequired ? "Yes (Courier / Dispatch)" : "Store Pickup (Rohtak)"}\n`;
  
  if (customerName) {
    message += `👤 *Customer Name:* ${customerName}\n`;
  }
  if (customerPhone) {
    message += `📞 *Phone / Contact:* ${customerPhone}\n`;
  }
  if (notes) {
    message += `📝 *Notes / Requirement:* ${notes}\n`;
  }
  
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `_Sent via Ashoka Photostat & Printing Press Online Portal_`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encoded}`;
}

export function buildQuickWhatsAppMessage(customText) {
  const defaultText = `Hello Ashoka Printing Press, I would like to inquire about printing services in Rohtak.`;
  const text = encodeURIComponent(customText || defaultText);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${text}`;
}
