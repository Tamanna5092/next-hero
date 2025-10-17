import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
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
        } else if (email) {
          const currentUser = users.find(
            (user) => user.email === email && user.name === name
          );
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

const users = [
  {
    id: 1,
    name: "Julian Alvarez",
    email: "julianalvarez@gmail.com",
    password: "julian19",
  },
  {
    id: 2,
    name: "Enzo Fernandez",
    email: "enzofernandez@gmail.com",
    password: "enzofernandez",
  },
  {
    id: 3,
    name: "Pedri",
    email: "pedri8@gmail.com",
    password: "pedri8",
  },
];

export { handler as GET, handler as POST };
