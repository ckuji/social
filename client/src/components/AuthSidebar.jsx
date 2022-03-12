import React from "react"
import {useDispatch} from "react-redux"
import {setAuthUnit} from '../redux/actions/authChange'
import classNames from "classnames"
import {NavLink} from "react-router-dom";

export const AuthSidebar = ({authUnits, authCurrent}) => {
    const dispatch = useDispatch()

    return (
        <div className="authContainer-sidebar">
            <ul>
                {
                    authUnits.map((unit, index) =>
                        <li
                            key={`${unit}_${index}`}
                            className={classNames({
                                active: index === authCurrent
                            })}
                            onClick={() => dispatch(setAuthUnit(index))}
                        >
                            {unit}
                        </li>
                    )
                }

            </ul>
        </div>
    )
}