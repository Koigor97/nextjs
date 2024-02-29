function UserProfile(props) {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
}

export default UserProfile;

export async function getServerSideProps(context) {
  return { props: { username: "Fogbawa" } };
}
