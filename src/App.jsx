import './App.css'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.mobile.charging.animation.funfx3d'
const APP_ICON_URL = 'https://play-lh.googleusercontent.com/8-7fwivP8bDpmXbZ2FOAM_nnKCgLM150m8muWdzVcDPO3VjP0a1INFr0y0gSWQV4ArLF6zLtAuEtVQZ3GpbN=s256'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <img src={APP_ICON_URL} alt="Charging Animation app icon" className="app-icon" />
          <h1 className="logo">⚡ Charging Animation</h1>
          <p className="tagline">3D Fun FX</p>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <h2 className="hero-title">Make Every Charge Look Amazing</h2>
            <p className="hero-description">
              An all-in-one charging animation app with stunning 3D charging animations,
              stylish battery charging effects, smooth live animations, smart battery
              information, and a useful Charge Alarm.
            </p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="play-store-badge"
              />
            </a>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h3 className="section-title">Key Features</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔋</div>
                <h4>3D Charging Animation</h4>
                <p>Realistic 3D animations with smooth motion and HD graphics for every charging session</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h4>Live Charging Animation</h4>
                <p>Automatic live animations with attractive visuals every time you connect your charger</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h4>Multiple Categories</h4>
                <p>Browse neon, RGB, abstract, technology, glow, and creative animation themes</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">❤️</div>
                <h4>Favorite Animations</h4>
                <p>Save your favorite charging animation and access it anytime with a single tap</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌡️</div>
                <h4>Battery Information</h4>
                <p>Check battery temperature, health, voltage, technology, and charging status in one place</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⏰</div>
                <h4>Charge Alarm</h4>
                <p>Get alerted when your battery reaches your preferred charging level</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <h3 className="section-title">About the App</h3>
            <p className="about-text">
              Charging Animation – 3D Fun FX lets you personalize every charging screen
              with beautiful animation themes. Pick from a premium collection of HD charging
              effects, apply your favorite design instantly, and keep an eye on your battery
              with smart battery information and a built-in Charge Alarm. Simple and easy to use.
            </p>
            <div className="app-info">
              <div className="info-item">
                <strong>Category:</strong> Personalization
              </div>
              <div className="info-item">
                <strong>Developer:</strong> AI Sentinel Studios
              </div>
              <div className="info-item">
                <strong>Content Rating:</strong> Everyone
              </div>
              <div className="info-item">
                <strong>Updated:</strong> September 7, 2026
              </div>
            </div>
          </div>
        </section>

        <section className="privacy">
          <div className="container">
            <h3 className="section-title">Privacy & Security</h3>
            <div className="privacy-features">
              <div className="privacy-item">
                <span className="checkmark">✓</span>
                <p>No data shared with third parties</p>
              </div>
              <div className="privacy-item">
                <span className="checkmark">✓</span>
                <p>No data collected from users</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h3 className="cta-title">Ready to Power Up Your Charging Screen?</h3>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="play-store-badge"
              />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 AI Sentinel Studios. All rights reserved.</p>
          <p className="footer-links">
            <a href="mailto:appdevs2025@gmail.com">Contact</a>
            {' | '}
            <a href="/privacy-policy.html">Privacy Policy</a>
            {' | '}
            <a href="/terms.html">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
