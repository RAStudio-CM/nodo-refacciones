"use client";

import { useEffect, useState } from "react";

const services = [
  ["01", "Mantenimiento", "Revisiones y puesta a punto para que todo funcione."],
  ["02", "Reparaciones", "Soluciones precisas para resolver cada imprevisto."],
  ["03", "Reformas", "Mejoras y renovaciones con terminación cuidada."],
  ["04", "Construcciones", "Ejecución coordinada para intervenciones de mayor escala."],
];

const process = [
  ["01", "Consulta", "Contanos qué necesitás resolver."],
  ["02", "Visita", "Relevamos el espacio y definimos el alcance."],
  ["03", "Propuesta", "Recibís un presupuesto claro y detallado."],
  ["04", "Ejecución", "Coordinamos los oficios y cada etapa."],
  ["05", "Entrega", "Revisamos todo para que quede en orden."],
];

const trades = [
  "Electricidad e iluminación",
  "Plomería y sanitarios",
  "Pintura y albañilería",
  "Techos e impermeabilización",
  "Carpintería, herrería y vidrios",
  "Climatización y aire acondicionado",
];

const refacciones = [
  ["01", "Quincho", "/images/refaccion-cocina-antes-despues.jpg"],
  ["02", "Barra desayunador", "/images/refaccion-baño-antes-despues.jpg"],
  ["03", "Baño", "/images/refaccion-pasillo-antes-despues.jpg"],
  ["04", "Cocina lavadero", "/images/refaccion-interior-antes-despues.jpg"],
];

const whatsapp = "https://wa.me/5491135013636?text=Hola%20MS%2C%20quiero%20consultar%20por%20una%20visita.";
const email = "ms.serviciosyconstrucciones@gmail.com";

function Logo({ cover = false }: { cover?: boolean }) {
  return <span className={`logo ${cover ? "logo-cover" : "logo-compact"}`}>
    <img src="/images/ms-logo.png" width={870} height={281} alt={cover ? "MS — Servicios y construcciones" : "MS"} />
  </span>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.18 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return <main>
    <div className="splash" aria-hidden="true"><Logo cover /></div>

    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#inicio" className="header-logo"><Logo /></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? "Cerrar" : "Menú"}</button>
      <nav className={open ? "navigation is-open" : "navigation"} aria-label="Navegación principal">
        <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
        <a href="#proceso" onClick={() => setOpen(false)}>Cómo trabajamos</a>
        <a href="#refacciones" onClick={() => setOpen(false)}>Refacciones</a>
        <a href="#especialidades" onClick={() => setOpen(false)}>Especialidades</a>
        <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Solicitar visita ↗</a>
      </nav>
    </header>

    <section className="hero scene" id="inicio">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-intro">
        <p className="kicker">Mantenimiento · Reparaciones · Reformas · Construcciones</p>
        <h1>Todo lo que tu espacio necesita</h1>
        <p className="lead">Un equipo coordinado para resolver, mejorar y ejecutar con orden, criterio técnico y terminación cuidada.</p>
      </div>
      <div className="service-index" id="servicios">
        {services.map(([number, title, copy]) => <article key={number} className="service-item"><span>{number}</span><h2>{title}</h2><p>{copy}</p><b>↗</b></article>)}
      </div>
      <a className="scroll-prompt" href="#proceso">
        <small>Deslizá o tocá</small>
        <strong>Cómo trabajamos</strong>
        <span>↓</span>
      </a>
    </section>

    <section className="process scene reveal" id="proceso">
      <div className="scene-copy">
        <p className="kicker">Cómo trabajamos</p>
        <h2>Un proceso claro<br />Un responsable de principio a fin</h2>
        <p className="lead">Una conversación, un alcance definido y una ejecución coordinada. Sin perseguir proveedores, sin perder tiempo.</p>
      </div>
      <div className="process-list">{process.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      <figure className="scene-photo process-photo"><img src="/images/casa-c-final.jpg" alt="Vivienda terminada" /></figure>
    </section>

    <section className="before-after scene reveal" id="refacciones">
      <div className="scene-copy">
        <p className="kicker">Refacciones</p>
        <h2>El cambio se ve<br />El trabajo se siente</h2>
        <p className="lead">Intervenciones reales, coordinadas desde el diagnóstico hasta la entrega final.</p>
      </div>
      <div className="refaccion-grid">
        {refacciones.map(([number, title, image]) => <figure className="refaccion-card" key={number}>
          <img src={image} alt={`${title}: antes y después de la refacción`} />
          <figcaption><span>{number}</span><strong>{title}</strong><em>Antes / Después</em></figcaption>
        </figure>)}
      </div>
    </section>

    <section className="specialties scene reveal" id="especialidades">
      <div className="scene-copy">
        <p className="kicker">Oficios y especialidades</p>
        <h2>Un equipo para resolver tus necesidades</h2>
        <p className="lead">Cada intervención convoca el oficio correcto y se gestiona bajo una misma mirada.</p>
      </div>
      <div className="specialty-layout">
        <div className="trade-list">{trades.map((trade, index) => <a href="#contacto" key={trade}><span>{String(index + 1).padStart(2, "0")}</span>{trade}<b>↗</b></a>)}</div>
        <figure className="scene-photo specialty-photo"><img src="/images/casa-d-cocina.jpg" alt="Interior con terminaciones cuidadas" /></figure>
      </div>
      <p className="service-note">Viviendas · Oficinas · Locales comerciales · Intervenciones a medida</p>
    </section>

    <footer className="contact scene reveal" id="contacto">
      <p className="kicker">Contacto</p>
      <h2>¿Qué necesitás resolver?</h2>
      <div className="contact-grid">
        <p className="lead">Contanos tu idea o tu problema. Coordinamos una visita y te enviamos una propuesta clara.</p>
        <div className="contact-data">
          <div><small>Área de trabajo</small><p>CABA y Gran Buenos Aires</p></div>
          <div><small>Email</small><a href={`mailto:${email}`}>{email}</a></div>
          <div><small>WhatsApp</small><a href={whatsapp} target="_blank" rel="noreferrer">Escribir por WhatsApp ↗</a></div>
          <div><small>Respuesta</small><p>Atención personalizada.</p></div>
        </div>
      </div>
      <a className="main-cta" href={whatsapp} target="_blank" rel="noreferrer">Hablar por WhatsApp <span>↗</span></a>
      <div className="footer-line"><Logo /><span>© 2026 MS</span></div>
    </footer>
    <a className="floating-contact" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.6 4.4A10 10 0 0 0 3.5 16.1L2.3 21.7l5.7-1.2a10 10 0 1 0 11.6-16.1ZM12 20a8 8 0 0 1-4.1-1.1l-.4-.2-3.3.7.7-3.2-.2-.4A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.2-.6-1.4-.6s-.3-.1-.4.1-.5.6-.6.8-.2.2-.4.1a6.5 6.5 0 0 1-1.9-1.2 7.1 7.1 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3s0-.2 0-.3l-.6-1.3c-.1-.3-.3-.3-.4-.3h-.4c-.1 0-.3 0-.5.2s-.6.6-.6 1.5.6 1.8.7 1.9a8.7 8.7 0 0 0 3.3 3c.5.2.9.4 1.2.5.5.1 1 .1 1.3.1.4-.1 1.2-.5 1.4-1s.2-1 .2-1.1-.1-.2-.3-.3Z" /></svg>
    </a>
  </main>;
}
