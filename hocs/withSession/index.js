import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { fetchSelf } from "../../store/reducers/user/operations/fetchSelf";

const withSession = Component => (props)=>{
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(()=>{
        const id = localStorage.getItem('id');
        if(!id){
            router.push('login')
        }else {
            dispatch(fetchSelf(id))
        }
    },[])
    return (
        <Component {...props}/>
    )
}

export default withSession
