function FeedBackPage() {
  return (
    <ul>
      {feebackData.map((data) => (
        <li
          key={data.id}
        >{`Title: ${data.title}, Description: ${data.description}, Assignee: ${data.assignee}`}</li>
      ))}
    </ul>
  );
}

export default FeedBackPage;
