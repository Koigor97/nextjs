import React from "react";
import Link from "next/link";

export default function Page(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;

  console.log("id", id);
  return (
    <div>
      <h1>Dynamic Route ID: {id} </h1>
      <div className="mb-2 text-lg font-bold">
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
}
