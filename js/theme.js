var lightTheme = new State("light_theme");
lightTheme.addProperty("--backgroundColor", "#ffffff");
lightTheme.addProperty("--textColor", "#000000");
lightTheme.addProperty("--elementsColor", "#ffffff");
lightTheme.addProperty("--iconsColorInvert", "0%");
lightTheme.addProperty("--toolsButtonColor", "#0B1448");

var darkTheme = new State("dark_theme");
darkTheme.addProperty("--backgroundColor", "#121212");
darkTheme.addProperty("--textColor", "#ffffff");
darkTheme.addProperty("--elementsColor", "#1f1f1f");
darkTheme.addProperty("--iconsColorInvert", "100%");
darkTheme.addProperty("--toolsButtonColor", "#3F51B5");

var themeController = new StateController("theme_controller");
themeController.addState(lightTheme);
themeController.addState(darkTheme);
themeController.run();
