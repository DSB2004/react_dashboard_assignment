import { firebaseAuth } from "../lib/firebase";

export const firebaseErrorMap = (code: string) => {
  console.log(code);
  if (code === "auth/email-already-in-use") {
    return "Account in use";
  } else if (code === "auth/missing-password") {
    return "Missing Password";
  } else if (code === "auth/missing-email") {
    return "Missing Email";
  } else if (code === "auth/weak-password") {
    return "Weak password";
  } else if (code === "auth/invalid-email") {
    return "Invalid Email";
  } else if (code === "auth/user-not-found") {
    return "User Not Found";
  } else if (code === "auth/wrong-password") {
    return "Wrong password";
  } else if (code === "auth/too-many-requests") {
    return "Too many Attemps";
  } else {
    return "Account not Found";
  }
};
