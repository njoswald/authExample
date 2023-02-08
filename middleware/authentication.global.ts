export default defineNuxtRouteMiddleware((to) => {
    console.log("check global off");
    if (to.meta.auth === false) {
        return
    }

    console.log("check auth status");
    const { status, signIn } = useSession()
    if (status.value === 'authenticated') {
        return
    }

    const authConfig = useRuntimeConfig().public.auth

    console.log("check 404 page");
    if (authConfig.globalMiddlewareOptions.allow404WithoutAuth) {
        const matchedRoute = to.matched.length > 0
        if (!matchedRoute) {
        // Hands control back to `vue-router`, which will direct to the `404` page
        return
        }
    }

    console.log("signin");
    return signIn(undefined, { callbackUrl: to.fullPath }) as ReturnType<typeof navigateTo>
})