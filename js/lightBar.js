var lightBar = {
  "flashColor": "#ffcc33",
  "flashTime": "5s"
}

var inactiveLightBar = new State("inactive_LightBar");
inactiveLightBar.addProperty("--flashDisplay", "none");
inactiveLightBar.addProperty("--flashColor", "");
inactiveLightBar.addProperty("--flashTime", "");

var activeLightBar = new State("active_LightBar");
activeLightBar.addProperty("--flashDisplay", "block");
activeLightBar.addProperty("--flashColor", lightBar["flashColor"]);
activeLightBar.addProperty("--flashTime", lightBar["flashTime"]);

var lightBarController = new StateController("lightBar_controller");
lightBarController.addState(inactiveLightBar);
lightBarController.addState(activeLightBar);
lightBarController.setFirstState(1);
lightBarController.run();
