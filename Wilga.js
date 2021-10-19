class Storage {
  constructor(keyName) {
    this.setKeyName(keyName);
  }

  setKeyName(keyName) {
    this.keyName = keyName;
  }

  setLocal(keyValue) {
    localStorage.setItem(this.keyName, JSON.stringify(keyValue));
  }

  getLocal() {
    return JSON.parse(localStorage.getItem(this.keyName));
  }

  synchronizeLocal() {
    this.setLocal(this.getSession());
  }

  setSession(keyValue) {
    sessionStorage.setItem(this.keyName, JSON.stringify(keyValue));
  }

  getSession() {
    return JSON.parse(sessionStorage.getItem(this.keyName));
  }

  synchronizeSession() {
    this.setSession(this.getLocal());
  }
}

class State {
  data = {
    "name": "",
    "properties": [],
    "end_properties": []
  };

  constructor(name="") {
    this.setName(name);
  }

  setName(name) {
    this.data["name"] = name;
  }

  addProperty(variable, value, delay=0) {
    var property = {
      "variable": variable,
      "value": value,
      "delay": delay
    };
    this.data["properties"].push(property);
  }

  addEndProperty(variable, value, delay=0) {
    var property = {
      "variable": variable,
      "value": value,
      "delay": delay
    };
    this.data["end_properties"].push(property);
  }

  getData() {
    return JSON.stringify(this.data);
  }

  setData(data) {
    this.data = JSON.parse(data);
  }

  show() {
    for (var i = 0; i < this.data["properties"].length; i++) {
      document.documentElement.style.setProperty(this.data["properties"][i]["variable"], this.data["properties"][i]["value"]);
    }
  }

  showEnd() {
    for (var i = 0; i < this.data["end_properties"].length; i++) {
      document.documentElement.style.setProperty(this.data["end_properties"][i]["variable"], this.data["end_properties"][i]["value"]);
    }
  }
}

class StateTransition {
  constructor() {

  }
}

class StateController {
  data = {
    "name": "",
    "states": [],
    "events": [],
    "buttons": []
  };

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    this.data["name"] = name;
  }

  addState(state) {
    this.data["states"].push(state);
  }

  addEvent(start, end, action, parameter) {
    var event = {
      "time": {
        "start": start,
        "end": end
      },
      "actions": [
        {
          "action": action,
          "parameter": parameter
        }
      ]
    };
    this.data["events"].push(event);
  }

  addButton(id) {
    var button = {
      "id": id
    };
    this.data["buttons"].push(button);
  }


  toogleState(parameter="next") {
    var storage = new Storage(this.data["name"]);
    var state = storage.getSession();

    this.showEnd();

    if (typeof(parameter)=="string") {
      if (parameter=="next") {
        state++;
      } else if (parameter=="previous") {
        state--;
      }

    } else if (typeof(parameter)=="number") {
      state = parameter;
    }

    if (state>this.data["states"].length-1) state=0;
    if (state<0) state=this.data["states"].length-1;

    storage.setSession(state);

    this.show();
  }

  toogleDefaultState() {}

  synchronizeState() {
    var storage = new Storage(this.data["name"]);
    storage.synchronizeSession();
    this.show();
  }

  synchronizeDefaultState() {
    var storage = new Storage(this.data["name"]);
    storage.synchronizeLocal();
  }

  show() {
    var storage = new Storage(this.data["name"]);
    var state = storage.getSession();

    this.data["states"][state].show();
  }

  showEnd() {
    var storage = new Storage(this.data["name"]);
    var state = storage.getSession();

    this.data["states"][state].showEnd();
  }

  run() {
    var storage = new Storage(this.data["name"]);
    if (storage.getLocal() == null) {
      storage.setLocal(0);
    }
    if (storage.getSession() == null) {
      this.synchronizeState();
    }
    this.show();
  }

  getData() {
    return JSON.stringify(this.data);
  }

  setData(data) {
    this.data = JSON.parse(data);
  }
}
