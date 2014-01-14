macro swap {
  rule {
    $x, $y
  } => {
    var tmp = $x;
    $y = $x;
    $x = tmp;
  }
}


var tmp ='tmp is not clobbered';
var foo = 100;
var bar = 200;

swap foo,bar
