import { useState } from "react";
import { signIn } from 'next-auth/react';
export default function Form () {
    const [ isLogin , setIsLogin ] = useState(true);
    const [user , setUser]  =useState({
        email : '',
        password : '',
        phone : ''
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
            const result = await signIn("credentials", {
                redirect : true,
                email : user.email,
                password : user.password
            })
            if(!result?.error){
                alert('login success')
            }
        }else{
            const response = await fetch('/api/auth/register', {
                headers : {
                    'Content-Type': 'application/json',
                },
                method : 'POST',
                body : JSON.stringify(user),
            })
            return response;
        }
    } 
    return (
        <div className="login">
            <div className="container">
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form className="form mt-4 mb-5" onSubmit={submit}>
                    <input type="text"  className="form-control" name="email" placeholder="email" onChange={handleChangeInputData}/>
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