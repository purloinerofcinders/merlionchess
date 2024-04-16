type PageProps = {
  params: { params: { id: string } };
};

export default function Page(props: PageProps) {
  console.log(props.params);
  return <div></div>;
}
