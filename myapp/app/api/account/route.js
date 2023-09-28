import db from "@/lib/db";
import { verifyJwtToken, verifyToken } from '@/lib/jwt'
import User from "@/models/User";

export async function GET(req){
    await db.connect()
    const accessToken = req.headers.get("authorization")
    const token = accessToken.split(' ')[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const user = await User.findById(userData.id);
        const { username, email, _id } = user;

        return new Response(JSON.stringify(user), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })

    }
}