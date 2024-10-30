class Theme{
  key = 'color-theme';
  constructor(){
    theme = localStorage.getItem(key);
    if(theme)
      document.documentElement.setAttribute(key, theme);
    else if(window.matchMedia("(prefers-color-scheme: dark)").matches)
      document.documentElement.setAttribute(key, 'dark');
  }

  switcher(theme){
    document.documentElement.setAttribute(key, theme);
    localStorage.setItem(key, theme);
  }

  setDefault(){
    localStorage.removeItem(key);
    if(window.matchMedia("(prefers-color-scheme: dark)").matches)
      document.documentElement.setAttribute(key, 'dark');
    else
      document.documentElement.removeAttribute(key);
  }
}

const $theme = new Theme();