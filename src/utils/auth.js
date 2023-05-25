import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';

const emptyAuth = {
    "token": "",
    "userId": ""
}

export function logOut() {
    localStorage.setItem("auth", JSON.stringify(emptyAuth));
    return true;  
}

export function getUserID() {
    const auth = localStorage.getItem("auth");
    if (auth) {
        return JSON.parse(auth)['userID'];
    }
    return null;
}

export function getTokenFromLocalStorage() {
    const auth = localStorage.getItem("auth");
    if (auth) {
        return JSON.parse(auth)['token'];
    }
    return null;
}

export async function isLoggedIn() {
    if (!getTokenFromLocalStorage()) 
        return false;
    try {
        const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/api/collections/users/auth-refresh', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getTokenFromLocalStorage()
            },
        });
        const res = await resp.json();
        if (resp.status === 200) {
            localStorage.setItem("auth", JSON.stringify({
                'token': res.token,
                'userID': res.record.id
            }));
            return true;
        }
        return false;
    }
    catch {
        return false;
    }
}

export async function authenticateUser(username, password) {
  const resp = await fetch(
    PUBLIC_BACKEND_BASE_URL + '/api/collections/users/auth-with-password',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identity: username,
        password
      })
    }
  );
  const res = await resp.json();
  if (resp.status === 200) {
    localStorage.setItem("auth", JSON.stringify({
        'token': res.token,
        'userId': res.record.id

    }));
    return {
        success: true,
        res: res
    }
  }
  return {
    success: true,
    res: res
  }
}