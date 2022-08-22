import copy from "rollup-plugin-copy";
import postcssUrl from "postcss-url";

const cssUrlTransform = asset => {
    const outWidgetDirForwardSlash = outWidgetDir.replace(/\\/g, "/")
    return asset.url.startsWith(`${assetsDirName}/`) ? `${outWidgetDirForwardSlash}/${asset.url}` : asset.url;
}

export default args => {
    const result = args.configDefaultConfig;
    console.warn ('Custom roll up')
    return result.map((config) => {
                config.output.inlineDynamicImports = true
                console.warn ("Set dynamic imports")
                const plugins = config.plugins || []
                config.plugins = [
                    ...plugins,
                copy({
                        targets: [{ src: "node_modules/@arcgis/core/assets", dest: "dist/tmp/widgets/mendix/arcgismapblog" }
                        ]
                    }),
                    postcssUrl (cssUrlTransform)

                ]  
                return config;
    });
};


