// Define el tipo de un paso, que incluye el estado de los jarros después del paso y la acción realizada
type Step = {
  jugX: number;
  jugY: number;
  action: string;
};

// Define el tipo de un estado, que es una tupla de dos números representando las cantidades de agua en los jarros
type State = [number, number];

// La función principal que resuelve el problema
function solveWaterJugChallenge(x: number, y: number, z: number): Step[] | "No solution" {
  // Si la cantidad de agua que queremos medir es mayor que la capacidad de ambos jarros, no hay solución
  if (z > x && z > y) {
    return "No solution";
  }

  // Inicializa la cola de BFS con el estado inicial, que es ambos jarros vacíos, y sin pasos realizados
  const queue: [State, Step[]][] = [[[0, 0], []]];
  // Inicializa el conjunto de estados visitados con el estado inicial
  const visited: { [key: string]: boolean } = { '0,0': true };

  // Mientras haya estados en la cola
  while (queue.length > 0) {
    // Toma el primer estado de la cola y los pasos para llegar a él
    const [[jugX, jugY], steps] = queue.shift()!;

    // Si este estado cumple con la meta, devuelve los pasos para llegar a él
    if (jugX === z || jugY === z ) {
      return steps;
    }

    // Genera todos los estados posibles a partir del estado actual
    const nextStates: [State, Step][] = [
      // Llena el jarro X desde la fuente
      [[x, jugY], { jugX: x, jugY, action: "Fill Jug X" }],
      // Llena el jarro Y desde la fuente
      [[jugX, y], { jugX, jugY: y, action: "Fill Jug Y" }],
      // Vacía el jarro X
      [[0, jugY], { jugX: 0, jugY, action: "Empty Jug X" }],
      // Vacía el jarro Y
      [[jugX, 0], { jugX, jugY: 0, action: "Empty Jug Y" }],
      // Transfiere agua del jarro X al jarro Y hasta que el jarro Y esté lleno o el jarro X esté vacío
      [[Math.max(0, jugX + jugY - y), Math.min(y, jugX + jugY)], { jugX: Math.max(0, jugX + jugY - y), jugY: Math.min(y, jugX + jugY), action: "Transfer from Jug X to Jug Y" }],
      // Transfiere agua del jarro Y al jarro X hasta que el jarro X esté lleno o el jarro Y esté vacío
      [[Math.min(x, jugX + jugY), Math.max(0, jugX + jugY - x)], { jugX: Math.min(x, jugX + jugY), jugY: Math.max(0, jugX + jugY - x), action: "Transfer from Jug Y to Jug X" }],
    ];

    // Para cada estado posible
    for (const [[nextJugX, nextJugY], step] of nextStates) {
      // Si no ha sido visitado antes
      if (!visited[`${nextJugX},${nextJugY}`]) {
        // Marca como visitado y agrega a la cola con los pasos para llegar a él
        visited[`${nextJugX},${nextJugY}`] = true;
        queue.push([[nextJugX, nextJugY], [...steps, step]]);
      }
    }
  }

  // Si se han visitado todos los estados posibles y ninguno cumple con la meta, no hay solución
  return "No solution";
}

// Exporta la función para que pueda ser utilizada en otros módulos
export default solveWaterJugChallenge;


// type Step = {
//     jugX: number;
//     jugY: number;
//     action: string;
//   };
  
//   function solveWaterJugChallenge(x: number, y: number, z: number): Step[] | "No solution" {
//     if (z > x && z > y) {
//       return "No solution";
//     }
  
//     const steps: Step[] = [];
//     let jugX = 0;
//     let jugY = 0;
  
//     while (jugX !== z && jugY !== z) {
//       if (jugX === 0) {
//         steps.push({ jugX: x, jugY, action: "Fill Jug X" });
//         jugX = x;
//       } else if (jugY === y) {
//         steps.push({ jugX, jugY: 0, action: "Empty Jug Y" });
//         jugY = 0;
//       } else {
//         const amount = Math.min(jugX, y - jugY);
//         steps.push({ jugX: jugX - amount, jugY: jugY + amount, action: "Transfer from Jug X to Jug Y" });
//         jugX -= amount;
//         jugY += amount;
//       }
//     }
  
//     return steps;
//   }
  
//   export default solveWaterJugChallenge;