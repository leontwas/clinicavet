import { Carousel } from 'react-bootstrap';
import "./QuienesSomos.css"

const QuienesSomos = () => {
  return (
    <div className='container py-4'>
      <div>
        <Carousel variant="dark" className="quienes-somos-carousel">
          <Carousel.Item>
            <div className="oscurecer">
              <img
                className="img-fluid"
                src="./1.jpeg"
                alt="Clínica RAMVET Instalaciones"
              />
            </div>
            <Carousel.Caption>
              <div className="txt">
                <h1>Somos RAMVET</h1>
                <p>
                  Un centro médico de atención integral para mascotas.
                  Desde el año 2025 ofrecemos el servicio de "Historia Clínica Digital" para que puedas tener un registro de todas las consultas en un solo lugar.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="oscurecer">
              <img
                className="img-fluid"
                src="./2.jpeg"
                alt="Profesionales y equipamiento"
              />
            </div>
            <Carousel.Caption>
              <div className="pa">
                <p>
                  Contamos con profesionales calificados y equipamiento de última generación. Sabemos que la tecnología es fundamental para el crecimiento de las instituciones médicas y es una de nuestras fortalezas.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="oscurecer">
              <img
                className="img-fluid"
                src="./vetdog.jpg"
                alt="Especialidades veterinarias"
              />
            </div>
            <Carousel.Caption>
              <div className="txt2">
                <h2>Nuestras especialidades:</h2>
                <h4>Clínica Médica • Nutrición • Cirugía General</h4>
                <h4>Diagnóstico por imágenes • Laboratorio</h4>
                <h4>Oncología • Vacunación</h4>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="mt-5">
        <h3 className="esp">
          <img src="/logoBanco.png" alt="Logo RAMVET" className="logoBlanco" onError={(e) => { e.currentTarget.src = "/logoNegro.jpg"; }} />
          Nuestro equipo
        </h3>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mt-2">
          <div className="col">
            <div className="card team-card">
              <img src="./5.jpeg" className="card-img-top" alt="Dra. Patricia Soler y Dr. Fernando Sosa" />
              <div className="card-body">
                <h5 className="card-title">Dra. Patricia Soler y Dr. Fernando Sosa</h5>
                <p className="card-text">Clínica Médica</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card team-card">
              <img src="./4.jpeg" className="card-img-top" alt="Dra. Sofía Machicado" />
              <div className="card-body">
                <h5 className="card-title">Dra. Sofía Machicado</h5>
                <p className="card-text">Especialista en Nutrición.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card team-card">
              <img src="./dx2.jpg" className="card-img-top" alt="Dr. Humberto Rojas" />
              <div className="card-body">
                <h5 className="card-title">Dr. Humberto Rojas</h5>
                <p className="card-text">Traumatología y Diagnóstico por Imágenes.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card team-card">
              <img src="./RV.jpg" className="card-img-top" alt="Dra. Ayelén Silva y Dr. Andrés Roca" />
              <div className="card-body">
                <h5 className="card-title">Dra. Ayelén Silva y Dr. Andrés Roca</h5>
                <p className="card-text">Cirugía General</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuienesSomos;


