# Developer Portfolio - Krystal Williams

## Introduction to the Technology

This portfolio revision is my first foray into [GatsbyJS](https://www.gatsbyjs.org/), "a static PWA (progressive web app) generator" that "lets you build blazing fast sites with your data, whatever the source."

For this first project, I'm customizing one of the Gatsby V2 starters: [gatsby-starter-forty](https://www.gatsbyjs.org/starters/codebushi/gatsby-starter-forty/) designed by HTML5 UP and made available courtesy the [GatsbyJS Starter Library](https://www.gatsbyjs.org/starters/?v=2)

## Contents

This portfolio contains my projects, proficiencies, and current code interests.


# Information Provided By Gatsby JS:

## Preview

https://gatsby-forty.surge.sh

## Installation

Install this starter (assuming Gatsby is installed) by running from your CLI:
<br/>
`gatsby new gatsby-starter-forty https://github.com/codebushi/gatsby-starter-forty`

Run `gatsby develop` in the terminal to start the dev site.

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
<div className="grid-wrapper">
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
</div>
```
