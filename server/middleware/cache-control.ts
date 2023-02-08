export default defineEventHandler((event) => {
    let res=event.node.res;
    res.setHeader('Cache-Control', `public, max-age=6000`);
    // res.setHeader('Cache-Control', `no-store`);
})