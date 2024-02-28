import { useRouter } from "next/router";

const ProjectDetails = () => {
  const router = useRouter();
  console.log(router.pathname)
  console.log(router.query)
  return (
    <>
      <h1>
        Project Details
      </h1>
    </>
  )
}

export default ProjectDetails;