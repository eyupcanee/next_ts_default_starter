"use client";
import { useAuth } from "../context/AuthProvider";
import { useRouter } from "next/navigation";
export default function UserPage() {
  const router = useRouter();
  const { logoutUserAuth } = useAuth();
  return (
    <>
      <h1>AUTH PROVIDER CALISTIII!!!</h1>
      <button
        onClick={() => {
          logoutUserAuth();
          router.push("/");
        }}
      >
        çıkış
      </button>
    </>
  );
}
