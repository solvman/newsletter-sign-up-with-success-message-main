import { useState } from "react";
import SubscribeCard from "./components/SubscribeCard";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  const [email, setEmail] = useState<string>("");

  return (
    <main className="text-neutral-800">
      <h1 className="sr-only">Frontend Mentor project submission</h1>
      {!email ? (
        <SubscribeCard setEmail={setEmail} />
      ) : (
        <ThankYouCard email={email} setEmail={setEmail} />
      )}
    </main>
  );
}

export default App;
