import { CREATORS } from "../constants/creators";

export const findCreator = (username: string) => {
    const creator = CREATORS.find(user => user.username.toLowerCase() === username.toLowerCase());
    return creator;
} 