import { Container, TopBar, Title, Filters, ProductsGroupList } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function Dashboard() { 

  return (
    <>
      <Container className="mt-10">
        <Title text="Dashboard" size='lg' className="font-extrabold" />
      </Container> 
    </>
  );
}
