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

  exports.NoteController = NoteController;
})(this);

// document.getElementById(1).innerHTML;
