# Backend API Documentation

## Navigation Links

- [Forum List](#forum-list)
- [News List](#news-list)
- [News Comments List](#news-comments-list)
- [User List](#user-list)
- [Sign Up](#sign-up)
- [Sign In](#sign-in)
- [Get new access token](#get-new-access-token)

---

## Forum List

### Route
- `api/forum`

### Description
- Get a list of forums.

### Method
- GET

### Expected Input
- None

### Expected Output
```json
[
    {
        "thread_id": 1,
        "creator": "string",
        "content": "string",
        "category": "string"
    },
    {
        "thread_id": 2,
        "creator": "string",
        "content": "string",
        "category": "string"
    },
]
```

---

## News List

### Route
- `api/news`

### Description
- Get a list of news.

### Method
- GET

### Expected Input
- None

### Expected Output
```json
[
    {
        "newsId": int,
        "title": string,
        "category": string,
        "creationDate": string,
        "text": string,
        "mainImg": string,
        "logoImg": string,
        "likes": int,
        "comments": []
    }
]
```

---


---

## News List

### Route
- `api/news/post-create`

### Description
- Get a list of news.

### Method
- GET

### Expected Input
```json
[
    {
        "title": string,
        "category": string,
        "text": string,
        "mainImg": file,
        "logoImg": file
    }
]
```

### Expected Output
```json
[
    {
        "newsId": int
    }
]
```
---

## Sign Up

### Route
- `api/auth/signup`

### Description
- Create a new user account.

### Method
- POST

### Expected Input
```json
{
    "nickname": "string",
    "password": "string",
    "email": "user@example.com"
}
```

### Expected Output
```json
{
    "accessToken": "JWT_TOKEN",
    "refreshToken": "JWT_TOKEN"
}
```

---

## Sign In

### Route
- `api/signin`

### Description
- Authenticate and sign in a user.

### Method
- POST

### Expected Input
```json
{
    "nickname": "string",
    "password": "string"
}
```

### Expected Output
```json
{
    "accessToken": "JWT_TOKEN",
    "refreshToken": "JWT_TOKEN"
}
```

---

---

## Get new access token

### Route
- `api/auth/signin/access-token`

### Description
- Update current access token.

### Method
- POST

### Expected Input
```json
{
    "accessToken": "JWT_TOKEN",
    "refreshToken": "JWT_TOKEN"
}
```

### Expected Output
```json
{
    "accessToken": "JWT_TOKEN"
}
```

---
