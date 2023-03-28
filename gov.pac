function FindProxyForURL(url, host) {
if (shExpMatch(host,"*.gstatic.com")||
    shExpMatch(host,"*.googleapis.com")||
    shExpMatch(host,"*.goog")||
    shExpMatch(host,"na.b.g-tun.com")
   ) {
return "SOCKS 127.0.0.1:7777; SOCKS 192.168.0.5:7890"
} else {
return "DIRECT";
}
}
