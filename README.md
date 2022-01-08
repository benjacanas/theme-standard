<h1 align="center">
  Implementacion de tema oscuro
</h1>

## Iniciar el proyecto:

    ```shell
    npm install
    npm run develop
    ```

## Elementos

1.  **Crear el contexto para los temas:**
    El codigo completo se encuentra en [/src/context/themeContext.js](https://github.com/benjacanas/theme-standard/blob/master/src/context/themeContext.js)

    Para comenzar, se crea el contexto con un estado incial `null`.

    ```javascript
    import { createContext } from 'react'

    const ThemeContext = createContext(null)
    ```

    Despues se crea un theme provider para poder envolver la aplicacion en
    el contexto y asi poder usar los valores/funciones dentro del contexto.

    Dentro de este componente se usa:

    1. Un tema por defecto (dark o light).
    2. Un estado para controlar el tema actual y rerenderizar cuando se
    cambia el estado.
    3. En este useEffect sin dependencias se determina el tema a partir
    del local storage y la confguracion del dispositivo. Si no dependes
    de la posivilidad de cambiar el tema de forma manual recomiendo quitar
    el local storage. Se puede cambiar el orden el que se priorizan los
    datos en el setTheme, en este caso el mas importante es el tema del
    local Storage, seguido por el tema del dispositivo y por ultimo el tema
    por defecto.
    4. Guarda el tema en el local storage cada vez que el estado cambia.
    5. Una funcion para cambiar el tema, parecida a setTheme, pero cambia
    el tema de estado, de light => dark y de dark => light.
    6. El return del tema funciona como wrapper para la aplicacion en el layout o algun componente pare por encima de donde se usen las
    variables. 
    7. Dentro del wrapper se consume el tema seleccionado en los temas
    del objeto themes, que contiene las variables de css que se usen para
    ambos temas. Dentro del provider, se pasan los valores/funciones que
    deberian ser accesibles desde cualquier elemento por debajo de este.

    ```javascript
    import React, { useState, useEffect } from 'react'

    const ThemeProvider = ({ children }) => {
    // 1
    // default theme: light
    const DEFAULT_THEME = 'light'
    // 2
    const [theme, setTheme] = useState(DEFAULT_THEME)
    // 3
    useEffect(() => {
      const localTheme = localStorage.getItem('theme')
      const deviseTheme = getDeviseTheme()
      // local storage > devise theme
      setTheme(localTheme || deviseTheme || DEFAULT_THEME)
    }, [])
    // 4
    useEffect(() => {
      localStorage.setItem('theme', theme)
    }, [theme])
    // 5
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    // 6
    return (
      <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
        // 7
        <div style={themes[theme]}>{children}</div>
      </ThemeContext.Provider>
      )
    }
    ```
    El objeto themes contiene dos keys, para ambos temas, y sus varaibles
    correspondientes:

    ```javascript
    const themes = {
      light: {
        '--title': '#007bff',
        '--footer-container': '#182C49',
        
        '--primary': '#4a4949',
        '--primary-variant': '#4a4949',
        '--primary-button': '#666666',
        '--primary-container': '#ffffff',

        '--secondary': '#4a4949',
        '--secondary-variant': '#00a4eb',
        '--secondary-button': '#00a4eb',
        '--secondary-container': '#f2f2f2'
      },
      dark: {
        '--title': '#ffffff',
        '--footer-container': '#ffffff29',

        '--primary': '#FFFFFF',
        '--primary-variant': '#A1A1A1',
        '--primary-button': '#FFFFFF',
        '--primary-container': '#121212',

        '--secondary': '#FFFFFF',
        '--secondary-variant': '#A1A1A1',
        '--secondary-button': '#FFFFFF',
        '--secondary-container': '#252525'
      }
    }
    ```

    Por ultimo, para facilitar el acceso a los valores se crea un hook
    personalizado:

    ```javascript
      export const useTheme = () => useContext(ThemeContext)
    ```

   

2.  **Uso dentro del componente**

    El hook personalizado que se creo con el contexto se tiene que usar
    dentro de un componente que este por debajo del wrapper del contexto
    `<ThemeProvider> <TuApp/> </ThemeProvider>`.

    Dentro del hook, te trae:
    1. theme: valor del tema actualmente seleccionado.
    2. setTheme: funcion que acepta un tema (dark-light).
    3. toggleTheme: funcion para cambiar el tema al opuesto.

    ```javascript
      const { theme, setTheme, toggleTheme } = useTheme()
    ```
    Ejemplos de uso
    ```javascript
      // theme
      <img src={theme === 'light' ? logoLight : logoDark} alt="logo" />
      // setTheme
      <button onClick={() => setTheme('dark')}>
        Cambiar a modo oscuro
      </button>
      // toggleTheme
      <input onClick={toggleTheme}  />
    ```

3.  **Utilidades**

    Dentro de la carpeta de utilidades se hay:

    1. getDeviseTheme:
    
    Cuando se ejecuta devuelve el tema del dispositivo en formato de texto.

    ```javascript
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
    ```
    
4.  **Variables en :root**

    En el caso de que se necesiten las variables de css en el :root de la app,
    se puede usar la rama [root-css-variables-/-helmet](https://github.com/benjacanas/theme-standard/tree/root-css-variables-/-helmet) que usar react-helmet para eso, en vez de inyectar las variables en un `<div />`
