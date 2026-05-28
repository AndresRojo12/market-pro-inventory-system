import dashboardImg from "./assets/dashboard.png";
import productsImg from "./assets/products.png";
import ventaImg from "./assets/venta.png";
import perfilImg from "./assets/perfil.png";
import marketProLogo from "./assets/market-pro.png";
import carritoImg from "./assets/carrito.png";
import facturaImg from "./assets/factura.png"
import historialImg from "./assets/historial.png";
import iventoryImg from "./assets/inventory-management.png";
import fastapiImg from "./assets/fastapi.png";
import authenticationImg from "./assets/autenticacion.png";
const gumroadLink = import.meta.env.VITE_ENV_GUMROAD;
const githubLink = import.meta.env.VITE_ENV_GITHUB;
import "./App.css";

function App() {

  return (
    <>
      <header className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="logo-wrapper">
              <img
                src={marketProLogo}
                alt="Market Pro Logo"
                className="market-logo"
              />
              <h1>Market Pro</h1>
            </div>

            <p>
              Modern desktop inventory and invoicing application built with
              Electron, React and FastAPI. Manage products, sales and inventory
              in a professional desktop environment.
            </p>

            <div className="buttons">
              <a href={gumroadLink} className="btn btn-primary" target="_blank">
                Buy Now
              </a>

              <a
                href={githubLink}
                className="btn btn-secondary"
                target="_blank"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <h2 className="section-title">Features</h2>

          <div className="features">
            <div className="feature-card">
              <h3>Inventory Management</h3>
              <img src={iventoryImg} alt="Inventory Management" style={{ width: "100%", marginBottom: "10px" }} />
              <p>
                Manage stock, products and categories with a modern interface.
              </p>
            </div>

            <div className="feature-card">
              <h3>Sales System</h3>
              <img src={ventaImg} alt="Sales Screenshot" style={{ width: "100%", marginBottom: "10px" }} />
              <p>
                Create and manage sales efficiently from a desktop environment.
              </p>
            </div>

            <div className="feature-card">
              <h3>Desktop Application</h3>
              <img src={historialImg} alt="History Screenshot" style={{ width: "100%", marginBottom: "10px" }} />
              <p>Native desktop experience powered by Electron.</p>
            </div>

            <div className="feature-card">
              <h3>FastAPI Backend</h3>
              <img src={fastapiImg} alt="FastAPI Logo" style={{ width: "100%", marginBottom: "10px" }} />
              <p>High-performance backend architecture using FastAPI.</p>
            </div>

            <div className="feature-card">
              <h3>Authentication</h3>
              <img src={authenticationImg} alt="Authentication Screenshot" style={{ width: "100%", marginBottom: "10px" }} />
              <p>Secure login system with protected routes and sessions.</p>
            </div>

            <div className="feature-card">
              <h3>Modern UI</h3>
              <img src={dashboardImg} alt="Dashboard Screenshot" style={{ width: "100%", marginBottom: "10px" }} />
              <p>Clean and responsive interface designed for productivity.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="section-title">Screenshots</h2>

          <div className="screenshots">
            <img src={dashboardImg} alt="Dashboard Screenshot" />
            <img src={perfilImg} alt="Login Screenshot" />
            <img src={productsImg} alt="Products Screenshot" />
            <img src={ventaImg} alt="Sales Screenshot" />
            <img src={carritoImg} alt="Shopping Cart Screenshot" />
            <img src={facturaImg} alt="Invoice Screenshot" />
            <img src={historialImg} alt="History Screenshot" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="section-title">Built With</h2>

          <div className="tech">
            <span>Electron</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>FastAPI</span>
            <span>SQLite</span>
            <span>Electron Builder</span>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="cta">
            <h2>Ready to Improve Your Business Workflow?</h2>

            <p>
              Download Market Pro and start managing your products, inventory
              and sales professionally.
            </p>

            <div className="buttons" style={{ marginTop: "30px" }}>
              <a href={gumroadLink} className="btn btn-primary" target="_blank">
                Purchase Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>
            © {new Date().getFullYear()} Market Pro — Desktop Inventory &
            Billing System
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
