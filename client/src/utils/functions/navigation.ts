import { NavigateFunction } from "react-router";

export const redirect = (navigate: NavigateFunction, path: string) => {
    navigate(path);
}