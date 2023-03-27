function FindProxyForURL(url, host) {
if (shExpMatch(host, "*.googleapis.com") ||
    shExpMatch(host, "*.goog")|| 
    shExpMatch(host, " na.b.g-tun.com")||
    shExpMatch(host, " gstatic.com")
   
   ) {
return "SOCKS5 127.0.0.1:7890; SOCKS5 192.168.0.5:7890; PROXY 192.168.0.5:7899";
} else {
return "DIRECT";
}
}
