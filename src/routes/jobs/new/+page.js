import { redirect } from "@sveltejs/kit";
import { isLoggedIn } from "../../../utils/auth.js";
import { alerts } from "../../../utils/alert.js";

export async function load() {
  if (!(await isLoggedIn())) {
    console.log("test");
    alerts.setAlert('Please login/sign up to create jobs', 'warning');
    throw redirect(307, '/login');
  }
}