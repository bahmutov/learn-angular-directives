# learn-angular-directives

> Self-directed study of Angular 1 built-in directives, including a homework assignment

## Angular 1 directives

After completing this study you will be able to:

* Understand the value of `ng-repeat`
* Use `ng-if`, `ng-switch` and `ng-class`
* Find the various event directives available such as `ng-focus`
* Use event directives to call methods in a controller

### Installation

While all these examples require just a static page and can be inspected, modified
and shown by open the included `index.html` file.

    git clone git@github.com:bahmutov/learn-angular-directives.git
    cd learn-angular-directives
    open index.html

I assume a modern browser with good Developer Tools, like Chrome.

We are going to start with a pretty simple page, but the important thing to notice
is the mock content and styles. The Angular framework shines when it is applied to
an existing static page, created by a designer. With a few built-in directives we
can bring a page to life!

The page will look something like this

![initial page](images/initial.png)

If you inspect the page [index.html](index.html) you will find a LOT of static markup,
something like this

```html
<div class="row">
  <div class="card-group">
    <div class="card card-block">
      <h4 class="card-title"><span class="label label-success">1</span> Florence, Italy</h4>
      <p class="card-text">Though Rome is ...</p>
    </div>
    <div class="card card-block">
      <h4 class="card-title"><span class="label label-info">2</span> Budapest, Hungary</h4>
      <p class="card-text">With some of the ...</p>
    </div>
  </div>
</div>
```

The page shows a list of cities as rated by CNN's Reader's Choice [source][cities-ref].
You might disagree with the ratings, but let us just concentrate on making the page better
using Angular.

[cities-ref]: http://www.cntraveler.com/galleries/2014-10-20/top-25-cities-in-the-world-readers-choice-awards-2014/30

## Showing list of items using `ng-repeat`

We start making our static page dynamic by removing all the duplicate markup and
replacing it with a single template that will iterate over a list with actual data.
All data (cities, rankings, links) will be in a single Array attached to the `$scope`
object, while the markup will just render it using `ng-repeat` directive.

First, read the information about the `ng-repeat` at the official AngularJS website.
[Here][ng-repeat] is a direct link, but I usually just Google the `ng-repeat directive`
sentence to find it. Notice that there are [other directives][directives] described
in the docs, if you click the navigation links.

The documentation is pretty long, but all we care is iterating over a plain list of
objects.

[ng-repeat]: https://docs.angularjs.org/api/ng/directive/ngRepeat
[directives]: https://docs.angularjs.org/api/ng/directive

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/learn-angular-directives/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
