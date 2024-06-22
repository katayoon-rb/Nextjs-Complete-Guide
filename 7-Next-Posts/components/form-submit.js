"use client";
import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>Creating post...</p>;
  }
  return (
    <div>
      <button type='reset'>Reset</button>
      <button>Create Post</button>
    </div>
  );
}
