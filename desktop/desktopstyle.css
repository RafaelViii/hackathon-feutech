:root {
  --color-primary: #f0f0f0;
  --color-primary-nav: #D5D5D5;
  --color-accent: #fa8231;
  --color-text: #000000;
  --color-hover: #fff3;
  --color-bg: #f5f6fa;
  --color-dropdown-bg: #8a8888;
  --color-dropdown-hover: #c1c1c1;
  --color-shadow: #0002;
  --color-getstarted-bg: #e23c3c;
  --color-getstarted-hover: #a81f1f;
  --hero-bg: #3533cd;
  --radius-lg: 1.5rem;
  --radius: 0.85rem;
}

/* SYSTEM FONT STACK */
body, html {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  min-height: 100vh;
  margin: 0;
  padding: 0;
  color: var(--color-dark);
  background: var(--color-bg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  transition: background 0.3s;
}

/* NAVIGATION */
nav {
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  height: 90px;
  box-shadow: none;
  border: none;
}

.navbar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 68px;
  margin: 0 auto;
  padding: 0 2.2rem;
  border-radius: var(--radius-lg);
  margin-top: 0;
  background: rgba(20,22,28,0.97);
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.10);
  overflow: visible;
  position: relative;
  top: 22px;
}

.logo {
  grid-column: 2;
  justify-self: center;
  font-size: 2.3rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: 2px;
  font-family: inherit;
  text-shadow: 0 4px 32px rgba(10,42,108,0.14);
  margin-left: 0;
  margin-right: 0;
}

.nav-side.nav-left {
  grid-column: 1;
  justify-self: start;
}
.nav-side.nav-right {
  grid-column: 3;
  justify-self: end;
}

.nav-side {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0;
  margin: 0;
  list-style: none;
}
.nav-link a, .nav-link button {
  color: #fff;
  background: none;
  border: none;
  font-size: 1.15rem;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  padding: 0.45em 1.2em;
  border-radius: 2em;
  transition: background 0.18s, color 0.18s;
  outline: none;
  position: relative;
}
.nav-link a:hover, .nav-link button:hover {
  background: rgba(255,255,255,0.09);
  color: #7ecbff;
}
.dropdown-parent {
  position: relative;
}
.dropdown {
  display: none;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 110%;
  min-width: 200px;
  background: #181b23;
  border-radius: 1em;
  border: 1px solid rgba(255,255,255,0.09);
  box-shadow: 0 4px 24px 0 rgba(64,124,255,0.17);
  z-index: 1000;
}
.dropdown a {
  color: #7ecbff;
  padding: 0.95em 1.5em;
  text-decoration: none;
  font-size: 1rem;
  border-bottom: 1px solid #b3e0ff44;
  transition: background 0.18s, color 0.16s;
}
.dropdown a:last-child {
  border-bottom: none;
}
.dropdown a:hover {
  background: #24272f;
  color: #fff;
}
.dropdown-parent:focus-within .dropdown,
.dropdown-parent:hover .dropdown {
  display: flex;
}

/* Remove NAV BOTTOM LINE EFFECT for borderless look */
.navbar::after {
  display: none !important;
}

/* MODE SWITCH BUTTON */
.mode-switch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  background: #20222a;
  color: #7ecbff;
  border: 1.5px solid #28304a;
  border-radius: 1.5em;
  font-size: 1.25em;
  font-family: inherit;
  font-weight: bold;
  padding: 0.43em 1.1em;
  margin-left: 1em;
  cursor: pointer;
  transition: background 0.22s, color 0.22s, border 0.21s;
  box-shadow: 0 2px 12px 0 rgba(64,124,255,0.08);
  outline: none;
  user-select: none;
}
.mode-switch.light {
  background: #f3f6fa;
  color: #2166f7;
  border: 1.5px solid #b3e0ff;
}
.mode-switch:hover {
  background: #28304a;
  color: #fff;
}
.mode-switch.light:hover {
  background: #eaf2fb;
  color: #407cff;
}
.mode-switch .icon {
  font-size: 1.3em;
  vertical-align: middle;
}

