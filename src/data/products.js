/**
 * Configurable print products & estimation parameters for Ashoka Printing Press.
 * Note: Prices calculated here are ESTIMATES for quoting purposes.
 */

export const PRINT_PRODUCTS = [
  {
    id: "stickers",
    name: "Custom Die-Cut Stickers & Labels",
    category: "Stickers",
    baseEstimate: 1.5, // Base estimate per unit for bulk calculation
    icon: "Sparkles",
    popular: true,
    sizes: [
      { id: "2x2", name: "2 x 2 inch (Standard Circle/Square)", multiplier: 1.0 },
      { id: "3x3", name: "3 x 3 inch (Medium Brand Badge)", multiplier: 1.6 },
      { id: "4x4", name: "4 x 4 inch (Large Product Label)", multiplier: 2.3 },
      { id: "custom", name: "Custom Contour Shape (A3+ Sheet Form)", multiplier: 3.5 }
    ],
    papers: [
      { id: "vinyl-white", name: "Waterproof White Vinyl (Outdoor Grade)", gsm: "180 Micron", premium: 1.2 },
      { id: "vinyl-clear", name: "Transparent Clear Film", gsm: "150 Micron", premium: 1.35 },
      { id: "kraft-paper", name: "Rustic Eco Kraft Paper Sticker", gsm: "120 GSM", premium: 1.1 },
      { id: "foil-gold", name: "Metallic Chrome / Golden Foil", gsm: "200 Micron", premium: 1.7 }
    ],
    finishes: [
      { id: "gloss", name: "High Gloss Protective Laminate", extra: 0.1 },
      { id: "matte", name: "Non-Reflective Velvet Matte", extra: 0.15 },
      { id: "holographic", name: "Prismatic Holographic Glow", extra: 0.45 },
      { id: "unlaminated", name: "Standard Indoor Finish", extra: 0.0 }
    ],
    quantities: [50, 100, 250, 500, 1000, 2500, 5000],
    defaultQty: 250,
    productionDays: "1 - 2 Working Days"
  },
  {
    id: "business-cards",
    name: "Executive Business Cards",
    category: "Marketing",
    baseEstimate: 1.2,
    icon: "CreditCard",
    popular: true,
    sizes: [
      { id: "std-in", name: "Standard 89 x 54 mm", multiplier: 1.0 },
      { id: "square", name: "Square 60 x 60 mm", multiplier: 1.1 },
      { id: "rounded", name: "Rounded Corners 89 x 54 mm", multiplier: 1.25 }
    ],
    papers: [
      { id: "art-300", name: "300 GSM Premium Silk Art Card", gsm: "300 GSM", premium: 1.0 },
      { id: "art-350", name: "350 GSM Heavyweight Executive Card", gsm: "350 GSM", premium: 1.2 },
      { id: "texture-pearl", name: "Metallic Pearl Shimmer Card", gsm: "320 GSM", premium: 1.6 },
      { id: "textured-linen", name: "Natural Imported Linen Textured Card", gsm: "300 GSM", premium: 1.5 }
    ],
    finishes: [
      { id: "thermal-matte", name: "Thermal Matte Lamination (Both Sides)", extra: 0.2 },
      { id: "thermal-gloss", name: "Gloss Lamination (Both Sides)", extra: 0.15 },
      { id: "soft-touch", name: "Velvet Soft-Touch Luxury Finish", extra: 0.45 },
      { id: "spot-uv", name: "Raised Spot UV + Matte Laminate", extra: 0.75 }
    ],
    quantities: [100, 200, 500, 1000, 2000],
    defaultQty: 500,
    productionDays: "24 - 48 Hours"
  },
  {
    id: "project-reports",
    name: "Student Project & Thesis Report",
    category: "Academic",
    baseEstimate: 2.0, // per page average base
    icon: "GraduationCap",
    popular: true,
    sizes: [
      { id: "a4-report", name: "A4 Academic Bound (Standard)", multiplier: 1.0 },
      { id: "a4-hardbound", name: "Hardbound Thesis with Golden Embossed Cover", multiplier: 1.8 }
    ],
    papers: [
      { id: "jk-copier-75", name: "75 GSM Bright White Copier", gsm: "75 GSM", premium: 1.0 },
      { id: "bond-85", name: "85 GSM Executive Watermarked Bond Paper", gsm: "85 GSM", premium: 1.3 },
      { id: "bond-100", name: "100 GSM Ultra-White Heavy Bond Paper", gsm: "100 GSM", premium: 1.6 }
    ],
    finishes: [
      { id: "spiral-pvc", name: "Durable PVC Plastic Spiral + Transparent Cover", extra: 30 }, // Flat add-on
      { id: "wire-o", name: "Metallic Twin Wire-O Book Binding", extra: 50 },
      { id: "hardcover-gold", name: "Hardbound Maroon/Navy with Golden Foil Lettering", extra: 250 },
      { id: "soft-strip", name: "Tape / Strip Binding with OHP Sheet", extra: 20 }
    ],
    quantities: [1, 2, 3, 5, 10, 25],
    defaultQty: 3,
    productionDays: "Same Day (20 - 45 Mins)"
  },
  {
    id: "flyers-brochures",
    name: "Promotional Flyers & Brochures",
    category: "Marketing",
    baseEstimate: 2.2,
    icon: "FileText",
    popular: false,
    sizes: [
      { id: "a5", name: "A5 (148 x 210 mm) Handout Size", multiplier: 1.0 },
      { id: "a4", name: "A4 (210 x 297 mm) Standard Letter", multiplier: 1.8 },
      { id: "trifold", name: "A4 3-Fold Menu / Brochure (Creased)", multiplier: 2.4 }
    ],
    papers: [
      { id: "gloss-130", name: "130 GSM Gloss Art Paper (Standard Flyer)", gsm: "130 GSM", premium: 1.0 },
      { id: "gloss-170", name: "170 GSM Premium Gloss Card", gsm: "170 GSM", premium: 1.3 },
      { id: "matte-250", name: "250 GSM Heavy Board Brochure", gsm: "250 GSM", premium: 1.7 }
    ],
    finishes: [
      { id: "none", name: "Natural Print Finish", extra: 0 },
      { id: "matte-coat", name: "Dual-Side Matte Lamination", extra: 0.3 },
      { id: "gloss-coat", name: "Dual-Side Gloss Lamination", extra: 0.25 }
    ],
    quantities: [250, 500, 1000, 2000, 5000],
    defaultQty: 1000,
    productionDays: "1 - 2 Working Days"
  },
  {
    id: "flex-banners",
    name: "Outdoor Star Flex Banner",
    category: "Outdoor",
    baseEstimate: 12.0, // per sq ft base estimate
    icon: "Maximize",
    popular: false,
    sizes: [
      { id: "6x3", name: "6 x 3 Feet (18 sq. ft.)", multiplier: 18 },
      { id: "8x4", name: "8 x 4 Feet (32 sq. ft.)", multiplier: 32 },
      { id: "10x5", name: "10 x 5 Feet (50 sq. ft.)", multiplier: 50 },
      { id: "standee", name: "6 x 2.5 Feet Roll-Up Standee with Aluminium Base", multiplier: 35 }
    ],
    papers: [
      { id: "star-flex", name: "Star Flex Heavy Grade (High Glow)", gsm: "340 GSM", premium: 1.25 },
      { id: "eco-flex", name: "Standard 280 GSM Frontlit Flex", gsm: "280 GSM", premium: 1.0 },
      { id: "vinyl-mounted", name: "Self-Adhesive Vinyl Mounted on 3mm Sunboard", gsm: "3mm Board", premium: 2.8 }
    ],
    finishes: [
      { id: "eyelets", name: "Reinforced Metal Eyelets on All Corners", extra: 0 },
      { id: "pockets", name: "Pole Pockets for Hanging Rods", extra: 0.1 },
      { id: "frame-ready", name: "Wood Frame Margin Pasting", extra: 0.2 }
    ],
    quantities: [1, 2, 5, 10],
    defaultQty: 1,
    productionDays: "Same Day / Next Day"
  }
];

