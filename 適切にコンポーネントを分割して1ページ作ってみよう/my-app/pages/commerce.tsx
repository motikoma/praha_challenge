import { Header } from "@/components/organisms/Header";
import { ProductList } from "@/components/organisms/ProductList";

export default function Commerce() {
  const dummyData = [
    {
      name: "Product 1",
      price: 100,
      imagePath: "https://placehold.jp/2040x2040.png",
    },
    {
      name: "Product 2",
      price: 200,
      imagePath: "https://placehold.jp/2040x2040.png",
    },
    {
      name: "Product 3",
      price: 300,
      imagePath: "https://placehold.jp/2040x2040.png",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <ProductList data={dummyData} />
      </main>
    </>
  );
}