/* LIGHT/DARK MODE - BODY COLOR OVERRIDE */
body.lightmode {
  background: linear-gradient(145deg, #f8fcff 0%, #e3edfa 100%);
}
body.lightmode nav {
  background: transparent;
}
body.lightmode .navbar {
  background: rgba(255,255,255,0.99);
  border: none;
  box-shadow: 0 4px 32px 0 rgba(100,150,230,0.13);
}
body.lightmode .logo {
  color: #2166f7;
  text-shadow: 0 2px 14px #b3e0ff88;
}
body.lightmode .nav-link a,
body.lightmode .nav-link button {
  color: #2166f7;
}
body.lightmode .nav-link a:hover,
body.lightmode .nav-link button:hover {
  background: #eaf2fb;
  color: #407cff;
}
body.lightmode .dropdown {
  background: #f1f5fe;
  border-color: #b3e0ff44;
}
body.lightmode .dropdown a {
  color: #407cff;
}
body.lightmode .dropdown a:hover {
  background: #eaf2fb;
  color: #2166f7;
}
body.lightmode .navbar::after {
  display: none !important;
}
body.lightmode .mode-switch {
  background: #eaf2fb;
  color: #407cff;
  border: 1.5px solid #b3e0ff;
}

/* GET STARTED BUTTON */
.get-started-btn {
  background: linear-gradient(90deg, var(--color-accent), #ffae5b 80%);
  color: var(--color-dark);
  font-weight: 800;
  letter-spacing: 1px;
  padding: 0.7em 2em;
  border-radius: 999px;
  box-shadow: 0 2px 16px 0 rgba(56,189,248,0.09);
  border: none;
  margin-left: 1.1rem;
  font-family: inherit;
  font-size: 1.07rem;
  transition: background 0.2s, color 0.2s, box-shadow 0.19s;
  text-decoration: none;
  display: inline-block;
}
.get-started-btn:hover {
  background: linear-gradient(90deg, #ffae5b, var(--color-accent));
  color: #fff;
  box-shadow: 0 6px 24px 0 rgba(56,189,248,0.18);
}

/* HAMBURGER FOR MOBILE */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  margin-left: 2rem;
  cursor: pointer;
}
.hamburger span {
  width: 30px;
  height: 4px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;
}

/* MOBILE NAV */
.mobile-nav {
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100vw;
  background: linear-gradient(120deg, #7ecbff, #407cff 90%);
  z-index: 1202;
  animation: fadeIn 0.24s;
}
.mobile-nav.open {
  display: block;
}
.mobile-nav ul {
  list-style: none;
  margin: 0;
  padding: 1.3rem 0 1.7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
}
.mobile-nav a, .mobile-nav button {
  color: #fff;
  background: none;
  border: none;
  font-size: 1.09rem;
  font-family: inherit;
  padding: 1em 2em;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
}
.mobile-nav a:hover, .mobile-nav button:hover {
  background: #ffae5b;
  color: #407cff;
}
.mobile-drop-btn {
  font-weight: 700;
}
.mobile-dropdown {
  display: none;
  flex-direction: column;
  background: #7ecbff;
  border-radius: var(--radius);
  margin-top: 0.15rem;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
}
.mobile-drop-btn.open + .mobile-dropdown {
  display: flex;
}
.mobile-dropdown a {
  color: #407cff;
  padding: 0.6rem 1.5rem;
  border-bottom: 1px solid #33415544;
}
.mobile-dropdown a:last-child {
  border-bottom: none;
}
.mobile-dropdown a:hover {
  background: #fffbe5;
  color: var(--color-accent);
}

.hero-bg {
  width: 100%;
  min-height: 420px;
  background: linear-gradient(90deg, #3533cd 60%, #ffae5b 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  position: relative;
  box-shadow: 0 6px 32px 0 rgba(37,99,235,0.07);
  margin-bottom: 2.5rem;
  margin-top: 110px;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  overflow: hidden;
}

.hero-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  min-height: 420px;
  gap: 4rem;
  padding: 2.2rem 2rem 2.2rem 2.5rem;
  box-sizing: border-box;
}

.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
  min-width: 320px;
  max-width: 480px;
  height: 100%;
}

.hero-action-image {
  width: 100%;
  max-width: 410px;
  min-width: 220px;
  aspect-ratio: 1/1;
  height: auto;
  display: block;
  border: none;
  background: none;
  box-shadow: none;
  object-fit: contain;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 2 1 0;
  min-width: 280px;
  gap: 1.7rem;
}

/* Make the hero-title and hero-desc resizable using input[type=range] */
.hero-title,
.hero-desc {
  resize: none;
  transition: font-size 0.2s;
}

/* Controls style */
.hero-text-controls {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin: 0.6rem 0 0 0;
  font-size: 100rem;
  color: #fff;
  user-select: none;
}
.hero-text-controls label {
  font-size: 50px;
  font-weight: 500;
  margin-right: 0.4em;
}
.hero-text-controls input[type="range"] {
  width: 130px;
  accent-color: #3533cd;
  cursor: pointer;
}
.hero-text-controls output {
  width: 2.7em;
  display: inline-block;
  text-align: left;
  font-weight: 700;
  color: #ffd700;
}

.hero-logo-row {
  margin-top: -5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hero-small-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
  background: #fff;
  filter: drop-shadow(0 2px 8px #0002);
  padding: 4px;
  box-shadow: none;
}

/* Responsive styles */
@media (max-width: 1100px) {
  .hero-flex {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 2rem 1.2rem;
    min-height: 320px;
  }
  .hero-visual,
  .hero-content {
    min-width: 0;
    width: 100%;
    max-width: 600px;
  }
  .hero-action-image {
    max-width: 300px;
  }
  .hero-title {
    font-size: 50px;
  }
}

@media (max-width: 700px) {
  .hero-bg {
    min-height: 180px;
    padding: 0;
    border-radius: 1rem;
  }
  .hero-flex {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
    padding: 1.2rem 0.7rem;
    min-height: 120px;
  }
  .hero-action-image {
    max-width: 150px;
  }
  .hero-title {
    font-size: 10px;
  }
  .hero-desc {
    font-size: 10px;
  }
  .hero-small-logo {
    width: 28px;
    height: 28px;
    padding: 1px;
  }
}

/* Responsive styles */
@media (max-width: 1100px) {
  .hero-flex {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 2rem 1.2rem;
    min-height: 320px;
  }
  .hero-visual,
  .hero-content {
    min-width: 0;
    width: 100%;
    max-width: 600px;
  }
  .hero-action-image {
    max-width: 300px;
  }
  .hero-title {
    font-size: 2.1rem;
  }
}

@media (max-width: 700px) {
  .hero-bg {
    min-height: 180px;
    padding: 0;
    border-radius: 1rem;
  }
  .hero-flex {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
    padding: 1.2rem 0.7rem;
    min-height: 120px;
  }
  .hero-action-image {
    max-width: 140px;
  }
  .hero-title {
    font-size: 1.25rem;
  }
  .hero-desc {
    font-size: 0.97rem;
  }
  .hero-small-logo {
    width: 28px;
    height: 28px;
    padding: 1px;
  }
}

.popular-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
}
.popular-inner {
  width: 100%;
  max-width: 1200px;
}
.popular-inner p {
  font-size: 1.3rem;
  color: #3533cd;
  font-weight: 800;
  margin: 0;
  font-family: inherit;
  letter-spacing: 0.7px;
}

/* Carousel Section Glass Effect */
.carousel-container {
  width: 100%;
  max-width: 1100px;
  margin: 2.5rem auto 0 auto;
  padding: 0 1rem;
  background: rgba(255,255,255,0.18);
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 32px 0 rgba(37,99,235,0.07);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  overflow-x: auto;
}

.carousel-card, .card {
  background: #fff;
  border-radius: var(--radius-lg);
  box-shadow: 0 6px 32px 0 rgba(37,99,235,0.07);
  transition: box-shadow 0.2s, transform 0.2s;
}
.carousel-card:hover, .card:hover {
  box-shadow: 0 10px 48px 0 rgba(56,189,248,0.14);
  transform: translateY(-6px) scale(1.04);
}

.carousel-images {
  display: flex;
  gap: 2.2rem;
  padding: 2.2rem 0;
}

/* VIDEO WRAPPER - GLASSY & BLENDED */
.video-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.2rem 0 2.2rem 0;
  padding: 2.5rem 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(37,99,235,0.16);
  background: linear-gradient(140deg, rgba(37,99,235,0.23) 0%, rgba(96,165,250,0.12) 100%);
  backdrop-filter: blur(10px) saturate(130%);
  -webkit-backdrop-filter: blur(10px) saturate(130%);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.video-wrapper video {
  max-width: 100%;
  height: auto;
  border-radius: 1.5rem;
  box-shadow: 0 2px 18px 0 rgba(37,99,235,0.12);
  background: #e0e7ff;
}

/* CENTER-LINKS (Buttons) */
.center-links {
  display: flex;
  justify-content: center;
  gap: 2.2rem;
  margin: 3.2rem 0 2.2rem 0;
  flex-wrap: wrap;
}
.center-link {
  display: inline-block;
  background: linear-gradient(90deg, #ffae5b, var(--color-accent) 80%);
  color: var(--color-dark);
  font-size: 1.09rem;
  font-family: inherit;
  font-weight: 700;
  padding: 0.85em 2em;
  border-radius: 999px;
  text-decoration: none;
  margin: 0.5rem 0;
  box-shadow: 0 2px 12px 0 rgba(56,189,248,0.11);
  transition: background 0.18s, color 0.18s, transform 0.16s;
}
.center-link:hover {
  background: linear-gradient(90deg, #3533cd, #7ecbff);
  color: #fff;
  transform: translateY(-3px) scale(1.04);
}

/* DUAL KIOSK SECTION */
.dual-kiosk-text {
  margin-top: 120px;
  font-family: inherit;
  font-weight: 800;
  font-size: 2rem;
  color: #407cff;
  text-align: left;
  line-height: 1.3;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  letter-spacing: 0.7px;
}

.seamless-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  max-width: 1100px;
  margin: 3rem auto;
  padding: 0 1rem;
}
.seamless-text {
  flex: 1 1 0;
  max-width: 50%;
  color: #1e3a8a;
  font-family: inherit;
}

.seamless-image-stack {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.original-img {
  display: block;
  height: auto;
  width: 340px;
  max-width: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 6px 24px 0 rgba(37,99,235,0.13);
  border: 4px solid #e0e7ff;
  background: #fff;
}

/* Kiosk Steps Animated Section */
.kiosk-title {
  font-family: inherit;
  font-size: 2.2rem;
  font-weight: 900;
  color: #2463eb;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
  text-shadow: 0 2px 20px #b1c6f855;
}

.kiosk-steps {
  list-style: decimal-leading-zero;
  padding-left: 1.7em;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  background: rgba(96,165,250,0.07);
  border-radius: 1rem;
  box-shadow: 0 2px 16px 0 rgba(30,64,175,0.09);
  padding-top: 1.2em;
  padding-bottom: 1.2em;
  padding-right: 1.7em;
  margin: 0;
  transition: box-shadow 0.3s;
}
.kiosk-steps li {
  margin-bottom: 1.2em;
  position: relative;
  padding-left: 0.2em;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s cubic-bezier(.68,-0.55,.27,1.55), transform 0.7s cubic-bezier(.68,-0.55,.27,1.55);
}
.kiosk-steps li:last-child {
  margin-bottom: 0;
}
.kiosk-steps li span {
  background: linear-gradient(90deg, #60a5fa 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 1.18em;
}
.animated-text.visible .kiosk-steps li {
  opacity: 1;
  transform: translateY(0);
}
.animated-text.visible .kiosk-steps li:nth-child(1) { transition-delay: 0.1s; }
.animated-text.visible .kiosk-steps li:nth-child(2) { transition-delay: 0.3s; }
.animated-text.visible .kiosk-steps li:nth-child(3) { transition-delay: 0.5s; }
.animated-text.visible .kiosk-steps li:nth-child(4) { transition-delay: 0.7s; }
.animated-text.visible .kiosk-steps li:nth-child(5) { transition-delay: 0.9s; }

/* FOOTER */
.hackathon-footer {
  background: linear-gradient(120deg, #3533cd, #7ecbff);
  color: #fff;
  padding: 44px 0 22px 0;
  font-family: inherit;
  width: 100%;
  margin-top: 100px;
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-logo-section {
  margin-bottom: 18px;
}
.footer-logo {
  font-size: 2.3rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #ffae5b;
}
.footer-links {
  display: flex;
  gap: 2.3rem;
  margin-bottom: 15px;
}
.footer-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.13rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: color 0.18s, text-shadow 0.16s;
}
.footer-link:hover {
  color: var(--color-accent);
  text-shadow: 0 2px 12px #38bdf844;
}
.footer-copy {
  font-size: 1rem;
  opacity: 0.7;
  text-align: center;
}

/* ANIMATIONS */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* RESPONSIVE */
@media (max-width: 1440px) {
  .navbar {
    max-width: 98vw;
    padding: 0 1.5rem;
  }
}
@media (max-width: 1200px) {
  .navbar, .footer-content {
    max-width: 99vw;
  }
  .dual-kiosk-text, .seamless-image-stack {
    max-width: 95vw;
  }
  .carousel-container {
    max-width: 97vw;
  }
}
@media (max-width: 1050px) {
  .navbar {
    padding: 0 1rem;
  }
}
@media (max-width: 900px) {
  nav {
    height: 72px;
  }
  .navbar {
    padding: 0 0.5rem;
    height: 54px;
  }
  .nav-left, .nav-right {
    display: none;
  }
  .logo {
    margin: 0 auto;
    font-size: 1.5rem;
  }
  .hamburger {
    display: flex;
  }
  .mobile-nav {
    display: block;
    top: 72px;
  }
  .center-links {
    gap: 1.1rem;
    flex-direction: column;
    align-items: center;
  }
  .hero-center {
    padding: 2rem 0.4rem 1.2rem;
  }
  .dual-kiosk-text {
    font-size: 1.2rem;
    margin-top: 60px;
  }
  .seamless-img {
    height: 180px;
    max-width: 99vw;
  }
  .video-wrapper {
    padding: 1.3rem 0.5rem;
    border-radius: 1rem;
  }
}
@media (max-width: 600px) {
  nav {
    height: 58px;
  }
  .navbar {
    height: 40px;
  }
  .logo {
    font-size: 1.1rem;
  }
  .footer-content {
    padding: 0 10px;
  }
  .footer-links {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  .footer-logo {
    font-size: 1.2rem;
  }
  .dual-kiosk-text {
    font-size: 1rem;
    margin-top: 36px;
  }
  .seamless-img {
    height: 110px;
  }
  .video-wrapper {
    padding: 0.7rem 0.3rem;
    border-radius: 0.7rem;
  }
}

/* Ensure all content below navbar has proper top margin to not hide behind fixed nav */
body, .hero-bg, .main-content, .content {
  margin-top: 110px;
}