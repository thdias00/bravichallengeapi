# **Challenge Bravi Api**

## Rotas

</br>

### Users

<h3>People Registration</h3>

`POST /users`

```json
{
	"name": "Hugo Mota",
	"function": "Frontend",
	"contact": {
		"contact": "hugo@email.com",
		"type": "Email"
	}
}
```

> In case of success:

`POST /users - STATUS 201`

```json
{
	"contacts": [
		{
			"type": "Email",
			"contact": "hugo@email.com"
		}
	],
	"function": "Frontend",
	"name": "Hugo Mota",
	"id": "f790c849-68f6-4783-9731-f7d7c08e6f3e"
}
```

</br></br>

<h3>Get People</h3>

`GET /users - NO BODY`


> In case of success:

`GET /users - STATUS 200`

```json
{
	"users": [
		{
			"id": "ea5629ed-c4df-4684-a824-121a2d2a28f3",
			"name": "Thiago Dias",
			"function": "Frontend Developer",
			"contacts": [
				{
					"id": "3545362f-c1c1-49f7-84b5-161134eb7648",
					"contact": "thiago@email.com",
					"type": "email"
				}
			]
		},
		{
			"id": "855acc6a-1474-4372-a0a9-b4861c36881d",
			"name": "Vanessa Soares",
			"function": "Frontend",
			"contacts": [
				{
					"id": "f0bda543-2edd-4438-8d4c-7b7324d1e260",
					"contact": "777777777",
					"type": "Telefone"
				}
			]
		}
    ]
}
```

</br></br>

<h3>Update Person</h3>

`PATCH /users/:id`

```json
{
	"name": "Thiago Dias",
	"function": "Developer"
}
```

> In case of sucess:

`PATCH /users/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"contacts": [
		{
			"type": "WhatsApp",
			"contact": "991581286"
		}
	],
	"function": "Developer",
	"name": "Thiago Dias",
	"id": "16a0a270-e553-4077-b3ff-f29a9e305c79"
}

```

<br></br>

<h3>Person Deletion</h3>

`DELETE /users/:id - NO BODY `

> In case of sucess:

`DELETE /users/:id - FORMATO DA RESPOSTA - STATUS 204`

```json
{
	"message": "User successfully deleted"
}
```

</br></br>

### Contacts

<h3>Contacts Registration</h3>

`POST /contacts`

```json
{
	"contact":{
		"contact": "9999999",
		"type": "Whats"
	},
	"owner": "ea5629ed-c4df-4684-a824-121a2d2a28f3"
}
```

> In case of success:

`POST /contacts - STATUS 201`

```json
{
	"message": "Contact successfully created"
}
```

</br></br>

<h3>Update Contact</h3>

`PATCH /contacts/:id`

```json
{
	"type": "Telefone"
}
```

> In case of sucess:

`PATCH /contacts/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"message": "Contact successfully updated"
}

```

<br></br>

<h3>Contact Deletion</h3>

`DELETE /contacts/:id - NO BODY `

> In case of sucess:

`DELETE /contacts/:id - FORMATO DA RESPOSTA - STATUS 204`

```json
{
	"message": "Contact successfully deleted"
}
```

</br></br>