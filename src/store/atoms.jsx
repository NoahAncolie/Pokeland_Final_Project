import { atom } from "jotai";
import Cookies from "js-cookie";

export const userAtom = atom(Cookies.get('user') ? Cookies.get('user') : "" );
export const JWT = atom(Cookies.get('token') ? Cookies.get('token') : "" );