const {
    override,
    addWebpackAlias,
    addDecoratorsLegacy,
    adjustStyleLoaders,

} = require('customize-cra')
const path = require('path')

module.exports = override(
    addWebpackAlias({
        "~": path.resolve(__dirname, "src")
    }),
    addDecoratorsLegacy(),
    adjustStyleLoaders(rule => {
        if (rule.test.toString().includes('scss')) {
            rule.use.push({
                loader: require.resolve('sass-resources-loader'),
                options: {
                    resources: [
                        './src/assets/styles/mixin.scss',
                    ]
                }
            });
        }
    })
)