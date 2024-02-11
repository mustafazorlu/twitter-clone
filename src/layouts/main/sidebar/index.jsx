import Logo from "./logo";
import Menu from "./menu";

const Sidebar = () => {
    return (
        <aside className="w-[275px] px-2 min-h-screen">
            <Logo />
            <Menu />
            Sidebar
        </aside>
    );
};

export default Sidebar;
