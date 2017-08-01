export const colors = first_name => {

  var initial = first_name.split('').shift();

  if (initial === 'A') {
    var color = 'aqua'
  } else if (initial === 'B') {
    var color = 'blue'
  } else if (initial === 'C') {
    var color = 'cyan'
  } else if (initial === 'D') {
    var color = 'dodgerblue'
  } else if (initial === 'E') {
    var color = 'seagreen'
  } else if (initial === 'F') {
    var color = 'fuchsia'
  } else if (initial === 'G') {
    var color = 'green'
  } else if (initial === 'H') {
    var color = 'hotpink'
  } else if (initial === 'I') {
    var color = 'indianred'
  } else if (initial === 'J') {
    var color = 'royalblue'
  } else if (initial === 'K') {
    var color = 'khaki'
  } else if (initial === 'L') {
    var color = 'limegreen'
  } else if (initial === 'M') {
    var color = 'midnightblue'
  } else if (initial === 'O') {
    var color = 'orange'
  } else if (initial === 'P') {
    var color = 'purple'
  } else if (initial === 'Q') {
    var color = 'turqoise'
  } else if (initial === 'R') {
    var color = 'red'
  } else if (initial === 'S') {
    var color = 'silver'
  } else if (initial === 'T') {
    var color = 'teal'
  } else if (initial === 'U') {
    var color = 'peru'
  } else if (initial === 'V') {
    var color = 'violet'
  } else if (initial === 'W') {
    var color = 'wheat'
  } else if (initial === 'X') {
    var color = 'dimgray'
  } else if (initial === 'Y') {
    var color = 'yellowgreen'
  } else if (initial === 'Z') {
    var color = 'black'
  }

  return color;
}
