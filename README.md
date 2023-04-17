![image](/public/guestbook.png)

## Introduction

[Guestbook by Lih](https://guestbookbylih.vercel.app/) is a web app that allows you to leave a message for the owner of the website. You can also view all the messages that have been left by other users.

## Usage

In order to leave a message, you must sign in with Google. Once you've signed in, you can leave a message and view all the messages that have been left by other users.

## Purpose

I wanted to build a fullstack web app with Typescript, Google Auth, and a database. With my SQL knowledge, I decided to use Prisma and Planetscale to query and store data. While Prisma allowed me to perform CRUD operations to the database, I've also implemented a DELETE option only if the user signed in is me.

## Lessons Learned

I learned how to use NextAuthjs with Prisma to allow users to sign in with Google and leave a message. I was also able to store each user and their messages on Planetscale and render them.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [Planetscale](https://planetscale.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
