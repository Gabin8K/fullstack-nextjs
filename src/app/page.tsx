'use client'

import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session)
  const onClick = async () => {
    try {
      const response = await signIn('google', { redirect: false });
      console.log({ response })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={'flex items-center justify-center h-screen'}>
      {session.data?.user ?
        <>Hello,{' '}<b>{session.data.user.name}</b></> :
        <button onClick={onClick} className="border p-4 rounded-md">Login</button>
      }
    </main>
  );
}
