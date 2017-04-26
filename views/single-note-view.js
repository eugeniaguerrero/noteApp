(function(exports){
  function SingleNote(NoteModel){
    this.NoteModel = NoteModel;
  }
  SingleNote.prototype.SingleNoteHtmlConverter = function(){
    var HtmlString = "<div>" + this.NoteModel + '</div>';
    return HtmlString;
  }
  exports.SingleNote = SingleNote;
})(this);
