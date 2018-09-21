# Custom Elements Video XAPI

# Quickstart

## First Time

```bash
git clone git@github.com:garajo/custom-elements-video-xapi.git
cd custom-elements-video-xapi
npm install
npm run build
```

## Run hot loading dev environment

Use this when you're writing new happy code!

__afterwards__
```
npm run dev
```

visit `localhost:5001` in your browser

## Run preview server

```bash
npm start
```
visit `localhost:5001` in your browser

# Motivations and Features

## Custom Elements

An emerging W3C standard is in using [`custom elements`](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). Custom elements allow HTML authors to add additional functionality using HTML tags beyound the standardized tagname set. I think this would be beneficial in getting content authors for ID to use web standards for their instructional design or elearning implementations. This implementation currently starts with several custom elements to allow content authors to change properties of the application and create new video-quiz applications.

ref: https://github.com/garajo/custom-elements-video-xapi/blob/master/public/index.html#L33

```html
<!-- change youtube video id -->
<video-quiz-xapi videoid="ItZN6o0ylao" >
...
</video-quiz-xapi>
>
```

```html
<!-- define video sections -->
<!-- TODO: revise and connect "play video section" to work with video sections -->
<data-json>
  [{
    "starttime": "0:18",
    "endtime": "0:29",
    "sectionTitle": "Doctype",
    "contentIndex": 1
  }, ...]
<data-json>
```

```html
<!-- holds custom element questions such as true/false and multiple choice -->
<quiz-collection answerid="se98aoeu" title="Be an HTML expert!" >
  <!-- <true-false /> -->
</quiz-collection>
```

```html
<!-- create a true/false question -->
<true-false >
  The <code>Doctype</code> tag is a signal to the browser to run traditional HTML
</true-false>

```

```html
<multiple-choice id="q3" mctype="multi-select" >
  <p>Which are standard element of html?</p>
  <mc-option value="head" >
    head
  </mc-option>
  <mc-option value="body" >
    body
  </mc-option>
</multiple-choice>
```

## Grading

A flow and server is provided to save answers and grade quiz attempts.

![gified](https://user-images.githubusercontent.com/2825366/45721619-91f67180-bb5d-11e8-8676-9624b9805b82.gif)

## XAPI

The primary objective associated with xapi is in defining a recipe/profile, that would be generic however not yet defined in the [profiles registry](https://registry.tincanapi.com/#home/profiles) or the [xapi-authored-profiles](https://github.com/adlnet/xapi-authored-profiles). The intent is to develop an elearning UI application that has a standardized profile structure not yet addressed by either registry. By including an assessment piece, the quiz collection, it can be made to represent an atomic elearning implementation with a standardized vocabulary for learning analysis.

Profiles are critical in that they define how the data should be parametized, which is invaluable for development and learning analysis, especially when involving machine learning interpretations. Various interpretation of the same actions and activities make it much harder for machine-applied analyis, because additional (neural-network) layers would have to be applied to differentiate or assimilate. Having recipes pre-defined should facilitate data mining of XAPI.

For now, only launched is recorded. When you have launched the webpage, check out https://xapi.com/wp-content/assets/ClientPrototypes/StatementViewer/index.html to see your xapi statement.

## Svelte

The `svelte` framework is a new paradigm of JavaScript, that is proving itself to be much faster that current popular frameworks using runtime JS such as React, Angular, and others. https://www.stefankrause.net/wp/?p=431 .  Svelte compiles to native JS, HTML, and CSS, eliminating runtime JS processes to speed things up. However, React is also doing work on this paradigm and would go faster. https://twitter.com/trueadm/status/1002812303824314369

