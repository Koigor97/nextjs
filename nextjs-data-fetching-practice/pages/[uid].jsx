function UseIDPage(props) {
  return (
    <div>
      <h1>{`This is the User ID: ${props.id}`}</h1>
    </div>
  );
}

export default UseIDPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;

  return {
    props: {
      id: userId,
    },
  };
}
