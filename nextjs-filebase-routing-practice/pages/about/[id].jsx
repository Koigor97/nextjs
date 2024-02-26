import { useRouter } from "next/router";

function AboutDynamicRoute() {
  const router = useRouter();
  //   console.log(router.query);

  return (
    <div>
      <h1>This a Dynamic Route</h1>
    </div>
  );
}

export default AboutDynamicRoute;
