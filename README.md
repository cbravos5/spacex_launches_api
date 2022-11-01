# 📝 Summary

- [About](#about)
- [Starting](#getting_started)
- [Usage](#usage)
- [Built using](#built_using)

# 🧐 About <a name = "about"></a>

This API communicates with the Spacex API to retrive information about the next, latest, previous and upcoming launches.
Is uses the query route of SpaceX api ([Read Docs](https://github.com/r-spacex/SpaceX-API)) to retrive paged data responses.

The project was structured using decoupled services, which facilitates testing and adapter changes.

## Routes

### **Next Launch**

    GET /spacex-launches-api/next

**Response interface**
```json
  "links": {
      "youtubeId": string,
      "article": string,
      "wikipedia": string,
      "redditCampaign": string,
  },
  "rocket": string,
  "launchpad": string,
  "success": boolean,
  "details": string,
  "flightNumber": number,
  "name": string,
  "dateUtc": string,
  "upcoming": boolean,
  "id": string,
```

### **Latest Launch**

    GET /spacex-launches-api/latest

**Response interface**
```json
  "links": {
      "youtubeId": string,
      "article": string,
      "wikipedia": string,
      "redditCampaign": string,
  },
  "rocket": string,
  "launchpad": string,
  "success": boolean,
  "details": string,
  "flightNumber": number,
  "name": string,
  "dateUtc": string,
  "upcoming": boolean,
  "id": string,
```

### **Previous Launches**

    GET /spacex-launches-api/previous/:page

**Response interface**
```json
  "launches": { 
    "links": {
      "youtubeId": string,
      "article": string,
      "wikipedia": string,
      "redditCampaign": string,
    },
    "rocket": string,
    "launchpad": string,
    "success": boolean,
    "details": string,
    "flightNumber": number,
    "name": string,
    "dateUtc": string,
    "upcoming": boolean,
    "id": string,
  }[],
  "hasPrevPage": boolean,
  "hasNextPage": boolean,
```

### **Upcoming Launches**

    GET /spacex-launches-api/upcoming/:page

**Response interface**
```json
  "launches": { 
    "links": {
      "youtubeId": string,
      "article": string,
      "wikipedia": string,
      "redditCampaign": string,
    },
    "rocket": string,
    "launchpad": string,
    "success": boolean,
    "details": string,
    "flightNumber": number,
    "name": string,
    "dateUtc": string,
    "upcoming": boolean,
    "id": string,
  }[],
  "hasPrevPage": boolean,
  "hasNextPage": boolean,
```

## ⛏️ Built using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Express](https://expressjs.com/) - Server Framework
- [Typescript](https://www.typescriptlang.org/) - Main language
