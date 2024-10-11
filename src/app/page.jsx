import Image from "next/image";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <SearchBar/>
    </main>
    </>
  );
}
