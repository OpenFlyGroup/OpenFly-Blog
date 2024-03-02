const NewsPostPage = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default NewsPostPage;
