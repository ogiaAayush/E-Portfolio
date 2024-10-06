import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ModeService {

    private isDarkMode: BehaviorSubject<boolean>

    constructor (){
        this.isDarkMode = new BehaviorSubject<boolean>(true)

        this.checkLocalStorage().then((existingMode) =>{
            const isDark = existingMode === 'dark'|| (!existingMode && this.detectSystemTheme())
            this.setTheme(isDark ? 'dark' : 'light')
            this.isDarkMode.next(isDark)  
        }).catch(() =>{
            this.isDarkMode.next(false)  
        })       
    }

    isBrowser() {
        return typeof window != 'undefined' && typeof localStorage !== 'undefined'
    }

    checkLocalStorage(): Promise<any> {
        return new Promise<any> ((resolve, reject) =>{
            if(this.isBrowser()) {
                const existingMode = localStorage.getItem('theme')
                resolve(existingMode)
            }else {
                reject("localstorage unavailable")
            }
        })
    }

    setTheme(theme: string) {
        this.checkLocalStorage().then(() =>{
            document.documentElement.setAttribute('data-bs-theme', theme)
            localStorage.setItem('theme', theme)
        }).catch(()=> {
            console.log("No theme saved to localstorage yet")
        })
    }

    detectSystemTheme(): boolean {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    getMode(): Observable<boolean> {
        return this.isDarkMode.asObservable()
    }

    toggleTheme() {
        const newMode = !this.isDarkMode.getValue()
        this.isDarkMode.next(newMode)
        this.setTheme(newMode ? 'dark' : 'light')
    }
}
