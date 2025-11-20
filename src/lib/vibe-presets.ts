export type VibePreset = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  gradient: string;
  accent: string;
  glow: string;
  soundtrack: {
    energy: "low" | "medium" | "high";
    bpm: number;
    palette: string[];
  };
  snippets: {
    html: string;
    css: string;
    js: string;
  };
};

export const vibePresets: VibePreset[] = [
  {
    id: "neon-nebula",
    name: "Neon Nebula",
    tagline: "Low orbit synthwave with clean futuristic panels.",
    description:
      "A polished, neon-lit hero layout inspired by orbital launch centers. Perfect for showcasing product drops with cinematic ambience.",
    gradient:
      "linear-gradient(135deg, rgba(53,4,189,0.65) 0%, rgba(0,198,255,0.55) 45%, rgba(255,94,247,0.35) 100%)",
    accent: "#70F5FF",
    glow: "0 40px 100px rgba(30, 108, 217, 0.35)",
    soundtrack: {
      energy: "high",
      bpm: 116,
      palette: ["#241b5b", "#4650d3", "#70f5ff"],
    },
    snippets: {
      html: `<main class="scene">
  <header class="hud">
    <span class="status-pill">Flight Ready</span>
    <span class="timestamp">T-00:12:40</span>
  </header>
  <section class="hero">
    <h1>Launch your next interface</h1>
    <p>Premium components, cinematic motion, and a cosmic-grade design system to ship ambitious experiences fast.</p>
    <div class="cta">
      <button class="primary">Ignite Studio</button>
      <button class="ghost">Watch sequence</button>
    </div>
  </section>
  <section class="metrics">
    <article>
      <h2>93%</h2>
      <p>design-to-dev accuracy</p>
    </article>
    <article>
      <h2>0.12s</h2>
      <p>render latency</p>
    </article>
    <article>
      <h2>∞</h2>
      <p>creative runway</p>
    </article>
  </section>
</main>`,
      css: `.scene {
  color: #f7fbff;
  min-height: 100%;
  display: grid;
  gap: 3.5rem;
  padding: 4rem 3.5rem;
  background: radial-gradient(circle at -10% -90%, rgba(112,245,255,0.22) 0, transparent 55%), radial-gradient(circle at 110% 10%, rgba(120,45,255,0.28) 0, transparent 60%), rgba(8,8,18,0.85);
  border: 1px solid rgba(170,195,255,0.12);
  border-radius: 24px;
  backdrop-filter: blur(28px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 40px 120px rgba(19,26,56,0.55);
}

.hud {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(182,214,255,0.7);
}

.status-pill {
  border: 1px solid rgba(182,214,255,0.4);
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: rgba(31,60,225,0.22);
  box-shadow: 0 0 30px rgba(88,178,255,0.35);
}

.hero h1 {
  font-size: clamp(2.8rem, 5vw, 4.2rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.15rem;
  max-width: 32rem;
  line-height: 1.8;
  color: rgba(210,235,255,0.75);
}

.cta {
  display: flex;
  gap: 1rem;
  margin-top: 2.25rem;
}

.primary,
.ghost {
  padding: 0.9rem 1.6rem;
  border-radius: 999px;
  border: none;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 280ms ease, background 280ms ease, box-shadow 280ms ease;
}

.primary {
  background: linear-gradient(135deg, rgba(96,148,255,0.9), rgba(208,127,255,0.75));
  box-shadow: 0 24px 60px rgba(103,164,255,0.45);
}

.primary:hover {
  transform: translateY(-4px);
}

.ghost {
  background: transparent;
  color: rgba(214,227,255,0.78);
  border: 1px solid rgba(152,186,255,0.35);
}

.ghost:hover {
  background: rgba(36,58,124,0.3);
  transform: translateY(-4px);
}

.metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.metrics article {
  padding: 1.75rem;
  background: rgba(12,17,40,0.72);
  border-radius: 20px;
  border: 1px solid rgba(144,175,255,0.18);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
}

.metrics h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.metrics p {
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(185,205,250,0.65);
}
`,
      js: `const status = document.querySelector(".status-pill");
const timestamp = document.querySelector(".timestamp");

setInterval(() => {
  const now = new Date();
  timestamp.textContent = \`T-\${now.getMinutes().toString().padStart(2, "0")}:\${now.getSeconds().toString().padStart(2, "0")}\`;
  status.classList.toggle("active");
}, 2200);`,
    },
  },
  {
    id: "solar-studio",
    name: "Solar Studio",
    tagline: "Golden-hour minimalism with tactile UI surfaces.",
    description:
      "A serene creative workspace bathed in sunset gradients. Ideal for product storytelling, creative agencies, and audio-focused experiences.",
    gradient:
      "linear-gradient(135deg, rgba(255,136,102,0.45) 0%, rgba(255,221,95,0.62) 50%, rgba(92,225,230,0.38) 100%)",
    accent: "#FF9865",
    glow: "0 30px 80px rgba(255, 119, 89, 0.35)",
    soundtrack: {
      energy: "medium",
      bpm: 98,
      palette: ["#F6B073", "#FFD95F", "#6edddf"],
    },
    snippets: {
      html: `<div class="studio">
  <aside class="timeline">
    <h2>Scene Layers</h2>
    <ul>
      <li class="active">
        <span>Sunwash Gradient</span>
        <small>Global atmosphere</small>
      </li>
      <li>
        <span>Depth of Field</span>
        <small>Background blur</small>
      </li>
      <li>
        <span>Specular Bloom</span>
        <small>Soft highlights</small>
      </li>
      <li>
        <span>Analog Noise</span>
        <small>Organic texture</small>
      </li>
    </ul>
  </aside>
  <section class="canvas">
    <div class="badge">Cinematic toolkit</div>
    <h1>Design with motion-first intuition.</h1>
    <p>Create immersive visuals with layered gradients, choreographed lighting, and sonic ambience that tells a story.</p>
    <div class="actions">
      <button>Open in Solar</button>
      <button class="secondary">Download preset</button>
    </div>
    <footer>
      <span>Soundtrack · 98 BPM · Analog groove</span>
      <span>Version 3.1 — updated light grid</span>
    </footer>
  </section>
</div>`,
      css: `.studio {
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 100%;
  border-radius: 28px;
  overflow: hidden;
  background: linear-gradient(145deg, rgba(255,245,239,0.92), rgba(254,250,239,0.82));
  border: 1px solid rgba(255,186,143,0.35);
  box-shadow: 0 30px 90px rgba(255,137,100,0.28);
  backdrop-filter: blur(20px);
}

.timeline {
  padding: 3rem 2.25rem;
  background: radial-gradient(circle at 20% 20%, rgba(255,214,153,0.4), transparent 55%), rgba(255,234,210,0.7);
  border-right: 1px solid rgba(255,183,135,0.25);
}

.timeline h2 {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  color: rgba(140,90,44,0.6);
  margin-bottom: 2rem;
}

.timeline ul {
  display: grid;
  gap: 1.4rem;
}

.timeline li {
  list-style: none;
  padding: 1rem 1.2rem;
  border-radius: 18px;
  background: rgba(255,249,243,0.65);
  border: 1px solid transparent;
  transition: transform 220ms ease, border 220ms ease, box-shadow 220ms ease;
}

.timeline li.active {
  border: 1px solid rgba(255,172,115,0.6);
  box-shadow: 0 18px 35px rgba(255,161,109,0.25);
  transform: translateX(8px);
}

.timeline span {
  display: block;
  font-weight: 600;
  color: rgba(102,55,10,0.9);
  margin-bottom: 0.35rem;
}

.timeline small {
  color: rgba(142,94,39,0.55);
  letter-spacing: 0.04em;
}

.canvas {
  padding: 4rem 4.5rem;
  display: grid;
  align-content: center;
  gap: 2.4rem;
  position: relative;
  background: linear-gradient(160deg, rgba(252,236,228,0.95), rgba(218,244,246,0.92));
}

.canvas::after {
  content: "";
  position: absolute;
  inset: 12% 8%;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(255,176,127,0.2), rgba(255,233,164,0.22));
  border: 1px solid rgba(255,181,117,0.35);
  pointer-events: none;
}

.canvas h1 {
  font-size: clamp(2.6rem, 4vw, 3.5rem);
  color: rgba(96,45,5,0.92);
  position: relative;
  z-index: 1;
  letter-spacing: -0.03em;
}

.canvas p {
  font-size: 1.1rem;
  max-width: 32rem;
  line-height: 1.7;
  color: rgba(107,61,18,0.7);
  position: relative;
  z-index: 1;
}

.badge {
  justify-self: flex-start;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  background: rgba(255,193,132,0.2);
  border: 1px solid rgba(255,176,109,0.6);
  color: rgba(115,58,11,0.68);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.75rem;
  position: relative;
  z-index: 1;
}

.actions {
  display: flex;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.actions button {
  border-radius: 16px;
  padding: 0.9rem 1.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.actions button:hover {
  transform: translateY(-4px);
}

.secondary {
  background: white;
  color: rgba(120,62,18,0.9);
  box-shadow: 0 18px 35px rgba(186,150,120,0.25);
}

footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: rgba(112,70,26,0.6);
  letter-spacing: 0.05em;
  position: relative;
  z-index: 1;
}
`,
      js: `const layers = document.querySelectorAll(".timeline li");
let current = 0;

setInterval(() => {
  layers[current].classList.remove("active");
  current = (current + 1) % layers.length;
  layers[current].classList.add("active");
}, 2600);`,
    },
  },
  {
    id: "midnight-terminal",
    name: "Midnight Terminal",
    tagline: "Deep-focus coding bay with adaptive neon circuits.",
    description:
      "A heads-down builder environment with data-rich overlays, retro-futuristic glow, and hypnotic terminal typography.",
    gradient:
      "linear-gradient(140deg, rgba(80,33,122,0.65) 0%, rgba(9,12,30,0.95) 50%, rgba(31,188,255,0.3) 100%)",
    accent: "#31BCFF",
    glow: "0 50px 90px rgba(55,138,255,0.35)",
    soundtrack: {
      energy: "medium",
      bpm: 128,
      palette: ["#090c1e", "#38155f", "#31bcff"],
    },
    snippets: {
      html: `<div class="terminal">
  <header>
    <span>Vibe Coding Session</span>
    <div class="status">
      <span class="dot"></span>
      Live sync
    </div>
  </header>
  <section class="output">
    <pre>
const launchSequence = stage => {
  const energy = calibrate(stage)
  const thrust = ignite(energy)
  return release(thrust)
}
    </pre>
  </section>
  <footer>
    <div>
      <strong>Focus lane</strong>
      <span>Deep Night · Iso pads</span>
    </div>
    <button>Generate Ramp</button>
  </footer>
</div>`,
      css: `.terminal {
  background: radial-gradient(circle at 20% -10%, rgba(49,188,255,0.3), transparent 45%), radial-gradient(circle at 110% 30%, rgba(158,70,235,0.32), transparent 60%), rgba(9,12,20,0.96);
  border: 1px solid rgba(61,112,255,0.22);
  border-radius: 24px;
  padding: 3rem 3.2rem;
  display: grid;
  gap: 2.5rem;
  box-shadow: 0 30px 110px rgba(19,32,66,0.7);
  color: rgba(214,225,255,0.85);
  min-height: 100%;
}

header {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(152,189,255,0.62);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(41,80,200,0.32);
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(83,148,255,0.38);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #31bcff;
  box-shadow: 0 0 12px rgba(49,188,255,0.9);
}

.output {
  border-radius: 18px;
  background: rgba(4,8,18,0.8);
  border: 1px solid rgba(65,118,255,0.18);
  padding: 1.8rem;
  position: relative;
}

.output::after {
  content: "";
  position: absolute;
  inset: 10px;
  border-radius: 16px;
  border: 1px dashed rgba(73,130,255,0.18);
  pointer-events: none;
}

pre {
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular;
  color: rgba(199,232,255,0.88);
  font-size: 1rem;
  line-height: 1.8;
  text-shadow: 0 0 18px rgba(51,144,255,0.35);
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: rgba(141,178,255,0.68);
}

footer button {
  padding: 0.75rem 1.35rem;
  border-radius: 14px;
  border: 1px solid rgba(95,158,255,0.42);
  background: linear-gradient(135deg, rgba(60,109,250,0.5), rgba(49,188,255,0.4));
  color: rgba(214,234,255,0.92);
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.08em;
  transition: transform 200ms ease;
}

footer button:hover {
  transform: translateY(-4px);
}
`,
      js: `const dot = document.querySelector(".dot");

setInterval(() => {
  dot.style.opacity = dot.style.opacity === "0.3" ? "1" : "0.3";
}, 420);`,
    },
  },
];

