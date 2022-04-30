type Point = {
  x: number;
  y: number;
};

function printCoord(points: Point) {
  console.log(`O eixo x é: ${points.x}`);
  console.log(`O eixo y é: ${points.y}`);
}

printCoord({ x: 101, y: 50 });
