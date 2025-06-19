import { PageTitles } from "../constants";
export const showNotFoundPage = () => { 
    document.title = PageTitles.NOT_FOUND;

  const root = document.getElementById('app'); 

  root.innerHTML = '<h2>404 - Page Not Found</h2>'; 

} 