'use client'
import { useTheme } from "@/hooks";

export default function Home() {
  const theme = useTheme();
  const onClick = () => {
    theme.setTheme("dark");
  }
  return (
    <main>
      Hello!
      <button onClick={onClick} className="border p-4 rounded-md">Login</button>
    </main>
  );
}
