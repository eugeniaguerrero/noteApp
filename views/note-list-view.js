(function(exports) {

  function ListView(List) {
    this.list = List;
  };

  ListView.prototype.htmlConverter = function() {
    var allNotes = '<ul>'
    for (i = 0; i < this.list.notes.length; i++){
      allNotes += "<li>" + this.list.notes[i].substr(0, 20) + "</li>";
    }
    return allNotes + "</ul>";
  };
  exports.ListView = ListView;
})(this);
