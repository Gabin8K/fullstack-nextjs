'use client'
import { Button, useToast } from '@/components/ui';
import { signIn } from 'next-auth/react';

type Props = {}

export default function Page(props: Props) {
  const { toast } = useToast();

  const onSignIn = async () => {
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (error) {
      toast({
        title: 'An error occurred while signing in',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className={'flex items-center justify-center h-screen'}>
      <Button
        className={'button'}
        onClick={onSignIn}
      >
        Sign in with Google
      </Button>
    </div>
  )
}