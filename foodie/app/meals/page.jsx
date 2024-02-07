import Link from "next/link";

function page() {
  return (
    <main>
      <h1>The Meals Page 🍜</h1>
      <p>
        <Link href="/meals/share">Meal Share page</Link>
      </p>
      <p>
        <Link href="/meals/community">Community page</Link>
      </p>
      <p>
        <Link href="/meals/some-meal-1">Some meal 1</Link>
      </p>
      <p>
        <Link href="/meals/some-meal-2">Some meal 2</Link>
      </p>
    </main>
  );
}

export default page;
