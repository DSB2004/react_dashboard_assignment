import { z } from "zod";
import { loginSchema } from "../../../lib/validation";
import { firebaseAuth } from "../../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrorMap } from "../../../utils/firebase.util";

async function loginHandler(data: z.infer<typeof loginSchema>) {
  try {
    const { email, password } = data;
    const res = await signInWithEmailAndPassword(firebaseAuth, email, password);
    return;
  } catch (err: any) {
    throw new Error(firebaseErrorMap(err.code));
  }
}

export default loginHandler;
