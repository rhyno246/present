import Form from "@/components/Form";
import { getSession } from "next-auth/react";
export default function Index () {
    return (
        <div className="login">
            <div className="container">
                <Form />
            </div>
        </div>
    )
}

export async function getServerSideProps (context) { 
    const session = await getSession({ req : context.req})
    if(session){
        return {
            redirect : {
                destination: '/',
                permanent: false,
            }
        }
    }
    return {
        props : { session }
    }
}