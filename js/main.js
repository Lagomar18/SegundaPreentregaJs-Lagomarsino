let calificacionesPorEstudiante = {};

let nombreEstudiante;
let asignatura;
let calificacion;

const asignaturas = {
    1: "Matemática",
    2: "PDL",
    3: "Salud y Derecho",
    4: "Física"
};

do {
    nombreEstudiante = prompt("Ingresa el nombre del estudiante. Para terminar, escribe \"SALIR\".").trim().toLowerCase();

    if (nombreEstudiante !== "salir") {
        calificacionesPorEstudiante[nombreEstudiante] = {};

        do {
            asignatura = prompt(`Ingresa el número de la asignatura: 
            1: Matemática
            2: PDL
            3: Salud y Derecho
            4: Física
            Para terminar, escribe "SALIR".`).trim().toLowerCase();

            if (asignatura !== "salir") {
                asignatura = parseInt(asignatura);

                if (!isNaN(asignatura) && asignaturas[asignatura] !== undefined) {
                    calificacion = parseFloat(prompt(`Ingresa la calificación para la asignatura ${asignaturas[asignatura]}:`));

                    if (!isNaN(calificacion)) {
                        if (calificacionesPorEstudiante[nombreEstudiante][asignaturas[asignatura]]) {
                            calificacionesPorEstudiante[nombreEstudiante][asignaturas[asignatura]].push(calificacion);
                        } else {
                            calificacionesPorEstudiante[nombreEstudiante][asignaturas[asignatura]] = [calificacion];
                        }

                        let continuar = prompt("¿Deseas cargar otra nota para este estudiante? (Sí/No)").trim().toLowerCase();

                        if (continuar === "no") {
                            break; 
                        }
                    } else {
                        alert("Por favor, ingresa una calificación válida.");
                    }
                } else {
                    alert("Por favor, ingresa un número válido de asignatura.");
                }
            }
        } while (true); 

        let cargarOtroEstudiante = prompt("¿Deseas cargar otro estudiante? (Sí/No)").trim().toLowerCase();

        if (cargarOtroEstudiante === "no") {
            break; 
        }
    }
} while (nombreEstudiante !== "salir");

// Calcular promedios por asignatura y estudiante
let promediosPorEstudiante = {};
for (let estudiante in calificacionesPorEstudiante) {
    promediosPorEstudiante[estudiante] = {};
    let asignaturasEstudiante = calificacionesPorEstudiante[estudiante];
    for (let asignatura in asignaturasEstudiante) {
        let calificaciones = asignaturasEstudiante[asignatura];
        let total = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
        let promedio = total / calificaciones.length;
        promediosPorEstudiante[estudiante][asignatura] = parseFloat(promedio.toFixed(2));
    }
}

console.log("Calificaciones por estudiante: ", calificacionesPorEstudiante);
console.log("Promedios por estudiante y asignatura: ", promediosPorEstudiante);
