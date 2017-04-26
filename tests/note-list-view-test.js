function listViewTest() {
  var list = new List();
  list.addNote("Euge");
  var listView = new ListView(list);
  assert.isTrue(listView.htmlConverter() === '<ul><li>Euge</li></ul>')
};
function truncatedListViewTest(){
  var list = new List();
  list.addNote("The three stood listening to a fresh access; Of wind that caught against the house a moment");
  var listView = new ListView(list);
  assert.isTrue(listView.htmlConverter() === '<ul><li>The three stood list</li></ul>')
  };

listViewTest();
truncatedListViewTest();
