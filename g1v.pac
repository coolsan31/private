function FindProxyForURL(url, host) {
if (shExpMatch(host, "*.googleapis.com") ||
    shExpMatch(host, "*.goog")|| 
    shExpMatch(host, "*.gstatic.com")||
    shExpMatch(host, "na.b.g-tun.com")
   ) {
return "PROXY 192.168.0.3:7890";
} else {
return "DIRECT";
}
}
