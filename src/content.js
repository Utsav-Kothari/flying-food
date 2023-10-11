export const IMG_CDN_URL= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
export const MENU_CDN_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8176736&lng=75.86171709999999&restaurantId=" 

export function filterData(searchText, dataList) {
    const filterData = dataList.filter((element) =>
        element?.info.name.toLowerCase()?.includes(searchText.toLowerCase()))
    return filterData;
}