function validateForm() {
    var fname = document.forms["register"]["fname"].value;
    if (fname == "") {
      alert("Name must be filled out");
      return false;
    }
  }