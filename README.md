TimeUnit.js
===========

Small time unit conversion library inspired by Java's TimeUnit


Usage
====

```javascript
var s = TimeUnit.HOURS.toSeconds(1); // s = 3600;

setTimeout(function(){...}, TimeUnit.SECONDS.toMillis(15));

```

Units
====

The following units can be used:

 - MILLIS
 - SECONDS
 - MINUTES
 - HOURS
 - DAYS

Develop
===

To develop

```sh
git clone https://github.com/rideg/TimeUnit.js.git
cd TimeUnit.js
npm install
grunt
```
