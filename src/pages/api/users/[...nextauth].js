import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers";


export default NextAuth({
    providers : [
        CredentialsProvider({
            async authorize (credentials) {
                
            }
        })
    ]
});