function leavesCounter() {
  var storage = new Storage("searchCounter");
  var leaves = storage.getLocal();
  document.getElementById('leaves_counter').innerHTML = leaves;
  setTimeout("leavesCounter()", 10000);
}

leavesCounter();
