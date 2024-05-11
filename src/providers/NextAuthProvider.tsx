import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FunctionComponent, PropsWithChildren, useEffect } from 'react'


const NextAuthProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session.data?.user) {
      router.push('/signin')
    }
  }, [session.data?.user])

  return (
    children
  )
}

export default NextAuthProvider