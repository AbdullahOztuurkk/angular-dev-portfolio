# Minimal Developer Portfolio 

## A clean, minimal and responsive portfolio template for Developers!

<p align="center">
	<img src="./src/assets/images/portfolio-showcase.gif"></img>
</p>

### Motivation
Creating a portfolio can take a long time since everything might be made from scratch. Moreover, the need of having a portfolio is essential for many developers. Having a nice and clean personal portfolio can impress several companies when applying for jobs or it can be something that developers want to show off to their friends. Therefore, Minimal Developer Portfolio is created to support and help programmers in many ways.

## Table of Contents
- [Sections](#sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [Change and Customize](#change-and-customize-every-section-according-to-your-need)
- [Technologies Used](#technologies-used)
- [License](#license)

## Sections
✔️ About\
✔️ Resume\
✔️ Education in Resume section\
✔️ Job Experience in Resume section\
✔️ Services\
✔️ Testimonials\
✔️ Contact me

To view a live example, **[click here](https://dev-portfolio-en.web.app/)**.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

```
node@v12.18.0 or higher
npm@6.9.0 or higher
git@2.24.0 or higher
```

## How To Use 

From your command line, clone and run devPortfolio :

```bash
# Clone this repository
$ git clone https://github.com/abdullahoztuurkk/DevPortfolio.git

# Go into the repository
$ cd DevPortfolio

# Install dependencies
$ npm install

#Start's development server
$ npm start
```


## Change and customize every section according to your need.

#### Personalize page content in `/src/app/portfolio.ts` & modify it as per your need.

```typescript
/* Change this file to get your Personal Porfolio */

export  const Configuration =

{

profileUrl:"https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

userName:"Abdullah Öztürk",

userJob:"Software Developer",

userLocation:"İstanbul",

.
. 
. 
.

};
export  const Skills =[ . . . ];

export  const JobExperience =[ . . . ];

export  const Education =[ . . . ];

export  const Services =[ . . .];

export  const Testimonials =[ . . . ];

export  const SocialMedia =

{

github:"github.com",

instagram:"instagram.com",

twitter:"twitter.com",

linkedin:"linkedin.com",

medium:"medium.com",

facebook:"facebook.com"

}
```

## Contributing
Just change `src/app/configurations.ts` to get your personal portfolio. Feel free to use it as-is or customize it as much as you want.
 
But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/abdullahoztuurkk/devportfolio/issues).
 
 
If you created something awesome and want to contribute then feel free to open an [pull request](https://github.com/abdullahoztuurkk/devportfolio/pulls).
- Fork the project
- Create a new branch (git checkout -b your-branch)
- Create your new changes then commit your changes (git add . && git commit -n "New changes/issues")
- Push your branch to the project (git push origin your-branch)
- Submit your pull request

## Technologies Used 

- [Angular](https://reactjs.org/)
- [Bootstrap](https://www.apollographql.com/docs/react/get-started/)
- [Font-awesome](https://github.com/saurabhnemade/react-twitter-embed)
- [Bootswatch](https://github.com/appfigures/react-easy-emoji)

## License
 
This project is licensed under the MIT License - see the [LICENSE](https://github.com/AbdullahOztuurkk/angular-dev-portfolio/blob/master/LICENSE.md) file for details.


