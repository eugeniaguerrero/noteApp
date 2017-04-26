    var list = new List();
    list.addNote("Favourite drink: seltzer");
    list.addNote("Cucumber");
    var controller = new NoteController(list);
    controller.sendToIndex();
    makeUrlShowNoteIdForCurrentPage();

    function makeUrlShowNoteIdForCurrentPage() {
      window.addEventListener("hashchange", showNoteForCurrentPage);
    };

    function showNoteForCurrentPage() {
      controller.loadSingleNote(list.printSpecificNote(getNoteFromUrl(window.location)));
    };

    function getNoteFromUrl(location) {
      return location.hash.split("#notes/")[1];
    };

    // function showNote(note) {
    //   document
    //     .getElementById('app')
    //     .innerHTML = note
    // };

    // showContentForSingleNote();
    //
    // function showContentForSingleNote() {
    //   window.addEventListener("hashchange", controller.loadSingleNote())
    // };
    //
    // controller.loadSingleNote(getNoteFromUrl(window.location))
