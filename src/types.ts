export interface ThemeColors {
    [key: string]: string;
  }
  
  export interface TokenColor {
    name?: string;
    scope: string | string[];
    settings: {
      foreground?: string;
      background?: string;
      fontStyle?: string;
    };
  }