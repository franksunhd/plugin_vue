/**
 * 地图瓦片
 * */
export function googleMap() {
    // 谷歌瓦片
    let url = "http://map.etian365.com/vt/lyrs=y&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}&s=Gali";
    // http://map.etian365.com/vt/lyrs=y&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}&s=Gali
    // http://map.etian365.com/vt/lyrs=s&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}&s=Gali
    // http://map.etian365.com/vt/imgtp=png32&lyrs=h&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s=Galil
    return url;
}