import { Carousel } from "@/components/organisms/carousel";
import { useModal } from "@/components/organisms/cokkiePolicyModal";
import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";
import { ProductList } from "@/components/organisms/productList";
import { useEffect } from "react";

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

  const { Modal, openModal } = useModal();

  useEffect(() => {
    openModal();
  }, []);

  return (
    <div className='relative'>
      <Header />
      <main>
        <ProductList data={dummyData} />
        <Carousel data={dummyDataForCarousel} />
      </main>
      <Footer />
      <Modal />
    </div>
  );
}
