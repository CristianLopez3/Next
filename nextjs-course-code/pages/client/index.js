import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];
  return (
    <>
      <h1>Client Page</h1>
      {clients.map((item) => (
        <li key={item.id}>
          <Link href={{
            pathname: '/client/[id]',
            query: {
              id: item.id
            }
          }}>{item.name}</Link>
        </li>
      ))}
    </>
  );
};
ClientPage
export default ClientPage;
