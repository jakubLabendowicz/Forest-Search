var closePanel = new State("close_panel");
closePanel.addProperty("--panelWidth", "0px");
closePanel.addProperty("--panelAnimation", "");
closePanel.addProperty("--noneInSmallPanel-Flex", "flex");
closePanel.addProperty("--noneInSmallPanel-Block", "block");
closePanel.addProperty("--boardMarginLeft", "0px");
closePanel.addProperty("--boardDisplay", "flex");

var smallPanel = new State("small_panel");
smallPanel.addProperty("--panelWidth", "120px");
// smallPanel.addProperty("--panelAnimation", "medium_panelWidthAnimation 1s");
smallPanel.addProperty("--noneInSmallPanel-Flex", "none");
smallPanel.addProperty("--noneInSmallPanel-Block", "none");
smallPanel.addProperty("--boardMarginLeft", "120px");
smallPanel.addProperty("--boardDisplay", "flex");

var mediumPanel = new State("medium_panel");
mediumPanel.addProperty("--panelWidth", "440px");
// mediumPanel.addProperty("--panelAnimation", "medium_panelWidthAnimation 1s");
mediumPanel.addProperty("--noneInSmallPanel-Flex", "flex");
mediumPanel.addProperty("--noneInSmallPanel-Block", "block");
mediumPanel.addProperty("--boardMarginLeft", "440px");
mediumPanel.addProperty("--boardDisplay", "flex");

var largePanel = new State("large_panel");
largePanel.addProperty("--panelWidth", "100vw");
// largePanel.addProperty("--panelAnimation", "large_panelWidthAnimation 1s");
largePanel.addProperty("--noneInSmallPanel-Flex", "flex");
largePanel.addProperty("--noneInSmallPanel-Block", "block");
largePanel.addProperty("--boardMarginLeft", "100vw");
largePanel.addProperty("--boardDisplay", "none");

var panelController = new StateController("panel_controller");
// panelController.addState(closePanel);
panelController.addState(smallPanel);
panelController.addState(mediumPanel);
panelController.addState(largePanel);
panelController.setFirstState(1);
panelController.run();
