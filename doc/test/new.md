## /test/new.json
#### Interface type
	GET
#### Interface request address
	/test/new.json
#### Request parameters
|sequence number |parameter names |if required |description |
| -------- | -------- |-------- |-------- |  
|1. |id |Required | |
|2. |name |Required | |
#### Return interface
```js
{
 "code": 200, //状态
 "data": {
  "list": [
   {
    "name": "xxxxxxx",
    "age": "20"
   }
  ]
 }
}
```