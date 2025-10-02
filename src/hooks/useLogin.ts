import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  async function handleLogin() {
    const email = "example@example.com";
    const password = "password123";

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("ログイン失敗:", error.message);
      alert(error.message);
      return;
    }

    console.log("ログイン成功", data.user);

    // ログイン成功したら / へ遷移
    navigate("/");
  }

  return { handleLogin };
}
