import { useState } from 'react';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    q: '¿Hacen envíos a domicilio?',
    a: 'Sí, realizamos envíos gratis en Las Heras y Gran Mendoza para compras superiores a $50.000. También coordinamos envíos a todo el país mediante correo seguro para que tu pedido llegue en perfectas condiciones.',
  },
  {
    q: '¿Qué métodos de pago aceptan?',
    a: 'Aceptamos transferencias bancarias, tarjetas de crédito y débito. Además, ofrecemos 3 cuotas sin interés para que puedas disfrutar de tus etiquetas favoritas con mayor comodidad.',
  },
  {
    q: '¿Cómo garantizan la calidad de los productos?',
    a: 'Trabajamos de forma directa con bodegas, cervecerías y destilerías. Esto nos permite garantizar la autenticidad, la correcta conservación y la trazabilidad de cada botella que llega a tus manos.',
  },
  {
    q: '¿Me pueden asesorar para hacer un regalo o elegir un vino?',
    a: '¡Por supuesto! Nuestro equipo está capacitado para recomendarte la mejor opción según tu presupuesto, tus preferencias o el maridaje que busques. Contactanos por WhatsApp y te ayudamos en el momento.',
  },
  {
    q: '¿Venden bebidas para eventos o compras mayoristas?',
    a: 'Sí, armamos presupuestos a medida para casamientos, cumpleaños, eventos corporativos y compras por volumen. Escribinos a nuestro correo o WhatsApp indicando lo que necesitás y te enviaremos una cotización especial.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleItem = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section className="cv-faq-section" id="faq">
      <div className="cv-faq-container">
        <div className="section-header">
          <span className="cv-code-detail">{'{ INFO_ÚTIL }'}</span>
          <h2>Preguntas Frecuentes</h2>
        </div>

        <div className="cv-faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div
              className={`cv-faq-item ${openIndex === i ? 'cv-faq-item--open' : ''}`}
              key={i}
            >
              <button
                className="cv-faq-question"
                onClick={() => toggleItem(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <span className="material-symbols-outlined cv-faq-icon">
                  {openIndex === i ? 'remove' : 'add'}
                </span>
              </button>

              <div className="cv-faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}