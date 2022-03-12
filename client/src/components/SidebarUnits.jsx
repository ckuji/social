import {NavLink} from "react-router-dom";


export const SidebarUnit = ({item, onClickItem, classNameActive, linkTo}) => {
    return (
        <NavLink
            to={linkTo}
            className={`container-sidebar__unit ${classNameActive}`}
            onClick={onClickItem}
        >
            {item}
        </NavLink>
    )
}