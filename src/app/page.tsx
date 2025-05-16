import Header from "@/components/Header/Header";
import Main from "../components/Section/main";
import Sobre from "../components/Section/sobre"
import Chamada from "../components/Section/chamada"

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Sobre/>
      <Chamada />
    </>
  );
}
