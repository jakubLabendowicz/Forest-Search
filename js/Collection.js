class CollectionsController {
  data = {
    "name": "",
    "elements": []
  }
  constructor() {

  }

  setName(name) {
    this.data["name"] = name;
  }

  addElement(variable, value, delay=0) {
    var property = {
      "variable": variable,
      "value": value,
      "delay": delay
    };
    this.data["elements"].push(property);
  }
}
