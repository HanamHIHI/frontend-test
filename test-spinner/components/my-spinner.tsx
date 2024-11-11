import { FadeLoader, ClimbingBoxLoader } from "react-spinners";

export function MapLoading() {
  return (
    <>
        <FadeLoader color="#4D607B" />
        <ClimbingBoxLoader color="#000000" />
    </>
  );
};