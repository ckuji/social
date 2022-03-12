import {SidebarUnit} from "./SidebarUnits"
import {useDispatch, useSelector} from "react-redux"
import {sidebarChangeAction} from "../redux/actions/sidebarChange"
import classNames from "classnames";

export const Sidebar = ({mainList, currentChoice, mainListLinks}) => {

    const dispatch = useDispatch()

    return (
        <div className="container-sidebar">
            {
                mainList.map((item, index) =>
                    <SidebarUnit
                        item={item}
                        key={`${item}_${index}`}
                        onClickItem={() => dispatch(sidebarChangeAction(item))}
                        classNameActive={classNames({
                            active: item === currentChoice
                        })}
                        linkTo={mainListLinks[index]}
                    />
                )
            }
        </div>
    )
}