import { useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <div>
      <div>&#169; Mominul Haque {year}</div>
    </div>
  );
}
