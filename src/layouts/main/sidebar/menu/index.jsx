import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { menuConsts } from "../../../../utils/menuConsts";
import Button from "../../../../components/button";
import More from "./more";
import PostButton from "./postButton";

const Menu = () => {
    return (
        <nav className="mt-0.5 mb-1">
            {menuConsts.map((menuItem, index) => (
                <NavLink
                    key={index}
                    to={menuItem.path}
                    className="py-1 block group"
                >
                    {({ isActive }) => (
                        <div
                            className={classNames(
                                "p-3  transition-colors rounded-full pr-6 inline-flex text-xl gap-5 items-center group-hover:bg-[#eff3f41a]"
                            )}
                        >
                            <div className="w-[26.25] h-[26.25] relative">
                                {menuItem?.notification && (
                                    <span className="w-[18px] h-[18px] rounded-full bg-[#1d9df0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                                        {menuItem?.notificationValue}
                                    </span>
                                )}
                                {isActive && menuItem.icon.active}
                                {!isActive && menuItem.icon.passive}
                            </div>
                            <div>{menuItem.title}</div>
                        </div>
                    )}
                </NavLink>
            ))}

            <More />

            <PostButton />
        </nav>
    );
};

export default Menu;
