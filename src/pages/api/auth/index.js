import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";


export default async function handler (req, res) {
    const session = await getServerSession(authOptions);
    if (!session) {
        res.status(401).json({ message: "You must be logged in." });
        return;
    }
    return res.json({ authenticated: !!session })
}