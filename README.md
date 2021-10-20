# Frontend Mentor - REST Countries API with color theme switcher solution

Hi! Thanks for checking out this repository.

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Some code snippets I am pretty proud of](#some-code-snippets-i-am-pretty-proud-of)
- [Useful resources](#useful-resources)
- [Author](#author)

## The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

## Screenshot

![](./screen01.png)
![](./screen03.png)
![](./screen02.png)

## Links

- Solution URL: [https://www.frontendmentor.io/solutions/nextjsrestcountriesapi-zdnrmSvzL](https://www.frontendmentor.io/solutions/nextjsrestcountriesapi-zdnrmSvzL)
- Live Site URL: [https://nextjs-rest-countries-api.vercel.app/](https://nextjs-rest-countries-api.vercel.app/)

## Built with

- Semantic HTML5 markup
- Flexbox
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [React Ionicons](https://www.npmjs.com/package/react-ionicons)
- [React infinite scroll component](https://www.npmjs.com/package/react-infinite-scroll-component)

## What I learned

The "advanced" challenges provided by Frontend Mentor can get really challenging: still, I enjoyed working on it as it helped me consolidate once again my knowledge of NextJS and dynamic routing.

I also decided to give styled components' `ThemeProvider` a try - what a powerful tool!

I was also surprised to see how easy it is to implement infinite scrolling with the `react-infinite-scrolling-component`.

## Some code snippets I am pretty proud of

The REST Countries API is fast, free and pretty intuitive to use.

Still, it gives back so much information that it can sometimes get a bit messy to figure out how exactly to extract what you need.

```js
<div>
  {country.borders && (
    <span>
      Border Countries:
      {Object.values(country.borders).map((border) => (
        <Link href={`/${border}`} key={border} passHref>
          <span className='border'>{` ${border} `}</span>
        </Link>
      ))}
    </span>
  )}
</div>
```

## Useful resources

- [How to use Themes in styled-components](https://dev.to/aromanarguello/how-to-use-themes-in-styled-components-49h)

## Author

- Website - [alessioitalo](https://www.alessioitalo.uk)
- Frontend Mentor - [@alessioitalo](https://www.frontendmentor.io/profile/alessioitalo)
- Twitter - [@alessioitalo](https://www.twitter.com/alessioitalo)
