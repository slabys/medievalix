<template>
    <b-sidebar id="sidebar-backdrop" title="Menu" bg-variant="bg_dark" text-variant="light" backdrop shadow>
        <div class="menu h-100" >
            <ul>
                <h1>Informations</h1>
                <a href="#" class="active"><li>Main Page</li></a>
                <a href="#"><li>About server</li></a>
                <a href="#"><li>How to start</li></a>
                <a href="#"><li>Commands</li></a>
            </ul>
            <ul>
                <h1>Game Statistics</h1>
                <a href="#"><li>Game statistics</li></a>
                <a href="#"><li>Shop Overview</li></a>
                <a href="#"><li>Dynmap</li></a>
                <a href="#"><li>Ban list</li></a>
            </ul>
            <ul>
                <h1>Server Community</h1>
                <a href="#"><li>Forum</li></a>
                <a href="#"><li>FAQ</li></a>
                <a href="#"><li>Donations</li></a>
                <a href="#"><li>Contacts</li></a>
            </ul>
        </div>
    </b-sidebar>
</template>

<script>
    export default {
        name: 'Sidebar',
        // props: {
        //     menu: String
        // }
    }
</script>

<style scoped>
    .menu{
        background-color: var(--bg_medium);
    }

    ul{
        list-style-type: square;
    }

    ul h1{
        margin-left: -16px;
        padding-top: 12px;
        font-size: 1.5em;
    }

    li{
        padding: 2px;
        margin-left: 16px;
        font: 1em Merriweather;
    }

    ul a{
        color: var(--text_gray);
    }

    ul a:hover{
         color: var(--text_green);
     }

    .active{
        text-transform: uppercase;
        color: var(--text_green);
    }


</style>