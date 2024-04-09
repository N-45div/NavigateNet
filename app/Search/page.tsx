'use client'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Icons } from '@/components/Icons'
import Checkbox from '@/components/check'
const SearchBAR = () => {
  return (
    <div className='mx-auto max-w-7xl px-12 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24'>
        <div className='h-full w-full flex flex-col items-center gap-5'>
              <Icons.Sparkles className='h-20 w-20' />

              <h1 className='tracking-tight text-4xl sm:text-6xl font-bold'>
                NavigateNet
              </h1>
              
              <p className='max-w-xl text-center text-lg text-slate-700'>
                A beautifully designed, hybrid search engine that enhances
                search accuracy by querying semantically related results.
              </p>

              <Checkbox/>

          <div className='mx-auto mt-16 w-full max-w-2xl flex flex-col'>
          <div className='relative w-full h-14 flex flex-col bg-white'>
          <div className='relative h-14 z-10 rounded-md'>
          
                    <Input className='absolute inset-0 h-full'/>
                    <Button className='absolute right-0 inset-y-0 h-full rounded-l-none'>
                      <Search className='h-6 w-6 text-slate-700 bg-transparent'/>
                    </Button>
          </div>
          
          </div>

          </div>
        </div>
    </div>
  )
}

export default SearchBAR