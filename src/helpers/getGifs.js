export const getGifs = async(category)=> {

    const _url = `https://api.giphy.com/v1/gifs/search?api_key=C8dafFKHuEps6Zlvjcr070E3sUS1QFie&q=${category}}&limit=20`;
    const resp = await fetch ( _url );
    const { data } =  await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}