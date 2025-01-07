'use client'

import React, { useEffect, useRef } from 'react'
import { ProductCard, Title } from '.'
import { useIntersection } from 'react-use'
import { cn } from '@/shared/lib/utils'
import { useCategoryStore } from '@/shared/store/category'

interface Props {
  title: string
  items: any[]
  className?: string
  categoryId: number
  listClassName?: string
}

export const ProductsGroupList: React.FC<Props> = ({title, items, listClassName, categoryId, className}) => {
 
 const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4, 
  })
  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId)
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title])
  
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-5' /> 

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard key={product.id} id={product.id} price={product.items[0].price} name={product.name} imageUrl={product.imageUrl} /> 
          ))}
      </div>
    </div>
  )
}
