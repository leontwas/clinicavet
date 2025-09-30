const listaDeClientes = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    email: "juanp@gmail.com",
    telefono: "123456789",
    password: "pass123",
  },
  {
    id: 2,
    nombre: "María",
    apellido: "González",
    email: "mariag@gmail.com",
    telefono: "987654321",
    password: "pass456",
  },
];

const listaDeMascotas = [
  {
    id: 1,
    nombre: "Firulais",
    especie: "Perro",
    raza: "Labrador",
    sexo: "macho",
    edad: 5,
    clienteId: 1,
  },
  {
    id: 2,
    nombre: "Michi",
    especie: "Gato",
    raza: "Siames",
    sexo: "hembra",
    edad: 3,
    clienteId: 1,
  },
  {
    id: 3,
    nombre: "Luna",
    especie: "Perro",
    raza: "Bulldog",
    sexo: "hembra",
    edad: 2,
    clienteId: 2,
  },
];

const listaDeServicios = [
  { id: 1, descripcion: "Consulta general", duracion: 30 },
  { id: 2, descripcion: "Vacunación", duracion: 20 },
  { id: 3, descripcion: "Limpieza dental", duracion: 45 },
  { id: 4, descripcion: "Baño", duracion: 60 },
];

// Lista de turnos reservados
const listaDeTurnos = [
  {
    id: 1,
    clienteId: 1,
    mascotaId: 1,
    servicioId: 2,
    fecha: "2025-10-05",
    hora: "10:00",
  },
  {
    id: 2,
    clienteId: 2,
    mascotaId: 3,
    servicioId: 1,
    fecha: "2025-10-06",
    hora: "15:00",
  },
];

const mascotasAdoptables = [
  {
    id: 1,
    nombre: "Pancho",
    especie: "Perro",
    sexo: "macho",
    edad: 5,
  },
  {
    id: 2,
    nombre: "Roman",
    especie: "Gato",
    sexo: "macho",
    edad: 5,
  },
  {
    id: 3,
    nombre: "Grey",
    especie: "gato",
    sexo: "hembra",
    edad: 2,
  },
];

const datosClientes = listaDeClientes.map(({ password, id, ...rest }) => rest);

console.log("\nClientes registrados:", datosClientes);
console.log("Mascotas adoptables:", mascotasAdoptables);

console.log("\nTurnos reservados con dueño y mascota:");
listaDeTurnos.forEach((turno) => {
  const cliente = listaDeClientes.find((c) => c.id === turno.clienteId);
  const mascota = listaDeMascotas.find((m) => m.id === turno.mascotaId);
  const servicio = listaDeServicios.find((s) => s.id === turno.servicioId);
  console.log(
    `Turno para el  ${turno.fecha} - ${turno.hora}, servicio:${servicio.descripcion}, Dueño: ${cliente.nombre} ${cliente.apellido}, Mascota: ${mascota.nombre}`
  );
});
