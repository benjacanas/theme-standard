const getDeviseTheme = () => {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    } else {
      return 'light'
    }
  } else {
    // cambiar si cambia el tema por defecto
    return 'light'
  }
}

export default getDeviseTheme
