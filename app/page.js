
"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from ".././components/ui/button"


export default function Home() {
  const { setTheme } = useTheme()
  return (
    <div>
      <div>
        <br />
      <Button variant="glass">Hello </Button>
      </div>
    </div>
  );
}
