import {useState, useEffect} from "react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, Languages } from "lucide-react";
import i18next from "../i18n/i18n.js";
import {useTranslation} from "react-i18next";

export const Toolbar = () =>{
  const {t} = useTranslation();

  const [language, setLanguage] = useState(()=>{
    return navigator.language || navigator.languages[0];
  });
  const [theme, setTheme] = useState(()=>{
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      return "dark-theme";
    }
    return "light-theme";
  });

  useEffect(()=>{
    if(theme === "dark-theme"){
      document.querySelector("body").classList.remove("light-theme");
      document.querySelector("body").classList.add("dark-theme");
    }else{
      document.querySelector("body").classList.remove("dark-theme");
      document.querySelector("body").classList.add("light-theme");
    }
  }, [theme]);

  useEffect(()=>{
    if(language === "en"){
      i18next.changeLanguage("en");
    }else{
      i18next.changeLanguage("es");
    }
  },[language]);

  const changeTheme = ()=>{
    setTheme((prevTheme)=>{
      if(prevTheme === "dark-theme"){
        return "light-theme";
      }else{
        return "dark-theme";
      }
    });
  }

  return(
    <nav className={'flex mb-4 gap-4'}>
      <span className={'flex-grow'}></span>
      <Button onClick={()=>changeTheme()}
              variant={'outline'} className={'bg-primary-mine hover:bg-secondary-mine'}
              size={'icon'}
      >
        {
          theme === "dark-theme" ? (
            <Sun/>
          ) : (
            <Moon />
          )
        }
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'outline'} className={'bg-primary-mine hover:bg-secondary-mine'}
            size={'icon'}
          >
            <Languages/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent forceMount={true} className={'bg-primary-mine text-contrast-mine'}>
            <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
              <DropdownMenuRadioItem value="en">{t('english')}</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="es">{t('spanish')}</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </nav>
  )
}