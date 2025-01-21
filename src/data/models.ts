export interface Model3D {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  modelUrl: string;
}

export const models: Model3D[] = [
  {
    id: "1",
    title: "hello",
    description: "Next-generation IoT control center with holographic display",
    fullDescription: "This cutting-edge smart home hub features a revolutionary holographic interface that brings your IoT control to life. The device incorporates advanced AI processing, seamless connectivity options, and an elegant design that complements any modern home. With support for multiple protocols and expandable functionality, it represents the future of home automation.",
    imageUrl: "/portfolio/images/smart-home-hub.png",
    modelUrl: "/portfolio/models/Car.glb",
  },
  {
    id: "2",
    title: "Quantum Computing Processor",
    description: "Revolutionary quantum processor with superconducting circuits",
    fullDescription: "A breakthrough in quantum computing technology, this processor utilizes superconducting circuits and advanced error correction to achieve unprecedented quantum coherence times. The innovative cooling system and precise control mechanisms enable stable qubit operations at near-absolute zero temperatures. Its modular design allows for scalable quantum computing applications.",
    imageUrl: "/portfolio/images/quantum-computing-processor.png",
    modelUrl: "/portfolio/models/Car.glb",
  },
  {
    id: "3",
    title: "Neural Interface Headset",
    description: "Advanced brain-computer interface with haptic feedback",
    fullDescription: "This state-of-the-art neural interface headset combines high-resolution EEG sensors with revolutionary haptic feedback technology. Designed for both medical and consumer applications, it enables direct brain-computer communication with unprecedented accuracy. The ergonomic design ensures comfort during extended use while maintaining optimal sensor contact.",
    imageUrl: "/portfolio/images/neural-interface-headset.png",
    modelUrl: "/portfolio/models/Car.glb",
  },
  {
    id: "4",
    title: "Modular Drone System",
    description: "Customizable drone platform with hot-swappable components",
    fullDescription: "A revolutionary approach to drone technology, this modular system features hot-swappable components for rapid mission reconfiguration. The advanced flight control system adapts in real-time to changes in payload and configuration. With industrial-grade connectors and a robust communication protocol, it sets new standards for flexible aerial platforms.",
    imageUrl: "/portfolio/images/modular-drone-system.png",
    modelUrl: "/portfolio/models/Car.glb",
  },
  {
    id: "5",
    title: "Augmented Reality Glasses",
    description: "Next-gen AR glasses with advanced spatial mapping",
    fullDescription: "These cutting-edge AR glasses incorporate advanced waveguide optics and precise spatial mapping technology to deliver immersive mixed reality experiences. The custom-designed micro-LED displays offer unprecedented brightness and color accuracy, while the integrated AI co-processor enables real-time environmental understanding and interaction.",
    imageUrl: "/portfolio/images/augmented-reality-glasses.png",
    modelUrl: "/portfolio/models/Car.glb",
  },
  {
    id: "6",
    title: "Energy Harvesting Module",
    description: "Self-sustaining power system with multi-source integration",
    fullDescription: "An innovative energy harvesting solution that combines multiple power sources including solar, thermal, and kinetic energy. The intelligent power management system optimizes energy collection and storage based on environmental conditions. Perfect for IoT devices and remote sensing applications, it represents the future of sustainable electronics.",
    imageUrl: "/portfolio/images/energy-harvesting-module.png",
    modelUrl: "/portfolio/models/Car.glb",
  }
  // Add more models as needed
];
