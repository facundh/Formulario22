import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from '../context/Auth/AuthProvider';


const PrivateRoutes = ({redirect, component}) => {

    const navigate = useNavigate();
     
    const {user} = AuthConsumer();



    useEffect(() => {
        if(!user){
            navigate(redirect)
        }
    }, [user])

  return component;
}

export default PrivateRoutes