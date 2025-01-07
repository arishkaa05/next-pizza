'use client'

import { useCategoryStore } from '@/shared/store/category';
import { cn } from '@/shared/lib/utils';
import { Category } from '@prisma/client';
import React from 'react'

interface Props {
  categories: Category[]
  className?: string;
}
 
const activeIndex = 0

export const Categories: React.FC<Props> = ({ categories, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        categories.map((category, index) => (
          <a className={cn('flex items-center font-bold h-11 rounded-2xl px-5', categoryActiveId === category.id && 'bg-white shadow-md shadow-gray-200 text-primary')} href={`/#${category.name}`} key={index}>
            <button>{category.name}</button>
          </a>
        ))
      }
    </div>
  )
}

 