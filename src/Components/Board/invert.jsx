// import React, { useState, useEffect } from 'react';
// import { Button, Checkbox } from 'react-bootstrap';


// // pseudo map for logic (as one option, init grid could look different)

// const Grid = () => {
//   const [grid, setGrid] = useState(grid);
//   const [running, setRunning] = useState(false);

//   // Function to handle toggling of checkboxes
//   const handleToggleCheckbox = (row, col) => {
//     // Update the state of the corresponding cell in the grid
//   };

//   // Function to start/stop the simulation
//   const handleToggleSimulation = () => {
//     setRunning(!running);
//   };

//   // Function to simulate one step of the game
//   const simulateStep = () => {

//     // Checked box less than two becomes UNCHECKED (verify surrounding coordinates)
//         // -checked box touching 2-3 checked boxes stays the same 
//         // -checked box touching 4 becomes UNCHECKED
//         // -UNCHECKED box surrounded by three checked, becomes CHECKED
//   };

//   // Effect to run the simulation when 'running' state changes
//   useEffect(() => {
//     let intervalId;
//     if (running) {
//       intervalId = setInterval(() => {
//         simulateStep();
//       }, /* Set your desired simulation speed */);
//     } else {
//       clearInterval(intervalId);
//     }
//     return () => clearInterval(intervalId);
//   }, [running]);

//   return (
//     <div>
//       {/* Render checkboxes based on grid state */}
//       {grid.map((row, rowIndex) => (
//         <div key={rowIndex}>7nop 
//           {row.map((cell, colIndex) => (
//             <Checkbox
//               key={`${rowIndex}-${colIndex}`}
//               checked={cell}
//               onChange={() => handleToggleCheckbox(rowIndex, colIndex)}
//             />
//           ))}
//         </div>
//       ))}
//       {/* Button to start/stop simulation */}
//       <Button onClick={handleToggleSimulation}>
//         {running ? 'Stop' : 'Start'}
//       </Button>
//     </div>
//   );
// };

// export default Grid;