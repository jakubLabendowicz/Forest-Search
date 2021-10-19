function addZero(variable) {
  if(variable<10) {
    return "0" + variable;
  }
  else {
    return variable;
  }
}

function setHistory(data) {
  var text = document.getElementById('searchText'+data).value;
  var search = document.getElementById('searchSelector'+data).value;

  const historyDate = new Date();
  var hours = historyDate.getHours();
  var minutes = historyDate.getMinutes();
  var secounds = historyDate.getSeconds();
  var days = historyDate.getDate();
  var month = historyDate.getMonth() + 1;
  var year = historyDate.getFullYear();

  hours = addZero(hours);
  minutes = addZero(minutes);
  secounds = addZero(secounds);
  days = addZero(days);
  month = addZero(month);

  var hour = hours + ":" + minutes + ":" + secounds;
  var date = days + "." + month + "." + year;

  var link = Search.getLink();

  var historyElement = {
    time: {
      hour: hour,
      date: date
    },
    text: text,
    search: search,
    link: link
  }

  if(localStorage.getItem("history") == null) {
    localStorage.setItem("history", "");
  }

  if(localStorage.getItem("searchCounter") == null) {
    localStorage.setItem("searchCounter", "");
  }

  if(text != "") {
    var preHistory = localStorage.getItem("history");

    if(preHistory == "") {
      localStorage.setItem("history", "[" + JSON.stringify(historyElement) + "]");
    }
    else {
      var cutPreHistory = preHistory.substring(0, preHistory.lastIndexOf("]"));
      localStorage.setItem("history", cutPreHistory + "," + JSON.stringify(historyElement) + "]");
    }

    var searchCounter = localStorage.getItem("searchCounter");

    if(searchCounter == "") {
      localStorage.setItem("searchCounter", 1);
    }
    else {
      localStorage.setItem("searchCounter", parseInt(searchCounter)+1)
    }
  }

  console.log(JSON.parse(localStorage.getItem("history")).reverse()[0]);
}





class Search {
  constructor(name = "", source = "") {
    this.name = name;
    this.source = source;
  }

  setName(name) {
    this.name = name;
  }
  setSource(source) {
    this.source = source;
  }
  getName() {
    return this.name;
  }
  getSource() {
    return this.source;
  }

  static text = "";
  static search = "";
  static link = "";

  static setText(text) {
    Search.text = text;
  }
  static setSearch(search) {
    Search.search = search;
  }

  static setLink(link = "") {
    if (link == "") {
      switch (Search.getSearch()) {
        case Google.getName():
        Search.link = Google.getSource() + Search.getText();
          break;
        case Youtube.getName():
        Search.link = Youtube.getSource() + Search.getText();
          break;
        case Facebook.getName():
        Search.link = Facebook.getSource() + Search.getText();
          break;
        case Netflix.getName():
        Search.link = Netflix.getSource() + Search.getText();
          break;
        case Wikipedia.getName():
        Search.link = Wikipedia.getSource() + Search.getText();
          break;
        case GTPlToEng.getName():
        Search.link = GTPlToEng.getSource() + Search.getText();
          break;
        case GTEngToPl.getName():
        Search.link = GTEngToPl.getSource() + Search.getText();
          break;
      }
    }
    else {
      Search.link = link;
    }
  }

  static getText() {
    return Search.text;
  }
  static getSearch() {
    return Search.search;
  }
  static getLink() {
    return Search.link;
  }

  static openLink() {
    window.open(Search.link, '_self');
  }

  static autoSearch(data="") {
    Search.setText(document.getElementById('searchText' + data).value);
    Search.setSearch(document.getElementById('searchSelector' + data).value);
    Search.setLink();
    Search.openLink();
    setHistory("");
  }
}

let Google = new Search("Google", "https://www.google.com/search?q=");
let Youtube = new Search("Youtube", "https://www.youtube.com/results?search_query=");
let Facebook = new Search("Facebook", "https://www.facebook.com/search/top/?q=");
let Netflix = new Search("Netflix", "https://www.netflix.com/search?q=");
let Wikipedia = new Search("Wikipedia", "https://pl.wikipedia.org/w/index.php?search=");
let GTPlToEng = new Search("Google Translator (PL -> ENG)", "https://translate.google.pl/?sl=pl&tl=en&text=")
let GTEngToPl = new Search("Google Translator (ENG -> PL)", "https://translate.google.pl/?sl=en&tl=pl&text=")

document.querySelector("#searchText").addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    Search.autoSearch();
  }
});

document.querySelector("#searchSelector").addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    Search.autoSearch();
  }
});

document.getElementById('searchText').focus()
