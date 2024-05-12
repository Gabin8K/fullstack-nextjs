'use client'
import { Button, Input, Label, Textarea } from '@/components/ui'
import React from 'react'

type Props = {}

export default function Page({ }: Props) {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={'mt-4'}>
      <h1 className={'text-3xl font-extrabold text-slate-800 dark:text-slate-300'}>New Post</h1>
      <form
        className={'mt-4'}
        onSubmit={onSubmit}
      >
        <div className={'flex flex-col gap-y-4'}>
          <div className={'flex flex-col gap-y-2'}>
            <Label className={'text-slate-800 dark:text-slate-300'}>Title</Label>
            <Input
              type={'text'}
              className={'px-4 py-2 border border-slate-400 dark:border-slate-700 rounded-md'}
              placeholder={'Enter the title of your post'}
            />
          </div>
          <div className={'flex flex-col gap-y-2'}>
            <Label className={'text-slate-800 dark:text-slate-300'}>Content</Label>
            <Textarea
              className={'px-4 py-2 border border-slate-400 dark:border-slate-700 rounded-md'}
              placeholder={'Enter the content of your post'}
            />
          </div>
          <Button
            type={'submit'}
            disabled
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}