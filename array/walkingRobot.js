/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  var x = 0, y = 0, direction = 0;
  debugger;
  for (let i = 0; i < commands.length; i++) {
      if (commands[i] === -1 || commands[i] === -2) {
          direction = commands[i] === -1 ? direction + 90 : direction - 90;
          direction = direction === 360 ? 0 : direction;
          continue;
      }

      if (direction === 0) {
          y = moveRobot(commands[i], y, x, 1);
      } else if (direction === 90 || direction === -270) {
          x = moveRobot(commands[i], x, y, 1);
      } else if (direction === 180 || direction === -180) {
          y = moveRobot(commands[i], y, x, -1);
      } else if (direction === 270 || direction === -90) {
          x = moveRobot(commands[i], x, y, -1);
      }
  }


  function moveRobot(move, coord, station, byOne) {
      var obsFound = false;
      for (let j = 0; j < move; j++) {
          coord = coord + byOne;
          for (let k = 0; k < obstacles.length; k++) {
              if (JSON.stringify(obstacles[k]) === JSON.stringify([coord, station])) {
                  obsFound = true;
                  break;
              }
          }
          if (obsFound) {
              coord = coord - byOne;
              break;
          }
      }
      return coord;
  }


  function distanceCalc(x_coord, y_coord) {
      return x_coord ** 2 + y_coord ** 2
  }

  return distanceCalc(x, y);
};