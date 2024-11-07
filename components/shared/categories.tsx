'use client'

import { useCategoryStore } from '@/app/store/category';
import { cn } from '@/lib/utils';
import React from 'react'

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: 'pizza' },
  { id: 2, name: 'combo' },
  { id: 3, name: 'snacks' },
  { id: 4, name: 'cocktails' },
  { id: 5, name: 'coffee' },
  { id: 6, name: 'drinks' },
  { id: 7, name: 'desserts' },
]
const activeIndex = 0

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        cats.map((cat, index) => (
          <a className={cn('flex items-center font-bold h-11 rounded-2xl px-5', categoryActiveId === cat.id && 'bg-white shadow-md shadow-gray-200 text-primary')} href={`/#${cat.name}`} key={index}>
            <button>{cat.name}</button>
          </a>
        ))
      }
    </div>
  )
}

 