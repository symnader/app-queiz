class FormSetting {
  caption: string;
  displayType: DisplayType;
  styleInfoPanel: StylePanel;
  styleFieldPanel: StylePanel;
  styleHeaderPanel: StylePanel;
  styleDetailPanel: StylePanel;
  styleFooterPanel: StylePanel;
  styleSummeryPanel: StylePanel;
  styleFilterPanel: StylePanel;
  styleResultPanel: StylePanel;

  constructor(caption: string, displayType: DisplayType, styleInfoPanel: StylePanel = stylePnl.flat, styleFieldPanel: StylePanel = stylePnl.flat,
      styleHeaderPanel: StylePanel = stylePnl.flat, styleDetailPanel: StylePanel = stylePnl.flat, styleFooterPanel: StylePanel = stylePnl.flat,
      styleSummeryPanel: StylePanel = stylePnl.flat, styleFilterPanel: StylePanel = stylePnl.flat, styleResultPanel: StylePanel = stylePnl.flat ) {
      this.caption = caption;
      this.displayType = displayType;
      this.styleInfoPanel = styleInfoPanel;
      this.styleFieldPanel = styleFieldPanel;
      this.styleHeaderPanel = styleHeaderPanel;
      this.styleDetailPanel = styleDetailPanel;
      this.styleFooterPanel = styleFooterPanel;
      this.styleSummeryPanel = styleSummeryPanel;
      this.styleFilterPanel = styleFilterPanel;
      this.styleResultPanel = styleResultPanel;
  }
}
