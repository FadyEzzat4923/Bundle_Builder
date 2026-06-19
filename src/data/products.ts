import type { Step } from "../types";

const steps: Step[] = [
  {
    id: "cameras",
    stepNumber: 1,
    title: "Choose your cameras",
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    nextLabel: "Next: Choose your plan",
    products: [
      {
        id: "cam-v4",
        name: "Wyze Cam v4",
        description: "The clearest Wyze Cam ever made.",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=220&h=180&fit=crop",
        badge: "Save 22%",
        comparePrice: 35.98,
        price: 27.98,
        learnMore: "#",
        variants: [
          { id: "cam-v4-white", label: "White", color: "#FFFFFF", qty: 1 },
          { id: "cam-v4-grey", label: "Grey", color: "#9CA3AF", qty: 0 },
          { id: "cam-v4-black", label: "Black", color: "#1F2937", qty: 0 },
        ],
        activeVariant: "cam-v4-white",
      },
      {
        id: "cam-pan-v3",
        name: "Wyze Cam Pan v3",
        description: "360° pan and 180° tilt security camera.",
        image:
          "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=220&h=180&fit=crop",
        badge: "Save 12%",
        comparePrice: 39.98,
        price: 34.98,
        learnMore: "#",
        variants: [
          { id: "cam-pan-white", label: "White", color: "#FFFFFF", qty: 2 },
          { id: "cam-pan-black", label: "Black", color: "#1F2937", qty: 0 },
        ],
        activeVariant: "cam-pan-white",
      },
      {
        id: "cam-floodlight",
        name: "Wyze Cam Floodlight v2",
        description:
          "2K floodlight camera with a 160° wide-angle view for your garage.",
        image:
          "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=220&h=180&fit=crop",
        badge: "Save 22%",
        comparePrice: 89.98,
        price: 69.98,
        learnMore: "#",
        variants: [
          { id: "cam-flood-white", label: "White", color: "#FFFFFF", qty: 0 },
          { id: "cam-flood-black", label: "Black", color: "#1F2937", qty: 0 },
        ],
        activeVariant: "cam-flood-white",
      },
      {
        id: "cam-doorbell",
        name: "Wyze Duo Cam Doorbell",
        description: "Two cameras. Two views. Double the porch protection.",
        image:
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=220&h=180&fit=crop",
        badge: null,
        comparePrice: null,
        price: 69.98,
        learnMore: "#",
        variants: null,
        activeVariant: null,
        qty: 0,
      },
      {
        id: "cam-battery-pro",
        name: "Wyze Battery Cam Pro",
        description:
          "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
        image:
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=220&h=180&fit=crop",
        badge: null,
        comparePrice: null,
        price: 89.98,
        learnMore: "#",
        variants: [
          { id: "cam-bat-white", label: "White", color: "#FFFFFF", qty: 0 },
          { id: "cam-bat-black", label: "Black", color: "#1F2937", qty: 0 },
        ],
        activeVariant: "cam-bat-white",
      },
    ],
  },
  {
    id: "plan",
    stepNumber: 2,
    title: "Choose your plan",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    nextLabel: "Next: Choose your sensors",
    products: [
      {
        id: "plan-cam-unlimited",
        name: "Cam Unlimited",
        description:
          "Unlimited cameras, 14-day cloud storage, person & motion detection, AI alerts.",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=220&h=180&fit=crop",
        badge: "Most Popular",
        comparePrice: 12.99,
        price: 9.99,
        priceSuffix: "/mo",
        learnMore: "#",
        variants: null,
        activeVariant: null,
        qty: 1,
        maxQty: 1,
      },
      {
        id: "plan-basic",
        name: "Basic Plan",
        description: "7-day cloud storage, 1 camera, standard motion alerts.",
        image:
          "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=220&h=180&fit=crop",
        badge: null,
        comparePrice: null,
        price: 4.99,
        priceSuffix: "/mo",
        learnMore: "#",
        variants: null,
        activeVariant: null,
        qty: 0,
        maxQty: 1,
      },
    ],
  },
  {
    id: "sensors",
    stepNumber: 3,
    title: "Choose your sensors",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    nextLabel: "Next: Add extra protection",
    products: [
      {
        id: "sensor-motion",
        name: "Wyze Sense Motion Sensor",
        description: "Pet-immune PIR, 110° detection, 3-year battery life.",
        image:
          "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=220&h=180&fit=crop",
        badge: null,
        comparePrice: null,
        price: 29.99,
        learnMore: "#",
        variants: null,
        activeVariant: null,
        qty: 2,
      },
      {
        id: "sensor-hub",
        name: "Wyze Sense Hub (Required)",
        description:
          "Central hub for all Wyze sensors. Required for sensor functionality.",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=220&h=180&fit=crop",
        badge: null,
        comparePrice: 29.92,
        price: 0,
        learnMore: "#",
        variants: null,
        activeVariant: null,
        qty: 1,
        isFree: true,
      },
    ],
  },
  {
    id: "protection",
    stepNumber: 4,
    title: "Add extra protection",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    nextLabel: null,
    products: [
      {
        id: "acc-microsd",
        name: "Wyze MicroSD Card (256GB)",
        description:
          "High-endurance card designed for 24/7 continuous recording.",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=220&h=180&fit=crop",
        badge: null,
        comparePrice: null,
        price: 20.98,
        learnMore: "#",
        variants: null,
        activeVariant: null,
        qty: 2,
      },
      {
        id: "acc-keypad",
        name: "Wyze Smart Keypad",
        description:
          "Touchscreen, user PINs, panic button, backlit for night use.",
        image:
          "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=220&h=180&fit=crop",
        badge: null,
        comparePrice: null,
        price: 39.99,
        learnMore: "#",
        variants: null,
        activeVariant: null,
        qty: 0,
      },
    ],
  },
];

export const reviewCategories: Record<string, string> = {
  cameras: "Cameras",
  plan: "Plan",
  sensors: "Sensors",
  protection: "Accessories",
};

export default steps;
