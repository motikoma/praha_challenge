import { Carousel } from "../../organisms/carousel";
import { Footer } from "../../organisms/footer";
import { Header } from "../../organisms/header";
import { ProductList } from "../../organisms/productList";

export const Commerce = () => {
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

  const dummyDataForCarousel = [
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 1",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 2",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 3",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 4",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 5",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 6",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 7",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 8",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 9",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <ProductList data={dummyData} />
        <Carousel data={dummyDataForCarousel} />
      </main>
      <Footer />
    </>
  );
};
