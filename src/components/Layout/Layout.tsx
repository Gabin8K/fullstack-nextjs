'use client'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, useToast } from '../ui'
import { signOut, useSession } from 'next-auth/react'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'


export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const session = useSession()
  const { toast } = useToast()

  const onLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      toast({
        title: 'An error occurred',
      })
    }
  }

  return (
    <>
      <header className={'fixed z-[1] h-[80px] w-full bg-white dark:bg-black shadow-md dark:shadow-slate-900'}>
        <div className={'h-full container max-w-screen-lg flex items-center justify-between'}>
          <nav className="flex items-center gap-x-4">
            <h1 className={'font-extrabold text-xl text-slate-800 dark:text-slate-300'}>Discu&apos;s</h1>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant={'ghost'}
                >
                  <Image
                    fill
                    alt={'avatar'}
                    src={session.data?.user?.image || '/avatar.png'}
                    className={'!relative !w-6 !h-6 mr-1 border-2 border-slate-400 dark:border-slate-100 rounded-full'}
                  />
                  Me
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  My Posts
                </DropdownMenuItem>
                <DropdownMenuItem>
                  My Comments
                </DropdownMenuItem>
                <DropdownMenuItem>
                  My Likes
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="flex items-center gap-x-4">
            <p className="">
              {session.data?.user?.name} (<b>{session.data?.user?.email}</b>)
            </p>
            <Button
              variant={'outline'}
            >
              New Post
            </Button>
            <Button
              variant={'outline'}
              onClick={onLogout}
            >
              Log out
            </Button>
          </div>
        </div>
      </header>
      <div className={'container max-w-screen-lg pt-[80px]'}>
        {children}
      </div>
    </>
  )
}