# MySQL with NextJS

This is a repo for my YouTube tutorial on how to use MySql with React and NextJS.

## Notes

Make sure to have a local MySql database named products with at least 3 columns: productid, productname, productimage

There are 3 connection examples in the API directory:
getdata.js. (connects to db and queries)
getdata-lib.js (connects to db through a custom wrapper in /lib.)
getdata-lib-router.js

The index page can use the getdata or getdata-lib. The product page uses the getdata-lib-router.js
