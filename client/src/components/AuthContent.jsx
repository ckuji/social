import {AuthContentLog} from "./AuthContentLog";
import {AuthContentReg} from "./AuthContentReg";

export const AuthContent = ({authCurrent}) => {
    if(authCurrent === 0) {
        return (
            <AuthContentLog />
        )
    } if(authCurrent === 1) {
        return (
            <AuthContentReg />
        )
    }

}