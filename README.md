# React + Vite

Proyecto Clínica Veterinaria / Adopción

Equipo 3
Leonardo Daniel Lipiejko
Edgar Montenegro
Alexis López

1. Descripción del Problema (El Dolor)
Actualmente, las clínicas veterinarias a menudo gestionan la información de sus pacientes (animales), dueños, y citas de manera manual o a través de sistemas no integrados. Esto provoca ineficiencias, errores y una atención al cliente deficiente. Los principales problemas son:

Gestión ineficiente de citas: Dificultad para agendar, reagendar o cancelar citas, lo que puede llevar a dobles reservas o a la pérdida de información.
Fichas de pacientes fragmentadas: La historia clínica de una mascota puede estar en diferentes lugares (papel, archivos de texto, hojas de cálculo), lo que dificulta el seguimiento de tratamientos, vacunas y diagnósticos.
Falta de comunicación: No hay un sistema unificado para enviar recordatorios de citas o alertas de vacunas a los dueños.
Ineficiencia en la facturación: El proceso de facturación y seguimiento de pagos es manual y propenso a errores.
Inventario desorganizado: Controlar el stock de medicamentos y suministros es complicado, lo que puede llevar a escasez o exceso de productos.

2. Actores Involucrados (Stakeholders)

Actores Primarios (Usuarios Directos del Software):

Veterinarios y asistentes veterinarios: Usan el sistema para gestionar historias clínicas, diagnósticos y tratamientos.
Personal de recepción / administrativo: Usan el sistema para agendar citas, gestionar clientes y facturar.
Gerente / propietario de la clínica: Usan el sistema para supervisar el negocio y acceder a reportes.

Actores Secundarios (Beneficiarios y Origen de los Datos):

Dueños de mascotas: Los clientes que se benefician de una gestión eficiente y que proveen la información inicial.
Mascotas (Los pacientes): Son el centro del sistema. La información sobre su salud, vacunas y tratamientos es el corazón del software.


Actores Terciarios (Posible Integración):

Proveedores de suministros: Podrían integrarse para automatizar la gestión de inventario. 

3. La Decisión Clave del Software
Pregunta principal:

¿Cómo centralizar y automatizar de manera eficiente la gestión de pacientes, dueños, citas, facturación e inventario en una clínica veterinaria, asegurando accesibilidad desde cualquier dispositivo y mejorando la calidad del servicio?

************************************************************************************************

Requerimientos para la instalación:

1) En la consola escribir:  npm create vite@latest
2) Asignarle un nombre a la carpeta del proyecto: name
3) Seleccionar React
4) Seleccionar JavaScript
5) Desplazarse a la carpeta creada con: cd name
6) Ejecutar: npm intall
7) Instalar dependencias: npm install firebase@^12.2.1 gh-pages@^6.3.0 react@^19.1.1 react-bootstrap@^2.10.10 react-dom@^19.1.1 react-icons@^5.5.0 react-router-dom@^7.9.1 react-spinners@^0.17.0 sweetalert2@^11.23.0 sweetalert2-react-content@^5.1.0
8) Ejecuta: npm run dev