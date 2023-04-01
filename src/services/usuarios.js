export const registrarUsuario = async (email,username,nombre,bio,password) => {
  try{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      username: username,
      nombre: nombre,
      bio: bio,
      password: password
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'    };

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}usuarios/signup`,
      requestOptions
    );

    if (!res.ok) throw new Error(res.text());
    const json = await res.json();
    return { success: true, data: json };
  } 
  catch (e) {
    console.error(e);
    return { success: false, data: [] };
  }
}

export const loginUsuario = async (email,password) => {
  try{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      password: password
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'    };

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}usuarios/login`,
      requestOptions
    );

    if (!res.ok) throw new Error(res.text());
    const json = await res.json();
    return { success: true, data: json };
  } 
  catch (e) {
    console.error(e);
    return { success: false, data: [] };
  }
}

export const exploreUsuarios = async (token) => {
  try{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `bearer ${token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'    
    };

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}usuarios/explore`,
      requestOptions
    );

    if (!res.ok) throw new Error(res.text());
    const json = await res.json();
    return { success: true, data: json };
  } 
  catch (e) {
    console.error(e);
    return { success: false, data: [] };
  }
}