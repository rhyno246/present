import { useState } from "react";
import { SignUp } from "../api/users/login";

export default function Index () {

    const [ isLogin , setIsLogin ] = useState(true);
    const [user , setUser]  =useState({
        first_name: "",
        last_name: "",
        email : '',
        password : '',
        phone : '',
        showpass : ''
    })

    const handleChangeInputData = (event) => {
        setUser({
          ...user,
          [event.target.name]: event.target.value,
        });
      };

    const switchAuthModeHandler = () =>  {
        setIsLogin((prevState) => !prevState);
    } 
    
    const submit = async event => {
        event.preventDefault();
        if(isLogin){
            
        }else{
            try {
                const result = await SignUp(user);
                console.log(result)
            } catch (error) {
                console.log(error)
            }
        }
    } 
    return (
        <div className="login">
            <div className="container">
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form className="form mt-4 mb-5" onSubmit={submit}>
                    <input type="text"  className="form-control" name="email" placeholder="email" onChange={handleChangeInputData}/>
                    <input name="showpass" onChange={handleChangeInputData} hidden />
                    { !isLogin && <input type="number"  className="form-control mt-4" placeholder="phone" name="phone" onChange={handleChangeInputData}/> }
                    <input type="password" className="form-control mt-4" name="password" placeholder="password" onChange={handleChangeInputData}/>
                    <button className="btn btn-success mt-4 d-block w-100">{isLogin ? 'Login' : 'Create Account'}</button>

                    <a
                        className="mt-3 d-block"
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </a>
                </form>
            </div>
        </div>
    )
}