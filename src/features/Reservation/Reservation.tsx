import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import emailjs from "emailjs-com";
import { blockedDates } from './blockedDates';
import 'react-day-picker/dist/style.css';
import './Reservation.scss';


interface FormData {
  name: string;
  email: string;
  phone: string;
  date?: Date; 
  guests: string;
  eventType: string;
  message: string;
}

const Reservation = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: undefined,
    guests: '',
    eventType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date?.toLocaleDateString() || "",
        guests: formData.guests,
        eventType: formData.eventType,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        alert("Solicitud enviada 🎉");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: undefined,
          guests: "",
          eventType: "",
          message: "",
        });
      },
      (err) => {
        console.error(err);
        alert("Hubo un error al enviar la solicitud ❌");
      }
    );
};

  return (
    <section className="reservation-section" id="reservation">
      <div className="container">
        <header className="reservation-header">
          <h2>Reservas</h2>
          <p>Completa el formulario y nos pondremos en contacto contigo</p>
        </header>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="name">Nombre completo</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group half-width">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="phone">Teléfono</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="date">Fecha del evento</label>
                <DayPicker
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) => setFormData((prev) => ({ ...prev, date }))}
                  disabled={blockedDates}
                  captionLayout="dropdown"
                />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="guests">Número de invitados</label>
              <input
                id="guests"
                name="guests"
                type="number"
                placeholder="Número de invitados"
                value={formData.guests}
                onChange={handleChange}
                min={1}
              />
            </div>
            <div className="form-group half-width">
              <label htmlFor="eventType">Tipo de evento</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona...</option>
                <option value="boda">Boda</option>
                <option value="cumpleanos">Cumpleaños</option>
                <option value="corporativo">Corporativo</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje adicional</label>
            <textarea
              id="message"
              name="message"
              placeholder="Detalles adicionales..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
