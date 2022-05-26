# Arrange the users inside an object

    Each object has 100IPs save it to variable as Promise.
    run 15 times and fill this object up to 1500 IPs.
    {userIPs1:[100IPs],userIPs2:[100IPS]...}

## Using Promise.All for batching

    Promise.All to send a batch of promises. API requires us to
    wait 1 minute every 1500 users sent as a batch
    so we need to send a Promise.All contains 1500 users every minute.

## Using setInterval and setTimeout

    using setInterval and setTimeout we can calculate the time needed and stop.
    30,000 users / 1,500 users per request = 20 minutes

    set timeout for 20 minutes to clear the interval:
    const interval = setInterval(function () {
     	someFunction(userIP);
     }, 30000);

     setTimeout(function () {
     	clearInterval(interval);
     }, 1000 * 60 * 20);
