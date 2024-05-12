import { useSession } from 'next-auth/react';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { FunctionComponent, PropsWithChildren, useEffect } from 'react'


const NextAuthProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  const segment = useSelectedLayoutSegment();

  useEffect(() => {
    if (!session.data?.user && segment === '(app)') {
      router.push('/signin')
    }
  }, [session.data?.user])

  return (
    children
  )
}

export default NextAuthProvider