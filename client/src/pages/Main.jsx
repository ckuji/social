import {Header} from "../components/Header";
import {Sidebar} from "../components/Sidebar";
import {Content} from "../components/Content";
import {useSelector} from "react-redux";

export const Main = () => {
    const {mainList, currentChoice, mainListLinks} = useSelector(({sidebarChange}) => sidebarChange)

    return (
        <div className="container">
            <Header/>
            <Sidebar
                mainList={mainList}
                currentChoice={currentChoice}
                mainListLinks={mainListLinks}
            />
            <Content/>
        </div>
    )
}