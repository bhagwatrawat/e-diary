import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      
        async authorize(credentials, req) {

        const user = { email: credentials.email };
        const res = await axios.post('http://localhost:3000/api/signin',user)


      if (res.data) {
        return res.data;
      } else {
        return null
      }
    }
    }),
  ],
  secret: "secret",
  session: {
    strategy: 'jwt'
  },
 
}

export default NextAuth(authOptions);
