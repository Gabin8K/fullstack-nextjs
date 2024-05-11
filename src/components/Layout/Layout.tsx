'use client'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, useToast } from '../ui'
import { signOut, useSession } from 'next-auth/react'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import { useTheme } from '@/hooks'


export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const session = useSession()
  const { toast } = useToast()
  const { theme, setTheme } = useTheme()

  const onLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      toast({
        title: 'An error occurred'
      })
    }
  }

  const onChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <header className={'fixed z-[1] h-[80px] w-full bg-white dark:bg-black shadow-md dark:shadow-slate-900'}>
        <div className={'h-full container max-w-screen-lg flex items-center justify-between'}>
          <nav className="flex items-center gap-x-4">
            <h1 className={'font-extrabold text-xl text-slate-800 dark:text-slate-300'}>Discu&apos;s</h1>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div
                  className={'flex items-center rounded-md gap-x-2 transition-all hover:bg-slate-100 hover:dark:bg-slate-500 px-2 py-1'}
                >
                  <Image
                    fill
                    alt={'avatar'}
                    src={session.data?.user?.image || '/avatar.png'}
                    className={'!relative !w-6 !h-6 border-2 border-slate-400 dark:border-slate-100 rounded-full'}
                  />
                  Me
                </div>
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
                <DropdownMenuItem
                  onClick={onChangeTheme}
                >
                  {theme === 'dark' ? '🌙' : '☀️'}
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