import { promises as fs } from "fs";
import path from "path";

function ProductDetailPage(props) {
  const { product } = props;

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummyData.json");
  // console.log(filePath);
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "p1" } }, { params: { pid: "p2" } }],
    fallback: true,
  };
}

export default ProductDetailPage;
