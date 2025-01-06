import { jwtDecode } from "jwt-decode";

export const getLocalItem = (name) =>{
    if(name){
     return localStorage.getItem(name)
    }
    
    return '';
}

export const setLocalItem = (name,value) => {
    if(name){
        localStorage.setItem(name,value);
    }
}

export const clearLocalStorage = () => {
    localStorage.clear();
}

export const getTokenExpiry = (graceTime) => {
    const token = getLocalItem('token'); 
    if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return (decodedToken.exp - graceTime) < currentTime; 
    }
    return true;
};

export const formatDateString = (date) => {
    if (!date) {
      return '';
    }
  
    const newDate = new Date(date);
  
    if (isNaN(newDate.getTime())) {
      return 'Invalid Date';
    }
  
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();
  
    return `${day}-${month}-${year}`;
  };

 export const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
  