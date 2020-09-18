<template>
    <div>
        <h1>Contacts</h1>
        <p>E-mail: qwerty@gmail.com</p>
        <p>Tel: +380934567890</p>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="500" height="500" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=kyiv&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
                <a href="https://www.embedgooglemap.net">embed google map</a>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>
    div {
        margin: 0 auto;
        text-align: center;
    }
    .mapouter{position:relative;text-align:right;height:500px;width:500px;}
    .gmap_canvas {overflow:hidden;background:none!important;height:500px;width:500px;}
</style>