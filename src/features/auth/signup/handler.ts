import { z } from "zod";
import { signUpSchema } from "../../../lib/validation";
import { firebaseAuth } from "../../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { firebaseErrorMap } from "../../../utils/firebase.util";

const signUpHandler = async (data: z.infer<typeof signUpSchema>) => {
  try {
    const { name, email, password } = data;
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: name,
    });
    sendEmailVerification(user);
    return { status: true, id: user.uid };
  } catch (err: any) {
    throw new Error(firebaseErrorMap(err.code));
  }
};

export default signUpHandler;
