import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";


export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Link Shortener</h1>
      <LinkForm />
      <LinkList />
    </main>
  )
}