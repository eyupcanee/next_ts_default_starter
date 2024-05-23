"use client";
import { changeTheme } from "@/lib/features/theme/themeSlice";
import styles from "./textpage.module.css";
import { useAppDispatch } from "@/lib/hooks";
import { useAuth } from "../context/AuthProvider";
import { useRouter } from "next/navigation";
export default function TextPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loginUserAuth } = useAuth();
  return (
    <>
      <h1 className={styles.headingStyle}>TEST Yazısı</h1>
      <button onClick={() => dispatch(changeTheme())}>Change Theme</button>
      <button
        onClick={async () => {
          loginUserAuth({}).then((res) => {
            router.push("/userpage");
          });
        }}
      >
        Login
      </button>
    </>
  );
}
