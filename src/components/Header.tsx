import { useState } from "react";
import Button from "./Button";

export default function Header() {

  const [isActive, setIsActive] = useState(false);

  return (
    <header className="fixed right-14 top-14">
      <Button isActive={isActive} setIsActive={setIsActive} />
    </header>
  )
}
