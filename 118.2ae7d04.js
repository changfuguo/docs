webpackJsonp([118],{163:function(s,a){s.exports='<section><h1>Badge</h1> <blockquote> <p>Highlight new items/unread notifications.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Badge } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Badge.name, Badge);\n</code></pre> <h2>Usage</h2> <p>Configure size</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-badge</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"small"</span>&gt;</span>30<span class=hljs-tag>&lt;/<span class=hljs-name>mt-badge</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-badge</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"normal"</span>&gt;</span>10<span class=hljs-tag>&lt;/<span class=hljs-name>mt-badge</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-badge</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"large"</span>&gt;</span>10<span class=hljs-tag>&lt;/<span class=hljs-name>mt-badge</span>&gt;</span>\n</code></pre> <p>And type</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-badge</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"primary"</span>&gt;</span>30<span class=hljs-tag>&lt;/<span class=hljs-name>mt-badge</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-badge</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"error"</span>&gt;</span>10<span class=hljs-tag>&lt;/<span class=hljs-name>mt-badge</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-badge</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"success"</span>&gt;</span>10<span class=hljs-tag>&lt;/<span class=hljs-name>mt-badge</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-badge</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"warning"</span>&gt;</span>10<span class=hljs-tag>&lt;/<span class=hljs-name>mt-badge</span>&gt;</span>\n</code></pre> <p>Even color</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-badge</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"small"</span> <span class=hljs-attr>color</span>=<span class=hljs-string>"#888"</span>&gt;</span>custom color<span class=hljs-tag>&lt;/<span class=hljs-name>mt-badge</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>type</td> <td>type of the badge</td> <td>String</td> <td>primary, error, success, warning</td> <td>primary</td> </tr> <tr> <td>color</td> <td>CSS color value</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>size</td> <td>size of the badge</td> <td>String</td> <td>normal, large, small</td> <td>normal</td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>test content</td> </tr> </tbody> </table></div></section>'},26:function(s,a,t){s.exports=t(290)},290:function(s,a,t){var n,l,p={};l=t(163),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports.default);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(e.template=l),e.computed||(e.computed={}),Object.keys(p).forEach(function(s){var a=p[s];e.computed[s]=function(){return a}})}});