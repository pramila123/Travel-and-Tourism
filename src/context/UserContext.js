import { createContext } from "react";

const userContext=createContext("Ram");
const UserProvider=userContext.Provider;
const UserConsumer=userContext.Consumer;
export {UserProvider,UserConsumer}