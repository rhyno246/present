import util from 'util';
import db from '../../../../utils/db';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';

const query = util.promisify(db.query).bind(db);

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers : [
        Credentials({
            async authorize (credentials) {
                if(!credentials.email || !credentials.password){
                    return null
                }
                let user = await query(`SELECT * FROM customers WHERE email = '${credentials.email}'`);
                user = user[0];
                if (!user || user.password !== credentials.password) {
                    throw new Error ('no user found !')
                }
                if(user.password){
                    return user.password === credentials.password ? user : null;
                }
            }
        })
    ],
    secret: 'secret'
}
export default NextAuth(authOptions);