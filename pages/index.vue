<template>  
    <div id="temp1">    
        <h1>Welcome to the homepage</h1>    
        <br/>
        <form :action="authPage" id="passParam">
            <label for="entryId">Go to test page with parameter from form:</label><br/>
            <input id="testParameter" name="testParameter" type="text" value="test">
            <br>
            <input type="submit" value="To Authenticated Page">
	    </form>
        <br/>
        <form :action="webview" id="passParam2">
            <label for="entryId">Go to webviewer page with parameter from form:</label><br/>
            <input id="testParameter" name="testParameter" type="text" value="webview">
            <br>
            <input type="submit" value="To Webview Page">
	    </form>
    </div>
</template>
<script setup>
    definePageMeta({ auth: false })
    const {  status } = useSession()
    console.log(status.value);

    const config = useRuntimeConfig();
    const authPage = config.BASE_URL + 'authPage';
    const webview = config.BASE_URL + 'testWebviewAuth';
</script>
<style>
#temp1{
    margin:30px;
}
#testParameter{
    border-width:2px;
    border-color: black;
}
</style>