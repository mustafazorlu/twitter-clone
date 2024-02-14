import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { menuConsts } from "../../../../utils/menuConsts";
import Button from "../../../../components/button";

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

            <button className="py-1 block group">
                <div className="p-3  transition-colors rounded-full pr-6 inline-flex text-xl gap-5 items-center group-hover:bg-[#eff3f41a]">
                    <div>
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width={26.25}
                            height={26.25}
                        >
                            <g>
                                <path
                                    fill="#fff"
                                    d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
                                ></path>
                            </g>
                        </svg>
                    </div>

                    <div>Daha fazla</div>
                </div>
            </button>

            <Button>Abone Ol</Button>
        </nav>
    );
};

export default Menu;
