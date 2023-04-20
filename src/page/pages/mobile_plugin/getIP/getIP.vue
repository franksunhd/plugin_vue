<template>
    <div>
        <div @click="getIPAddress_1">111</div>
    </div>
</template>

<script>

    export default {
        name: "getIP",
        data() {
            return {
                ipAddress: ""
            };
        },
        methods: {
            getIPAddress_1() {
                this.getUserIP((ip) => {
                    console.warn(ip);
                });
            },

            //获取用户本地ip的方法
            getUserIP(onNewIP) {
                let MyPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
                let pc = new MyPeerConnection({
                    iceServers: []
                });
                let noop = () => {
                };
                let localIPs = {};
                let ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
                let iterateIP = (ip) => {
                    console.warn(ip, "--ip--");
                    if (!localIPs[ip]) onNewIP(ip);
                    localIPs[ip] = true;
                };
                pc.createDataChannel("");
                pc.createOffer().then((sdp) => {

                    sdp.sdp.split("\n").forEach(function (line) {
                        if (line.indexOf("candidate") < 0) {
                            console.warn("没有找到2");
                            return false;
                        }
                        line.match(ipRegex).forEach(iterateIP);
                    });
                    pc.setLocalDescription(sdp, noop, noop);
                }).catch((reason) => {
                });
                pc.onicecandidate = (ice) => {
                    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) {
                        console.warn("没有找到1");
                        return false;
                    }
                    ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
                };
            }
        },
        mounted() {
            this.getIPAddress_1();

            console.warn(location)
        }
    };
</script>

<style scoped>

</style>