function testSingleNote(){
  var noteModel = new Note();
  var singleNote = new SingleNote(noteModel);
  assert.isTrue(singleNote.NoteModel === noteModel);
}

function testSingleNoteHtmlConverter(){
  var singleNote = new SingleNote("Turtles are cool");
  assert.isTrue(singleNote.SingleNoteHtmlConverter() === "<div>Turtles are cool</div>")
}

testSingleNote();
testSingleNoteHtmlConverter();
