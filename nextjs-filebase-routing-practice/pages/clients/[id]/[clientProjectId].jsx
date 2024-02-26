import { useRouter } from "next/router";

function ClientProjectID() {
  const router = useRouter();
  //   console.log(router.query);

  function handleGoBackToClientPage() {
    router.push("../clients/");
  }

  return (
    <div>
      <h1>This the cleint project for select client Id</h1>
      <button onClick={handleGoBackToClientPage}>Go to Client</button>
    </div>
  );
}

export default ClientProjectID;
