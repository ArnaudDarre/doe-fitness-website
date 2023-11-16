# Doe Fitness

Embark on a transformative odyssey toward holistic well-being and discover the empowered, confident version of yourself

## Run and deploy

### Run the website locally

- Install [Jekyll](https://jekyllrb.com/). Jekyll is a Ruby Gem that can be installed on most systems ([Installation manual](https://jekyllrb.com/docs/installation/)).

- Run the website in development mode

```
jekyll serve
```

> Local URL: [localhost:4000](http://localhost:4000)

### Deployment

On branch develop

```
git pull origin production &&
  git push &&
  git checkout production &&
  git pull origin develop &&
  git push &&
  git checkout develop
```

Deployment is automated with Netlify. The production environment is deployed automatically when the branch `production` is pushed.

| Environment | Branch | URL |
| --- | --- | --- |
| Staging | develop | |
| Production | production | [doefitness.arnaud-darre.com](https://doefitness.arnaud-darre.com/) |

## Dependencies & Methodologies

### SASS

Styling is powered with Sass, a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
Style files are located in the assets/_sass folder. You don't need to run any additional command to compile, it does it automatically with `jekyll serve` ([installation manual](https://sass-lang.com/install)).

### Jekyll plugins

#### Jekyll Inline SVG

SVG optimizer and inliner for jekyll ([documentation](https://github.com/sdumetz/jekyll-inline-svg)).

#### Compress

A Jekyll layout that compresses HTML ([documentation](http://jch.penibelst.de/)).
