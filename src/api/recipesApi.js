export const fecthRecipes = async (search) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `http://www.recipepuppy.com/api/?q=${search}`;
    const data = await fetch(proxyurl + url).then(response => {
        return response.json()
      });
      
    return data.results;
}