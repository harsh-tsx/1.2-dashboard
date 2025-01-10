import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { env } from '@/env.mjs';
import isEqual from 'lodash/isEqual';
import { pagesOptions } from './pages-options';
// import { PlantApi } from '@/api-client/PlantApi';

export const authOptions: NextAuthOptions = {
  // debug: true,
  pages: {
    ...pagesOptions,
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, token }: any) {
      console.log("session called")
      return {
        ...session,
        user: {
          ...token.user,
          // id: token.idToken as string,
        },
      };
    },
    async jwt({ token, user, session }) {
      if (user) {
        // return user as JWT
        token.user = user;
        if (!session) {
          session = {}
        }
        session.user = user;

      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      // const parsedUrl = new URL(url, baseUrl);
      // if (parsedUrl.searchParams.has('callbackUrl')) {
      //   return `${baseUrl}${parsedUrl.searchParams.get('callbackUrl')}`;
      // }
      // if (parsedUrl.origin === baseUrl) {
      //   return url;
      // }
      return baseUrl;
    },
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {},
      async authorize(credentials: any) {
        console.log("🚀 ~ authorize ~ credentials:", credentials)
        try {

          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid
          // const request = await PlantApi.PlantAdminAuthService.login({
          //   requestBody: {
          //     phone: credentials?.phone,
          //     password: credentials?.password,
          //   }
          // });
          // console.log("🚀 ~ authorize ~ request:", request);

          // if (!request.status) return false;
          // const user = {
          //   email: 'admin@admin.com',
          //   password: 'admin',
          // };

          // if (
          //   isEqual(user, {
          //     email: credentials?.email,
          //     password: credentials?.password,
          //   })
          // ) {
          //   return user as any;
          // }
          return credentials;
        } catch (error) {
          console.log("🚀 ~ authorize ~ error:", error)

        }
      },
    }),
    // GoogleProvider({
    //   clientId: env.GOOGLE_CLIENT_ID || '',
    //   clientSecret: env.GOOGLE_CLIENT_SECRET || '',
    //   allowDangerousEmailAccountLinking: true,
    // }),
  ],
};
