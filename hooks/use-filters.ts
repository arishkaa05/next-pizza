import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'

interface PriceProps {
  priceFrom?: number
  priceTo?: number
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string
  sizes: string
  ingredients: string
}

export interface Filters {
  sizes: Set<string>
  pizzaTypes: Set<string>
  selectedIngredients: Set<string>
  prices: PriceProps
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void
  setPizzaTypes: (key: string) => void
  setSelectedIngredients: (key: string) => void
  setSizes: (key: string) => void 
}

export const useFilters = (): ReturnProps => {
  const router = useRouter()
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',')))

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : []))

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []))

  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  })

  const updatePrices = (name: keyof PriceProps, value: number) => {
    setPrices(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return { sizes, pizzaTypes, selectedIngredients, prices, setPrices: updatePrices, setPizzaTypes: togglePizzaTypes, setSizes: toggleSizes, setSelectedIngredients: toggleIngredients }
}