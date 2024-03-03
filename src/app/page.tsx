import Image from "next/image";
import RootLayout from "./layout";
import useSWR from "swr";

export default function Home() {
  return (
    <RootLayout>
      <p>Đây là nội dung trang</p>
    </RootLayout>
  );
}