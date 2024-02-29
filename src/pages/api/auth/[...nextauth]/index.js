import util from 'util';
import db from '../../../../utils/db';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';

const query = util.promisify(db.query).bind(db);

export const authOptions = {
    session : {
        jwt : true
    },
    providers : [
        Credentials({
            async authorize (credentials) {
                if(!credentials.email || !credentials.password){
                    return null
                }
                const user = await query(`SELECT * FROM customers WHERE email = '${credentials.email}'`);
                if (!user) {
                    throw new Error ('no user found !')
                }
                if(user.password){
                    return user.password === credentials.password ? user : null;
                }
            }
        })
    ]
}
export default NextAuth(authOptions);