import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const { name, email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);
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
    type: "guest",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

export { handler as GET, handler as POST };
