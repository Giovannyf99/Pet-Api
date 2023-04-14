## PET Store API

This is an API to add pets to a store so users can come and give them a home

Here are the request methods:

{
    
`/pet` -GET 

- returns all the available pets

`/pet/:id` -GET

- Returns a basket item by its ID

- Example below
```
{
	"id": 1,
	"Name": "Benedict"
}
```

`/pet` -POST

- Accepts new `pet` object

- Example below

```
    {
		"id": 1,
		"Name": "Benedict"
    }
```
}

{

`/store` -G ET
-
- Returns the pets that have been listed to the store 

`/store/:id` - GET
- 
- Returns a single pet by its id
- Example below 

``` 
{
	"id": 1,
	"Name": "Benedict",
	"boolean": "$90.42"
}
```

`/store` - POST
-
- Adds a 'Store' object of a pet 
- Example below
``` 
{
	"id": 1,
	"Name": "Benedict",
	"boolean": "$90.42"
}
```

*The users section is still a work in progress*


}








*GOOGLE IT*