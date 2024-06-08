// to construct the URL of an image file located within the assets directory of a project
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}