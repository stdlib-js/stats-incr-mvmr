<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmvmr

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving [variance-to-mean ratio][variance-to-mean-ratio] (VMR) incrementally.

<section class="intro">

For a window of size `W`, the [unbiased sample variance][sample-variance] is defined as

<!-- <equation class="equation" label="eq:unbiased_sample_variance" align="center" raw="s^2 = \frac{1}{W-1} \sum_{i=0}^{W-1} ( x_i - \bar{x} )^2" alt="Equation for the unbiased sample variance."> -->

<div class="equation" align="center" data-raw-text="s^2 = \frac{1}{W-1} \sum_{i=0}^{W-1} ( x_i - \bar{x} )^2" data-equation="eq:unbiased_sample_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b331e5634fe726ff0e16e87814ac3f85d8164d31/lib/node_modules/@stdlib/stats/incr/mvmr/docs/img/equation_unbiased_sample_variance.svg" alt="Equation for the unbiased sample variance.">
    <br>
</div>

<!-- </equation> -->

and the [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i" alt="Equation for the arithmetic mean."> -->

<div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@164b8f1010c4535340eed9ad0b2af32c4a19863c/lib/node_modules/@stdlib/stats/incr/mvmr/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div>

<!-- </equation> -->

The [variance-to-mean ratio][variance-to-mean-ratio] (VMR) is thus defined as

<!-- <equation class="equation" label="eq:variance_to_mean_ratio" align="center" raw="F = \frac{s^2}{\bar{x}}" alt="Equation for the variance-to-mean ratio (VMR)."> -->

<div class="equation" align="center" data-raw-text="F = \frac{s^2}{\bar{x}}" data-equation="eq:variance_to_mean_ratio">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b331e5634fe726ff0e16e87814ac3f85d8164d31/lib/node_modules/@stdlib/stats/incr/mvmr/docs/img/equation_variance_to_mean_ratio.svg" alt="Equation for the variance-to-mean ratio (VMR).">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-mvmr
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var incrmvmr = require( '@stdlib/stats-incr-mvmr' );
```

#### incrmvmr( window\[, mean] )

Returns an accumulator `function` which incrementally computes a moving [variance-to-mean ratio][variance-to-mean-ratio]. The `window` parameter defines the number of values over which to compute the moving [variance-to-mean ratio][variance-to-mean-ratio].

```javascript
var accumulator = incrmvmr( 3 );
```

If the mean is already known, provide a `mean` argument.

```javascript
var accumulator = incrmvmr( 3, 5.0 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated accumulated value. If not provided an input value `x`, the accumulator function returns the current accumulated value.

```javascript
var accumulator = incrmvmr( 3 );

var F = accumulator();
// returns null

// Fill the window...
F = accumulator( 2.0 ); // [2.0]
// returns 0.0

F = accumulator( 1.0 ); // [2.0, 1.0]
// returns ~0.33

F = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 0.5

// Window begins sliding...
F = accumulator( 7.0 ); // [1.0, 3.0, 7.0]
// returns ~2.55

F = accumulator( 5.0 ); // [3.0, 7.0, 5.0]
// returns ~0.80

F = accumulator();
// returns ~0.80
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

-   The following table summarizes how to interpret the [variance-to-mean ratio][variance-to-mean-ratio]:

    |        VMR        |   Description   |     Example Distribution     |
    | :---------------: | :-------------: | :--------------------------: |
    |         0         |  not dispersed  |           constant           |
    | 0 &lt; VMR &lt; 1 | under-dispersed |           binomial           |
    |         1         |        --       |            Poisson           |
    |         >1        |  over-dispersed | geometric, negative-binomial |

    Accordingly, one can use the [variance-to-mean ratio][variance-to-mean-ratio] to assess whether observed data can be modeled as a Poisson process. When observed data is "under-dispersed", observed data may be more regular than as would be the case for a Poisson process. When observed data is "over-dispersed", observed data may contain clusters (i.e., clumped, concentrated data).

-   The [variance-to-mean ratio][variance-to-mean-ratio] is typically computed on nonnegative values. The measure may lack meaning for data which can assume both positive and negative values.

-   The [variance-to-mean ratio][variance-to-mean-ratio] is also known as the **index of dispersion**, **dispersion index**, **coefficient of dispersion**, **relative variance**, and the [**Fano factor**][fano-factor].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrmvmr = require( '@stdlib/stats-incr-mvmr' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmvmr( 5 );

// For each simulated datum, update the moving variance-to-mean ratio...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/mmean`][@stdlib/stats/incr/mmean]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mvariance`][@stdlib/stats/incr/mvariance]</span><span class="delimiter">: </span><span class="description">compute a moving unbiased sample variance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/vmr`][@stdlib/stats/incr/vmr]</span><span class="delimiter">: </span><span class="description">compute a variance-to-mean ratio (VMR) incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mvmr.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mvmr

[test-image]: https://github.com/stdlib-js/stats-incr-mvmr/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-mvmr/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mvmr/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mvmr?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mvmr.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mvmr/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mvmr/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-mvmr/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-mvmr/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-mvmr/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mvmr/main/LICENSE

[variance-to-mean-ratio]: https://en.wikipedia.org/wiki/Index_of_dispersion

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[sample-variance]: https://en.wikipedia.org/wiki/Variance

[fano-factor]: https://en.wikipedia.org/wiki/Fano_factor

<!-- <related-links> -->

[@stdlib/stats/incr/mmean]: https://github.com/stdlib-js/stats-incr-mmean

[@stdlib/stats/incr/mvariance]: https://github.com/stdlib-js/stats-incr-mvariance

[@stdlib/stats/incr/vmr]: https://github.com/stdlib-js/stats-incr-vmr

<!-- </related-links> -->

</section>

<!-- /.links -->
