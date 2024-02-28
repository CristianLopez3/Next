import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  const loadProjectHandler = () => {
    //load data
    router.push("/clients/max/projecta");
  };
  return (
    <>
      <h1>The projects of a Given client id</h1>
      <button onClick={loadProjectHandler}>Load Project to</button>
    </>
  );
};

export default ClientProjectsPage;
