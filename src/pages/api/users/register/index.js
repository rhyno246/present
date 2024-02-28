import util from 'util';
import db from '../../../../utils/db';

const query = util.promisify(db.query).bind(db);

export default async function handler (req ,res ) {
    const user = await req.body;
    try {
        const results = await query(`INSERT INTO customers (id , email, phone, password)
        VALUES (UUID(), '${user.email}', '${user.phone}', '${user.password}')`)
        if (results) {
            res.status(200).json(user);
        }
       
    } catch (error) {
        console.log(error)
    }
}