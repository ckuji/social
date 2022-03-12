import {User} from "./User"
import React from "react"
import {useHttp} from "../hooks/http.hook";
import {useDispatch, useSelector} from "react-redux";
import {setUsersData} from "../redux/actions/setUsers";

export const Users = () => {
    const {request} = useHttp()

    const dispatch = useDispatch()

    React.useEffect(async () => {
        try {
            const data = await request('/api/users')
            dispatch(setUsersData(data.users))
        } catch (e) {}

    }, [])

    const usersData = useSelector(({setUsers}) => setUsers)

    return (
        <div>
            {
                usersData.users.map((item, index) =>
                    <User
                        key={`${item}_${index}`}
                        name={item.name}
                        userId={item._id}
                    />
                )
            }
        </div>
    )
}