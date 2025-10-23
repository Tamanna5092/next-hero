import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        name: {
          label: "Name",
          type: "text",
          required: true,
          placeholder: "Your name",
        },
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "email@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "******",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const db = await connectDB()
          const currentUser = await db.collection('users').findOne({email})
          console.log(currentUser)
          // const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              return { ...currentUser };
            }
          }
        } else {
          return null;
        }
      },
    }),
     GoogleProvider({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
  }),
  GitHubProvider({
    clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
  })
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type
      return session;
    },
  },

};

const handler = NextAuth(authOptions);

const users = [
  {
    id: 1,
    name: "Julian Alvarez",
    email: "julianalvarez@gmail.com",
    password: "julian19",
    type: "admin",
    image: "https://i.ibb.co.com/mrKD35xc/alvarez.jpg",
  },
  {
    id: 2,
    name: "Enzo Fernandez",
    email: "enzofernandez@gmail.com",
    password: "enzofernandez",
    type: "guest",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Pedri",
    email: "pedri8@gmail.com",
    password: "pedri8",
    type: "host",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

export { handler as GET, handler as POST };
