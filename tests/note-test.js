  function testNote() {
    var list = new List();
    list.addNote("Elaine loves cats");
    list.addNote("Vivien loves turtles");
    assert.isTrue(list.notes.includes("Elaine loves cats"));
    assert.isTrue(list.notes.includes("Vivien loves turtles"));
  };

  function testPrintNote() {
    var list = new List();
    list.addNote("Hello");
    list.addNote("Goodbye");
    assert.isTrue(list.printNote() === ("Hello/bGoodbye/b"));
  };

  testNote();
  testPrintNote();
