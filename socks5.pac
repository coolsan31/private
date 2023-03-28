function FindProxyForURL(url, host) {
if (shExpMatch(host, "*.googleapis.com") ||
    shExpMatch(host, "*.goog")||
    shExpMatch(host, "*.gstatic.com")||
    shExpMatch(host, " na.b.g-tun.com")
   ) {
return "SOCKS5 127.0.0.1:7777;  SOCKS5 192.168.0.3:7890";
} else {
return "DIRECT";
}
}
