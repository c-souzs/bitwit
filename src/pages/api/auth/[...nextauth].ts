import { compare } from 'bcrypt'
import client from 'graphql/client'
import { GetAuthorByEmailQuery } from 'graphql/generated/graphql'
import { GET_AUTHOR_BY_EMAIL } from 'graphql/queries'
import NextAuth, { NextAuthOptions, SessionStrategy } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: "Email and Password",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "caiosouza@gmail.com"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "••••••••"
                },
            },
            authorize: async (credentials) => {
                if(credentials && credentials.email && credentials.password){
                    const { author } = await client.request<GetAuthorByEmailQuery>(GET_AUTHOR_BY_EMAIL, { email: credentials.email })
                    
                    if(!author) throw new Error('User not register.')

                    const isValid = await compare(credentials.password, author.password)

                    if(!isValid) throw new Error('Password invalid.')

                    return {
                        id: author.id,
                        name: author.name,
                        email: author.email
                    } as any
                }
            },
        }),
    ],
    session: {
		strategy: "jwt" as SessionStrategy,
		maxAge: 3600,
	},
	jwt: {
		maxAge: 3600,
	},
    pages: {
        signIn: '/login',
        signOut: '/'
    }
} 

export default NextAuth(authOptions)