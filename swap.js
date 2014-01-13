macro swap {
  rule {
    ($x, $y)
  } => {
    var tmp = $x;
    $y = $x;
    $x = tmp;
  }
}

var foo = 100;
var bar = 200;
var tmp = 'my other temporary variable';

swap (foo, bar)
