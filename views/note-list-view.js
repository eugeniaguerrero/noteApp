(function(exports) {

  function ListView(List) {
    this.list = List;
  };

  ListView.prototype.htmlConverter = function() {
    var allNotes = '<ul>'
    for (i = 0; i < this.list.notes.length; i++){
      allNotes += "<li><a id=" + 'notes/' + [i] + " href='#notes/"+ [i] + "'" + ">" + this.list.notes[i].substr(0, 20) + "</a></li>";
    }
    return allNotes + "</ul>";
  };
  ListView.prototype.showSingleView = function(index) {
    return this.list.notes[index]
  };
  exports.ListView = ListView;
})(this);
