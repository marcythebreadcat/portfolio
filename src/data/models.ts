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
    title: "Nitinol Wire Artificial Muscle Design",
    description:
      "Next-generation biomimetic actuator with ultra-fast response time",
    fullDescription: `
      This innovative design incorporates nitinol shape memory alloy wires wrapped in a shock spring to create a compact, highly responsive artificial muscle. The nitinol wires provide the contractile force, while the outer spring enables rapid extension.</br></br>
      To enhance the speed and efficiency of the actuation, the wires are coated in copper to facilitate faster cooling after power is cut. Additionally, a constant water flow system is integrated to instantly cool the nitinol, enabling rapid retraction.</br></br>
      This design tackles common challenges in nitinol wire muscles by seamlessly integrating the spring mechanism and cooling system. The result is a compact, high-performance actuator that mimics the dynamic properties of natural muscle tissue. </br>
      <h3 class="text-xl font-semibold text-white">Key features:</h3>
      <ul>
        <li>Nitinol wire provides strong contractile force</li>
        <li>Shock spring enables rapid extension</li>
        <li>Copper coating and water cooling system enable fast response time</li>
        <li>Compact, biomimetic design for integration into complex systems</li>
      </ul>
      This artificial muscle prototype demonstrates innovative solutions to common challenges in shape-memory alloy actuators, making it a promising technology for a wide range of applications.
    `,
    imageUrl: "/portfolio/images/muscle.png",
    modelUrl: "/portfolio/models/muscle.glb",
  },
  {
    id: "2",
    title: "3d printer",
    description:
      "Next-generation rapid 3D house printer with multi-nozzle parallel construction",
    fullDescription: `This innovative 3D house printer leverages a centralized, single-point design with three simultaneous printing nozzles to enable rapid, high-strength construction.</br></br>

      The system utilizes a proprietary recycled plastic-concrete material mix, proven to be 30% stronger than traditional concrete. Three printing nozzles operate in parallel, allowing the system to build three layers simultaneously, significantly accelerating the construction process.</br></br>

      Additionally, the printer employs UV curing technology to instantly harden the outer shell, eliminating lengthy drying times and further expediting the build process. With this advanced approach, the system is capable of constructing an entire house within 24 hours—an unprecedented improvement over existing 3D house printing methods.</br></br>

      The single-point configuration streamlines setup and calibration compared to multi-location printers, while the parallel printing approach and instant curing combine to deliver unmatched construction speed without compromising material integrity.</br>

      <h3 class="text-xl font-semibold text-white">Key features:</h3>
      <ul>
        <li>Utilizes a proprietary recycled plastic-concrete mix, 30% stronger than traditional concrete</li>
        <li>Three parallel printing nozzles enable simultaneous multi-layer construction</li>
        <li>UV curing technology instantly hardens the outer shell for rapid building</li>
        <li>Capable of constructing an entire house in just 24 hours</li>
        <li>Single-point design simplifies setup and enhances printing precision</li>
      </ul>

      This innovative 3D house printer represents a transformative step forward in sustainable, efficient home-building technologies.
`,
    imageUrl: "/portfolio/images/printer.png",
    modelUrl: "/portfolio/models/printer.glb",
  },
  {
    id: "3",
    title: "Pencilcase",
    description:
      "Transformable pencil case with built-in inflatable nap pillow and auto-deflation timer",
    fullDescription: `This pencil case design incorporates a unique dual-purpose feature—it can transform into an inflatable pillow for quick naps.</br></br>

      The case includes a built-in air pump on the right side, allowing effortless inflation of the pillow. On the left side, a timer alarm (5/10/30 minutes) is integrated to automatically release the air once the set time is up, ensuring a controlled and convenient resting experience.</br></br>

      This innovative feature enables users to take short rest breaks during class or work hours by quickly converting the pencil case into a portable pillow. The flexibility to switch between a practical storage solution and a napping aid makes it an ideal accessory for busy students and professionals.</br>

      <h3 class="text-xl font-semibold text-white">Key features:</h3>
      <ul>
        <li>Built-in air pump for effortless pillow inflation</li>
        <li>Timer alarm (5/10/30 minutes) for automatic deflation</li>
        <li>Compact and portable design for both storage and comfort</li>
        <li>Ideal for students and professionals needing quick rest breaks</li>
      </ul>

      This innovative design seamlessly combines everyday utility with ergonomic comfort, offering a smart, hands-free solution for on-the-go relaxation.
`,
    imageUrl: "/portfolio/images/pencilcase.png",
    modelUrl: "/portfolio/models/pinal.glb",
  },
  {
    id: "4",
    title: "Bionic hand",
    description:
      "High-dexterity prosthetic hand with full wrist articulation and DIY accessibility",
    fullDescription: `This artificial hand design incorporates impressive functionality, mimicking the range of motion and dexterity of a real human hand.</br></br>

      The hand is capable of performing all the same movements as a natural hand, including full wrist tilt and rotation. Constructed using commercially available parts, it allows individuals to potentially build their own prosthetic hand, making advanced prosthetics more accessible.</br></br>

      This level of articulation and flexibility surpasses what is typically found in current bionic hand designs. The ability to closely replicate natural hand biomechanics marks a significant advancement in prosthetic technology.</br>

      <h3 class="text-xl font-semibold text-white">Key features:</h3>
      <ul>
        <li>Full wrist tilt and rotation for natural movement</li>
        <li>Constructed using commercially available components</li>
        <li>Higher articulation and flexibility than most bionic hands</li>
        <li>Customizable and accessible for individuals building their own prosthetic</li>
      </ul>

      By leveraging off-the-shelf components, this design offers a customizable, high-performing prosthetic solution. It represents an innovative step forward in artificial hand technology, enhancing accessibility and functionality.
`,
    imageUrl: "/portfolio/images/bio-hand.png",
    modelUrl: "/portfolio/models/complete_arm.glb",
  },
];
