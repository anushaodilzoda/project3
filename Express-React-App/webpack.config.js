plugins: [
        
    // Fixes warning in moment-with-locales.min.js 
    //   Module not found: Error: Can't resolve './locale' in ...
    new webpack.IgnorePlugin(/\.\/locale$/)
]