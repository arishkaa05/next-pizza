'use client';

import React, { useState } from 'react'
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox'
import { Input, Skeleton } from '../ui'

type Item = FilterChecboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  name: string
  loading?: boolean,
  searchInputPlaceholder?: string
  onCLickCheckbox?: (id: string) => void
  selectedValues?: Set<string>
  defaultValue?: string[]
  className?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ title, items, defaultItems, limit = 5, searchInputPlaceholder = "Search...", className, loading, onCLickCheckbox, selectedValues }) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  if (loading) {
    return <div className={className}>
      <p className='font-bold mb-3'>{title}</p>
      {...Array(limit).fill(0).map((_, index) => <Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />)}
      <Skeleton className='h-6  w-28 mb-4 rounded-[8px]' />
    </div>
  }

  const list = showAll 
  ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) 
  : (defaultItems || items)?.slice(0, limit)

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (

    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      <div className='mb-5'>
        {
          showAll ?
            <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
            : ''
        }
      </div>

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar' >
        {list.map((item, index) => (
          <FilterCheckbox key={index} text={item.text} value={item.value} endAdornment={item.endAdornment} checked={selectedValues?.has(item.value)} onCheckedChange={() => onCLickCheckbox?.(item.value)} />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  )
}