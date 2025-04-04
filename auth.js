import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginService } from "./service/login-service";
import { log } from "console";


export const { auth, signOut, signIn } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const res = await loginService({ email, password });
        log("res auth.js: ", res);
        
        return res;
      },
    }),
  ],
  callbacks:{
    async jwt(token){
     return token;   
    },
    async session(props) { 
        const { token } = props;
        const session = token.token.user;
        return session;
    }
  },
  strategy: "jwt",
  

});