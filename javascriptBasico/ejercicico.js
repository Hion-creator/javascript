function solution(article) {
    // Tu código aquí 👈
    switch (article) {
        case "computadora":
            return"Con mi computadora puedo programar usando JavaScript";           
        
        case "celular":
            return "En mi celular puedo aprender usando la app de Platzi";            
        
        case "cable":
            return "¡Hay un cable en mi bota!";
    
        default:
            return "Artículo no encontrado";
            
    }
  }


console.log(solution("computadora"));
console.log(solution("celular"));
console.log(solution("cable"));
console.log(solution("cuchillo"));
