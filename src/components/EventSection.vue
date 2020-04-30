<template>
    <div>
        <b-carousel
                id="SlideShow"
                :interval="4000"
                indicators
                background="#cdcdcd"
                width="1920"
                height="720"
        >

            <b-carousel-slide
                caption="Caption"
                text="Text Text Text Text Text Text Text Text"
            >
                <template v-slot:img>
                    <img
                            class="h-720 d-block img-fluid w-100"
                            src="../assets/images/bg.png"
                            alt="image slot"
                    >
                </template>


            </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                    <img
                            class="h-720 d-block img-fluid w-100"
                            src="../assets/images/bg.png"
                            alt="image slot"
                    >
                </template>
                <div class="navigator">
                    <a href="#" aria-label="prev" role="button" class="carousel-control-prev">
                        <span class="carousel-control-prev-icon"></span>
                        <span class="sr-only">Previous Slide</span>
                    </a>

                    <div class="content">
                        <h1>AAA</h1>
                        <p>AAAbbbcccddd</p>
                    </div>

                    <a href="#" aria-label="next" role="button" class="carousel-control-next">
                        <span class="carousel-control-next-icon"></span>
                        <span class="sr-only">Next Slide</span>
                    </a >
                </div>
            </b-carousel-slide>

        </b-carousel>
    </div>
</template>

<script>
    import { BCarousel, BCarouselSlide } from 'bootstrap-vue'

    export default {
        name: 'EventSection',
        components: {
            BCarousel,
            BCarouselSlide
        },
        methods: {
            prev() {
                this.$refs.SlideShow.prev()
            },
            next() {
                this.$refs.SlideShow.next()
            }
        }
    }
</script>

<style scoped>

    .h-720{
        object-fit: cover;
        height: 720px;
    }

    .navigator{
        position: relative;
        z-index: 1;
        background-color: rgba(85,85,85,0.5);
        width: 100%;
        height: 500px;
        transform: translate(0%, -10%);
    }

    .navigator a {
        background-color: rgba(85, 85, 85, 1);
        width: 10%;
    }

    img{
        object-fit: cover;
        max-height: 720px;
    }

    .content{
        margin: 15%;
        text-align: left;
    }

</style>