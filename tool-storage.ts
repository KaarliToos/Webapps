import { defaultFavorites, type ToolId } from "./tools";
const key=(name:string)=>`the-protocol:${name}`;
const date=()=>new Date().toLocaleDateString("en-CA");
export const getFavorites=():ToolId[]=>{try{return JSON.parse(localStorage.getItem(key("favorites"))||"null")||defaultFavorites}catch{return defaultFavorites}};
export const saveFavorites=(value:ToolId[])=>localStorage.setItem(key("favorites"),JSON.stringify(value.slice(0,5)));
export const getDay=<T,>(name:string,fallback:T):T=>{try{return JSON.parse(localStorage.getItem(key(`${name}:${date()}`))||"null")??fallback}catch{return fallback}};
export const saveDay=(name:string,value:unknown)=>localStorage.setItem(key(`${name}:${date()}`),JSON.stringify(value));
export const appendDay=(name:string,value:unknown)=>saveDay(name,[...getDay<unknown[]>(name,[]),value]);
