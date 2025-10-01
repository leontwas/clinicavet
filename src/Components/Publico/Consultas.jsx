import "./Consultas.css";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTelephone, BsEnvelope } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const Consultas = () => {
  return (
    <>
      <h1 className="titulo_pagina">¿Tenés alguna duda?</h1>
      <p className="texto-consultas">
        Comunicate con nosotros por consultas o presupuestos y te responderemos
        a la brevedad.
      </p>

      <section className="section_consultas">
        <div className="container_redes">
          <div className="container_texto_redes">
            <p className="texto_redes">Seguinos en nuestras redes!</p>
          </div>
          <div className="container_iconos_redes">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="icono_redes"
            >
              <AiFillInstagram size={60} />
            </a>
            <a
              href="https://es-la.facebook.com/"
              target="_blank"
              className="icono_redes"
            >
              <BsFacebook size={46} />
            </a>
          </div>
          <div className="datos">
            <div className="dato_1">
              <span>
                <BsTelephone size={35} className="icono_dato" />
                (011) 4123-1234
              </span>
            </div>
            <div className="dato">
              <span>
                <GrLocation size={35} className="icono_dato" />
               Av. Cabildo 28, CABA
              </span>
            </div>
            <div className="dato">
              <span>
                <BsEnvelope size={35} className="icono_dato" />{" "}
                ramvet@gmail.com
              </span>
            </div>
            <div className="dato">
              <iframe
                id="mapa"
               src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d821.2901328322168!2d-58.436619926037196!3d-34.57480441124266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1759267340210!5m2!1ses!2sar" 
              ></iframe>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <form
            className="consultas_form"
            action="mailto:veterinaria@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="nombre">Nombre y apellido</label>
              <input
                type="text"
                className="form-control-Consultas"
                name="nombre"
                id="nombre"
                placeholder="Nombre..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control-Consultas"
                name="email"
                id="email"
                placeholder="ejemplo@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                className="form-control-Consultas"
                name="mensaje"
                id="mensaje"
                rows="10"
                placeholder="Deja tu mensaje aquí"
                maxLength={200}
              ></textarea>
            </div>
            <button className="btn-consulta" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Consultas;