'use client';
import ImageComponent from "@/components/image-component";

export default function Home() {
  return (
    <>
      <ImageComponent imageName={"beer"}></ImageComponent>

      <ImageComponent imageName={"chicken"}></ImageComponent>

      <ImageComponent imageName={"korean"}></ImageComponent>

      <ImageComponent imageName={"chinese"}></ImageComponent>

      <ImageComponent imageName={"japanese"}></ImageComponent>
    </>
  );
}
