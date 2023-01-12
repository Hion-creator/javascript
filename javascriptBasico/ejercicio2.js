//ejercicio
function solution(estudiantes, deathCount, nuevo) {
    // Tu código aquí 👈    
    while (deathCount > 0) {        
        estudiantes.pop();
        deathCount = deathCount - 1;
        }
    estudiantes.push(nuevo);
    return estudiantes;          
}
    


console.log(solution(["Nico", "Zule"], 0, "Santi"));
console.log(solution(["Juan", "Juanita", "Daniela"], 1, "Julian"));
console.log(solution(["Nath", "Luisa", "Noru"], 2, "Cami"));