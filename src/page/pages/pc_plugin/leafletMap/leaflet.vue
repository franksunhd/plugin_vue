<template>
    <div class="testDemoBox">
        <div id="mapDemo"></div>
        <div class="mar10">
            <el-button type="primary" size="small" @click="addOncePoint">添加一个点的标记</el-button>
            <el-button type="primary" size="small" @click="addMorePoint">添加多个点的标记</el-button>
            <el-button type="primary" size="small" @click="addOnceLine">添加一个多边形</el-button>
            <el-button type="primary" size="small" @click="addMoreLine">添加多个多边形</el-button>
            <el-button type="primary" size="small" @click="addAnyPoint">随机添加一个点的标记</el-button>
        </div>
        <div class="mar10">
            <el-button type="danger" size="small" @click="deletePoint">删除标记</el-button>
            <el-button type="danger" size="small" @click="deleteLine">删除多边形</el-button>
            <el-button type="danger" size="small" @click="deleteAnyPoint">随机删除一个点</el-button>
            <el-button type="danger" size="small" @click="deleteAnyLine">随机删除一个多边形</el-button>
        </div>
        <div class="mar10">
            <el-button type="primary" size="small" @click="startMore">圈地</el-button>
            <el-button type="danger" size="small" @click="deleteMore">删除圈地</el-button>
        </div>
        <div class="mar10">
            <el-button type="primary" size="small" @click="startPlay">开始播放</el-button>
            <el-button type="warning" size="small" @click="pausePlay">暂停播放</el-button>
            <el-button type="danger" size="small" @click="stopPlay">停止播放</el-button>
        </div>
    </div>
</template>

