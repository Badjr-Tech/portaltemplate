import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{ backgroundColor: 'lightblue', border: '2px solid red', padding: '20px' }}>
      <SignIn />
    </div>
  );
}