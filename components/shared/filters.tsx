import React from 'react'
import { Title } from './title'
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider } from '.'
import { Input } from '../ui'

interface Props {
  className?: string
}
export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text="Can be collected" value='1' />
        <FilterCheckbox text="New items" value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold nb-3'>Price from and to </p>
        <div className='flex mb-5 gap-3'>
          <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0} />
          <Input type="number" placeholder="30000" value={500} min={100} max={30000} />
        </div>  
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup title="Ingredients" className='nt-5' limit={6}
        defaultItems={[
          { text: 'Яблоко', value: 'apple' },
          { text: 'Банан', value: 'banana' },
          { text: 'Груша', value: 'pear' },
          { text: 'Апельсин', value: 'orange' },
          { text: 'Виноград', value: 'grape' },
          { text: 'Банан', value: 'banana' },
          { text: 'Груша', value: 'pear' },
          { text: 'Апельсин', value: 'orange' },
          { text: 'Виноград', value: 'grape' },
          { text: 'Банан', value: 'banana' },
          { text: 'Груша', value: 'pear' },
          { text: 'Апельсин', value: 'orange' },
          { text: 'Виноград', value: 'grape' }
        ]} items={[
          { text: 'Яблоко', value: 'apple' },
          { text: 'Банан', value: 'banana' },
          { text: 'Груша', value: 'pear' },
          { text: 'Апельсин', value: 'orange' },
          { text: 'Виноград', value: 'grape' },
          { text: 'Банан', value: 'banana' },
          { text: 'Груша', value: 'pear' },
          { text: 'Апельсин', value: 'orange' },
          { text: 'Виноград', value: 'grape' },
          { text: 'Банан', value: 'banana' },
          { text: 'Груша', value: 'pear' },
          { text: 'Апельсин', value: 'orange' },
          { text: 'Виноград', value: 'grape' }
        ]} />
    </div>
  )
}
