import { todayCity } from "@/lib/today";
import { HeaderShell } from "./header-shell";

export function SiteHeader() {
  const today = todayCity();

  return (
    <HeaderShell
      todayCity={today.city}
      todayNative={today.cityNative}
      todayScript={today.script}
      todayDay={today.day}
    />
  );
}
