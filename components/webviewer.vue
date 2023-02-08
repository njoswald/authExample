<template>
    <div id="webviewer" ref="viewer"></div>
</template>

<script>

export default{
    name: 'WebViewer',
    props: {
        path: String,
        url: String,
    },
    mounted: function () {
        import('@pdftron/webviewer').then(async () => {
            WebViewer({
                path: '../webviewer',
                initialDoc: this.url,
                // fullAPI: true
            }, this.$refs.viewer).then(async (instance) => {
                
            })
        })
    }
}
</script>