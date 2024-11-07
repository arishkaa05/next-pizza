import { Categories, Container, TopBar, Title, FilterCheckbox, Filters, ProductCard, ProductsGroupList } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizza" size='lg' className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-10">
        <div className="flex gap-[80px]">

          {/**Filter */}
          <div className="w-[250px]">
            <Filters />
          </div>


          {/** Products List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Pizza" items={[
                { id: 1, name: 'pizza  1', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 2, name: 'pizza  2', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 3, name: 'pizza  3', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 4, name: 'pizza  4', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] }

              ]} categoryId={1} />
              <ProductsGroupList title="combo" items={[
                { id: 1, name: 'combo  1', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 2, name: 'combo  2', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 3, name: 'combo  3', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 4, name: 'combo  4', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] }

              ]} categoryId={2} />

              <ProductsGroupList title="snacks" items={[
                { id: 1, name: 'snacks  1', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 2, name: 'snacks  2', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 3, name: 'snacks  3', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 4, name: 'snacks  4', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] }

              ]} categoryId={3} />
              <ProductsGroupList title="cocktails" items={[
                { id: 1, name: 'cocktails  1', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 2, name: 'cocktails  2', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 3, name: 'cocktails  3', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] },
                { id: 4, name: 'cocktails  4', imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif', proce: 550, items: [{ price: 550 }] }

              ]} categoryId={4} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
