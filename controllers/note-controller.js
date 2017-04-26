(function(exports){
  function NoteController(list){
    this.listView = new ListView(list);
  }
  NoteController.prototype.sendToIndex = function() {
    document.getElementById('app').innerHTML = this.listView.htmlConverter();
  };

  NoteController.prototype.loadSingleNote = function(note) {
    var singleNoteView = new SingleNote(note);
    document.getElementById('singleView').innerHTML = singleNoteView.SingleNoteHtmlConverter();
  };
  NoteController.prototype.submitNote = function() {
    document.getElementById('submit').addEventListener('click', function(event){
      event.preventDefault();
      console.log(event);
    });
  };
  exports.NoteController = NoteController;
})(this);
