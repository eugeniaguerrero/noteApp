(function(exports) {

  function List() {
    this.notes = [];
  };

  List.prototype.addNote = function(note) {
    this.notes.push(note);
  };

  List.prototype.printNote = function() {
    var allElements = '';
    for(var i = 0; i < this.notes.length; i++){
      allElements += this.notes[i] + '/b';
    }
    return allElements;
  };

  List.prototype.printSpecificNote = function(number) {
    return this.notes[number]
  };

  exports.List = List;
})(this);
