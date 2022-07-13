# MindFeed: A feed reading API service

What is it?
A full fledged API to build feed reader with all bells and whistles. It supports   feeds in various formats as well as some custom integrations like `Twitter`, `Reddit`, `YouTube` and more. You can self-host this service for now. A manager version will be coming out soon.

## Features
1. General
	1. `Accounts` : users can create accounts and login

2. Admin
	1. `Users` : create, update, delete users
	2. `Stats` : overall statistics of api usage by your users
	3. `Settings` : overall api settings

3. Users
	1. `Sources` : they can add, update or delete feed sources 
	2. `Feed` : user’s feed which can be sorted and organised 
	3. `Favorites` : users can add feed items to their favourites 
	4. `Collections` : users can create collections to bundle related items
	5. `Settings` : users can manager their feed settings

## API endpoints
*Note:* All endpoints except `/auth` require user to be logged in. An auth token will be generated which should be used for all requests. That’ll be main user identifier. 

### 0. Auth
*0.1* -> authentication
	`POST` : `/auth` -> generate auth token

#### 1. Admin Endpoints
*1.1* -> Users
	 `GET` : `/admin/users` -> list users	
	 `GET` : `/admin/users/{user}` -> list single user
	 `POST` :  `/admin/users` -> create new user
	 `PUT` : `/admin/users/{user}` -> update a user
	 `DELETE` : `/admin/users/{user}` -> delete a user

*1.2* -> Stats
	 `GET` :  `/admin/stats` -> get overall stats

*1.3* -> Settings
	 `GET` : `/admin/settings` -> get overall settings
	 `PUT` : `/admin/settings` -> update settings

#### 2. Normal User Endpoints
*2.1* -> feed
	 `GET` : `/feed` -> get user feed
	 `GET` : `/feed/{source}` -> get source specific feed
	 `GET` : `/feed/{day}` -> get date specific feed  

*2.2* -> sources
	 `GET` :  `/sources`  -> list user’s sources
	 `POST` : `/sources` -> add new user source
	 `DELETE` : `/sources` -> delete a source
 
*2.3* -> favorites
	 `GET` : `/favorites` -> get user favs
	 `POST` : `/favorites` -> add new fav
	 `DELETE` : `/favorites/{item}` -> delete from favs

*2.4* -> collections
	`GET` : `/collections` -> get user collections
	`POST` : `/collections` -> add new collection
       `PUT` : `/collections/{collection}` -> update a collection
	`DELETE` : `/collections/{collection}` -> delete a collection

	`GET` : `/collections/{collection}` -> get collection items
 	`POST` : `/collections/{collection}` -> add collection item
	`DELETE` : `/collections/{collection}/{item}` -> delete col item

*2.5* -> settings
	`GET` : `/users/{user}/settings` -> get overall settings
	`PUT` : `/users/{user}/settings` -> update settings


