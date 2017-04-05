/**
 * Created by nullice on 2017/4/5.
 */


import { rollup } from 'rollup';
import uglify from 'rollup-plugin-uglify';

rollup({
    entry: 'src/ColorRNA.js',
    format: 'umd',
    moduleName:"ColorRNA",
    dest: 'bin/ColorRNA.min.js', // equivalent to --output
    plugins: [
        uglify()
    ]
});



