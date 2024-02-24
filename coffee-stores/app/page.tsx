import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import Image from "next/image";
import Link from "next/link";

import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from "../types";

async function getData() {
  return await fetchCoffeeStores();
}

export default async function Home() {
  const coffeeStoreId = "Wassup...";
  // const coffeeStores = [
  //   {
  //     name: "Sussy Coffee",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     name: "KoiCoffee",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     name: "CafeMatic",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1518739745383-0ef26e9dd7fd?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     name: "eten & drinken",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
  const coffeeStore2 = await getData();
  console.log(coffeeStore2);

  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            Pretoria Coffee Stores
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
            {coffeeStore2.map((coffeeStore: CoffeeStoreType, index: number) => (
              <Card
                key={`${coffeeStore.name}-${index}`}
                name={coffeeStore.name}
                imgURL={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.name}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
