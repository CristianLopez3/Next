earimport { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <h1>The project page for a specific project for a selected client</h1>;
};

export default SelectedClientProjectPage;