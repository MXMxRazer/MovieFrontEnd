import { useNavigate } from "react-router-dom";

export default function Navigator(href: string) {

    const navigationHandler = useNavigate();

    console.log(`here`, href);
    navigationHandler(href);
}