<script>
    import * as L from "leaflet";
    import "leaflet/dist/leaflet.css";
    import "leaflet-draw";
    import "leaflet-draw/dist/leaflet.draw.css";
    import "./leaflet.draw-cn";
    import {googleMap} from "./map.js";

    export default {
        name: "testDemo",
        data() {
            return {
                map: "", // 地图
                markers: [], // 标记点集合
                myMarkers: "",
                polygons: [],
                myPolygons: "",
                landIcon: require("../../../../assets/img/map/land.png"),
                landIcon_new: require("../../../../assets/img/map/zbj1.png"),
                drawPolyline: "", // 绘制多边形对象
                drawControl: "", // 地图工具条
                drawNum: 0, // 0是画地块,大于0是障碍物
                latlngs: [], // 地块经 纬度数组
                polygon: "", // 地块对象
                polygonArr: [], // 地块集合数组
                polygonGroup: "", // 地块集合图层

                // 地图轨迹播放
                polyLinePlay: "", // 红线
                polylinePass: "" // 绿线
            };
        },
        methods: {
            // 初始化地图
            initMap() {
                let that = this;
                that.map = L.map("mapDemo", {
                    minZoom: 3, // 最小缩放级别
                    maxZoom: 18, // 最大缩放级别
                    center: [39.90927537429098, 116.39739990234376], // 地图的初始地理中心
                    zoom: 4.5, // 初始地图缩放级别
                    zoomControl: false, // 默认是否将缩放空间添加地图中
                    attributionControl: false, // 是否显示地图厂商
                    zoomSnap: 0.5, // 缩放级别
                    crs: L.CRS.EPSG3857 // 地图坐标系
                });
                // 绘制谷歌瓦片
                L.tileLayer(
                    googleMap(), {maxZoom: 10, minZoom: 1}
                ).addTo(that.map);

                // 控制缩放组件的位置及标题
                L.control.zoom({
                    zoomInTitle: "放大-哈哈哈",
                    zoomOutTitle: "缩小-嘿嘿嘿",
                    position: "bottomright"
                }).addTo(that.map);


                let drawnItems = new L.FeatureGroup();
                that.map.addLayer(drawnItems);
                //
                that.drawControl = new L.Control.Draw({
                    draw: {
                        polyline: false,
                        polygon: false,
                        rectangle: false,
                        circle: false,
                        marker: false,
                        circlemarker: false
                    }
                });
                that.map.addControl(that.drawControl);
                // 新增地块
                that.map.on("draw:created", function (e) {
                    that.createdMap(e);
                });
                // 初始化轨迹
                that.initPlay();
            },
            // 圈地的绘制
            createdMap(e) {
                let that = this;
                // 绘制完后的经纬度数组
                let latLng = e.layer._latlngs[0];
                console.warn(latLng);
                // 画地块
                if (that.drawNum === 0) {
                    latLng.forEach((v, i) => {
                        // 地块描点对应数组放值
                        that.latlngs.push([
                            v.lat,
                            v.lng
                        ]);
                    });
                    that.polygon = L.polygon(that.latlngs, {
                        color: "#00FF7C",
                        fillColor: "#00FF7C",
                        weight: 2,
                        opacity: .5,
                        fillOpacity: .2,
                        _id: 1000
                    }).addTo(that.map);
                    that.polygonArr.push(that.polygon);
                    that.polygonGroup = L.layerGroup(that.polygonArr);
                    that.map.addLayer(that.polygonGroup);
                    that.polygon.editing.enable(); // 地块可以拖动编辑
                }
            },
            // 地图上画出单个点
            addOncePoint() {
                let _this = this;
                // 每次画之前清空一下画布
                _this.deletePoint();
                // 标记点
                let myIcon = L.icon({
                    iconUrl: _this.landIcon, // icon 地址
                    iconSize: [25] // icon大小
                });
                let moreArr = [
                    [39.90927537429098, 116.39739990234376]
                ];
                _this.drawPoint(moreArr, myIcon);
            },
            // 删除标记
            deletePoint() {
                let _this = this;
                if (_this.myMarkers) {
                    _this.myMarkers.clearLayers();
                }
                _this.markers = [];
                _this.myMarkers = "";
            },
            // 地图上画出多个点
            addMorePoint() {
                let _this = this;
                // 删除画布
                _this.deletePoint();
                let moreArr = [
                    [34.1608227026771, 116.26289951047207],
                    [36.14308213050265, 117.42765071228034],
                    [35.99212532950794, 113.30683316428761]
                ];
                // 标记点
                let myIcon = L.icon({
                    iconUrl: _this.landIcon, // icon 地址
                    iconSize: [25], // icon大小
                    iconAnchor: [12.5, 30]
                });
                _this.drawPoint(moreArr, myIcon);
            },
            // 画出一个多边形
            addOnceLine() {
                let _this = this;
                // 删除多边形画布
                _this.deleteLine();
                let moreArr = [
                    [34.1608227026771, 116.26289951047207],
                    [36.14308213050265, 117.42765071228034],
                    [35.99212532950794, 113.30683316428761],
                    [34.99212532950794, 112.30683316428761]
                ];

                let polygon = L.polygon(moreArr, {
                    id: 100,
                    color: "#00FF7C",
                    fillColor: "#00FF7C",
                    weight: 2,
                    opacity: .5,
                    fillOpacity: .2
                }).addTo(_this.map);
                _this.polygons.push(polygon);
                // 画图聚合
                _this.myPolygons = L.layerGroup(_this.polygons);
                _this.map.addLayer(_this.myPolygons);
                // polygon.editing.enable(); // 地块可以拖动编辑
            },
            // 删除多边形
            deleteLine() {
                let _this = this;
                if (_this.myPolygons) {
                    _this.myPolygons.clearLayers();
                }
                _this.polygons = [];
                _this.myPolygons = "";
            },
            // 画出多个多边形
            addMoreLine() {
                let _this = this;
                // 删除多边形画布
                _this.deleteLine();
                let moreArr = [
                    // 矩形
                    [
                        [32.1608227026771, 118.26289951047207],
                        [34.14308213050265, 119.42765071228034],
                        [35.99212532950794, 112.30683316428761],
                        [33.99212532950794, 111.30683316428761]
                    ],
                    // 梯形
                    [
                        [34.1608227026771, 90.26289951047207],
                        [36.14308213050265, 93.42765071228034],
                        [35.99212532950794, 95.30683316428761],
                        [34.99212532950794, 97.30683316428761]
                    ],
                    // 三角形
                    [
                        [39.1608227026771, 130.26289951047207],
                        [40.14308213050265, 115.42765071228034],
                        [37.99212532950794, 125.30683316428761]
                    ]
                ];
                // 绘制多边形
                _this.drawLine(moreArr);
            },
            // 绘制多边形
            drawLine(moreArr) {
                let _this = this;
                moreArr.forEach((item) => {
                    let polygon = L.polygon(item, {
                        id: 100,
                        color: "#00FF7C",
                        fillColor: "#00FF7C",
                        weight: 2,
                        opacity: .5,
                        fillOpacity: .2
                    }).addTo(_this.map);
                    _this.polygons.push(polygon);
                });
                // 画图聚合
                _this.myPolygons = L.layerGroup(_this.polygons);
                _this.map.addLayer(_this.myPolygons);
            },
            // 绘制单点
            drawPoint(moreArr, myIcon) {
                let _this = this;
                moreArr.forEach((item) => {
                    let marker = L.marker(item, {
                        id: "land",
                        icon: myIcon,
                        title: "地块信息",
                        alt: "地块信息",
                        opacity: "1"
                    }).addTo(_this.map).on("mouseover", function (e) {
                        _this.clickPolygon(e.latlng);
                    });
                    _this.markers.push(marker);
                });
                // 标记点聚合
                _this.myMarkers = L.layerGroup(_this.markers);
                _this.map.addLayer(_this.myMarkers);
            },
            clickPolygon(val) {
                console.log(val);
                let popContent = `<div class='landInfoContent'>` +
                    `<div class="til">经纬度信息</div>` +
                    `<p>经度：${val.lng}</p>` +
                    `<p>纬度：${val.lat}</p>` +
                    `</div>`;
                L.popup({className: `landPopInfo`}).setLatLng(val).setContent(popContent).openOn(this.map);
            },
            // 随机删除一个点
            deleteAnyPoint() {
                let _this = this;
                if (_this.markers.length <= 1) {
                    _this.$message.error("随机删除必须是大于1个点");
                } else {
                    let num = _this.randomNum(0, _this.markers.length - 1);
                    let markers = _this.markers.filter((item, i) => {
                        if (i !== num) {
                            return item;
                        }
                    });
                    _this.deletePoint();
                    _this.markers = markers;
                    // 标记点聚合
                    _this.myMarkers = L.layerGroup(_this.markers);
                    _this.map.addLayer(_this.myMarkers);
                }
            },
            // 随机删除一个多边形
            deleteAnyLine() {
                let _this = this;
                if (_this.polygons.length <= 1) {
                    _this.$message.error("随机删除必须是大于1个多边形");
                } else {
                    let num = _this.randomNum(0, _this.polygons.length - 1);
                    let polygons = _this.polygons.filter((item, i) => {
                        if (i !== num) {
                            return item;
                        }
                    });
                    _this.deleteLine();
                    _this.polygons = polygons;
                    // 标记点聚合
                    _this.myPolygons = L.layerGroup(_this.polygons);
                    _this.map.addLayer(_this.myPolygons);
                }
            },
            // 生成随机数
            randomNum(minNum, maxNum) {
                switch (arguments.length) {
                    case 1:
                        return parseInt(Math.random() * minNum + 1, 10);
                        break;
                    case 2:
                        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                        break;
                    default:
                        return 0;
                        break;
                }
            },
            // 随机添加一个标记点
            addAnyPoint() {
                let _this = this;
                // 标记点
                let myIcon = L.icon({
                    iconUrl: _this.landIcon, // icon 地址
                    iconSize: [25] // icon大小
                });
                let lng = _this.randomNum(20, 53);
                let lat = _this.randomNum(70, 135);
                let moreArr = [
                    [lng, lat]
                ];
                _this.drawPoint(moreArr, myIcon);
            },
            // 圈地
            startMore() {
                this.drawPolyline = new L.Draw.Polygon(this.map, this.drawControl.options.polygon);
                this.drawPolyline.enable();
            },
            // 删除圈地
            deleteMore() {
                this.drawPolyline.disable();
                // 地块信息
                this.polygon = "";
                this.latlngs = [];
                this.polygonArr = [];
                if (this.polygonGroup) this.polygonGroup.clearLayers();
            },
            // 初始化轨迹
            initPlay() {
                let that = this;
                // 移动到当前点的索引
                that.i = 0;

                that._path = [
                    [32.1608227026771, 118.26289951047207],
                    [34.14308213050265, 119.42765071228034],
                    [35.99212532950794, 112.30683316428761],
                    [33.99212532950794, 111.30683316428761],
                    [34.1608227026771, 90.26289951047207],
                    [36.14308213050265, 93.42765071228034],
                    [35.99212532950794, 95.30683316428761],
                    [34.99212532950794, 97.30683316428761],
                    [39.1608227026771, 130.26289951047207],
                    [40.14308213050265, 115.42765071228034],
                    [37.99212532950794, 125.30683316428761]
                ];

                /* 运行轨迹 transparent */
                that.polyLinePlay = L.polyline([], {color: "red"}).addTo(that.map); // 红线
                that._initPolyline(that._path[that.i], that._path[that.i + 1], that._tween);

                that.polylinePass = L.polyline([], {color: "green"}).addTo(that.map);   // 绿线

                let proto_initIcon = L.Marker.prototype._initIcon;
                let proto_setPos = L.Marker.prototype._setPos;

                L.Marker.include({
                    _initIcon: function () {
                        proto_initIcon.call(this);
                    },

                    _setPos: function (pos) {
                        proto_setPos.call(this, pos);
                    }
                });
            },
            // 开始播放轨迹
            startPlay() {
                let me = this, len = me._path.length;
                // 不是第一次点击开始,并且小车还没到达终点
                if (me.i && me.i < len - 1) {
                    // 没按pause再按start不做处理
                    if (!me._fromPause) {
                        return;
                    } else if (!me._fromStop) {
                        // 按了pause按钮,并且再按start，直接移动到下一点
                        // 并且此过程中，没有按stop按钮
                        // 防止先stop，再pause，然后连续不停的start的异常
                        me._moveNext(++me.i);
                    }
                } else {
                    // 第一次点击开始，或者点了stop之后点开始
                    me.polylinePass.setLatLngs([]);
                    me._addMarker();
                    me._moveNext(me.i);
                }
                //重置状态
                this._fromPause = false;
                this._fromStop = false;
            },
            // 暂停播放轨迹
            pausePlay() {
                clearInterval(this._intervalFlag);
                //标识是否是按过pause按钮
                this._fromPause = true;
            },
            // 停止播放轨迹
            stopPlay() {
                this.i = 0;
                this._fromStop = true;
                clearInterval(this._intervalFlag);
            },
            // 画路线
            _initPolyline(initPos, targetPos, effect) {
                let me = this,
                    // 当前的帧数
                    currentCount = -1,
                    // 步长
                    step = 0.1, // 设置0.01后，节点过多导致初始化过慢
                    // 总步数
                    count = Math.round(me._getDistance(initPos[0], initPos[1], targetPos[0], targetPos[1]) / step);

                // 如果小于1直接移动到下一点
                if (count < 1) {
                    ++me.i;
                    if (me.i < me._path.length - 1) {
                        me._initPolyline(me._path[me.i], me._path[me.i + 1], me._tween);
                    }
                    return;
                }
                // 两点之间当前帧数大于总帧数的时候，则说明已经完成移动
                let loop = true;
                while (loop) {
                    if (currentCount >= count) {
                        loop = false;
                        // 移动的点已经超过总的长度
                        if (me.i > me._path.length) {
                            me.i = 0;
                            return;
                        }
                        // 运行下一个点
                        ++me.i;
                        if (me.i < me._path.length - 1) {
                            me._initPolyline(me._path[me.i], me._path[me.i + 1], me._tween);
                            me.i = 0;
                        }
                    } else {
                        currentCount++;
                        let x = effect(initPos[0], targetPos[0], currentCount, count),
                            y = effect(initPos[1], targetPos[1], currentCount, count);
                        let pos = L.latLng(x, y);
                        me.polyLinePlay.addLatLng(pos);
                    }
                }
            },
            // 缓动效果 (初始坐标，目标坐标，当前的步长，总的步长)
            _tween(initPos, targetPos, currentCount, count) {
                return (targetPos - initPos) * currentCount / count + initPos;
            },
            // 计算两点间的距离
            _getDistance(pxA, pyA, pxB, pyB) {
                return Math.sqrt(Math.pow(pxA - pxB, 2) + Math.pow(pyA - pyB, 2));
            },
            _addMarker() {
                if (this._marker) {
                    this.stopPlay();
                    this._marker.remove();
                }
                let myIcon = L.icon({
                    iconUrl: this.landIcon_new,
                    iconSize: [15],
                    iconAnchor: [10, 30]
                });
                let marker = new L.Marker(this._path[0], {
                    id: "land",
                    icon: myIcon,
                    title: "title",
                    alt: "alt",
                    opacity: "1"
                }).addTo(this.map);
                this._marker = marker;
            },
            // 移动到下一个点
            _moveNext(index) {
                let me = this;
                if (index < this._path.length - 1) {
                    this._move(me._path[index], me._path[index + 1], me._tween);
                }
            },
            /**
             * 移动小车
             * @param {Number} poi 当前的步长.
             * @param {Point} initPos 经纬度坐标初始点.
             * @param {Point} targetPos 经纬度坐标目标点.
             * @param {Function} effect 缓动效果，实现插值
             * @return 无返回值.
             */
            _move(initPos, targetPos, effect) {
                let me = this,
                    // 当前的帧数
                    currentCount = -1,
                    // 步长
                    timer = 10, // 10毫秒为一步
                    step = 0.1,
                    // 总步数
                    count = Math.round(me._getDistance(initPos[0], initPos[1], targetPos[0], targetPos[1]) / step);
                // 如果小于1直接移动到下一点
                if (count < 1) {
                    this._moveNext(++me.i);
                    return false;
                }
                me._intervalFlag = setInterval(function () {
                    // 两点之间当前帧数大于总帧数的时候，则说明已经完成移动
                    if (currentCount >= count) {
                        clearInterval(me._intervalFlag);
                        // 移动的点已经超过总的长度
                        ++me.i;
                        if (me.i >= me._path.length - 1) {
                            console.log("move done");
                            return false;
                        }
                        // 运行下一个点
                        me._moveNext(me.i);
                    } else {
                        currentCount++;
                        let x = effect(initPos[0], targetPos[0], currentCount, count),
                            y = effect(initPos[1], targetPos[1], currentCount, count);
                        let pos = L.latLng(x, y);

                        // 正在移动
                        me._marker.remove(); // 先删除
                        me._marker._latlng = pos; // 设置图标位置
                        me._marker.addTo(me.map);
                        me.polylinePass.addLatLng(pos);
                    }
                }, timer);
            }
        },
        mounted() {
            this.initMap();
        }
    };
</script>

<style scoped lang="less">
    .testDemoBox {
        width: 100%;
        height: 100%;

        /* 地图相关 */

        /deep/ .leaflet-div-icon {
            border-radius: 20px;
        }

        #mapDemo {
            width: 100%;
            height: 1000px;
        }

        .mar10 {
            margin-top: 10px;
        }

        /deep/ .landInfoContent {

            p {
                margin: 5px 0;
            }
        }
    }
</style>
