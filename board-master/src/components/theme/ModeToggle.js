import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
export default function ModeToggle() {
  const [theme, setTheme] = useState("light");
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleTheme = () => {
    setTheme(enabled ? "light" : "dark");
  };

  return (
    <div>
      <Switch.Group>
        <div className="flex items-center">
          <Switch.Label className="mr-4 ">Dark Mode</Switch.Label>
          <Switch
            checked={enabled}
            onChange={() => {
              setEnabled(enabled ? false : true);
              handleTheme();
            }}
            className={`${
              enabled ? "bg-[#121212]" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          >
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </Switch.Group>
    </div>
  );
}
