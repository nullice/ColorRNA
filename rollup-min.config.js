/**
 * Created by nullice on 2017/4/5.
 */

import uglify from 'rollup-plugin-uglify';
export default {
    entry: 'src/ColorRNA.js',
    format: 'umd',
    moduleName:"ColorRNA",
    dest: 'bin/ColorRNA.min.js', // equivalent to --output,
    plugins: [
        uglify()
    ]
};
