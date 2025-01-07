'use client';

import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ProductWithRelations } from '@/@types/prisma'; 
import toast from 'react-hot-toast';
import { ProductForm } from '../product-form';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  useEffect(() => {
    console.log(router, product)
    router.push(`product/${product.id}`)
    console.log(router, product)
  }, [])
 

  return ( 
    <Dialog open={Boolean(product)} onOpenChange={(open) => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};