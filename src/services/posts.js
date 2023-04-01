export const explorePosts = async (token) => {
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
      `${process.env.REACT_APP_API_URL}/api/posts/explore`,
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