import { atom } from "jotai";
import Cookies from "js-cookie";

export const userAtom = atom(Cookies.get('user') ? JSON.parse(Cookies.get('user')) : "" );
export const JWT = atom(Cookies.get('token') ? Cookies.get('token') : "" );
export const Cart = atom(Cookies.get('cart') ? Cookies.get('cart') : JSON.stringify([]) ); 
export const isAdmin = atom(Cookies.get('isAdmin') ? Cookies.get('isAdmin') : "false");