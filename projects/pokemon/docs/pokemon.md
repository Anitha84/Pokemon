# Pokemon application

## Preconditions
1. Install the current [node.js](https://nodejs.org/en) lts version
2. Install all recommendations from `.vscode/extensions.json`
3. Install pnpm: `npm install -g pnpm@latest`
4. Install dependencies from root directory: `pnpm install`
5. After hitting `F5` and successfully compilation open the browser on [http://localhost:4200](http://localhost:4200)

## [Pokemon API](https://pokeapi.co/)
In this coding session we will use the public [pokemon api](https://pokeapi.co/).

### Tasks
- [ ] Generate a new ``solution`` component in which you will continue to work on
- [ ] Inject the new component into the app component
- [ ] Show a list of the first pokemon names
- [ ] Add a pagination, so a user can:
  - [ ] change the size of shown items
  - [ ] switch to the `next` page
  - [ ] switch to the `previous` page
  - [ ] switch to the `first` page
- [ ] Create a grid-view with some pokemon with the following properties:
  - [ ] Name
  - [ ] Hight
  - [ ] Weight
- [ ] The user can switch between the list and grid view

## Some hints
- In this session you work with [Angular 13](https://v13.angular.io/docs)
- You should use [angular material](https://material.angular.io/)
- Event-Based development (Observables) is important and necessary for pagination and retrieval data from apis
- In this context, [rxjs](https://rxjs.dev/guide/overview) is also important
- This task should help us to get a better picture of your skills. So feel free to use all your knowledge and pay attention to:
  - Style guides
  - Structure
  - Quality

