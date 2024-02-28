import { promises as fs } from "fs";
import path from "path";

import Link from "next/link";

function HomePage(props) {
  const { mr } = props;
  const { mrs } = props;
  const { products } = props;
  const namesOrder = ["firstName", "middleName", "lastName"];

  return (
    <>
      <ul>
        {mr.map((name, i) => (
          <li key={i}>
            <Link href={`${name[namesOrder[i]]}`}>{name[namesOrder[i]]}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {mrs.map((name, i) => (
          <li key={i}>
            <Link href={`${name[namesOrder[i]]}`}>{name[namesOrder[i]]}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {products.map((product, i) => (
          <li key={i}>
            <Link href={product.id}>{product.description}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummyData.json");
  // console.log(filePath);
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  // console.log(data);
  console.log("RE-GENERATING after EVERY 5sec");

  return {
    props: {
      mr: [
        { firstName: "Koigor" },
        { middleName: "Samuel" },
        { lastName: "Fogbawa" },
      ],
      mrs: [
        { firstName: "Sarah" },
        { middleName: "Juliana" },
        { lastName: "Alpha" },
      ],
      products: data.products,
    },
    revalidate: 5,
  };
}

export default HomePage;
