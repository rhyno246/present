import util from 'util';
import db from '../../../../utils/db';

const query = util.promisify(db.query).bind(db);

export default async function handler (req ,res ) {
    const user = await req.body;
    try {
        const existUser = await query(`SELECT * FROM customers WHERE email = '${user.email}'`);
        if(existUser[0]?.email){
            res.status(409).json({
                success : false,
                message : "The account already exists or you have not filled in enough information !"
            });
        }
        const results = await query(`INSERT INTO customers (id , email, phone, password)
        VALUES (UUID(), '${user.email}', '${user.phone}', '${user.password}')`);
        if(results){
            res.status(200).json({ success : true , message : "Create user success" });
        }
    } catch (error) {
        console.log(error)
    }
}