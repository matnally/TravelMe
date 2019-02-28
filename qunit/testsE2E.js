

QUnit.module( "Travel" );
QUnit.test( "Simple travel", function(assert) {

  gameInit();
  gameStart();
  travel(0);

  assert.ok (JSONplayer[0].destination.length >= 1, "Travelled!");
});
