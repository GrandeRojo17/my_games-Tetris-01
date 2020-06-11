document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("grid");
  const width = 10;
  const height = 20;

  //The Tetrominoes
  const l_tetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1],
  ];
  const z_tetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
  ];
  const t_tetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];
  const o_tetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];
  const i_tetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  const tetrominoPieces = [
    l_tetromino,
    z_tetromino,
    o_tetromino,
    i_tetromino,
    t_tetromino,
  ];

  //randomly selct tetros from array
  let random = MAth.floor(Math.random() * theTetrominoes.length);
  let currentRotation = 0;
  let current = tetrominoPieces[random][currentRotation];


  //move the Tetrimino down every seconds.

  let currentPosition = 4;
  //End of game technically
});
