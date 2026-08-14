export interface NavLink{
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Experience", href: "#experience"},
    {name: "Contact", href: "#contact"},
]

export default navLinks;