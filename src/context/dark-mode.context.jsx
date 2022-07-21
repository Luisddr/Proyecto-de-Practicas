import React, {createContext, useState} from 'react';
import { useEffect } from 'react';


export const themes = {
    dark: "dark-content",
    light:""
}

export const DarkModeContext = createContext({
    theme: themes.light,

    changeTheme: ()=>{}
})

export const DarkModeProvider = ({children}) =>{

    const [theme, setTheme] = useState(themes.light);

    function changeTheme(theme){
        setTheme(theme)
    }

    useEffect(()=>{
        switch(theme){
            case themes.dark:
                document.body.classList.add('dark-content');
                break;
            
            case themes.light:
                default:
                    document.body.classList.remove('dark-content')
                break;
                
        }

    },[theme, themes])


    


    return <DarkModeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>{children}</DarkModeContext.Provider>

}