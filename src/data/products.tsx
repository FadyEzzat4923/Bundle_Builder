import { BiCameraHome } from "react-icons/bi";
import type { Step } from "../types";
import { MdOutlineSecurity, MdSensors } from "react-icons/md";
import { BsGrid3X3Gap } from "react-icons/bs";
import c1 from "../assets/camera1.png";
import c1t1 from "../assets/camera1-white.png";
import c1t2 from "../assets/camera1-gray.png";
import c1t3 from "../assets/camera1-black.png";
import c2 from "../assets/camera2.png";
import c2t1 from "../assets/camera2-white.png";
import c2t3 from "../assets/camera2-black.png";
import c3 from "../assets/camera3.png";
import c3t1 from "../assets/camera3-white.png";
import c3t3 from "../assets/camera3-black.png";
import c4 from "../assets/camera4.png";
import c5 from "../assets/camera5.png";
import c5t1 from "../assets/camera5-white.png";
import c5t3 from "../assets/camera5-black.png";
import proIcon from "../assets/pro-icon.png";
import basicIcon from "../assets/basic-icon.png";

const steps: Step[] = [
  {
    id: "cameras",
    stepNumber: 1,
    title: "Choose your cameras",
    icon: <BiCameraHome className="text-gray-600 text-2xl" />,
    nextLabel: "Next: Choose your plan",
    products: [
      {
        id: "cam-v4",
        name: "Standard Camera",
        description: "The clearest Wyze Cam ever made.",
        image: c1,
        badge: "Save 22%",
        comparePrice: 35.98,
        price: 27.98,
        learnMore: "#",
        variants: [
          { id: "cam-v4-white", label: "White", image: c1t1, qty: 1 },
          { id: "cam-v4-grey", label: "Grey", image: c1t2, qty: 0 },
          { id: "cam-v4-black", label: "Black", image: c1t3, qty: 0 },
        ],
        activeVariant: "cam-v4-white",
      },
      {
        id: "cam-pan-v3",
        name: "Pan & Tilt Camera",
        description: "360° pan and 180° tilt security camera.",
        image: c2,
        badge: "Save 12%",
        comparePrice: 39.98,
        price: 34.98,
        learnMore: "#",
        variants: [
          { id: "cam-pan-white", label: "White", image: c2t1, qty: 2 },
          { id: "cam-pan-black", label: "Black", image: c2t3, qty: 0 },
        ],
        activeVariant: "cam-pan-white",
      },
      {
        id: "cam-floodlight",
        name: "Floodlight Camera",
        description:
          "2K floodlight camera with a 160° wide-angle view for your garage.",
        image: c3,
        badge: "Save 22%",
        comparePrice: 89.98,
        price: 69.98,
        learnMore: "#",
        variants: [
          { id: "cam-flood-white", label: "White", image: c3t1, qty: 0 },
          { id: "cam-flood-black", label: "Black", image: c3t3, qty: 0 },
        ],
        activeVariant: "cam-flood-white",
      },
      {
        id: "cam-doorbell",
        name: "Doorbell Camera",
        description: "Two cameras. Two views. Double the porch protection.",
        image: c4,
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
        name: "Battery Powered Camera",
        description:
          "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
        image: c5,
        badge: null,
        comparePrice: null,
        price: 89.98,
        learnMore: "#",
        variants: [
          { id: "cam-bat-white", label: "White", image: c5t1, qty: 0 },
          { id: "cam-bat-black", label: "Black", image: c5t3, qty: 0 },
        ],
        activeVariant: "cam-bat-white",
      },
    ],
  },
  {
    id: "plan",
    stepNumber: 2,
    title: "Choose your plan",
    icon: <MdOutlineSecurity className="text-gray-600 text-2xl" />,
    nextLabel: "Next: Choose your sensors",
    products: [
      {
        id: "plan-cam-unlimited",
        isPlan: true,
        name: "Unlimited",
        description:
          "Unlimited cameras, 14-day cloud storage, person & motion detection, AI alerts.",
        image: proIcon,
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
        isPlan: true,
        name: "Basic",
        description: "7-day cloud storage, 1 camera, standard motion alerts.",
        image: basicIcon,
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
    icon: <MdSensors className="text-gray-600 text-2xl" />,
    nextLabel: "Next: Add extra protection",
    products: [
      {
        id: "sensor-motion",
        name: "Motion Sensor",
        description: "Pet-immune PIR, 110° detection, 3-year battery life.",
        image:
          "https://media.screwfix.com/is/image/ae235/388FT_P?$fxSharpen$=&wid=257&hei=257&dpr=on",
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
        name: "Sensor Hub (Required)",
        description:
          "Central hub for all Wyze sensors. Required for sensor functionality.",
        image: "https://edingcnc.com/wp-content/uploads/2024/02/Sensorhub.png",
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
    icon: <BsGrid3X3Gap className="text-gray-600 text-2xl" />,
    nextLabel: null,
    products: [
      {
        id: "acc-microsd",
        name: "Storage Card 256GB",
        description:
          "High-endurance card designed for 24/7 continuous recording.",
        image:
          "https://m.media-amazon.com/images/I/61qyTylqFSL._AC_UF350,350_QL80_.jpg",
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
        name: "Security Keypad",
        description:
          "Touchscreen, user PINs, panic button, backlit for night use.",
        image:
          "https://www.wyze.com/cdn/shop/products/wyze-sense-keypad-wyze-labs-inc-842216.png?v=1762439808&width=1946",
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