/**
 * Calculates a structured estimated quote based on selected specifications
 */
export function calculateEstimate({ product, sizeId, paperId, finishId, sides = "single", quantity = 100, pageCount = 50 }) {
  const selectedProduct = PRINT_PRODUCTS.find(p => p.id === product) || PRINT_PRODUCTS[0];
  const size = selectedProduct.sizes.find(s => s.id === sizeId) || selectedProduct.sizes[0];
  const paper = selectedProduct.papers.find(p => p.id === paperId) || selectedProduct.papers[0];
  const finish = selectedProduct.finishes.find(f => f.id === finishId) || selectedProduct.finishes[0];

  let unitBase = selectedProduct.baseEstimate * size.multiplier * paper.premium;
  
  if (sides === "double") {
    unitBase *= 1.6; // double sided pricing factor
  }

  // Academic reports handle page counts differently
  if (selectedProduct.id === "project-reports") {
    const pageCost = (pageCount * (sides === "double" ? 1.4 : 1.8) * paper.premium);
    const bindingCost = typeof finish.extra === 'number' ? finish.extra : 30;
    const estimatedTotal = Math.round((pageCost + bindingCost) * quantity);
    const unitEstimated = Math.round(estimatedTotal / quantity);
    return {
      unitPrice: unitEstimated,
      totalPrice: estimatedTotal,
      isEstimate: true,
      turnaround: selectedProduct.productionDays,
      currency: "₹"
    };
  }

  if (selectedProduct.id === "flex-banners") {
    let totalPerBanner = selectedProduct.baseEstimate * size.multiplier * paper.premium;
    if (size.id === "standee") totalPerBanner += 450; // Aluminum stand mechanism
    const total = Math.round(totalPerBanner * quantity);
    return {
      unitPrice: Math.round(total / quantity),
      totalPrice: total,
      isEstimate: true,
      turnaround: selectedProduct.productionDays,
      currency: "₹"
    };
  }

  // Volume discount curve
  let volumeFactor = 1.0;
  if (quantity >= 1000) volumeFactor = 0.65;
  else if (quantity >= 500) volumeFactor = 0.78;
  else if (quantity >= 250) volumeFactor = 0.88;

  const unitEstimated = (unitBase * volumeFactor) + finish.extra;
  const total = Math.round(Math.max(unitEstimated * quantity, 50));

  return {
    unitPrice: Number(unitEstimated.toFixed(2)),
    totalPrice: total,
    isEstimate: true,
    turnaround: selectedProduct.productionDays,
    currency: "₹"
  };
}
