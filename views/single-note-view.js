(function(exports){
  function SingleNote(NoteModel){
    this.NoteModel = NoteModel;
  }
  SingleNote.prototype.SingleNoteHtmlConverter = function(){
    var HtmlString = '<div>' + this.NoteModel.text + '</div>';
    return HtmlString;
  }
  exports.SingleNote = SingleNote;
})(this);

