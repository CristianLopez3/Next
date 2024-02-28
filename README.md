# Next JS 

install 

```sh
  npx create-next-app@latest
```

### reserved name files

* page : create a new page
* layout : create a new layout that wraps sibling and nested pages
* not-found : fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)
* error : Fallback page for other errors
* loading : fallback page which is shown whilst sibling or nestes pages (or layouts) are fetching data
* route : allows you to create an API route

>[!TIP]
> visit: [next documentation](https://nextjs.org/docs/app/api-reference/file-conventions)

### Move to production
```sh
  npm run build
  npm start
```

### Storing images in AWS 3